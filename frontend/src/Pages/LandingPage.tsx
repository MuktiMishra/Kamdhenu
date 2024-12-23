import React from 'react'
import Hero from '../Components/Landingpage/Hero';
import Approach from '../Components/Landingpage/Approach';
import ServicesSection from '../Components/Landingpage/ServicesSection';
import Works from '../Components/Landingpage/Works';


interface LandingPageProps{
    children?: React.ReactNode;
}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div>
        <Hero />
        <Approach />
        <ServicesSection />
        <Works />
        
      
    </div>
  )
}

export default LandingPage
