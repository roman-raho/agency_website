"use client";

import Header from "./utils/Header";
import { colours } from "./colours.js"
import { LearnMoreBtn, WorkWithUsBtn } from "./utils/Buttons";
import Image from "next/image.js";
import Link from "next/link";
import PriceDropdown from "./interactive/PriceDropdown";
import FAQDropDown from "./interactive/FAQ";
import Footer from "./utils/Footer";
import { motion } from "framer-motion"

const IMAGES = [
  "/CourierLogos/DHL.png",
  "/CourierLogos/FEDEX.png",
  "/CourierLogos/UPS.png",
  "/CourierLogos/ROYAL_MAIL.png",
  "/CourierLogos/EVRI.webp",
  "/CourierLogos/DPD.png",
];

export default function LandingPage() {

  const stepContainer = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const stepItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <Header pageType={0}></Header>

      {/* HERO SECTION */}

      <section className={`${colours.background_hero}
      h-auto lg:h-[770px] overflow-x-clip
      flex items-center justify-center 
      lg:gap-35 xl:gap-55 lg:flex-row   
      flex-col gap-15 pt-30 md:pt-40 lg:pt-15`}>

        {/* Glass panel for mobile */}
        <motion.div
          className="lg:hidden
    relative
    w-[240px] sm:w-[360px] p-6 sm:p-8 rounded-2xl
    bg-white/10 backdrop-blur-xl
    border border-white/60
    shadow-[0_20px_40px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_14px_rgba(255,255,255,0.22)]
    text-white
  "
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Ellipses now tied to the panel */}
          <div className="pointer-events-none absolute -top-10 -right-8 w-[220px] h-[150px] rounded-full bg-[#024384] blur-[40px] opacity-50 -z-10" />
          <div className="pointer-events-none absolute top-10 -left-15 w-[140px] h-[180px] rounded-full bg-[#0b84fd] blur-[40px] opacity-50 -z-10" />
          <div className="pointer-events-none absolute bottom-[-30px] right-0 w-[200px] h-[130px] rounded-full bg-[#09549f] blur-[40px] opacity-50 -z-10" />

          {/* vertical line behind dots */}
          <div
            className="
      pointer-events-none
      absolute right-[30px] sm:right-[38px] top-10 bottom-10 sm:top-12 sm:bottom-12
      w-[7px] rounded-full
      bg-white/8
      z-0
    "
          />

          {/* Row 1 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[15px] sm:text-[20px]">
            <span>Customer Orders</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#32d96a] border-2 border-black/20 shadow" />
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[15px] sm:text-[20px]">
            <span>Order Shipped</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#32d96a] border-2 border-black/20 shadow" />
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[15px] sm:text-[20px]">
            <span>Parcel In Transit</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#32d96a] border-2 border-black/20 shadow" />
          </div>

          {/* Row 4 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[15px] sm:text-[20px]">
            <span>Issue Raised</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full animate-pulse bg-[#ff4c4c] border-2 border-black/20 shadow" />
          </div>

          {/* Row 5 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[15px] sm:text-[20px]">
            <span>We Investigate</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#ffb547] border-2 border-black/20 shadow" />
          </div>

          {/* Row 6 */}
          <div className="flex items-center justify-between font-semibold text-[15px] sm:text-[20px]">
            <span>Resolved</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#32d96a] border-2 border-black/20 shadow" />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center lg:items-start"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="inline-block px-2.5 py-1 bg-[#c5e2ff]/22 rounded-[9px]">
              <p className="text-white/90 font-semibold md:font-bold text-[12px] xs:text-[13px] md:text-[14px]">
                Used by
                <span className="hidden xs:inline-block">
                  &nbsp;independent
                </span> brands worldwide
              </p>
            </div>
            <p className="font-semibold mt-2  xxs:mt-3 md:mt-3 text-white 
            text-[24px] xxs:text-[30px] text-center lg:text-left
            xs:text-[30px] md:text-[42px] md:tracking-[0px] lg:text-[39px] xl:text-[42px] -tracking-[1px]  leading-tight">
              Managing the messy side <br />of brand shipping
            </p>
            <p className="font-light hidden lg:block mt-2 text-[#e8e8e8] text-[12px] lg:text-[14px]">
              Built by a watch microbrand founder who shipped internatioanally.
            </p>
            <p className="md:hidden lg:block leading-[22px] md:leading-[26px] lg:leading-[30px] mt-1 xxs:mt-2 md:mt-4 text-[13px] md:text-[16px] text-center lg:text-left lg:text-[22px] lg:font-medium text-white/80 lg:text-white ">
              We handle everything that can go wrong <br />after your products ship - from customs <br />seizures to lost parcels<span className="hidden md:inline"> alongside <br />operational work: filing claims, chasing <br />couriers, updating customers, and more.</span>
            </p>

            {/* For medium viewports */}
            <p className="hidden md:block lg:hidden leading-[22px] md:leading-[26px] lg:leading-[30px] mt-1 xs:mt-2 text-[13px] md:text-[16px] text-center lg:text-left lg:text-[22px] lg:font-medium text-white/80 lg:text-white ">
              We handle everything that can go wrong after your products ship - from <br />customs seizures to lost parcels alongside operational work: filing <br />claims, chasing couriers, updating customers, and more.
            </p>
          </div>
          <div className="my-7 md:hidden">
            <WorkWithUsBtn width={137} height={32} ></WorkWithUsBtn >
          </div>
          <div className="hidden md:block mt-14 mb-14 lg:mb-0">
            <WorkWithUsBtn width={155} height={37} ></WorkWithUsBtn >
          </div>
        </motion.div>

        {/* Glass Panel */}
        <motion.div
          className="hidden lg:block
    relative
    w-[360px] p-8 rounded-2xl
    bg-white/10 backdrop-blur-xl
    border border-white/60
    shadow-[0_20px_40px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_14px_rgba(255,255,255,0.22)]
    text-white
  "
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
        >
          {/* Ellipses now tied to the panel */}
          <div className="pointer-events-none absolute -top-10 -right-8 w-[220px] h-[150px] rounded-full bg-[#024384] blur-[40px] opacity-50 -z-10" />
          <div className="pointer-events-none absolute top-10 -left-15 w-[140px] h-[180px] rounded-full bg-[#0b84fd] blur-[40px] opacity-50 -z-10" />
          <div className="pointer-events-none absolute bottom-[-30px] right-0 w-[200px] h-[130px] rounded-full bg-[#09549f] blur-[40px] opacity-50 -z-10" />

          {/* vertical line behind dots */}
          <div
            className="
      pointer-events-none
      absolute right-[38px] top-12 bottom-12
      w-[7px] rounded-full
      bg-white/8
      z-0
    "
          />

          {/* Row 1 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[20px]">
            <span>Customer Places Order</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#32d96a] border-2 border-black/20 shadow" />
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[20px]">
            <span>Order Shipped</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#32d96a] border-2 border-black/20 shadow" />
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[20px]">
            <span>Parcel In Transit</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#32d96a] border-2 border-black/20 shadow" />
          </div>

          {/* Row 4 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[20px]">
            <span>Issue Raised</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full animate-pulse bg-[#ff4c4c] border-2 border-black/20 shadow" />
          </div>

          {/* Row 5 */}
          <div className="flex items-center justify-between mb-4 font-semibold text-[20px]">
            <span>We Investigate</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#ffb547] border-2 border-black/20 shadow" />
          </div>

          {/* Row 6 */}
          <div className="flex items-center justify-between font-semibold text-[20px]">
            <span>Resolved</span>
            <div className="relative z-10 w-[19px] h-[19px] rounded-full bg-[#32d96a] border-2 border-black/20 shadow" />
          </div>
        </motion.div>


      </section>


      {/* SECTION 1 - COURIERS */}

      <section className="w-full h-auto px-8 py-8 md:px-14 lg:px-20 md:py-15">
        {/* heading animated in */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="text-[17px] xs:text-[19px] sm:text-[21px] text-center md:text-[30px] font-bold text-[#006FE4]">
            <span className="opacity-40">We deal with </span>
            <span className="opacity-100">all major</span>
            <span className="opacity-40"> couriers</span>
          </div>
        </motion.div>

        {/* INFINITE SCROLL */}
        <motion.div
          className="
    relative
    w-[80%]
    mx-auto mt-7 sm:mt-10 md:mt-13
    overflow-hidden
    py-4
  "
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          {/* Fade left */}
          <div
            className="
      pointer-events-none
      absolute left-0 top-0 h-full w-[20%] 
      bg-gradient-to-r from-white to-transparent
      z-20
    "
          />

          {/* Fade right */}
          <div
            className="
      pointer-events-none
      absolute right-0 top-0 h-full w-[20%]
      bg-gradient-to-l from-white to-transparent
      z-20
    "
          />

          {/* Track A */}
          <div
            className="
      flex w-max
      animate-[scrollA_20s_linear_infinite]
    "
          >
            {IMAGES.map((src, i) => (
              <div key={`a-${i}`} className="mx-7 md:mx-13 flex items-center justify-center">
                <Image
                  src={src}
                  alt=""
                  width={130}
                  height={130}
                  className="object-contain hidden md:block"
                />
                <Image
                  src={src}
                  alt=""
                  width={70}
                  height={70}
                  className="object-contain md:hidden"
                />
              </div>
            ))}
          </div>

          {/* Track B (follows behind A) */}
          <div
            className="
      absolute inset-0
      flex w-max
      animate-[scrollB_20s_linear_infinite]
    "
          >
            {IMAGES.map((src, i) => (
              <div key={`b-${i}`} className="mx-7 md:mx-13 flex items-center justify-center">
                {/* ✅ FIX: match desktop size to Track A so speed/spacing align */}
                <Image
                  src={src}
                  alt=""
                  width={130}
                  height={130}
                  className="object-contain hidden md:block"
                />
                <Image
                  src={src}
                  alt=""
                  width={70}
                  height={70}
                  className="object-contain md:hidden"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom block – still hidden, but ready for animation if you unhide it later */}
        <motion.div
          className="mt-10 lg:mt-20 px-6 xs:px-10 md:px-13 lg:px-17 py-8 xs:py-10 md:py-14 border rounded-[12px] border-[#cecece] h-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <div className="flex items-center gap-2 w-fit bg-[#6cbbff]/40 mb-4 py-1 rounded-[9px] px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className=""
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
                <path d="M12 7v5l3 3" />
              </g>
            </svg>

            <span className="text-[#00284b] font-semibold text-[13px] md:text-[15px]">
              Time Save
            </span>
          </div>

          {/* Heading */}
          <p className="font-bold text-[24px] xs:text-[26px] sm:text-[30px] md:text-[40px] lg:text-[53px] leading-[1.2] text-left">
            All your <br />
            shipping headaches <span className="text-[#0088FF]">gone.</span>
          </p>

          {/* 3 Box Breakdown */}
          <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-10 md:gap-y-16">
            {/* Card 1 */}
            <div className="text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 p-1 rounded-[9px] bg-[#289BFF]/12">
                <div className="flex items-center justify-center text-[#289BFF] w-full h-full rounded-[9px] bg-[#f3f9ff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    className="sm:w-[45px] sm:h-[45px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m20 7l-8-4l-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-4 sm:mt-6 font-semibold leading-[1.35] tracking-[1px] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
                Dealing with
                Courier
                Chaos
              </p>
              <p className="mt-2 sm:mt-3 text-[#545454] leading-[1.5] text-[15px] sm:text-[17px] md:text-[19px]">
                Lost parcels, customs issues and
                unclear tracking wastes your time.
                We take over all carrier communication
                and resolve issues for you.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 p-1 rounded-[9px] bg-[#289BFF]/12">
                <div className="flex items-center justify-center text-[#289BFF] w-full h-full rounded-[9px] bg-[#f3f9ff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    className="sm:w-[33px] sm:h-[33px]"
                    viewBox="0 0 1000 1000"
                  >
                    <path
                      fill="currentColor"
                      d="m746 641l254 255l-105 105l-254-254q-106 72-232 72q-169 0-289-120T0 410t120-289T409 1t289 120t120 289q0 127-72 231zm-65-231q0-113-79.5-193T409 137t-193 80t-80 193t80 192.5T409 682t192.5-79.5T681 410z"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-4 sm:mt-6 font-semibold leading-[1.35] tracking-[1px] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
                Claims and
                Investigations Hell
              </p>
              <p className="mt-2 sm:mt-3 text-[#545454] leading-[1.5] text-[15px] sm:text-[17px] md:text-[19px]">
                Claims are confusing and easy to
                get wrong. We manage the full
                investigation → claim → resolution
                process.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 p-1 rounded-[9px] bg-[#289BFF]/12">
                <div className="flex items-center justify-center text-[#289BFF] w-full h-full rounded-[9px] bg-[#f3f9ff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    className="sm:w-[40px] sm:h-[40px]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-9 8c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10c1.68 0 3.162.44 4.18 1.041c1.1.65 1.32 1.255 1.32 1.459a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1m5.5-4c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-4 sm:mt-6 font-semibold leading-[1.35] tracking-[1px] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
                Customer Stress and
                Reputation Risk
              </p>
              <p className="mt-2 sm:mt-3 text-[#545454] leading-[1.5] text-[15px] sm:text-[17px] md:text-[19px]">
                Delays make customers anxious.
                We handle all shipping related
                communication to protect your customers
                brand experience.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-14 mx-auto w-full flex justify-center">
            <LearnMoreBtn width={145} height={37} />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 - Founders Note */}
      <section className="w-full px-6 md:px-14 lg:px-20 pt-8 md:pt-3 pb-12 md:pb-15">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[11%_auto] items-center md:items-start gap-y-6 md:gap-y-0 md:gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Avatar circle */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <div className="h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 rounded-full bg-[radial-gradient(circle,_#6aaeff_0%,_#add3ff_55%,_#eef6ff_100%)]" />
          </motion.div>

          {/* Text block */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <p className="font-bold text-[24px] sm:text-[32px] md:text-[40px] text-[#021f3b]">
              Founders Note
            </p>

            <p className="mt-2 text-[14px] sm:text-[16px] md:text-[17px] italic">
              Built by a watch microbrand founder who shipped worldwide.
            </p>

            <p className="mt-5 lg:w-[80%] text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed">
              I built this after running a watch microbrand and shipping 100+ watches worldwide. Shipping these watches showed me how chaotic couriers can be - this is the system I wish I had.
            </p>

            <div className="mt-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <Link href="/about" className="font-semibold text-[15px] sm:text-[16px] md:text-[17px]">
                  Read More...
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* SECTION 3 - How it Works */}
      <section className={`relative w-full overflow-clip px-8 sm:px-14 lg:px-20 py-11 lg:py-15 ${colours.background_hero}`}
      >
        {/* BG blobs – unchanged, no motion */}
        <div className="absolute z-0 top-16 md:top-24 lg:top-30 right-0 md:right-20 lg:right-40 w-[260px] md:w-[360px] lg:w-[420px] h-[220px] md:h-[280px] lg:h-[320px] rounded-full bg-[#1e81e3] blur-[60px] opacity-50" />
        <div className="absolute z-0 top-40 md:top-56 lg:top-70 left-[-60px] md:left-10 lg:left-40 w-[260px] md:w-[320px] lg:w-[350px] h-[260px] md:h-[340px] lg:h-[400px] rounded-full bg-[#033465] blur-[60px] opacity-50" />
        <div className="absolute z-0 -bottom-40 md:-bottom-40 lg:-bottom-50 right-[-80px] md:right-10 lg:right-40 w-[360px] md:w-[500px] lg:w-[600px] h-[220px] md:h-[260px] lg:h-[300px] rounded-full bg-[#06498b] blur-[60px] opacity-50" />

        {/* Top copy */}
        <motion.div
          className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <p className="font-bold text-[#0088FF] text-[18px] sm:text-[21px] lg:text-[27px] mb-2">
              How it works
            </p>
            <p className="font-bold text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] leading-tight">
              <span className="italic">Simple, </span>
              <br />
              Intuitive & quick.
            </p>
            <Link href="/how-it-works">
              <motion.div
                className="bg-white cursor-pointer hover:shadow-lg transition-100 hover:shadow-white/10 w-fit px-4 mt-7 md:mt-9 lg:mt-14 py-1.5 rounded-[10px] flex items-center gap-2"
                whileHover={{ y: -2, boxShadow: "0 10px 24px rgba(0,0,0,0.25)" }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <p className="font-semibold text-[14px] sm:text-[15px] md:text-[16px]">
                  See full process
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
          </motion.div>

          <motion.p
            className="xl:w-140 lg:w-100 w-full italic lg:not-italic lg:font-semibold text-[17px] sm:text-[20px] lg:text-[27px] xl:text-[31px] leading-7 sm:leading-8 lg:leading-11 text-white text-left lg:text-right "
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          >
            We plug directly into your
            shipping flow, monitor every
            parcel in real time and resolve
            issues before they impact your
            customers.
          </motion.p>
        </motion.div>

        {/* MOBILE/TABLET VERSION – stacked steps */}
        <motion.div
          className="relative z-10 mt-10 lg:hidden flex flex-col gap-6"
          variants={stepContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Step 1 */}
          <motion.div className="flex gap-4" variants={stepItem}>
            <div>
              <span className="text-white text-[18px] font-bold">1</span>
            </div>
            <div>
              <p className="text-white font-semibold text-[16px] sm:text-[17px]">
                Onboard onto our system
              </p>
              <p className="mt-1 text-white/80 text-[14px] leading-5">
                We connect to your store and set up your workflows so new orders and
                tracking data flow straight into our system.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div className="flex gap-4" variants={stepItem}>
            <div>
              <span className="text-white text-[18px] font-bold">2</span>
            </div>
            <div>
              <p className="text-white font-semibold text-[16px] sm:text-[17px]">
                Monitor your shipments
              </p>
              <p className="mt-1 text-white/80 text-[14px] leading-5">
                Every parcel is tracked in real time. Exceptions, delays and customs
                issues are surfaced automatically.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div className="flex gap-4" variants={stepItem}>
            <div>
              <span className="text-white text-[18px] font-bold">3</span>
            </div>
            <div>
              <p className="text-white font-semibold text-[16px] sm:text-[17px]">
                We deal with issues
              </p>
              <p className="mt-1 text-white/80 text-[14px] leading-5">
                Our team files claims, chases couriers and resolves problems directly
                with carriers so you don’t have to.
              </p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div className="flex gap-4" variants={stepItem}>
            <div>
              <span className="text-white text-[18px] font-bold">4</span>
            </div>
            <div>
              <p className="text-white font-semibold text-[16px] sm:text-[17px]">
                You get updated
              </p>
              <p className="mt-1 text-white/80 text-[14px] leading-5">
                You and your customers get clear, timely updates so you stay in
                control without living in carrier portals.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* DESKTOP VERSION – SVG pipeline diagram (no motion) */}
        <div className="relative z-10 hidden lg:flex justify-center mt-2 lg:mt-4 xl:mt-11">
          <Image
            src={"/issue_pipeline_dup.svg"}
            width={1800}
            height={400}
            alt={"Explanation of how it works - Diagram"}
            className="h-auto"
          />
        </div>
      </section>

      {/* ADD MOTION SECTION 4 - Pricing Section */}
      <section
        className="
    px-8 sm:px-14 lg:px-20
    pt-8 lg:pt-15 pb-8
    bg-[linear-gradient(to_right,#55AAFF2b,#88C4FF2b)]
    overflow-clip relative h-auto
  "
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
            },
          }}
          className="relative z-10"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="text-[#001121] font-bold text-[40px] lg:text-[60px]"
          >
            Easy, Transparent Pricing
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="text-[#001121] italic text-[16px] md:text-[18px] mt-3 md:mt-5"
          >
            Each plan includes all listed features
          </motion.p>

          <Link href="/pricing">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-[#001121] flex justify-end mt-9 items-center gap-2 cursor-pointer hover:text-[#001121]/85 transition-100"
            >
              <p className="font-bold text-[16px] md:text-[18px]">Full Pricing Details</p>
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
            </motion.div>
          </Link>

          <div
            className="mt-7"
          >
            <PriceDropdown />
          </div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="text-[#013058] font-bold pt-10 md:pt-14 lg:pt-17 text-right text-[13px] md:text-[15px]"
          >
            Pause or cancel anytime. No setup fees. No long-term contracts.
          </motion.p>
        </motion.div>

        {/* BG BLOBS (STATIC – CAN MOTION IF YOU WANT) */}
        <div className="absolute z-1 blur-[40px] top-70 w-[760px] bg-[radial-gradient(circle,#289BFF,#fff)] h-[400px] rounded-full bg-black "></div>
        <div className="absolute z-1 blur-[40px] left-0 bottom-18 w-[1000px] bg-[radial-gradient(circle,#0057A3,#fff)] h-[180px] rounded-full bg-black "></div>
        <div className="absolute z-0 blur-[40px] -right-10 top-80 w-[1000px] bg-[radial-gradient(circle,#289BFF,#fff)] h-[590px] rounded-full bg-black "></div>
      </section>

      {/* ADD MOTION SECTION 5 - CTA */}
      <section className="w-full px-6 sm:px-10 lg:px-20 py-10 lg:py-15 h-auto">
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



      {/* SECTION 6 - FAQs */}
      <section
        className="
    w-full
    px-6 sm:px-10 lg:px-20
    py-10 lg:py-15
    grid
    grid-cols-1 lg:grid-cols-2
    items-center
    gap-10
  "
      >
        <div className="w-full lg:w-fit mx-auto lg:mx-auto mb-auto text-center lg:text-left">
          <p
            className="
        font-semibold
        leading-10 sm:leading-15
        text-[32px] sm:text-[40px] lg:text-[50px]
      "
          >
            Frequently Asked<br />
            Questions
          </p>
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] mt-3.5">
            Answers to common questions
          </p>
          <div
            className="
        hidden lg:block mt-10 sm:mt-12 lg:mt-16
        bg-[#0088FF] hover:bg-[#027be5] duration-100
        px-3.5 py-1
        w-fit
        mx-auto lg:mx-0
        rounded-[10px]
      "
          >
            <Link
              href="/contact"
              className="text-white font-semibold text-[15px] sm:text-[16px] lg:text-[17px]"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="">
          <FAQDropDown />
        </div>
        <div
          className="
        lg:hidden mt-10 sm:mt-12 lg:mt-16
        bg-[#0088FF] hover:bg-[#027be5] duration-100
        px-3.5 py-1
        w-fit
        mx-auto lg:mx-0
        rounded-[10px]
      "
        >
          <Link
            href="/contact"
            className="text-white font-semibold text-[15px] sm:text-[16px] lg:text-[17px]"
          >
            Contact Sales
          </Link>
        </div>

      </section>

      <div>
        <Footer type={0} />
      </div>
    </main  >
  )
}