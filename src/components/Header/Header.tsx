'use client'
import React from 'react'
import Link from 'next/link'
import Button from '@/components/common/Button/Button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

interface IHeaderProps {
  // define your props here
}

const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <header className="absolute z-10 w-full">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between bg-transparent px-6 py-4 sm:px-16">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
          />
        </Link>

        <Button onClick={() => signIn("google")}>sign in</Button>
      </nav>
    </header>
  )
}

export default Header
