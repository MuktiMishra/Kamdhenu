import React from 'react'
import { Link } from 'react-router-dom'



const ServicesSection : React.FC = () => {
  return (
    <div className='mt-3 mb-20'>
        <div className="text-3xl lg:text-5xl font-extrabold text-center mb-10 text-[#0000FF]">
            Our Services
        </div>
        <div className='grid grid-rows-3 gap-3 md:gap-7'>
            <div className='flex justify-center items-center w-screen gap-16'>
              <div className='flex-col w-[50%] justify-start ml-3'>
              <div className="text-2xl md:text-4xl font-extrabold text-[#000000] flex-nowrap mb-8">Distant Education</div>
                <div className='text-sm md:text-xl text-[#000000]'>
                  Providing the foundation of knowledge and learning, 
                  the education services under Kamdhenu aim to prepare 
                  individuals for both academic excellence and practical application.
                </div>
                <Link to='/programs#education'><button className='w-24 md:w-28 h-6 md:h-10 font-semibold hover:bg-blue-600 text-black hover:text-white text-xs md:text-lg rounded-xl bg-[#D9D9D9] mt-3 md:mt-5'>Learn More</button></Link>
              </div>
                <img src='./Service1.png' alt='Service 1' className='w-40 md:w-60 justify-end' />
                
            </div>

            <div className='flex justify-center items-center w-screen gap-16'>
              <img src='./Service2.png' alt='Service 2' className='w-40 md:w-60 justify-end' />
              <div className='flex-col w-[50%] justify-start'>
              <div className="text-2xl md:text-4xl font-extrabold text-[#000000] flex-nowrap mb-8">Training Support</div>
                <div className='text-sm md:text-xl text-[#000000]'>
                Focused on bridging the gap between theoretical knowledge and 
                industry requirements, the training programs are designed to 
                make individuals job-ready.
                </div>
                <Link to='/programs#training'><button className='w-24 md:w-28 h-6 md:h-10 font-semibold hover:bg-blue-600 text-black hover:text-white text-xs md:text-lg rounded-xl bg-[#D9D9D9] mt-3 md:mt-5'>Learn More</button></Link>
              </div>
                
            </div>

            <div className='flex justify-center items-center w-screen gap-16'>
              <div className='flex-col w-[50%] justify-start ml-3'>
              <div className="text-2xl md:text-4xl font-extrabold text-[#000000] flex-nowrap mb-8">Placement Support</div>
                <div className='text-sm md:text-xl text-[#000000]'>
                  Providing the foundation of knowledge and learning, 
                  the education services under Kamdhenu aim to prepare 
                  individuals for both academic excellence and practical application.
                </div>
                <Link to='/programs#placement'><button className='w-24 md:w-28 h-6 md:h-10 font-semibold hover:bg-blue-600 text-black hover:text-white text-xs md:text-lg rounded-xl bg-[#D9D9D9] mt-3 md:mt-5'>Learn More</button></Link>
              </div>
                <img src='./Service3.png' alt='Service 1' className='w-40 md:w-60 justify-end' />
            </div>

        </div>
        
        
      
    </div>
  )
}

export default ServicesSection
