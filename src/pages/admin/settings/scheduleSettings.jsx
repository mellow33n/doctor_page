import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import FirstStep from "./schedule_pages/firstStep";
import SecondStep from "./schedule_pages/secondStep";

export default function ScheduleSettings() {
  const { handleSubmit } = useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [<FirstStep />, <SecondStep />];

  const onSubmit = (data) => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form data:", data);
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
        <h3>Форма настройки графіку прийому пацієнтів</h3>
        {steps[currentStep]}
        <div className="btn-group">
          {currentStep > 0 && (
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Попередня
            </Button>
          )}
          <Button type="submit" variant="contained" color="primary">
            {currentStep === steps.length - 1 ? "Відправити" : "Наступна"}
          </Button>
        </div>
      </form>
  );
}
