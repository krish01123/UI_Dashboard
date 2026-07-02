import BillingCard from "@/components/Billing/BillingCard";
import CreditCard from "@/components/Billing/CreditCard";
import InvoiceCard from "@/components/Billing/InvoiceCard";
import PaymentMethod from "@/components/Billing/PaymentMethod";
import { SalaryCard } from "@/components/Billing/SalaryCard";
import TransactionCard from "@/components/Billing/TransactionCard";
import Footer from "@/components/Home/Footer";
import { PageHeader } from "@/components/Home/PageHeader";
import { getBillingDate } from "@/lib/billing";
import { FaPaypal } from "react-icons/fa";

export default async function Billing() {
  const billingUsers = await getBillingDate();
  return (
    <main className="min-h-screen w-full bg-slate-100 p-4 lg:p-6">
      <div className="w-full">
        <PageHeader
          title="Billing"
          items={[{ label: "Pages", href: "/" }, { label: "Billing" }]}
        />
        <div className="w-full">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <CreditCard />
                </div>

                <div className="lg:col-span-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <SalaryCard
                      title="Salary"
                      subtitle="Belong interactive"
                      amount="%2000"
                    />

                    <SalaryCard
                      title="Paypal"
                      subtitle="Freelance Payment"
                      amount="%4550"
                      icon={<FaPaypal className="text-white text-3xl" />}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <PaymentMethod />
              </div>
            </div>
            <div className="lg:col-span-4 self-start">
              <InvoiceCard />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-12">
          <div className="xl:col-span-7">
            <BillingCard users={billingUsers} />
          </div>
          <div className="xl:col-span-5">
            <TransactionCard />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
