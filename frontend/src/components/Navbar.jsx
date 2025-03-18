import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <img src={assets.EGO} alt="EGO - logo" className="w-28" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-md text-[#A6A6A6]">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collections</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
        </NavLink>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Contact</p>
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search}
          alt=""
          className=" w-6 cursor-pointer"
        />

        <div className="group relative">
          <img src={assets.profile} className="w-8 cursor-pointer" alt="" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
              <p className="cursor-pointer hover:text-black">Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#A6A6A6] text-white aspect-square rounded-full text-[8px]">
            2
          </p>
        </Link>
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Sidebar menu for Mobile view */}
      <div
        className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-8 rotate-180" src={assets.close} alt="" />
          </div>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 text-[#A6A6A6]"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 text-[#A6A6A6]"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 text-[#A6A6A6]"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 text-[#A6A6A6]"
            to="/about"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
