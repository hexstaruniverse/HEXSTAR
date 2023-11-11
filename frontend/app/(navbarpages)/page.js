import Image from "next/image"
import Program from '@/components/Program.jsx'
import MentorBlack from '@/components/MentorBlack.jsx'
import MentorWhite from '@/components/MentorWhite.jsx'
import Carousel from '@/components/Carousel.jsx'
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
        <h1 className="text-3xl md:text-7xl  text-center font-extrabold md:pt-10 md:pb-4  py-5 text-[#1B1B1B] ">
           All Programs
        </h1>
        <h6 className="w-3/4 max-md:hidden md:text-lg font-extralight text-[#000000]">
              Space is the next frontier, Space industry will grow up to $800
              billion within next 5 years. Skill up yourself and become industry
              ready
            </h6>
        
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
    </div>
  )
}
