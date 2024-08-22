'use client'
import React from 'react'
import Image from 'next/image'

interface ICarCardProps {
  // define your props here
}

const CarCard: React.FC<ICarCardProps> = ({}) => {
  return (
    <div className="min-w-[300px] rounded-lg bg-sky-50 p-4 flex-1">
      <div className="flex flex-col gap-2">
        <h2>Toyota Prado</h2>
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
          <span className="text-[12px] text-gray-500">Automatic</span>
        </span>
        <span className="flex flex-col items-center gap-2">
          <Image src={'/tire.svg'} alt={'tire'} width={20} height={20} />
          <span className="text-[12px] text-gray-500">FWD</span>
        </span>
        <span className="flex flex-col items-center gap-2">
          <Image src={'/gas.svg'} alt={'gas'} width={20} height={20} />
          <span className="text-[12px] text-gray-500"> 19 MPG</span>
        </span>
      </div>
    </div>
  )
}

export default CarCard
