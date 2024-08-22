'use client'
import React from 'react'
import SearchBar from '@/components/CarCatalog/SearchBar/SearchBar'
import Select from '@/components/Select/Select'
import CarCard from '@/components/CarCatalog/CarCard/CarCard'

interface ICarCatalogProps {
  // define your props here
}

const CarCatalog: React.FC<ICarCatalogProps> = ({}) => {
  return (
    <div className="mx-8 flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">Car catalogue</h2>
        <span>Explore out cars you might like</span>
      </div>
      <SearchBar />
      <div className="flex justify-center gap-2 sm:justify-start">
        <Select />
        <Select />
      </div>
      <div className="w-full flex flex-wrap gap-6 mt-6 justify-start mx-auto">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  )
}

export default CarCatalog
