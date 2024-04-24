import { IoMenu, IoCloseSharp } from "react-icons/io5";
import logo from '../../../Resources/Logo/LOGO.png'
import "./Navber.css";
import Image from "next/image";
export default function Navber() {
  return (
    <div className="header">
      <Image width='auto' height='auto' src={logo} alt="logo"/>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className="icons">
        <IoMenu id="menu-icon" />
        <IoCloseSharp id="close-icon" />
      </label>
      <nav className="navbers">
        <a href="#"  style={{ '--i': 0 }} >Blog</a>
        <a href="#services" style={{ '--i': 2 }} >Offer</a>
        <a href="#skills" style={{ '--i': 3 }} >Airlines</a>
        <a href="#about"  style={{ '--i': 1 }} >About</a>
      </nav>
      <button className="px-8 py-1 text-lg bg-[#005ce6] text-white rounded-md">Sign In</button>
    </div>
  );
}
