'use client'
import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/CarCatalog/SearchBar/SearchBar'
import Select from '@/components/Select/Select'
import CarCard from '@/components/CarCatalog/CarCard/CarCard'
import axios from 'axios'
import { CarType } from '@/components/CarCatalog/CarCard/types'

const apiKey = 'CRIDgfNDHYm7sKHTqNbsDPuFYkMfihk8gxuzemei'

interface ICarCatalogProps {
  // define your props here
}

const CarCatalog: React.FC<ICarCatalogProps> = ({}) => {
  const [cars, setCars] = useState<CarType[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/cars', {
          headers: {
            'X-Api-Key': apiKey,
          },
          params: {
            // Додаткові параметри запиту, якщо необхідно
            make: 'Toyota', // Наприклад, фільтрація по марці автомобіля
            limit: 20,
          },
        })

        setCars(response.data)
      } catch (error: any) {
        console.error(
          'Error fetching data:',
          error.response?.data || error.message
        )
      }
    }

    fetchData()
  }, [])

  return (
    <div className="mx-8 flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">Car catalogue</h2>
        <span>Explore out cars you might like</span>
      </div>
      <SearchBar />

      <div className="mx-auto mt-6 flex w-full flex-wrap justify-start gap-6">
        {cars.map((car, i) => {
          return <CarCard key={i} car={car} />
        })}
      </div>
    </div>
  )
}

export default CarCatalog
