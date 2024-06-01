"use client";
import React, { useState } from "react";
import Image from "next/image";
import register from "@/assets/girl-shopping-online-with-credit-card-3d-character-illustration-png 1.png";
import logo from "@/assets/Grazle Logo.png";
import { Avatar, Checkbox, Select } from "@mui/material";
import CustomStepper from "@/components/Stepper";
const steps = [
  {
    id: "01",
    lable: "Personal Details",
  },
  {
    id: "02",
    lable: "Social",
  },
  {
    id: "03",
    lable: "Bank Details",
  },
];
export default function RegisterSeller() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [screenName, setScreenName] = useState("Personal Details");
  const [selectedStep, setSelectedStep] = useState(0);
  console.log("screenName....", screenName);

  const handleClickNext = () => {
    if (screenName == "Personal Details") {
      setScreenName("Store Details");
    }

    if (screenName == "Store Details") {
      setScreenName("Bank Details");
    }

    if (selectedStep < 2) {
      setSelectedStep(selectedStep + 1);
    }
  };
  return (
    <div className="w-[100%] mb-10 h-auto flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center lg:p-[50px] p-[10px] sm:p-[10px] md:p-[10px] ">
      <div
        style={{
          background:
            "linear-gradient(162.65deg, #FF781E 1.87%, #FDC197 88.1%)",
        }}
        className="lg:w-[50%] w-[100%] lg:block flex flex-col sm:flex-col  sm:w-[100%] md:w-[100%] lg:h-[100vh] sm:h-[90vh] h-[60vh] text-white relative lg:rounded-[60px] rounded-[20px] sm:rounded-[20px] px-[40px] py-[50px] mb-[50px] "
      >
        <p className="lg:text-[40px] text-[24px] sm:text-[24px]  md:text-[24px]  font-semibold">
          Discover endless possibilities
        </p>
        <div className="lg:w-[60%] w-[100%] sm:w-[100%]">
          <p className="lg:text-[60px] text-[20px] sm:text-[20px]  md:text-[232px]  font-bold  ">
            Explore, buy, and sell with our vibrant maketplace
          </p>
        </div>

        <Image
          src={register}
          alt=""
          className="w-[100%] top-[100px] absolute right-[30px] lg:h-[670px] h-[350px] sm:h-[800px]"
        />
      </div>
      <div className="lg:w-[50%] w-[100%] sm:w-[100%] md:w-[100%]  h-auto lg:pl-[50px] lg:m-0 m-3 lg:pb-[50px] ">
        <div className="flex flex-col justify-center items-center ">
          <Image src={logo} alt="" className="w-[170px] h-[100px]" />
          <p className="mt-6 lg:text-[32px] text-[20px] sm:text-[20px] font-semibold">
            Become a Seller!
          </p>

          <div className="w-[100%] mt-4">
            <CustomStepper steps={steps} selectedStep={selectedStep} />
          </div>
          <div className="w-[100%]">
            {screenName == "Personal Details" && (
              <div>
                <div className=" mt-[40px] w-full">
                  <input
                    className="bg-[#F5F7F9] w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                    placeholder="Full NAME"
                  />
                </div>
                <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center lg:gap-4">
                  <div className=" mt-[20px] w-full">
                    <input
                      className="bg-[#F5F7F9] w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className=" mt-[20px] w-full">
                    <input
                      className="bg-[#F5F7F9] w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                      placeholder="Contact Number"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center lg:gap-4">
                  <div className=" mt-[20px] w-full">
                    <select className="bg-[#F5F7F9] w-full rounded-md h-[50px] p-3 focus:outline-none text-[#777777]">
                      <option value="0">City</option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                    </select>
                  </div>
                  <div className=" mt-[20px] w-full">
                    <select className="bg-[#F5F7F9] w-full rounded-md h-[50px] p-3 focus:outline-none text-[#777777]">
                      <option value="0">State</option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                    </select>
                  </div>
                </div>
                <div className=" mt-[20px] w-full">
                  <input
                    className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                    placeholder="Address"
                  />
                </div>
                <div className=" mt-[20px] w-full">
                  <input
                    className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                    placeholder="Pin Code"
                  />
                </div>
                <div className=" mt-[20px] w-full">
                  <textarea
                    className="bg-[#F5F7F9]  w-full rounded-md h-[100px] resize-none p-3 focus:outline-none placeholder:text-[#777777]"
                    placeholder="About"
                  />
                </div>
                <div className="flex items-center mt-4">
                  <Checkbox
                    sx={{
                      color: "#F70000",
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                      },
                      "&.Mui-checked": {
                        color: "#F70000",
                      },
                    }}
                  />
                  <p className="text-black font-normal lg:text-[16px] text-[11px] sm:text-[11px]   ">
                    By Clicking i agree all terms of services and Privacy &
                    Policy.
                  </p>
                </div>
              </div>
            )}
            {screenName == "Store Details" && (
              <div className="mt-5">
                <div className="flex justify-center">
                  <Avatar className="h-[80px] w-[80px]" />
                </div>
                <div>
                  <div className=" mt-[20px] w-full">
                    <input
                      className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                      placeholder="Store Name"
                    />
                  </div>
                  <div className=" mt-[20px] w-full">
                    <input
                      className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                      placeholder="Store Url"
                    />
                  </div>
                  <div className="lg:flex-nowrap flex flex-wrap sm:flex-wrap md:flex-wrap items-center gap-6">
                    <div className=" mt-[20px] w-full">
                      <input
                        className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                        placeholder="Gst no. (optional)"
                      />
                    </div>
                    <div className=" mt-[20px] w-full">
                      <input
                        className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                        placeholder="PAN no. (optional)"
                      />
                    </div>
                  </div>
                  <div className=" mt-[20px] w-full">
                    <textarea
                      className="bg-[#F5F7F9]  w-full rounded-md h-[100px] resize-none p-3 focus:outline-none placeholder:text-[#777777]"
                      placeholder="Description"
                    />
                  </div>
                </div>
              </div>
            )}

            {screenName == "Bank Details" && (
              <div className="mt-10">
                <div className=" mt-[20px] w-full">
                  <input
                    className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                    placeholder="Account Number (optional)"
                  />
                </div>
                <div className=" mt-[20px] w-full">
                  <input
                    className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                    placeholder="Account Name (optional)"
                  />
                </div>
                <div className=" mt-[20px] w-full">
                  <input
                    className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                    placeholder="Bank Code (optional)"
                  />
                </div>
                <div className=" mt-[20px] w-full">
                  <input
                    className="bg-[#F5F7F9]  w-full rounded-md h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                    placeholder="Bank Name (optional)"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          className=" bg-[#F70000] mb-4 rounded-xl h-[50px] mt-[50px] w-[100%] text-[18px] font-medium text-white"
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
