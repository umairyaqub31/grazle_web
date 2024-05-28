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
import { MdOutlineDeleteOutline } from "react-icons/md";
import { LiaUserSlashSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";

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
  return (
    <div className="mx-[150px] my-[80px]">
      <div className="flex items-start gap-6 h-auto">
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="rounded-3xl p-[30px] w-[23%] h-[454px]"
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
        <div className="rounded-3xl  w-[77%] min-h-[454px] max-h-auto">
          {activeSection === "Personal Info" && (
            <div
              style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
              className="rounded-3xl p-[30px] w-full "
            >
              <Avatar className="w-[80px] h-[80px]" />
              <div className="flex items-center gap-4  ">
                <div className="flex-col mt-[30px] w-[50%]">
                  <label className="text-[16px] font-semibold">
                    {" "}
                    First Name *
                  </label>
                  <input
                    placeholder="Enter Name "
                    className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                  />
                </div>{" "}
                <div className="flex-col mt-[30px] w-[50%]">
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
              <div className="flex items-center justify-between mt-[30px]">
                <button className=" bg-[#F70000] rounded-2xl h-[50px]  w-[181px] text-[18px] font-medium text-white">
                  Update Change
                </button>
                <div className="flex items-center">
                  <MdOutlineDeleteOutline
                    className="text-[#F70000] text-[28px] mr-[16px]"
                    onClick={handleOpenModelDelete}
                  />
                  <p className="text-[#F70000] text-[16px] font-semibold mr-[16px]">
                    Delete Account
                  </p>

                  <LiaUserSlashSolid className="text-[#777777] text-[28px] mr-[16px]" />
                  <p className="text-[#777777] text-[16px] font-semibold mr-[16px]">
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
            <div>
              <div className="flex justify-between items-center">
                <p className="text-[18px] font-bold">Orders (2)</p>
                <div className="flex items-center">
                  <p className="text-[18px] ">Sort by:</p>
                  <select className="ml-2 text-[18px]  focus:outline-none">
                    <option>All</option>
                    <option>All</option>
                  </select>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
                className="rounded-3xl mt-[24px]  w-full "
              >
                <div className="bg-[#FFBA35] h-[80px] flex items-center justify-between rounded-t-3xl px-8">
                  <div>
                    <p className="text-[#777777] text-[16px] font-medium">
                      Order ID
                    </p>

                    <p className="text-[#434343] text-[24px] font-medium">
                      #SHGH5577HHH
                    </p>
                  </div>
                  <div>
                    <p className="text-[#777777] text-[16px] font-medium">
                      Payment Method
                    </p>

                    <p className="text-[#434343] text-[24px] font-medium">
                      PayPal
                    </p>
                  </div>
                  <div>
                    <p className="text-[#777777] text-[16px] font-medium">
                      Transacton ID
                    </p>

                    <p className="text-[#434343] text-[24px] font-medium">
                      TR67777SSE
                    </p>
                  </div>
                  <div>
                    <p className="text-[#777777] text-[16px] font-medium">
                      Estimated Delivery Date
                    </p>

                    <p className="text-[#434343] text-[24px] font-medium">
                      24 April 2024
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="border-b-[1px] border-[#77777729] pb-4 flex items-center">
                    <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                      <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                    </div>
                    <div>
                      <p className="text-[20px] font-semibold text-[#434343]">
                        Wooden Sofa Chair
                      </p>
                      <p className="text-[16px] mt-2 font-semibold text-[#777777]">
                        Color - Graey
                      </p>
                    </div>
                  </div>
                  <div className="border-b-[1px] border-[#77777729] py-4 flex items-center">
                    <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                      <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                    </div>
                    <div>
                      <p className="text-[20px] font-semibold text-[#434343]">
                        Wooden Sofa Chair
                      </p>
                      <p className="text-[16px] mt-2 font-semibold text-[#777777]">
                        Color - Graey
                      </p>
                    </div>
                  </div>
                  <div className="border-b-[1px] border-[#77777729] py-4 flex items-center">
                    <div className="h-[100px] bg-[#F700000D] flex items-center justify-center w-[100px] rounded-2xl mr-5">
                      <Image src={Chair} alt="" className="w-[60px] h-[60px]" />
                    </div>
                    <div>
                      <p className="text-[20px] font-semibold text-[#434343]">
                        Wooden Sofa Chair
                      </p>
                      <p className="text-[16px] mt-2 font-semibold text-[#777777]">
                        Color - Graey
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 ">
                    <button className="mr-4 bg-[#FFA31A1A] border-[1px] border-[#F70000] rounded-full h-[50px]  w-[137px] text-[18px] font-medium text-[#F70000]">
                      Accepted
                    </button>
                    <p className="text-[20px] font-semibold text-[#434343]">
                      Your order has been accepted
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8 ">
                    <div className="flex items-center ">
                      <button className="mr-4 bg-[#F70000] border-[1px] border-[#F70000] rounded-full h-[50px]  w-[137px] text-[18px] font-medium text-white">
                        Track Order
                      </button>
                      <button
                        className="mr-4 bg-white border-[1px] border-[#000000] rounded-full h-[50px]  w-[137px] text-[18px] font-medium text-[#777777]
]"
                      >
                        Invoice
                      </button>
                    </div>
                    <p className="text-[18px] font-semibold text-[#F70000]">
                      Cancel order
                    </p>
                  </div>
                </div>
              </div>
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
                <div className="flex items-center gap-4  ">
                  <div className="flex-col mt-[30px] w-[50%]">
                    <label className="text-[16px] font-semibold">
                      {" "}
                      First Name *
                    </label>
                    <input
                      placeholder="Enter Name "
                      className="border-[1px] mt-[9px] border-[#7777777]  w-full rounded-md h-[50px] p-3 focus:outline-none"
                    />
                  </div>{" "}
                  <div className="flex-col mt-[30px] w-[50%]">
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
                <div className="flex items-center gap-4">
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
