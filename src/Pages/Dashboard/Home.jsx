import React from 'react'
import Logoutwrapper from '../../Components/Logoutwrapper'
import HomeItem from '../../Components/HomeItem'
import { AddStudentsIcon, AdminsIcon, Airpods, ClassesIcon, UpIcon } from '../../assets/Icons'
import LoginBtn from '../../Components/LoginBtn'
export default function Home() {
  return (
    <div className='w-[80%] relative'>
      <div className='flex justify-between pt-[34px] pb-[21px] pl-[147px] pr-[127px] bg-[#FCFAFA]'>
        <p className='flex flex-col space-y-0 text-[16px] leading-[20px] font-medium text-[#424242]'>Learn  how to launch faster <span className='font-normal'>watch our webinar for tips from our experts and get a limited time offer.</span></p>
        <Logoutwrapper/>
      </div>
      <h2 className='ml-[127px] mt-[53px] mb-[23px] font-semibold text-[36px] leading-[44.65px] text-[#4F4F4F]'>Welcome to your dashboard, Udemy school</h2>
      <p className='ml-[232px] font-semibold text-[24px] leading-[30px] text-[#4F4F4F] mb-[6px]'>Uyo/school/@teachable.com</p>
      <ul className='w-[758px] ml-[127px] pl-[90px] py-[68px] '>
        <HomeItem img={<AdminsIcon/>} title={'Add other admins'} extrastyle={'mb-[51px]'}/>
        <HomeItem img={<ClassesIcon/>} title={'Add classes'} extrastyle={'mb-[37px]'}/>
        <HomeItem img={<AddStudentsIcon/>} title={'Add students'}/>
      </ul>
      <LoginBtn extrastyle={'flex absolute right-[120px] bottom-[164px] space-x-[39px] items-center py-[21px] w-[181px] px-[24px] bg-[#152259] rounded-[30px] '}>
        <div className='flex space-x-[8px] items-center'>
          <Airpods/>
          <span className='text-white'>Support</span>
        </div>
        <UpIcon/>
      </LoginBtn>
    </div>
    
  )
}
