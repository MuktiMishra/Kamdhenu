import React , {useState} from 'react'

interface SignupProps{
    children?: React.ReactNode; 
}

const Signup : React.FC<SignupProps>= () => {
    
        const [formData , setFormData] = useState({
          firstName: '',
          lastName: '',
          aadharNumber: '',
          emailId: '',
          password: '',
          confirmPassword: ''
        });
        
      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
          setFormData({...formData , [e.target.name]:e.target.value});
        }
      
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
        };
      
  return (
    <div>
        <div className="text-3xl md:text-4xl font-extrabold text-center mt-5 mb-5 text-[#000000]">
            Empower Your Future with <span className='text-[#0000ff]'>Kamdhenu</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
            <div className='items-center justify-center hidden m-5 md:flex' >
                <img src='./signup.png' className='h-[60%] w-[60%] '/>
            </div>

            {/* Signup form */}
            <div className='flex flex-col w-80 md:w-96 justify-center items-center gap-4 shadow-md rounded-md m-4'>
                <div className="text-2xl md:text-3xl font-bold text-center mt-5 mb-10 text-[#000000]">
                    Sign Up 
                </div>
                <div className='flex gap-1'>
                    <input type="text" className="w-36 p-3 lg:w-40 h-7 text-center rounded-md bg-slate-200" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    <input type="text" className="w-36 p-3 lg:w-40 h-7 text-center rounded-md bg-slate-200" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                </div>
                <input type="number" className="w-72 p-3 lg:w-80 h-7 rounded-md bg-slate-200" placeholder="Aadhar Number" value={formData.aadharNumber} onChange={handleChange} />
                <input type="text" className="w-72 p-3 lg:w-80 h-7 rounded-md bg-slate-200" placeholder="Email" value={formData.emailId} onChange={handleChange} />
                <input type="password" className="w-72 p-3 lg:w-80 h-7 rounded-md bg-slate-200" placeholder="Password" value={formData.password} onChange={handleChange} />
                <input type="password" className="w-72 p-3 lg:w-80 h-7 rounded-md bg-slate-200" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />

                <button 
                className='w-40 h-8 font-semibold text-[#0000FF] hover:text-white bg-[#DFE4FF] mb-6 mt-5 rounded-md hover:bg-blue-700'
                onSubmit={handleSubmit}>
                Sign Up
                </button>

                <div className="text-sm md:text-base text-center text-[#000000] mb-6">
                    Already have an account? <span className='text-[#0000ff]'>Login</span>
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Signup
