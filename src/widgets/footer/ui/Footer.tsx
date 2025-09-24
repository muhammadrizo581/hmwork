import { memo } from "react";
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";
import logo from "../../../shared/assets/logo.svg"; 
import { Link } from "react-router-dom";

export const Footer = memo(() => {
  return (
    <footer className="border-t border-py py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center justify-center gap-6 text-gray-600 font-medium">
            <Link to={"/"} className="text-green-700">
              ALL PRODUCTS
            </Link>
            <span className="text-py">|</span>
            <Link to={"/about"}>ABOUT SEEDRA</Link>
            <span className="text-py">|</span>
            <Link to={"/"}>OUR BLOG</Link>
            <div>
              <img src={logo} alt="Seedra Logo" className="h-8 md:h-10" />
            </div>
            <span className="text-py">|</span>
            <Link to={"/"}>Terms&Conditions</Link>
            <span className="text-py">|</span>
            <Link to={"/"}>Privacy Policy</Link>
          </nav>
        </div>

        <div className="border-t border-py mt-6"></div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
          <div className="flex items-center gap-4 text-green-700 text-2xl">
            <Link to={"/"}>
              <RiInstagramFill />
            </Link>
            <Link to={"/"}>
              <RiFacebookCircleFill />
            </Link>
          </div>

          <p className="text-gray-500 text-sm">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
});
