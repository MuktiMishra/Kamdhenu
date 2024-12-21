import React, { useState } from 'react'

interface HeaderProps {
    children?: React.ReactNode;
}

const Header : React.FC<HeaderProps> = ({children}) => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    return(
        <div className='sticky top-0 z-10 bg-white shadow-md'>
            <div 
            className='flex justify-between items-center text-black py-6 px-8
            md:px-32 bg-white drop-shadow-md' 
            >
                <span className='xl:text-xl text-lg font-bold text-blue-700 hover:scale-125 transition all justify-start'>
                    Kamdhenu
                </span>

                <ul className='hidden xl:flex items-center gap-9 font-semibold text-base flex-nowrap'>
                    <li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Home</li>
                    <li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>About us</li>
                    <li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Programs</li>
                    <li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Our Gallery</li>
                    <li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Testimonials</li>
                    <li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Contact</li>
                    <button className='bg-[#B0C4DE] rounded-2xl hover:bg-blue-600  hover:text-white text-lg h-9 w-20 font-semibold'>Login</button>
                    <button className='bg-[#B0C4DE] rounded-2xl  hover:bg-blue-600 hover:text-white  text-lg h-9 w-20 font-semibold '>Signup</button>

                </ul>
                
                
                <i className='bx bx-menu xl:hidden block 
                text-4xl cursor-pointer' onClick={()=>(setIsMenuOpen(!isMenuOpen))}>      
                </i>

                <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform 
                ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <div className="flex justify-center gap-4 my-4">
                        <button className="bg-[#B0C4DE] rounded-lg hover:bg-blue-500 hover:text-white text-lg h-10 w-24">
                          Login
                        </button>
                        <button className="bg-[#B0C4DE] rounded-lg hover:bg-blue-500 hover:text-white text-lg h-10 w-24">
                          Signup
                        </button>
                    </div>
                    <li className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                    Home
                    </li>
                    
                    <li className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        About Us
                    </li>

                    <li className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        Programs
                    </li>

                    <li className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        Our Gallery
                    </li>

                    <li className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        Testimonials
                    </li>

                    <li className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        Contact Us
                    </li>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header
