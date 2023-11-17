import Image from "next/image"
import Program from '@/components/Program.jsx'
import MentorBlack from '@/components/MentorBlack.jsx'
import MentorWhite from '@/components/MentorWhite.jsx'
import Carousel from '@/components/Carousel.jsx'
import Review from '@/components/Review.jsx'
export default function Home() {
  return (
    <div>
        <Carousel className="bg-[#6637ED] text-[#FFFFFF] max-md:hidden" slidesToShow={3}>
              {
                (() => {
                  const components = [];

                  for (let i = 0; i < 20; i++) {
                    components.push(
                      <div key={i}>
                        <Image
                          className="w-fit h-fit"
                          width={0}
                          height={0}
                          src="solidWorks.svg"
                          alt="solidWorks"
                        />
                      </div>
                    );
                  }

                  return components;
                })()
              }
        </Carousel>
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
            <h6 className="w-full text-center md:text-xl mb-10 font-normal mt-5 text-[#FFFFFF]">
                  They are working at
            </h6> 
            <Carousel className="max-md:hidden" slidesToShow={10}>
            {
                (() => {
                  const components = [];

                  for (let i = 0; i < 20; i++) {
                    components.push(
                      <div key={i}>
                        <Image
                          className="w-fit h-fit"
                          width={0}
                          height={0}
                          src="isroLarge.svg"
                          alt="isroLarge"
                        />
                      </div>
                    );
                  }

                  return components;
                })()
              }
            </Carousel>
            <Carousel className="md:hidden" slidesToShow={4}>
            {
                (() => {
                  const components = [];

                  for (let i = 0; i < 20; i++) {
                    components.push(
                      <div key={i}>
                        <Image
                          className="w-fit h-fit"
                          width={0}
                          height={0}
                          src="isroLarge.svg"
                          alt="isroLarge"
                        />
                      </div>
                    );
                  }

                  return components;
                })()
              }
            </Carousel>
      </div>
      {/*All programs starts*/}
      <div className="relative flex flex-col items-center py-10 mt-8 overflow-hidden md:pb-32 max-md:bg-homeWhiteSquareFrame md:bg-[#FBFBFB]">
        <Image
          className="w-fit h-fit max-md:hidden"
          width={0}
          height={0}
          src="homeWhiteFrame.svg"
          alt="homeWhiteFrame"
        />
        <h1 className="text-3xl md:text-7xl  text-center font-extrabold md:pt-10 py-5 text-[#1B1B1B] ">
           All Programs
        </h1>
        <h6 className="w-3/4 font-normal text-center max-md:hidden md:text-lg">
              Explore the all programs, skill up and become industry ready
        </h6>
        <div className="ml-auto mr-10 max-md:hidden">
        <Image
              className="w-3/4 h-fit"
              width={0}
              height={0}
              src="starBlack.svg"
              alt="starBlack"
            />
        </div>
        <div className="grid grid-cols-2 gap-4 my-10 md:mb-28 md:z-10 md:grid-cols-4 md:gap-16 ">
          <Program className="flex md:hidden bg-[#1B1B1B] text-[#FFFFFF] " image="spaceship.svg" alt="spaceship" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="flex md:hidden bg-[#1B1B1B] text-[#FFFFFF]" image="spaceship.svg" alt="spaceship" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="flex md:hidden bg-[#1B1B1B] text-[#FFFFFF]" image="spaceship.svg" alt="spaceship" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="flex md:hidden bg-[#1B1B1B] text-[#FFFFFF]" image="spaceship.svg" alt="spaceship" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="hidden md:flex bg-[#1B1B1B] text-[#FFFFFF]" image="spaceshipLarge.svg" alt="spaceshipLarge" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="hidden md:flex bg-[#1B1B1B] text-[#FFFFFF]" image="spaceshipLarge.svg" alt="spaceshipLarge" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="hidden md:flex bg-[#1B1B1B] text-[#FFFFFF]" image="spaceshipLarge.svg" alt="spaceshipLarge" text="Aerospace" urlText="All Programs&gt;&gt;"/>
          <Program className="hidden md:flex bg-[#1B1B1B] text-[#FFFFFF]" image="spaceshipLarge.svg" alt="spaceshipLarge" text="Aerospace" urlText="All Programs&gt;&gt;"/>
        </div>
        <Image
              className="absolute bottom-0 left-0 w-1/3 h-fit max-md:hidden"
              width={0}
              height={0}
              src="home1percent.svg"
              alt="1percent"
        />
        <div className="flex flex-col items-center mb-7 md:hidden">
          <div className="flex flex-col items-center mb-5">
            <Image
              className="w-fit h-fit"
              width={0}
              height={0}
              src="groupLogo.svg"
              alt="groupLogo"
            />
           <h1 className="text-3xl  text-center font-extrabold md:hidden text-[#1B1B1B] ">
             10000+<br/> Learners
           </h1>
          </div>
          <div className="flex flex-col items-center mb-2">
            <Image
              className="w-fit h-fit"
              width={0}
              height={0}
              src="calendarLogo.svg"
              alt="calendarLogo"
            />
           <h1 className="text-3xl  text-center font-extrabold md:hidden text-[#1B1B1B] ">
             100+<br/> Programs
           </h1>
          </div>
          <div className="flex flex-col items-center mb-5">
            <Image
              className="w-fit h-fit"
              width={0}
              height={0}
              src="mentorLogo.svg"
              alt="mentorLogo"
            />
           <h1 className="text-3xl text-center font-extrabold md:hidden text-[#1B1B1B] ">
             50+<br/> Mentors
           </h1>
          </div>
        </div>
        
      </div>
      {/*All programs ends*/ }
      {/*Why Hexstar Universe*/}
      <div className="flex flex-col items-center mt-8 ">
        <h1 className="text-3xl md:text-7xl font-extrabold md:pt-20 pb-3 pt-5 text-[#FFFFFF] items-start w-full pl-5 md:pl-10">
            Why Hexstar <br className="md:hidden"/> Universe{"  "}?
        </h1>
        <h6 className="md:text-xl font-semibold md:font-normal text-[#FFFFFF] items-start w-full pl-5 md:pl-10">
              Worlds first fullstack space edtech <br className="md:hidden"/> platform
        </h6>
        <div className="flex justify-between w-full pl-5 mt-2 md:px-16">
          <Image
                className="w-fit h-fit md:hidden"
                width={0}
                height={0}
                src="hexstarUniverseImg1.svg"
                alt="hexstarUniverseImg1"
              />
          <Image
                className="mt-10 mr-20 w-fit h-fit md:hidden"
                width={0}
                height={0}
                src="hexstarUniverseImg2.svg"
                alt="hexstarUniverseImg2"
              />
          <Image
                className="w-fit h-fit max-md:hidden"
                width={0}
                height={0}
                src="hexstarUniverseLarge.svg"
                alt="hexstarUniverseLarge"
              />
        </div>
      </div>
      {/*Why Hexstar Universe ends*/}
       {/*Industry Experts */}
       <div className="relative flex flex-col items-center py-10 mt-5"> 
        <h1 className="text-3xl  md:text-7xl font-extrabold  text-[#FFFFFF] items-start w-full pl-5  py-3 md:pl-10">
             Learn from <br className="md:hidden"/> Industry Experts
        </h1> 
        <p  className="text-sm md:text-lg font-extralight text-[#FFFFFF] items-start w-full pl-5 md:pl-10">Learn from who you want to be.Learn from top industry practitioner</p>
       
        <div className="relative grid items-center grid-cols-2 gap-4 m-4 my-5 md:grid-cols-5 md:gap-12">
        <Image
              className="absolute z-[-1] w-fit h-fit max-md:hidden"
              width={0}
              height={0}
              src="mentorFrameLarge.svg"
              alt="mentorFrameLarge"
            />
          <MentorBlack className="flex bg-[#181818] md:hidden"  mentorImage="mentor.svg" mentorAlt="mentor" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbital.svg" logoAlt="thinkRbital"/> 
          <MentorBlack className="flex bg-[#181818] md:hidden"  mentorImage="mentor.svg" mentorAlt="mentor" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbital.svg" logoAlt="thinkRbital"/> 
          <MentorBlack className="hidden md:flex bg-[#181818]"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica Moronese" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorBlack className="hidden md:flex bg-[#181818]"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorBlack className="hidden md:flex bg-[#181818]"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorBlack className="hidden md:flex bg-[#181818]"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
          <MentorBlack className="hidden md:flex bg-[#181818]"  mentorImage="mentorLarge.svg" mentorAlt="mentorLarge" mentorName="Veronica" mentorDesignation="space lawyer" logoImage="thinkRbitallargeWhite.svg" logoAlt="thinkRbitallargeWhite"/> 
        </div>
        <button className="text-[#6637ED] text-sm md:text-xl font-extrabold md:mt-24"><a>See More -&gt;</a></button>
      </div>
      {/*Industry Experts Ends*/} 
       {/*Community*/} 
       <div className="relative flex flex-col items-center pt-10 mt-5">
        <Image
              className="absolute md:hidden right-0 top-56 z-[-1] w-fit h-fit"
              width={0}
              height={0}
              src="Group574.svg"
              alt="Group574"
            />
        <Image
              className="absolute md:hidden left-0 bottom-56 z-[-1] w-fit h-fit"
              width={0}
              height={0}
              src="Group531.svg"
              alt="Group531"
            />
        <Image
          className="pl-20 mr-auto w-fit h-fit max-md:hidden"
          width={0}
          height={0}
          src="communityExclamation.svg"
          alt="communityExclamation"
        />
        <h1 className="text-3xl flex md:text-7xl font-extrabold justify-between text-[#FFFFFF] items-start w-full pl-5 py-3 md:pl-10">
              Community
              <Image
                className="w-2/5 pt-10 mr-20 h-fit max-md:hidden"
                width={0}
                height={0}
                src="networkSuccess.svg"
                alt="networkSuccess"
              />
        </h1> 
        <p  className="px-5 text-sm md:text-lg font-extralight text-[#FFFFFF] items-start w-full pl-5 md:pl-10">Network with like minded people, build connections and collaborate</p>
        <div className="w-full mt-2 max-md:hidden">
        <Image
              className="ml-auto mr-20 w-fit h-fit"
              width={0}
              height={0}
              src="star.svg"
              alt="star"
            />
        </div>
        <div className="grid relativee md:h-fit place-content-center md:w-2/3 md:justify-center md:gap-4 md:grid-rows-3 md:grid-cols-2 md:grid-flow-col max-md:mx-10">

        <div className=" max-md:py-10 md:row-span-2 md:col-span-1"> 
        <Image
                className="w-fit h-fit"
                width={0}
                height={0}
                src="videoImage.svg"
                alt="videoImage"
              />
      </div>
      <div className="relative  md:row-span-1 md:col-span-1 w-full px-5 flex flex-col text-center rounded-lg items-center py-6 border-[#D9D9D9] border-2 bg-[#1B1B1B]"> 
            
            <h6 className="text-sm md:text-lg font-extrabold w-fit md:mr-auto md:pl-5 mb-3 text-[#FFFFFF]">
               Join the community of 10k+ space learners
            </h6>
            <h6 className="px-5 text-xs md:text-lg font-extralight  md:mr-auto md:pl-5 text-[#FFFFFF]">
               Network with like minded people, build connections and friendship that could latt forever
            </h6>
           
      </div>
      <div className="relative md:row-span-3 md:col-span-1 md:h-full  px-5 w-full max-md:h-56 flex flex-col justify-between rounded-lg items-center py-10 max-md:mt-5 border-[#D9D9D9] border-2"> 
            <h6 className="ml-4 md:text-xl font-extrabold mr-auto text-[#FFFFFF]">
                 Be the part of<br/> exceptional journey
            </h6>
            <button className='px-5 mt-2 capitalize text-xs flex justify-start items-center bg-[#6637ED] text-[#FFFFFF] font-bold h-7 md:h-12 md:w-44  rounded-md md:text-base '>
            <Image
                className="pr-1 md:hidden w-fit h-fit"
                width={0}
                height={0}
                src="discord.svg"
                alt="discord"
              />
            <Image
                className="pr-1 max-md:hidden w-fit h-fit"
                width={0}
                height={0}
                src="discordLarge.svg"
                alt="discordLarge"
              />Join Discord</button>
      </div>
      </div>
      <Image
                className="absolute left-0 bottom-10 w-fit h-1/3 max-md:hidden"
                width={0}
                height={0}
                src="communityGlobeLarge.svg"
                alt="communityGlobeLarge"
      />
      <Image
                className="w-fit h-fit mt-[-3rem] md:hidden"
                width={0}
                height={0}
                src="blackRainbow.svg"
                alt="blackRainbow"
      />
      <Image
                className="pb-0 mb-0 w-fit h-fit max-md:hidden"
                width={0}
                height={0}
                src="blackRainbowLarge.svg"
                alt="blackRainbowLarge"
      />
      </div>
      {/*Community Ends*/}

      {/*Reviews start*/}
      <div className="relative flex flex-col items-center py-10 mt-8 overflow-hidden md:pb-32 md:bg-[#FBFBFB]"> 
            <h1 className="text-3xl  md:text-7xl font-extrabold text-[#FFFFFF]  md:text-[#1B1B1B] mr-auto pl-5">
                  What  they  says
            </h1> 
            <div className="grid items-center w-2/3 gap-10 mt-10 md:w-full md:px-10 md:grid-cols-5">
            {
                (() => {
                  const components = [];

                  for (let i = 0; i < 10; i++) {
                    components.push(
                      <Review className="" name="Martina Dmoska" review="I got appointed as a Instructor belioeve me they are building the best space edtech system">
                        <Image
                        className=" w-fit h-fit absolute top-[-2rem] left-[-2rem] border-2 border-[#844CFE] rounded-full"
                        width={0}
                        height={0}
                        src="mentor.svg"
                        alt="mentor"
                        />
                        </Review>
                    );
                  }

                  return components;
                })()
              }
            </div>
            <button className='px-5 mt-10 capitalize text-center text-xs  text-[#6637ED] border-[#6637ED] border-2 font-bold h-7 md:h-12 md:w-44  rounded-md md:text-lg '>
                More...
            </button>
      </div>
    </div>
  )
}
