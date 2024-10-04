import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);

  // Get the step from the query params and convert it to a number (default to 0)
  const initialStep = parseInt(querySearch.get("step"), 10) || 0;

  const [activeStep, setActiveStep] = React.useState(initialStep);

  // Update the URL when the activeStep changes
  React.useEffect(() => {
    const currentSearchParams = new URLSearchParams(location.search);
    currentSearchParams.set("step", activeStep.toString());
    navigate(`${location.pathname}?${currentSearchParams.toString()}`, {
      replace: true,
    });
  }, [activeStep, navigate, location.pathname]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
            </Box>

            <div className="mt-10">
              {activeStep === 2 ? <DeliveryAddress /> : <OrderSummary />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
