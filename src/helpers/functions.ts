import axios from 'axios'

interface RentalOptions {
  dailyRate: number // Базова вартість оренди за день
  numberOfDays: number // Кількість днів оренди
  discountRate?: number // Знижка (у відсотках) для довготривалої оренди
  insuranceRate?: number // Вартість страховки за день
  additionalFees?: number // Додаткові збори
  mileage: number // Пробіг автомобіля (в кілометрах)
  yearOfManufacture: number // Рік випуску автомобіля
}

export const calculateRentalCost = (options: RentalOptions): number => {
  const {
    dailyRate,
    numberOfDays,
    discountRate = 0,
    insuranceRate = 0,
    additionalFees = 0,
    mileage,
    yearOfManufacture,
  } = options

  const currentYear = new Date().getFullYear()

  const carAge = currentYear - yearOfManufacture

  let baseCost = dailyRate * numberOfDays

  if (mileage > 100000) {
    baseCost *= 0.9
  }

  if (carAge > 10) {
    baseCost *= 0.85
  }

  const insuranceCost = insuranceRate * numberOfDays

  const discount = baseCost * (discountRate / 100)

  const totalCost = baseCost + insuranceCost - discount + additionalFees

  return Math.round(totalCost)
}

export const capitalizeFirstLetter = (word: string): string => {
  if (!word) return ''
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
