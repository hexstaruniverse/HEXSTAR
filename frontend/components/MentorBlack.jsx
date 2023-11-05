import Image from "next/image";
export default function MentorWhite(props) {
  return (
    <div className={`${props.className} text-[#FFFFFF] rounded-lg flex-col items-center w-36 h-52 md:w-72 md:h-96 border-white border-2`}>
        <Image
          className={`w-fit h-fit mt-5 rounded-full border-[#6637ED] border-4`}
          width={0}
          height={0}
          src={props.mentorImage}
          alt={props.mentorAlt}
        />
        <br/>
        <div className='h-8 py-1 mb-1 text-sm font-bold text-center capitalize border-2 border-white rounded-md w-28 md:w-1/2 md:text-lg md:h-10'>{props.mentorName}</div>
        <div className=' text-center capitalize text-xs md:text-md  text-[#777777] font-semibold h-7  rounded-md md:text-base '>{props.mentorDesignation}</div>
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
