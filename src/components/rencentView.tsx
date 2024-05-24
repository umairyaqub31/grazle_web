import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import logo from "@/assets/3fed67ae927a54329c0ab8ca6312e3e7.png";
import bg from "@/assets/dbfad4efe8eef812d27afa0fc56306fd.png";
import Star from "@/assets/Star 1.png";
import Cart from "@/assets/CartVector.png";
import Like from "@/assets/Frame 1820551183.png";

interface Props {
  Data: any;
}

const responsive = {
  lgdesktop: {
    breakpoint: { max: 3000, min: 1441 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1041 },
    items: 4,
    slidesToSlide: 1,
  },
  Laptop: {
    breakpoint: { max: 1040, min: 769 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 481 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 480, min: 320 },
    items: 1,
    slidesToSlide: 1,
  },
};

const RecentViewSlider: React.FC<Partial<Props>> = (props) => {
  const { Data } = props;

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        dotListClass="custom-dot-list-style"
      >
        {Data.map((item: any, index: any) => (
          <div
            key={index}
            style={{
              width: "97%",
              boxShadow: "3px 4px 15.6px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="group h-[398px] mt-[24px] rounded-2xl hover:border-[1px] border-[#F70001] hover:h-[450px] relative"
          >
            <Image
              alt=""
              src={item.imageUrl}
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
                {item.Heading}
              </p>
              <div className="flex items-center mt-[16px]">
                <p className="text-[12px] text-[#F69B26]">{item.review}</p>
                <Image alt="" src={Star} className="h-[12px] w-[12px] ml-2" />
              </div>
              <p className="text-[20px] font-semibold mt-[16px]">
                {item.newprice}
              </p>
              <div className="flex items-center mt-[16px]">
                <p className="text-[16px] text-[#909198] line-through font-normal">
                  {item.oldPrice}
                </p>
                <p className="text-[16px] text-[#4FAD2E] ml-[24px] font-semibold">
                  {item.discount}
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
        ))}
      </Carousel>
    </div>
  );
};

export default RecentViewSlider;
