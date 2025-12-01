"use client";

import { useState } from "react";

type FaqId = "q1" | "q2" | "q3" | "q4";

const FAQS: { id: FaqId; question: string; answer: string }[] = [
  {
    id: "q1",
    question: "How do you communicate with my customers?",
    answer:
      "We reply using your branded email or shared inbox. Messages are written as if they came directly from your team — customers never know it’s external.",
  },
  {
    id: "q2",
    question: "Will customers get confused by having two email addresses?",
    answer:
      "No. We work behind a single, clear support address that you control. From the customer’s perspective there is just one place to contact your brand.",
  },
  {
    id: "q3",
    question: "Do you contact couriers on my behalf?",
    answer:
      "Yes. We handle all courier contact, escalations, and follow-ups using your agreed playbooks and policies.",
  },
  {
    id: "q4",
    question: "Do you file claims and chase investigations?",
    answer:
      "Yes. We manage claims and investigations end-to-end, including documentation, deadlines, and chasing outcomes.",
  },
];

export default function FAQDropDown() {
  const [openId, setOpenId] = useState<FaqId | null>("q1");

  return (
    <section className="w-fit max-w-2xl mx-auto lg:mx-0 space-y-4 flex flex-col items-center lg:items-start sm:space-y-5">
      <div className="flex items-center gap-2">
        <span className="text-lg sm:text-xl">📚</span>
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-900">
          Service and Operations
        </h2>
      </div>

      <div className="space-y-3.5">
        {FAQS.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="
    pl-0 sm:pl-6 lg:pl-12.5
    mx-auto
  "
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center gap-3 sm:gap-4.5 text-left hover:text-neutral-900"
              >
                {/* icon */}
                <span
                  className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center text-base text-[#7b7b7b] ${isOpen ? "" : "-rotate-45"
                    } transition-transform duration-200`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 21"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="m8 8l4 4m0 0l4 4m-4-4l4-4m-4 4l-4 4"
                    />
                  </svg>
                </span>

                {/* question */}
                <span className="flex-1 text-[14px] sm:text-[15px] font-medium text-neutral-900">
                  {item.question}
                </span>
              </button>

              {/* animated answer */}
              <div
                className={`pl-9 sm:pl-11.5 pr-2 text-[13px] sm:text-sm text-leftleading-relaxed text-neutral-500 transition-all duration-300 ease-out overflow-hidden ${isOpen
                  ? "max-h-[220px] opacity-100 mt-1"
                  : "max-h-0 opacity-0 mt-0"
                  }`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
