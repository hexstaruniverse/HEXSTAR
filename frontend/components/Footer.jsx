import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';
import {AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
import {RiTwitterXFill} from 'react-icons/ri';
import Image from 'next/image';
const footer = () => {
  return (
    <footer className='mx-4 text-white h-1/2 md:mx-16'>
      <div className='grid gap-6 mb-16 leading-9 capitalize md:grid-cols-custom '>
        <div className='flex flex-col gap-10 mb-5 md:col-span-8 '>
          <div className="flex gap-5 logo">
            <Image width={0} height={0} src="/logo.svg" className="w-28" alt="hexstar universe" />
            <Image width={0} height={0} src="/BrandAssest.svg" className='w-32 border-l border-l-[#afadad]' alt="SMT brand Assest"  />
          </div>
          <div className="relative flex flex-col h-24 gap-3 newsletter md:flex-row md:h-10">
            <input type="email" className='px-4 py-3 rounded-md md:w-80 text-base  bg-transparent border md:rounded-xl border-[#999898]' placeholder='Enter your email'/>
            <button className='flex w-32 absolute right-0 bottom-0 gap-1 items-center justify-center px-3 text-white bg-[#6637ED] h-10 rounded-md  md:static'>Subscribe <AiOutlineArrowRight/></button>
          </div>
          <div className="flex gap-10 text-xl social-media">
            <BsFacebook/>
            <AiFillInstagram/>
            <BsLinkedin/>
            <RiTwitterXFill/>
          </div>
        </div>
        <div className='md:col-span-3 '>
          <h3 className='text-[24px]'><b>Domain</b></h3>
          <ul className='text-[#A2A2A2]'>
            <li>Areospace</li>
            <li>AI/ML</li>
            <li>Astrobiology</li>
            <li>Astronomy</li>
            <li>Space Law</li>
          </ul>
        </div>
        <div className=' md:col-span-3'>
          <h3 className='text-[24px]'><b>learner's club</b></h3>
          <ul className=' text-[#A2A2A2]'>
            <li>free workshops</li>
            <li>blogs</li>
            <li>resources</li>
            <li>training programs</li>
          </ul>
        </div>
        <div className='md:col-span-3'>
          <h3 className='text-[24px]'><b>Quick links</b></h3>
          <ul className='text-[#A2A2A2]'>
            <li>Apply as mentor</li>
            <li>for institutions</li>
            <li>contact us</li>
            <li>Astronomy</li>
            <li>space law</li>
          </ul>
        </div>

        <div className='md:col-span-3'>
          <h3 className='text-[24px]'><b>company</b></h3>
          <ul className='text-[#A2A2A2]'>
            <li>about us</li>
            <li>contact us</li>
            <li>refund policy</li>
            <li>careers</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
      </div>
      <hr className='w-3/4 m-auto border-t-[#6e6e6e] '/>
      <div className="copyright flex flex-col items-center my-4  mx-auto  text-[#6e6e6e] text-sm ">
       <span>&#169; 2023 Hex-Star Universe<span className='hidden md:inline'> ,All right reserved</span></span>
      </div>
    </footer>
  )
}

export default footer