"use client";
import { BioContext } from "@/app/contextApi/context";
import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa6";

import { FaSun } from "react-icons/fa6";

function Header() {
  const { toggle, setToggle } = useContext(BioContext);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className=" flex justify-end items-end px-3 pt-5 min-[320px]:pt-2 ">
      <header className="flex items-center md:text-xl min-[320px]:text-base justify-end md:gap-2 min-[320px]:gap-1 font-semibold">
        <div
          className="flex text-sm justify-between items-center px-2  py-2 rounded-full gap-2 bg-[#ccc3c3] cursor-pointer duration-300"
          onClick={handleToggle}
        >
          {toggle ? (
            <span className="bg-white p-1 rounded-full duration-500">
              <FaSun />
            </span>
          ) : (
            <span className={`bg-white p-1 rounded-full duration-500 `}>
              <FaRegMoon />
            </span>
          )}
        </div>
        <span className="">Username</span>
        <span className={`md:text-3xl min-[320px]:text-xl`}>
          <FaUserCircle />
        </span>
      </header>
    </div>
  );
}

export default Header;
