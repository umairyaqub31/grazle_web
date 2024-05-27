"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/Grazle Logo.png";
import Search from "@/assets/search.png";
import Cart from "@/assets/Cart.png";
import Seller from "@/assets/Vector.png";
import MenuIcon from "@/assets/VectorMenu.png";
import { Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const hanldeGoToLogin = () => {
    router.push("/Login");
  };
  return (
    <div className="mx-[16px] lg:mx-[150px] md:mx-[60px] my-[16px] flex flex-col md:flex-wrap sm:flex-row sm:items-center">
      <div className="flex items-center justify-between w-full md:w-auto sm:w-auto">
        <div className="flex items-center">
          <Image
            src={MenuIcon}
            alt="Menu"
            className="w-[24px] h-[24px] mr-2 sm:hidden"
          />
          <Image src={logo} alt="Logo" className="w-[80px] h-[47px]" />
        </div>

        <Link
          href="/"
          className="hidden lg:flex items-center color-[#393A44] text-[14px] font-normal mx-[64px]"
        >
          <p className="mr-[24px]">Home</p>
          <div className="border-l-[1px] border-r-[1px] border-[#D2D4DA]">
            <p className="mx-[24px]">Offers</p>
          </div>
          <div>
            <p className="ml-[24px]">Categories</p>
          </div>
        </Link>
        <div className="hidden lg:flex mr-[64px] md:ml-auto">
          <div className="relative w-[430px]">
            {/* Change the width of the input for small screens */}
            <input
              placeholder="Search"
              className="w-full lg:w-[400px] sm:w-[300px] h-[52px] rounded-full pl-[50px] focus:outline-none border-[1px] border-[#D2D4DA]"
            />
            <Image
              src={Search}
              alt="Search"
              className="w-[36px] h-[36px] absolute top-[50%] left-[10px] transform -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex items-center text-[14px] font-normal">
          <Link href="/CartPage" className="flex items-center mr-4">
            <Image src={Cart} alt="Cart" className="w-[24px] h-[24px] mr-2" />
            <p className="hidden sm:block">Cart</p>
          </Link>
          <div className="border-r-[1px] border-[#D2D4DA] mx-[8px] md:mx-[20px] h-4"></div>
          <Link href="/RegisterSeller" className="flex items-center">
            <Image
              src={Seller}
              alt="Seller"
              className="w-[24px] h-[24px] mr-2"
            />
            <p className="hidden sm:block lg:block">Become Seller</p>
          </Link>
          {/* <Avatar className="w-[44px] h-[44px] ml-[16px]" /> */}
          <button
            className=" bg-[#F70000] rounded-2xl h-[40px]  w-[151px] text-[14px] font-medium text-white"
            onClick={() => hanldeGoToLogin()}
          >
            Before Login
          </button>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 md:mt-3 w-full lg:hidden">
        <div className="relative w-full">
          {/* Change the width of the input for small screens */}
          <input
            placeholder="Search"
            className="w-full sm:w-[300px] md:w-full h-[52px] rounded-full pl-[50px] focus:outline-none border-[1px] border-[#D2D4DA]"
          />
          <Image
            src={Search}
            alt="Search"
            className="w-[36px] h-[36px] absolute top-[50%] left-[8px] transform -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
}
