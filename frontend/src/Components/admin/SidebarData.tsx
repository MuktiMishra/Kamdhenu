import React, { useState } from "react";
import { FaBars, FaTimes, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface SidebarDataProps {
  onItemClick: (id: number) => void; 
}

const SidebarData: React.FC<SidebarDataProps> = ({ onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCancel = () => {
    navigate('/admin/dashboard')

  }

  return (
    <div className="flex h-screen">
     
      <div
        className={`fixed top-0 left-0 h-full bg-blue-600 text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 w-64`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-blue-700">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <button
            className="text-white md:hidden"
            onClick={toggleSidebar}
          >
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 mt-5 px-4">
          <li className="flex items-center gap-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer"
          onClick={() => {onItemClick(1); setIsOpen(false)}}> 
            <FaGraduationCap size={20} />
            <span>Education Support</span>
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer"
          onClick={() => {onItemClick(2); setIsOpen(false)}}>
            <FaBriefcase size={20} />
            <span>Training Support</span>
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer"
          onClick={() => {onItemClick(3); setIsOpen(false)}}>
            <FaBriefcase size={20} />
            <span>Placement Support</span>
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer"
          onClick={handleCancel}>
            <FaAnglesLeft size={20}/>
            <span>Cancel</span>
          </li>
        </ul>
      </div>

     
      <div className="flex-1 ml-0 md:ml-64">
       
        <button
          className="absolute top-4 left-4 text-blue-800 md:hidden z-50"
          onClick={toggleSidebar}
        >
          {!isOpen ? <FaBars size={24} />: ""}
        </button>

        
       
      </div>
    </div>
  );
};

export default SidebarData;
