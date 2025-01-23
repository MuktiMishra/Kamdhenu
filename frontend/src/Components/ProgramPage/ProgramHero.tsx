import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  children?: React.ReactNode;
}

const words = ["Distance Education", "Training Support", "Placement Support"];

const ProgramHero: React.FC<HeroProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <div className="text-3xl md:text-4xl mb-[7rem] font-extrabold text-center mt-5 text-[#0000FF]">
        Programs
      </div>
      <div className="w-screen h-[35rem] flex flex-col-reverse md:grid md:grid-cols-2 mt-10 mb-10 md:mt-2 md:mb-2">
        {/* Text Section */}
        <div className="flex flex-col text-left gap-4 place-items-start ml-5 md:ml-12 mt-6 md:mt-24">
          <div className="text-3xl lg:text-6xl font-bold text-center lg:text-left text-black text-nowrap">
            Get the
          </div>

          <motion.div
            key={currentIndex} // Ensures animation runs on index change
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" text-3xl lg:text-6xl font-bold text-[#0000FF] text-center lg:text-left md:text-center text-nowrap"
          >
            {words[currentIndex]}
          </motion.div>

          <div className="text-3xl lg:text-6xl font-bold text-center lg:text-left text-black text-nowrap">
            right now!
          </div>
          <button onClick={() => navigate("/signup")} className="h-10 w-32 bg-[#B0C4DE] rounded-xl mt-4 text-bold hover:bg-blue-500 hover:text-white text-lg">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full h-full lg:block order-first md:order-last">
          <img
            src="./Program.jpg"
            className="w-full md:w-[90%] h-[50vh] md:h-[70%] object-cover"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramHero;
