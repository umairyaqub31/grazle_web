"use client";
import React, { useState } from "react";
import Image from "next/image";
import Product from "@/assets/Product Image.png";
import logo from "@/assets/Grazle Logo.png";
import Star from "@/assets/Star 1.png";
import Cart from "@/assets/CartVector.png";
import Like from "@/assets/Frame 1820551183.png";
import { Box, Rating } from "@mui/material";
import LinearProgress from "@mui/joy/LinearProgress";
import Card1 from "@/assets/a5a6296b2158604a47215a2b0a00bde0.png";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { IoIosCheckmarkCircleOutline, IoIosHeartEmpty } from "react-icons/io";
import Logoo from "@/assets/Grazle Logo.png";
import { FaAngleDown, FaStar } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function ProductDetail() {
  const [count, setCount] = useState(1);
  const router = useRouter();
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const goToShop = () => {
    router.push("/StoreProduct");
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="lg:my-[50px] my-[20px] sm:my-[20px] md:my-[30px] lg:mx-[150px] mx-[20px] sm:mx-[20px] md:mx-[30px]">
      <div className="flex  flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-between">
        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%]">
          <Image
            alt=""
            src={Product}
            className="w-full h-[350px]  sm:[400px] md:[400px] lg:h-[500px]"
          />{" "}
          <div className="flex justify-between">
            <Image
              alt=""
              src={Product}
              className="lg:w-[90px]  lg:h-[90px] h-[60px] sm:h-[60px] md:h-[60px] w-[60px] sm:w-[60px] md:w-[60px] hover:border-[1px] border-[#F70000]"
            />
            <Image
              alt=""
              src={Product}
              className="lg:w-[90px]  lg:h-[90px] h-[60px] sm:h-[60px] md:h-[60px] w-[60px] sm:w-[60px] md:w-[60px] hover:border-[1px] border-[#F70000]"
            />{" "}
            <Image
              alt=""
              src={Product}
              className="lg:w-[90px]  lg:h-[90px] h-[60px] sm:h-[60px] md:h-[60px] w-[60px] sm:w-[60px] md:w-[60px] hover:border-[1px] border-[#F70000]"
            />{" "}
            <Image
              alt=""
              src={Product}
              className="lg:w-[90px]  lg:h-[90px] h-[60px] sm:h-[60px] md:h-[60px] w-[60px] sm:w-[60px] md:w-[60px] hover:border-[1px] border-[#F70000]"
            />{" "}
            <Image
              alt=""
              src={Product}
              className="lg:w-[90px]  lg:h-[90px] h-[60px] sm:h-[60px] md:h-[60px] w-[60px] sm:w-[60px] md:w-[60px] hover:border-[1px] border-[#F70000]"
            />
          </div>
        </div>
        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
          <p className="lg:text-[32px] text-[24px] sm:text-[24px] md:text-[24px]  font-semibold">
            capttain pure by kapil dev xtra pure 18xtra pure 18
          </p>
          <div className="flex mt-2 items-center gap-2">
            <Rating
              name="read-only"
              mt-3
              defaultValue={2}
              readOnly
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 18,
                },
              }}
            />
            <p className="text-[14px] text-[#666666] font-normal">4 Review</p>
            <p className="text-[16px]  mx-5 font-normal">.</p>
            <p className="text-[14px]  font-normal">SKU:</p>

            <p className="text-[14px] text-[#666666] font-normal">2,51,594</p>
          </div>
          <div className="mt-3">
            <p className="text-[32px] text-[#F70000] font-bold">₹400</p>
          </div>
          <div className="flex items-center gap-2 pb-8 border-b-[1px] border-[#0000001A]">
            <p className="text-[16px] text-[#909198] font-normal">₹400</p>{" "}
            <p className="text-[16px] text-[#4FAD2E] font-normal">20%off</p>
          </div>
          <div className="mt-4">
            <p className="text-[14px] text-[#000000] font-semibold">Variants</p>
            <div className="flex flex-wrap sm:flex-wrap  md:flex-wrap lg:flex-nowrap items-center justify-between mt-2 gap-3">
              <div className="flex items-center  gap-3">
                <div className="py-2 px-3 bg-[#FEF2F2] rounded-lg border-[1px] border-[#F70000] text-[#F70000]">
                  Small
                </div>
                <div className="py-2 px-3 line-through rounded-lg border-[1px] border-[#0000001A] text-[#0000001A]">
                  medium
                </div>
                <div className="py-2 px-3 bg-[#F8F8F8] rounded-lg  text-[#000000]">
                  Large
                </div>
              </div>
              <div className="w-[124px] rounded-full border-[1px] border-[#E6E6E6] p-2 flex items-center justify-between">
                <div
                  className="w-[34px] h-[34px] rounded-full bg-[#F2F2F2] flex items-center cursor-pointer justify-center"
                  onClick={handleDecrement}
                >
                  <HiOutlineMinus className="text-[16px] font-bold" />
                </div>
                <p className="text-[16px] font-bold">{count}</p>
                <div
                  className="w-[34px] h-[34px] rounded-full bg-[#F2F2F2] flex items-center cursor-pointer justify-center"
                  onClick={handleIncrement}
                >
                  <HiOutlinePlus className="text-[16px] font-bold" />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-[#F70000] rounded-full h-[50px] mt-[20px] lg:w-[275px] w-[200px] sm:w-[200px] md:w-[200px] font-medium text-white"
                onClick={handleClick}
              >
                Add to cart
              </button>
              {showPopup && (
                <div className="bg-[#F8F8F8] absolute top-[250px] right-0 h-[50px] shadow-lg  w-[350px] flex items-center">
                  <div className="rounded-l-lg bg-[#4FAD2E] w-3  h-[50px]"></div>

                  <div className="mx-4 flex items-center gap-6">
                    <IoIosCheckmarkCircleOutline className="text-[#4FAD2E] text-[20px]" />

                    <p className="text-black text-[14px] font-semibold">
                      The Item has added into cart
                    </p>
                  </div>
                </div>
              )}
              <button className="border-[1px] border-[#F70000] rounded-full h-[50px] mt-[20px] lg:w-[275px] w-[200px] sm:w-[200px] md:w-[200px]  font-medium text-[#F70000]">
                Get Started
              </button>
              <div className="flex justify-center mt-[20px] items-center rounded-full bg-[#F8F8F8] h-[52px] w-[52px] ">
                <IoIosHeartEmpty className="text-[#F70000] text-[24px] w-[30px]" />
              </div>
            </div>
            <div className="rounded-2xl mt-4 border-[1px] border-[#E6E6E6] px-4 py-2">
              <div className="flex justify-between items-center pb-3 border-b-[1px] border-[#0000000D]">
                <div className="flex gap-4 items-center">
                  <div className="flex justify-center  items-center rounded-full bg-[#F8F8F8] h-[52px] w-[52px] ">
                    <Image alt="" src={Logoo} className="w-[30px] h-[20px] " />
                  </div>
                  <p className="text-[14px] text-[#000000] font-semibold">
                    Grazle
                  </p>
                </div>
                <button
                  className="border-[1px] border-[#F70000] text-[10px] rounded-full h-[25px] w-[85px] font-medium text-[#F70000]"
                  onClick={goToShop}
                >
                  view shop
                </button>
              </div>
              <div className="flex items-center justify-evenly mt-5 ">
                <div>
                  <div className="flex items-center gap-2 justify-center">
                    <FaStar className="text-[#FFB33E] text-[16px]" />
                    <p className="text-[#000000] text-[14px] font-bold">4.9</p>
                    <p className="text-[#777777] text-[14px]">(677 )</p>
                  </div>
                  <p className="text-[#777777] text-center text-[12px]">
                    Ratings
                  </p>
                </div>
                <div className="border-r-[1px] border-[#0000000D] h-[30px]"></div>{" "}
                <div>
                  <div className="flex items-center gap-2 justify-center">
                    <p className="text-[#000000] text-[14px] font-bold">4.9</p>
                  </div>
                  <p className="text-[#777777] text-center text-[12px]">
                    products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 items-center pb-2 gap-4 border-b-[1px] border-[##E5E5E5]">
        <p className="text-[#F70000] text-[14px] font-semibold">Descriptions</p>
        <p className="text-[#777777] text-[14px] font-semibold">Product info</p>
        <p className="text-[#777777] text-[14px] font-semibold">Faq</p>
      </div>
      <div className="mt-4">
        <p className="text-[#808080] text-[14px] font-normal">
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
          posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
          vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
          porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
          Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
          et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
          scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
          commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit.
        </p>
        <p className="text-[#808080] mt-4 text-[14px] font-normal">
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
          iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
          pellentesque tristique neque mi eget nulla. Proin luctus elementum
          neque et pharetra. Nulla mauris tellus, feugiat quis pharetra sed,
          gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt,
          turpis mi viverra velit, pellentesque tristique neque mi eget nulla.
          Proin luctus elementum neque et pharetra.{" "}
        </p>
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-[14px] text-[#F70000]" />
          <p className="text-[14px] text-[#808080] font-normal">
            100 g of fresh leaves provides.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaCheckCircle className="text-[14px] text-[#F70000]" />
          <p className="text-[14px] text-[#808080] font-normal">
            Aliquam ac est at augue volutpat elementum.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaCheckCircle className="text-[14px] text-[#F70000]" />
          <p className="text-[14px] text-[#808080] font-normal">
            Quisque nec enim eget sapien molestie.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaCheckCircle className="text-[14px] text-[#F70000]" />
          <p className="text-[14px] text-[#808080] font-normal">
            Proin convallis odio volutpat finibus posuere.
          </p>
        </div>
        <p className="text-[14px] mt-3 lg:w-[650px] w-[100%] sm:w-[100%] md:w-[100%] text-[#808080] font-normal">
          Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
          blandit eros non turpis lobortis iaculis at ut massa. .
        </p>
      </div>
      <div className="w-100% rounded-2xl mt-5  border-[1px] border-[#0000001A]">
        <div className="bg-[#D9D9D91A] p-2 text-[#000000]">
          <p className="text-[20px] rounded-t-2xl text-[#000000] font-bold">
            Ratings & Reviews
          </p>
        </div>
        <div className="py-3 px-10 flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap  items-center  border-b-[1px]  border-[#0000001A]">
          <div className="mt-5">
            <div className="flex items-center gap-4">
              <p className="text-[18px] font-semibold">5.0</p>
              <div className="bg-[#F69B26] flex gap-2 h-[24px] w-[150px] items-center text-white px-2">
                <FaCheckCircle className="text-[14px] text-white" />
                <p className=" text-[14px] text-white p-2">Very Good</p>
              </div>
            </div>
            <div className="mt-3">
              <Rating
                name="read-only"
                mt-3
                defaultValue={5}
                readOnly
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 15,
                  },
                }}
              />
            </div>
            <p className="text-[10px] mt-2 text-[#434343] font-semibold">
              133 Rating
            </p>
          </div>
          <div className="border-l-[2px] border-l-[0px] sm:border-l-[0px] md:border-l-[0px] border-[#0000001A] mx-10 h-[100px]"></div>
          <div>
            <div className="flex items-center gap-4">
              <Rating
                name="read-only"
                mt-3
                defaultValue={5}
                readOnly
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 15,
                  },
                }}
              />
              <div className="lg:w-[270px] w-[130px] md:w-[130px] sm:w-[130px]">
                <LinearProgress color="warning" determinate value={100} />
              </div>

              <p className="text-[14px] font-bold text-black">100</p>
            </div>
            <div className="flex items-center mt-2 gap-4">
              <Rating
                name="read-only"
                mt-3
                defaultValue={4}
                readOnly
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 15,
                  },
                }}
              />
              <div className="lg:w-[270px] w-[130px] md:w-[130px] sm:w-[130px]">
                <LinearProgress color="warning" determinate value={80} />
              </div>

              <p className="text-[14px] font-bold text-black">80</p>
            </div>
            <div className="flex items-center mt-2 gap-4">
              <Rating
                name="read-only"
                mt-3
                defaultValue={3}
                readOnly
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 15,
                  },
                }}
              />
              <div className="lg:w-[270px] w-[130px] md:w-[130px] sm:w-[130px]">
                <LinearProgress color="warning" determinate value={60} />
              </div>

              <p className="text-[14px] font-bold text-black">60</p>
            </div>
            <div className="flex items-center mt-2 gap-4">
              <Rating
                name="read-only"
                mt-3
                defaultValue={2}
                readOnly
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 15,
                  },
                }}
              />
              <div className="lg:w-[270px] w-[130px] md:w-[130px] sm:w-[130px]">
                <LinearProgress color="warning" determinate value={40} />
              </div>

              <p className="text-[14px] font-bold text-black">20</p>
            </div>
            <div className="flex items-center mt-2 gap-4">
              <Rating
                name="read-only"
                mt-3
                defaultValue={1}
                readOnly
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 15,
                  },
                }}
              />
              <div className="lg:w-[270px] w-[130px] md:w-[130px] sm:w-[130px]">
                <LinearProgress color="warning" determinate value={20} />
              </div>

              <p className="text-[14px] font-bold text-black">20</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 px-6 border-b-[1px] border-[#0000001A]">
          <div className="flex justify-between items-center w-[120px]  bg-[#D9D9D926] px-4 py-2">
            <p className="text-[#74767E] text-[16px] font-medium">Filtter</p>
            <FaAngleDown className="text-[#74767E]" />
          </div>
          <div className="flex justify-between items-center w-[120px]  bg-[#D9D9D926] px-4 py-2">
            <p className="text-[#74767E] text-[16px] font-medium">Relevence</p>
            <FaAngleDown className="text-[#74767E]" />
          </div>
        </div>
        <div className="px-4 py-3">
          <div className="flex lg:gap-0 gap-3 sm:gap-3 flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center justify-between">
            <div className="lg:gap-0 gap-9 sm:gap-9  flex items-center gap-3">
              <Rating
                name="read-only"
                mt-3
                defaultValue={5}
                readOnly
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 13,
                  },
                }}
              />
              <p className="text-[#000000] text-[12px] font-medium">
                raoahsan R.
              </p>
              <p className="text-[#74767E] text-[12px] font-normal">
                12 month ago
              </p>
            </div>
            <p className="text-[#74767E] text-[16px] font-normal">
              12 month ago
            </p>
          </div>
          <p className="text-[#000000] mt-2 text-[16px] font-medium">
            I'm very happy because this Value for money 🤑 and thanks Rider
          </p>
          <div className="flex items-center  lg:gap-4 gap-2 sm:gap-2 ">
            <Image
              alt=""
              src={Card1}
              className="w-[68px]  h-[68px] rounded-md"
            />
            <Image
              alt=""
              src={Card1}
              className="w-[68px]  h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="w-[68px]  h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="w-[68px]  h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />
          </div>
          <p className="text-[#74767E] mt-2 text-[16px] font-medium">
            Color Family:Gold, Bracelet Size:One Size
          </p>
        </div>
        <div className="px-4 py-3 border-t-[1px] border-[#0000001A]">
          <div className="flex lg:gap-0 gap-3 sm:gap-3 flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center justify-between">
            <div className="lg:gap-0 gap-9 sm:gap-9  flex items-center gap-3">
              <Rating
                name="read-only"
                mt-3
                defaultValue={5}
                readOnly
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 13,
                  },
                }}
              />
              <p className="text-[#000000] text-[12px] font-medium">
                raoahsan R.
              </p>
              <p className="text-[#74767E] text-[12px] font-normal">
                12 month ago
              </p>
            </div>
            <p className="text-[#74767E] text-[16px] font-normal">
              12 month ago
            </p>
          </div>
          <p className="text-[#000000] mt-2 text-[16px] font-medium">
            I'm very happy because this Value for money 🤑 and thanks Rider
          </p>
          <div className="flex items-center  lg:gap-4 gap-2 sm:gap-2 ">
            <Image
              alt=""
              src={Card1}
              className="w-[68px]  h-[68px] rounded-md"
            />
            <Image
              alt=""
              src={Card1}
              className="w-[68px]  h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="w-[68px]  h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="w-[68px]  h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />{" "}
            <Image
              alt=""
              src={Card1}
              className="lg:w-[68px] sm:hidden md:sm:hidden hidden lg:h-[68px] rounded-md"
            />
          </div>
          <p className="text-[#74767E] mt-2 text-[16px] font-medium">
            Color Family:Gold, Bracelet Size:One Size
          </p>
        </div>
      </div>
      <p className="text-[14px] mt-6 text-[#000000] font-bold">
        More from frequently Our Store
      </p>
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
