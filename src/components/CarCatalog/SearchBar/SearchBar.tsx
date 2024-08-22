'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SearchBarInput from '@/components/CarCatalog/SearchBar/SearchBarInput/SearchBarInput'
import { carMakes, carModels } from '@/components/CarCatalog/CarCard/mock'
import Select from '@/components/Select/Select'
import { Option } from '@/components/CarCatalog/SearchBar/types'

interface ISearchBarProps {
  // define your props here
}

const SearchBar: React.FC<ISearchBarProps> = ({}) => {
  const [car, setCar] = useState<Option | null>(null)
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')

  const carIndex = carMakes.findIndex((elem) => elem.id === car?.id)

  return (
    <>
      <div className="relative flex w-full flex-col items-start justify-start rounded-lg bg-gray-300 p-2 sm:flex-row sm:items-center sm:justify-between">
        <SearchBarInput
          iconHref="car-logo.svg"
          placeholder="vw"
          options={carMakes}
          setIdx={setCar}
          value={make}
          onChange={setMake}
        />
        <SearchBarInput
          iconHref="model-icon.png"
          placeholder="tiguan"
          value={model}
          onChange={setModel}
          options={carIndex && carIndex >= 0 ? carModels[carIndex] : []}
        />
        <div className="absolute top-[20px] flex h-full w-[60px] items-center justify-center self-end sm:relative sm:top-[-2px]">
          <button
            onClick={() => {
              setModel('')
              setMake('')
              setCar(null)
            }}
          >
            <Image
              src="/magnifying-glass.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-2 sm:justify-start">
        <Select />
        <Select />
      </div>
    </>
  )
}

export default SearchBar
