"use client";
import {FcGoogle} from 'react-icons/fc';
import {FaLinkedinIn} from 'react-icons/fa';
import { FaEyeSlash,FaEye } from 'react-icons/fa';
import { useState } from 'react'
import axios from 'axios'

const signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault()
    try{
      const register = await axios.post('https://hsu-2-0-backend.vercel.app/api/users/login', {
        email,
        password,
      })
    }catch(error){
      toast.error('login failed',
        {
          position:"top-right",
          autoclose:5000,
          hideProgressBar:false,
          closeOnClick:true,
          draggable:true,
          progress:undefined,
          theme:"light",
        }
      )
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className='mt-10 md:mt-16 h-screen bg-center bg-cover bg-[#1e1e1e] text-white flex flex-col gap-10 items-center' style={{
      backgroundImage: `url('/signup-grid.svg')`,
    }}>
      <div>
        <img src="/logo2.svg" alt="hexstar universe" className='h-16 md:h-28'/>
      </div>
      <div className="border border-[#d9d9d9] p-6 rounded-lg bg-[#1f1f1f]  w-3/4 flex flex-col gap-4 md:w-[400px]" >
        
        <input type="email" className='p-2 bg-transparent border rounded-md' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <div className='relative w-full container'>  
          <input type={showPassword ? 'text' : 'password'} className='w-full p-2 bg-transparent border rounded-md password-input-wrapper' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-white"
            onClick={togglePasswordVisibility}
            >
            {!showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <input type="checkbox" className='inline-block  bg-transparent' /> <span className='text-xs md:text-base'>Remember Me</span>
          </div>
          <button className='text-xs md:text-base'>Forget Password?</button>
        </div>
        <button className='px-3 capitalize text-base bg-[#6637ED] h-8 rounded-md md:text-lg md:h-10' onClick={submitHandler}>Log In</button>
          <p className='text-xs text-center md:text-sm'>Create a new account? <span className='underline'>Sign up</span></p>
        <div className='text-xs flex items-center justify-center gap-1 text-center md:text-sm md:gap-8'>
          <button className='p-2 rounded-md border border-[#d9d9d9] md:px-4'>Login with <FcGoogle className='inline'/></button> 
          <span> or </span>
          <button className='p-2 rounded-md border border-[#d9d9d9] md:px-4'>Login with <FaLinkedinIn className='inline text-sm p-0.5 rounded-sm bg-blue-600 text-white'/></button>
          </div>
      </div>
    </div>
  )
}

export default signup