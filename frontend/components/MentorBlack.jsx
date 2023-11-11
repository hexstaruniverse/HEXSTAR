import Image from "next/image";
export default function MentorWhite(props) {
  return (
    <div className={`${props.className} text-[#FFFFFF] rounded-lg flex-col items-center w-36 h-52 md:w-64 md:h-80 border-white border-2`}>
        <Image
          className={`w-fit md:w-1/2 h-fit mt-5 rounded-full border-[#6637ED] border-4`}
          width={0}
          height={0}
          src={props.mentorImage}
          alt={props.mentorAlt}
        />
        <br/>
        <div className='flex items-center justify-center h-8 px-5 mb-1 text-xs font-bold capitalize border-2 border-white rounded-md w-28 md:w-2/3 md:min-w-fit md:text-base md:h-10'>{props.mentorName}</div>
        <div className=' text-center capitalize text-xs md:text-md  text-[#777777] font-semibold h-7  rounded-md md:̥text-base '>{props.mentorDesignation}</div>
        <Image
            className="w-12 h-12 pb-2 md:w-fit md:h-fit"
            width={0}
            height={0}
            src={props.logoImage}
            alt={props.logoAlt}
          />
  </div>
  )
}
