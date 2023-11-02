import Image from "next/image";
export default function Institution() {
  return (
    <div>
      <div id="hero" className="relative">
        {/* <Image width={500} height={1000} src="institutionFrame.svg" alt="Frame" /> */}
        <div id="content" className="absolute top-1/3 left-10">
          <h1 className="text-2xl font-extrabold  text-[#FFFFFF]">
            Pioneering Space <br /> Education for {" "}
            <p className="inline text-[#6637ED]">Institutions</p>
          </h1>
          <h6 className="w-3/4 text-[.45rem] font-extralight text-[#FFFFFF]">
            Space is the next frontier, Space industry will grow up to $800
            billion within next 5 years. Skill up yourself and become industry
            ready
          </h6>
          <button className='px-5 mt-2 capitalize text-xs  bg-[#6637ED] text-[#FFFFFF] font-bold h-7  rounded-md md:text-base '>Contact Us</button>
        </div>
        <Image
          className="w-fit h-fit "
          width={0}
          height={0}
          src="saturn.svg"
          alt="Frame"
        />
      </div>
      <div className="flex justify-center">
      <Image
          className="w-fit h-fit "
          width={0}
          height={0}
          src="globe.svg"
          alt="globe"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-2xl text-center font-extrabold  text-[#FFFFFF]">
            We {" "}
              <p className="inline text-[#6637ED]">Offer</p>
        </h1>
        <Image
          className="w-fit h-fit "
          width={0}
          height={0}
          src="squareFrame.svg"
          alt="squareFrame"
        />
      </div>
      {/*All Programs*/}
      <div className="mt-8 relative p-10 bg-whiteSquareFrame">
        <h1 className="text-3xl text-center font-extrabold  text-[#1B1B1B]">
           All Programs
        </h1>
        <div className="grid grid-cols-2 gap-4 my-5">
          <div className="bg-[#1B1B1B] rounded-lg h-52">
            <Image
              className="w-fit h-fit mt-5"
              width={0}
              height={0}
              src="spaceship.svg"
              alt="spaceship"
            />
            <div className="mt-14 ml-4">
              <h1 className="text-sm font-extrabold  w-fit text-[#FFFFFF]">Aerospace<br/><a className="text-xxs mt-0 font-extrabold w-fit text-[#FFFFFF]" href="#">All Programs&gt;&gt;</a></h1>
           </div>
          </div>
          <div className="bg-[#1B1B1B] rounded-lg h-52">
            <Image
              className="w-fit h-fit mt-5"
              width={0}
              height={0}
              src="spaceship.svg"
              alt="spaceship"
            />
            <div className="mt-14 ml-4">
              <h1 className="text-sm font-extrabold  w-fit text-[#FFFFFF]">Aerospace<br/><a className="text-xxs mt-0 font-extrabold w-fit text-[#FFFFFF]" href="#">All Programs&gt;&gt;</a></h1>
           </div>
          </div>
          <div className="bg-[#1B1B1B] rounded-lg h-52">
            <Image
              className="w-fit h-fit mt-5"
              width={0}
              height={0}
              src="spaceship.svg"
              alt="spaceship"
            />
            <div className="mt-14 ml-4">
              <h1 className="text-sm font-extrabold  w-fit text-[#FFFFFF]">Aerospace<br/><a className="text-xxs mt-0 font-extrabold w-fit text-[#FFFFFF]" href="#">All Programs&gt;&gt;</a></h1>
           </div>
          </div>
          <div className="bg-[#1B1B1B] rounded-lg h-52">
            <Image
              className="w-fit h-fit mt-5"
              width={0}
              height={0}
              src="spaceship.svg"
              alt="spaceship"
            />
            <div className="mt-14 ml-4">
              <h1 className="text-sm font-extrabold  w-fit text-[#FFFFFF]">Aerospace<br/><a className="text-xxs mt-0 font-extrabold w-fit text-[#FFFFFF]" href="#">All Programs&gt;&gt;</a></h1>
           </div>
          </div>
        </div>
      </div>
      {/*All Programs Ends*/}

      {/*Our Mentors*/}
      <div className="mt-8">
        <h1 className="text-2xl text-center font-extrabold  text-[#FFFFFF]">
            Our {" "}
              <p className="inline text-[#6637ED]">Mentors</p>
        </h1>
        <p  className="w-3/4 text-[.7rem] font-extralight text-[#FFFFFF]">Learn from who you want to be.Learn from top industry practitioner</p>
        <div className="grid grid-cols-2 gap-4 my-5">
          <div className="rounded-lg h-52 border-white border-2">
            <Image
              className="w-fit h-fit mt-5 rounded-full border-[#6637ED] border-8"
              width={0}
              height={0}
              src="mentor.svg"
              alt="mentor"
            />
          <div className=' text-center border-white border-2 capitalize text-xs  text-[#FFFFFF] font-bold h-7  rounded-md md:text-base '>Veronica</div>
          <div className=' text-center capitalize text-xs  text-[#777777] font-semibold h-7  rounded-md md:text-base '>Veronica</div>
          <Image
              className="w-fit h-fit"
              width={0}
              height={0}
              src="thinkRbital.svg"
              alt="thinkRbital"
            />
          </div>          
        </div>
        <div className="text-[#6637ED]"><a>See More -&gt;</a></div>
      </div>
      {/*Our Mentors Ends*/}

      

    </div>
  );
}
 