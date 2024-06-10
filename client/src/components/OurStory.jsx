import React from "react";

const OurStory = () => {
  return (
    <div className=" mx-3 md:flex justify-around items-center p-2  md:p-10">
      <div className="my-4 md:w-[40rem] md:h-[25rem]  rounded-3xl">
        <img
          src="/White Illustrative Creative Literature Project Presentation.jpg"
          alt="our program"
        />
      </div>
      <div className="md:w-[40rem] md:h-[25rem]  ">
        <div className=" flex-col md:mt-12 md:m-4">
          <div className="text-sm text font-extrabold font-sans md:text-3xl">
            Our Activities
          </div>
          <div className="text-xs items-center  md:text-xl">
            We're excited to announce that Trendy Cart is donating books to
            local orphanages, spreading the joy of reading to children in need.
            Let's inspire young minds and create brighter futures together!
          </div>
          <button className="bg-orange-400 px-4 py-2 mt-4 rounded-2xl text-white   font-bold hover:bg-orange-500 focus:ring-4 focus:bg-orange-500 text-sm md:text-2xl">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
