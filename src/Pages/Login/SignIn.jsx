import React, { useContext } from 'react'
import LoginInput from '../../Components/LoginInput'
import LoginBtn from '../../Components/LoginBtn'
import { Link } from 'react-router-dom'
import {Context} from '../../Context/Context'
import toast, { Toaster } from 'react-hot-toast'

export default function SignIn() {
    const {setToken} = useContext(Context) 
    const {registered} = useContext(Context)
    function handleSubmit(e){
        e.preventDefault()
        const data = {
            login:e.target.login.value,
            password:e.target.password.value
        }
        e.target.reset() 
        if(data.login == 'fazliddin' && data.password == '123' || data.login == registered.newlogin && data.password ==  registered.newpassword){
        toast.success('Success')
        setTimeout(() => {
            setToken(data)
        },1200)
        }
        else{
            toast.error('Something is wrong')
        }
    }
  return (
    <>
    <Toaster position="top-right" reverseOrder={false}/>
    <div className='bg-[#FCFAFA] w-[100%] h-[100vh] pt-[100px] flex flex-col justify-center items-center'>
       <h2 className="text-center Kumbh Sans font-semibold text-[36px] leading-[44.65px] text-[#4F4F4F]">
        Welcome, Log into your account
      </h2>
      <form onSubmit={handleSubmit} className="w-[512px] text-center mt-[53px] mx-auto px-[132px] pt-[72px] pb-[39px] opacity-[40%] bg-[#FFFFFF]">
        <h3 className='w-[238px] font-medium text-[16px] leading-[25px] text-[#667085] text-center'>It is our great pleasure to have you on board! </h3>
        <LoginInput type={'text'} required={true} name={'login'} placeholder={'Enter your Login'} extraStyle={'mt-[14px] p-[12px] outline-none border-[1px] w-full rounded-[4px] border-[#A7A7A7] focus:shadow-md'}/> 
        <LoginInput type={'password'} required={true} name={'password'} placeholder={'Enter your password'} extraStyle={'mt-[14px] w-full p-[12px] outline-none border-[1px] rounded-[4px] border-[#A7A7A7] focus:shadow-md'}/>
        <LoginBtn type={'submit'} extrastyle={'w-full bg-[#2D88D4] rounded-[4px] font-bold p-[12px] mt-[14px] mb-[14px] text-[#fff]'}>
            Login
        </LoginBtn>
        <Link to={'/signup'} className='font-bold text-[12px] leading-[24px] text-[#2D88D4]'>Sign Up</Link>
      </form>
    </div>
    </>
  )
}
