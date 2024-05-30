"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Main from "@/assets/Rectangle 2020.png";
import logo from "@/assets/Grazle Logo.png";
import Card1 from "@/assets/a5a6296b2158604a47215a2b0a00bde0.png";
import { PiSealCheckFill } from "react-icons/pi";
import { FaAngleDown, FaStar } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import Star from "@/assets/Star 1.png";
import Cart from "@/assets/CartVector.png";
import Like from "@/assets/Frame 1820551183.png";
import { Radio } from "@mui/material";
export default function StoreProduct() {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleCard = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isOpen &&
      cardRef.current &&
      !cardRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="lg:my-[50px] my-[20px] sm:my-[20px] md:my-[30px] lg:mx-[150px] mx-[20px] sm:mx-[20px] md:mx-[30px]">
      <div className="relative w-[100%] h-[250px]">
        <Image src={Main} alt="Main" className="w-full h-full" />
        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ top: "calc(50% - -50px)" }}
        >
          <div className="w-[190px] bg-white h-[200px] flex justify-center items-center rounded-2xl border-[2px] border-[#F70000]">
            <Image src={logo} alt="Logo" className="w-[185px] h-[100px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[150px]">
        <div className="flex  items-center">
          <p className="text-[24px] font-semibold">Grale</p>
          <PiSealCheckFill className="text-[#F70000] text-[24px] ml-2" />
        </div>
        <div className="flex mt-4  items-center justify-center gap-6">
          <div>
            <div className="flex  items-center gap-2">
              <FaStar className="text-[16px] text-[#FF7A00]" />
              <p className="text-[20px] font-semibold">4.9 </p>
              <p className="text-[18px] font-medium ml-2 text-[#777777]">
                (666)
              </p>
            </div>
            <p className="text-[14px] font-medium text-[#777777]">Ratings</p>
          </div>
          <div className="border-l-[2px] border-[#777777] h-[30px]"></div>
          <div>
            <div className="flex  items-center gap-2">
              <FaStar className="text-[16px] text-[#FF7A00]" />
              <p className="text-[20px] font-semibold">888888</p>
            </div>
            <p className="text-[14px] font-medium text-[#777777]">Products</p>
          </div>
        </div>
        <div className="flex mt-4 justify-center">
          <div
            className="border-[1px]  rounded-lg p-2 w-[370px] flex mt-4 justify-between items-center border-[#777777]"
            onClick={toggleCard}
            ref={cardRef}
          >
            <p className="text-[16px] font-medium">Sort by</p>
            <FaAngleDown className="text-[#777777]  text-[16px]" />
          </div>
          {isOpen && (
            <div className="absolute mt-[60px] p-3 w-[370px] border-[1px] rounded-lg p-4 bg-white shadow-lg">
              <div className="relative  w-full">
                <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] text-[20px]" />
                <input
                  className="] pl-11 w-full border-[1px] border-[#777777] rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                  placeholder="Search Here"
                />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Radio
                  checked={isChecked}
                  onChange={handleRadioChange}
                  sx={{
                    color: "#F70000",
                    "&.Mui-checked": {
                      color: "#F70000",
                    },
                  }}
                />
                <p
                  className={`text-[16px]  ${
                    isChecked
                      ? "text-[#000000] font-semibold"
                      : "text-[#777777] font-medium"
                  }`}
                >
                  Most Suitable
                </p>
              </div>{" "}
              <div className="mt-2 flex items-center gap-2">
                <Radio
                  checked={isChecked}
                  onChange={handleRadioChange}
                  sx={{
                    color: "#F70000",
                    "&.Mui-checked": {
                      color: "#F70000",
                    },
                  }}
                />
                <p
                  className={`text-[16px]  ${
                    isChecked
                      ? "text-[#000000] font-semibold"
                      : "text-[#777777] font-medium"
                  }`}
                >
                  Most Suitable
                </p>
              </div>{" "}
              <div className="mt-2 flex items-center gap-2">
                <Radio
                  checked={isChecked}
                  onChange={handleRadioChange}
                  sx={{
                    color: "#F70000",
                    "&.Mui-checked": {
                      color: "#F70000",
                    },
                  }}
                />
                <p
                  className={`text-[16px]  ${
                    isChecked
                      ? "text-[#000000] font-semibold"
                      : "text-[#777777] font-medium"
                  }`}
                >
                  Most Suitable
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-between items-start gap-2 mt-5 ">
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-between items-start gap-2 mt-5 ">
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="group lg:w-[20%] w-[100%] md:w-[100%] sm:w-[100%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
        >
          <Image
            alt=""
            src={Card1}
            className="w-full h-[203px] relative rounded-2xl"
          />
          <div className="flex w-full justify-between items-center absolute px-[16px] top-[10px]">
            <button
              style={{ backgroundColor: "rgba(247, 0, 0, 0.1)" }}
              className="text-[12px] font-semibold border-[1px] rounded-3xl border-[#F70000] text-[#F70000] w-[96px] h-[34px]"
            >
              flash sale
            </button>
            <Image
              src={Like}
              alt=""
              className="w-[40px] h-[40px] rounded-2xl"
            />
          </div>
          <div className="p-3">
            <p className="text-[16px] w-[80%] font-semibold">
              capttain pure by kapil dev xtra pure 18{" "}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[12px] text-[#F69B26]">4.8 (342)</p>
              <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
            </div>
            <p className="text-[20px] font-semibold mt-[16px]">₹400 </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[16px] text-[#909198] line-through font-normal">
                ₹400
              </p>
              <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                20%off
              </p>
            </div>
          </div>
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
            <button className="text-[#F70000] w-[90%] h-[40px] border-[1px] border-[#F70001] rounded-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-[14px]">Add to cart</p>
                <Image
                  alt=""
                  src={Cart}
                  className="w-[17px] h-[17px] ml-[12px]"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
