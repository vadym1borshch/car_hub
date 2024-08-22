'use client'
import React from 'react'
import { CarType } from '@/components/CarCatalog/CarCard/types'
import { v4 } from 'uuid'

interface ICarDetailsProps {
  car: CarType
}

const CarDetails: React.FC<ICarDetailsProps> = ({ car }) => {
  const carArr = Object.entries(car).map(([key, value]) => ({
    id: v4(),
    attribute: key,
    value: value,
  }))

  return (
    <div className="flex w-[300px] flex-col gap-8">
      <div>
        <div>main image</div>
        <div>images block</div>
      </div>
      <div>
        <h1>
          {car.make} {car.model}
        </h1>
        <div className="flex flex-col gap-2">
          {carArr.map((el) => {
            return (
              <div key={el.id} className="flex justify-between">
                <span>{el.attribute}</span>
                <span>{el.value}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CarDetails
