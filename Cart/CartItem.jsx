import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@headlessui/react";
import { color } from "../Product/FilterData";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://image.hm.com/assets/hm/6c/34/6c34afb3ae99fad0ebcfefd0695734cfd93e5d31.jpg?imwidth=396"
            alt="T-shirt"
          />
        </div>
        <div className="ml--5 space-y-1">
          <p className="font-semibold">Men's Graphic T-Shirt</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">H&M</p>
          <div className="flex space-x-5 items-center text-gray-900 mt-8 pt-6">
            <p className="font-semibold">£19.99</p>
            <p className="opacity-50 line-through">£24.99</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">2 </span>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}> Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
