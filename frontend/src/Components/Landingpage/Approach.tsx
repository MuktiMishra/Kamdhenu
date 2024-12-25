import React, { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Approach: React.FC = () => {

  const arr = [
    {
      imgSrc: "./km4.jpg",
      altText: "Approach 1",
      heading: "Sustainability",
      description: "Our first step focuses on sustainable growth for the future.",
    },
    {
      imgSrc: "./km2.jpg",
      altText: "Approach 2",
      heading: "Innovation",
      description: "We innovate to bring better solutions to our customers.",
    },
    {
      imgSrc: "./km.jpg",
      altText: "Approach 3",
      heading: "Community",
      description: "We care about the community and the environment.",
    },
  ];

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handlers for navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % arr.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + arr.length) % arr.length);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-12 bg-gray-200 p-6">
      <div className="text-3xl lg:text-5xl font-extrabold text-center mb-6 text-[#0000FF]">
        Our Approach
      </div>
      <div className="text-xl lg:text-2xl font-light text-center text-black mb-10">
        "Nurturing Dreams with Kamdhenu’s Holistic Approach."
      </div>
      <div className="relative flex  rounded-lg justify-center items-center w-full max-w-4xl h-1/3">
        {arr.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } relative w-full h-64 md:h-96`}
          >
            <img
              src={slide.imgSrc}
              alt={slide.altText}
              className="w-full h-full object-cover"
            />

            {index === currentSlide && (
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-500 bg-opacity-60 text-white p-4 flex flex-col justify-center">
                <h2 className="text-sm md:text-2xl font-bold text-[#FFFFFF]">
                  {slide.heading}
                </h2>
                <p className="mt-2 text-xs md:text-sm">
                  {slide.description}
                </p>
              </div>
            )}
          </div>
        ))}

  
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
        >
          <FaArrowCircleLeft size={16} />
          
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
        >
          <FaArrowCircleRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Approach;
