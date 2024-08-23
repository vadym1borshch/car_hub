'use client'
import React, { useState } from 'react'
import { CarType } from '@/components/CarCatalog/CarCard/types'
import { v4 } from 'uuid'
import Image from 'next/image'
import { capitalizeFirstLetter } from '@/helpers/functions'
import { Modal } from '@/components/Modal/Modal'
import useBreakpoint from '@/helpers/hooks/useBreakpoint'

interface ICarDetailsProps {
  car: CarType
}

const CarDetails: React.FC<ICarDetailsProps> = ({ car }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const carArr = Object.entries(car).map(([key, value]) => ({
    id: v4(),
    attribute: key,
    value: value,
  }))

  const screenSize = useBreakpoint()

  return (
    <div className="flex w-[300px] flex-col gap-8 sm:w-[400px]">
      <div className="flex flex-col gap-4">
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <Image
            src="/hero.png"
            alt="auto"
            width={screenSize === 'sm' ? 280 : 380}
            height={200}
          />
        </Modal>
        <div className="flex items-center justify-center bg-[url('/pattern.png')] bg-no-repeat">
          <Image src="/hero.png" alt="auto" width={280} height={90} />
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <div
            onClick={() => setModalOpen(true)}
            className="flex items-center justify-center rounded-lg bg-sky-100 px-2 py-4"
          >
            <Image
              src="/hero.png"
              alt="auto"
              width={screenSize === 'sm' ? 90 : 125}
              height={90}
            />
          </div>
          <div className="flex items-center rounded-lg bg-sky-100 px-2 py-4">
            <Image
              src="/hero.png"
              alt="auto"
              width={screenSize === 'sm' ? 90 : 125}
              height={90}
            />
          </div>
          <div className="flex items-center rounded-lg bg-sky-100 px-2 py-4">
            <Image
              src="/hero.png"
              alt="auto"
              width={screenSize === 'sm' ? 90 : 125}
              height={90}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-4 text-2xl font-bold">
          {capitalizeFirstLetter(car.make)} {capitalizeFirstLetter(car.model)}
        </h1>
        <div className="flex flex-col gap-2">
          {carArr.map((el) => {
            return (
              <div
                key={el.id}
                className="flex justify-between font-bold text-sky-500"
              >
                <span>{capitalizeFirstLetter(el.attribute)}</span>
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
