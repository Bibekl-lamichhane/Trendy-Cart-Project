"use client";
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

import Card from "./ProductCard";
function BestDeal() {
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:4000/products");
        const data = res.data.filter((data) => data.label === "Best Deal");
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); // Set loading state to false after data is fetched (or on error)
      }
    };
    getProduct();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="  max-w-screen-2xl container mx-auto my-4 md:my-16 ">
        <div className="font-semibold  text-xl text-center mx-4  md:text-3xl md:my-6 ">
          Best Deals
        </div>
        {isLoading ? ( // Show loading state while data is being fetched
          <div className="text-center">Loading Poducts...</div>
        ) : (
          <div>
            <Slider {...settings}>
              {product.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
}
export default BestDeal;
