'use client'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: ReactNode
  children?: ReactNode
}

const Button: React.FC<IButtonProps> = ({ Icon, children, ...rest }) => {
  return (
    <button
      className={`m-1 flex min-w-[64px] items-center justify-center rounded-[15px] bg-blue-400 p-[8px] font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-blue-600`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
