import Image from "next/image";
import Program from "@/components/Program.jsx";
import MentorWhite from "@/components/MentorWhite.jsx";
import MentorBlack from "@/components/MentorBlack.jsx";
import Carousel from "@/components/Carousel";
export default function Institution() {
  return (
    <div>
      <div id="hero" className="flex flex-col mt-8 md:flex-row md:justify-between">
        <Carousel/>
        <div className="relative md:w-full ">
          <Image
            className="w-fit h-fit md:hidden"
            width={0}
            height={0}
            src="saturn.svg"
            alt="Frame"
          />
          <div id="content" className="absolute top-1/3 left-10 md:top-1/4">
            <h1 className="text-2xl md:text-7xl md:leading-snug font-extrabold  text-[#FFFFFF]">
              Pioneering Space <br /> Education for {" "}
              <p className="inline text-[#6637ED]">Institutions</p>
            </h1>
            <br className="max-md:hidden"/>
            <h6 className="w-3/4 text-[.45rem] md:text-lg font-extralight text-[#FFFFFF]">
              Space is the next frontier, Space industry will grow up to $800
              billion within next 5 years. Skill up yourself and become industry
              ready
            </h6>
            <br className="max-md:hidden"/>
            <button className='px-5 mt-2 capitalize text-xs  bg-[#6637ED] text-[#FFFFFF] font-bold h-7 md:h-12 md:w-44  rounded-md md:text-lg '>Contact Us</button>
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

      <div className="mt-16 bg-blackSquareFrame">
        <h1 className="text-2xl md:text-6xl text-center font-extrabold  text-[#FFFFFF]">
            We {" "}
              <p className="inline text-[#6637ED]">Offer</p>
        </h1>
      </div>
      {/*All Programs*/}
      <div className="relative flex flex-col items-center py-10 mt-8 overflow-hidden md:pb-32 max-md:bg-whiteSquareFrame">
        <h1 className="text-3xl  text-center font-extrabold py-5 md:hidden text-[#1B1B1B] ">
           All Programs
        </h1>
        <h1 className="hidden md:block text-7xl text-center font-extrabold  text-[#FFFFFF]">
            All {" "}
              <p className="inline text-[#6637ED]">Categories</p>
        </h1>
        <div className="ml-auto mr-10 max-md:hidden">
        <Image
              className="w-3/4 h-fit"
              width={0}
              height={0}
              src="star.svg"
              alt="star"
            />
        </div>
        <div className="grid grid-cols-2 gap-4 my-10 md:grid-cols-4 md:gap-16">
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
              className="w-fit z-[-1] h-1/2 max-md:hidden absolute bottom-0 mb-[-7rem] ml-[-2rem] left-0"
              width={0}
              height={0}
              src="1percent.svg"
              alt="1percent"
            />
      </div>
      {/*All Programs Ends*/}

      {/*Our Mentors*/}
      <div className="mt-5 md:bg-[#FFFFFF] relative flex flex-col items-center pt-10"> 
        <h1 className="text-2xl md:text-7xl text-center font-extrabold  text-[#FFFFFF] md:text-[#1B1B1B] pb-10 md:pb-20">
            Our {" "}
              <p className="inline text-[#6637ED]">Mentors</p>
        </h1> 
        <p  className="px-5 text-sm md:text-lg font-extralight md:hidden text-[#FFFFFF]">Learn from who you want to be.Learn from top industry practitioner</p>
        <div className="grid items-center grid-cols-2 gap-4 m-4 my-5 md:grid-cols-5 md:gap-10 md:pb-32">
          <MentorBlack className="flex md:hidden"  mentorImage="mentor.svg" mentorAlt="mentor" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbital.svg" logoAlt="thinkRbital"/> 
          <MentorBlack className="flex md:hidden"  mentorImage="mentor.svg" mentorAlt="mentor" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbital.svg" logoAlt="thinkRbital"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorWhite className="hidden md:flex"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
        </div>
        <div className="text-[#6637ED] text-sm md:text-xl font-extrabold md:hidden"><a>See More -&gt;</a></div>
        <Image
              className="w-fit h-fit max-md:hidden"
              width={0}
              height={0}
              src="blackRainbowLarge.svg"
              alt="blackRainbowLarge"
            />
      </div>
      {/*Our Mentors Ends*/}
      {/*Student Success Launchpad*/}
      <div className="relative flex flex-col items-center mt-8">
      <h1 className="text-2xl md:text-6xl text-center font-extrabold  text-[#FFFFFF]">
            Student {" "}
              <p className="inline text-[#6637ED]">Success</p>{" "}
            <br className="md:hidden"/>
            Launchpad
        </h1>
        <Image
              className="w-fit h-fit md:hidden"
              width={0}
              height={0}
              src="blackRainbow.svg"
              alt="blackRainbow"
            />
       <div className="absolute right-0">

       <Image
              className="w-fit h-fit md:hidden"
              width={0}
              height={0}
              src="doubleQuotes.svg"
              alt="doubleQuotes"
            />
          <Image
              className="w-fit h-fit max-md:hidden"
              width={0}
              height={0}
              src="doubleQuotesLarge.svg"
              alt="doubleQuotesLarge"
            />
       </div>
      </div>

      

    </div>
  );
}
 