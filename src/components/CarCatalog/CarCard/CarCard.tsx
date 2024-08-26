'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Modal } from '@/components/Modal/Modal'
import { CarType } from '@/components/CarCatalog/CarCard/types'
import CarDetails from '@/components/CarCatalog/CarCard/CarDetails'
import axios from 'axios'

interface ICarCardProps {
  car: CarType
  i: number,
  numOfEl: number
}

const CarCard: React.FC<ICarCardProps> = ({ car, i, numOfEl }) => {
  const [newCar, setNewCar] = useState(car)
  const { make, model, transmission, city_mpg, drive, image, year } = newCar
  const [isModalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '45588835-a4ef1477fd216dc63a2a64fc4',
            q: `${make} ${year}`,
            category: 'cars',
            image_type: 'photo',
            per_page: numOfEl,
          },
        })
        setNewCar({...car, image: response.data.hits[i].webformatURL})
      } catch (error) {
        console.error('Error fetching images:', error)
        return []
      }
    }
    fetchImage()
  }, [car, i, make, model, newCar.make, newCar.model, numOfEl, year])

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
          <Image src={image ? image : "/hero.png"} alt="auto" width={250} height={200} style={{ width: "250px", height: "200px" }}/>
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
            <Image src={'/gas.svg'} alt={'gas'} width={20} height={20}  style={{ width: "20px", height: "20px" }}/>
            <span className="text-[12px] text-gray-500"> {city_mpg} MPG</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default CarCard
