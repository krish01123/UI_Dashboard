"use client";

interface StepperProps {
  currentStep: number;
}

const steps = [
  {
    id: 1,
    title: "Cart",
  },
  {
    id: 2,
    title: "Billing & address",
  },
  {
    id: 3,
    title: "Payment",
  },
];

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="w-full px-2 sm:px-4 md:px-8">
      <div className="relative flex items-start justify-between">
        <div className="absolute left-0 right-0 top-4 h-[2px] bg-gray-200" />

        <div
          className="absolute left-0 top-4 h-[2px] bg-[#5B7CFA] transition-all duration-500"
          style={{
            width:
              currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%",
          }}
        />

        {steps.map((step) => {
          const active = currentStep >= step.id;

          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-1 flex-col items-center"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                  active ? "bg-[#5B7CFA] text-white" : "bg-gray-500 text-white"
                }`}
              >
                {step.id}
              </div>

              <p
                className={`mt-3 text-center text-[11px] sm:text-xs md:text-sm ${
                  active ? "text-gray-700" : "text-gray-500"
                }`}
              >
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
