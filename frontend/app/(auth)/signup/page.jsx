import {FcGoogle} from 'react-icons/fc';
import {FaLinkedinIn} from 'react-icons/fa';

const signup = () => {
  return (
    <div className='mt-16 h-screen bg-center bg-cover bg-[#1e1e1e] text-white flex flex-col gap-10 items-center' style={{
      backgroundImage: `url('/signup-grid.svg')`,
    }}>
      <div>
        <img src="/logo2.svg" alt="hexstar universe" className='h-16 md:h-28'/>
      </div>
      <div className="border border-[#d9d9d9] p-6 rounded-lg bg-[#1f1f1f]  w-3/4 flex flex-col gap-4 md:w-[600px]" >
        <input type="text" className='p-2 bg-transparent border rounded-md' placeholder='Full Name' />
        <input type="email" className='p-2 bg-transparent border rounded-md' placeholder='Email' />
        <input type="password" className='p-2 bg-transparent border rounded-md' placeholder='Password' />
        <input type="password" className='p-2 bg-transparent border rounded-md' placeholder='Confirm Password' />
        <button className='px-3 capitalize text-base bg-[#6637ED] h-8 rounded-md md:text-lg md:h-10'>Sign Up</button>
          <p className='text-xs text-center md:text-sm'>Already have an account? <span className='underline'>Log In</span></p>
        <div className='text-xs flex items-center justify-center gap-1 text-center md:text-sm md:gap-8'>
          <button className='p-2 rounded-md border border-[#d9d9d9] md:px-4'>Sign Up with <FcGoogle className='inline'/></button> 
          <span> or </span>
          <button className='p-2 rounded-md border border-[#d9d9d9] md:px-4'>Sign Up with <FaLinkedinIn className='inline text-sm p-0.5 rounded-sm bg-blue-600 text-white'/></button>
          </div>
      </div>
    </div>
  )
}

export default signup