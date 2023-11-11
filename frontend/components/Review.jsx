import Image from 'next/image'
export default function Review(props) {
  return (
   
        

        <div className={`${props.className} relative flex flex-col items-start px-5 ml-auto bg-[#E9E9E9] border-2 border-[#844CFE]  rounded-lg`}>
            <Image
            className=" w-fit h-fit md:hidden absolute top-[-2rem] left-[-2rem] border-2 border-[#844CFE] rounded-full"
            width={0}
            height={0}
            src="mentor.svg"
            alt="mentor"
            />
            <Image
            className=" w-fit h-1/2 max-md:hidden absolute top-[-3rem] left-[-3rem] border-2 border-[#844CFE] rounded-full"
            width={0}
            height={0}
            src="mentorLarge.svg"
            alt="mentorLarge"
            />
            <h1 className='py-5 mt-2 text-base md:text-xl font-bold text-start text-[#1B1B1B] '>Martina Dmoska</h1>
            <p className='pb-5 text-xs md:text-base text-start text-[#1B1B1B] '>I got appointed as a Instructor belioeve me they are building the best space edtech system</p>

        </div>
  )
}
