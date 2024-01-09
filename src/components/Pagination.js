import React from 'react'
import leftSideArrow from "../assets/leftSideArrow.svg"
import rightSideArrow from "../assets/rightSideArrow.svg"

const Pagination = () => {
  return (
    <div className="flex justify-center items-center my-4">
      <a href="/" class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-[#4D4D4D] bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
        <img
          src={leftSideArrow}
          alt='leftSideArrow'
          class="w-3.5 h-3.5 me-2 rtl:rotate-180"
        />
        Previous
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      > 1
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      >    ...
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      >    10
      </a>
      <a
        className="relative block rounded bg-[#146EB4] px-3 py-1.5 text-sm text-white font-medium text-neutral-600 transition-all duration-300"
        href="/"
      >    11
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      >    12
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      >    13
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      >    14
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      >    15
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      >    16
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      >    17
      </a>
      <a
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
        href="/"
      >    18
      </a>
      <a href="/" class="flex items-center justify-center px-4 h-10 text-base font-medium text-[#4D4D4D] bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
        Next
        <img
          src={rightSideArrow}
          alt='rightSideArrow'
          className='w-3.5 h-3.5 ms-2 rtl:rotate-360'
        />
      </a>
    </div>
  )
}

export default Pagination