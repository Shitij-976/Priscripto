import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-cols md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10" >
      {/* left-side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text=5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br />
          with Trusted Doctors
        </p>
        <div className=" flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className="hidden sm:block" />
            Fugit voluptas dolore tempora qui. Volufugit ea cupiditate, conse
          </p>
        </div>

        <a href="#speciality" className="flex gap-4 items-center text-black font-light border py-3 px-8 rounded-full bg-white m-auto md:m-10 hover:scale-105 transition-all duration-300">
          Book Appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* right-side */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img
        } alt="" />
      </div>
    </div>
  );
};

export default Header;
