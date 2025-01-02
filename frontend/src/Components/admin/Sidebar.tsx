import React, { useState } from "react";
import { FaBars, FaTimes, FaGraduationCap, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";

interface SidebarProps {
  onItemClick: (id: number) => void; 
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
          onClick={() => onItemClick(1)}> 
            <FaGraduationCap size={20} />
            <span>Education</span>
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer"
          onClick={() => onItemClick(2)}>
            <FaChalkboardTeacher size={20} />
            <span>Training</span>
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer"
          onClick={() => onItemClick(3)}>
            <FaBriefcase size={20} />
            <span>Placement</span>
          </li>
        </ul>
      </div>

     
      <div className="flex-1 ml-0 md:ml-64">
       
        <button
          className="absolute top-4 left-4 text-blue-800 md:hidden z-50"
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </button>

        
       
      </div>
    </div>
  );
};

export default Sidebar;
