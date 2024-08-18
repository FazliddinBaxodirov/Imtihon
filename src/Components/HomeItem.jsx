import React from 'react'
import { AdminsIcon } from '../assets/Icons'

export default function HomeItem({title,extrastyle,img}) {
  return (
    <li className={`flex space-x-[20px] items-start ${extrastyle}`}>
        {img}
        <div className='flex flex-col space-y-[16px]'>
            <p className='font-medium text-[24px] leading-[30px] text-[#4F4F4F] '>{title}</p>
            <span className='font-normal text-[14px] leading-[18.63px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.
            When you give them a pricing plan, they’ll appear on your site!</span>
        </div>
    </li>
  )
}
