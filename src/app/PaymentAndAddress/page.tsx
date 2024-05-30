"use client";
import React, { useState } from "react";
import airpod from "@/assets/airpod.png";
import Delivery from "@/assets/Group 1820549945.png";
import FedEx from "@/assets/image 9.png";
import card from "@/assets/credit-card (3) 1.png";
import visa from "@/assets/pngwing 7.png";
import Cash from "@/assets/image 12.png";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { Checkbox, Radio } from "@mui/material";
import { FaCircleCheck } from "react-icons/fa6";
import CustomModal from "@/components/CustomModel";
import Dots from "@/assets/Group 1820549907.png";
export default function PaymentAndAddress() {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };
  const [showSendModel, setShowSendModel] = useState(false);

  const handleOpeneMode = () => {
    setShowSendModel(true);
  };
  const handleCloseModel = () => {
    setShowSendModel(false);
  };
  return (
    <div className="lg:my-[50px] my-[20px] sm:my-[20px] md:my-[30px] lg:mx-[150px] mx-[10px] sm:mx-[10px] md:mx-[30px] flex  flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-start gap-8">
      <div className="lg:w-[70%] w-[100%] sm:w-[100%] md:w-[100%] rounded-3xl p-[20px] ">
        {" "}
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="w-[100%] rounded-3xl p-[20px] "
        >
          <div className="flex items-center">
            <IoLocationOutline className=" w-[33px] h-[46px] mr-3" />
            <p className="text-[40px] font-bold">Shipping Address</p>
          </div>
          <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center gap-4 mt-6">
            <div className="flex-col ">
              <label className="text-[16px] font-normal text-[#7777777]">
                First Name
              </label>
              <input className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none" />
            </div>{" "}
            <div className="flex-col ">
              <label className="text-[16px] font-normal text-[#7777777]">
                Last Name
              </label>
              <input className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none" />
            </div>
          </div>
          <div className="flex-col mt-6">
            <label className="text-[16px] font-normal text-[#7777777]">
              Street Address
            </label>
            <input className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none" />
          </div>{" "}
          <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center gap-4 mt-6">
            <div className="flex-col ">
              <label className="text-[16px] font-normal text-[#7777777]">
                State
              </label>
              <input className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none" />
            </div>{" "}
            <div className="flex-col">
              <label className="text-[16px] font-normal text-[#7777777]">
                Region
              </label>
              <input className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none" />
            </div>
            <div className="flex-col ">
              <label className="text-[16px] font-normal text-[#7777777]">
                Zip Code
              </label>
              <input className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none" />
            </div>
          </div>
          <div className="mt-7 flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center">
            <button className="lg:mr-4 mr-0 bg-[#D2D4DA] rounded-md h-[50px]  lg:w-[150px] w-[100%] sm:w-[100%] text-[18px] font-medium text-white">
              Cancel
            </button>
            <button className=" bg-[#F70000] mt-4 lg:mt-0 rounded-md h-[50px]  lg:w-[210px] w-[100%] sm:w-[100%]  text-[18px] font-medium text-white">
              Use this Addresss
            </button>
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="w-[100%] rounded-3xl p-[20px] mt-4 "
        >
          <div className="flex items-center gap-2">
            <Image src={Delivery} alt="Airpod" className=" w-[54px] h-[32px]" />
            <p className="lg:text-[40px] text-[24px] sm:text-[24px] font-medium ">
              Delivery Partner
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Image src={FedEx} alt="Airpod" className=" w-[74px] h-[32px]" />
            <p className="text-[24px] font-medium ">Delivery Partner</p>
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="w-[100%] rounded-3xl p-[20px] mt-4 "
        >
          <div className="flex items-center gap-2 mt-2">
            <Image
              src={card}
              alt="Airpod"
              className=" w-[42px] h-[42px] mr-2"
            />
            <p className="lg:text-[40px] text-[24px] sm:text-[24px] font-medium ">
              All Payment Options
            </p>
          </div>
          <div
            className={`border-[1px] mt-3 p-3 rounded-xl ${
              isChecked ? "border-[#F70000] bg-[#FFE5E5]" : "border-[#777777]"
            }`}
          >
            <div className="flex items-center gap-2">
              <Radio
                checked={isChecked}
                onChange={handleRadioChange}
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
              <p className="text-[18px] font-medium">Credit Card</p>
            </div>
            <p className="text-[16px] font-medium text-[#777777]">
              Pay securely using your visa, maestro, Discover, or American
              express card.
            </p>
            <div className="flex-col mt-6">
              <label className="text-[16px] font-normal text-[#777777]">
                Card Number
              </label>
              <input className="border-[1px] mt-[9px] border-[#777777] w-full rounded-md h-[50px] p-3 focus:outline-none" />
            </div>
            <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center gap-4 mt-6">
              <div className="flex-col">
                <label className="text-[16px] font-normal text-[#777777]">
                  Name On Card
                </label>
                <input className="border-[1px] mt-[9px] border-[#777777] w-full rounded-md h-[50px] p-3 focus:outline-none" />
              </div>
              <div className="flex-col">
                <label className="text-[16px] font-normal text-[#777777]">
                  Expiry Date
                </label>
                <input className="border-[1px] mt-[9px] border-[#777777] w-full rounded-md h-[50px] p-3 focus:outline-none" />
              </div>
              <div className="flex-col">
                <label className="text-[16px] font-normal text-[#777777]">
                  CVC Number
                </label>
                <input className="border-[1px] mt-[9px] border-[#777777] w-full rounded-md h-[50px] p-3 focus:outline-none" />
              </div>
            </div>
          </div>
          <div className="border-[1px] mt-4 p-3 flex items-center justify-between rounded-xl w-full">
            <div className="flex items-center">
              <Radio
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
              <p className="text-[18px] font-medium ml-2 ">Visa</p>
            </div>
            <Image src={visa} alt="visa" className=" w-[42px] h-[42px] mr-2" />
          </div>
          <div className="border-[1px] mt-4 p-3 flex items-center justify-between rounded-xl w-full">
            <div className="flex items-center">
              <Radio
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
              <p className="text-[18px] font-medium ml-2 ">Master Card</p>
            </div>
          </div>{" "}
          <div className="border-[1px] mt-4 p-3 flex items-center justify-between rounded-xl w-full">
            <div className="flex items-center">
              <Radio
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
              <p className=" ">Cash on Delivery</p>
            </div>
            <Image src={Cash} alt="visa" className=" w-[43px] h-[30px] mr-2" />
          </div>
          <button
            className=" mt-10 bg-[#F70000] rounded-md h-[50px]  w-[100%] text-[18px] font-medium text-white"
            onClick={handleOpeneMode}
          >
            Pay $567.00
          </button>
          <div className="mt-3 flex items-center">
            <Checkbox
              sx={{
                color: "#FF8A1D",
                "& .MuiSvgIcon-root": {
                  fontSize: 24,
                },
                "&.Mui-checked": {
                  color: "#FF8A1D",
                },
              }}
            />
            <p className="text-[18px] font-medium ml-2  text-[#777777]">
              By Clicking this, I agree all Terms & Conditions and Privacy &
              Ploicy
            </p>
          </div>
        </div>
      </div>
      <CustomModal showModal={showSendModel}>
        <div className="flex-col justify-center w-[900px]">
          <div className="mx-[150px]  my-[100px]">
            <div className="flex justify-center mb-[22px]">
              <Image src={Dots} alt="" className="h-[64px] w-[64px]" />

              <FaCircleCheck className="text-[#E24C4B] h-[105px] mx-[16px] w-[105px]" />
              <Image src={Dots} alt="" className="h-[64px] w-[64px]" />
            </div>
            <p className="mt-5 text-[32px] text-center font-semibold text-[#434343]">
              Your order has been successfully placed
            </p>
            <p className=" mt-3 text-[16px] text-center font-semibold text-[#434343]">
              We will be sending you an email confirmation to user888@email.com
              shortly
            </p>
            <div className="flex mt-[30px] mb-[100px] gap-4 justify-center">
              <button
                className=" bg-[#F70000] rounded-lg h-[50px] w-[275px] text-white font-medium"
                onClick={handleCloseModel}
              >
                Leave a Review
              </button>
              <button
                className=" bg-[#F69B26] rounded-lg h-[50px] w-[275px] text-white font-medium"
                onClick={handleCloseModel}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </CustomModal>
      <div className="lg:w-[30%] w-[100%] sm:w-[100%] md:w-[100%] h-auto">
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="w-full rounded-3xl p-5"
        >
          <p className="text-[16px] font-medium text-[#777777]">
            We will contact you to confirm order
          </p>
          <input
            className="border-[1px] mt-4 border-[#0000061]  w-full rounded-xl h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
            placeholder="Name"
          />
        </div>
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="w-full rounded-3xl p-5 mt-5 relative"
        >
          <p className="text-[16px] font-medium text-[#777777]">
            Have a Coupen
          </p>
          <button className="absolute bg-[#F70000] right-8 top-[68px] rounded-md h-[35px]  w-[70px] text-[18px] font-medium text-white">
            Add
          </button>
          <input
            className="border-[1px] mt-4 border-[#0000061]  w-full rounded-xl h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
            placeholder="Add Coupen"
          />
        </div>
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="w-full h-full rounded-3xl p-5 mt-5 relative"
        >
          <div className="mt-[0px] flex items-center justify-between">
            <div className="relative w-[90px] h-[90px]  mr-2">
              <p className="absolute text-[16px] top-2 right-2 font-medium text-[#777777]">
                4
              </p>
              <Image
                src={airpod}
                alt="Airpod"
                className="rounded-2xl w-full h-full"
              />
            </div>
            <div className="flex items-center">
              <p className="text-[16px] font-medium text-black">
                Apple Airpods Pro
              </p>
              <p className="text-[13px] font-medium text-[#777777]">White</p>
            </div>
            <p className="text-[16px] font-medium text-[#777777]">$567.00</p>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="relative w-[90px] h-[90px]  mr-2 ">
              <p className="absolute text-[16px] top-2 right-2 font-medium text-[#777777]">
                4
              </p>
              <Image
                src={airpod}
                alt="Airpod"
                className="rounded-2xl w-full h-full"
              />
            </div>
            <div className="flex items-center">
              <p className="text-[16px] font-medium text-black">
                Apple Airpods Pro
              </p>
              <p className="text-[13px] font-medium text-[#777777]">White</p>
            </div>
            <p className="text-[16px] font-medium text-[#777777]">$567.00</p>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="relative w-[90px] h-[90px]  mr-2">
              <p className="absolute text-[16px] top-2 right-2 font-medium text-[#777777]">
                4
              </p>
              <Image
                src={airpod}
                alt="Airpod"
                className="rounded-2xl w-full h-full"
              />
            </div>
            <div className="flex items-center">
              <p className="text-[16px] font-medium text-black">
                Apple Airpods Pro
              </p>
              <p className="text-[13px] font-medium text-[#777777]">White</p>
            </div>
            <p className="text-[16px] font-medium text-[#777777]">$567.00</p>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="relative w-[90px] h-[90px]  mr-2 ">
              <p className="absolute text-[16px] top-2 right-2 font-medium text-[#777777]">
                4
              </p>
              <Image
                src={airpod}
                alt="Airpod"
                className="rounded-2xl w-full h-full"
              />
            </div>
            <div className="flex items-center">
              <p className="text-[16px] font-medium text-black">
                Apple Airpods Pro
              </p>
              <p className="text-[13px] font-medium text-[#777777]">White</p>
            </div>
            <p className="text-[16px] font-medium text-[#777777]">$567.00</p>
          </div>
          <div className="mt-5 border-b-[1px] border-[#777777]"></div>
          <p className="text-[24px] font-medium text-blackmt-2">Cart Total</p>
          <div className="flex items-center mt-4 justify-between">
            <p className="text-[18px] font-medium text-[#777777] ">
              Cart Subtotal
            </p>
            <p className="text-[18px] font-bold text-[#777777] ">Cart Total</p>
          </div>
          <div className="flex items-center mt-4 justify-between">
            <p className="text-[18px] font-medium text-[#777777] ">Shipping</p>
            <p className="text-[18px] font-bold text-black ">Free</p>
          </div>
          <div className="flex items-center mt-4 justify-between">
            <p className="text-[18px] font-medium text-[#777777] ">Discount</p>
            <p className="text-[18px] font-bold text-black ">$66.00</p>
          </div>
          <div className="my-5 border-b-[1px] border-[#777777]"></div>
          <div className="flex items-center mt-4 justify-between">
            <p className="text-[18px] font-bold text-black ">Cart Total</p>
            <p className="text-[18px] font-bold text-[#777777] ">$66.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
