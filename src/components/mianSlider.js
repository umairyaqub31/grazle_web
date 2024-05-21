import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import logo from "@/assets/BG (1).jpeg";
import bg from "@/assets/2 copy.png";
const responsive = {
  lgdesktop: {
    breakpoint: { max: 3000, min: 1441 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1041 },
    items: 1,
    slidesToSlide: 1,
  },
  Laptop: {
    breakpoint: { max: 1040, min: 769 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 481 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 480, min: 320 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderItems = [
  {
    imageUrl: logo,
    Heading: "Water Fall View",
    text: "Lorem Ipsum is simply dummy text of the printing an...",
  },
  {
    imageUrl: bg,
    Heading: "Swat Kalam",
    text: "Lorem Ipsum is simply dummy text of the printing an...",
  },
  {
    imageUrl: logo,
    Heading: "Malam Jabba",
    text: "Lorem Ipsum is simply dummy text of the printing an...",
  },
];

const MainSlider = () => {
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
        {sliderItems.map((item, index) => (
          <div key={index} style={{ width: "100%" }}>
            <Image src={item.imageUrl} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlider;