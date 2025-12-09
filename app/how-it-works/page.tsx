"use client";

import Header from '../utils/Header'
import Footer from '../utils/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";


export default function HowItWorks() {
  return (
    <main>
      <Header pageType={1} />

      {/* SECTION 1 - Title */}
      <motion.section
        className="
    px-8 sm:px-15 lg:px-20 xl:px-65
    pt-25 lg:pt-35
    pb-8 lg:pb-12 xl:pb-15
  "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 24 },
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
        <motion.p
          className="font-semibold mb-1 text-[26px] sm:text-[32px] lg:text-[40px]"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
          }}
        >
          How It Works.
        </motion.p>

        <motion.p
          className="text-[13px] sm:text-[14px] mb-6 sm:mb-8 text-[#3e3e3e]"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
          }}
        >
          A short but detailed overview of our systems
        </motion.p>

        <motion.div
          className="-ml-1 sm:-ml-2.5 text-[#001121] flex flex-wrap gap-2 sm:gap-3 items-center"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
          }}
        >
          <Image
            src={"/logo_2.png"}
            width={49}
            height={49}
            alt={"Roman Logistics Logo"}
          />
          <Link href="/contact" className="flex items-center gap-2">
            <p className="font-semibold text-[14px] sm:text-[15px]">Contact Sales</p>
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
          </Link>
        </motion.div>

        <motion.div
          className="w-full h-[1px] bg-black/17 mt-2.5"
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
          }}
        />
      </motion.section>

      {/* SECTION 2 - How it works breakdown */}

      <motion.section
        className="relative w-full overflow-x-clip px-5 sm:px-8 lg:px-20 xl:px-65 pb-12 lg:pb-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* BG BLOBS (unchanged) */}
        <div className="absolute z-0 blur-[70px] -left-60 top-20 h-[350px] w-[1200px] bg-[radial-gradient(circle,#289BFF,#fff)] rounded-full"></div>
        <div className="absolute z-0 blur-[90px] right-30 top-65 h-[500px] w-[400px] bg-[radial-gradient(circle,#0088ff,#fff)] rounded-full"></div>
        <div className="absolute z-0 blur-[60px] -left-30 top-180 h-[600px] w-[700px] bg-[radial-gradient(circle,#69b8fd,#fff)] rounded-full"></div>
        <div className="absolute z-0 blur-[60px] -right-85 top-270 h-[700px] w-[800px] bg-[radial-gradient(circle,#007fee,#fff)] rounded-full"></div>

        {/* CONTENT ABOVE BLOBS */}
        <motion.div
          className="relative z-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* ============================
        DESKTOP / TABLET VERSION (md+)
        Your original timeline, unchanged
       ============================ */}
          <motion.div
            className="hidden md:block"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <div className="relative">

              <div className="mt-10 grid grid-cols-3 relative h-fit">
                <div
                  className="
            flex items-center 
            w-[93%] mx-auto px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-black/17 transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px] text-center">Customer Orders a Product</p>
                </div>

                {/* horizontal: left -> right (blue -> white) */}
                <div className="flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h1"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h1)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                <p className="text-[22px] text-center m-auto italic">
                  Tracking details are <br />
                  provided
                </p>
              </div>

              {/* spacer row with invisible placeholders */}
              <div className="grid grid-cols-3 relative h-fit">
                <div
                  className="
            flex items-center opacity-0
            w-fit px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-white transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px]">Customer Orders a Product</p>
                </div>

                <div className="opacity-0 flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h-ghost"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h-ghost)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                {/* vertical: top -> bottom (blue -> white) */}
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[3px] h-[100px]"
                    width="3"
                    height="100"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-v1"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="1.5"
                      y1="0"
                      x2="1.5"
                      y2="100"
                      stroke="url(#dashGradient-v1)"
                      strokeWidth="3"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 relative h-fit">
                <p className="text-[22px] text-center m-auto italic">
                  Customer is anxious about <br />
                  their order
                </p>

                {/* horizontal: left -> right (blue -> white) */}
                <div className="flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h2-reversed"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        {/* reversed direction */}
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#007bff" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h2-reversed)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                <div
                  className="
            flex items-center 
            w-[93%] mx-auto px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-black/17 transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px] text-center">
                    Issue Arises with Shipping
                  </p>
                </div>
              </div>

              {/* spacer row with invisible placeholders */}
              <div className="grid grid-cols-3 relative h-fit">
                {/* vertical: top -> bottom (blue -> white) */}
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[3px] h-[100px]"
                    width="3"
                    height="100"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-v2"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="1.5"
                      y1="0"
                      x2="1.5"
                      y2="100"
                      stroke="url(#dashGradient-v2)"
                      strokeWidth="3"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>

                {/* ghost placeholders again, with unique ids so they don't interfere */}
                <div className="opacity-0 flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h-ghost2"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h-ghost2)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                <div
                  className="
            flex items-center opacity-0
            w-fit px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-white transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px]">Customer Orders a Product</p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 relative h-fit">
                <div
                  className="
            flex items-center 
            w-[93%] mx-auto px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-black/17 transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px] text-center">Your Customer Contacts Us</p>
                </div>

                {/* horizontal: left -> right (blue -> white) */}
                <div className="flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h1-b"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h1-b)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                <p className="text-[22px] text-center m-auto italic">
                  Issue enters our ticketing <br />
                  system
                </p>
              </div>

              {/* spacer row with invisible placeholders */}
              <div className="grid grid-cols-3 relative h-fit">
                <div
                  className="
            flex items-center opacity-0
            w-fit px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-white transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px]">Customer Orders a Product</p>
                </div>

                <div className="opacity-0 flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h-ghost3"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h-ghost3)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                {/* vertical: top -> bottom (blue -> white) */}
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[3px] h-[100px]"
                    width="3"
                    height="100"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-v3"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="1.5"
                      y1="0"
                      x2="1.5"
                      y2="100"
                      stroke="url(#dashGradient-v3)"
                      strokeWidth="3"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 relative h-fit">
                <p className="text-[22px] text-center m-auto italic">
                  We file any claims needed / <br />
                  chase down couriers
                </p>

                {/* horizontal: left -> right (blue -> white) */}
                <div className="flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h2-reversed-b"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        {/* reversed direction */}
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#007bff" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h2-reversed-b)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                <div
                  className="
            flex items-center 
            w-[93%] mx-auto px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-black/17 transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px] text-center">
                    We Investigate Issue and Resolve It
                  </p>
                </div>
              </div>

              {/* spacer row with invisible placeholders */}
              <div className="grid grid-cols-3 relative h-fit">
                {/* vertical: top -> bottom (blue -> white) */}
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[3px] h-[100px]"
                    width="3"
                    height="100"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-v4"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="1.5"
                      y1="0"
                      x2="1.5"
                      y2="100"
                      stroke="url(#dashGradient-v4)"
                      strokeWidth="3"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>

                {/* ghost placeholders again, with unique ids so they don't interfere */}
                <div className="opacity-0 flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h-ghost4"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h-ghost4)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                <div
                  className="
            flex items-center opacity-0
            w-fit px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-white transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px]">Customer Orders a Product</p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 relative h-fit">
                <div
                  className="
            flex items-center 
            w-[93%] mx-auto px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-black/17 transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px] text-center">We Update your Customer</p>
                </div>

                {/* horizontal: left -> right (blue -> white) */}
                <div className="flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h1-c"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h1-c)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                <p className="text-[22px] text-center m-auto italic">
                  Your Notion dashboard <br />
                  is updated
                </p>
              </div>

              {/* spacer row with invisible placeholders */}
              <div className="grid grid-cols-3 relative h-fit">
                <div
                  className="
            flex items-center opacity-0
            w-fit px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-white transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px]">Customer Orders a Product</p>
                </div>

                <div className="opacity-0 flex items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h-ghost5"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h-ghost5)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                {/* vertical: top -> bottom (blue -> white) */}
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[3px] h-[100px]"
                    width="3"
                    height="100"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-v5"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#007bff" />
                        <stop offset="1" stopColor="#fefefe" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="1.5"
                      y1="0"
                      x2="1.5"
                      y2="100"
                      stroke="url(#dashGradient-v5)"
                      strokeWidth="3"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 relative h-fit">
                <p className="text-[22px] text-center m-auto italic opacity-0">
                  We Provide you a Weekly <br />
                  Report
                </p>

                {/* horizontal: left -> right (blue -> white) */}
                <div className="flex opacity-0 items-center justify-center text-[#001121]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[250px] h-[3px]"
                    width="100%"
                    height="6"
                  >
                    <defs>
                      <linearGradient
                        id="dashGradient-h2-reversed-c"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        {/* reversed direction */}
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#007bff" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="0"
                      y1="3"
                      x2="250"
                      y2="3"
                      stroke="url(#dashGradient-h2-reversed-c)"
                      strokeWidth="6"
                      strokeDasharray="14 10"
                    />
                  </svg>
                </div>

                <div
                  className="
            flex items-center 
            w-[93%] mx-auto px-6 py-6 rounded-2xl bg-white/4 backdrop-blur-xl border border-black/17 transition-all duration-300 overflow-hidden"
                >
                  <p className="font-semibold text-[24px] text-center">
                    We Provide you a Weekly Report
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ============================
        MOBILE VERSION (< md)
        Simple vertical flow
       ============================ */}
          <motion.div
            className="block md:hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <div className="relative flex flex-col items-center gap-6 mt-10">
              {/* STEP 1 */}
              <div
                className="
            flex items-center 
            w-[93%] mx-auto px-5 py-5
            rounded-2xl bg-white/4 backdrop-blur-xl
            border border-black/17
            transition-all duration-300 overflow-hidden
          "
              >
                <p className="font-semibold text-[20px] text-center">
                  Customer Orders a Product
                </p>
              </div>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              <p className="text-[16px] text-center italic">
                Tracking details are provided
              </p>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              {/* STEP 2 */}
              <div
                className="
            flex items-center 
            w-[93%] mx-auto px-5 py-5
            rounded-2xl bg-white/4 backdrop-blur-xl
            border border-black/17
            transition-all duration-300 overflow-hidden
          "
              >
                <p className="font-semibold text-[20px] text-center">
                  Issue Arises with Shipping
                </p>
              </div>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              <p className="text-[16px] text-center italic">
                Customer is anxious about their order
              </p>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              {/* STEP 3 */}
              <div
                className="
            flex items-center 
            w-[93%] mx-auto px-5 py-5
            rounded-2xl bg-white/4 backdrop-blur-xl
            border border-black/17
            transition-all duration-300 overflow-hidden
          "
              >
                <p className="font-semibold text-[20px] text-center">
                  Your Customer Contacts Us
                </p>
              </div>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              <p className="text-[16px] text-center italic">
                Issue enters our ticketing system
              </p>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              {/* STEP 4 */}
              <div
                className="
            flex items-center 
            w-[93%] mx-auto px-5 py-5
            rounded-2xl bg-white/4 backdrop-blur-xl
            border border-black/17
            transition-all duration-300 overflow-hidden
          "
              >
                <p className="font-semibold text-[20px] text-center">
                  We Investigate Issue and Resolve It
                </p>
              </div>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              <p className="text-[16px] text-center italic">
                We file any claims needed and chase down couriers
              </p>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              {/* STEP 5 */}
              <div
                className="
            flex items-center 
            w-[93%] mx-auto px-5 py-5
            rounded-2xl bg-white/4 backdrop-blur-xl
            border border-black/17
            transition-all duration-300 overflow-hidden
          "
              >
                <p className="font-semibold text-[20px] text-center">
                  We Update your Customer
                </p>
              </div>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              <p className="text-[16px] text-center italic">
                Your Notion dashboard is updated
              </p>

              <div className="h-6 w-[2px] bg-[linear-gradient(to_bottom,#007bff,#ffffff)] rounded-full" />

              {/* STEP 6 */}
              <div
                className="
            flex items-center 
            w-[93%] mx-auto px-5 py-5
            rounded-2xl bg-white/4 backdrop-blur-xl
            border border-black/17
            transition-all duration-300 overflow-hidden
          "
              >
                <p className="font-semibold text-[20px] text-center">
                  We Provide you a Weekly Report
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA shared for both */}
          <motion.div
            className="flex flex-col items-center justify-center mt-22"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <p className="font-semibold text-[45px] xs:text-[60px] lg:text-[70px]">
              Get Started
            </p>
            <p className="text-[14px] md:text-[15px] tracking-[0.5px] text-[#454545] text-center">
              Get rid of your shipping burden today.
            </p>
            <Link href="/contact">
              <div className="mt-10 sm:mt-12 w-fit px-3 flex items-center gap-2 py-1 bg-[#0088ff] rounded-[10px] text-white">
                <p className="font-semibold text-[14px] sm:text-[16px]">Book a call</p>
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
            </Link>
          </motion.div>

          <motion.div
            className="mx-auto mt-28 sm:mt-32 w-[90%] sm:w-[80%] lg:w-[60%] h-[1px] bg-black/15"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
            }}
          />
        </motion.div>
      </motion.section>





      <Footer type={0} />
    </main >
  )
}
