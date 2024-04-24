import Image from "next/image";
import logo from "../../../Resources/Logo/LOGO white.png";
import { FaLinkedin,FaFacebookF,FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#005ce6] py-10">
      <div className="w-full max-w-[80%] container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 text-white">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Address</h2>
          <div className="flex flex-col space-y-2 text-sm">
            <a rel="noopener noreferrer" href="#">
              House- 76 ka, Main
            </a>
            <a rel="noopener noreferrer" href="#">
              View On Maps
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">About Us</h2>
          <div className="flex flex-col space-y-2 text-sm">
            <a rel="noopener noreferrer" href="#">
              Stories
            </a>
            <a rel="noopener noreferrer" href="#">
              Blog
            </a>
            <a rel="noopener noreferrer" href="#">
              Airlines
            </a>
            <a rel="noopener noreferrer" href="#">
              TEstimonials
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Join Us</h2>
          <div className="flex flex-col space-y-2 text-sm">
            <a rel="noopener noreferrer" href="#">
              Terms Of Service
            </a>
            <a rel="noopener noreferrer" href="#">
              Pricacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Contact</h2>
          <div className="flex flex-col space-y-2 text-sm">
            <a rel="noopener noreferrer" href="#">
              +8801234567890
            </a>
            <a rel="noopener noreferrer" href="#">
              +8801234547195
            </a>
            <a rel="noopener noreferrer" href="#">
              +8801274567094
            </a>
            <a rel="noopener noreferrer" href="#">
              Info@Airbook.Com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white mt-10">
        <div className="w-full max-w-[80%] mx-auto text-white flex items-center justify-center px-6 pt-3 text-sm">
          <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
            <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
              <div className="flex items-center justify-center flex-shrink-0  rounded-full">
                <Image
                  width="auto"
                  heigth="auto"
                  src={logo}
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-center text-white pt-10">
              © Copyright 1986. All Rights Reserved.
            </h3>
            <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
              <li className="text-4xl">
              <FaYoutube/>
              </li>
              <li className="text-4xl">
                <FaFacebookF/>
              </li>
              <li className="text-4xl">
                <FaLinkedin/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
