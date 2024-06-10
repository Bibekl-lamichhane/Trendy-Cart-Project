"use client";

import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import Link from "next/link";
function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:4001/product");
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 lg:pt-32 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            New Products:
            <span className="text-orange-500"> Are Available</span>
          </h1>
          <p className="mt-12">
            Welcome to our Courses! Dive into our expertly crafted courses
            designed to enhance your knowledge and skills in various literary
            fields. Each course is led by experienced instructors and includes
            comprehensive materials, engaging modules, and practical
            assessments. Whether you're a budding writer, an avid reader, or
            looking to deepen your understanding of literature, our courses
            offer something for everyone. Enroll today and embark on your
            learning journey with us!
          </p>
          <Link to="/">
            <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
          {product.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
