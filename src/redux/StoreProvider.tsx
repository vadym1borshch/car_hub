'use client'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

interface StoreProviderProps {
  children: ReactNode
  session?: Session
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>
    <Provider store={store}>{children}</Provider>
  </SessionProvider>
}

export default StoreProvider
