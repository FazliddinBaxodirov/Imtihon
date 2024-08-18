import React, { useContext, useState } from 'react'
import Logoutwrapper from '../../Components/Logoutwrapper'
import { Context } from '../../Context/Context'

export default function Addteachers() {
    const [img,setImg] = useState('')
    const {list,setList} = useContext(Context)
    function handleSave(e){
        e.preventDefault()
        const newObj = {
            id:list.length ? list[list.length - 1].id + 1 : 1,
            name:e.target.name.value,
            email:e.target.email.value,
            subject:e.target.subject.value,
            about:e.target.description.value,
            class:e.target.class.value,
            gender:e.target.gender.value,
            age:e.target.age.value,
            img:img,
        }
        setList([...list,newObj])
        location.pathname ="/teachers"
    }
  return (
    <div className='w-[80%] pl-[38px] pr-[104px] h-screen overflow-y-auto'>
        <div className='w-full flex justify-end  pt-[30px] pb-[8px]'>
        <Logoutwrapper  extrastyle={'!bg-[white] !text-[#333] w-auto'}>
          Log Out
        </Logoutwrapper>
      </div>
      <form onSubmit={handleSave} className='w-full mt-[38px] flex flex-col justify-between'>
      <div className='flex justify-between w-full'>
      <h2 className='font-medium text-[20px] leading-[24.8px] text-[#4F4F4F]'>Add teachers</h2>
      <button className='p-[13px] bg-blue-600 text-white font-semibold py-[8px] rounded-[4px]' type='submit'>Save</button>   
       </div>
      <div className='flex justify-between'>
        <div className='w-[48%] '>
            <label className='w-full '>
                <p className='font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]'>Full name</p>
                <input required name='name' className='w-full mb-[36px] rounded-[4px] outline-none border-[1px] border-[#A7A7A7] py-[13px] pl-[9px] ' type="text" placeholder='Full Name'/>
            </label>
            <label>
                <p className='font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]'>Email address</p>
                <input required name='email' className='w-full mb-[36px] rounded-[4px] outline-none border-[1px] border-[#A7A7A7] py-[13px] pl-[9px] ' type="email" placeholder='Email address'/>
            </label>
            <label>
                <p className='font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]'>Subject </p>
                <input required name='subject' className='w-full mb-[36px] rounded-[4px] outline-none border-[1px] border-[#A7A7A7] py-[13px] pl-[9px] ' type="text" placeholder='Subject'/>
            </label>
            <label>
                <p className='font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]'>About</p>
                <textarea name='description' placeholder='About' className='w-full rounded-[4px] outline-none border-[1px] border-[#A7A7A7] py-[13px] pl-[9px] ' rows={5} cols={150}>
                </textarea>
            </label>
        </div>
        <div className='w-[50%]'>
            <label>
                <p className='font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]'>Class</p>
                <select required name='class' className='w-full mb-[36px] rounded-[4px] outline-none border-[1px] border-[#A7A7A7] py-[13.5px] pl-[9px] '>
                    <option value="" disabled selected>Class</option>
                   <option value="JSS 1">JSS 1</option>
                   <option value="JSS 2">JSS 2</option>
                   <option value="JSS 3">JSS 3</option>
                   <option value="JSS 4">JSS 4</option>
                   <option value="JSS 5">JSS 5</option>
                   </select>
            </label>
            <label>
                <p className='font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]'>Gender</p>
                <select required name='gender' className='w-full mb-[36px] rounded-[4px] outline-none border-[1px] border-[#A7A7A7] py-[13.5px] pl-[9px] '>
                    <option value="" disabled selected>Gender</option>
                   <option value="Male">Male </option>
                   <option value="Female">Female</option>
                   </select>
            </label>
            <label >
                <p className='font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]'>Age</p>
                <input required name='age' type="number" placeholder='Age' className='w-full mb-[55px] rounded-[4px] outline-none border-[1px] border-[#A7A7A7] py-[13px] pl-[9px]' />
            </label>
            <label >
                <p>Import image</p>
                <input name='img' onChange={(e) => setImg(URL.createObjectURL(e.target.files[0])) } type="file" className='hidden'/>
            </label>
        </div>
      </div>
      </form>
    </div>
  )
}
