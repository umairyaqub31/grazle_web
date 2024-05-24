import { Rating } from "@mui/material";
import React from "react";

export default function Review() {
  return (
    <div className="mx-[150px] my-[50px] flex items-center gap-8">
      <div
        style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
        className="w-[65%] rounded-[30px] p-[30px] h-[620px]"
      >
        <p className="text-[40px]  font-medium">Write a Review</p>
        <p className="text-[20px]  font-semibold  mt-3">Rate the Product</p>
        <Rating
          name="read-only"
          mt-3
          defaultValue={2}
          readOnly
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 50,
            },
          }}
        />

        <div className="flex items-center gap-5 mt-5">
          <div className="w-[50%]">
            <label className="text-[16px] font-semibold text-[#777777]">
              Name
            </label>
            <input
              className="border-[1px] border-[#0000061]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
              placeholder="Email Address"
            />
          </div>
          <div className="w-[50%] ">
            <label className="text-[16px] font-semibold text-[#777777]">
              Email
            </label>
            <input
              className="border-[1px] border-[#0000061]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="mt-5">
          <label className="text-[16px] font-semibold text-[#777777]">
            Messsage
          </label>
          <textarea
            className="border-[1px] border-[#0000061] resize-none  w-full rounded-md h-[150px] p-3 focus:outline-none placeholder:text-[#777777]"
            placeholder="Messsage"
          />
        </div>
        <div className="flex mt-5 items-center gap-6">
          <button className=" bg-[#F70000] rounded-xl h-[50px]  mt-[30px] w-[230px] text-[18px] font-medium text-white">
            Submit
          </button>
          <button className=" bg-[#F69B26] rounded-xl h-[50px] mt-[30px] w-[230px] text-[18px] font-medium text-white">
            Cancel
          </button>
        </div>
      </div>
      <div
        style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
        className="w-[35%] rounded-[30px] p-[30px] h-[620px]"
      >
        <p className="text-[24px]  font-semibold">How to write a review</p>
        <p className="text-[16px]  font-medium text-[#777777] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>
        <div className="flex items-start mt-6">
          <p className="text-[18px] mr-3  font-medium text-[#F69B26]">1</p>
          <p>
            <p className="text-[14px]  font-medium text-[#777777]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </p>
        </div>
        <div className="flex items-start mt-6">
          <p className="text-[18px] mr-3  font-medium text-[#F69B26]">2</p>
          <p>
            <p className="text-[14px]  font-medium text-[#777777]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </p>
        </div>
        <div className="flex items-start mt-6">
          <p className="text-[18px] mr-3  font-medium text-[#F69B26]">3</p>
          <p>
            <p className="text-[14px]  font-medium text-[#777777]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </p>
        </div>
        <div className="flex items-start mt-6">
          <p className="text-[18px] mr-3  font-medium text-[#F69B26]">4</p>
          <p>
            <p className="text-[14px]  font-medium text-[#777777]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
