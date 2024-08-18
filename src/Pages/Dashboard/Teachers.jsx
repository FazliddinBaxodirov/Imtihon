import React, { useContext, useEffect, useState } from 'react'
import Logoutwrapper from '../../Components/Logoutwrapper'
import Header from '../../Components/Header'
import { Airpods, SearchIcon, UpIcon } from '../../assets/Icons'
import Coala from '../../assets/coala.png'
import LoginBtn from '../../Components/LoginBtn'
import { Context } from '../../Context/Context'
import CustomModal from '../../Components/CustomModal'
import toast, { Toaster } from 'react-hot-toast'

export default function Teachers() {
  const [openModal,setOpenModal] = useState(false)
  const {list,setList} = useContext(Context)
  const [search, setSearch] = useState('')  
  const clickSearch = (event) => {
    setSearch(event.target.value)
    const filteredList = list.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    setList(filteredList)
  }
  function logOut(){
    setOpenModal(true)
  }
  function handleNo(){
    setOpenModal(false)
  }
  function handleYes(){
    toast.success('Successfully exit')
    setTimeout(() => {
      localStorage.clear()
      location.pathname = '/'
    }, 800);
  }
  return (
    <div className='w-[80%] pl-[38px] pr-[99px] '>
      <Toaster position="top-right" reverseOrder={false}/>
      <div className='w-full flex justify-end  pt-[30px] pb-[8px]'>
        <Logoutwrapper logOut={logOut} extrastyle={'!bg-[white] !text-[#333] w-auto'}>
          Log Out
        </Logoutwrapper>
      </div>
      <Header to={'addteachers'} title={'Teachers'} children={'Add teachers'} extrastyle={'text-white p-[12px] bg-[#509CDB] rounded-[4px] font-semibold text-[14px] leading-[17.36px] '}/>
      <form  className='mt-[28px]' >
        <label className='w-full flex p-[16px] items-center space-x-[16px] rounded-[8px] bg-[#E0E0E0]'>
          <SearchIcon/>
          <input onChange={clickSearch} type="text" placeholder='Search for a student by name or email' className='w-[70%] bg-transparent placeholder:font-medium placeholder:text-[14px] placeholder:leading-[17.36px] placeholder:text-[#8A8A8A] outline-none ' />
        </label>
      </form>
        {list.length > 0 ? (
      <div className='w-full'>
        <div className='flex py-[16px] mt-[11px]'>
          <p className='w-[250px] font-bold text-[12px] leading-[14.88px] text-[#424242]'>Name</p>
          <p className='w-[190px] font-bold text-[12px] leading-[14.88px] text-[#424242]'>Subject</p>
          <p className='w-[169px] font-bold text-[12px] leading-[14.88px] text-[#424242]'>Class</p>
          <p className='w-[297px] font-bold text-[12px] leading-[14.88px] text-[#424242]'>Email adress</p>
          <p className='font-bold text-[12px] leading-[14.88px] text-[#424242]'>Gender</p>
        </div>
        <ul>
          {list.map((item,ind) => (
            <li className={`${item.id % 2 ? 'bg-white' : 'bg-[#EBF6FF80]'} flex py-[12px] pl-[8px]`} key={ind}>
              <p className='w-[250px] flex items-center space-x-[8px] font-medium text-[12px] leading-[15px] text-[#4F4F4F]'>
                <img src={item.img} alt="img" width={24} height={24} />
                 {item.name}</p>
              <p className='w-[190px] font-medium text-[12px] leading-[15px] text-[4F4F4F]'>{item.subject}</p>
              <p className='w-[169px] font-medium text-[12px] leading-[15px] text-[4F4F4F]'>{item.class}</p>
              <p className='w-[297px] font-medium text-[12px] leading-[15px] text-[4F4F4F]'>{item.email}</p>
              <p className='font-medium text-[12px] leading-[15px] text-[4F4F4F]'>{item.gender}</p>
            </li>
          ))}
        </ul>
      </div>
      ):(
        <div className='flex items-end justify-center mt-[30px] pb-[85px] relative rounded-[4px] bg-[#E0E0E0]'>
          <div>
            <img src={Coala} alt="koala" width={340} height={255}/>
            <h2 className='font-semibold text-[28px] leading-[34.73px] text-[#4F4F4F]'>No Teachers at this time</h2>
            <p className='font-medium text-[14px] leading-[17.36px] text-[#4F4F4F]'>Teachers will appear here after they enroll in your school.  </p>
          </div>
          <LoginBtn extrastyle={'flex absolute right-[19px] bottom-[35px] space-x-[39px] items-center py-[21px] w-[181px] px-[24px] bg-[#152259] rounded-[30px] '}>
            <div className='flex space-x-[8px] items-center'>
              <Airpods/>
              <span className='text-white'>Support</span>
            </div>
            <UpIcon/>
          </LoginBtn>
        </div>
      )}
      <CustomModal extrastyle={`${openModal ? 'scale-100' : 'scale-0'}`} handleNo={handleNo} handleYes={handleYes}/>
    </div>
  )
}
