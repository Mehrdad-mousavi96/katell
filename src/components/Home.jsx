import React from "react";

import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { BsArrowLeft, BsArrowDown } from "react-icons/bs";
import {
  useContextHamburgerFunc,
  useContextState,
} from "./providers/StateProvider";

const Home = () => {
  const [nav, setNav] = useContextState();

  return (
    <div name={"home"} className="text-gray-300 w-full h-screen">
      {/* Container */}
      <div
        className={
          !nav
            ? "max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full"
            : "hidden"
        }
      >
        {/* Introduce Text */}
        <p className="text-pink-600 text-md font-[Vazir]">
          طراحی حرفه ای دکوراسیون
        </p>
        <div className="flex py-6 items-center">
          <h1 className="mr-2 text-pink-600 ">Katell</h1>
          <h1 className="font-[Vazir] text-2xl">با تیم مجرب</h1>
        </div>
        <h1 className="opacity-90 font-[Vazir] text-2xl pt-0">
          بهترین ها را از ما بخواهید
        </h1>
        <p className="text-center py-6 font-[Vazir] opacity-80">
          گروه صنعتی کاتل دیزاین با مدیریت و سرپرستی آقای مفرد از سال ۹۲ فعالیت
          خود را شروع کرده و با طراحی و توسعه انواع محصولات چوبی از جمله کابینت٬
          دکوراسیون منزل٬ کمد دیواری و ... آماده ی خدمت رسانی به شما عزیزان
          هستیم
        </p>
        <button className="border-2 group flex items-center justify-center px-4 py-2 my-3 hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-300">
          <BsArrowLeft className="group-hover:hidden " size={20} />
          <BsArrowDown className="group-hover:flex hidden " size={20} />
          <p className="px-2 font-[Vazir]">پروژه های ما</p>
        </button>
        {/* End of Introduce Text */}

        {/* Social Icons */}
        <div
          className={
            "hidden tablet:flex tablet:left-4 tablet:top-[25%] mx-auto fixed"
          }
        >
          <ul>
            <li
              className={
                "w-[140px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-100 rounded-sm"
              }
            >
              <a
                className={
                  "flex text-[15px] items-center justify-around w-full text-green-600"
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
                "w-[140px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 my-1 bg-pink-100 rounded-sm"
              }
            >
              <a
                className={
                  "flex text-[15px] items-center justify-around w-full text-purple-600"
                }
                href="https://www.instagram.com/katell_wood"
                target={"_blank"}
              >
                Instagram <RiInstagramFill size={30} />
              </a>
            </li>
            <li
              className={
                "w-[140px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r bg-pink-100 rounded-sm"
              }
            >
              <a
                className={
                  "flex text-[15px] items-center justify-around w-full text-blue-600"
                }
                href="https://telegram.me/cpezhman"
                target={"_blank"}
              >
                Telegram <FaTelegram size={30} />
              </a>
            </li>
          </ul>
        </div>
        {/* End of Social Icons */}
      </div>
      {/* End of Container */}
    </div>
  );
};

export default Home;
