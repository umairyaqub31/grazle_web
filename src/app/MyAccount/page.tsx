"use client";
import React, { useState } from "react";
import Image from "next/image";
import PayPal from "@/assets/pngwing 6.png";
import Visa from "@/assets/pngwing 7.png";
import Google from "@/assets/Group 1820549999.png";
import Card from "@/assets/card22.png";
import Chair from "@/assets/pngwing 2.png";
import Location from "@/assets/layer1.png";
import Home from "@/assets/Vectorhome.png";
import Appartment from "@/assets/Group444.png";
import Office from "@/assets/Layer_1.png";
import { Avatar, Checkbox, Radio } from "@mui/material";
import CustomModal from "@/components/CustomModel";
import { MdDelete, MdOutlineDeleteOutline } from "react-icons/md";
import { LiaUserSlashSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";
import { IoLockClosed } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import close from "@/assets/close.png";
import Shoes from "@/assets/Rectangle 2032.png";
import AAA from "@/assets/Health Report.png";
import BBB from "@/assets/Box.png";
import CCC from "@/assets/Shipping.png";
import DDD from "@/assets/sort by time.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import Dots from "@/assets/Group 1820549907.png";
import { Rating } from "@mui/material";
import { PiCameraThin } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
export default function MyAccount() {
  const [showSendModel, setShowSendModel] = useState(false);
  const [showModelDelete, setShowModelDelete] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("Personal Info");
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  const handleCloseModel = () => {
    setShowSendModel(false);
  };
  const handleCloseModelDelete = () => {
    setShowModelDelete(false);
  };
  const handleOpenModelDelete = () => {
    setShowModelDelete(true);
  };
  const handelLogout = () => {
    handleSectionChange("Logout");
    setShowSendModel(true);
  };
  const [activeSectionorder, setActiveSectiorder] = useState<string>("Active");
  const handleSectionChangeorder = (section: string) => {
    setActiveSectiorder(section);
  };
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

  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleButtonClick = () => {
    setIsDivVisible((prev) => !prev);
  };
  const [isCancelOrderVisible, setIsCancelOrderVisible] = useState(false);

  const toggleCancelOrderVisibility = () => {
    setIsCancelOrderVisible(!isCancelOrderVisible);
  };

  return (
    <div className="lg:my-[80px] my-[20px] sm:my-[20px] md:my-[30px] lg:mx-[150px] mx-[20px] sm:mx-[20px] md:mx-[30px]">
      <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-start gap-6 h-auto">
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="rounded-3xl p-[30px] lg:w-[23%] w-[100%] h-[454px]"
        >
          <div
            onClick={() => handleSectionChange("Personal Info")}
            className={`cursor-pointer pl-5 text-[18px] font-normal cursor-pointer ${
              activeSection === "Personal Info"
                ? "border-l-[4px] border-[#F70000] pl-2"
                : "text-[#8B8B8B] "
            }`}
          >
            Personal Information
          </div>
          <div
            onClick={() => handleSectionChange("Orders")}
            className={`cursor-pointer pl-5  mt-[40px] text-[18px] font-normal cursor-pointer ${
              activeSection === "Orders"
                ? "border-l-[4px] border-[#F70000] pl-2"
                : "text-[#8B8B8B]"
            }`}
          >
            My Orders
          </div>
          <div
            onClick={() => handleSectionChange("Manage Address")}
            className={`cursor-pointer pl-5  mt-[40px] text-[18px] font-normal cursor-pointer ${
              activeSection === "Manage Address"
                ? "border-l-[4px] border-[#F70000] pl-2"
                : "text-[#8B8B8B] "
            }`}
          >
            Manage Address
          </div>
          <div
            onClick={() => handleSectionChange("Payment Method")}
            className={`cursor-pointer pl-5  mt-[40px] text-[18px] font-normal cursor-pointer ${
              activeSection === "Payment Method"
                ? "border-l-[4px] border-[#F70000] pl-2"
                : "text-[#8B8B8B] "
            }`}
          >
            Payment Method
          </div>
          <div
            onClick={() => handleSectionChange("Password Manager")}
            className={`cursor-pointer  mt-[40px] pl-5 text-[18px] font-normal cursor-pointer ${
              activeSection === "Password Manager"
                ? "border-l-[4px] border-[#F70000] pl-2"
                : "text-[#8B8B8B] "
            }`}
          >
            Password Manager
          </div>
          <div
            onClick={handelLogout}
            className={`cursor-pointer  mt-[40px] pl-5  text-[18px] font-normal cursor-pointer   ${
              activeSection === "Logout"
                ? "border-l-[4px] border-[#F70000] pl-2"
                : "text-[#8B8B8B] "
            }`}
          >
            Logout{" "}
          </div>
        </div>
        <div className="rounded-3xl  lg:w-[77%] w-[100%] min-h-[454px] max-h-auto">
          {activeSection === "Personal Info" && (
            <div
              style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
              className="rounded-3xl p-[30px] w-full "
            >
              <Avatar className="w-[80px] h-[80px]" />
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center gap-4  ">
                <div className="flex-col mt-[30px] lg:w-[50%] w-[100%] sm:w-[100%] md:w-[100%]">
                  <label className="text-[16px] font-semibold">
                    {" "}
                    First Name *
                  </label>
                  <input
                    placeholder="Enter Name "
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>{" "}
                <div className="flex-col mt-[30px] lg:w-[50%] w-[100%] sm:w-[100%] md:w-[100%]">
                  <label className="text-[16px] font-semibold">
                    {" "}
                    Last Name *
                  </label>
                  <input
                    placeholder="Enter Name "
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex-col mt-[30px]">
                <label className="text-[16px] font-semibold">Address</label>
                <input
                  placeholder="Enter Address"
                  className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                />
              </div>
              <div className="flex-col mt-[30px]">
                <label className="text-[16px] font-semibold">
                  {" "}
                  Phone Number *
                </label>
                <input
                  placeholder="Enter Phone Number"
                  className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                />
              </div>
              <div className="flex-col mt-[30px]">
                <label className="text-[16px] font-semibold"> Gender *</label>
                <select className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none">
                  <option>Male</option>
                  <option>FeMale</option>
                </select>
              </div>
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center justify-between mt-[30px]">
                <button className=" bg-[#F70000] rounded-2xl h-[50px]  lg:w-[181px] w-[100%] text-[18px] font-medium text-white">
                  Update Change
                </button>
                <div className="flex items-center lg:mt-0  mt-3 sm:mt-3">
                  <MdOutlineDeleteOutline
                    className="text-[#F70000] lg:text-[28px] text-[20px] sm:text-[20px]  mr-[16px]"
                    onClick={handleOpenModelDelete}
                  />
                  <p className="text-[#F70000] lg:text-[16px] text-[12px] sm:text-[14px] font-semibold mr-[16px]">
                    Delete Account
                  </p>

                  <LiaUserSlashSolid className="text-[#F70000] lg:text-[28px] text-[20px] sm:text-[20px]  mr-[16px]" />
                  <p className="text-[#777777] lg:text-[16px] text-[12px] sm:text-[14px] font-semibold mr-[16px]">
                    Delete Account
                  </p>
                </div>
              </div>
              <CustomModal showModal={showModelDelete}>
                <div className=" w-[620px] p-6">
                  <p className="text-[40px] text-center font-bold text-[#777777]">
                    Delete Account
                  </p>
                  <p className="text-[20px]  font-medium text-[#777777] mt-[32px]">
                    Deleting your account may remove all your information From
                    our database, this can not be undone.
                  </p>
                  <p className="text-[15px] font-normal text-[#777777] mt-[18px]">
                    To Confirm this ype ‘Delete’
                  </p>
                  <div className="flex items-center gap-4 mt-[4px]">
                    <input className="border-[1px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"></input>
                    <button
                      className=" bg-[#F70000] rounded-2xl h-[50px] w-[275px] text-[18px] font-medium text-white"
                      onClick={handleCloseModelDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </CustomModal>
            </div>
          )}
          {activeSection === "Orders" && (
            //             <div>
            //               <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap justify-between items-center">
            //                 <p className="text-[18px] font-bold">Orders (2)</p>
            //                 <div className="flex items-center">
            //                   <p className="text-[18px] ">Sort by:</p>
            //                   <select className="ml-2 text-[18px]  focus:outline-none">
            //                     <option>All</option>
            //                     <option>All</option>
            //                   </select>
            //                 </div>
            //               </div>
            //               <div
            //                 style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            //                 className="rounded-3xl mt-[24px]  w-full "
            //               >
            //                 <div className="bg-[#FFBA35] lg:py-2 py-3 sm:py-3 md:py-3 lg:h-[80px] h-auto flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap  items-center justify-between rounded-t-3xl px-8">
            //                   <div>
            //                     <p className="text-[#777777] text-[16px] font-medium">
            //                       Order ID
            //                     </p>

            //                     <p className="text-[#434343] text-[24px] font-medium">
            //                       #SHGH5577HHH
            //                     </p>
            //                   </div>
            //                   <div>
            //                     <p className="text-[#777777] text-[16px] font-medium">
            //                       Payment Method
            //                     </p>

            //                     <p className="text-[#434343] text-[24px] font-medium">
            //                       PayPal
            //                     </p>
            //                   </div>
            //                   <div>
            //                     <p className="text-[#777777] text-[16px] font-medium">
            //                       Transacton ID
            //                     </p>

            //                     <p className="text-[#434343] text-[24px] font-medium">
            //                       TR67777SSE
            //                     </p>
            //                   </div>
            //                   <div>
            //                     <p className="text-[#777777] text-[16px] font-medium">
            //                       Estimated Delivery Date
            //                     </p>

            //                     <p className="text-[#434343] text-[24px] font-medium">
            //                       24 April 2024
            //                     </p>
            //                   </div>
            //                 </div>
            //                 <div className="p-6">
            //                   <div className="border-b-[1px] border-[#77777729] pb-4 flex items-center">
            //                     <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
            //                       <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
            //                     </div>
            //                     <div>
            //                       <p className="text-[20px] font-semibold text-[#434343]">
            //                         Wooden Sofa Chair
            //                       </p>
            //                       <p className="text-[16px] mt-2 font-semibold text-[#777777]">
            //                         Color - Graey
            //                       </p>
            //                     </div>
            //                   </div>
            //                   <div className="border-b-[1px] border-[#77777729] py-4 flex items-center">
            //                     <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
            //                       <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
            //                     </div>
            //                     <div>
            //                       <p className="text-[20px] font-semibold text-[#434343]">
            //                         Wooden Sofa Chair
            //                       </p>
            //                       <p className="text-[16px] mt-2 font-semibold text-[#777777]">
            //                         Color - Graey
            //                       </p>
            //                     </div>
            //                   </div>
            //                   <div className="border-b-[1px] border-[#77777729] py-4 flex items-center">
            //                     <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
            //                       <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
            //                     </div>
            //                     <div>
            //                       <p className="text-[20px] font-semibold text-[#434343]">
            //                         Wooden Sofa Chair
            //                       </p>
            //                       <p className="text-[16px] mt-2 font-semibold text-[#777777]">
            //                         Color - Graey
            //                       </p>
            //                     </div>
            //                   </div>
            //                   <div className="flex items-center mt-4 ">
            //                     <button className="mr-4 bg-[#FFA31A1A] border-[1px] border-[#F70000] rounded-full h-[50px]  w-[137px] text-[18px] font-medium text-[#F70000]">
            //                       Accepted
            //                     </button>
            //                     <p className="lg:text-[20px] sm:text-[14px] text-[14px]  font-semibold text-[#434343]">
            //                       Your order has been accepted
            //                     </p>
            //                   </div>
            //                   <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center justify-between mt-8 ">
            //                     <div className="flex items-center ">
            //                       <button className="mr-4 bg-[#F70000] border-[1px] border-[#F70000] rounded-full h-[50px]  w-[137px] text-[18px] font-medium text-white">
            //                         Track Order
            //                       </button>
            //                       <button
            //                         className="mr-4 bg-white border-[1px] border-[#000000] rounded-full h-[50px]  w-[137px] text-[18px] font-medium text-[#777777]
            // ]"
            //                       >
            //                         Invoice
            //                       </button>
            //                     </div>
            //                     <p className="text-[18px] lg:mt-0 mt-3 sm:mt-3 text-center font-semibold text-[#F70000]">
            //                       Cancel order
            //                     </p>
            //                   </div>
            //                 </div>
            //               </div>
            //             </div>
            <div className="">
              <div
                style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
                className="rounded-3xl p-[20px] w-[100%] gap-8  flex items-algin "
              >
                <p
                  onClick={() => handleSectionChangeorder("Active")}
                  className={`lg:text-[16px] text-[9px] sm:text-[13px] md:text-[14px]  font-normal text-[#777777] cursor-pointer ${
                    activeSectionorder === "Active"
                      ? "border-b-[4px] border-[#F70000] font-semibold"
                      : "text-[#8B8B8B]"
                  }`}
                >
                  Active orders
                </p>
                <p
                  onClick={() => handleSectionChangeorder("Completed")}
                  className={`lg:text-[16px] text-[9px] sm:text-[13px] md:text-[14px] font-normal text-[#777777] cursor-pointer ${
                    activeSectionorder === "Completed"
                      ? "border-b-[4px] border-[#F70000] font-semibold"
                      : "text-[#8B8B8B]"
                  }`}
                >
                  Completed orders
                </p>
                <p
                  onClick={() => handleSectionChangeorder("Cancelled")}
                  className={`lg:text-[16px] text-[9px] sm:text-[13px] md:text-[14px] font-normal text-[#777777] cursor-pointer ${
                    activeSectionorder === "Cancelled"
                      ? "border-b-[4px] border-[#F70000] font-semibold"
                      : "text-[#8B8B8B]"
                  }`}
                >
                  Cancelled orders
                </p>
              </div>
              {activeSectionorder === "Active" && (
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
                        {isCancelOrderVisible && (
                          <div className=" lg:flex sm:hidden hidden items-center p-2 rounded-lg shadow-lg mr-3  cursor-pointer">
                            <IoCloseSharp
                              className="text-[24px] text-[#FC0005] mr-4 cursor-pointer"
                              onClick={handleOpeneModel}
                            />
                            <p className="text-[#FC0005] text-[16px] font-semibold mr-4">
                              Cancel Order
                            </p>
                          </div>
                        )}
                        <div
                          className="border-#00000017 border-[1px] rounded-md h-[30px] w-[30px] flex items-center justify-center"
                          onClick={toggleCancelOrderVisibility}
                        >
                          <HiOutlineDotsVertical className="h-[15px] w-4 text-[#D9D9D9]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap  items-center justify-between mt-5">
                      <div className="flex items-center">
                        <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                          <Image
                            src={Chair}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        </div>
                        <div>
                          <p className="text-[18px] font-medium">
                            Wear Saka Store{" "}
                          </p>
                          <p className="text-[16px] mt-2 text-[#777777] font-medium">
                            Color: Grey
                          </p>
                          <p className="text-[16px] text-[#777777] mt-3 font-medium">
                            Size 10.5 UK
                          </p>
                        </div>
                      </div>

                      <p className="lg:text-[24px] lg:block sm:hidden hidden text-[14px] sm:text-[14px] mt-3 lg:mt-0 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                        Quantity 4
                      </p>
                      <p className="lg:text-[24px] lg:block sm:hidden hidden text-[14px] m:text-[14px] mt-3 lg:mt-0 sm:mt-3 md:mt-3 text-[#777777]  font-medium">
                        Price: $567.00
                      </p>
                      <div className="lg:flex-col flex-row justify-between sm:flex-row mt-3 lg:mt-0 sm:mt-3 md:mt-3  flex">
                        <button className=" hidden sm:hidden lg:block bg-[#00F7630F] lg:rounded-2xl rounded-lg sm:rounded-lg  lg:h-[50px] h-[40px] sm:h-[40px]  outline-[2px] outline-[#26F63B] outline-dashed  lg:w-[181px] w-[150px] sm:w-[300px] md:w-[300px] lg:text-[18px] text-[14px] sm:text-[14px] font-medium text-[#07D459]">
                          In Progress
                        </button>
                        <button
                          className=" bg-[#FFFAF4] hidden sm:hidden lg:block lg:ml-0 ml-3 sm:ml-3 lg:mt-3 mt-0 sm:mt-0 outline-[2px] outline-[#F69B26] outline-dashed lg:rounded-2xl rounded-lg sm:rounded-lg lg:h-[50px] h-[40px] sm:h-[40px] lg:w-[181px] w-[150px] sm:w-[300px] md:w-[300px]  lg:text-[18px] text-[14px] sm:text-[14px] font-medium text-[#F69B26]"
                          onClick={handleButtonClick}
                        >
                          Order Tracking
                        </button>
                      </div>
                    </div>
                    <div className="lg:hidden block sm:block">
                      <div className="flex mt-3 justify-between items-center">
                        <p className=" text-[14px] text-[#777777]  font-medium">
                          Quantity 4
                        </p>
                        <div>
                          {isCancelOrderVisible && (
                            <div className="flex  items-center cursor-pointer">
                              <MdDelete
                                className="text-[15px] mr-3 text-[#FC0005]  cursor-pointer"
                                onClick={handleOpeneModel}
                              />
                              <p className="text-[#FC0005] text-[12px] font-semibold">
                                Cancel Order
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex mt-2 justify-between items-center">
                        <p className="text-[14px] text-[#777777] w-[35%]  font-medium">
                          Price: $567.00
                        </p>
                        <div className=" justify-between items-center  mt-2 flex ">
                          <button
                            className=" bg-[#FFFAF4] outline-[2px] outline-[#F69B26] outline-dashed  rounded-lg mr-3  h-[30px] w-[85px] text-[10px] font-medium text-[#F69B26]"
                            onClick={handleButtonClick}
                          >
                            Order Tracking
                          </button>
                          <button className="bg-[#00F7630F]  rounded-lg h-[30px]  outline-[2px] outline-[#26F63B] outline-dashed   w-[85px] text-[10px] font-medium text-[#07D459]">
                            In Progress
                          </button>
                        </div>
                      </div>
                    </div>
                    {isDivVisible && (
                      <>
                        <div className="mt-4">
                          <p className="text-[16px] font-semibold">
                            Delivery Details
                          </p>
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
                          <p className="text-[16px] font-semibold">
                            Delivery Details
                          </p>
                        </div>
                        <div className="lg:flex  sm:hidden md:hidden hidden  gap-8 mt-5">
                          <div className="flex items-center gap-4 lg:w-auto w-[100%] sm: w-[100%] md: w-[100%]">
                            <Image
                              src={AAA}
                              alt=""
                              className="w-[32px] h-[32px]"
                            />
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
                            <Image
                              src={BBB}
                              alt=""
                              className="w-[32px] h-[32px]"
                            />
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
                            <Image
                              src={CCC}
                              alt=""
                              className="w-[32px] h-[32px]"
                            />
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
                            <Image
                              src={DDD}
                              alt=""
                              className="w-[32px] h-[32px]"
                            />
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
                              <Image
                                src={AAA}
                                alt=""
                                className="w-[32px] h-[32px]"
                              />
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
                              <Image
                                src={BBB}
                                alt=""
                                className="w-[32px] h-[32px]"
                              />
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
                              <Image
                                src={CCC}
                                alt=""
                                className="w-[32px] h-[32px]"
                              />
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
                              <Image
                                src={DDD}
                                alt=""
                                className="w-[32px] h-[32px]"
                              />
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
                          <Image
                            src={Dots}
                            alt=""
                            className="h-[64px] w-[64px]"
                          />

                          <FaCircleCheck className="text-[#E24C4B] h-[105px] mx-[16px] w-[105px]" />
                          <Image
                            src={Dots}
                            alt=""
                            className="h-[64px] w-[64px]"
                          />
                        </div>
                        <p className="text-[24px] mt-10 text-center font-bold text-[#434343]">
                          You Have Successfully purchased Prime Plan. Your order
                          has been successfully cancelled.{" "}
                        </p>
                      </div>
                    </div>
                  </CustomModal>
                </>
              )}
              {activeSectionorder === "Completed" && (
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
                          <Image
                            src={Chair}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        </div>
                        <div className="lg:w-[200px]">
                          <p className="text-[18px] font-medium ">
                            Wear Saka Store{" "}
                          </p>
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
                          <Image
                            src={Chair}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        </div>
                        <div className="lg:w-[200px]">
                          <p className="text-[18px] font-medium ">
                            Wear Saka Store{" "}
                          </p>
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
                          <Image
                            src={Chair}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        </div>
                        <div className="lg:w-[200px]">
                          <p className="text-[18px] font-medium ">
                            Wear Saka Store{" "}
                          </p>
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
                        <p className="text-[40px]  font-medium">
                          Write a Review
                        </p>
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

              {activeSectionorder === "Cancelled" && (
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
                          <Image
                            src={Chair}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        </div>
                        <div>
                          <p className="text-[18px] font-medium">
                            Wear Saka Store{" "}
                          </p>
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
                          <Image
                            src={Chair}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        </div>
                        <div>
                          <p className="text-[18px] font-medium">
                            Wear Saka Store{" "}
                          </p>
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
                          <Image
                            src={Chair}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        </div>
                        <div>
                          <p className="text-[18px] font-medium">
                            Wear Saka Store{" "}
                          </p>
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
          )}
          {activeSection === "Manage Address" && (
            <>
              <div
                style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
                className="rounded-3xl p-[20px] w-full h-auto hover:border-[#F70000] border-[1px] "
              >
                <div className="flex items-center justify-between">
                  <p className="text-[24px] font-medium ">Home</p>
                  <Radio
                    sx={{
                      color: "#F70000",
                      "& .MuiSvgIcon-root": {
                        fontSize: 34,
                      },
                      "&.Mui-checked": {
                        color: "#F70000",
                      },
                    }}
                  />
                </div>
                <div className="flex items-center ">
                  <Image src={Home} alt="" className="w-[50px] h-[50px] mr-4" />
                  <div>
                    <p>
                      <span className="text-[16px] font-semibold ">
                        {" "}
                        James Williams
                      </span>
                      <span className="text-[15px] font-medium text-[#777777] ">
                        (+098766677)
                      </span>
                    </p>
                    <p className="text-[14px] mt-2 font-medium text-[#777777] ">
                      House # H11 Sector 45/A, Road Newyork
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center ">
                    <Image
                      src={Location}
                      alt=""
                      className="w-[18px] h-[23px] mr-2"
                    />
                    <p className="text-[14px] mt-2 font-medium text-[#777777] ">
                      New, York
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <div className="flex items-center justify-center border-[1px] border-[#BABABA] rounded-md w-[35px] h-[35px] mr-3">
                      <FiEdit className="h-[20px] w-[20px] text-[#BABABA]" />
                    </div>
                    <div className="flex items-center justify-center border-[1px] border-[#BABABA] rounded-md w-[35px] h-[35px] ">
                      <MdOutlineDeleteOutline className="h-[20px] w-[20px] text-[#BABABA]" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
                className="rounded-3xl p-[20px] w-full h-auto mt-[20px] hover:border-[#F70000] border-[1px] "
              >
                <div className="flex items-center justify-between">
                  <p className="text-[24px] font-medium ">Appartment</p>
                  <Radio
                    sx={{
                      color: "#F70000",
                      "& .MuiSvgIcon-root": {
                        fontSize: 34,
                      },
                      "&.Mui-checked": {
                        color: "#F70000",
                      },
                    }}
                  />
                </div>
                <div className="flex items-center ">
                  <Image
                    src={Appartment}
                    alt=""
                    className="w-[50px] h-[50px] mr-4"
                  />
                  <div>
                    <p>
                      <span className="text-[16px] font-semibold ">
                        {" "}
                        James Williams
                      </span>
                      <span className="text-[15px] font-medium text-[#777777] ">
                        (+098766677)
                      </span>
                    </p>
                    <p className="text-[14px] mt-2 font-medium text-[#777777] ">
                      House # H11 Sector 45/A, Road Newyork
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center ">
                    <Image
                      src={Location}
                      alt=""
                      className="w-[18px] h-[23px] mr-2"
                    />
                    <p className="text-[14px] mt-2 font-medium text-[#777777] ">
                      New, York
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <div className="flex items-center justify-center border-[1px] border-[#BABABA] rounded-md w-[35px] h-[35px] mr-3">
                      <FiEdit className="h-[20px] w-[20px] text-[#BABABA]" />
                    </div>
                    <div className="flex items-center justify-center border-[1px] border-[#BABABA] rounded-md w-[35px] h-[35px] ">
                      <MdOutlineDeleteOutline className="h-[20px] w-[20px] text-[#BABABA]" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
                className="rounded-3xl p-[20px] w-full mt-[20px] h-auto hover:border-[#F70000] border-[1px] "
              >
                <div className="flex items-center justify-between">
                  <p className="text-[24px] font-medium ">Office</p>
                  <Radio
                    sx={{
                      color: "#F70000",
                      "& .MuiSvgIcon-root": {
                        fontSize: 34,
                      },
                      "&.Mui-checked": {
                        color: "#F70000",
                      },
                    }}
                  />
                </div>
                <div className="flex items-center ">
                  <Image
                    src={Office}
                    alt=""
                    className="w-[50px] h-[50px] mr-4"
                  />
                  <div>
                    <p>
                      <span className="text-[16px] font-semibold ">
                        {" "}
                        James Williams
                      </span>
                      <span className="text-[15px] font-medium text-[#777777] ">
                        (+098766677)
                      </span>
                    </p>
                    <p className="text-[14px] mt-2 font-medium text-[#777777] ">
                      House # H11 Sector 45/A, Road Newyork
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center ">
                    <Image
                      src={Location}
                      alt=""
                      className="w-[18px] h-[23px] mr-2"
                    />
                    <p className="text-[14px] mt-2 font-medium text-[#777777] ">
                      New, York
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <div className="flex items-center justify-center border-[1px] border-[#BABABA] rounded-md w-[35px] h-[35px] mr-3">
                      <FiEdit className="h-[20px] w-[20px] text-[#BABABA]" />
                    </div>
                    <div className="flex items-center justify-center border-[1px] border-[#BABABA] rounded-md w-[35px] h-[35px] ">
                      <MdOutlineDeleteOutline className="h-[20px] w-[20px] text-[#BABABA]" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
                className="rounded-3xl p-[30px] w-full mt-6 "
              >
                <p className="text-[24px] font-semibold">Add New Address</p>
                <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap   items-center gap-4  ">
                  <div className="flex-col mt-[30px] lg:w-[50%] w-[100%] sm:w-[100%] md:w-[100%]">
                    <label className="text-[16px] font-semibold">
                      {" "}
                      First Name *
                    </label>
                    <input
                      placeholder="Enter Name "
                      className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                    />
                  </div>{" "}
                  <div className="flex-col mt-[30px] lg:w-[50%] w-[100%] sm:w-[100%] md:w-[100%]">
                    <label className="text-[16px] font-semibold">
                      {" "}
                      Last Name *
                    </label>
                    <input
                      placeholder="Enter Name "
                      className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex-col mt-[30px]">
                  <label className="text-[16px] font-semibold">
                    Company Name (optional)
                  </label>
                  <input
                    placeholder="Company Name "
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>{" "}
                <div className="flex-col mt-[30px]">
                  <label className="text-[16px] font-semibold">
                    {" "}
                    Country * *
                  </label>
                  <select className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none">
                    <option>Pakistan</option>
                    <option>China</option>
                  </select>
                </div>
                <div className="flex-col mt-[30px]">
                  <label className="text-[16px] font-semibold">
                    Street Address
                  </label>
                  <input
                    placeholder="Address"
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>
                <div className="flex-col mt-[30px]">
                  <label className="text-[16px] font-semibold"> City *</label>
                  <select className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none">
                    <option>Lahore</option>
                    <option>Multan</option>
                  </select>
                </div>
                <div className="flex-col mt-[30px]">
                  <label className="text-[16px] font-semibold">
                    {" "}
                    State * *
                  </label>
                  <select className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none">
                    <option>State *A</option>
                    <option>State *B</option>
                  </select>
                </div>
                <div className="flex-col mt-[30px]">
                  <label className="text-[16px] font-semibold">
                    Zip Code *
                  </label>
                  <input
                    placeholder="Zip Code *"
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>{" "}
                <div className="flex-col mt-[30px]">
                  <label className="text-[16px] font-semibold">
                    Phone Number
                  </label>
                  <input
                    placeholder="Phone Number"
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>{" "}
                <div className="flex-col mt-[30px]">
                  <label className="text-[16px] font-semibold">
                    Email Address
                  </label>
                  <input
                    placeholder="Email Address"
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>{" "}
                <div className=" mt-[30px]">
                  <button className=" bg-[#F70000] rounded-2xl h-[50px]  w-[181px] text-[18px] font-medium text-white">
                    Add Address
                  </button>
                </div>
              </div>
            </>
          )}
          {activeSection === "Payment Method" && (
            <div>
              <div
                style={{ boxShadow: " 0px 4px 29px 0px #0000000A" }}
                className="w-full rounded-3xl border-[1px] border-[#00000014] p-[16px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#191919]">
                    <Image
                      src={PayPal}
                      alt=""
                      className="w-[36px] h-[36px] mr-[20px]"
                    />
                    <p className="text-[16px] font-medium">Paypal</p>
                  </div>
                  <p className="text-[16px] font-medium">Link Account</p>
                </div>
              </div>
              <div
                style={{ boxShadow: " 0px 4px 29px 0px #0000000A" }}
                className="w-full rounded-3xl mt-[16px] border-[1px] border-[#00000014] p-[16px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#191919]">
                    <Image
                      src={Visa}
                      alt=""
                      className="w-[36px] h-[36px] mr-[20px]"
                    />
                    <p className="text-[16px] font-medium">Paypal</p>
                  </div>
                  <p className="text-[16px] font-medium">Link Account</p>
                </div>
              </div>
              <div
                style={{ boxShadow: " 0px 4px 29px 0px #0000000A" }}
                className="w-full rounded-3xl mt-[16px] border-[1px] border-[#00000014] p-[16px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#191919]">
                    <Image
                      src={Google}
                      alt=""
                      className="w-[36px] h-[36px] mr-[20px]"
                    />
                    <p className="text-[16px] font-medium">Paypal</p>
                  </div>
                  <p className="text-[16px] font-medium">Link Account</p>
                </div>
              </div>
              <div
                style={{ boxShadow: " 0px 4px 29px 0px #0000000A" }}
                className="w-full rounded-3xl mt-[16px] border-[1px] border-[#00000014] p-[16px]"
              >
                <div className="flex items-center">
                  <div className="rounded-full border-[0.5px] border-[#00000014] w-[20px] h-[20px]"></div>
                  <Image
                    src={Card}
                    alt=""
                    className="w-[24px] h-[20px] mr-[20px] ml-4"
                  />
                  <p className="text-[16px] font-medium text-[#777777]">
                    Add New Credit/Debit Card
                  </p>
                </div>
                <div className="flex-col mt-[20px]">
                  <label className="text-[16px] font-semibold">
                    {" "}
                    Create New Password *
                  </label>
                  <input
                    placeholder="Enter Password"
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>{" "}
                <div className="flex-col mt-[20px]">
                  <label className="text-[16px] font-semibold">
                    {" "}
                    Create New Password *
                  </label>
                  <input
                    placeholder="Enter Password"
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>
                <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center gap-4">
                  <div className="flex-col mt-[20px] lg:w-[50%] w-[100%] sm:w-[100%] md:w-[100%]">
                    <label className="text-[16px] font-semibold">
                      {" "}
                      Create New Password *
                    </label>
                    <input
                      placeholder="Enter Password"
                      className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                    />
                  </div>
                  <div className="flex-col mt-[20px] lg:w-[50%] w-[100%] sm:w-[100%] md:w-[100%]">
                    <label className="text-[16px] font-semibold">
                      {" "}
                      Create New Password *
                    </label>
                    <input
                      placeholder="Enter Password"
                      className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    sx={{
                      color: "#F70000",
                      "& .MuiSvgIcon-root": {
                        fontSize: 34,
                      },
                      "&.Mui-checked": {
                        color: "#F70000",
                      },
                    }}
                  />
                  <p className="text-[14px] font-medium text-[#777777]">
                    Save card for future payment
                  </p>
                </div>
                <button className=" bg-[#F70000] rounded-full h-[50px] mt-[30px] w-[275px] text-[18px] font-medium text-white">
                  Add Payment
                </button>
              </div>
            </div>
          )}
          {activeSection === "Password Manager" && (
            <div
              style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
              className="rounded-3xl p-[30px] w-full "
            >
              <div className="flex-col">
                <label className="text-[16px] font[semibold"> Password *</label>
                <input
                  placeholder="Enter Password"
                  className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                />
              </div>
              <div className="flex-col mt-[30px]">
                <label className="text-[16px] font-semibold">
                  {" "}
                  New Password *
                </label>
                <input
                  placeholder="Enter Password"
                  className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                />
              </div>
              <div className="flex-col mt-[30px]">
                <label className="text-[16px] font-semibold">
                  {" "}
                  Create New Password *
                </label>
                <input
                  placeholder="Enter Password"
                  className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                />
              </div>
              <button className=" bg-[#F70000] rounded-full h-[50px] mt-[30px] w-[275px] text-[18px] font-medium text-white">
                Update Password
              </button>
            </div>
          )}
          {activeSection === "Logout" && (
            <div>
              <CustomModal showModal={showSendModel}>
                <div className=" w-[400px] p-6">
                  <p className="text-[50px] text-center font-bold text-[#191919]">
                    Logout
                  </p>
                  <p className="text-[24px] text-center font-bold text-[#777777] mt-[16px]">
                    Are you sure you want to log out?
                  </p>
                  <div className="flex justify-center">
                    <button
                      className=" bg-[#F70000] rounded-full h-[50px] mt-[24px] w-[275px] text-[18px] font-medium text-white"
                      onClick={handleCloseModel}
                    >
                      Yes, Logout
                    </button>
                  </div>
                </div>
              </CustomModal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
