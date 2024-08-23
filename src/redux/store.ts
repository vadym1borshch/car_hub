import { configureStore } from '@reduxjs/toolkit'
import carsSlice from '@/redux/slices/CarSlice'

export const store = configureStore({
  reducer: {
    cars: carsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
