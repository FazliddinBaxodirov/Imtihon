import React from 'react'
import LoginBtn from './LoginBtn'
import { Link } from 'react-router-dom'

export default function Header({title,children,extrastyle,to}) {
  return (
    <div className='flex justify-between w-full'>
      <h2 className='font-medium text-[20px] leading-[24.8px] text-[#4F4F4F]'>{title}</h2>
      <Link to={to}>
      <LoginBtn extrastyle={extrastyle}>{children}</LoginBtn>
      </Link>
    </div>

  )
}
