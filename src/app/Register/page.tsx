"use client";
import React, { useState } from "react";
import Image from "next/image";
import register from "@/assets/pose_38 1.png";
import logo from "@/assets/Grazle Logo.png";
import { IoMdMail } from "react-icons/io";
import { TiLockClosed } from "react-icons/ti";
import { Checkbox } from "@mui/material";
import { FaUser } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-[100%] h-[100vh] flex items-center p-[50px] ">
      <div
        style={{
          background:
            "linear-gradient(162.65deg, #FF781E 1.87%, #FDC197 88.1%)",
        }}
        className="w-[50%] h-[90vh] text-white relative rounded-[60px] px-[40px] py-[50px] my-[50px] "
      >
        <p className="text-[40px] font-semibold">
          Discover endless possibilities
        </p>
        <div className="w-[60%]">
          <p className="text-[60px]  font-bold  ">
            Explore, buy, and sell with our vibrant maketplace
          </p>
        </div>

        <Image
          src={register}
          alt=""
          className="w-[100%] top-[100px] absolute right-[30px] h-[650px]"
        />
      </div>
      <div className="w-[50%] h-[100vh] pl-[50px] py-[50px] ">
        <div className="flex flex-col justify-center items-center ">
          <Image src={logo} alt="" className="w-[210px] h-[125px]" />
          <p className="mt-6 text-[40px] font-semibold">Welcome Back</p>
          <p className=" text-[18px] font-medium text-[#777777]">
            Please log in into your account
          </p>
        </div>
        <div>
          <div className="relative mt-[40px] w-full">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] text-[20px]" />
            <input
              className="bg-[#F5F7F9] pl-11 w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
              placeholder="Email Address"
            />
          </div>
          <div className="relative mt-[20px] w-full">
            <IoMdMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] text-[20px]" />
            <input
              className="bg-[#F5F7F9] pl-11 w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
              placeholder="Email Address"
            />
          </div>
          <div className="relative mt-[20px] w-full">
            <TiLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] text-[24px]" />
            <input
              type={showPassword ? "text" : "password"}
              className="bg-[#F5F7F9] pl-11 w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
              placeholder="Password"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#777777] text-[24px]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="relative mt-[20px] w-full">
            <TiLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] text-[24px]" />
            <input
              type={showPassword ? "text" : "password"}
              className="bg-[#F5F7F9] pl-11 w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
              placeholder="Password"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#777777] text-[24px]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
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

        <button className=" bg-[#F70000] rounded-xl h-[50px] mt-[30px] w-[100%] text-[18px] font-medium text-white">
          Register
        </button>

        <p className="font-normal text-[#777777] text-[16px] text-center mt-10">
          Don’t Have an Account?
          <strong className="ml-2 font-medium text-[#F70000]">
            Sign Up
          </strong>{" "}
        </p>
      </div>
    </div>
  );
}
