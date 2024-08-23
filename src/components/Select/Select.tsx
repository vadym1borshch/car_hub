'use client'
import React, { Fragment, useState } from 'react'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react'
import Image from 'next/image'
import { v4 } from 'uuid'

const options = [
  { id: v4(), value: 'option1', label: 'Option 1' },
  { id: v4(), value: 'option2', label: 'Option 2' },
  { id: v4(), value: 'option3', label: 'Option 3' },
]

interface ISelectProps {
  label: string
}

const Select: React.FC<ISelectProps> = ({label}) => {
  const [selected, setSelected] = useState<{
    id: string
    value: string
    label: string
  } | null>(null)

  return (
    <div className="relative w-28">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <ListboxButton className="relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
            <span className="block truncate">{selected?.label || label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Image
                src="/chevron-up-down.svg"
                alt="icon"
                width={20}
                height={20}
              />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <ListboxOption
                  key={option.id}
                  className={({ focus }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      focus ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.293 6.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 9l4.293 4.293a1 1 0 001.414-1.414l-5-5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Select
