import React from 'react'
import {BsSearch} from "react-icons/bs"
import {HiOutlineMenuAlt4} from "react-icons/hi"

const Navbar = () => {
  return (
    <div className='flex justify-between w-full items-center h-20 px-4 absolute z-10'>
        <div className='cursor-pointer'>
            <h1>KATELL.</h1>
        </div>

        <ul className='hidden sm:block sm:flex'>
            <li>خانه</li>
            <li>نمونه کارها</li>
            <li>فرایند ساخت</li>
            <li>ارتباط با ما</li>
            <li>درباره ما</li>
        </ul>

        <div className='xs:hidden flex cursor-pointer'>
            <HiOutlineMenuAlt4 size={30} />
        </div>

    </div>
  )
}

export default Navbar