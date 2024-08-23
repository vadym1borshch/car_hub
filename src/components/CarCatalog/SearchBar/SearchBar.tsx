'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SearchBarInput from '@/components/CarCatalog/SearchBar/SearchBarInput/SearchBarInput'
import { carMakes, carModels } from '@/components/CarCatalog/CarCard/mock'
import Select from '@/components/Select/Select'
import { Option } from '@/components/CarCatalog/SearchBar/types'
import { useAppDispatch } from '@/helpers/hooks/reduxHooks'
import { fetchCarsData } from '@/redux/slices/CarSlice'

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = ({}) => {
  const [car, setCar] = useState<Option | null>(null)
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')

  const dispatch = useAppDispatch()

  const carIndex = carMakes.findIndex((elem) => elem.id === car?.id)

  const resetState = () => {
    setModel('')
    setMake('')
    setCar(null)
  }

  return (
    <>
      <div className="relative flex w-full flex-col items-start justify-start rounded-lg bg-gray-300 p-2 sm:flex-row sm:items-center sm:justify-between">
        <SearchBarInput
          iconHref="car-logo.svg"
          placeholder="vw"
          options={carMakes}
          setCar={setCar}
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
              if (!make) return
              dispatch(fetchCarsData({ make, model }))
              resetState()
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
        <Select label="Sort By" />
        <Select label="Filter By" />
      </div>
    </>
  )
}

export default SearchBar
