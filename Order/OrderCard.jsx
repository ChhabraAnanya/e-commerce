import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/account/order/${5}")}
      className="p-5 shadow-md shadow-black hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://image.hm.com/assets/hm/6c/34/6c34afb3ae99fad0ebcfefd0695734cfd93e5d31.jpg?imwidth=396"
              alt=""
            />

            <div className="ml-5 space-y-2">
              <p>Men's Graphic T-Shirt</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: White</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>£19.99</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On August 05</span>
              </p>

              <p>Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on August 20</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
