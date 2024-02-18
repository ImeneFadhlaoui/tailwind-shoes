import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav() {
  const [isMobileMenuShow, setIsMobileShow] = useState(false);
  return (
    <nav className="z-10  relative flex  flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger button */}
      <button
        onClick={() => setIsMobileShow(!isMobileMenuShow)}
        className="lg:hidden p-2 rounded-lg  focus:ring-2 focus:ring-gray-200"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`${isMobileMenuShow === false && "hidden"}
       w-full lg:w-auto lg:block`}
      >
        <ul className="flex flex-col lg:space-x-8 lg:flex-row p-4 rounded-lg border border-gray-100 bg-gray-50 text-lg lg:bg-transparent lg:border-none">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={` lg:hover:bg-transparent lg:hover:text-blue-500 cursor-pointer rounded px-3 py-2 
                ${i === 0 ? "bg-blue-500 text-white lg:text-blue-500 lg:bg-transparent" : "hover:bg-gray-100"}
                ${(i === 3 || i === 4) && "lg:text-white"}
              `}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Cart button */}
      <div className="fixed bottom-4 left-4 lg:static lg:mr-8">
        <div className="flex-center rounded-full bg-white shadow-md h-12 w-12 cursor-pointer">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
