import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';
import {AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
import {RiTwitterXFill} from 'react-icons/ri';

const footer = () => {
  return (
    <footer className='h-1/2 mx-4 md:mx-16  bg-[#1e1e1e] text-white'>
      <div className='capitalize leading-9 mb-16 gap-6 grid md:grid-cols-custom '>
        <div className='md:col-span-8 mb-5 flex flex-col gap-10 '>
          <div className="logo flex gap-5">
            <img src="/logo.svg" className="w-28" alt="hexstar universe" />
            <img src="/BrandAssest.svg" className='w-32 border-l border-l-[#afadad]' alt="SMT brand Assest"  />
          </div>
          <div className="newsletter flex flex-col relative gap-3 h-24 md:flex-row md:h-10">
            <input type="email" className='px-4 py-3 rounded-md md:w-80 text-base  bg-transparent border md:rounded-xl border-[#999898]' placeholder='Enter your email'/>
            <button className='flex w-32 absolute right-0 bottom-0 gap-1 items-center justify-center px-3 text-white bg-[#6637ED] h-10 rounded-md  md:static'>Subscribe <AiOutlineArrowRight/></button>
          </div>
          <div className="social-media flex text-xl gap-10">
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