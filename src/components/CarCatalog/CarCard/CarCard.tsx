'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Modal } from '@/components/Modal/Modal'
import { CarType } from '@/components/CarCatalog/CarCard/types'
import CarDetails from '@/components/CarCatalog/CarCard/CarDetails'

interface ICarCardProps {
  car: CarType
}

const CarCard: React.FC<ICarCardProps> = ({ car }) => {
  const { make, model, transmission, city_mpg, drive } = car
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <CarDetails car={car}/>
      </Modal>
      <div
        className="min-w-[300px] flex-1 rounded-lg bg-sky-50 p-4"
        onClick={() => setModalOpen(true)}
      >
        <div className="flex flex-col gap-2">
          <h2>
            {make} {model}
          </h2>
          <div className="relative">
            <span className="absolute top-[-7px] text-[14px] text-gray-500">
              $
            </span>
            <span className="pl-[6px] text-2xl font-bold">53</span>
            <span className="absolute top-[14px] text-[14px] text-gray-500">
              /day
            </span>
          </div>
        </div>
        <div className="mt-6 flex w-full justify-center">
          <Image src="/hero.png" alt="auto" width={250} height={200} />
        </div>
        <div className="mt-6 flex w-full justify-between">
          <span className="flex flex-col items-center gap-2">
            <Image
              src={'/steering-wheel.svg'}
              alt={'steering-wheel'}
              width={20}
              height={20}
            />
            <span className="text-[12px] text-gray-500">
              {transmission === 'a' ? 'Automatic' : 'mechanic'}
            </span>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Image src={'/tire.svg'} alt={'tire'} width={20} height={20} />
            <span className="text-[12px] text-gray-500">{drive}</span>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Image src={'/gas.svg'} alt={'gas'} width={20} height={20} />
            <span className="text-[12px] text-gray-500"> {city_mpg} MPG</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default CarCard
