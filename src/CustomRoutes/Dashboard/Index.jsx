import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Teachers, Home } from '../../Pages/Dashboard'
import Navbar from '../../Components/Navbar'
import Addteachers from '../../Pages/Dashboard/Addteachers'

export default function DashboardPage() {
  return (
    <div className='flex'>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/teachers/addteachers' element={<Addteachers/>}/>
    </Routes>
    </div>
  )
}
