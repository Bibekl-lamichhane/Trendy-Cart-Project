"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
const page = () => {
  const [productList, setproductList] = useState([]);
  useEffect(() => {
    fetchProductList();
  }, []);
  const fetchProductList = async () => {
    const { data } = await axios.get("http://localhost:4000/products");
    setproductList(data);
  };
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-6 m-7">
        {productList.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default page;
