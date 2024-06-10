"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { products } from "./data";

export default function SelectCategoryList() {
  return (
    <div className="flex  flex-wrap md:flex-nowrap gap-4 mt-0 relative bottom-6">
      <Select
        label="Select an product"
        className="max-w-xs text-xs w-44 h-[4px] mx-2"
      >
        {products.map((product) => (
          <SelectItem key={product.key}>{product.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
