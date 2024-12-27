import React, { useState } from "react";

const AdminLogin: React.FC = () => {
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
    <div className="flex flex-col items-center p-4 md:p-8">
      <div className="text-3xl md:text-4xl font-extrabold text-center mt-5 mb-5 text-[#000000]">
        Welcome <span className="text-[#0000ff]">Admin</span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl gap-5">
        {/* Left Image Section */}
        <div className="hidden md:flex items-center justify-center w-full">
          <img
            src="admin.png"
            alt="Admin Illustration"
            className="w-[70%] md:w-[50%] mt-5"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full md:w-[60%] max-w-sm mx-auto md:mx-0 shadow-md rounded-md bg-white p-5 md:p-8">
          <div className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#000000]">
            Login
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-lg font-medium text-gray-700 text-start mb-2"
            >
              Select your role:
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
              className="w-full h-10 px-3 rounded-md bg-slate-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full h-10 px-3 rounded-md bg-slate-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="w-full h-10 px-3 rounded-md bg-slate-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            className="w-full h-10 font-semibold text-white bg-[#0000FF] hover:bg-blue-700 rounded-md transition mt-5"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>

     
        <div className="flex md:hidden items-center justify-center mt-5">
          <img
            src="admin.png"
            alt="Admin Illustration"
            className="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
