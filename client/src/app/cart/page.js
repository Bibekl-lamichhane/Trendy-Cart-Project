"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { removeFromCart } from "@/redux/reducerSlices/productSlice";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.product);
  return (
    <>
      <NavBar />
      <Link href="/products">
        <IoReturnUpBackOutline size={28} className="m-8" />
      </Link>
      <div>
        <p className="text-3xl text-orange-500 font-bold m-10 ">
          Check your Cart :
        </p>
        <div className="shadow-sm ">
          <p>
            {cartItems.length > 0
              ? cartItems.map((item) => {
                  return (
                    <div className="p-2 m-4 shadow-md flex justify-around">
                      <div>Images</div>
                      <div>
                        <div>
                          <span className="mx-4">Product Name</span>
                          <span>{item.productName}</span>
                        </div>
                        <div>
                          <span className="mx-4">Product Price </span>
                          <span>{item.productPrice}</span>
                        </div>
                        <Button
                          onClick={() => dispatch(removeFromCart(item._id))}
                          className="text-sm bg-transparent border-2 px-1 py-0 ml-20 my-2"
                        >
                          Remove
                          <MdDelete />
                        </Button>
                      </div>
                    </div>
                  );
                })
              : "No Cart Items"}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
