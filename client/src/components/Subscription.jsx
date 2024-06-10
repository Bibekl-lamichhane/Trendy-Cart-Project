import React from "react";

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

      <span className="flex flex-col text-white relative  ">
        <h2 className="text-2xl my-8 text-center">
          Sign Up & Subscribe To Our Newsletter
        </h2>

        <label className="input input-bordered flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70  text-slate-700"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>

          <input
            type="text"
            className="grow text-gray-800 "
            placeholder="Put Your Email"
          />
          <button className="btn relative  text-white bg-orange-500 hover:bg-orange-600 border rounded-xl ml-1/2 left-[17px]">
            Subscribe
          </button>
        </label>
      </span>
    </div>
  );
};

export default Suscribtion;
