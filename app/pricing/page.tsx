"use client";

import Header from '../utils/Header'
import Footer from '../utils/Footer'
import PriceDropdown from '../interactive/PriceDropdown'
import { motion } from "framer-motion"
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className='bg-[linear-gradient(to_right,#55AAFF2b,#88C4FF2b)] w-full'>
      <Header pageType={2} />

      {/* SECTION 1 - Free Trial */}
      <section className="w-full px-6 sm:px-10 lg:px-20 pt-25 lg:pt-35 pb-10 lg:pb-15 h-auto">
        <motion.div
          className="
      grid
      grid-cols-1
      md:grid-cols-[70%_30%]
      gap-4
      border
      rounded-[12px]
      px-6
      sm:px-8
      lg:px-10
      py-5
      lg:py-7
      border-[#cecece]
    "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.div
            className="py-1 lg:py-3"
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
            }}
          >
            <p className="font-bold text-[#001121] text-[24px] sm:text-[30px] lg:text-[40px]">
              2 Week Free Trial
            </p>
            <p className="text-[#001121] text-[12px] sm:text-[13px] mt-1">
              No credit card required
            </p>
          </motion.div>

          <Link className='md:mt-auto' href="/contact">
            <motion.div
              className="flex items-center md:justify-end"
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
            >
              <div
                className="
              flex items-center
              border border-[#cecece]
              duration-100 hover:border-[#9c9c9c]
              h-fit
              w-full md:w-fit
              justify-center md:justify-self-end
              px-4 py-2
              rounded-[10px]
              gap-2
              cursor-pointer
              "
              >
                <p className="font-semibold text-[14px] sm:text-[15px]">Contact Page</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="6 5 16 12"
                >
                  <path
                    fill="currentColor"
                    d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
                  />
                </svg>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* SECTION 2 - Pricing Details */}

      <motion.section
        className="px-6 sm:px-10 lg:px-20 xl:px-25 pb-8 lg:pb-12 bg-transparent overflow-x-clip h-auto relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
          },
        }}
      >
        <motion.div
          className="relative z-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <p className="text-[#001121] font-bold text-[32px] sm:text-[40px] lg:text-[60px]">
            Plan Breakdown
          </p>

          <p className="text-[#001121] italic text-[14px] sm:text-[16px] lg:text-[18px] mt-3 sm:mt-4 lg:mt-5">
            Each plan includes all listed features
          </p>

          <Link href="/contact">
            <motion.div
              className="text-[#001121] flex justify-end mt-6 sm:mt-7 lg:mt-9 items-center gap-2 cursor-pointer hover:text-[#001121]/85 transition-100"
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
              }}
            >
              <p className="font-bold text-[14px] sm:text-[16px] lg:text-[18px]">
                Contact sales
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="6 5 16 12"
              >
                <path
                  fill="currentColor"
                  d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
                />
              </svg>
            </motion.div>
          </Link>

          <div
            className="mt-5 sm:mt-6 lg:mt-7"
          >
            <PriceDropdown />
          </div>

          <motion.p
            className="text-[#013058] font-bold pt-10 sm:pt-14 lg:pt-17 text-right text-[12px] sm:text-[14px] lg:text-[15px]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
            }}
          >
            Pause or cancel anytime. No setup fees. No long-term contracts.
          </motion.p>
        </motion.div>

        {/* BG blobs stay behind content */}
        <div className="absolute z-0 blur-[40px] top-70 w-[760px] bg-[radial-gradient(circle,#289BFF,#fff)] h-[400px] rounded-full bg-black "></div>
        <div className="absolute z-0 blur-[40px] left-0 bottom-18 w-[1000px] bg-[radial-gradient(circle,#0057A3,#fff)] h-[180px] rounded-full bg-black "></div>
        <div className="absolute z-0 blur-[40px] -right-10 top-80 w-[1000px] bg-[radial-gradient(circle,#289BFF,#fff)] h-[590px] rounded-full bg-black "></div>
      </motion.section>


      {/* SECTION 3 - Detailed overview of plans */}

      <motion.section
        className="w-full px-6 z-20 sm:px-10 lg:px-24 xl:px-40 py-14 lg:py-24 relative rounded-2xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
          },
        }}
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-14 lg:mb-30"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <h2 className="text-[32px] sm:text-[46px] lg:text-[70px] font-semibold text-[#001121]">
            What every plan covers
          </h2>
          <p className="text-[14px] sm:text-[15px] lg:text-[15px] text-[#4a4a4a] mt-3.5 max-w-2xl mx-auto">
            Each plan contains the same features. Plan pricing varies depending on order volume.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[22%_78%] gap-y-10 gap-x-10 lg:gap-x-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <div>
            <p className="font-semibold text-[22px] lg:text-[29px] text-[#001121]">Feature</p>
          </div>
          <div className="font-semibold text-[22px] lg:text-[29px] text-[#001121]">
            Explanation
          </div>

          <div>
            <p className="font-semibold text-[17px] lg:text-[18px] text-[#001121]">
              Tracking & Delivery Problems
            </p>
          </div>
          <div className="text-[14px] lg:text-[15px] leading-6 text-[#2e2e2e]">
            We monitor every shipment and step in when delays, missing scans, failed deliveries,
            or tracking dead-ends appear — resolving the issue directly with the courier and
            keeping the customer informed.
          </div>

          <div>
            <p className="font-semibold text-[17px] lg:text-[18px] text-[#001121]">
              Lost / Damaged Parcel Management
            </p>
          </div>
          <div className="text-[14px] lg:text-[15px] leading-6 text-[#2e2e2e]">
            If a parcel is lost, misrouted, or arrives damaged, we handle the full investigation:
            gathering evidence, contacting the courier, preparing documentation, and guiding
            the client toward the correct resolution.
          </div>

          <div>
            <p className="font-semibold text-[17px] lg:text-[18px] text-[#001121]">
              Customs and International Issues
            </p>
          </div>
          <div className="text-[14px] lg:text-[15px] leading-6 text-[#2e2e2e]">
            We resolve customs holds, missing documents, incorrect HS codes, duty/VAT
            confusion, and any cross-border problems — coordinating with customs teams and
            guiding customers through required steps.
          </div>

          <div>
            <p className="font-semibold text-[17px] lg:text-[18px] text-[#001121]">
              Claims Management and Filing
            </p>
          </div>
          <div className="text-[14px] lg:text-[15px] leading-6 text-[#2e2e2e]">
            We build complete claim packets, file claims where allowed, manage courier
            back-and-forth, escalate when needed, handle appeals, and track compensation
            until the case is closed.
          </div>

          <div>
            <p className="font-semibold text-[17px] lg:text-[18px] text-[#001121]">
              Return Management and Reverse Logistics
            </p>
          </div>
          <div className="text-[14px] lg:text-[15px] leading-6 text-[#2e2e2e]">
            We create clear return instructions, track inbound returns, handle lost return
            parcels, and manage the refund/replacement workflow with the brand.
          </div>

          <div>
            <p className="font-semibold text-[17px] lg:text-[18px] text-[#001121]">
              Customer Communication and Support
            </p>
          </div>
          <div className="text-[14px] lg:text-[15px] leading-6 text-[#2e2e2e]">
            We handle all shipping-related customer messages across email, WhatsApp, and DMs —
            providing structured updates, calming anxious buyers, and protecting the brand’s
            reputation.
          </div>

          <div>
            <p className="font-semibold text-[17px] lg:text-[18px] text-[#001121]">
              Address and Delivery Issues
            </p>
          </div>
          <div className="text-[14px] lg:text-[15px] leading-6 text-[#2e2e2e]">
            When customers enter incorrect or incomplete addresses, we correct details with
            the courier, arrange redelivery, reroute parcels, or coordinate collection to
            ensure successful delivery.
          </div>

          <div>
            <p className="font-semibold text-[17px] lg:text-[18px] text-[#001121]">
              Client Dashboard and Reports
            </p>
          </div>
          <div className="text-[14px] lg:text-[15px] leading-6 text-[#2e2e2e]">
            Every week, we provide insights on delivery performance, courier reliability,
            common failure reasons, top countries with issues, claims outcomes, and
            actionable recommendations.
          </div>

          <div>
            <p className="font-semibold text-[17px] lg:text-[18px] text-[#001121]">
              Courier Escalation and Investigation Management
            </p>
          </div>
          <div className="text-[14px] lg:text-[15px] leading-6 text-[#2e2e2e]">
            For serious issues, we escalate cases inside courier systems, contact support
            teams, request internal scans, follow up every 48 hours, and keep detailed logs
            until resolved.
          </div>
        </motion.div>

        {/* CTA */}
        <Link href="/contact">
          <motion.div
            className="flex cursor-pointer justify-center mt-16"
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
            }}
          >
            <button className="px-5 text-[16px] py-1 bg-[#007bff] text-white font-semibold rounded-lg cursor-pointer transition hover:bg-[#006ee5]">
              Contact Sales
            </button>
          </motion.div>
        </Link>
      </motion.section>


      <Footer type={1} />
    </main>
  )
}
