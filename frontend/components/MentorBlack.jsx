
import Image from "next/image";
import Carousel from "./Carousel";
export default function MentorBlack(props) {
  return (
    <div className={`${props.className} text-[#FFFFFF] rounded-lg flex-col items-center w-36 h-52 md:w-64 md:h-80 border-white border-2`}>
      <div className="w-1/2">
       <Image
          className={`w-fit h-fit mt-5 rounded-full border-[#6637ED] border-4`}
          width={0}
          height={0}
          src={props.mentorImage}
          alt={props.mentorAlt}
        />
        </div>
        <br/>
        <div className='flex items-center justify-center h-8 py-1 mb-1 text-xs font-bold text-center capitalize border-2 border-white rounded-md whitespace-nowrap w-28 md:w-2/3 md:text-base md:h-10 '>
          <Carousel speed={3000} autoplaySpeed={0} slidesToShow={1}  className="w-full">
            <div >
              <h3 className="">{props.mentorName}</h3>
            </div>
            <br/>
          </Carousel>
        </div>
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
