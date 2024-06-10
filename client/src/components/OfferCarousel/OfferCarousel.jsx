"use client";
// components/DemoCarousel.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Discounts from "./Discounts";
import { Carousel } from "react-responsive-carousel";

const OffersCarousel = () => {
  const backgroundDesign =
    "bg-gradient-to-r from-blue-500 to-blue-200  flex items-center pl-8 md:pl-0";
  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay className="bg-slate-300">
      <div className={backgroundDesign}>
        <Discounts
          DiscountPer="40"
          DiscountProductName="X-AGE Wired Earphone XWE05"
          DiscountPrice="150"
        />
        <img
          src="\OfferImages\EarphoneBigpic-removebg-preview.png"
          alt="Image 2"
        />
      </div>
      <div className={backgroundDesign}>
        <img
          src="\OfferImages\Apple-iPhone-15-Probig_pic-removebg-preview.png"
          alt="Image 3"
        />
        <Discounts
          DiscountPer="25"
          DiscountProductName="iPhone-15pro max"
          DiscountPrice="880"
        />
      </div>
      <div className={backgroundDesign}>
        <img src="\OfferImages\rogbig_pic-removebg-preview.png" alt="Image 4" />
        <Discounts
          DiscountPer="45"
          DiscountProductName="ASUS ROG Zephyrus G14"
          DiscountPrice="800"
        />
      </div>
      <div className={backgroundDesign}>
        <img
          src="\OfferImages\dahuwacctv_big-removebg-preview.png"
          alt="Image 1"
          className="relative"
        />
        <Discounts
          DiscountPer="45"
          DiscountProductName="Dahuwa heavyduty"
          DiscountPrice="199"
        />
      </div>
    </Carousel>
  );
};

export default OffersCarousel;
