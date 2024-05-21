"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/card.png";
import Logoo from "@/assets/Grazle Logo.png";
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
import MainSlider from "@/components/mianSlider";
import bg from "@/assets/2 copy.png";
import Google from "@/assets/Google Play Badge.png";
import Apple from "@/assets/Group.png";
import Arrow from "@/assets/Round Alt Arrow Right.png";
import Phone1 from "@/assets/Phone Mockup 1.png";
import Phone2 from "@/assets/Phone Mockup 2.png";
import Fram11 from "@/assets/Frame 11.png";
import Fram22 from "@/assets/Frame 22.png";
import Fram33 from "@/assets/Frame33.png";
import Fram44 from "@/assets/Frame 44.png";
import CartVector from "@/assets/CartVector.png";
import RecentViewSlider from "@/components/rencentView";
import Slider1 from "@/assets/3fed67ae927a54329c0ab8ca6312e3e7.png";
import Slider2 from "@/assets/dbfad4efe8eef812d27afa0fc56306fd.png";
export default function Home() {
  const sliderItems = [
    {
      imageUrl: Slider1,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "3.8 (342)",
      newprice: "$400",
      oldPrice: "$500",
      discount: "20%off",
    },
    {
      imageUrl: Slider2,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "3.8 (342)",
      newprice: "$400",
      oldPrice: "$900",
      discount: "20%off",
    },
    {
      imageUrl: Slider1,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "2.8 (342)",
      newprice: "$1000",
      oldPrice: "$1100",
      discount: "30%off",
    },
    {
      imageUrl: Slider2,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "4.8 (342)",
      newprice: "$400",
      oldPrice: "$500",
      discount: "10%off",
    },
    {
      imageUrl: Slider1,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",

      review: "3.8 (342)",
      newprice: "$750",
      oldPrice: "$1500",
      discount: "50%off",
    },
    {
      imageUrl: Slider2,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "1.8 (342)",
      newprice: "$1000",
      oldPrice: "$1100",
      discount: "30%off",
    },
  ];
  const sliderItems22 = [
    {
      imageUrl: Slider1,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "3.8 (342)",
      newprice: "$400",
      oldPrice: "$500",
      discount: "20%off",
    },
    {
      imageUrl: Slider2,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "3.8 (342)",
      newprice: "$400",
      oldPrice: "$900",
      discount: "20%off",
    },
    {
      imageUrl: Slider1,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "2.8 (342)",
      newprice: "$1000",
      oldPrice: "$1100",
      discount: "30%off",
    },
    {
      imageUrl: Slider2,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "4.8 (342)",
      newprice: "$400",
      oldPrice: "$500",
      discount: "10%off",
    },
    {
      imageUrl: Slider1,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",

      review: "3.8 (342)",
      newprice: "$750",
      oldPrice: "$1500",
      discount: "50%off",
    },
    {
      imageUrl: Slider2,
      Heading: "Capttain pure by kapil dev xtra pure 18 ",
      text: "Lorem Ipsum is simply dummy text of the printing an...",
      review: "1.8 (342)",
      newprice: "$1000",
      oldPrice: "$1100",
      discount: "30%off",
    },
  ];
  return (
    <>
      <div className="lg:mx-[150px] md:mx-[60px] my-[16px]  h-[94px] text-white box-border px-[64px] flex items-center justify-between   bg-gradient-to-r from-[#F81F1F] to-[#FFA31A]">
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
      {/* mianSlider */}
      <div className="lg:mx-[150px] md:mx-[60px]">
        <MainSlider />
      </div>

      {/* categories */}
      <div className="lg:mx-[150px] sm:w-[445px] sm:overflow-x-auto md:overflow-x-auto md:w-[645px] lg:w-auto md:overflow-x-auto sm:mx-[60px]  flex items-center justify-between">
        <div className="w-[125px] h-[134px] flex  flex-col justify-center items-center">
          <Image
            src={logo}
            alt=""
            className="lg:w-[92px] sm:w-[92px] lg:h-[92px]"
          />
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
      <div className="lg:mx-[150px] md:mx-[60px]   my-[16px] relative flex items-center justify-between">
        <div
          style={{ backgroundColor: "rgba(195, 95, 65, 0.2)" }}
          className="lg:w-[308px] md:w-[460px] card h-[469px] rounded-lg  text-[#BC5A3D] p-[32px] box-border"
        >
          <p className=" text-[24px] font-semibold">Small Appliances</p>
          <p className=" text-[16px] font-semibold my-[24px]">
            upto 40% off kitchen products.
          </p>
          <p className=" text-[16px] font-semibold ">Shop now</p>
          <Image
            src={Rasm}
            alt=""
            className="w-[278px] absolute top-[235px] h-[232px]"
          />
        </div>{" "}
        <div
          style={{ backgroundColor: "rgba(244, 162, 0, 0.2)" }}
          className="lg:w-[308px]  card h-[469px] rounded-lg  text-[#F4A200] p-[32px] box-border"
        >
          <p className=" text-[24px] font-semibold">Small Appliances</p>
          <p className=" text-[16px] font-semibold my-[24px]">
            upto 40% off kitchen products.
          </p>
          <p className=" text-[16px] font-semibold ">Shop now</p>
          <Image
            src={Rasm1}
            alt=""
            className="w-[278px] absolute top-[235px] h-[232px]"
          />
        </div>{" "}
        <div
          style={{ backgroundColor: "rgba(113, 111, 86, 0.2)" }}
          className="lg:w-[308px]  card h-[469px] rounded-lg  text-[#6B6A56] p-[32px] box-border"
        >
          <p className=" text-[24px] font-semibold">Small Appliances</p>
          <p className=" text-[16px] font-semibold my-[24px]">
            upto 40% off kitchen products.
          </p>
          <p className=" text-[16px] font-semibold ">Shop now</p>
          <Image
            src={Rasm2}
            alt=""
            className="w-[278px] absolute top-[235px] h-[232px]"
          />
        </div>{" "}
        <div
          style={{ backgroundColor: "rgba(210, 236, 218, 1)" }}
          className="lg:w-[308px]  card h-[469px] rounded-lg bg-[#D2ECDA] text-[#4FAD2E]  p-[32px] box-border"
        >
          <p className=" text-[24px]  font-semibold">Small Appliances</p>
          <p className=" text-[16px]  font-semibold my-[24px]">
            upto 40% off kitchen products.
          </p>
          <p className=" text-[16px] font-semibold ">Shop now</p>

          <Image
            src={Rasm3}
            alt=""
            className="w-[272px] absolute top-[235px] h-[232px]"
          />
        </div>
      </div>
      <div className="lg:mx-[150px] md:mx-[60px] my-[24px]">
        <div>
          <p className="text-[24px] font-semibold">Recent viewed</p>
        </div>
        <RecentViewSlider Data={sliderItems} />
      </div>
      <div className="lg:mx-[150px] md:mx-[60px]  my-[24px]">
        <div>
          <p className="text-[24px] font-semibold">suggested for you</p>
        </div>
        <RecentViewSlider Data={sliderItems} />
      </div>
      {/* Baner */}
      <div className="lg:mx-[150px] md:mx-[60px]  my-[16px]">
        <Image src={bg} alt="" className="w-[100%]  h-[417px]" />
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(233, 136, 11, 0.2) 0%, rgba(247, 120, 3, 0.2) 100%)",
          }}
          className="h-[428px] p-[16px]"
        >
          <div className="flex justify-between">
            <p className="text-[14px] font-semibold">Best fo all </p>
            <Image src={Arrow} alt="" className="w-[24px]  h-[24px]" />
          </div>
          <div className="flex justify-between mt-[16px]">
            <div className="w-[300px] p-[8px] bg-[white] h-[348px] rounded-lg">
              <Image src={Fram44} alt="" className="w-[100%]  h-[271px]" />
              <p className="text-[#393A44] text-[16px] font-semibold mt-[4px]">
                capttain pure b
              </p>

              <p className="text-[#F70000] text-[16px] font-semibold mt-[4px]">
                special deal
              </p>
            </div>
            <div className="w-[300px] p-[8px] bg-[white] h-[348px] rounded-lg">
              <Image src={Fram11} alt="" className="w-[100%]  h-[271px]" />
              <p className="text-[#393A44] text-[16px] font-semibold mt-[4px]">
                capttain pure b
              </p>

              <p className="text-[#F70000] text-[16px] font-semibold mt-[4px]">
                special deal
              </p>
            </div>
            <div className="w-[300px] p-[8px] bg-[white] h-[348px] rounded-lg">
              <Image src={Fram33} alt="" className="w-[100%]  h-[271px]" />
              <p className="text-[#393A44] text-[16px] font-semibold mt-[4px]">
                capttain pure b
              </p>

              <p className="text-[#F70000] text-[16px] font-semibold mt-[4px]">
                special deal
              </p>
            </div>
            <div className="w-[300px] p-[8px] bg-[white] h-[348px] rounded-lg">
              <Image src={Fram22} alt="" className="w-[100%]  h-[271px]" />
              <p className="text-[#393A44] text-[16px] font-semibold mt-[4px]">
                capttain pure b
              </p>

              <p className="text-[#F70000] text-[16px] font-semibold mt-[4px]">
                special deal
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-[150px] md:mx-[60px]  my-[24px]">
        <div>
          <p className="text-[24px] font-semibold">Trending</p>
        </div>
        <RecentViewSlider Data={sliderItems22} />
      </div>
      {/* small appliances */}
      <div className="lg:mx-[150px] md:mx-[60px]  my-[16px]  flex items-center justify-between">
        <div className="lg:w-[402px]  card relative h-[281px] flex items-center rounded-lg bg-[#EBFFF1] text-[#4FAD2E] p-[32px] box-border">
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
      <div
        style={{
          background:
            "linear-gradient(97.69deg, rgba(247, 0, 0, 0.1) 3.55%, rgba(145, 131, 0, 0.1) 91.28%)",
        }}
        className="lg:mx-[150px] md:mx-[60px] relative h-[491px] px[100px] px-[100px] py-[60px] my-[16px] flex   justify-between"
      >
        <div>
          <Image src={Logoo} alt="" className="w-[120px] h-[70px]" />
          <div className="w-[570px] mt-[32px]">
            <p className="text-[48px] font-bold">
              simplify your shopping with GRAZLE
            </p>
            <p className="text-[16px] ">SHOPPING ON THE GO IS FAST AND EASY</p>
            <p className="text-[16px] mt-[32px] text-[#393A44] font-medium">
              Get the App
            </p>
            <div className="flex items-center mt-[32px]">
              <Image
                src={Google}
                alt=""
                className="w-[135px] h-[40px] mr-[16px]"
              />
              <Image src={Apple} alt="" className="w-[135px] h-[40px]" />
            </div>
          </div>
        </div>
        <div className="flex ml-[32px]">
          <Image
            src={Phone1}
            alt=""
            className="w-[278px] absolute right-[340px] top-[0px] h-[456px] ml-[16px]"
          />
          <Image
            src={Phone2}
            alt=""
            className="w-[278px] h-[456px] absolute right-[40px] bottom-[0px] "
          />
        </div>
      </div>
    </>
  );
}
