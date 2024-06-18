import { Input } from "@nextui-org/react";
import React from "react";
import { CiMail } from "react-icons/ci";
const Suscribtion = () => {
  return (
    <div
      className="
      relative
      bg-cover
      bg-center
      bg-no-repeat
      w-full
      h-64
      flex
      items-center
      justify-center
      mb-2
      

    "
      style={{ backgroundImage: `url('/image.jpg')` }}
    >
      {/* Overlay div */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex-col justify-center items-center">
        <div className=" relative text-sm md:text-2xl my-4 text-center text-gray-50 font-mono font-semibold">
          Sign Up & Subscribe To Our Newsletter
        </div>
        <div>
          <Input
            type="email"
            placeholder="you@example.com"
            labelPlacement="outside"
            startContent={
              <CiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className=" flex justify-center px-3  py-2 relative text-white  top-2  ">
          <button className=" self-center bg-orange-400 px-3  py-2 mt-3 rounded-2xl text-white   font-bold hover:bg-orange-500 focus:ring-4 focus:bg-orange-500 text-small md:text-xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suscribtion;
