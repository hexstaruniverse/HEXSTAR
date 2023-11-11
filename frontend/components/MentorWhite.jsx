import Image from "next/image";
export default function MentorWhite(props) {
  return (
    <div className={`${props.className} text-[#1B1B1B] rounded-lg flex-col items-center w-36 h-52 md:w-56 md:h-80 border-[#1B1B1B] border-2`}>
        <Image
          className={`w-fit md:w-1/2 h-fit mt-5 rounded-full border-[#D9D9D9] border-4`}
          width={0}
          height={0}
          src={props.mentorImage}
          alt={props.mentorAlt}
        />
        <br/>
        <div className=' text-center w-28 md:w-2/3 mb-1 py-1 border-[#1B1B1B] border-2 capitalize text-sm md:text-lg font-bold h-8 md:h-10  rounded-md'>{props.mentorName}</div>
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
