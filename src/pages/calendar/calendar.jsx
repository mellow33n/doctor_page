import * as React from "react";

import { useNavigate } from "react-router";

import { useForm, FormProvider } from "react-hook-form";

import PickDay from "./pickDay";

export default function Calendar() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [currentStep, setCurrentStep] = React.useState(0);
  const steps = [<PickDay props={{control, errors}}/>];

  const onSubmit = (data) => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form data:", data);
    }
  };

  return (
    <FormProvider >
      <form onSubmit={handleSubmit(onSubmit)}>
        {steps[currentStep]}
        <div className="btn-group">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </button>
          )}
          <button type="submit">
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
