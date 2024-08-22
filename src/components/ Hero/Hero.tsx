'use client'
import React from 'react'
import Button from '@/components/common/Button/Button'
import Image from 'next/image'

interface IHeroProps {
  // define your props here
}

const Hero: React.FC<IHeroProps> = ({}) => {
  return (
    <div className="m-8 mt-24">
      <h1 className="flex w-full justify-center text-[56px] font-bold">
        Find, book or rent a car
      </h1>
      <Button onClick={() => {}}>text</Button>
      <div className="relative flex w-full justify-end overflow-hidden">
        <Image
          className="z-30"
          src="/hero.png"
          alt="hero"
          width={600}
          height={600}
          priority={false}
        />
      </div>
    </div>
  )
}

export default Hero
