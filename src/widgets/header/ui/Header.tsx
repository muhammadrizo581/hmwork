import { memo } from "react";
import logo from "@/shared/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";
import { FaRegHeart, FaSearch, FaShoppingCart } from "react-icons/fa";

export const Header = memo(() => {
  return (
    <header className="py-5 shadow-sm bg-white">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between gap-6">
          <div className="flex-1">
            <Link to={"/"}>
              <img src={logo} alt="Seedra Logo" className="h-8" />
            </Link>
          </div>

          <ul className="flex items-center gap-6">
            <NavLink to={"/"} className="text-sm font-medium text-fh">
              ALL PRODUCTS
            </NavLink>
            <NavLink
              to={"/about"}
              className="text-sm font-medium text-fh "
            >
              ABOUT SEEDRA
            </NavLink>
            <NavLink to={"/blog"} className="text-sm font-medium text-fh">
              OUR BLOG
            </NavLink>
            <NavLink
              to={"/contacts"}
              className="text-sm font-medium text-fh"
            >
              CONTACTS
            </NavLink>
          </ul>

          <div className="flex items-center gap-3 text-gray-500">
            <RiInstagramFill size={22} />
            <RiFacebookCircleFill size={22} />
          </div>

          <div className="flex items-center w-full max-w-xs rounded-full border border-[#EFEFEF] px-4 py-2">
            <FaSearch className="text-gray-400 text-sm" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="ml-2 w-full border-none outline-none text-sm text-gray-600 placeholder-gray-400 bg-transparent"
            />
          </div>

          <div className="flex items-center gap-4 text-py">
            <FaRegHeart size={18} />
            <FaShoppingCart size={18} />
          </div>
        </nav>
      </div>
    </header>
  );
});
