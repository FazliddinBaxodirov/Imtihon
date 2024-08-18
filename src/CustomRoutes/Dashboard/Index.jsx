import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Teachers } from '../../Pages/Dashboard'
import Navbar from '../../Components/Navbar'
import Addteachers from '../../Pages/Dashboard/Addteachers'
import Loading from '../../assets/loading.png'

export default function DashboardPage() {
  const Home = lazy(() => new Promise(resolve => {
    return setTimeout(() => resolve(import('../../Pages/Dashboard/Home')),1200)
  }))
  return (
    <div className='flex'>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Suspense fallback={<div className='flex items-center justify-center mx-auto'><img src={Loading} alt="loading..." width={150} height={150} /></div>}><Home/></Suspense>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/teachers/addteachers' element={<Addteachers/>}/>
    </Routes>
    </div>
  )
}
