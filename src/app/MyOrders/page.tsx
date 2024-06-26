"use client";
import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCloseSharp, IoLockClosed } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Chair from "@/assets/pngwing 2.png";
import close from "@/assets/close.png";
import Shoes from "@/assets/Rectangle 2032.png";
import Image from "next/image";
import AAA from "@/assets/Health Report.png";
import BBB from "@/assets/Box.png";
import CCC from "@/assets/Shipping.png";
import DDD from "@/assets/sort by time.png";
import CustomModal from "@/components/CustomModel";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import Dots from "@/assets/Group 1820549907.png";
import { Rating } from "@mui/material";
import { PiCameraThin } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
export default function Leave() {
  const [activeSection, setActiveSection] = useState<string>("Active");
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  const [showSendModel, setShowSendModel] = useState(false);
  const [showConfirm, setShowconfirm] = useState(false);
  const [showleave, setShowLeave] = useState(false);

  const handleOpeneModelLeave = () => {
    setShowLeave(true);
  };
  const handelCloseComplet = () => {
    setShowLeave(false);
  };
  const handleOpeneModelconfirm = () => {
    setShowSendModel(false);
    setShowconfirm(true);

    // Close the confirmation modal after 5 seconds
    setTimeout(() => {
      setShowconfirm(false);
    }, 5000);
  };
  const handleOpeneModel = () => {
    setShowSendModel(true);
  };
  const handleCloseModel = () => {
    setShowSendModel(false);
  };
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleButtonClick = () => {
    setIsDivVisible((prev) => !prev);
  };
  return (
    <div className="lg:my-[50px] my-[20px] sm:my-[20px] md:my-[30px] lg:mx-[150px] mx-[20px] sm:mx-[20px] md:mx-[30px]">
      <div
        style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
        className="rounded-3xl p-[20px] w-[100%] gap-8  flex items-algin "
      >
        <p
          onClick={() => handleSectionChange("Active")}
          className={`lg:text-[16px] text-[9px] sm:text-[13px] md:text-[14px]  font-normal text-[#777777] cursor-pointer ${
            activeSection === "Active"
              ? "border-b-[4px] border-[#F70000] font-semibold"
              : "text-[#8B8B8B]"
          }`}
        >
          Active orders
        </p>
        <p
          onClick={() => handleSectionChange("Completed")}
          className={`lg:text-[16px] text-[9px] sm:text-[13px] md:text-[14px] font-normal text-[#777777] cursor-pointer ${
            activeSection === "Completed"
              ? "border-b-[4px] border-[#F70000] font-semibold"
              : "text-[#8B8B8B]"
          }`}
        >
          Completed orders
        </p>
        <p
          onClick={() => handleSectionChange("Cancelled")}
          className={`lg:text-[16px] text-[9px] sm:text-[13px] md:text-[14px] font-normal text-[#777777] cursor-pointer ${
            activeSection === "Cancelled"
              ? "border-b-[4px] border-[#F70000] font-semibold"
              : "text-[#8B8B8B]"
          }`}
        >
          Cancelled orders
        </p>
      </div>
      {activeSection === "Active" && (
        <>
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-100 rounded-3xl p-6 mt-6 hover:border-[1px] border-[#F70000]"
          >
            <div className="flex items-center  justify-between">
              <div className="border-[1px] border-[#777777] rounded-full w-[230px] px-4 py-2 flex items-center">
                <IoLockClosed className="w-[14px] h-[14px] mr-2" />
                <p className="text-[14px] font-normal text-[#777777]">
                  Yesterday, 12 jan, 2024
                </p>
              </div>

              <div className="flex items-center mt-3 lg:mt-0 sm:mt-3 md:mt-2   ">
                <div className=" lg:flex sm:hidden hidden items-center p-2 rounded-lg shadow-lg mr-3  cursor-pointer">
                  <IoCloseSharp
                    className="text-[24px] text-[#FC0005] mr-4 cursor-pointer"
                    onClick={handleOpeneModel}
                  />
                  <p className="text-[#FC0005] text-[16px] font-semibold mr-4">
                    Cancel Order
                  </p>
                </div>
                <div className="border-#00000017 border-[1px] rounded-md h-[30px] w-[30px] flex items-center justify-center">
                  <HiOutlineDotsVertical className="h-[15px] w-4 text-[#D9D9D9]" />
                </div>
              </div>
            </div>
            <div className=" lg:hidden sm:flex flex mt-4 sm:mt-2 lg:mt-0 items-center p-2 rounded-lg shadow-lg mr-3  cursor-pointer">
              <IoCloseSharp
                className="text-[24px] text-[#FC0005] mr-4 cursor-pointer"
                onClick={handleOpeneModel}
              />
              <p className="text-[#FC0005] text-[16px] font-semibold mr-4">
                Cancel Order
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap  items-center justify-between mt-5">
              <div className="flex items-center">
                <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                  <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div>
                  <p className="text-[18px] font-medium">Wear Saka Store </p>
                  <p className="text-[16px] mt-2 text-[#777777] font-medium">
                    Color: Grey
                  </p>
                  <p className="text-[16px] text-[#777777] mt-3 font-medium">
                    Size 10.5 UK
                  </p>
                </div>
              </div>
              <p className="lg:text-[24px] text-[18px] mt-3 lg:mt-0 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                Quantity 4
              </p>
              <p className="lg:text-[24px] text-[18px] mt-3 lg:mt-0 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                Price: $567.00
              </p>
              <div className="flex-col mt-3 lg:mt-0 sm:mt-3 md:mt-3  flex">
                <button className=" bg-[#00F7630F] rounded-2xl h-[50px] outline-[2px] outline-[#26F63B] outline-dashed  lg:w-[181px] w-[300px] sm:w-[300px] md:w-[300px] text-[18px] font-medium text-[#07D459]">
                  In Progress
                </button>
                <button
                  className=" bg-[#FFFAF4] mt-3 outline-[2px] outline-[#F69B26] outline-dashed rounded-2xl h-[50px] lg:w-[181px] w-[300px] sm:w-[300px] md:w-[300px]  text-[18px] font-medium text-[#F69B26]"
                  onClick={handleButtonClick}
                >
                  Order Tracking
                </button>
              </div>
            </div>
            {isDivVisible && (
              <>
                <div className="mt-4">
                  <p className="text-[16px] font-semibold">Delivery Details</p>
                </div>
                <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap  lg:gap-8 gap-2 sm:gap-2 mt-5">
                  <p className="text-[14px] text-[#909198] font-normal">
                    Delivery Details
                  </p>
                  <p className="text-[14px]  sm:ml-7 lg:ml-7  ml-10 text-black font-semibold">
                    23 sep 2023
                  </p>
                  <p className="text-[14px] text-[#909198] font-normal">
                    Tracking ID:
                  </p>
                  <p className="text-[14px] sm:ml-7 lg:ml-7  ml-10 text-black font-semibold">
                    TYRGSH465Y6443
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-[16px] font-semibold">Delivery Details</p>
                </div>
                <div className="lg:flex  sm:hidden md:hidden hidden  gap-8 mt-5">
                  <div className="flex items-center gap-4 lg:w-auto w-[100%] sm: w-[100%] md: w-[100%]">
                    <Image src={AAA} alt="" className="w-[32px] h-[32px]" />
                    <div>
                      <p className="text-[14px] text-black font-semibold">
                        Order placed
                      </p>
                      <p className="text-[14px] text-[#909198] font-normal">
                        12 sep 2024, 04:25 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image src={BBB} alt="" className="w-[32px] h-[32px]" />
                    <div>
                      <p className="text-[14px] text-black font-semibold">
                        Order placed
                      </p>
                      <p className="text-[14px] text-[#909198] font-normal">
                        12 sep 2024, 04:25 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image src={CCC} alt="" className="w-[32px] h-[32px]" />
                    <div>
                      <p className="text-[14px] text-black font-semibold">
                        Order placed
                      </p>
                      <p className="text-[14px] text-[#909198] font-normal">
                        12 sep 2024, 04:25 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image src={DDD} alt="" className="w-[32px] h-[32px]" />
                    <div>
                      <p className="text-[14px] text-black font-semibold">
                        Order placed
                      </p>
                      <p className="text-[14px] text-[#909198] font-normal">
                        12 sep 2024, 04:25 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:flex  sm:hidden md:hidden hidden items-center  gap-3 mt-5">
                  <FaCheckCircle className="text-[#F70000] h-[24px] w-[24px]" />
                  <div className="border-[#F70000] border-t-[2px] w-[200px] ">
                    {" "}
                  </div>
                  <FaCheckCircle className="text-[#F70000] h-[24px] w-[24px]" />
                  <div className="border-[#D2D4DA] border-t-[2px] w-[200px] ">
                    {" "}
                  </div>
                  <FaCheckCircle className="text-[#D2D4DA] h-[24px] w-[24px]" />
                  <div className="border-[#D2D4DA] border-t-[2px] w-[200px] ">
                    {" "}
                  </div>
                  <FaCheckCircle className="text-[#D2D4DA] h-[24px] w-[24px]" />
                </div>

                <div className="mt-5 sm:block block lg:hidden">
                  <div className="flex gap-3 items-start">
                    <div className="mt-2 ">
                      <FaCheckCircle className="text-[#F70000] h-[24px] w-[24px]" />
                      <div className="border-[#F70000] ml-3 mt-2 border-l-[2px] h-[100px] "></div>
                    </div>
                    <div className="flex items-center gap-4 lg:w-auto w-[100%] sm: w-[100%] md: w-[100%]">
                      <Image src={AAA} alt="" className="w-[32px] h-[32px]" />
                      <div>
                        <p className="text-[14px] text-black font-semibold">
                          Order placed
                        </p>
                        <p className="text-[14px] text-[#909198] font-normal">
                          12 sep 2024, 04:25 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="mt-2 ">
                      <FaCheckCircle className="text-[#F70000] h-[24px] w-[24px]" />
                      <div className="border-[#F70000] ml-3 mt-2 border-l-[2px] h-[100px] "></div>
                    </div>
                    <div className="flex items-center gap-4 lg:w-auto w-[100%] sm: w-[100%] md: w-[100%]">
                      <Image src={BBB} alt="" className="w-[32px] h-[32px]" />
                      <div>
                        <p className="text-[14px] text-black font-semibold">
                          Order placed
                        </p>
                        <p className="text-[14px] text-[#909198] font-normal">
                          12 sep 2024, 04:25 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="mt-2 ">
                      <FaCheckCircle className="text-[#D2D4DA] h-[24px] w-[24px]" />
                      <div className="border-[#D2D4DA] ml-3 mt-2 border-l-[2px] h-[100px] "></div>
                    </div>
                    <div className="flex items-center gap-4 lg:w-auto w-[100%] sm: w-[100%] md: w-[100%]">
                      <Image src={CCC} alt="" className="w-[32px] h-[32px]" />
                      <div>
                        <p className="text-[14px] text-black font-semibold">
                          Order placed
                        </p>
                        <p className="text-[14px] text-[#909198] font-normal">
                          12 sep 2024, 04:25 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="mt-2 ">
                      <FaCheckCircle className="text-[#D2D4DA] h-[24px] w-[24px]" />
                    </div>
                    <div className="flex items-center gap-4 lg:w-auto w-[100%] sm: w-[100%] md: w-[100%]">
                      <Image src={DDD} alt="" className="w-[32px] h-[32px]" />
                      <div>
                        <p className="text-[14px] text-black font-semibold">
                          Order placed
                        </p>
                        <p className="text-[14px] text-[#909198] font-normal">
                          12 sep 2024, 04:25 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <CustomModal showModal={showSendModel}>
            <div className="w-[600px]  my-[40px]">
              <div className="flex flex-col justify-center text-center">
                <Image
                  src={close}
                  alt=""
                  className="text-[#E13827] flex m-auto h-[162px] w-[162px]"
                />
                <p className="text-[32px] text-[#434343]  font-bold mt-6">
                  Cancel Order
                </p>
                <p className="text-[20px] text-[#434343]  font-medium mt-6">
                  Are you sure you want to cancel the order
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <button
                    className=" bg-[#CFCFCF] rounded-md h-[50px]  w-[181px] text-[18px] font-medium text-white"
                    onClick={handleCloseModel}
                  >
                    Cancel
                  </button>
                  <button
                    className=" bg-[#F70000]  rounded-md h-[50px]  w-[181px] text-[18px] font-medium text-white"
                    onClick={handleOpeneModelconfirm}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </CustomModal>
          <CustomModal showModal={showConfirm}>
            <div className="flex-col justify-center w-[800px]">
              <div className="mx-[150px] my-[100px]">
                <div className="flex justify-center mb-[22px]">
                  <Image src={Dots} alt="" className="h-[64px] w-[64px]" />

                  <FaCircleCheck className="text-[#E24C4B] h-[105px] mx-[16px] w-[105px]" />
                  <Image src={Dots} alt="" className="h-[64px] w-[64px]" />
                </div>
                <p className="text-[24px] mt-10 text-center font-bold text-[#434343]">
                  You Have Successfully purchased Prime Plan. Your order has
                  been successfully cancelled.{" "}
                </p>
              </div>
            </div>
          </CustomModal>
        </>
      )}
      {activeSection === "Completed" && (
        <div>
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-100 rounded-3xl p-6 mt-6 hover:border-[1px] border-[#F70000]"
          >
            <div className="flex  items-center justify-between">
              <div className="border-[1px] border-[#777777] rounded-full w-[230px] px-4 py-2 flex items-center">
                <IoLockClosed className="w-[14px] h-[14px] mr-2" />
                <p className="text-[14px] font-normal text-[#777777]">
                  Yesterday, 12 jan, 2024
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center lg:gap-[80px] mt-5">
              <div className="flex items-center">
                <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                  <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="lg:w-[200px]">
                  <p className="text-[18px] font-medium ">Wear Saka Store </p>
                  <p className="text-[16px] mt-2 text-[#777777] font-medium">
                    Color: Grey
                  </p>
                  <p className="text-[16px] text-[#777777] mt-3 font-medium">
                    Size 10.5 UK
                  </p>
                </div>
              </div>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] text-[#777777] mt-3 lg:mt-0 sm:mt-3 mr-2 lg:mr-0  font-medium">
                Quantity 4
              </p>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] text-[#777777] mt-3 lg:mt-0 sm:mt-3 lg:ml-[0px] ml-[70px] sm:ml-[70px]  font-medium">
                Price: $567.00
              </p>
              <div className="mt-3 lg:block flex sm:flex lg:mt-0 sm:mt-3">
                <button className=" mr-4 bg-[#00F7630F] rounded-2xl h-[50px] outline-[2px] outline-[#26F63B] outline-dashed  lg:w-[181px] w-[130px] lg:text-[18px] text-[14px] sm:text-[14px] lg:ml-auto font-medium text-[#07D459]">
                  Completed
                </button>
                <button
                  className=" bg-[#FFFAF4] lg:mt-3 mt-0 outline-[2px] outline-[#F69B26] outline-dashed rounded-2xl h-[50px] lg:w-[181px] w-[130px] lg:w-[181px] sm:w-[100px]   lg:text-[18px] text-[14px] sm:text-[14px] font-medium text-[#F69B26]"
                  onClick={handleOpeneModelLeave}
                >
                  Leave Review
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-100 rounded-3xl p-6 mt-6 hover:border-[1px] border-[#F70000]"
          >
            <div className="flex  items-center justify-between">
              <div className="border-[1px] border-[#777777] rounded-full w-[230px] px-4 py-2 flex items-center">
                <IoLockClosed className="w-[14px] h-[14px] mr-2" />
                <p className="text-[14px] font-normal text-[#777777]">
                  Yesterday, 12 jan, 2024
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center lg:gap-[80px] mt-5">
              <div className="flex items-center">
                <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                  <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="lg:w-[200px]">
                  <p className="text-[18px] font-medium ">Wear Saka Store </p>
                  <p className="text-[16px] mt-2 text-[#777777] font-medium">
                    Color: Grey
                  </p>
                  <p className="text-[16px] text-[#777777] mt-3 font-medium">
                    Size 10.5 UK
                  </p>
                </div>
              </div>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] text-[#777777] mt-3 lg:mt-0 sm:mt-3 mr-2 lg:mr-0  font-medium">
                Quantity 4
              </p>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] text-[#777777] mt-3 lg:mt-0 sm:mt-3 lg:ml-[0px] ml-[70px] sm:ml-[70px]  font-medium">
                Price: $567.00
              </p>
              <div className="mt-3 lg:block flex sm:flex lg:mt-0 sm:mt-3">
                <button className=" mr-4 bg-[#00F7630F] rounded-2xl h-[50px] outline-[2px] outline-[#26F63B] outline-dashed  lg:w-[181px] w-[130px] lg:text-[18px] text-[14px] sm:text-[14px] lg:ml-auto font-medium text-[#07D459]">
                  Completed
                </button>
                <button
                  className=" bg-[#FFFAF4] lg:mt-3 mt-0 outline-[2px] outline-[#F69B26] outline-dashed rounded-2xl h-[50px] lg:w-[181px] w-[130px] lg:w-[181px] sm:w-[100px]   lg:text-[18px] text-[14px] sm:text-[14px] font-medium text-[#F69B26]"
                  onClick={handleOpeneModelLeave}
                >
                  Leave Review
                </button>
              </div>
            </div>
          </div>{" "}
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-100 rounded-3xl p-6 mt-6 hover:border-[1px] border-[#F70000]"
          >
            <div className="flex  items-center justify-between">
              <div className="border-[1px] border-[#777777] rounded-full w-[230px] px-4 py-2 flex items-center">
                <IoLockClosed className="w-[14px] h-[14px] mr-2" />
                <p className="text-[14px] font-normal text-[#777777]">
                  Yesterday, 12 jan, 2024
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center lg:gap-[80px] mt-5">
              <div className="flex items-center">
                <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                  <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="lg:w-[200px]">
                  <p className="text-[18px] font-medium ">Wear Saka Store </p>
                  <p className="text-[16px] mt-2 text-[#777777] font-medium">
                    Color: Grey
                  </p>
                  <p className="text-[16px] text-[#777777] mt-3 font-medium">
                    Size 10.5 UK
                  </p>
                </div>
              </div>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] text-[#777777] mt-3 lg:mt-0 sm:mt-3 mr-2 lg:mr-0  font-medium">
                Quantity 4
              </p>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] text-[#777777] mt-3 lg:mt-0 sm:mt-3 lg:ml-[0px] ml-[70px] sm:ml-[70px]  font-medium">
                Price: $567.00
              </p>
              <div className="mt-3 lg:block flex sm:flex lg:mt-0 sm:mt-3">
                <button className=" mr-4 bg-[#00F7630F] rounded-2xl h-[50px] outline-[2px] outline-[#26F63B] outline-dashed  lg:w-[181px] w-[130px] lg:text-[18px] text-[14px] sm:text-[14px] lg:ml-auto font-medium text-[#07D459]">
                  Completed
                </button>
                <button
                  className=" bg-[#FFFAF4] lg:mt-3 mt-0 outline-[2px] outline-[#F69B26] outline-dashed rounded-2xl h-[50px] lg:w-[181px] w-[130px] lg:w-[181px] sm:w-[100px]   lg:text-[18px] text-[14px] sm:text-[14px] font-medium text-[#F69B26]"
                  onClick={handleOpeneModelLeave}
                >
                  Leave Review
                </button>
              </div>
            </div>
          </div>
          <CustomModal showModal={showleave}>
            <div className="flex-col justify-center w-[800px]">
              <div className="w-[100%] rounded-[30px] p-[30px]">
                <p className="text-[40px]  font-medium">Write a Review</p>
                <p className="text-[20px]  font-semibold  mt-3">
                  Rate the Product
                </p>
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
                    className="border-[1px] border-[#0000061] resize-none  w-full rounded-md h-[100px] p-3 focus:outline-none placeholder:text-[#777777]"
                    placeholder="Messsage"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 mt-5">
                  <Image
                    src={Shoes}
                    className="rounded-2xl w-[130px] h-[130px]"
                    alt=""
                  />
                  <Image
                    src={Shoes}
                    className="rounded-2xl w-[130px] h-[130px]"
                    alt=""
                  />
                  <Image
                    src={Shoes}
                    className="rounded-2xl w-[130px] h-[130px]"
                    alt=""
                  />
                  <Image
                    src={Shoes}
                    className="rounded-2xl w-[130px] h-[130px]"
                    alt=""
                  />
                  <div className=" w-[130px] h-[130px] border-[3px] rounded-2xl border-[#F70000] flex justify-center items-center">
                    <PiCameraThin className="h-[90px] w-[90px] text-[#F70000]" />
                  </div>
                </div>
                <div className="flex mt-5 items-center gap-6">
                  <button className=" bg-[#F70000] rounded-xl h-[50px]  mt-[30px] w-[230px] text-[18px] font-medium text-white">
                    Submit
                  </button>
                  <button
                    className=" bg-[#F69B26] rounded-xl h-[50px] mt-[30px] w-[230px] text-[18px] font-medium text-white"
                    onClick={handelCloseComplet}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </CustomModal>
        </div>
      )}

      {activeSection === "Cancelled" && (
        <>
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-100 rounded-3xl p-6 mt-6 hover:border-[1px] border-[#F70000]"
          >
            <div className="flex items-center justify-between">
              <div className="border-[1px] border-[#777777] rounded-full w-[230px] px-4 py-2 flex items-center">
                <IoLockClosed className="w-[14px] h-[14px] mr-2" />
                <p className="text-[14px] font-normal text-[#777777]">
                  Yesterday, 12 jan, 2024
                </p>
              </div>
            </div>
            <div className=" items-center flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-between mt-5">
              <div className="flex items-center">
                <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                  <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div>
                  <p className="text-[18px] font-medium">Wear Saka Store </p>
                  <p className="text-[16px] mt-2 text-[#777777] font-medium">
                    Color: Grey
                  </p>
                  <p className="text-[16px] text-[#777777] mt-3 font-medium">
                    Size 10.5 UK
                  </p>
                </div>
              </div>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] lg:mt-0 mt-3 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                Quantity 4
              </p>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] lg:mt-0 mt-3 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                Price: $567.00
              </p>
              <div className="lg:mt-0 mt-3 sm:mt-3 md:mt-3">
                <button className=" mr-4 bg-[#F700001A] rounded-2xl h-[50px] outline-[2px] outline-[#F70000] outline-dashed  lg:w-[181px] w-[300px] sm:w-[300px] text-[18px] font-medium text-[#F70000]">
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-100 rounded-3xl p-6 mt-6 hover:border-[1px] border-[#F70000]"
          >
            <div className="flex items-center justify-between">
              <div className="border-[1px] border-[#777777] rounded-full w-[230px] px-4 py-2 flex items-center">
                <IoLockClosed className="w-[14px] h-[14px] mr-2" />
                <p className="text-[14px] font-normal text-[#777777]">
                  Yesterday, 12 jan, 2024
                </p>
              </div>
            </div>
            <div className=" items-center flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-between mt-5">
              <div className="flex items-center">
                <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                  <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div>
                  <p className="text-[18px] font-medium">Wear Saka Store </p>
                  <p className="text-[16px] mt-2 text-[#777777] font-medium">
                    Color: Grey
                  </p>
                  <p className="text-[16px] text-[#777777] mt-3 font-medium">
                    Size 10.5 UK
                  </p>
                </div>
              </div>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] lg:mt-0 mt-3 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                Quantity 4
              </p>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] lg:mt-0 mt-3 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                Price: $567.00
              </p>
              <div className="lg:mt-0 mt-3 sm:mt-3 md:mt-3">
                <button className=" mr-4 bg-[#F700001A] rounded-2xl h-[50px] outline-[2px] outline-[#F70000] outline-dashed  lg:w-[181px] w-[300px] sm:w-[300px] text-[18px] font-medium text-[#F70000]">
                  Completed
                </button>
              </div>
            </div>
          </div>{" "}
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-100 rounded-3xl p-6 mt-6 hover:border-[1px] border-[#F70000]"
          >
            <div className="flex items-center justify-between">
              <div className="border-[1px] border-[#777777] rounded-full w-[230px] px-4 py-2 flex items-center">
                <IoLockClosed className="w-[14px] h-[14px] mr-2" />
                <p className="text-[14px] font-normal text-[#777777]">
                  Yesterday, 12 jan, 2024
                </p>
              </div>
            </div>
            <div className=" items-center flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-between mt-5">
              <div className="flex items-center">
                <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                  <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div>
                  <p className="text-[18px] font-medium">Wear Saka Store </p>
                  <p className="text-[16px] mt-2 text-[#777777] font-medium">
                    Color: Grey
                  </p>
                  <p className="text-[16px] text-[#777777] mt-3 font-medium">
                    Size 10.5 UK
                  </p>
                </div>
              </div>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] lg:mt-0 mt-3 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                Quantity 4
              </p>
              <p className="lg:text-[24px] text-[16px] sm:text-[16px] md:text-[18px] lg:mt-0 mt-3 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                Price: $567.00
              </p>
              <div className="lg:mt-0 mt-3 sm:mt-3 md:mt-3">
                <button className=" mr-4 bg-[#F700001A] rounded-2xl h-[50px] outline-[2px] outline-[#F70000] outline-dashed  lg:w-[181px] w-[300px] sm:w-[300px] text-[18px] font-medium text-[#F70000]">
                  Completed
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
