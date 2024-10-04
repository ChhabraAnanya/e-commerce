import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button, Divider } from "@mui/material";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <Divider />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>£22.99</span>
                </div>

                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">-£5.00</span>
                </div>

                <div className="flex justify-between pt-3 text-black">
                  <span>Tax</span>
                  <span>£2.00</span>
                </div>

                <div className="flex justify-between pt-3 font-bold">
                  <span>Total</span>
                  <span className="text-green-600">£19.99</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
