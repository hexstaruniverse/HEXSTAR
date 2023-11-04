import Image from "next/image";
export default function MentorWhite(props) {
  return (
    <div className={`${props.className} text-[#1B1B1B] rounded-lg flex-col items-center w-36 h-52 md:w-72 md:h-96 border-[#1B1B1B] border-4`}>
        <Image
          className={`w-fit h-fit mt-5 rounded-full border-[#D9D9D9] border-4`}
          width={0}
          height={0}
          src={props.mentorImage}
          alt={props.mentorAlt}
        />
        <br/>
        <div className=' text-center w-28 md:w-1/2 mb-1 py-1 border-[#1B1B1B] border-4 capitalize text-sm md:text-lg font-bold h-8 md:h-10  rounded-md'>{props.mentorName}</div>
        <div className=' text-center capitalize text-xs md:text-md  text-[#777777] font-semibold h-7  rounded-md md:text-base '>{props.mentorDesignation}</div>
        <Image
            className="w-12 h-12 md:w-fit md:h-fit  pb-2"
            width={0}
            height={0}
            src={props.logoImage}
            alt={props.logoAlt}
          />
  </div>
  )
}
