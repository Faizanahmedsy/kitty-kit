"use client";
const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];
import { Button } from "@/components/ui/button";
import { Steps, Step, useStepper } from "@/components/custom-ui/stepper";

export const StepperDemo = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    setStep,
    activeStep,
    isDisabledStep,
    isLastStep,
    isOptionalStep,
  } = useStepper({
    initialStep: 0,
    steps,
  });

  return (
    <>
      <Steps activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step index={index} key={index} {...step}>
            <div className="bg-muted h-40 w-full p-4">
              <p>Step {index + 1} content</p>
            </div>
          </Step>
        ))}
      </Steps>
      <div className="flex items-center justify-end gap-2">
        {activeStep === steps.length ? (
          <>
            <h2>All steps completed!</h2>
            <Button onClick={resetSteps}>Reset</Button>
          </>
        ) : (
          <>
            <Button disabled={isDisabledStep} onClick={prevStep}>
              Prev
            </Button>
            <Button onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};
