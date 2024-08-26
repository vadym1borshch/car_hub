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

interface ISelectProps {
  label: string
  options: {
    id: string
    value: string
  }[]
}

const Select: React.FC<ISelectProps> = ({ label, options }) => {
  const [selected, setSelected] = useState<{
    id: string
    value: string
  } | null>(null)

  return (
    <div className="relative w-28">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <ListboxButton className="relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
            <span className="block truncate">{selected?.value || label}</span>
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
                    `relative cursor-default select-none px-1 py-2 ${
                      focus ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.value}
                    </span>
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
