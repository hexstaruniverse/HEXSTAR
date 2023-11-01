import Image from "next/image";
export default function Institution() {
  return (
    <div>
      Institution
      <div id="hero" className="relative bg-green-400">
        {/* <Image width={500} height={1000} src="institutionFrame.svg" alt="Frame" /> */}
        <div id="content" className="absolute top-1/3 left-10">
          <h1 className="text-2xl font-extrabold text-[#FFFFFF]">
            Pioneering Space <br /> Education for{" "}
            <p className="inline text-[#6637ED]">Institutions</p>
          </h1>
          <h6>
            Space is the next frontier, Space industry will grow up to $800
            billion within next 5 years. Skill up yourself and become industry
            ready
          </h6>
        </div>
        <Image
          className="w-fit h-fit "
          width={0}
          height={0}
          src="institutionSaturn.svg"
          alt="Frame"
        />
      </div>
    </div>
  );
}
