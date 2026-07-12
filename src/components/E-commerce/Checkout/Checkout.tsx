"use client";

import { useState } from "react";
import Stepper from "./Stepper";
import BillingStep from "./steps/BillingStep";
import PaymentStep from "./steps/PaymentStep";
import CartStep from "./steps/CartStep";

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-100 p-4 lg:p-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow">
        <Stepper currentStep={step} />

        {step === 1 && <CartStep onNext={() => setStep(2)} />}

        {step === 2 && (
          <BillingStep
            onPrevious={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && <PaymentStep onPrevious={() => setStep(2)} />}
      </div>
    </div>
  );
}
