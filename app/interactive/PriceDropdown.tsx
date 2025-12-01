"use client";

import { useState } from "react";

type PlanId = "starter" | "growth" | "scaling" | "enterprise";

const PLANS = [
  {
    id: "starter" as PlanId,
    name: "Starter",
    range: "0 - 25 orders/month",
    price: "£69 per/month",
    blurb:
      "Perfect for microbrands testing the market. Full issue handling, customer updates, and courier escalation included.",
  },
  {
    id: "growth" as PlanId,
    name: "Growth",
    range: "25 - 60 orders/month",
    price: "£139 per/month",
    blurb:
      "For growing brands that need consistent support as order volume increases and shipping complexity creeps in.",
  },
  {
    id: "scaling" as PlanId,
    name: "Scaling",
    range: "60 - 120 orders/month",
    price: "£249 per/month",
    blurb:
      "Ideal for brands scaling aggressively. Priority handling, faster SLAs, and tighter escalation workflows.",
  },
  {
    id: "enterprise" as PlanId,
    name: "Enterprise",
    range: "Custom orders/month",
    price: "Custom pricing",
    blurb:
      "For high-volume operations needing fully managed shipping support, reporting, and tailored playbooks.",
  },
];

export default function PriceDropdown() {
  const [open, setOpen] = useState<PlanId | null>("starter");

  return (
    <div className="relative w-full mx-auto space-y-4 md:space-y-8 lg:space-y-9 text-white">
      {PLANS.map((plan) => {
        const isOpen = open === plan.id;

        return (
          <div
            key={plan.id}
            className="w-full rounded-xl lg:rounded-2xl bg-black/4 backdrop-blur-xl border border-white/60 md:border-white transition-all duration-300 overflow-hidden"
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
                      lg:w-[100px] lg:h-[100px] /* original size on desktop */
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
              className={`transition-all duration-300 ${isOpen
                  ? "max-h-[400px] opacity-100 py-3 px-4 sm:px-6 lg:py-4 lg:px-35"
                  : "max-h-0 opacity-0 px-4 sm:px-6 lg:px-35"
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
