import Image from 'next/image'
export default function Review(className) {
  return (
   
        

        <div className={`relative flex flex-col items-center px-5 ml-auto bg-[#E9E9E9] border-2 border-[#844CFE]  rounded-lg`}>
            <Image
          className=" w-fit h-fit absolute top-[-2rem] left-[-2rem] border-2 border-[#844CFE] rounded-full"
          width={0}
          height={0}
          src="mentor.svg"
          alt="mentor"
        />
            <h1 className='py-5 text-base font-bold text-center text-[#1B1B1B] '>Martina Dmoska</h1>
            <p className='pb-5 text-xs text-center text-[#1B1B1B] '>I got appointed as a Instructor belioeve me they are building the best space edtech system</p>

        </div>
  )
}
