"use client";
import NavBar from "@/components/Navbar";
import RatingStars from "@/components/RatingStars";
import { addtoCart } from "@/redux/reducerSlices/productSlice";
import { Button } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const [productDetails, setproductDetails] = useState([]);
  useEffect(() => {
    if (params.id) {
      fetchProductDetails();
    }
  }, []);
  const dispatch = useDispatch();
  const fetchProductDetails = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/products/${params.id}`
    );
    setproductDetails(data);
  };

  return (
    <>
      <NavBar />
      <Link href="/products">
        <IoReturnUpBackOutline size={28} className="m-8" />
      </Link>
      <div className="flex m-5">
        <div className="w-1/2">
          <img
            src={`${productDetails.productImage} `}
            alt={`${productDetails.productName}`}
          />
        </div>
        <div className="mt-20">
          <div className="flex-col space-y-4">
            <div>
              <span className="text-2xl font-bold text-orange-500 mr-3">
                Product Name :
              </span>
              <span className="text-2xl font-bold">
                {productDetails?.productName}
              </span>
            </div>
            <div>
              <span className="text-xl font-bold text-orange-500 mr-3">
                Category :
              </span>
              <span className="text-xl font-bold">
                {productDetails?.productCategory}
              </span>
            </div>
            <div>
              <span className="text-xl font-bold text-orange-500 mr-3">
                Price :
              </span>
              <span className="text-xl font-bold">
                NRS. {productDetails?.productPrice}
              </span>
            </div>
            <RatingStars />
          </div>
          <div className="flex gap-3 my-10">
            <Button className="flex  text-[12px] bg-transparent border-2 px-2 py-1 hover:bg-orange-500 hover:text-white">
              Buy Now
              <GiTakeMyMoney size={20} />
            </Button>
            <Button
              onClick={() => dispatch(addtoCart(productDetails))}
              className="flex text-[12px hover:bg-orange-500 hover:text-white bg-transparent border-2"
            >
              Add to Cart
              <AiOutlineShoppingCart size={20} />
            </Button>
          </div>
          <div>
            <span className="text-xl font-bold text-orange-500 mr-3">
              Description of Product :
            </span>
            <p className="text-sm font-bold">
              {productDetails?.productDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
