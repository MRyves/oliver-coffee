import Link from "next/link";
import { useState } from "react";
import { FaBars, FaEnvelope, FaInstagram, FaMailBulk, FaMailchimp, FaTimes } from "react-icons/fa";


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
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="hidden md:block md:basis-1/3">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/coffee"
                className="text-black px-3 py-2 rounded-md text-md font-medium"
              >
                Coffee
              </Link>
              <Link
                href="/Story"
                className="text-black px-3 py-2 rounded-md text-md font-medium"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 items-center justify-center mx-auto text-center">
            <Link href="/" className="text-black font-bold text-2xl">
              Oliver Coffee
            </Link>
          </div>
          <div className="basis-1/3 flex justify-end space-x-4 text-black">
            <FaInstagram className="fill-current h-6 w-6" />
            <FaEnvelope className="fill-current h-6 w-6" />
          
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
              <Link href="/about" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                  About
              </Link>
              <Link href="/contact" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                  Contact
              </Link>
            </div>
          </div>
        )}
    </nav>
  );
}
