import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div className=' flex gap-4 flex-col items-center py-16' id="#speciality">
            <h1 className=' text-3xl font-medium '> Find by Specialtiy</h1>
            <p className='sm:w-13 text-center text-sm'>
                Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Ullam vero
            </p>
            <div  className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {
                    specialityData.map((item, index) => (
                        <Link onClick={()=>scrollTo(0,0)} className="flex flex-col item-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"key={index} to={`/doctor/${item.speciality}`}>
                            <img  className='w-16 sm:w-24 mb-2'src={item.image} alt="" />
                            <p>{item.speciality}</p>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default SpecialityMenu