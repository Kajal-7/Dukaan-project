import React from 'react'
import leftSideArrow from "../assets/leftSideArrow.svg"
import rightSideArrow from "../assets/rightSideArrow.svg"

const Pagination = () => {
  return (
<div class="flex">
  <a href="#" class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    <img
        src={leftSideArrow}
        alt='leftSideArrow'
        class="w-3.5 h-3.5 me-2 rtl:rotate-180"
    />
    Previous
  </a>
  <a href="#" class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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