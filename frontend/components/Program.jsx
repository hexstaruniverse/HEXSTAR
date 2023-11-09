import Image from "next/image";
export default function Program(props) {
  return (
         <div className={`${props.className} relative  flex-col items-center rounded-lg h-48 w-36 md:h-80 md:w-60`}>
            <Image
              className="mt-5 w-fit h-fit"
              width={0}
              height={0}
              src={props.image}
              alt={props.alt}
            />
            <div className="absolute bottom-0 left-5">
              <h1 className="text-sm font-extrabold md:text-lg w-fit">{props.text}<br/><a className="mt-0 font-extrabold text-xxs md:text-sm w-fit " href="#">{props.urlText}</a></h1>
           </div>
          </div>
  )
}
