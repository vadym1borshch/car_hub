'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SearchBarInput from '@/components/CarCatalog/SearchBar/SearchBarInput/SearchBarInput'
import { carMakes, carModels } from '@/components/CarCatalog/CarCard/mock'
import Select from '@/components/Select/Select'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/reduxHooks'
import { deleteCurrentCarAction, fetchCarsData } from '@/redux/slices/CarSlice'
import { carsSelector, currentCarSelector } from '@/redux/selectors/selectors'
import { v4 } from 'uuid'

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = ({}) => {
  const currentCar = useAppSelector(currentCarSelector)
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const dispatch = useAppDispatch()
  const car = useAppSelector(carsSelector)[0]
  const carIndex = carMakes.findIndex((elem) => elem.id === currentCar?.id)

  const filterSort = car
    ? Object.keys(car).map((key) => {
        return {
          id: v4(),
          value: key,
        }
      })
    : []

  const resetState = () => {
    setModel('')
    setMake('')
    dispatch(deleteCurrentCarAction())
  }

  return (
    <>
      <div className="relative flex w-full flex-col items-start justify-start rounded-lg bg-gray-300 p-2 sm:flex-row sm:items-center sm:justify-between">
        <SearchBarInput
          iconHref="car-logo.svg"
          placeholder="vw"
          options={carMakes}
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
        <Select label="Sort By" options={filterSort} />
        <Select label="Filter By" options={filterSort} />
      </div>
    </>
  )
}

export default SearchBar
