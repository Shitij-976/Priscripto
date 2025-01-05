import React, { useState } from "react";
import { assets } from "./../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate  = useNavigate();

const [showMenu, setShowMenu] = useState(false)
const [token, setToken] = useState(true)

  return (
    <div className=" flex items-center justify-between text-sm py-4 mb-5 border-b border-b-black">
      <img className=" w-44 cursor-pointer" src={assets.logo} />
      <ul className=" items-start gap-5 hidden md:flex ">
        <NavLink to="/">
          <li className="py-2">Home</li>
          <hr
            className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden
           "
          />
        </NavLink>
        <NavLink to="/doctor">
          <li className="py-2">All Doctors</li>
          <hr
            className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden
          "
          />
        </NavLink>
        <NavLink to="/about">
          <li className="py-2">About</li>
          <hr
            className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden
          "
          />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-2">Contact</li>
          <hr
            className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden
          "
          />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
          token 
          ?<div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className=" absolute top-0 right-0  pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex-cols gap-4 p-4">
                <p  onClick={()=> navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p  onClick={()=> navigate("/my-appointment")} className="hover:text-black cursor-pointer">Appointment</p>
                <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div> 
            </div>
          </div>
        : <button onClick={()=>setToken(true)} className=" bg-primary text-white px-7 py-3 rounded-full font-light ">
            Create Account
          </button>}
        
      </div>
    </div>
  );
};

export default Navbar;
