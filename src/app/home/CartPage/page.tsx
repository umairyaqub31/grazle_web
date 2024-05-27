import React, { useState } from "react";
import { CiSquareCheck } from "react-icons/ci";
import Image from "next/image";
import airpod from "@/assets/airpod.png";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
export default function Cartpage() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="mx-[150px] my-[50px] ">
      <div className="flex items-center">
        <p className="text-[40px] font-semibold mr-3 ">Cart</p>
        <p className="text-[24px] font-medium text-[#777777] ">(3 Products)</p>
      </div>
      <div className="flex  gap-8">
        <div className="w-[70%] h-auto ">
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-[100%] rounded-[20px] p-[20px]  border-[1px] border-[#F70000]"
          >
            <div className="flex items-center">
              <CiSquareCheck className="text-[#F70000] text-[24px] mr-3" />
              <p className="text-[24px] font-normal">Wear Saka Store</p>
            </div>
            <div className="my-5 border-b-[1px] border-[#777777]"></div>
            <div className="w-full rounded-2xl bg-[#FFFAFA] flex justify-between p-3">
              <p className="text-[16px] font-medium text-[#777777]">
                Add More Products
              </p>
              <p className="text-[16px] font-medium text-[#F70000]">+ Add</p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center">
                <CiSquareCheck className="text-[#F70000] text-[32px] mr-3" />
                <Image
                  src={airpod}
                  alt="Airpod"
                  className="rounded-2xl w-[90px] h-[90px] mr-7"
                />{" "}
                <div>
                  <p className="text-[24px] font-medium text-black">
                    Wear Saka Store
                  </p>
                  <div className="my-3 flex items-center">
                    <div className="flex justify-center items-center">
                      <p className="text-[12px] font-medium text-[#F70000] px-3 py-2 mr-3 bg-[#FFFAFA]">
                        10%
                      </p>
                    </div>
                    <p className="line-through text-[16px] font-medium text-[#777777]">
                      Rs 345.000
                    </p>
                  </div>
                  <p className="text-[18px] font-medium">Rs 345.000</p>
                </div>
              </div>

              <div>
                <div className="w-[124px] rounded-full border-[1px] border-[#E6E6E6] p-2 flex items-center justify-between">
                  <div className="w-[34px] h-[34px] rounded-full bg-[#F2F2F2] flex items-center cusor-pointer justify-center">
                    <HiOutlineMinus className="text-[16px] font-bold " />
                  </div>
                  <p className="text-[16px] font-bold ">1</p>
                  <div className="w-[34px] h-[34px] rounded-full bg-[#F2F2F2] flex items-center cusor-pointer justify-center">
                    <HiOutlinePlus className="text-[16px] font-bold " />
                  </div>
                </div>
                <div className="flex justify-end mt-4 gap-4">
                  <div className="w-[43px] h-[43px] bg-[#5EF7000A] rounded-md flex items-center justify-center">
                    <FaRegEdit className="text-[24px] text-[#00F763]" />
                  </div>
                  <div className="w-[43px] h-[43px] bg-[#F700000A] rounded-md flex items-center justify-center">
                    <RiDeleteBin6Fill className="text-[24px] text-[#F70000]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
            className="w-[100%] mt-5 rounded-[20px] p-[20px]  border-[1px] border-[#F70000]"
          >
            <div className="flex items-center">
              <CiSquareCheck className="text-[#F70000] text-[24px] mr-3" />
              <p className="text-[24px] font-normal">Wear Saka Store</p>
            </div>
            <div className="my-5 border-b-[1px] border-[#777777]"></div>
            <div className="w-full rounded-2xl bg-[#FFFAFA] flex justify-between p-3">
              <p className="text-[16px] font-medium text-[#777777]">
                Add More Products
              </p>
              <p className="text-[16px] font-medium text-[#F70000]">+ Add</p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center">
                <CiSquareCheck className="text-[#F70000] text-[32px] mr-3" />
                <Image
                  src={airpod}
                  alt="Airpod"
                  className="rounded-2xl w-[90px] h-[90px] mr-7"
                />{" "}
                <div>
                  <p className="text-[24px] font-medium text-black">
                    Wear Saka Store
                  </p>
                  <div className="my-3 flex items-center">
                    <div className="flex justify-center items-center">
                      <p className="text-[12px] font-medium text-[#F70000] px-3 py-2 mr-3 bg-[#FFFAFA]">
                        10%
                      </p>
                    </div>
                    <p className="line-through text-[16px] font-medium text-[#777777]">
                      Rs 345.000
                    </p>
                  </div>
                  <p className="text-[18px] font-medium">Rs 345.000</p>
                </div>
              </div>

              <div>
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
                <div className="flex justify-end mt-4 gap-4">
                  <div className="w-[43px] h-[43px] bg-[#5EF7000A] rounded-md flex items-center justify-center">
                    <FaRegEdit className="text-[24px] text-[#00F763]" />
                  </div>
                  <div className="w-[43px] h-[43px] bg-[#F700000A] rounded-md flex items-center justify-center">
                    <RiDeleteBin6Fill className="text-[24px] text-[#F70000]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 4px 29px 0px #0000000A" }}
          className="w-[35%] rounded-[20px] p-[20px]"
        >
          <div className="w-[100%] ">
            <p className="text-[16px] font-medium text-[#777777]">
              Have a Coupen
            </p>
            <div className="flex relative">
              <button className="absolute bg-[#FFA31A] right-[10px] top-[23px] rounded-full h-[35px]  w-[70px] text-[12px] font-medium text-white">
                Apply
              </button>
              <input
                className=" w-full rounded-xl h-[50px] p-3 focus:outline-none placeholder:text-[#777777]"
                placeholder="Type Here"
              />
            </div>
          </div>
          <div className="border-b-[1px] mt-10"></div>
          <div className="w-[100%] ">
            <p className="text-[24px] font-medium text-[#777777] mt-6">
              Cart Total
            </p>
            <div className="flex items-center mt-4 justify-between">
              <p className="text-[18px] font-medium text-[#777777] "></p>
              <p className="text-[18px] font-bold text-black ">Cart Total</p>
            </div>
            <div className="flex items-center mt-4 justify-between">
              <p className="text-[18px] font-medium text-[#777777] ">
                Shipping
              </p>
              <p className="text-[18px] font-bold text-black ">Free</p>
            </div>
            <div className="flex items-center mt-4 justify-between">
              <p className="text-[18px] font-medium text-[#777777] ">
                Discount
              </p>
              <p className="text-[18px] font-bold text-black ">$66.00</p>
            </div>
            <div className="flex mt-4 items-center mt-4 justify-between">
              <p className="text-[18px] font-bold text-black ">Cart Total</p>
              <p className="text-[18px] font-bold text-[#777777] ">$66.00</p>
            </div>
            <button className=" bg-[#F70000] rounded-full h-[45px] mt-8  w-[100%] text-[18px] font-medium text-white">
              Continue Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}