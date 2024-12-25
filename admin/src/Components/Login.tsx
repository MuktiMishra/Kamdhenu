import React, { useState } from "react";

interface LoginProps {
  children?: React.ReactNode;
}

const Login: React.FC<LoginProps> = () => {
  const [formData, setFormData] = useState({
    role: "",
    username: "",
    password: "",
  });

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, role: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <div>
      <div className="text-3xl md:text-4xl font-extrabold text-center mt-5 mb-2 md:mb-5 text-[#000000]">
        Welcome <span className="text-[#0000ff]">Admin</span>
      </div>
      
      <div className="flex justify-center items-center">
      <div className="grid grid-rows-2 md:grid-cols-2 justify-center gap-1 md:gap-3 items-center m-4 ">
        
        <div className="items-center justify-center hidden m-3 md:flex">
          <img src="./admin.png" className="w-[50%] mt-5" />
        </div>

       
        <div className="flex flex-col w-80 md:w-96 justify-center items-center gap-4 shadow-md rounded-md m-0 md:m-4 md:mt-7 p-4">
          <div className="text-2xl md:text-3xl font-bold text-center mt-5 mb-10 text-[#000000]">
            Login
          </div>

          <div className="w-full">
            <label
              htmlFor="role"
              className="block text-lg font-medium text-gray-700 text-start"
            >
              Select your role:
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
              className="w-full h-9 px-3 mt-1 rounded-md bg-slate-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Role
              </option>
              <option value="Master">Master</option>
              <option value="Staff">Staff</option>
            </select>
          </div>

          <input
            type="text"
            name="username"
            className="w-full h-9 px-3 rounded-md bg-slate-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="w-full h-9 px-3 rounded-md bg-slate-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />


          <button
            className="w-40 h-10 font-semibold text-[#0000FF] hover:text-white bg-[#DFE4FF] mt-5 mb-10 rounded-md hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>

        <div className="flex items-center justify-center m-2 mt-0 md:hidden">
          <img src="./admin.png" className="w-[60%]" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
