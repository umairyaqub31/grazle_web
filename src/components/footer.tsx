import React from "react";
import Image from "next/image";
import logo from "@/assets/Grazle Logo.png";
import Instagram from "@/assets/Instagram.png";
import Dribbble from "@/assets/Dribbble.png";
import Twitter from "@/assets/Twitter.png";
import Youtube from "@/assets/Youtube.png";
import Email from "@/assets/email-icon.png";
import Location from "@/assets/location-icon.png";
import Phone from "@/assets/phone-icon.png";
export default function Footer() {
  return (
    <>
      <div className="lg:px-[150px] md:px-[60px] px-[16px] py-[63px] bg-[#F8F8F8] flex flex-col lg:flex-row items-start lg:items-start justify-between">
        <div className="w-full lg:w-[196px] mb-[32px] lg:mb-0 text-center lg:text-left">
          <Image
            src={logo}
            alt=""
            className="w-[120px] h-[70px] mx-auto lg:mx-0"
          />
          <div className="flex items-center justify-center lg:justify-start mt-[40px]">
            <Image
              src={Instagram}
              alt=""
              className="w-[32px] h-[32px] mx-2 lg:mx-0"
            />
            <Image
              src={Dribbble}
              alt=""
              className="w-[32px] h-[32px] mx-2 lg:mx-0"
            />
            <Image
              src={Twitter}
              alt=""
              className="w-[32px] h-[32px] mx-2 lg:mx-0"
            />
            <Image
              src={Youtube}
              alt=""
              className="w-[32px] h-[32px] mx-2 lg:mx-0"
            />
          </div>
        </div>
        <div className="w-full lg:w-[130px] text-[#393A44] mb-[32px] lg:mb-0 text-center lg:text-left">
          <p className="text-[20px] font-bold">Product</p>
          <p className="text-[14px] font-normal mt-[16px]">Overview</p>
          <div className="flex items-center justify-center lg:justify-start mt-[12px]">
            <p className="text-[14px] font-normal">Features</p>
            <p className="text-[14px] font-bold ml-[12px] text-[#2EC5CE]">
              New
            </p>
          </div>
          <p className="text-[14px] font-normal mt-[12px]">Tutorials</p>
          <p className="text-[14px] font-normal mt-[12px]">Pricing</p>
          <p className="text-[14px] font-normal mt-[12px]">Releases</p>
        </div>
        <div className="w-full lg:w-[130px] text-[#393A44] mb-[32px] lg:mb-0 text-center lg:text-left">
          <p className="text-[20px] font-bold">Company</p>
          <p className="text-[14px] font-normal mt-[16px]">About</p>
          <p className="text-[14px] font-normal mt-[12px]">Press</p>
          <p className="text-[14px] font-normal mt-[12px]">Careers</p>
          <p className="text-[14px] font-normal mt-[12px]">Contact</p>
          <p className="text-[14px] font-normal mt-[12px]">Partners</p>
        </div>
        <div className="w-full lg:w-[130px] text-[#393A44] mb-[32px] lg:mb-0 text-center lg:text-left">
          <p className="text-[20px] font-bold">Support</p>
          <p className="text-[14px] font-normal mt-[16px]">Help Center</p>
          <p className="text-[14px] font-normal mt-[12px]">Safety Center</p>
          <p className="text-[14px] font-normal mt-[12px]">Legal</p>
          <p className="text-[14px] font-normal mt-[12px]">Privacy policy</p>
          <p className="text-[14px] font-normal mt-[12px]">Status</p>
        </div>
        <div className="w-full lg:w-[130px] text-[#393A44] mb-[32px] lg:mb-0 text-center lg:text-left">
          <p className="text-[20px] font-bold">Legal</p>
          <p className="text-[14px] font-normal mt-[16px]">Cookies Policy</p>
          <p className="text-[14px] font-normal mt-[12px]">Privacy Policy</p>
          <p className="text-[14px] font-normal mt-[12px]">Terms of Service</p>
          <p className="text-[14px] font-normal mt-[12px]">Law Enforcement</p>
          <p className="text-[14px] font-normal mt-[12px]">Status</p>
        </div>
        <div className="w-full lg:w-[130px] text-[#393A44] mb-[32px] lg:mb-0 text-center lg:text-left">
          <p className="text-[20px] font-bold">Follow us</p>
          <p className="text-[14px] font-normal mt-[16px]">Facebook</p>
          <p className="text-[14px] font-normal mt-[12px]">Twitter</p>
          <p className="text-[14px] font-normal mt-[12px]">Dribbble</p>
          <p className="text-[14px] font-normal mt-[12px]">Instagram</p>
          <p className="text-[14px] font-normal mt-[12px]">LinkedIn</p>
        </div>
        <div className="w-full lg:w-[161px] text-[#393A44] text-center lg:text-left">
          <p className="text-[20px] font-bold">Reach us</p>
          <div className="flex items-center justify-center lg:justify-start mt-[26px]">
            <Image src={Email} alt="" className="w-[32px] h-[32px] mr-[8px]" />
            <p className="text-[14px] font-normal">hello@landify.co</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start mt-[26px]">
            <Image src={Phone} alt="" className="w-[32px] h-[32px] mr-[8px]" />
            <p className="text-[14px] font-normal">hello@landify.co</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start mt-[26px]">
            <Image
              src={Location}
              alt=""
              className="w-[32px] h-[32px] mr-[8px]"
            />
            <p className="text-[14px] font-normal">hello@landify.co</p>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}
