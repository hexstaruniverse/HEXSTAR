import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';
import {AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
import {RiTwitterXFill} from 'react-icons/ri';

const footer = () => {
  return (
    <footer className='h-1/2 bg-[#1e1e1e] text-white'>
      <div className='capitalize grid grid-cols-6 '>
        <div className='col-span-2 '>
          <div className="logo flex ">
            <img src="/logo.svg" alt="hexstar universe" />
            <img src="/BrandAssest.svg" alt="SMT brand Assest"  />
          </div>
          <div className="newsletter flex ">
            <input type="email" placeholder='enter your email'/>
            <button className='flex gap-1 items-center px-3 text-white bg-[#6637ED] h-10 rounded-md '>Subscribe <AiOutlineArrowRight/></button>
          </div>
          <div className="social-media flex">
            <BsFacebook/>
            <BsLinkedin/>
            <AiFillYoutube/>
            <RiTwitterXFill/>
            <AiFillInstagram/>
          </div>
        </div>
        <div className='col-span-1'>
          <h1>Domain</h1>
          <ul>
            <li>Areospace</li>
            <li>AI/ML</li>
            <li>Astrobiology</li>
            <li>Astronomy</li>
            <li>Space Law</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <h1>learner's club</h1>
          <ul>
            <li>free workshops</li>
            <li>blogs</li>
            <li>resources</li>
            <li>training programs</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <h1>Quick links</h1>
          <ul>
            <li>Apply as mentor</li>
            <li>for institutions</li>
            <li>contact us</li>
            <li>Astronomy</li>
          </ul>
        </div>

        <div className='col-span-1'>
          <h1>company</h1>
          <ul>
            <li>about us</li>
            <li>contact us</li>
            <li>refund policy</li>
            <li>careers</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
      </div>
      <div className="copyright">

      </div>
    </footer>
  )
}

export default footer