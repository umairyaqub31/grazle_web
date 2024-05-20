"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/card.png";
import Widget from "@/assets/Widget.png";
import Rasm from "@/assets/rasm1.png";
import Rasm1 from "@/assets/rasm33.png";
import Rasm2 from "@/assets/rasm2.png";
import Rasm3 from "@/assets/rasm3.png";
import Rasmaa from "@/assets/rasmcc.png";
import Rasmbb from "@/assets/rasmbb.png";
import Rasmcc from "@/assets/rasmaa.png";
import Dami2 from "@/assets/3fed67ae927a54329c0ab8ca6312e3e7.png";
import Dami1 from "@/assets/dbfad4efe8eef812d27afa0fc56306fd.png";
import Dami3 from "@/assets/dami33.png";
import Dami from "@/assets/dami.png";
import Limit from "@/assets/Frame 1820551169.png";
export default function Home() {
  return (
    <>
      <div className="mx-[150px] my-[16px]  h-[94px] text-white box-border px-[64px] flex items-center justify-between   bg-gradient-to-r from-[#F81F1F] to-[#FFA31A]">
        <div className="flex items-center">
          <Image src={Limit} alt="" className="w-[40px] h-[40px] mr-[16px]" />
          <div>
            <p className="font-[20px] font-semibold">Credit limit</p>
            <p className="font-[14px] font-normal">Get credit upto 10 lacs</p>
          </div>
        </div>{" "}
        <button className="text-[#F70000] w-[326px] h-[60px] bg-white rounded-full">
          Get now
        </button>
      </div>
      {/* categories */}
      <div className="mx-[150px] my-[16px] flex items-center justify-between">
        <div className="w-[125px] h-[134px] flex  flex-col justify-center items-center">
          <Image src={logo} alt="" className="w-[92px] h-[92px]" />
          <p className="color-[#393A44] text-[14px] font-normal mt-[7px]">
            Credit limit
          </p>
        </div>{" "}
        <div className="w-[92px]  flex flex-col justify-center items-center">
          <div className="border-[1px] flex  justify-center items-center w-[92px] h-[92px]  border-[#F70000] rounded-full bg-[#F8F8F8] ">
            <Image src={Widget} alt="" className="w-[40px] h-[40px] " />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
        <div className="w-[92px]  flex flex-col justify-center items-center">
          <div className="border-[1px] border-dashed flex justify-center items-center w-[92px] h-[92px] border-[#F70000] rounded-full bg-[#F8F8F8] ">
            <Image
              src={Dami}
              alt=""
              className="w-[80px] h-[80px] rounded-full "
            />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
        <div className="w-[92px]  flex flex-col justify-center items-center">
          <div className="border-[1px] border-dashed flex justify-center items-center w-[92px] h-[92px] border-[#F70000] rounded-full bg-[#F8F8F8] ">
            <Image
              src={Dami2}
              alt=""
              className="w-[80px] h-[80px] rounded-full "
            />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
        <div className="w-[92px]  flex flex-col justify-center items-center">
          <div className="border-[1px] border-dashed flex justify-center items-center w-[92px] h-[92px] border-[#F70000] rounded-full bg-[#F8F8F8] ">
            <Image
              src={Dami1}
              alt=""
              className="w-[80px] h-[80px] rounded-full "
            />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
        <div className="w-[92px]  flex flex-col justify-center items-center">
          <div className="border-[1px] border-dashed flex justify-center items-center w-[92px] h-[92px] border-[#F70000] rounded-full bg-[#F8F8F8] ">
            <Image
              src={Dami1}
              alt=""
              className="w-[80px] h-[80px] rounded-full "
            />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
        <div className="w-[92px]  flex flex-col justify-center items-center">
          <div className="border-[1px] border-dashed flex justify-center items-center w-[92px] h-[92px] border-[#F70000] rounded-full bg-[#F8F8F8] ">
            <Image
              src={Dami1}
              alt=""
              className="w-[80px] h-[80px] rounded-full "
            />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
        <div className="w-[92px]  flex flex-col justify-center items-center">
          <div className="border-[1px] border-dashed flex justify-center items-center w-[92px] h-[92px] border-[#F70000] rounded-full bg-[#F8F8F8] ">
            <Image
              src={Dami1}
              alt=""
              className="w-[80px] h-[80px] rounded-full "
            />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
        <div className="w-[92px]  flex flex-col justify-center items-center">
          <div className="border-[1px] border-dashed flex justify-center items-center w-[92px] h-[92px] border-[#F70000] rounded-full bg-[#F8F8F8] ">
            <Image
              src={Dami1}
              alt=""
              className="w-[80px] h-[80px] rounded-full "
            />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
        <div className="w-[92px]  flex flex-col justify-center items-center">
          <div className="border-[1px] border-dashed flex justify-center items-center w-[92px] h-[92px] border-[#F70000] rounded-full bg-[#F8F8F8] ">
            <Image
              src={Dami3}
              alt=""
              className="w-[80px] h-[80px] rounded-full "
            />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
      </div>
      {/* small appliances */}
      <div className="mx-[150px]  my-[16px] relative flex items-center justify-between">
        <div className="w-[308px ] card h-[469px] rounded-lg bg-[#f5f5f5] text-[#BC5A3D] p-[32px] box-border">
          <p className=" text-[24px] font-semibold">Small Appliances</p>
          <p className=" text-[16px] font-semibold my-[24px]">
            upto 40% off kitchen products.
          </p>
          <p className=" text-[16px] font-semibold ">Shop now</p>
          <Image
            src={Rasm}
            alt=""
            className="w-[265px] absolute top-[235px] h-[232px]"
          />
        </div>{" "}
        <div className="w-[308px ] card h-[469px] rounded-lg bg-[#f5f5f5] text-[#F4A200] p-[32px] box-border">
          <p className=" text-[24px] font-semibold">Small Appliances</p>
          <p className=" text-[16px] font-semibold my-[24px]">
            upto 40% off kitchen products.
          </p>
          <p className=" text-[16px] font-semibold ">Shop now</p>
          <Image
            src={Rasm1}
            alt=""
            className="w-[265px] absolute top-[235px] h-[232px]"
          />
        </div>{" "}
        <div className="w-[308px ] card h-[469px] rounded-lg bg-[#f5f5f5] text-[#6B6A56] p-[32px] box-border">
          <p className=" text-[24px] font-semibold">Small Appliances</p>
          <p className=" text-[16px] font-semibold my-[24px]">
            upto 40% off kitchen products.
          </p>
          <p className=" text-[16px] font-semibold ">Shop now</p>
          <Image
            src={Rasm2}
            alt=""
            className="w-[265px] absolute top-[235px] h-[232px]"
          />
        </div>{" "}
        <div className="w-[308px ] card h-[469px] rounded-lg bg-[#D2ECDA] text-[#4FAD2E]  p-[32px] box-border">
          <p className=" text-[24px] font-semibold">Small Appliances</p>
          <p className=" text-[16px] font-semibold my-[24px]">
            upto 40% off kitchen products.
          </p>
          <p className=" text-[16px] font-semibold ">Shop now</p>
          <Image
            src={Rasm3}
            alt=""
            className="w-[265px] absolute top-[235px] h-[232px]"
          />
        </div>
      </div>
      {/* small appliances */}
      <div className="mx-[150px]  my-[16px]  flex items-center justify-between">
        <div className="w-[402px] card relative h-[281px] flex items-center rounded-lg bg-[#EBFFF1] text-[#4FAD2E] p-[32px] box-border">
          <div className="w-[171px]">
            <p className=" text-[24px] font-semibold">Small Appliances</p>
            <p className=" text-[16px] font-semibold my-[24px]">
              upto 40% off kitchen products.
            </p>
            <p className=" text-[16px] font-semibold ">Shop now</p>
          </div>
          <Image
            src={Rasmcc}
            alt=""
            className="w-[200px] absolute top-[30px] h-[260px] left-[200px]"
          />
        </div>{" "}
        <div className="w-[402px] card h-[281px] relative flex items-center rounded-lg bg-[#EBF4FF] text-[#1B9CE4] p-[32px] box-border">
          <div className="w-[171px]">
            <p className=" text-[24px] font-semibold">Small Appliances</p>
            <p className=" text-[16px] font-semibold my-[24px]">
              upto 40% off kitchen products.
            </p>
            <p className=" text-[16px] font-semibold ">Shop now</p>
          </div>
          <Image
            src={Rasmbb}
            alt=""
            className="w-[200px] absolute top-[30px] h-[260px] left-[200px]"
          />
        </div>{" "}
        <div className="w-[402px] card h-[281px] flex relative items-center rounded-lg bg-[#FFF5EE] text-[#91553A] p-[32px] box-border">
          <div className="w-[171px]">
            <p className=" text-[24px] font-semibold">Small Appliances</p>
            <p className=" text-[16px] font-semibold my-[24px]">
              upto 40% off kitchen products.
            </p>
            <p className=" text-[16px] font-semibold ">Shop now</p>
          </div>
          <Image
            src={Rasmaa}
            alt=""
            className="w-[200px] absolute top-[30px] h-[260px] left-[200px]"
          />
        </div>{" "}
      </div>
    </>
  );
}
