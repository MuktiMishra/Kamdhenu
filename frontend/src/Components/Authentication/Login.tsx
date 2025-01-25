import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'; 

interface SignupProps{
    children?: React.ReactNode; 
}

const Login : React.FC<SignupProps>= () => {
        const navigate = useNavigate(); 
        const [formData , setFormData] = useState({
          aadharNumber: '',
          password: ''
        });
        
      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
          setFormData({...formData , [e.target.name]:e.target.value});
          console.log(formData)
        }
      
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          console.log("came in login")

          try {
            const { aadharNumber, password } = formData; 
            const response: any = await axios.post(`${import.meta.env.VITE_APP_API_URL}/user/login`, {aadharNumber: aadharNumber, phoneNo: password})

            if (response.status === 200 || response.status === 201) {
              toast.success("Login successful")
              Cookies.set("userToken", response.data.data.token)
              navigate("/dashboard")
            }
          } catch (err: any) {
            console.log(err)
            toast.error(err.response.data.message || "Login unsuccessful")
          }
        };
      
  return (
    <div>
        <div className="text-3xl md:text-4xl font-extrabold text-center mt-5 mb-5 text-[#000000]">
            Welcome Back to <span className='text-[#0000ff]'>Kamdhenu</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-start'>
            <div className='items-center justify-center m-3 md:flex' >
                <img src='./Login.jpg' className='w-[80%] '/>
            </div>

            {/* Signup form */}
            <div className='flex flex-col w-80 md:w-96 justify-center items-center gap-4 shadow-md rounded-md m-4 md:mt-7'>
                <div className="text-2xl md:text-3xl font-bold text-center mt-5 mb-10 text-[#000000]">
                    Login
                </div>
                
                <input type="number" className="w-72 lg:w-80 h-7 p-4 rounded-md bg-slate-200" name='aadharNumber' placeholder="Aadhar Number" onChange={handleChange} />
                <input type="password" className="w-72 lg:w-80 h-7 p-4 rounded-md bg-slate-200" name='password' placeholder="Password" onChange={handleChange} />
               

                <button 
                className='w-40 h-8 font-semibold text-[#0000FF] hover:text-white bg-[#DFE4FF] mt-5 rounded-md hover:bg-blue-700'
                onClick={handleSubmit}>
                Login
                </button>
                
                <div className="text-sm md:text-base text-center text-[#000000] mb-6">
                    Don't have an account? <Link to="/signup"><span className='text-[#0000ff] cursor-pointer'>Signup</span></Link>
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Login
