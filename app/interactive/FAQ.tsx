"use client";

import { useState } from "react";


const ServiceFAQS: { id: string; question: string; answer: string }[] =
  [
    {
      id: "s1",
      question: "What problems do you actually handle?",
      answer:
        "We manage all shipping issues end-to-end, including delays, missing scans, customs holds, failed deliveries, damaged parcels, lost parcels, wrong addresses, returns, and courier investigations."
    },
    {
      id: "s2",
      question: "Do you contact couriers on my behalf?",
      answer:
        "Yes. We speak directly with couriers for all investigations, escalations, documentation requests, and follow-ups."
    },
    {
      id: "s3",
      question: "Do you file claims for lost or damaged parcels?",
      answer:
        "Yes. We prepare all required documentation, submit the claim, chase updates, escalate when needed, and manage the entire process until the case is resolved."
    },
    {
      id: "s4",
      question: "Do you manage returns and reverse logistics?",
      answer:
        "Yes. We monitor return parcels, resolve lost-return cases, and manage all communication around replacements and refunds."
    },
    {
      id: "s5",
      question: "Do you need access to my Shopify store?",
      answer:
        "No. You only need to connect your Shopify data to AfterShip. We do not require admin access unless you choose to grant it."
    },
    {
      id: "s6",
      question: "How do you know when an issue appears?",
      answer:
        "We monitor your shipments through AfterShip. Any delay, failed delivery, customs issue, or missing scan automatically enters our workflow."
    },
    {
      id: "s7",
      question: "How often do you update us?",
      answer:
        "You receive immediate updates for urgent issues, ongoing notes through your dashboard, and a weekly summary of all activity."
    },
    {
      id: "s8",
      question: "Do you work with all major couriers?",
      answer:
        "Yes. We support UPS, FedEx, Royal Mail, EVRi, DHL, USPS, and other international and domestic carriers."
    },
    {
      id: "s9",
      question: "How long does onboarding take?",
      answer:
        "Onboarding takes 24–48 hours. We set up communication, define workflows, connect your data pipeline, and prepare your dashboard."
    }
  ];

const CommsFAQs: { id: string; question: string; answer: string }[] = [
  {
    id: "c1",
    question: "How do you communicate with my customers?",
    answer:
      "We respond using your branded email or WhatsApp channels. All messages are written in your tone so customers believe they are speaking directly with your team."
  },
  {
    id: "c2",
    question: "Will customers get confused by having two email addresses?",
    answer:
      "No. We work behind one support address that you control. Customers only see a single point of contact."
  },
  {
    id: "c3",
    question: "Can you manage WhatsApp support?",
    answer:
      "Yes. We can join your WhatsApp support inbox or handle customer messages through a brand-facing group used for updates."
  },
  {
    id: "c4",
    question: "How do we communicate with you as the brand?",
    answer:
      "You receive a dedicated communication channel where we share updates, ask clarifying questions, and notify you of resolved issues."
  },
  {
    id: "c5",
    question: "What happens if a customer contacts me directly?",
    answer:
      "You can forward the message to us or grant access to your inbox. We take over from that point and continue communication seamlessly."
  }
]

const PricingFAQs: { id: string; question: string; answer: string }[] = [
  {
    id: "p1",
    question: "How does the two-week free trial work?",
    answer:
      "You receive full access to the service for 14 days with no credit card required. We complete your setup so you can see real results before deciding."
  },
  {
    id: "p2",
    question: "Do you charge a setup fee?",
    answer:
      "No. Onboarding is included at no cost."
  },
  {
    id: "p3",
    question: "How do I pay for the service?",
    answer:
      "All payments are processed securely through Stripe. You can update, pause, or cancel your subscription at any time."
  },
  {
    id: "p4",
    question: "Can I pause or cancel my plan?",
    answer:
      "Yes. There are no long-term contracts. You can pause or cancel your subscription whenever you choose."
  },
  {
    id: "p5",
    question: "What happens after the free trial ends?",
    answer:
      "If you decide to continue, your chosen plan activates automatically through Stripe. If not, the trial simply ends with no charges."
  },
  {
    id: "p6",
    question: "Are there any hidden fees or extra charges?",
    answer:
      "No. Each plan includes all operational features with no additional ticket fees or unexpected add-ons."
  }
]


export default function FAQDropDown() {
  const [openId, setOpenId] = useState<string | null>("q1");

  return (
    <section className="w-fit max-w-2xl mx-auto lg:mx-0 space-y-4 flex flex-col items-center lg:items-start sm:space-y-5 gap-4">
      <div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg sm:text-xl">📚</span>
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900">
            Service and Operations
          </h2>
        </div>

        <div className="space-y-3.5">
          {ServiceFAQS.map((item) => {
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
      </div>

      <div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg sm:text-xl">📞</span>
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900">
            Communication Channels
          </h2>
        </div>

        <div className="space-y-3.5">
          {CommsFAQs.map((item) => {
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
      </div>
      <div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg sm:text-xl">💵</span>
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900">
            Pricing, Biling & Free Trial
          </h2>
        </div>

        <div className="space-y-3.5">
          {PricingFAQs.map((item) => {
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
      </div>

    </section>
  );
}
