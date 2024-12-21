import React, { useState } from "react";

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Programs", link: "/programs" },
    { name: "Our Gallery", link: "/gallery" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex justify-between items-center w-full px-6 md:px-32 py-4">
        {/* Kamdhenu Heading */}
        <span className="text-lg xl:text-xl font-bold text-blue-700 hover:scale-125 transition-transform">
          Kamdhenu
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-base">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`list-none p-2 hover:bg-blue-600 hover:text-white rounded-md transition-all cursor-pointer ${
                currentPage === item.link ? "bg-blue-600 text-white" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
          <button className="bg-[#B0C4DE] rounded-2xl hover:bg-blue-600 hover:text-white text-lg h-9 w-20 font-semibold">
            Login
          </button>
          <button className="bg-[#B0C4DE] rounded-2xl hover:bg-blue-600 hover:text-white text-lg h-9 w-20 font-semibold">
            Signup
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <i
          className="bx bx-menu md:hidden text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute md:hidden top-full left-0 w-full bg-white flex flex-col items-center font-semibold text-base transition-all ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        {/* Buttons on Top */}
        <div className="flex justify-center gap-4 my-4">
          <button className="bg-[#B0C4DE] rounded-lg hover:bg-blue-500 hover:text-white text-lg h-10 w-24">
            Login
          </button>
          <button className="bg-[#B0C4DE] rounded-lg hover:bg-blue-500 hover:text-white text-lg h-10 w-24">
            Signup
          </button>
        </div>

        {/* Mobile Menu Items */}
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`list-none w-full text-center py-3 hover:bg-blue-500 hover:text-white transition-all cursor-pointer ${
              currentPage === item.link ? "bg-blue-500 text-white" : ""
            }`}
          >
            {item.name}
          </li>
        ))}
      </div>
    </header>
  );
};

export default Header;
