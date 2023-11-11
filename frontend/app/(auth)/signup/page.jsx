"use client";
import {FcGoogle} from 'react-icons/fc';
import {FaEye, FaEyeSlash, FaLinkedinIn} from 'react-icons/fa';
import { useState } from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// const response = await fetch(url, {
//   method: "POST", 
//   mode: "cors", 
//   cache: "no-cache", 
//   credentials: "same-origin",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   redirect: "follow", // manual, *follow, error
//   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   body: JSON.stringify(data), // body data type must match "Content-Type" header
// });

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
      } else {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };
        const response = await axios.post(
         
          "https://hsu-2-0-backend.vercel.app/api/user/signup",
          {
            name:fullName,
            email,
            password,
          },
          config
        );

        console.log(response);
        router.push('/login');

      }
      
    } catch (error) {
      console.log(error);
    }
   
  }
  return (
    <div className='mt-10 md:mt-16 h-screen bg-center bg-cover bg-[#1e1e1e] text-white flex flex-col gap-10 items-center' style={{
      backgroundImage: `url('/signup-grid.svg')`,
    }}>
      <div>
        <img src="/logo2.svg" alt="hexstar universe" className='h-16 md:h-28'/>
      </div>
      <div className="border border-[#d9d9d9] p-6 rounded-lg bg-[#1f1f1f]  w-3/4 flex flex-col gap-4 md:w-[400px]" >
        <input type="text" className='p-2 bg-transparent border rounded-md' placeholder='Full Name' onChange={(e)=>setFullName(e.target.value)} />
        <input type="email" className='p-2 bg-transparent border rounded-md' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <div className='container relative w-full'>  
          <input type={showPassword ? 'text' : 'password'} className='w-full p-2 bg-transparent border rounded-md password-input-wrapper' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-white"
            onClick={togglePasswordVisibility}
            >
            {!showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className='container relative w-full'>  
          <input type={showPassword ? 'text' : 'password'} className='w-full p-2 bg-transparent border rounded-md password-input-wrapper' placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-white"
            onClick={togglePasswordVisibility}
            >
            {!showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button className='px-3 capitalize text-base bg-[#6637ED] h-8 rounded-md md:text-lg md:h-10' onClick={submitHandler}>Sign Up</button>
          <p className='text-xs text-center md:text-sm'>Already have an account? <span className='underline'>Log In</span></p>
        <div className='flex items-center justify-center gap-1 text-xs text-center md:text-sm md:gap-8'>
          <button className='p-2 rounded-md border border-[#d9d9d9] md:px-4'>Sign Up with <FcGoogle className='inline'/></button> 
          <span> or </span>
          <button className='p-2 rounded-md border border-[#d9d9d9] md:px-4'>Sign Up with <FaLinkedinIn className='inline text-sm p-0.5 rounded-sm bg-blue-600 text-white'/></button>
          </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default signup