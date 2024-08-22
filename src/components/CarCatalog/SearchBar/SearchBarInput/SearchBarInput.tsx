'use client'
import React, { InputHTMLAttributes } from 'react'
import Image from 'next/image'

interface ISearchBarInputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconHref: string
  iconSize?: number
}

const SearchBarInput: React.FC<ISearchBarInputProps> = ({
  iconHref,
  iconSize,
  ...rest
}) => {
  return (
    <div className="relative flex items-center bg-gray-300 w-full">
      <input
        className="flex items-center bg-gray-300 px-6 focus:outline-none w-full"
        {...rest}
      />
      <span className="absolute">
        <Image
          src={`/${iconHref}`}
          alt="logo"
          width={iconSize || 20}
          height={iconSize || 20}
        />
      </span>
    </div>
  )
}

export default SearchBarInput
