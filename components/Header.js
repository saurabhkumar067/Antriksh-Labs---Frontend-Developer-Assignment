import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className=" flex justify-end items-end px-3 pt-5 min-[320px]:pt-2 ">
      <header className="flex items-center md:text-xl min-[320px]:text-base justify-end md:gap-2 min-[320px]:gap-1 font-semibold">
        Username<span className="md:text-3xl min-[320px]:text-xl">
          <FaUserCircle />
        </span>
      </header>
    </div>
  );
}

export default Header;
