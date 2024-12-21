import React, { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rakesh",
    image: "./km4.jpg",
    text: "This is the best service I have ever used. I got placed at HCL !",
  },
  {
    id: 2,
    name: "Mitaleh Bhati",
    image: "./km3.jpg",
    text: "The training was very nice . I got placed at TataPower .",
  },
  {
    id: 3,
    name: "Ram Kumar",
    image: "km2.jpg",
    text: "I took the distant education program , it helped alot!",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-5">
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden p-6 md:p-10 text-center m-5">
        
        <div className="flex items-center justify-center">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 md:w-56 md:h-56 rounded-full border-2 border-gray-300"
          />
        </div>

        
        <h3 className="text-lg md:text-xl font-semibold mt-4">
          {testimonials[currentIndex].name}
        </h3>

        <p className="text-sm md:text-base text-gray-600 mt-3 leading-relaxed">
          {testimonials[currentIndex].text}
        </p>


        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow hover:bg-gray-200 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow hover:bg-gray-200 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        </button>
      </div>

      <div className="flex items-center justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
