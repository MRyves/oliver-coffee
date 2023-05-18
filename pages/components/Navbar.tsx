import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaEnvelope, FaInstagram, FaMailBulk, FaMailchimp, FaTimes } from "react-icons/fa";

import LogoWhite from "../../public/logos/logo-white.png";
import LogoIcon from "../../public/logos/logo-icon.jpg";


interface NavbarProps {
    className?: string;
}

export default function Navbar(props: NavbarProps) {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  }

    return (
    <nav className={props.className}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 md:h-[100px]">
        <div className="flex items-center justify-between h-full">
        <div className="hidden md:block md:basis-1/3 h-full">
            <div className="flex items-center space-x-4 h-full">
              <Link
                href="/coffee"
                className="text-black px-3 py-2 rounded-md text-md font-medium"
              >
                Coffee
              </Link>
              <Link
                href="/story"
                className="text-black px-3 py-2 rounded-md text-md font-medium"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 items-center justify-start md:justify-center mx-auto">
            <Link href="/" className="py-2 md:py-0">
              <Image src={LogoWhite} style={{filter: 'invert(100%)'}} height={120} alt="Oliver Coffee Logo" className="hidden md:block" priority/>
              <span><Image src={LogoIcon} style={{filter: 'invert(100%)'}} height={50} alt="Oliver Coffee Logo" className="inline-block md:hidden" priority />liver</span>
            </Link>
          </div>
          <div className="basis-1/3 flex justify-end space-x-4 text-black">
            <FaInstagram className="fill-current h-6 w-6" />
            <Link href="/contact">
            <FaEnvelope className="fill-current h-6 w-6" />
            </Link>
          
          <button
              type="button"
              className="md:hidden text-black focus:outline-none focus:text-black h-6 w-6"
              onClick={handleToggle}
            >
              {menuOpen ? (
                <FaTimes className="fill-current h-6 w-6" />
              ) : (
                <FaBars className="fill-current h-6 w-6" />
              )}
            </button>
            </div>

        </div>
      </div>
      {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                  Home
              </Link>
              <Link href="/coffee" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                  Coffee
              </Link>
              <Link href="/story" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                  Our Story
              </Link>
            </div>
          </div>
        )}
    </nav>
  );
}
