import React, { useState } from 'react';
import { Home, Users, Calendar, MessagesSquare, CreditCard, MoreVertical, Settings, Menu } from 'lucide-react';
import LOGO from "./images/logo.png";
import Doctor from "./images/Doctor.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white shadow-md p-3 pr-6 flex  justify-between ${isOpen ? "rounded-none flex-col items-start" : "rounded-full items-center flex-row"} mx-2`}>
      {/* Left Side - Logo and Menu */}
      <div className={`flex items-center justify-between w-full lg:w-40`}>
        <img className='h-8 mr-4' src={LOGO} alt="LOGO" />
        <button
          className="lg:hidden block text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Center - Navigation Links */}
      <div className={`lg:flex lg:items-center lg:justify-center justify-start flex-col lg:flex-row flex-1 ${isOpen ? 'block ' : 'hidden'}  lg:block`}>
        <div className="flex flex-col lg:flex-row lg:space-x-2 mt-4 lg:mt-0">
          <a href="#" className="flex items-center py-3 lg:py-1 px-2 hover:bg-[#01f0d0] lg:px-1 text-xs rounded-lg lg:bg-transparent"><Home className="mr-2" size={16} /> Home</a>
          <a href="#" className="flex items-center py-3 lg:py-1 px-2 hover:bg-[#01f0d0] lg:px-1 text-xs rounded-lg lg:bg-transparent"><Users className="mr-2" size={16} /> Patients</a>
          <a href="#" className="flex items-center py-3 lg:py-1 px-2 hover:bg-[#01f0d0] lg:px-1 text-xs rounded-lg lg:bg-transparent"><Calendar className="mr-2" size={16} /> Schedule</a>
          <a href="#" className="flex items-center py-3 lg:py-1 px-2 hover:bg-[#01f0d0] lg:px-1 text-xs rounded-lg lg:bg-transparent"><MessagesSquare className="mr-2" size={16} /> Messages</a>
          <a href="#" className="flex items-center py-3 lg:py-1 px-2 hover:bg-[#01f0d0] lg:px-1 text-xs rounded-lg lg:bg-transparent"><CreditCard className="mr-2" size={16} /> Transactions</a>
        </div>
      </div>

      {/* Right Side - Doctor Info */}
      <div className="hidden lg:flex items-center pl-4">
        <img className="h-10 w-10 rounded-full mr-4" src={Doctor} alt="Doctor" />
        <div className="text-left pr-3 border-r-2 border-gray-200">
          <h1 className='text-sm font-bold mb-0 pb-0'>Dr. Jose Simmons</h1>
          <span className="text-gray-500 text-xs mt-0 pt-0">General Practitioner</span>
        </div>
        <div className="flex space-x-2 ml-4">
          <Settings className="text-gray-700" />
          <MoreVertical className="text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
