import React from "react";
import Image from "next/image";
import logo from "@/assets/Grazle Logo.png";
import Search from "@/assets/search.png";
import Cart from "@/assets/Cart.png";
import Seller from "@/assets/Vector.png";
import { Avatar } from "@mui/material";
export default function Navbar() {
  return (
    <div className="lg:mx-[150px] md:mx-[60px]  my-[16px] flex items-center">
      <Image src={logo} alt="" className="w-[80px] h-[47px]" />
      <div className="flex items-center color-[#393A44] text-[14px] font-normal mx-[64px]">
        <p className="mr-[24px]">Home</p>
        <div className="border-l-[1px] border-r-[1px] border-[#D2D4DA]">
          <p className="mx-[24px]">Offers</p>
        </div>
        <div>
          <p className="ml-[24px]">Categories</p>
        </div>{" "}
      </div>
      <div className="mr-[64px] ">
        <input
          placeholder="Serach"
          className="w-[456px] h-[52px] rounded-full  box-border pl-[50px]  focus:outline-none border-[1px] border-[#D2D4DA]"
        />
      </div>{" "}
      <Image
        src={Search}
        alt=""
        className="w-[36px] h-[36px] absolute top-[23px] left-[39%]"
      />
      <div className="flex align-end text-[14px] font-normal">
        <div className="flex">
          <Image src={Cart} alt="" className="w-[24px] h-[24px] mr-2" />
          <p className="sm:display:none">Cart</p>
        </div>
        <div className="border-r-[1px] border-[#D2D4DA] mx-[20px] h-4"></div>
        <div className="flex">
          <Image src={Seller} alt="" className="w-[24px] h-[24px] mr-2" />
          <p>Become Seller</p>
        </div>
      </div>{" "}
      <Avatar className="w-[44px] h-[44px] ml-[27px]" />
    </div>
  );
}
