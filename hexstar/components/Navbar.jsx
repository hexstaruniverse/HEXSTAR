import React from 'react'
// import Image from 'next/image'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
  return (
    <nav className='border-2  border-white bg-[#1E1E1E] text-white h-20 grid grid-cols-2 justify-between items-center md:grid-cols-6'>
        <img className='col-span-1 ml-4 w-20 lg:w-24 lg:ml-14' src="logo.svg" alt="hexstar universe" />
        <ul className='col-span-3 capitalize space-x-7 items-center hidden md:flex flex-row'>
            <li >all program</li>
            <li>For institutions</li>
            <li>about</li>
        </ul>
        <div className="col-span-1 flex justify-evenly items-center md:justify-center md:gap-5 md:col-span-2 ">
            <button className='hidden md:inline'>Login</button>
            <button className='px-3 capitalize text-xs bg-[#6637ED] h-9 rounded-md md:text-base '>become an instructor</button>
            <button className='text-3xl md:hidden'><GiHamburgerMenu/></button>
        </div>
    </nav>
  )
}

export default Navbar