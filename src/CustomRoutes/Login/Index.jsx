import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from '../../Pages/Login'
import Loading from '../../assets/loading.png'

export default function LoginPage() {
  const SignIn = lazy(() => new Promise(resolve => {
    return setTimeout(() => resolve(import('../../Pages/Login/SignIn')),1200)
  }))
  return (
    <Routes>
        <Route path='/' element={<Suspense fallback={<div className='flex items-center justify-center mt-[250px] mx-auto'><img src={Loading} alt="loading..." width={150} height={150} /></div>}><SignIn/></Suspense>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}
