import React from "react";
import { Step, StepLabel, Stepper, Box } from "@mui/material";
import styles from "./stepper.module.css";
import commonStyles from "shared/utils/common.module.css";

const steps = [
  {
    id: "1",
    lable: "Lab Info",
  },
  {
    id: "2",
    lable: "Social",
  },
  {
    id: "3",
    lable: "Bank Details",
  },
  {
    id: "4",
    lable: "Verification",
  },
];
interface Props {
  steps: any;
  selectedStep: number;
}
const CustomStepper = (props: Partial<Props>) => {
  const { steps, selectedStep } = props;

  return (
    <Box sx={{ width: "100%", marginLeft: "20px" }}>
      <Stepper
        activeStep={selectedStep}
        sx={{
          "& .MuiStepLabel-label.Mui-completed": {
            color: "#F70000",
            fontWeight: "500",
          },

          "& .MuiStepIcon-root.Mui-completed": {
            color: "#F70000",
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "#F70000",
          },
        }}
        alternativeLabel
      >
        {steps.map((obj: any) => (
          <Step key={obj.id}>
            <StepLabel color="red">{obj.lable}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;
