"use client";
import React, { useState } from "react";
import Image from "next/image";
import register from "@/assets/girl-shopping-online-with-credit-card-3d-character-illustration-png 1.png";
import logo from "@/assets/Grazle Logo.png";
import { Checkbox } from "@mui/material";
export default function RegisterSeller() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-[100%] mb-10 h-auto flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center lg:p-[50px] p-[10px] sm:p-[10px] md:p-[10px] ">
      <div
        style={{
          background:
            "linear-gradient(162.65deg, #FF781E 1.87%, #FDC197 88.1%)",
        }}
        className="lg:w-[50%] w-[100%] sm:w-[100%] md:w-[100%] h-[100vh] text-white relative rounded-[60px] px-[40px] py-[50px] my-[50px] "
      >
        <p className="lg:text-[40px] text-[24px] sm:text-[24px]  md:text-[24px]  font-semibold">
          Discover endless possibilities
        </p>
        <div className="w-[60%]">
          <p className="lg:text-[60px] text-[32px] sm:text-[32px]  md:text-[232px]  font-bold  ">
            Explore, buy, and sell with our vibrant maketplace
          </p>
        </div>

        <Image
          src={register}
          alt=""
          className="w-[100%] top-[100px] absolute right-[30px] lg:h-[600px] h-[650px] sm:h-[800px]"
        />
      </div>
      <div className="lg:w-[50%] w-[100%] sm:w-[100%] md:w-[100%]  h-[100vh] lg:pl-[50px] lg:m-0 m-3 lg:py-[50px] ">
        <div className="flex flex-col justify-center items-center ">
          <Image src={logo} alt="" className="w-[210px] h-[125px]" />
          <p className="mt-6 text-[40px] font-semibold">Welcome Back</p>
          <p className=" text-[18px] font-medium text-[#777777]">
            Please log in into your account
          </p>
        </div>
        <div>
          <div className=" mt-[40px] w-full">
            <input
              className="bg-[#F5F7F9] w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
              placeholder="Full NAME"
            />
          </div>
          <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center lg:gap-4">
            <div className=" mt-[20px] w-full">
              <input
                className="bg-[#F5F7F9] w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                placeholder="Email Address"
              />
            </div>
            <div className=" mt-[20px] w-full">
              <input
                className="bg-[#F5F7F9] w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                placeholder="Contact Number"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center lg:gap-4">
            <div className=" mt-[20px] w-full">
              <input
                className="bg-[#F5F7F9] w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                placeholder="City"
              />
            </div>
            <div className=" mt-[20px] w-full">
              <input
                className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                placeholder="State"
              />
            </div>
          </div>
          <div className=" mt-[20px] w-full">
            <input
              className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
              placeholder="Address"
            />
          </div>
          <div className=" mt-[20px] w-full">
            <textarea
              className="bg-[#F5F7F9]  w-full rounded-md h-[100px] resize-none p-3 focus:outline-none placeholder:text-[#777777]"
              placeholder="About"
            />
          </div>
        </div>

        <div className="flex items-center mt-4">
          <Checkbox
            sx={{
              color: "#F70000",
              "& .MuiSvgIcon-root": {
                fontSize: 24,
              },
              "&.Mui-checked": {
                color: "#F70000",
              },
            }}
          />
          <p className="text-black font-normal text-[16px] ">
            By Clicking i agree all terms of services and Privacy & Policy.
          </p>
        </div>

        <button className=" bg-[#F70000] mb-4 rounded-xl h-[50px] mt-[30px] w-[100%] text-[18px] font-medium text-white">
          Register
        </button>
      </div>
    </div>
  );
}
