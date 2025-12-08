"use client";

import { useState } from "react";

type PlanId = "core" | "scale" | "pro" | "enterprise";

const PLANS = [
  {
    id: "core" as PlanId,
    name: "Core",
    range: "Up to 50 orders/month",
    price: "£199 per/month",
    blurb:
      "Perfect for serious early stage brands that are shipping internationally who want delivery issues handled quitly and professionally, without losing hours to couriers claims or anxious customers.",
  },
  {
    id: "scale" as PlanId,
    name: "Scale",
    range: "50 - 150 orders/month",
    price: "£349 per/month",
    blurb:
      "For growing brands where shipping problems are now affecting reputation, cashflow and customer trust. We will take full control of post dispatch issues so that your team can stay focused on growth, not operations.",
  },
  {
    id: "pro" as PlanId,
    name: "Pro",
    range: "150 - 300 orders/month",
    price: "£599-£899 per/month",
    blurb:
      "For fast scaling brands where shipping failure can become a high level risk. We take ownership of every case so your time stays focused on growth, not on low return admin.",
  },
  {
    id: "enterprise" as PlanId,
    name: "Enterprise",
    range: "Custom orders/month",
    price: "Custom pricing",
    blurb:
      "For high-volume operations needing fully managed shipping support. All features included as detailed below + custom additions if needed.",
  },
];

export default function PriceDropdown() {
  const [open, setOpen] = useState<PlanId | null>("core");

  return (
    <div className="relative w-full mx-auto space-y-4 md:space-y-8 lg:space-y-9 text-white">
      {PLANS.map((plan) => {
        const isOpen = open === plan.id;

        return (
          <div
            key={plan.id}
            className="
              w-full
              rounded-xl lg:rounded-2xl
              bg-black/4
              backdrop-blur-none md:backdrop-blur-xl
              border border-white/60 md:border-white
              transition-[max-height] duration-300
              overflow-hidden
            "
          >
            {/* clickable header */}
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : plan.id)}
              className="w-full flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3 lg:px-7 lg:py-4 cursor-pointer"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span
                  className={`flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="
                      w-8 h-8
                      sm:w-10 sm:h-10
                      md:w-14 md:h-14
                      lg:w-[100px] lg:h-[100px]
                    "
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="m10 17l5-5m0 0l-5-5"
                    />
                  </svg>
                </span>

                <span className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-bold tracking-[2px]">
                  {plan.name}
                </span>
              </div>

              {/* Range in header only on medium+ screens */}
              <span className="hidden md:inline text-[20px] md:text-[24px] lg:text-[30px] font-semibold text-white/90">
                {plan.range}
              </span>
            </button>

            {/* expanding body *inside* glass panel */}
            <div
              className={`${isOpen
                ? "max-h-[400px] py-3 px-4 sm:px-6 lg:py-4 lg:px-35"
                : "max-h-0 px-4 sm:px-6 lg:px-35"
                }`}
            >
              {/* Range moves into body on small screens */}
              <p className="md:hidden text-[14px] sm:text-[15px] text-white/80 mb-2">
                {plan.range}
              </p>

              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white">
                {plan.blurb}
              </p>

              <p className="mt-2 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-semibold text-white">
                {plan.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
