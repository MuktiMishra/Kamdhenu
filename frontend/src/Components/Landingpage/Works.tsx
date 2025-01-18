import React from 'react'
import { useNavigate } from 'react-router-dom'



const Works : React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className='mt-7'>
        <div className='bg-gray-200 p-4 pb-6'>
        <div className="text-3xl lg:text-5xl font-extrabold text-center mb-7 mt-6 text-[#0000FF]">
            How Kamdhenu Works ?
        </div>
        <div className="text-xl lg:text-2xl font-light text-center text-black mb-3">
            “ Your Personalized Path to Success ”
        </div>
        <div className='flex justify-center items-center'>
            <img src='./Path.png' className='w-auto h-96'/>
        </div>  
        </div>

        {/* CTA Section    */}
        <div className='flex items-center justify-center mt-16'>
            <div className="text-3xl lg:text-5xl font-extrabold text-center mb-7 mt-6 text-[#000000]">
                Join
            </div>
            <div className="text-3xl lg:text-5xl font-extrabold text-center mb-7 mt-6 ml-2 mr-2 text-[#0000FF]">
                Kamdhenu
            </div>
            <div className="text-3xl lg:text-5xl font-extrabold text-center mb-7 mt-6 text-[#000000]">
                Today !
            </div>

        </div>
        <div className='flex-col justify-center'>
            <div className='text-center font-semibold text-sm md:text-xl md:mr-12 md:ml-12'>
                We invite you to be part of our growing family.
                Whether you’re looking to further your education, 
                enhance your skills, or launch your career, 
                Kamdhenu is here to help you achieve your dreams.
            </div>
            <div className='flex justify-center mb-16'>
                <button onClick={()=> navigate("/signup") } className='w-24 md:w-32 h-6 md:h-10 font-semibold hover:bg-blue-600 text-black hover:text-white text-xs md:text-lg rounded-xl bg-[#D9D9D9] mt-3 md:mt-5'>Join Us Now</button>
            </div>

        </div>    
        
    </div>
  )
}

export default Works
