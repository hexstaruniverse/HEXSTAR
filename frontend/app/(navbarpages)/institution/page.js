import Image from "next/image";
import Program from "@/components/Program.jsx";
import MentorWhite from "@/components/MentorWhite.jsx";
import MentorBlack from "@/components/MentorBlack.jsx";
export default function Institution() {
  return (
    <div>
      <div id="hero" className="flex flex-col md:flex-row md:justify-between">
        {/* <Image width={500} height={1000} src="institutionFrame.svg" alt="Frame" /> */}
        <div className="relative md:w-3/4 ">
          <Image
            className="w-fit h-fit md:hidden"
            width={0}
            height={0}
            src="saturn.svg"
            alt="Frame"
          />
          <div id="content" className="absolute top-1/3 left-10">
            <h1 className="text-2xl md:text-6xl font-extrabold  text-[#FFFFFF]">
              Pioneering Space <br /> Education for {" "}
              <p className="inline text-[#6637ED]">Institutions</p>
            </h1>
            <br className="max-md:hidden"/>
            <h6 className="w-3/4 text-[.45rem] md:text-xs font-extralight text-[#FFFFFF]">
              Space is the next frontier, Space industry will grow up to $800
              billion within next 5 years. Skill up yourself and become industry
              ready
            </h6>
            <br className="max-md:hidden"/>
            <button className='px-5 mt-2 capitalize text-xs  bg-[#6637ED] text-[#FFFFFF] font-bold h-7 md:h-16 md:w-60  rounded-md md:text-lg '>Contact Us</button>
          </div>
        </div>
       
        <div className="flex justify-center ">
          <Image
              className="w-fit h-fit md:hidden"
              width={0}
              height={0}
              src="globe.svg"
              alt="globe"
            />
          <Image
              className="w-fit h-fit max-md:hidden"
              width={0}
              height={0}
              src="globeLarge.svg"
              alt="globeLarge"
            />
        </div>
      </div>

      <div className="mt-8  bg-blackSquareFrame">
        <h1 className="text-2xl md:text-6xl text-center font-extrabold  text-[#FFFFFF]">
            We {" "}
              <p className="inline text-[#6637ED]">Offer</p>
        </h1>
      </div>
      {/*All Programs*/}
      <div className="mt-8 relative flex flex-col items-center py-10 max-md:bg-whiteSquareFrame overflow-hidden">
        <h1 className="text-3xl  text-center font-extrabold md:hidden text-[#1B1B1B] ">
           All Programs
        </h1>
        <h1 className="hidden md:block text-6xl text-center font-extrabold  text-[#FFFFFF]">
            All {" "}
              <p className="inline text-[#6637ED]">Categories</p>
        </h1>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-8 my-10">
          <Program className="flex md:hidden bg-[#1B1B1B] text-[#FFFFFF] " image="spaceship.svg" alt="spaceship" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="flex md:hidden bg-[#1B1B1B] text-[#FFFFFF]" image="spaceship.svg" alt="spaceship" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="flex md:hidden bg-[#1B1B1B] text-[#FFFFFF]" image="spaceship.svg" alt="spaceship" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="flex md:hidden bg-[#1B1B1B] text-[#FFFFFF]" image="spaceship.svg" alt="spaceship" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="hidden md:flex bg-[#FEFEFE] text-black" image="spaceshipLarge.svg" alt="spaceshipLarge" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="hidden md:flex bg-[#FEFEFE] text-black" image="spaceshipLarge.svg" alt="spaceshipLarge" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="hidden md:flex bg-[#FEFEFE] text-black" image="spaceshipLarge.svg" alt="spaceshipLarge" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="hidden md:flex bg-[#FEFEFE] text-black" image="spaceshipLarge.svg" alt="spaceshipLarge" text="Aerospace" urlText="All Programs&gt;&gt;"/>
        </div>
        <Image
              className="w-1/5 z-[-1] h-fit min-md:hidden absolute bottom-0 mb-[-2rem] ml-[-1rem] left-0"
              width={0}
              height={0}
              src="1percent.svg"
              alt="1percent"
            />
      </div>
      {/*All Programs Ends*/}

      {/*Our Mentors*/}
      <div className="mt-8 md:bg-[#FFFFFF] relative flex flex-col items-center py-10"> 
        <h1 className="text-2xl md:text-6xl text-center font-extrabold  text-[#FFFFFF]">
            Our {" "}
              <p className="inline text-[#6637ED]">Mentors</p>
        </h1>
        <p  className="w-3/4 text-[.7rem] md:text-lg font-extralight text-[#FFFFFF]">Learn from who you want to be.Learn from top industry practitioner</p>
        <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-4 md:gap-6 m-4 my-5">
          <MentorBlack className="flex md:hidden"  mentorImage="mentor.svg" mentorAlt="mentor" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbital.svg" logoAlt="thinkRbital"/> 
          <MentorBlack className="flex md:hidden"  mentorImage="mentor.svg" mentorAlt="mentor" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbital.svg" logoAlt="thinkRbital"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
         
        </div>
        <div className="text-[#6637ED] text-sm md:text-xl font-extrabold"><a>See More -&gt;</a></div>
      </div>
      {/*Our Mentors Ends*/}
      {/*Student Success Launchpad*/}
      <div className="mt-8">
      <h1 className="text-2xl md:text-6xl text-center font-extrabold  text-[#FFFFFF]">
            Student {" "}
              <p className="inline text-[#6637ED]">Success</p>{" "}
            <br className="md:hidden"/>
            Launchpad
        </h1>
      </div>

      

    </div>
  );
}
 