import Image from "next/image";
import type { StaticImageData } from "next/image";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

interface TeamMemberProps {
  name: string;
  role: string;
  instagram: string;
  twitter: string;
  facebook: string;
  img: StaticImageData;
}

const TeamMember:React.FC<TeamMemberProps> = (props) => {
  return (
    <div className="max-w-[250px] w-full">
      <div className="relative group mb-5">
        <div>
          <Image src={ props.img } alt={ props.name } className="w-full" />
        </div>
        <div className="bg-blue-500 py-5 absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="flex gap-10 justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-[750ms]">
            <a href={ props.facebook }><FacebookLogo size={20} color="#fff" /></a>
            <a href={ props.twitter }><TwitterLogo size={20} color="#fff" /></a>
            <a href={ props.instagram }><InstagramLogo size={20} color="#fff" /></a>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-gray-700">{ props.name }</h3>
      <span className="text-[0.8rem] text-gray-500 uppercase mt-3">{ props.role }</span>
    </div>
  )
}

export default TeamMember;