"use client"
import React from "react";
import Image from 'next/image'
import Logo from "../public/logo.png"
import { MdSpaceDashboard } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

import { MdOutlineTaskAlt } from "react-icons/md";
import { SiGoogletasks } from "react-icons/si";

import { FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import { IoSettingsSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

import Link from 'next/link';
import { usePathname } from "next/navigation";

function SideBar() {
  const router = usePathname()
  const isActive = (path)=> router === path;

  return (
    <div className="sidebar bg-[#948e89] h-full w-full relative py-3 rounded-r-2xl">
      <div className="">
        <Image src={Logo} width={100} height={100} alt="Logo" className="mx-auto" />
      </div>
      <ul className="absolute top-36 w-full xl:pl-6 lg:justify-start lg:items-start lg:pl-4 flex flex-col min-[320px]:justify-center min-[320px]:items-center min-[320px]:pl-0 gap-4 ">
        <Link
          href="/app/dashboard"
          className={`flex cursor-pointer items-center gap-1 xl:text-lg md:text-base font-semibold duration-300 ${isActive('/app/dashboard') ? "text-white":"text-[#141414]"} `}
        >
          <span className={`${isActive('/app/dashboard') ? "text-white duration-300 ":"text-[#000000] duration-300 "} `}>
            {isActive('/app/dashboard')? <LuLayoutDashboard/> :<MdSpaceDashboard />}
          </span>
          <span className="min-[320px]:hidden lg:block">
          Dashboard
          </span>
        </Link>
        <Link
          href="/app/tasks"
          className={`flex cursor-pointer items-center gap-1 xl:text-lg md:text-base font-semibold duration-300 ${isActive('/app/tasks') ? "text-white":"text-[#141414]"} `}
        >
        
            <span className={`${isActive('/app/tasks') ? "text-white duration-300 ":"text-[#000000] duration-300 "} `}>
            {isActive('/app/tasks')? <SiGoogletasks/> :<MdOutlineTaskAlt />}
        
          </span>
          <span className="min-[320px]:hidden lg:block">
          Tasks
          </span>
        </Link>
        <Link
          href="/app/profile"
          className={`flex cursor-pointer items-center gap-1 xl:text-lg md:text-base font-semibold duration-300 ${isActive('/app/profile') ? "text-white":"text-[#141414]"} `}
        >
          
            <span className={`${isActive('/app/profile') ? "text-white duration-300 ":"text-[#000000] duration-300 "} `}>
            {isActive('/app/profile')? <FaUser/> :<FaRegUser />}
        
          
          </span>
          <span className="min-[320px]:hidden lg:block">
          Profile
          </span>
        </Link>
      </ul>
      <Link href="/app/setting" className={`min-[320px]:justify-center lg:justify-start lg:items-center  min-[320px]:items-center min-[320px]:pl-0 bottom-5 w-full lg:pl-6  min-[320px]:pl-2 cursor-pointer absolute flex items-center gap-1 xl:text-lg md:text-base font-semibold text-[#141414] ${isActive('/app/setting') ? "text-white":"text-[#141414]"} `}>
        
          <span className={`font-semibold ${isActive('/app/setting') ? "text-white duration-300 ":"text-[#000000] duration-300 "} `}>
            {isActive('/app/setting')? <IoSettingsSharp/> :<IoSettingsOutline />}
        </span>
        <span className="min-[320px]:hidden lg:block">
        Setting
        </span>
      </Link>
    </div>
  );
}

export default SideBar;
