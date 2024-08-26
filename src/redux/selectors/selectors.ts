import { RootState } from '@/redux/store'


export const carsSelector = ((state: RootState) => state.cars.cars)
export const statusSelector = ((state: RootState) => state.cars.status)
export const currentCarSelector = ((state: RootState) => state.cars.currentCar)