import React from 'react'
import Pagination from './Pagination'
import CountCard from './ui/CountCard'
import Table from './Table'
import search from "../assets/search.svg"
import Button from './ui/Button'
import blackarrow from "../assets/blackarrow.svg"
import sort from "../assets/sort.svg"
import download from "../assets/download.svg"

const Content = () => {
  return (
    <div className='flex justify-center flex-col px-5 py-5 bg-[#FAFAFA]'>
      <div className='flex flex-row justify-between'>
      <div className='flex mb-6 text-[30px] font-bold'>Overview</div>
      <Button styles="flex flex-row justify-between items-center mr-3">
        <div className='w-[90px] flex grow'>Last Month</div>
        <img
            src={blackarrow}
            alt='downWardArrow'
            className='w-[23px] h-[23px] object-contain text-black ml-1'
          />
      </Button>
      </div>
      <div className='flex flex-row mb-5 gap-3'>
      <CountCard className="bg-white" title="Online Orders" count="231"/>
      <CountCard className="bg-white"  title="Amount Received" count="₹23,92,312.19"/>
      </div>
      <div className='flex flex-row justify-between'>
      <div className='w-1/3 lg:flex-1 flex flex-row max-w-[458px] py-2 pr-2 h-[52px] bg-[#F2F2F2]  w-1/3'>
        <div className='w-[72px] h-full flex justify-center items-center cursor-pointer'>
          <img
            src={search}
            alt='search'
            className='w-[15px] h-[15px] object-contain'
          />
        </div>
        <input
          type='text'
          placeholder='Search by order ID...'
          className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#808080] text-white bg-transparent outline-none'
        />
      </div>
      <div className='flex'>
      <Button styles="flex flex-row justify-between items-center mr-3">
        <div className='w-[50px] flex grow'>Sort</div>
        <img
            src={sort}
            alt='SArrow'
            className='w-[23px] h-[23px] object-contain text-black ml-1'
          />
      </Button>
      <Button styles="flex flex-row justify-between items-center mr-3">
        <img
            src={download}
            alt='download'
            className='w-[23px] h-[23px] object-contain text-black ml-1'
          />
      </Button>
      </div>
      </div>
      <Table/>
      <Pagination/>
    </div>
  )
}

export default Content