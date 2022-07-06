import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import MyLogo from "../assets/MyLogo.png";
import {
  RiInstagramFill,
  RiWhatsappFill,
  RiTelegramFill,
} from "react-icons/ri";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const hamburgerHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between w-full items-center h-20 px-4 absolute z-10  ">
      {/* ************************** Menu ************************** */}
      <div className="cursor-pointer">
        <div className={!nav ? "flex flex-col items-center" : "hidden"}>
          <img src={MyLogo} width={35}  alt="" />
          <h3 className="text-pink-600 font-medium">KATELL</h3>
        </div>
      </div>
      <ul className="hidden md:flex w-1/2 md:justify-around">
        <li className={"text-gray-100  hover:scale-125 duration-300"}>
          <a href="" className="hover:border-b-2 py-1  border-pink-600">
            ارتباط با ما
          </a>
        </li>
        <li className={"text-gray-100  hover:scale-125 duration-300"}>
          <a href="" className="hover:border-b-2 py-1 border-pink-600">
            درباره ما
          </a>
        </li>
        <li className={"text-gray-100  hover:scale-125 duration-300"}>
          <a href="" className="hover:border-b-2 py-1 border-pink-600">
            فرایند ساخت
          </a>
        </li>
        <li className={"text-gray-100  hover:scale-125 duration-300"}>
          <a href="" className="hover:border-b-2 py-1 border-pink-600">
            نمونه کارها
          </a>
        </li>
        <li className={"text-gray-100  hover:scale-125 duration-300"}>
          <a href="" className="hover:border-b-2 py-1 border-pink-600">
            خانه
          </a>
        </li>
      </ul>

      {/* Hamburger button */}
      <div
        onClick={hamburgerHandler}
        className="md:hidden cursor-pointer z-10 text-gray-300 scale-125"
      >
        {nav ? (
          <AiOutlineClose className="text-gray-300" />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        onClick={hamburgerHandler}
        className={
          nav
            ? "text-center absolute items-center h-screen justify-center left-0 top-0 w-full px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <div className=" font-bold flex h-1/6 items-center flex-col">
          <img src={MyLogo} width={35} />
          <h3 className="text-pink-600 my-2">KATELL</h3>
        </div>

        <ul className={"font-bold font-[Vazir] w-full px-7 flex flex-col "}>
          <li className={"py-4 text-lg hover:scale-125 duration-300"}>
            <a
              href=""
              className="hover:border-b-2 hover:text-pink-600 duration-75 border-pink-600 text-gray-300"
            >
              خانه
            </a>
          </li>
          <li className={"py-4 text-lg hover:scale-125 duration-300"}>
            <a
              href=""
              className="hover:border-b-2 hover:text-pink-600 duration-75 border-pink-600 text-gray-300"
            >
              نمونه کارها
            </a>
          </li>
          <li className={"py-4 text-lg hover:scale-125 duration-300"}>
            <a
              href=""
              className="hover:border-b-2 hover:text-pink-600 duration-75 border-pink-600 text-gray-300"
            >
              فرایند ساخت
            </a>
          </li>
          <li className={"py-4 text-lg hover:scale-125 duration-300"}>
            <a
              href=""
              className="hover:border-b-2 hover:text-pink-600 duration-75 border-pink-600 text-gray-300"
            >
              ارتباط با ما
            </a>
          </li>
          <li className={"py-4 text-lg hover:scale-125 duration-300"}>
            <a
              href=""
              className="hover:border-b-2 hover:text-pink-600 duration-75 border-pink-600 text-gray-300"
            >
              درباره ما
            </a>
          </li>
        </ul>
        
        {/* Icons of Dropdown Menu */}
        <div className="flex w-full justify-around my-16">
          <a href="https://telegram.me/cpezhman" target={"_blank"}>
            <RiTelegramFill
              className={
                "w-9 h-9 hover:scale-125 duration-300 cursor-pointer text-sky-600"
              }
            />
          </a>

          <a
            href={
              "https://wa.me/989129568298?text=(شما به حساب واتساپ آقای مفرد متصل شدید)"
            }
            target={"_blank"}
          >
            <RiWhatsappFill
              className={
                "w-9 h-9 hover:scale-125 duration-300 cursor-pointer text-green-600"
              }
            />
          </a>

          <a href="https://www.instagram.com/katell_wood" target={"_blank"}>
            <RiInstagramFill
              className={
                "w-9 h-9 hover:scale-125 duration-300 cursor-pointer text-purple-600"
              }
            />
          </a>
        </div>
      </div>
      {/* ************************** End Of Menu ************************** */}

      {/* Social Icons */}
      <div className={"hidden md:flex top-[35%] flex-col fixed"}>
        <ul>
          <li
            className={
              "w-[140px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-green-400 to-green-900 rounded-sm"
            }
          >
            <a
              className={
                "flex text-[15px] items-center justify-around w-full text-gray-200"
              }
              href={
                "https://wa.me/989129568298?text=(شما به حساب واتساپ آقای مفرد متصل شدید)"
              }
              target={"_blank"}
            >
              WhatsApp <RiWhatsappFill size={30} />
            </a>
          </li>
          <li
            className={
              "w-[140px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-sm"
            }
          >
            <a
              className={
                "flex text-[15px] items-center justify-around w-full text-gray-200"
              }
              href="https://www.instagram.com/katell_wood"
              target={"_blank"}
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li
            className={
              "w-[140px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-sky-500 to-sky-800 rounded-sm"
            }
          >
            <a
              className={
                "flex text-[15px] items-center justify-around w-full text-gray-200"
              }
              href="https://telegram.me/cpezhman"
              target={"_blank"}
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
