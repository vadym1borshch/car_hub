'use client'
import React from 'react'
import Image from 'next/image'
import SearchBarInput from '@/components/CarCatalog/SearchBar/SearchBarInput/SearchBarInput'

interface ISearchBarProps {
  // define your props here
}

const SearchBar: React.FC<ISearchBarProps> = ({}) => {
  return (
    <div className="relative flex w-full flex-col items-start justify-start rounded-lg bg-gray-300 p-2 sm:flex-row sm:items-center sm:justify-between">
      <SearchBarInput iconHref="car-logo.svg" placeholder="vw"/>
      <SearchBarInput iconHref="model-icon.png" placeholder="tiguan" />
      <div className="absolute top-[20px] flex self-end sm:relative sm:top-0">
        <button onClick={() => {}}>
          <Image
            src="/magnifying-glass.svg"
            alt="logo"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
