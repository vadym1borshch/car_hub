'use client'
import Hero from '@/components/ Hero/Hero'
import CarCatalog from '@/components/CarCatalog/CarCatalog'
import { useEffect } from 'react'
import { fetchCarsData } from '@/redux/slices/CarSlice'
import { useAppDispatch } from '@/helpers/hooks/reduxHooks'

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCarsData({}))
  }, [dispatch])
  return (
    <div>
      <Hero />
      <CarCatalog />
    </div>
  )
}
