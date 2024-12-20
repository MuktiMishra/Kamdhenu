import React , {useState , useEffect}  from 'react'
import { motion } from 'framer-motion';
import ProgramHero from '../Components/ProgramPage/ProgramHero';

interface HeroProps {
  children?: React.ReactNode;
}

const words = ["Distant Education","Training Support" ,"Placement Support"];

const Programs: React.FC<HeroProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
        <ProgramHero />
      
      
    </div>
  )
}

export default Programs
