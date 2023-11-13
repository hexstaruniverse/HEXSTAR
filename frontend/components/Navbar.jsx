import React from 'react'
import Image from 'next/image'
import {GiHamburgerMenu} from 'react-icons/gi'
import Button from './Button'
const Navbar = () => {
  return (
    <nav className='grid items-center justify-between h-20 grid-cols-2 text-white md:grid-cols-6'>
        <Image width={0} height={0} className='w-20 col-span-1 ml-4 lg:w-24 lg:ml-14' src="logo.svg" alt="hexstar universe" />
        <ul className='flex-row items-center hidden col-span-3 capitalize space-x-7 md:flex'>
            <li >all program</li>
            <li>For institutions</li>
            <li>about</li>
        </ul>
        <div className="flex items-center col-span-1 justify-evenly md:justify-center md:gap-5 md:col-span-2 ">
            <button className='hidden md:inline'>Login</button>
            <button className='px-3 capitalize text-xs bg-[#6637ED] h-8 rounded-md md:text-base '>become an instructor</button>
            {/* <Button title="become an instructor"/> */}
            <button className='text-3xl md:hidden'><GiHamburgerMenu/></button>
        </div>
    </nav>
  )
}

export default Navbar