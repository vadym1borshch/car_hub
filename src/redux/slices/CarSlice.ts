import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CarType } from '@/components/CarCatalog/CarCard/types'
import axios from 'axios'
import { CarOptionType } from '@/components/CarCatalog/SearchBar/types'

interface CarsState {
  status: 'success' | 'error' | 'loading' | 'idle'
  cars: CarType[]
  currentCar: CarOptionType | null
}

const initialState: CarsState = {
  status: 'idle',
  cars: [],
  currentCar: null,
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCurrentCarAction: (state, action: PayloadAction<CarOptionType>) => {
      state.currentCar = action.payload
    },
    deleteCurrentCarAction: (state) => {
      state.currentCar = null
    },
    setCarsAction: (state, action: PayloadAction<CarType[]>) => {
      state.cars = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarsData.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchCarsData.fulfilled, (state, action) => {
      state.status = 'success'
      state.cars = action.payload
    })
    builder.addCase(fetchCarsData.rejected, (state, action) => {
      state.status = 'error'
    })
  },
})
const apiKey = 'CRIDgfNDHYm7sKHTqNbsDPuFYkMfihk8gxuzemei'

export const { setCurrentCarAction, deleteCurrentCarAction, setCarsAction } = carsSlice.actions

export default carsSlice.reducer

export const fetchCarsData = createAsyncThunk(
  'cars/fetchCarsData',
  async (payload: {
    make?: string
    model?: string
    limit?: number
    year?: number
  }) => {
    const { make, model, year, limit = 10 } = payload
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/cars', {
        headers: {
          'X-Api-Key': apiKey,
        },
        params: {
          make: make ? make : 'Toyota',
          model,
          limit,
          year,
        },
      })
      localStorage.setItem('cars', JSON.stringify(response.data))
      return response.data
    } catch (error: any) {
      console.error(
        'Error fetching data:',
        error.response?.data || error.message
      )
    }
  }
)
