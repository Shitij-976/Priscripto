import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className=' md:mx-10'> 
            <div className = 'flex fex-cols md:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
                {/* left side */}
                <div>
                    <img className='mb-4 w-40' src={assets.logo} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                {/* center */}
                <div>
                    <p>COMPANY</p>
                    <ul>
                        <li>Home</li>
                        <li>About Us </li>
                        <li>Contact Us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* right */}
                <div>
                    <p> GET IN TOUCH </p>
                    <ul>
                        <li>+91 1234567890</li>
                        <li>ABCD@gmail.com</li>
                    </ul>
                </div>
                {/*copy right  */}
                <div>
                    <hr />
                    <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
                </div>
           </div>
        </div>
    )
}

export default Footer