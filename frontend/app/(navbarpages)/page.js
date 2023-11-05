import Image from "next/image"
export default function Home() {
  return (
    <div>
      <div id="hero" className="flex flex-col md:mt-8 md:flex-row md:justify-between">
        <div className="relative md:w-full md:mt-[-6rem]">
          <Image
            className="w-fit h-fit md:hidden"
            width={0}
            height={0}
            src="saturn.svg"
            alt="saturn"
          />
          <Image
            className="w-1/2 h-fit max-md:hidden"
            width={0}
            height={0}
            src="saturnLarge.svg"
            alt="saturnLarge"
          />
          <div id="content" className="absolute leading-snug top-1/3 left-10 ">
            <h1 className="text-2xl md:text-7xl font-extrabold  text-[#FFFFFF]">
               Learn from the <br className="max-md:hidden" /> pioneers <br className="md:hidden" /> of Aerospace 
            </h1>
            <br className="max-md:hidden"/>
            <h6 className="w-3/4 text-[.45rem] md:text-lg font-extralight text-[#FFFFFF]">
              Space is the next frontier, Space industry will grow up to $800
              billion within next 5 years. Skill up yourself and become industry
              ready
            </h6>
            <br className="max-md:hidden"/>
            <button className='px-5 mt-2 capitalize text-xs  bg-[#6637ED] text-[#FFFFFF] font-bold h-7 md:h-12 md:w-44  rounded-md md:text-lg '>All Programs</button>
          </div>
        </div>
       
        <div className="flex justify-center md:w-3/4 md:mr-[-2rem] ">
          <Image
              className="w-fit h-fit md:hidden"
              width={0}
              height={0}
              src="globe.svg"
              alt="globe"
            />
          <Image
              className="w-5/6 h-fit max-md:hidden"
              width={0}
              height={0}
              src="homeGlobe.svg"
              alt="homeGlobe"
            />
        </div>
      </div>
      <div id="workingAt" className="">
        <h1>They are working at</h1>
      </div>
    </div>
  )
}
