'use client'
import Hero from '@/components/ Hero/Hero'
import CarCatalog from '@/components/CarCatalog/CarCatalog'
import { useEffect } from 'react'
import { fetchCarsData, setCarsAction } from '@/redux/slices/CarSlice'
import { useAppDispatch } from '@/helpers/hooks/reduxHooks'
import axios from 'axios'

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const cars = localStorage.getItem('cars')
    if (cars) {
      dispatch(setCarsAction(JSON.parse(cars)))
      return
    }
    dispatch(fetchCarsData({}))
  }, [dispatch])

  return (
    <div>
      <Hero />
      <CarCatalog />
    </div>
  )
}
