import React, { useState } from 'react'
import {BsSearch} from "react-icons/bs"
import {HiOutlineMenuAlt4} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const hamburgerHandler = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between w-full items-center h-20 px-4 absolute z-10'>
        <div className='cursor-pointer'>
            <h1>KATELL.</h1>
        </div>

        <ul className='hidden md:block md:flex'>
            <li>خانه</li>
            <li>نمونه کارها</li>
            <li>فرایند ساخت</li>
            <li>ارتباط با ما</li>
            <li>درباره ما</li>
        </ul>
        
        {/* Hamburger button */}
        <div className='md:hidden flex cursor-pointer' onClick={hamburgerHandler}>
            {
              nav ? <HiOutlineMenuAlt4 size={30} /> : <AiOutlineClose size={30} />
            }
            
        </div>

    </div>
  )
}

export default Navbar