import React, { useState } from 'react'
import { NotificationIcon } from '../assets/Icons'
import LoginBtn from './LoginBtn'

export default function Logoutwrapper({extrastyle,logOut}) {
  return (
    <div className='flex items-center space-x-[48px]'>
      <NotificationIcon/>
      <button onClick={logOut} type={'button'} className={`w-[120px] py-[11.5px] rounded-[8px] font-semibold text-[14px] leading-[17.36px] text-[#FCFAFA] bg-[#509CDB] ${extrastyle}` }>Log out</button>
    </div>
  )
}
