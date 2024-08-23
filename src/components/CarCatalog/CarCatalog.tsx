'use client'
import React from 'react'
import SearchBar from '@/components/CarCatalog/SearchBar/SearchBar'
import CarCard from '@/components/CarCatalog/CarCard/CarCard'
import { useAppSelector } from '@/helpers/hooks/reduxHooks'
import { carsSelector, statusSelector } from '@/redux/selectors/selectors'

interface ICarCatalogProps {
  // define your props here
}

const CarCatalog: React.FC<ICarCatalogProps> = ({}) => {
  const cars = useAppSelector(carsSelector)
  const status = useAppSelector(statusSelector)

  return (
    <div className="mx-8 flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">Car catalogue</h2>
        <span>Explore out cars you might like</span>
      </div>
      <SearchBar />
      {status === 'loading' ? (
        <div>LOADING...</div>
      ) : (
        <div className="mx-auto mt-6 flex w-full flex-wrap justify-start gap-6">
          {cars.map((car, i) => {
            return <CarCard key={i} car={car} />
          })}
        </div>
      )}
    </div>
  )
}

export default CarCatalog
