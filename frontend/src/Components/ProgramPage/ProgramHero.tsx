import React , {useState , useEffect}  from 'react'
import { motion } from 'framer-motion';

interface HeroProps {
  children?: React.ReactNode;
}

const words = ["Distant Education","Training Support" ,"Placement Support"];

const ProgramHero: React.FC<HeroProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <div className="text-3xl md:text-4xl font-extrabold text-center mt-5 text-[#0000FF]">
        Programs
      </div>
      <div className="w-screen grid grid-cols-1 md:grid-cols-2 mt-2">
        <div className="flex flex-col text-left gap-4 mt-24 place-items-start ml-3 md:ml-20">
          <div className="text-4xl lg:text-6xl font-bold text-center lg:text-left text-black text-nowrap">
            Get the
          </div>
          
          <motion.div
            key={currentIndex} // Ensures animation runs on index change
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-6xl font-bold text-[#0000FF] text-center lg:text-left md:text-center text-nowrap"
           >
            {words[currentIndex]}
          </motion.div>

          <div className="text-4xl lg:text-6xl font-bold text-center lg:text-left text-black text-nowrap">
            right now !
          </div>
          <button className='h-10 w-32 bg-[#B0C4DE] rounded-xl mt-4 text-bold  hover:bg-blue-500 hover:text-white text-lg'>Join Us Now</button>
        </div>
        <div className="w-full h-full hidden lg:block">
          <img
            src="./Program.jpg"
            className="w-[100%] h-[70%] object-cover"
            alt="Hero"
          />
        </div>       
      </div>

      
      
    </div>
  )
}

export default ProgramHero