"use client";

import React, { useState } from "react";
import Image from "next/image";
import login from "@/assets/login.png";
import logo from "@/assets/Grazle Logo.png";
import { IoMdMail } from "react-icons/io";
import { TiLockClosed } from "react-icons/ti";
import { Checkbox } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-[100%] h-[100vh] flex items-center ">
      <div className="w-[50%] h-[100vh] bounded-5xl ">
        <Image src={login} alt="" className="w-[100%] h-full pt-8 " />
      </div>
      <div className="w-[50%] h-[100vh] p-[50px]">
        <div className="flex flex-col justify-center items-center ">
          <Image src={logo} alt="" className="w-[210px] h-[125px]" />
          <p className="mt-6 text-[40px] font-semibold">Welcome Back</p>
          <p className=" text-[18px] font-medium text-[#777777]">
            Please log in into your account
          </p>
        </div>
        <div>
          <div className="relative mt-[40px] w-full">
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
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">
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
            <p className="text-[#777777] font-normal text-[16px] ">
              Remember me!
            </p>
          </div>
          <p className="text-[#F70000] font-medium text-[16px] ">
            Forgot Password?
          </p>
        </div>
        <button className=" bg-[#F70000] rounded-xl h-[50px] mt-[30px] w-[100%] text-[18px] font-medium text-white">
          Sign In
        </button>
        <div className="flex items-center mt-5">
          <div className="border-b-[#777777] border-[1px] w-full"></div>
          <p className="text-[#777777] text-[16px] font-normal w-[250px]">
            or log in with
          </p>
          <div className="border-b-[#777777] border-[1px] w-full"></div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <button className=" bg-[#00000012] rounded-xl h-[50px] mt-[30px] w-[100%] text-[18px] font-medium text-black">
            Log in with Apple
          </button>
          <button className=" bg-[#F7000012] rounded-xl h-[50px] mt-[30px] w-[100%] text-[18px] font-medium text-black">
            Log in with Google
          </button>
        </div>
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
