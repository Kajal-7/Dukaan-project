import React from 'react'
import search from "../assets/search.svg"
import logo from "../assets/logo.svg"
import arrow from "../assets/arrow.svg"
import questionMark from "../assets/questionMark.svg"

const Navbar = () => {
  return (
    <div
      className={`flex md:flex-row flex-col-reverse mb-[35px]`}
    >
        <div className='w-1/3 flex flex-row items-center'>
            <div className='flex flex-row mr-3 text-[#1A181E]'>Payments</div>
            <div className='flex flex-row'>
            <img
              src={questionMark}
              alt='user'
              className='object-contain mx-1.5'
            />
            <div className='flex flex-row text-[#4D4D4D]'>How it works</div>
            </div>
        </div>
      <div className='w-1/3 lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#F2F2F2] ml-[10px] w-1/3'>
        <div className='w-[72px] h-full flex justify-center items-center cursor-pointer'>
          <img
            src={search}
            alt='search'
            className='w-[15px] h-[15px] object-contain'
          />
        </div>
        <input
          type='text'
          placeholder='Search features, tutorials, etc.'
          className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#808080] text-white bg-transparent outline-none'
        />
      </div>
      <div className='w-1/3 sm:flex flex-row justify-end'>
          <div className='w-[52px] h-[52px] rounded-full bg-[#E6E6E6] flex justify-center items-center cursor-pointer mx-2'>
            <img
              src={logo}
              alt='user'
              className='w-[50%] h-[50%] object-contain'
            />
          </div>
          <div className='w-[52px] h-[52px] rounded-full bg-[#E6E6E6] flex justify-center items-center cursor-pointer ml-2'>
            <img
              src={arrow}
              alt='user'
              className='w-[40%] h-[40%] object-contain'
            />
          </div>
      </div>
    </div>
  )
}

export default Navbar