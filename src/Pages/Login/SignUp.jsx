import React, { useContext } from 'react'
import LoginInput from '../../Components/LoginInput'
import LoginBtn from '../../Components/LoginBtn'
import { Context } from '../../Context/Context'

export default function SignUp() {
    const {setRegistered} = useContext(Context)
    function handleRegister(e){
        e.preventDefault()
        const obj = {
            newlogin:e.target.newlogin.value,
            newpassword:e.target.newpassword.value
        }
        setRegistered(obj)
        location.pathname = '/'
    }

  return (
    <div className='bg-[#FCFAFA] w-[100%] h-[100vh] pt-[100px] flex flex-col justify-center items-center'>
       <h2 className="text-center Kumbh Sans font-semibold text-[36px] leading-[44.65px] text-[#4F4F4F]">
        Welcome, Log into your account
      </h2>
      <form onSubmit={handleRegister} className="w-[512px] text-center mt-[53px] mx-auto px-[132px] pt-[72px] pb-[39px] bg-[#FFFFFF]">
        <h3 className='w-[238px] font-medium text-[16px] leading-[25px] text-[#667085] text-center'>It is our great pleasure to have you on board! </h3>
        <LoginInput type={'text'} required={true}  placeholder={'Enter your email'} extraStyle={'mt-[14px] p-[12px] outline-none border-[1px] w-full rounded-[4px] border-[#A7A7A7] focus:shadow-md'}/> 
        <LoginInput type={'text'} required={true} name={'newlogin'} placeholder={'Create your Login'} extraStyle={'mt-[14px] p-[12px] outline-none border-[1px] w-full rounded-[4px] border-[#A7A7A7] focus:shadow-md'}/> 
        <LoginInput type={'password'} required={true} name={'newpassword'} placeholder={'Create your password'} extraStyle={'mt-[14px] w-full p-[12px] outline-none border-[1px] rounded-[4px] border-[#A7A7A7] focus:shadow-md'}/>
        <LoginBtn type={'submit'} extrastyle={'w-full bg-[#2D88D4] rounded-[4px] font-bold p-[12px] mt-[34px] text-[#fff]'}>
            Sign Up
        </LoginBtn>
      </form>
    </div>
  )
}
