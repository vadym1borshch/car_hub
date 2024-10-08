'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { useState } from 'react'
import { CarOptionType } from '@/components/CarCatalog/SearchBar/types'
import { useAppDispatch } from '@/helpers/hooks/reduxHooks'
import { setCurrentCarAction } from '@/redux/slices/CarSlice'

interface ISearchBarInputProps {
  iconHref: string
  iconSize?: number
  options: CarOptionType[]
  placeholder?: string
  setCar?: (carOption: CarOptionType | null) => void
  onChange: (value: string) => void
  value: string
}

const SearchBarInput: React.FC<ISearchBarInputProps> = ({
  iconHref,
  iconSize,
  options,
  placeholder,
  value,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<CarOptionType | null>(
    null
  )
  const dispatch = useAppDispatch()

  const filteredOptions =
    value === ''
      ? options
      : options.filter((option) => {
          const searchField = option.make || option.model || ''
          return searchField.toLowerCase().includes(value.toLowerCase())
        })

  useEffect(() => {
    if (selectedOption?.make) {
      dispatch(setCurrentCarAction(selectedOption))
      return
    }
  }, [selectedOption, dispatch])

  useEffect(() => {
    if (!value) {
      setSelectedOption(null)
    }
  }, [value])
  return (
    <div className="relative flex w-full items-center bg-gray-300">
      <Combobox
        value={selectedOption}
        onChange={(option) => {
          setSelectedOption(option)
          onChange(option?.make ? option.make : option?.model || '')
        }}
      >
        <div className="relative w-full">
          <ComboboxInput
            className="flex w-full items-center bg-gray-300 px-6 focus:outline-none"
            aria-label="Assignee"
            displayValue={(option: CarOptionType | null) =>
              option?.make ? option.make : option?.model || ''
            }
            onChange={(event) => {
              onChange(event.target.value)
            }}
            placeholder={placeholder}
          />

          <ComboboxOptions className="absolute top-[30px] z-10 mt-1 flex h-[500px] w-full flex-col overflow-y-auto rounded-lg border bg-white shadow-lg">
            {filteredOptions.length === 0 ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                No results found.
              </div>
            ) : (
              filteredOptions.map((option, i) => {
                return (
                  <ComboboxOption
                    key={i}
                    value={option}
                    className={({ selected }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 hover:bg-sky-200 ${
                        selected ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                      }`
                    }
                  >
                    {option.make ? option.make : option.model}
                  </ComboboxOption>
                )
              })
            )}
          </ComboboxOptions>
        </div>

        {!value && (
          <span className="absolute flex items-center">
            <Image
              src={`/${iconHref}`}
              alt="logo"
              width={iconSize || 20}
              height={iconSize || 20}
            />
          </span>
        )}
      </Combobox>
    </div>
  )
}

export default SearchBarInput
