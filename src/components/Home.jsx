import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useContextState, useContextAction } from "./providers/StateProvider";


const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1614597445336-8a67e9314d91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhYmluZXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1632392417634-163538c605bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FiaW5ldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1604709178681-82325c04f8bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FiaW5ldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1596178837012-a4ffb39d6db4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FiaW5ldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
];

const Home = () => {
  // States
  const [slide, setSlide] = useState(0);
  const [nav, setNav] = useContextState()

  // Slider Logic
  const length = sliderData.length;
  const prevSlide = () => setSlide(slide === length - 1 ? 0 : slide + 1);
  const nextSlide = () => setSlide(slide === 0 ? length - 1 : slide - 1);

  const hamburgerHandler = useContextAction()

  return (
    <div
      name={"home"}
      className="text-gray-300 w-full h-screen bg-transparent relative"
    >
      <div className={!nav ? "max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full overflow-hidden" : "hidden"}>
        <div className="sm:ml-6 w-full overflow-hidden object-fill max-h-[450px] shadow-md shadow-slate-600 rounded-3xl">
          <BsArrowLeftSquareFill
            onClick={prevSlide}
            className="absolute top-[50%] text-3xl text-white cursor-pointer bg-red-800 left-8 duration-300"
          />
          <BsArrowRightSquareFill
            onClick={nextSlide}
            className="absolute top-[50%] text-3xl text-white cursor-pointer right-8 bg-red-800"
          />
          {sliderData.map((item, index) => (
            <div
              key={index}
              className={slide === index ? "opacity-100 object-cover w-full h-full" : "opacity-0"}
            >
              {index === slide && (
                <img
                  src={item.url}
                  className={"h-full w-full"}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
