import Image from 'next/image'
export default function Review(props) {
  return (
   
        

        <div className={`${props.className} relative flex flex-col items-start px-5 ml-auto bg-[#E9E9E9] border-2 border-[#844CFE]  rounded-lg`}>
          {props.children}
            <h1 className='py-5 mt-2 text-base md:text-xl font-bold text-start text-[#1B1B1B] '>{props.name}</h1>
            <p className='pb-5 text-xs md:text-base text-start text-[#1B1B1B] '>{props.review}</p>
        </div>
  )
}
