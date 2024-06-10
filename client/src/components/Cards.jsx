import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 m-3 p-3 ">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure width={200} height={300}>
            <img src={item.image} alt="products" />
          </figure>
          <div className="badge badge-warning text-xs max-h-max mt-3 ml-3">
            {item.label}
          </div>
          <div className="card-body">
            <div>
              <h2 className="card-title  md:text-xl">{item.name}</h2>
              <p className="hidden md:block">{item.category}</p>
            </div>

            <div className="card-actions justify-between">
              <div className="font-semibold  text-orange-600 md:text-3xl">
                ${item.price}
              </div>
              <div className=" text-white cursor-pointer px-2 py-1 rounded-full border-[2px] bg-orange-500 hover:bg-orange-600  duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
