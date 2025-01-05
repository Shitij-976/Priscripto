import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-cols md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10" >
      {/* left-side */}
      <div >
        <p>
          Book Appointment <br />
          with Trusted Doctors
        </p>
        <img src={assets.group_profiles} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Fugit voluptas dolore tempora qui. Volufugit ea cupiditate, conse
        </p>
        <a href="">
            Book Appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* right-side */}
      <div>
        <img src={assets.header_img     
        } alt="" />
      </div>
    </div>
  );
};

export default Header;
