import React, { useState } from "react";
import Image from "next/image";
import PayPal from "@/assets/card333.png";
import CustomModal from "@/components/CustomModel";
import { FaCircleCheck } from "react-icons/fa6";
import Dots from "@/assets/Group 1820549907.png";

export default function CreditLimit() {
  const [showSendModel, setShowSendModel] = useState(false);

  const handleOpeneModel = () => {
    setShowSendModel(true);
  };
  const handleCloseModel = () => {
    setShowSendModel(false);
  };
  return (
    <div className="mx-[150px] gap-4  flex  my-[32px]">
      <div
        style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
        className="w-[60%] rounded-3xl p-[24px] h-auto"
      >
        <div className="flex-col mt-[30px] ">
          <label className="text-[16px] font-semibold">Shop Name</label>
          <input
            placeholder="Shop Name"
            className="border-[1px] mt-[9px] border-[#7777777]  w-full flex items-center justify-center rounded-md h-[50px] p-3 focus:outline-none"
          />
        </div>{" "}
        <div className="flex-col mt-[30px]">
          <label className="text-[16px] font-semibold">Phone Number</label>
          <input
            placeholder="Phone Numbers"
            className="border-[1px] mt-[9px] border-[#7777777]  w-full flex items-center justify-center rounded-md h-[50px] p-3 focus:outline-none"
          />
        </div>{" "}
        <div className="flex-col mt-[30px]">
          <label className="text-[16px] font-semibold">Email Address</label>
          <input
            placeholder="Email Address"
            className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
          />
        </div>{" "}
        <div className="flex-col mt-[30px]">
          <label className="text-[16px] font-semibold">Shop Address</label>
          <input
            placeholder="Shop Address"
            className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
          />
        </div>{" "}
        <div className="flex-col mt-[30px]">
          <label className="text-[16px] font-semibold">
            Addhar Card (Optional)
          </label>
          <input
            placeholder="Addhar Card (Optional)"
            className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
          />
        </div>{" "}
        <div className="flex-col mt-[30px]">
          <label className="text-[16px] font-semibold">
            Credit Card Number
          </label>
          <input
            placeholder="Credit Card Number"
            className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
          />
        </div>{" "}
        <div className=" mt-[30px]">
          <button
            className=" bg-[#F70000] rounded-2xl h-[50px]  w-full text-[18px] font-medium text-white"
            onClick={handleOpeneModel}
          >
            Send Request
          </button>
        </div>
      </div>
      <div
        style={{
          boxShadow: "0px 4px 29px 0px #0000000A",
          background:
            "linear-gradient(107.86deg, #F70000 -1.3%, #F69B26 81.68%",
        }}
        className="w-[40%] text-white rounded-2xl p-[24px] h-[300px]"
      >
        <div className="flex items-center">
          <div className="w-[60px] h-[60px] bg-[#F96609] rounded-full flex items-center justify-center">
            <Image alt="" src={PayPal} className="w-[30px] h-[22px]" />
          </div>
          <p className="text-[24px] ml-3  font-semibold text-white ">
            Credit Limit
          </p>
        </div>
        <div className="mt-6 flex items-center">
          <p className="text-[24px] font-semibold text-white ">
            Get Credit Upto
          </p>
          <p className="text-[64px] ml-6 font-bold text-white ">66 Lac</p>
        </div>
        <div className="mt-6 flex items-center">
          <div className="border-b-[1px] border-white w-[70%]"></div>
          <p className="text-[16px] font-semibold">Only For Retailers</p>
        </div>
      </div>
      <CustomModal showModal={showSendModel}>
        <div className="flex-col justify-center w-[900px]">
          <div className="mx-[150px] my-[100px]">
            <div className="flex justify-center mb-[22px]">
              <Image src={Dots} alt="" className="h-[64px] w-[64px]" />

              <FaCircleCheck className="text-[#E24C4B] h-[105px] mx-[16px] w-[105px]" />
              <Image src={Dots} alt="" className="h-[64px] w-[64px]" />
            </div>
            <p className="text-[32px] text-center font-bold text-[#434343]">
              You Have Successfully purchased Prime Plan.
            </p>
            <div className="flex mt-[30px] mb-[100px] justify-center">
              <button
                className=" bg-[#F70000] rounded-lg h-[50px] w-[275px] text-white font-medium"
                onClick={handleCloseModel}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </CustomModal>
      <CustomModal showModal={showSendModel}>
        <div className="flex-col justify-center w-[900px]">
          <div className="mx-[150px] my-[100px]">
            <div className="flex justify-center mb-[22px]">
              <Image src={Dots} alt="" className="h-[64px] w-[64px]" />

              <FaCircleCheck className="text-[#E24C4B] h-[105px] mx-[16px] w-[105px]" />
              <Image src={Dots} alt="" className="h-[64px] w-[64px]" />
            </div>
            <p className="text-[32px] text-center font-bold text-[#434343]">
              You Have Successfully purchased Prime Plan.
            </p>
            <div className="flex mt-[30px] mb-[100px] justify-center">
              <button
                className=" bg-[#F70000] rounded-lg h-[50px] w-[275px] text-white font-medium"
                onClick={handleCloseModel}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}
