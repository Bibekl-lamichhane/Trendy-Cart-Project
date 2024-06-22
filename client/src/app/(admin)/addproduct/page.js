"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Input, Radio, RadioGroup } from "@nextui-org/react";

import toast from "react-hot-toast";

const page = () => {
  const productDetails = [
    { name: "productName", label: "Product Name" },
    { name: "productPrice", label: "Product Price" },
    { name: "productDescription", label: "Product Description" },
    { name: "productCategory", label: "Product Category" },
  ];

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productDescription: "",
      productCategory: "",
      productLabel: "Normal",
    },
    onSubmit: (values) => {
      setproductDetails(values);
    },
  });

  const setproductDetails = async (values) => {
    let formData = new FormData();
    formData.append("productName", values.productName);
    formData.append("productPrice", values.productPrice);
    formData.append("productDescription", values.productDescription);
    formData.append("productCategory", values.productCategory);
    formData.append("productLabel", values.productLabel);

    formData.append("productImage", image);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    const response = await fetch(
      "http://localhost:4000/products",
      requestOptions
    );
    const data = await response.json();
    if (data.msg) {
      toast(data.msg);
    }
  };

  const [image, setImage] = useState(null);
  return (
    <form
      className="m-4 flex flex-col border shadow-md rounded-lg p-4"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-3xl font-extrabold text-blue-950 my-3 ">
        Add Product
      </h1>
      {productDetails.map((item) => {
        return (
          <div>
            <label htmlFor={item.name}>{item.label}</label>
            <Input
              id={item.name}
              name={item.name}
              type="text"
              onChange={formik.handleChange}
              value={formik.values[item.name]}
            />
          </div>
        );
      })}

      <input
        className="m-3"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        className="bg-green-500 text-white rounded p-2 my-4 w-[20%]"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default page;
