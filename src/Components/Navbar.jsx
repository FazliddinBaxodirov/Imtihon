import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { BillinIcon, ExamsIcon, FeaturesIcon, HomeIcon, SettingsIcon, StudentsIcon } from '../assets/Icons'
export default function Navbar() {
  return (
    <div className='w-[20%] h-screen overflow-y-auto bg-[#152259]'>
      <div className='p-[25px] pb-[40px] text-center border-b-[0.5px] border-b-[#BDBDBD]'>
        <a href="/">
            <img src={logo} alt="logo" width={65} height={65} className='mx-auto mb-[22px]'/>
        </a>
        <h2 className='font-semibold text-[14px] leading-[17.36px] text-white'>Udemy Inter. school</h2>
      </div>
      <ul className='mt-[16px] ml-[28px] space-y-[8px] pr-[21px]  mb-[114px]'>
        <li>
            <NavLink to={'/'} className='font-semibold text-[14px] leading-[17.36px] text-white flex gap-[16px] pl-[16px] py-[12px] items-center rounded-[4px] '>
                <HomeIcon/>
                <p>Dashboard</p>
            </NavLink>
        </li>
        <li>
            <NavLink to={'/teachers'} className='font-semibold text-[14px] leading-[17.36px] text-white flex gap-[16px] pl-[16px] py-[12px] items-center rounded-[4px] '>
                <HomeIcon/>
                <p>Teachers</p>
            </NavLink>
        </li>
        <li>
            <NavLink to={'/students'} className='font-semibold text-[14px] leading-[17.36px] text-white flex gap-[16px] pl-[16px] py-[12px] items-center rounded-[4px] '>
                <StudentsIcon/>
                <p>Students</p>
            </NavLink>
        </li>
        <li>
            <NavLink to={'/billing'} className='font-semibold text-[14px] leading-[17.36px] text-white flex gap-[16px] pl-[16px] py-[12px] items-center rounded-[4px] '>
                <BillinIcon/>
                <p>Billing</p>
            </NavLink>
        </li>
        <li>
            <NavLink to={'/settings'} className='font-semibold text-[14px] leading-[17.36px] text-white flex gap-[16px] pl-[16px] py-[12px] items-center rounded-[4px] '>
                <SettingsIcon/>
                <p>Settings and profile</p>
            </NavLink>
        </li>
        <li>
            <NavLink to={'/exams'} className='font-semibold text-[14px] leading-[17.36px] text-white flex gap-[16px] pl-[16px] py-[12px] items-center rounded-[4px] '>
                <ExamsIcon/>
                <p>Exams</p>
            </NavLink>
        </li>
      </ul>
      <NavLink to={'/features'} className='font-semibold mr-[21px] ml-[28px] text-[14px] leading-[17.36px] text-white flex gap-[16px] pl-[16px] py-[12px] items-center rounded-[4px] '>
          <FeaturesIcon/>
          <p>Features</p>
          <span className='w-[41px] py-[1px] font-semibold text-[10px] leading-[12px] bg-[#B9D7F1] px-[8px] text-[#333] rounded-[8px] ml-[26px]'>NEW</span>
      </NavLink>
    </div>
  )
}
