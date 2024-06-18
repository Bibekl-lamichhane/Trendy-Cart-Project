import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container   py-2 md:py-10 mx-auto md:px-20 px-4 flex flex-col md:flex-row lg:pt-40">
        <div className=" w-full order-2 md:order-1 md:w-1/2  md:mt-8  lg:ml:10">
          <div className="space-y-4  ">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to <p className="text-orange-500">Trendy</p>
              <span className="text-blue-500">Cart</span>
            </h1>

            <p className="text-sm md:text-xl">
              Discover Endless Possibilities and Unbeatable Deals in Our Vast
              Collection!
            </p>
          </div>

          <Link href="/aboutus">
            <button className="bg-orange-400 px-4 py-2 mt-4 rounded-2xl text-white   font-bold hover:bg-orange-500 focus:ring-4 focus:bg-orange-500 text-sm md:text-2xl">
              Learn more
            </button>
          </Link>
        </div>
        <div className="flex order-1 w-full mt-10  md:w-1/2">
          <img
            src="/pngwing.com.png"
            className=" mx-auto w-[250px] h-[220px] md:w-[350px] md:h-[300px] lg:w-[460px] lg:h-[420px] items-center "
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
