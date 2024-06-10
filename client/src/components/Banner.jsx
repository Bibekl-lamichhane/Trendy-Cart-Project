import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container  py-10 mx-auto md:px-20 px-4 flex flex-col md:flex-row lg:pt-40">
        <div className=" w-full order-2 md:order-1 md:w-1/2  md:mt-8  lg:ml:10">
          <div className="space-y-8 ">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to <p className="text-orange-500">Trendy</p>
              <span className="text-blue-500">Cart</span>
            </h1>

            <p className="text-sm md:text-xl">
              Discover Endless Possibilities and Unbeatable Deals in Our Vast
              Collection!
            </p>
          </div>

          <Link
            href="/aboutus"
            className=" mt-5 px-2 py-1 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 border rounded-3xl ml-1 md:ml-0"
          >
            Learn More
          </Link>
        </div>
        <div className="flex order-1 w-full mt-20  md:w-1/2">
          <img
            src="/pngwing.com.png"
            className=" mx-auto w-[320px] h-[300px] md:w-[350px] md:h-[300px] lg:w-[460px] lg:h-[420px] items-center "
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
