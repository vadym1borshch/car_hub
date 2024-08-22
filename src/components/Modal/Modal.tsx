'use client'
import React, { FC, Fragment, ReactNode } from 'react'
import { Transition, TransitionChild } from '@headlessui/react'

interface IModalProps {
  isOpen: boolean
  onClose?: () => void
  children: ReactNode
}

export const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <TransitionChild
          as={Fragment}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 scale-75"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <div
            className="relative rounded-lg bg-white p-6 shadow-lg shadow-blue-500/50"
            onClick={(e) => e.stopPropagation()} // Щоб модалка не закривалася при кліку всередині
          >
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-red-600 h-10 w-10 rounded-full bg-sky-50"
              onClick={onClose}
            >
              ✕
            </button>
            {children}
          </div>
        </TransitionChild>
      </div>
    </Transition>
  )
}
