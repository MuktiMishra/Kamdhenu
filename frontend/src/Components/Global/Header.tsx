import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
interface HeaderProps {
    children?: React.ReactNode;
}

const Header : React.FC<HeaderProps> = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); 
    return(
        <div className='sticky top-0 z-10 bg-white shadow-md'>
            <div 
            className='flex justify-between lg:justify-around items-center text-black py-6 px-8
            md:px-32 bg-white drop-shadow-md' 
            >
                
                
                <ul className='hidden xl:flex items-center gap-9 font-semibold text-base flex-nowrap'>
                <span onClick={() => navigate('/')} className='cursor-pointer font-bold lg:text-[1.4rem] text-blue-700 hover:scale-125 transition all justify-start'>
                    Kamdhenu
                </span>
                   
                    <Link to='/'><li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Home</li></Link>
                    <Link to='/aboutus'><li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>About us</li></Link>
                    <Link to='/programs'><li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Programs</li></Link>
                    <Link to='/gallery'><li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Our Gallery</li></Link>
                    <Link to='/testimonials'><li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Testimonials</li></Link>
                    <Link to='/contact'><li className='p-2 whitespace-nowrap hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer '>Contact</li></Link>
                    <Link to='/login'><button className='bg-[#B0C4DE] rounded-2xl hover:bg-blue-600  hover:text-white text-lg h-9 w-20 font-semibold'>Login</button></Link>
                    <Link to='/signup'><button className='bg-[#B0C4DE] rounded-2xl  hover:bg-blue-600 hover:text-white  text-lg h-9 w-20 font-semibold '>Signup</button></Link>

                </ul>

                <span className='xl:text-xl xl:hidden sm:text-lg font-bold text-blue-700 hover:scale-125 transition all justify-start'>
                    Kamdhenu
                </span>
                <i className='bx bx-menu xl:hidden block 
                text-4xl cursor-pointer' onClick={()=>(setIsMenuOpen(!isMenuOpen))}>      
                </i>

                {isMenuOpen && (<div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform 
                ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <div className="flex justify-center gap-4 my-4">
                        <button onClick={() => {setIsMenuOpen(false); navigate('/login')}} className="bg-[#B0C4DE] rounded-lg hover:bg-blue-500 hover:text-white text-lg h-10 w-24">
                          Login
                        </button>
                        <button onClick={() => {setIsMenuOpen(false); navigate('/signup')}} className="bg-[#B0C4DE] rounded-lg hover:bg-blue-500 hover:text-white text-lg h-10 w-24">
                          Signup
                        </button>
                    </div>
                    <Link to="/">
                    <li onClick={() => setIsMenuOpen(false)} className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                    Home
                    </li>
                    </Link>
                    
                    <Link to="/aboutus">
                    <li onClick={() => setIsMenuOpen(false)} className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        About Us
                    </li>
                    </Link>
                    
                    <Link to="/programs">
                    <li onClick={() => setIsMenuOpen(false)} className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        Programs
                    </li>
                    </Link>
                     
                    <Link to='/gallery'>
                    <li onClick={() => setIsMenuOpen(false)} className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        Our Gallery
                    </li>
                    </Link>
                    
                    <Link to='/testimonials'>
                    <li onClick={() => setIsMenuOpen(false)} className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        Testimonials
                    </li>
                    </Link>
                    
                    <Link to='/contact'>
                    <li onClick={() => setIsMenuOpen(false)} className='list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer'>
                        Contact Us
                    </li>
                    </Link>
                </div>
                )}
            </div>
            
        </div>
    )
}

export default Header
