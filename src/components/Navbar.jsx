import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import {HiOutlineMenuAlt4} from "react-icons/hi"
import {FaInstagram, FaWhatsapp, FaTelegram} from "react-icons/fa"

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const hamburgerHandler = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between w-full items-center h-20 px-4 absolute z-10 bg-slate-900 '>

        {/* ************************** Menu ************************** */}
        <div className='cursor-pointer'>
            <h1 className={!nav ? '' : 'hidden'}>KATELL.</h1>
        </div>
            <ul className='hidden md:flex w-1/2 md:justify-around'>
                <li id={'pseudo'} className={'text-gray-100  hover:scale-125 duration-300'}>ارتباط با ما</li>
                <li id={'pseudo'} className={'text-gray-100  hover:scale-125 duration-300'}>درباره ما</li>
                <li id={'pseudo'} className={'text-gray-100  hover:scale-125 duration-300'}>فرایند ساخت</li>
                <li id={'pseudo'} className={'text-gray-100  hover:scale-125 duration-300'}>نمونه کارها</li>
                <li id={'pseudo'} className={'text-gray-100  hover:scale-125 duration-300'}>خانه</li>
            </ul>

        {/* Hamburger button */}
        <div onClick={hamburgerHandler} className='md:hidden cursor-pointer z-10 text-gray-300 scale-125'>
          {nav ? <AiOutlineClose className='text-black' /> : <HiOutlineMenuAlt4  size={20}/>}
        </div>

        {/* Mobile Menu Dropdown */}
            <div onClick={hamburgerHandler} className={nav ? 'bg-gray-100 text-center absolute justify-center left-0 top-0 w-full px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>

                <h1 className='font-[Poppins] font-bold text-left'>KATELL.</h1>

                <ul className={'font-bold font-[Vazir] '}>
                    <li className={'py-2 text-xl hover:scale-125 duration-300'}>خانه</li>
                    <li className={'py-2 text-xl hover:scale-125 duration-300'}>نمونه کارها</li>
                    <li className={'py-2 text-xl hover:scale-125 duration-300'}>فرایند ساخت</li>
                    <li className={'py-2 text-xl hover:scale-125 duration-300'}>ارتباط با ما</li>
                    <li className={'py-2 text-xl hover:scale-125 duration-300'}>درباره ما</li>
                    
                    <div className='flex justify-between my-6' >
                        <FaInstagram className='icon' size={30} />
                        <FaWhatsapp className='icon' size={30} />
                    </div>
                </ul>
        </div> 
        {/* ************************** End Of Menu ************************** */}

        {/*    Social Icons*/}
        <div className={'hidden md:flex top-[35%] flex-col fixed'}>
            <ul>
                <li className={'w-[140px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-emerald-500 to-green-600'}>
                    <a className={'flex text-[15px] items-center justify-around w-full text-gray-200'} href="">
                        WhatsApp <FaWhatsapp size={30}  />
                    </a>
                </li>
                <li className={'w-[140px] my-1 h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'}>
                    <a className={'flex text-[15px] items-center justify-around w-full text-gray-200'} href="">
                        Instagram <FaInstagram size={30}  />
                    </a>
                </li>
                <li className={'w-[140px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-sky-500 to-sky-800'}>
                    <a className={'flex text-[15px] items-center justify-around w-full text-gray-200'} href="">
                        Telegram <FaTelegram size={30}  />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar