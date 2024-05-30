"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logoo from "@/assets/Grazle Logo.png";
import Main from "@/assets/76 1.png";
import Card1 from "@/assets/a5a6296b2158604a47215a2b0a00bde0.png";
import Cart from "@/assets/CartVector.png";
import Like from "@/assets/Frame 1820551183.png";
import Star from "@/assets/Star 1.png";
import Bag from "@/assets/e6217953653db114cabd2c88ed6a998d.png";
import AA from "@/assets/111.jpeg";
import BB from "@/assets/222.jpeg";
import CC from "@/assets/33.jpeg";
import DD from "@/assets/44.jpeg";
import Baner from "@/assets/mainBag.png";
import { BiSolidLike } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Checkbox } from "@mui/material";
import MenuIcon from "@/assets/VectorMenu.png";

import { IoMdClose } from "react-icons/io";

type Section = "offer" | "brands" | "size" | "price" | "Rating" | "color";
export default function StoreProductpage() {
  const [openSections, setOpenSections] = useState<Record<Section, boolean>>({
    offer: false,
    brands: false,
    size: false,
    price: false,
    Rating: false,
    color: false,
  });

  const toggleSection = (section: Section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleButtonClick = () => {
    setIsDivVisible((prev) => !prev);
  };
  return (
    <div className=" lg:my-[50px] my-[20px] sm:my-[20px] md:my-[30px] lg:mx-[150px] mx-[20px] sm:mx-[20px] md:mx-[30px] ">
      <div>
        <Image
          src={MenuIcon}
          alt="Menu"
          className="w-[30px] h-[24px] mb-4 mr-2 sm:hidden"
          onClick={handleButtonClick}
        />
      </div>
      {isDivVisible && (
        <div className="absolute z-[9999] ">
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-[90%] bg-white border-[1px] border-[#0000001F]"
          >
            <div className="flex items-center p-4 justify-between mb-3 border-b-[1px] border-[#0000001F]">
              <p className="text-[#777777] text-[16px] font-medium">
                Filter Products
              </p>
              <div className="text-[#F70000] flex items-center gap-2">
                <IoMdClose className="text-[#F70000] text-[16px]" />
                <p className="text-[#F70000] text-[16px] font-medium">Clear</p>
              </div>
            </div>
            <div className="px-0 py-1">
              <div className="relative w-full px-3">
                <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#777777] text-[20px]" />
                <input
                  className="pl-11 w-full border-[1px] border-[#00000021] rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                  placeholder="Search Here"
                />
              </div>
              <div className="mt-3 flex pb-3 px-3 border-b-[1px] border-[#00000021] justify-between items-center">
                <p className="text-[#74767E] text-[18px] font-medium">
                  On Offer
                </p>
                <div
                  onClick={() => toggleSection("offer")}
                  className="cursor-pointer"
                >
                  {openSections.offer ? (
                    <FaMinus className="text-[#F70000]" />
                  ) : (
                    <FaPlus className="text-[#F70000]" />
                  )}
                </div>
              </div>
              {openSections.offer && (
                <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                  Offer content...
                </div>
              )}

              <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
                <p className="text-[#74767E] text-[18px] font-medium">Brands</p>
                <div
                  onClick={() => toggleSection("brands")}
                  className="cursor-pointer"
                >
                  {openSections.brands ? (
                    <FaMinus className="text-[#F70000]" />
                  ) : (
                    <FaPlus className="text-[#F70000]" />
                  )}
                </div>
              </div>
              {openSections.brands && (
                <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      AND/OR (988)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      7 For all mankind (88)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      AG (22)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      AllSaints (11)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      Babour (988)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      Betty & Co (68)
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      AND/OR (988)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      7 For all mankind (88)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      AG (22)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      AllSaints (11)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      Babour (988)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      Betty & Co (68)
                    </p>
                  </div>
                </div>
              )}

              <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
                <p className="text-[#74767E] text-[18px] font-medium">Size</p>
                <div
                  onClick={() => toggleSection("size")}
                  className="cursor-pointer"
                >
                  {openSections.size ? (
                    <FaMinus className="text-[#F70000]" />
                  ) : (
                    <FaPlus className="text-[#F70000]" />
                  )}
                </div>
              </div>
              {openSections.size && (
                <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      XXL
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">
                      XXL
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">L</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">M</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Checkbox
                        sx={{
                          color: "#00000047",
                          "& .MuiSvgIcon-root": {
                            fontSize: 24,
                            padding: 0,
                          },
                          "&.Mui-checked": {
                            color: "#F70000",
                          },
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-normal text-[#74767E]">S</p>
                  </div>
                </div>
              )}

              <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
                <p className="text-[#74767E] text-[18px] font-medium">Price</p>
                <div
                  onClick={() => toggleSection("price")}
                  className="cursor-pointer"
                >
                  {openSections.price ? (
                    <FaMinus className="text-[#F70000]" />
                  ) : (
                    <FaPlus className="text-[#F70000]" />
                  )}
                </div>
              </div>
              {openSections.price && (
                <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                  Price content...
                </div>
              )}
              <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
                <p className="text-[#74767E] text-[18px] font-medium">
                  Avg. Review Rating
                </p>
                <div
                  onClick={() => toggleSection("Rating")}
                  className="cursor-pointer"
                >
                  {openSections.price ? (
                    <FaMinus className="text-[#F70000]" />
                  ) : (
                    <FaPlus className="text-[#F70000]" />
                  )}
                </div>
              </div>
              {openSections.Rating && (
                <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                  Rating
                </div>
              )}
            </div>
            <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
              <p className="text-[#74767E] text-[18px] font-medium">Color</p>
              <div
                onClick={() => toggleSection("color")}
                className="cursor-pointer"
              >
                {openSections.color ? (
                  <FaMinus className="text-[#F70000]" />
                ) : (
                  <FaPlus className="text-[#F70000]" />
                )}
              </div>
            </div>
            {openSections.color && (
              <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-5 h-5 rounded-sm bg-[#9BD1FF]"></div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    Color1
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-5 h-5 rounded-sm bg-[#FEC4C4]"></div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    Color1
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-5 h-5 rounded-sm bg-[#FEC4C4]"></div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    Color1
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-5 h-5 rounded-sm bg-[#21B290]"></div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    Color1
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-5 h-5 rounded-sm bg-[#ECDBF3]"></div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    Color1
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex gap-4">
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="lg:w-[25%] rounded-2xl hidden lg:block sm:hidden md:hidden  border-[1px] border-[#0000001F]"
        >
          <div className="flex items-center p-4 justify-between mb-3 border-b-[1px] border-[#0000001F]">
            <p className="text-[#777777] text-[16px] font-medium">
              Filter Products
            </p>
            <div className="text-[#F70000] flex items-center gap-2">
              <IoMdClose className="text-[#F70000] text-[16px]" />
              <p className="text-[#F70000] text-[16px] font-medium">Clear</p>
            </div>
          </div>
          <div className="px-0 py-1">
            <div className="relative w-full px-3">
              <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#777777] text-[20px]" />
              <input
                className="pl-11 w-full border-[1px] border-[#00000021] rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                placeholder="Search Here"
              />
            </div>
            <div className="mt-3 flex pb-3 px-3 border-b-[1px] border-[#00000021] justify-between items-center">
              <p className="text-[#74767E] text-[18px] font-medium">On Offer</p>
              <div
                onClick={() => toggleSection("offer")}
                className="cursor-pointer"
              >
                {openSections.offer ? (
                  <FaMinus className="text-[#F70000]" />
                ) : (
                  <FaPlus className="text-[#F70000]" />
                )}
              </div>
            </div>
            {openSections.offer && (
              <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                Offer content...
              </div>
            )}

            <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
              <p className="text-[#74767E] text-[18px] font-medium">Brands</p>
              <div
                onClick={() => toggleSection("brands")}
                className="cursor-pointer"
              >
                {openSections.brands ? (
                  <FaMinus className="text-[#F70000]" />
                ) : (
                  <FaPlus className="text-[#F70000]" />
                )}
              </div>
            </div>
            {openSections.brands && (
              <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    AND/OR (988)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    7 For all mankind (88)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    AG (22)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    AllSaints (11)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    Babour (988)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    Betty & Co (68)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    AND/OR (988)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    7 For all mankind (88)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    AG (22)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    AllSaints (11)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    Babour (988)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">
                    Betty & Co (68)
                  </p>
                </div>
              </div>
            )}

            <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
              <p className="text-[#74767E] text-[18px] font-medium">Size</p>
              <div
                onClick={() => toggleSection("size")}
                className="cursor-pointer"
              >
                {openSections.size ? (
                  <FaMinus className="text-[#F70000]" />
                ) : (
                  <FaPlus className="text-[#F70000]" />
                )}
              </div>
            </div>
            {openSections.size && (
              <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">XXL</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">XXL</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">L</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">M</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Checkbox
                      sx={{
                        color: "#00000047",
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                          padding: 0,
                        },
                        "&.Mui-checked": {
                          color: "#F70000",
                        },
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-normal text-[#74767E]">S</p>
                </div>
              </div>
            )}

            <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
              <p className="text-[#74767E] text-[18px] font-medium">Price</p>
              <div
                onClick={() => toggleSection("price")}
                className="cursor-pointer"
              >
                {openSections.price ? (
                  <FaMinus className="text-[#F70000]" />
                ) : (
                  <FaPlus className="text-[#F70000]" />
                )}
              </div>
            </div>
            {openSections.price && (
              <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                Price content...
              </div>
            )}
            <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
              <p className="text-[#74767E] text-[18px] font-medium">
                Avg. Review Rating
              </p>
              <div
                onClick={() => toggleSection("Rating")}
                className="cursor-pointer"
              >
                {openSections.price ? (
                  <FaMinus className="text-[#F70000]" />
                ) : (
                  <FaPlus className="text-[#F70000]" />
                )}
              </div>
            </div>
            {openSections.Rating && (
              <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
                Rating
              </div>
            )}
          </div>
          <div className="px-3 py-2 border-b-[1px]  flex justify-between items-center border-[#00000021]">
            <p className="text-[#74767E] text-[18px] font-medium">Color</p>
            <div
              onClick={() => toggleSection("color")}
              className="cursor-pointer"
            >
              {openSections.color ? (
                <FaMinus className="text-[#F70000]" />
              ) : (
                <FaPlus className="text-[#F70000]" />
              )}
            </div>
          </div>
          {openSections.color && (
            <div className="px-3 py-2 border-b-[1px] border-[#00000021]">
              <div className="flex items-center gap-2 mt-3">
                <div className="w-5 h-5 rounded-sm bg-[#9BD1FF]"></div>
                <p className="text-[10px] font-normal text-[#74767E]">Color1</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-5 h-5 rounded-sm bg-[#FEC4C4]"></div>
                <p className="text-[10px] font-normal text-[#74767E]">Color1</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-5 h-5 rounded-sm bg-[#FEC4C4]"></div>
                <p className="text-[10px] font-normal text-[#74767E]">Color1</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-5 h-5 rounded-sm bg-[#21B290]"></div>
                <p className="text-[10px] font-normal text-[#74767E]">Color1</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-5 h-5 rounded-sm bg-[#ECDBF3]"></div>
                <p className="text-[10px] font-normal text-[#74767E]">Color1</p>
              </div>
            </div>
          )}
        </div>
        <div className="lg:w-[75%] w-[100%] lg:w-[100%] sm:w-[100%] md:w-[100%] ">
          <div className="w-[100%] flex justify-between gap-8 lg:rounded-0 rounded-lg sm:rounded-lg md:rounded-lg   lg:h-[384px] h-[284px] lg:pl-[100px] pl-[10px] bg-[#FF9C2A] rounded-sm">
            <div className="w-[50%] pt-[60px]">
              <p className="text-white text-[24px] font-semibold">
                Special Offer
              </p>
              <p className="text-white lg:text-[64px] text-[24px] sm:text-[24px] md:text-[24px]  font-bold">
                Super Sale
              </p>
              <p className="text-white text-[24px]  font-semibold">
                Up To 50% Off
              </p>
              <button className="mt-4 bg-[#F70000] rounded-full h-[50px]  w-[180px] text-[18px] font-medium text-white">
                Shop Now
              </button>
            </div>
            <div>
              <Image
                alt=""
                src={Baner}
                className="lg:w-[560px] lg:h-[385px] w-[400px] h-[250px] sm:w-[400px] sm:h-[250px] md:w-[450px] md:h-[300px]  "
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-between items-start gap-2 mt-5 ">
            <div
              style={{
                boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
              }}
              className="group w-[100%] w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[25%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
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
                <p className="text-[16px] w-[100%] font-semibold">
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
              className="group w-[100%] w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[25%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
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
                <p className="text-[16px] w-[100%] font-semibold">
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
              className="group w-[100%] w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[25%] h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
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
                <p className="text-[16px] w-[100%] font-semibold">
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
              className="w-[100%] w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[25%] group h-[398px] mt-[24px] border-[1px] border-[#5C545433] rounded-2xl hover:border-[1px] border-[#F70001] "
            >
              <div className="bg-[#F8F8F8] rounded-t-2xl  p-4 ">
                <p className="text-[16px] font-semibold">Facebook </p>
              </div>
              <div className="p-4 border-b-[1px] border-[#5C545433] ">
                <div className="flex gap-3 items-start">
                  <div className="rounded-lg bg-[#FFE6E6] h-[40px] w-[40px] ">
                    <Image alt="" src={Logoo} className="w-[40px] h-[30px]" />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">Abc Store</p>
                    <p className="text-[12px] font-medium text-[#777777]">
                      Facebook
                    </p>
                    <div className="rounded-lg bg-[#E5EEF3] mt-3 h-[18px] w-[45px] flex justify-center gap-2 items-center">
                      <BiSolidLike className="text-[#5C6DFF] text-[10px]" />
                      <p className="text-[10px] font-medium text-[#777777]">
                        Like
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[13px] font-normal">
                  88,900 People Like Abc Store
                </p>
              </div>
              <div className="flex items-center p-4  gap-2">
                <div className="w-[25%]">
                  <Image
                    alt=""
                    src={AA}
                    className="w-[44px] h-[44px]  rounded-xl"
                  />
                  <p className="text-[12px] lg:text-center font-normal">John</p>
                </div>
                <div className="w-[25%]">
                  <Image
                    alt=""
                    src={BB}
                    className="w-[44px] h-[44px]  rounded-xl"
                  />
                  <p className="text-[12px] lg:text-center font-normal">
                    James
                  </p>
                </div>
                <div className="w-[25%]">
                  <Image
                    alt=""
                    src={CC}
                    className="w-[44px] h-[44px]  rounded-xl"
                  />
                  <p className="text-[12px] lg:text-center font-normal">
                    Robert
                  </p>
                </div>
                <div className="w-[25%]">
                  <Image
                    alt=""
                    src={DD}
                    className="w-[44px] h-[44px]  rounded-xl"
                  />
                  <p className="text-[12px] lg:text-center font-normal">
                    James
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4  gap-2">
                <div className="w-[25%]">
                  <Image
                    alt=""
                    src={AA}
                    className="w-[44px] h-[44px]  rounded-xl"
                  />
                  <p className="text-[12px] lg:text-center font-normal">John</p>
                </div>
                <div className="w-[25%]">
                  <Image
                    alt=""
                    src={BB}
                    className="w-[44px] h-[44px]  rounded-xl"
                  />
                  <p className="text-[12px] lg:text-center font-normal">
                    James
                  </p>
                </div>
                <div className="w-[25%]">
                  <Image
                    alt=""
                    src={CC}
                    className="w-[44px] h-[44px]  rounded-xl"
                  />
                  <p className="text-[12px] lg:text-center font-normal">
                    Robert
                  </p>
                </div>
                <div className="w-[25%]">
                  <Image
                    alt=""
                    src={DD}
                    className="w-[44px] h-[44px]  rounded-xl"
                  />
                  <p className="text-[12px] lg:text-center font-normal">
                    James
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-between items-start gap-2 mt-5 ">
            <div
              style={{
                boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
              }}
              className="w-[100%] w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[25%] group h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
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
                <p className="text-[16px] w-[100%] font-semibold">
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
              className="w-[100%] w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[25%] group h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
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
                <p className="text-[16px] w-[100%] font-semibold">
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
              className="w-[100%] w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[25%] group h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
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
                <p className="text-[16px] w-[100%] font-semibold">
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
              className="w-[100%] w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[25%] group h-[398px] p-5 bg-[#FF8A1D14] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] "
            >
              <p className="font-semibold text-[16px] text-[#FF8A1D]">
                Latest Arrival
              </p>
              <p className="font-semibold text-[24px] text-[#FF8A1D]">
                Women Bag
              </p>
              <p className="font-semibold text-[16px] text-[#FF8A1D]">
                Up to 60% Off
              </p>
              <button className=" mt-5 bg-[#FF8A1D] rounded-full h-[50px]  w-[135px] text-[18px] font-medium text-white">
                Shop Now
              </button>
              <Image alt="" src={Bag} className="w-full h-[150px] mt-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
