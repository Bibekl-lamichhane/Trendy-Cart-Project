"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { removefromCart } from "@/redux/reducerSlices/productSlice";
import { Button } from "@nextui-org/react";
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
          Check your Cart :{JSON.stringify(cartItems)}
        </p>
        <div className="shadow-sm ">
          <p>
            {cartItems.length > 0 ? (
              <div>
                {cartItems.map((item) => {
                  return (
                    <div className="mx-10  shadow-lg  rounded-2xl p-10  flex items-center justify-around">
                      <div>
                        {/* <img
                          src={`${item.productImage}`}
                          alt={`${item.productName}`}
                          width={180}
                          height={100}
                        /> */}
                      </div>
                      <div>
                        <p className="my-2">
                          <span>Product Name :</span>
                          <span>{item.productName}</span>
                        </p>
                        <p className="my-2">
                          <span>Price</span>
                          <span>{item.productPrice}</span>
                        </p>
                        <Button
                          onClick={() => dispatch(removefromCart(item._id))}
                          className="bg-transparent border-2"
                        >
                          Delete Item
                          <MdDelete size={20} />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              "No items in your cart"
            )}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
