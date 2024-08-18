import React from 'react'

export default function CustomModal({extrastyle,handleNo,handleYes}) {
  return (
    <div className={`w-[100%] h-screen  fixed z-50 top-0 right-0 bottom-0 left-0 duration-300 backdrop-blur-md ${extrastyle}`}>
        <div className='bg-white w-[700px] mx-auto mt-[200px] p-[50px]'>
            <h2 className='font-bold text-center mb-[80px] text-[30px] leading-[34px] text-[#4F4F4F]'>Do you really want to quit?</h2>
            <div className='flex justify-between px-[100px]'>
            <button onClick={handleNo} className='py-[12px] w-[150px] font-semibold text-[16px] rounded-md text-white bg-green-600'>No</button>
            <button onClick={handleYes} className='py-[12px] w-[150px] font-semibold text-[16px] rounded-md text-white bg-red-600'>Yes</button>
            </div>
        </div>
    </div>
  )
}
