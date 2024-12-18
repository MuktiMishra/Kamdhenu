import React from 'react'
import Hero from '../Components/Landingpage/Hero';
import Approach from '../Components/Landingpage/Approach';

interface LandingPageProps{
    children?: React.ReactNode;
}

const LandingPage: React.FC<LandingPageProps> = ({children}) => {
  return (
    <div>
        <Hero />
        <Approach />
      
    </div>
  )
}

export default LandingPage
