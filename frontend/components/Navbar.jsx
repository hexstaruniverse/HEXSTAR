import React from 'react'
// import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='m-2 p-2 grid grid-cols-2 justify-between min-w-full'>
        <img className='col-span-1 w-32 max-w-none' src="logo.svg" alt="hexstar universe " />
        <ul className='col-span-3 capitalize flex space-x-7 items-center hidden '>
            <li >all program</li>
            <li>For institutions</li>
            <li>about</li>
        </ul>
        <div className="col-span-1 flex space-x-10">
            <button>login</button>
            <button>become an instructor</button>
        </div>
    </nav>
  )
}

export default Navbar