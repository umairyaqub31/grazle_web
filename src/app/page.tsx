"use client";
import React, { useState, useEffect, useRef } from "react";
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
import Cardmm from "@/assets/Cardmmm.png";
import Card from "@/assets/Frame 1820551169.png";
import RecentViewSlider from "@/components/rencentView";
import Slider1 from "@/assets/3fed67ae927a54329c0ab8ca6312e3e7.png";
import Slider2 from "@/assets/dbfad4efe8eef812d27afa0fc56306fd.png";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const sliderRef1 = useRef<any>(null);
  const sliderRef2 = useRef<any>(null);
  const sliderRef3 = useRef<any>(null);

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

  const goToCreditLimit = () => {
    router.push("/CreditLimit");
  };

  const handlePrev = (num: any) => {
    if (num == 1) {
      sliderRef1?.current?.previous();
    }
    if (num == 2) {
      sliderRef2?.current?.previous();
    }
    if (num == 3) {
      sliderRef3?.current?.previous();
    }
  };

  const handleNext = (num: any) => {
    if (num == 1) {
      sliderRef1?.current?.next();
    }
    if (num == 2) {
      sliderRef2?.current?.next();
    }
    if (num == 3) {
      sliderRef3?.current?.next();
    }
  };

  return (
    <>
      <div className="mx-auto lg:mx-[150px] md:mx-[60px] mb-3">
        <div className="flex flex-col lg:flex-row items-center justify-between py-5 px-5 lg:px-10 bg-gradient-to-r from-[#F81F1F] to-[#FFA31A] w-full lg:w-[100%] h-auto rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-full h-[60px] w-[60px] bg-[#FA6464] flex items-center justify-center">
              <Image alt="" src={Card} className="h-[40px] w-[40px]" />
            </div>
            <div>
              <p className="text-white text-xl lg:text-2xl font-semibold">
                Credit Limit
              </p>
              <p className="text-white text-base lg:text-lg font-normal">
                Get Credit Up to 10 Lacs
              </p>
            </div>
          </div>
          <button
            className="text-[#F70000] text-lg lg:text-xl font-semibold bg-white border-[1px] border-[#F70000] rounded-full h-[45px] lg:h-[50px] px-6 lg:px-8"
            onClick={goToCreditLimit}
          >
            Get Now
          </button>
        </div>
      </div>

      {/* mianSlider */}
      <div className="lg:mx-[150px] md:mx-[60px]">
        <MainSlider />
      </div>
      {/* categories */}
      <div className="lg:mx-[150px] lg:mt-0 mt-3 lg:mt-2 md:mx-auto overflow: -webkit-scrollbar: none; md:overflow-x-auto md:w-[645px] lg:w-auto sm:mx-auto sm:max-w-[calc(100vw - 120px)] flex items-center justify-between overflow-x-auto">
        <div className="w-[92px] sm:mt-2  flex flex-col justify-center items-center">
          <div className=" flex  justify-center items-center w-[92px] h-[92px] rounded-full bg-gradient-to-r from-[#F81F1F] to-[#FFA31A] ">
            <Image src={Cardmm} alt="" className="w-[40px] h-[40px] " />
          </div>
          <p className="color-[#393A44] text-[14px] font-normal mt-[4px]">
            Categories
          </p>
        </div>
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
      <div className="lg:mx-[150px] md:mx-[60px] my-[16px] overflow-x-auto">
        <div className="flex items-center justify-start space-x-[16px] w-max">
          <div
            style={{ backgroundColor: "rgba(195, 95, 65, 0.2)" }}
            className="lg:w-[308px] md:w-[460px] sm:w-[308px] card h-[469px] rounded-lg text-[#BC5A3D] p-[32px] box-border relative"
          >
            <div>
              <p className="text-[24px] font-semibold">Small Appliances</p>
              <p className="text-[16px] font-semibold my-[24px]">
                upto 40% off kitchen products.
              </p>
              <p className="text-[16px] font-semibold">Shop now</p>
            </div>
          </div>
          <div
            style={{ backgroundColor: "rgba(244, 162, 0, 0.2)" }}
            className="lg:w-[308px] md:w-[460px] sm:w-[308px] card h-[469px] rounded-lg text-[#F4A200] p-[32px] box-border relative"
          >
            <div>
              <p className="text-[24px] font-semibold">Small Appliances</p>
              <p className="text-[16px] font-semibold my-[24px]">
                upto 40% off kitchen products.
              </p>
              <p className="text-[16px] font-semibold">Shop now</p>
            </div>
            <Image
              src={Rasm1}
              alt=""
              className="w-[278px] absolute top-[235px] h-[232px]"
            />
          </div>
          <div
            style={{ backgroundColor: "rgba(113, 111, 86, 0.2)" }}
            className="lg:w-[308px] md:w-[460px] sm:w-[308px] card h-[469px] rounded-lg text-[#6B6A56] p-[32px] box-border relative"
          >
            <div>
              <p className="text-[24px] font-semibold">Small Appliances</p>
              <p className="text-[16px] font-semibold my-[24px]">
                upto 40% off kitchen products.
              </p>
              <p className="text-[16px] font-semibold">Shop now</p>
            </div>
            <Image
              src={Rasm2}
              alt=""
              className="w-[278px] absolute top-[235px] h-[232px]"
            />
          </div>
          <div
            style={{ backgroundColor: "rgba(210, 236, 218, 1)" }}
            className="lg:w-[308px] md:w-[460px] sm:w-[308px] card h-[469px] rounded-lg bg-[#D2ECDA] text-[#4FAD2E] p-[32px] box-border relative"
          >
            <div>
              <p className="text-[24px] font-semibold">Small Appliances</p>
              <p className="text-[16px] font-semibold my-[24px]">
                upto 40% off kitchen products.
              </p>
              <p className="text-[16px] font-semibold">Shop now</p>
            </div>
            <Image
              src={Rasm3}
              alt=""
              className="w-[272px] absolute top-[235px] h-[232px]"
            />
          </div>
        </div>
      </div>
      <div className="lg:mx-[150px] md:mx-[60px] my-[24px]">
        <div className="flex items-center justify-between lg:px-0 px-2">
          <p className="text-[24px] font-semibold">Recent viewed</p>
          <div className="flex items-center gap-4">
            <div
              className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center  "
              onClick={() => handlePrev(1)}
            >
              <IoMdArrowBack className="text-black h-[24px] w-[24px]" />
            </div>
            <div
              className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center  "
              onClick={() => handleNext(1)}
            >
              <IoMdArrowForward className="text-black h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
        <RecentViewSlider Data={sliderItems} ref={sliderRef1} />
      </div>
      <div className="lg:mx-[150px] md:mx-[60px]  my-[24px]">
        <div className="flex items-center justify-between lg:px-0 px-2">
          <p className="text-[24px] font-semibold">Suggested for you</p>
          <div className="flex items-center gap-4">
            <div
              className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center  "
              onClick={() => handlePrev(2)}
            >
              <IoMdArrowBack className="text-black h-[24px] w-[24px]" />
            </div>
            <div
              className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center  "
              onClick={() => handleNext(2)}
            >
              <IoMdArrowForward className="text-black h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
        <RecentViewSlider Data={sliderItems} ref={sliderRef2} />
      </div>
      {/* Baner */}
      <div className="lg:mx-[150px] md:mx-[60px]  my-[16px]">
        <Image
          src={bg}
          alt=""
          className="w-[100%] md:h-[300px] sm:h-[200px] h-[220px]  lg:h-[417px]"
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(233, 136, 11, 0.2) 0%, rgba(247, 120, 3, 0.2) 100%)",
          }}
          className="lg:h-[428px] md:h-auto sm:h-auto p-[16px]"
        >
          <div className="flex justify-between items-center lg:px-0 px-2">
            <p className="text-[14px] font-semibold">Best of all</p>
            <Image src={Arrow} alt="" className="w-[24px] h-[24px]" />
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-col sm:space-y-[16px] lg:space-y-0 justify-between mt-[16px] overflow-x-auto">
            <div className="flex space-x-[16px] lg:space-x-4 lg:flex-row sm:flex-col md:flex-row">
              <div className="w-[300px] p-[8px] bg-[white] rounded-lg flex-shrink-0">
                <Image
                  src={Fram44}
                  alt=""
                  className="lg:w-[100%] md:w-[90%] sm:w-full md:h-[170px] lg:h-[271px]"
                />
                <p className="text-[#393A44] text-[16px] font-semibold mt-[4px]">
                  Captain Pure B
                </p>
                <p className="text-[#F70000] text-[16px] font-semibold mt-[4px]">
                  Special Deal
                </p>
              </div>
              <div className="w-[300px] p-[8px] bg-[white] rounded-lg flex-shrink-0">
                <Image
                  src={Fram11}
                  alt=""
                  className="lg:w-[100%] md:w-[90%] sm:w-full md:h-[170px] lg:h-[271px]"
                />
                <p className="text-[#393A44] text-[16px] font-semibold mt-[4px]">
                  Captain Pure B
                </p>
                <p className="text-[#F70000] text-[16px] font-semibold mt-[4px]">
                  Special Deal
                </p>
              </div>
              <div className="w-[300px] p-[8px] bg-[white] rounded-lg flex-shrink-0">
                <Image
                  src={Fram33}
                  alt=""
                  className="lg:w-[100%] md:w-[90%] sm:w-full md:h-[170px] lg:h-[271px]"
                />
                <p className="text-[#393A44] text-[16px] font-semibold mt-[4px]">
                  Captain Pure B
                </p>
                <p className="text-[#F70000] text-[16px] font-semibold mt-[4px]">
                  Special Deal
                </p>
              </div>
              <div className="w-[300px] p-[8px] bg-[white] rounded-lg flex-shrink-0">
                <Image
                  src={Fram22}
                  alt=""
                  className="lg:w-[100%] md:w-[90%] sm:w-full md:h-[170px] lg:h-[271px]"
                />
                <p className="text-[#393A44] text-[16px] font-semibold mt-[4px]">
                  Captain Pure B
                </p>
                <p className="text-[#F70000] text-[16px] font-semibold mt-[4px]">
                  Special Deal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-[150px] md:mx-[60px]  my-[24px]">
        <div className="flex items-center justify-between lg:px-0 px-2">
          <p className="text-[24px] font-semibold">Trending</p>
          <div className="flex items-center gap-4">
            <div
              className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center  "
              onClick={() => handlePrev(3)}
            >
              <IoMdArrowBack className="text-black h-[24px] w-[24px]" />
            </div>
            <div
              className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center  "
              onClick={() => handleNext(3)}
            >
              <IoMdArrowForward className="text-black h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
        <RecentViewSlider Data={sliderItems22} ref={sliderRef3} />
      </div>
      {/* small appliances */}
      <div className="lg:mx-[150px] md:mx-[60px] my-[16px] overflow-x-auto">
        <div className="flex items-center justify-start space-x-[16px] w-max">
          <div className="lg:w-[402px] md:w-[402px] sm:w-full card relative h-[290px] flex lg:items-center rounded-lg bg-[#FFF5EE] text-[#91553A] p-[32px] box-border">
            <div className="lg:w-[171px] sm:w-auto">
              <p className="text-[24px] font-semibold">Small Appliances</p>
              <p className="text-[16px] font-semibold my-[24px]">
                upto 40% off kitchen products.
              </p>
              <p className="text-[16px] font-semibold">Shop now</p>
            </div>
            <Image
              src={Rasmcc}
              alt=""
              className="lg:w-[200px] w-[150px] sm:w-auto absolute lg:top-[30px] top-[120px] lg:h-[260px] h:[170px] lg:left-[200px] left-[160px] sm:left-auto"
            />
          </div>

          <div className="lg:w-[402px] md:w-[402px] sm:w-[350px] card relative h-[290px] flex lg:items-center rounded-lg bg-[#EBF4FF] text-[#1B9CE4] p-[32px] box-border">
            <div className="lg:w-[171px] sm:w-auto ">
              <p className="text-[24px] font-semibold">Small Appliances</p>
              <p className="text-[16px] font-semibold my-[24px]">
                upto 40% off kitchen products.
              </p>
              <p className="text-[16px] font-semibold">Shop now</p>
            </div>
            <Image
              src={Rasmbb}
              alt=""
              className="lg:w-[200px] w-[150px] sm:w-auto absolute lg:top-[30px] top-[120px] lg:h-[260px] h:[180px] lg:left-[200px] left-[160px] sm:left-auto"
            />
          </div>
          <div className="lg:w-[402px] md:w-[402px] sm:w-[350px] card relative h-[290px] flex lg:items-center rounded-lg bg-[#FFF5EE] text-[#91553A] p-[32px] box-border">
            <div className="lg:w-[171px] sm:w-auto ">
              <p className="text-[24px] font-semibold">Small Appliances</p>
              <p className="text-[16px] font-semibold my-[24px]">
                upto 40% off kitchen products.
              </p>
              <p className="text-[16px] font-semibold">Shop now</p>
            </div>
            <Image
              src={Rasmaa}
              alt=""
              className="lg:w-[200px] w-[150px] sm:w-auto absolute lg:top-[30px] top-[120px] lg:h-[260px] h:[180px] lg:left-[200px] left-[160px] sm:left-auto"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(97.69deg, rgba(247, 0, 0, 0.1) 3.55%, rgba(145, 131, 0, 0.1) 91.28%)",
        }}
        className="lg:mx-[150px] md:mx-[60px] mx-[0px] relative lg:h-[491px] md:h-[400px] sm:h-auto lg:px-[100px] px-[20px] sm:px-[40px] md:px-[40px] py-[0px] my-[16px] flex lg:flex-row justify-between"
      >
        <div className="flex flex-col items-start lg:w-auto md:w-auto w-[45%] lg:mt-7 mt-3">
          <Image
            src={Logoo}
            alt=""
            className="lg:w-[120px] lg:h-[70px] md:w-[100px] md:h-[60px] w-[80px] h-[50px]"
          />
          <div className="lg:w-[570px] md:w-[400px] w-full mt-[32px]">
            <p className="lg:text-[48px] md:text-[36px] text-[18px] font-bold">
              Simplify your shopping with GRAZLE
            </p>
            <p className="lg:text-[16px] md:text-[14px] text-[12px]">
              SHOPPING ON THE GO IS FAST AND EASY
            </p>
            <p className="lg:text-[16px] md:text-[14px] text-[12px] mt-[32px] text-[#393A44] font-medium">
              Get the App
            </p>
            <div className="flex items-center mt-[32px]">
              <Image
                src={Google}
                alt=""
                className="lg:w-[135px] lg:h-[40px] md:w-[120px] md:h-[35px] w-[100px] h-[30px] mr-[16px]"
              />
              <Image
                src={Apple}
                alt=""
                className="lg:w-[135px] lg:h-[40px] md:w-[120px] md:h-[35px] w-[100px] h-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:ml-[32px] md:ml-[24px] ml-[16px] lg:mt-0 mt-[0px] lg:flex-row flex-col items-center lg:w-auto md:w-auto w-full">
          <Image
            src={Phone1}
            alt=""
            className="lg:w-[278px] lg:h-[356px] md:w-[170px] md:h-[250px] w-[150px] h-[180px] lg:relative lg:right-[34px] lg:top-[-66px] lg:ml-[16px] md:absolute md:right-[185px] md:top-[0px] relative"
          />
          <Image
            src={Phone2}
            alt=""
            className="lg:w-[278px] lg:h-[356px] md:w-[170px] md:h-[250px] w-[150px] h-[180px] lg:relative lg:right-[40px] right-[-80px] lg:bottom-[-66px] lg:mt-0 mt-[16px] md:absolute md:right-[40px] md:bottom-[0px] relative"
          />
        </div>
      </div>
    </>
  );
}
