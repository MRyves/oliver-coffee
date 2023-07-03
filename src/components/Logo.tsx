import LogoIcon from "../../public/logos/logo-icon.jpg";
import Image from "next/image";

interface LogoProps {
  height: number;
}

export default function Logo(props: LogoProps) {
  const imageStyle = {
    filter: "invert(100%)",
  };
  return (
    <div className="flex justify-center items-center gap-x-0.5 h-full pb-4">
      <Image
        src={LogoIcon}
        alt="Logo icon"
        height={props.height}
        style={imageStyle}
        priority
      />
      <div className="pt-5 text-xl md:text-2xl inline-block">livier Coffee</div>
    </div>
  );
}
