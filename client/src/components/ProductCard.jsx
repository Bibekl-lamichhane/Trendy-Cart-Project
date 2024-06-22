import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/reducerSlices/productSlice";
export default function ProductCard(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const productInfo = props;
  return (
    <Card
      className="w-[280px] h-[400px]"
      shadow="sm"
      isPressable
      onPress={() => router.push("products/" + props.item._id)}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={props.item.productName}
          className="w-full object-cover h-[280px]"
          src={props.item.productImage}
        />
      </CardBody>
      <CardFooter className="flex-col ">
        <div className="w-[100%]">
          <div className="w-[100%] h-[22px] overflow-hidden">
            <p>{props.item.productName}</p>
          </div>
          <div className="flex justify-between text-default-500 m-2">
            <p>NRS.{props.item.productPrice}</p>
            <p className="text-[10px] px-2 py-1  bg-blue-400 rounded-3xl text-white">
              {props.item.label}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button className="flex  text-[12px] bg-transparent border-2 px-2 py-1 hover:bg-orange-500 hover:text-white">
            Buy Now
            <GiTakeMyMoney size={20} />
          </Button>
          <Button
            onClick={() => dispatch(addToCart(productInfo))}
            className="flex text-[12px hover:bg-orange-500 hover:text-white bg-transparent border-2"
          >
            Add to Cart
            <AiOutlineShoppingCart size={20} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
