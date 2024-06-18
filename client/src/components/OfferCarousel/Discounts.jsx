import Link from "next/link";
import React from "react";

const Discounts = ({ DiscountPer, DiscountProductName, DiscountPrice }) => {
  return (
    <div className=" absolute md:bottom-30 md:10 md:bottom-40 md:right-20">
      <div className="my-2 text-xs  md:text-base   md:text-blue-600 lg:base">
        <p>Flat {DiscountPer}% Discount</p>
      </div>
      <div className=" lg:my-4 lg:text-3xl font-extrabold font-mono text-xs  md:text-sm md:text-blue-600 ">
        {DiscountProductName}
      </div>
      <div>
        <span className="text-xs  md:text-sm lg:base my-4 ">From </span>
        <span className=" text-orange-500  font-extrabold text-xs  md:text-sm  md:text-blue-600 lg:text-3xl ">
          ${DiscountPrice}
        </span>
      </div>
      <Link href="/products">
        <button className=" self-center bg-orange-400 px-2 py-1 lg:px-3  lg:py-2 lg:mt-3 rounded-2xl text-white   font-bold hover:bg-orange-500 focus:ring-4 focus:bg-orange-500 text-[6px] lg:text-small">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default Discounts;
