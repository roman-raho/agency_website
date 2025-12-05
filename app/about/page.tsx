"use client"

import Link from "next/link";
import Footer from "../utils/Footer";
import Header from "../utils/Header";
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main>
      <Header pageType={1}></Header>

      <motion.section
        className="w-full px-6 sm:px-10 md:px-20 pt-24 md:pt-30 pb-20 md:pb-24 bg-white"
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
        {/* Heading + intro */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-semibold text-[#001121]">
            About the Founder
          </h2>
          <p className="mt-2 text-[13px] sm:text-[14px] md:text-[15px] text-[#5a5a5a]">
            Built for brands by a founder who&apos;s lived the shipping chaos.
          </p>

          {/* Intro paragraph */}
          <p className="mt-8 text-[14px] sm:text-[15px] leading-7 text-[#222222]">
            I started this after running my own watch microbrand, shipping small-batch
            releases to customers around the world. I dealt with every problem you&apos;re facing now -
            delays with no explanation, customs holds, missing scans, damaged parcels, and anxious
            customers wanting answers I didn&apos;t have. After years of handling these issues myself,
            I built the system I always wished existed: a structured, calm way to manage the messy side
            of shipping so founders can focus on building their brand, not chasing couriers.
          </p>
        </motion.div>

        {/* How I Work */}
        <motion.div
          className="max-w-3xl mx-auto mt-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <h3 className="text-[17px] md:text-[18px] font-semibold text-[#001121] mb-3">
            How I Work
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] leading-7 text-[#222222]">
            <li>
              <span className="font-semibold">Clarity -</span> Every issue gets a structured, transparent update
            </li>
            <li>
              <span className="font-semibold">Calm -</span> Customers are guided without fear, frustration, or confusion
            </li>
            <li>
              <span className="font-semibold">Consistency -</span> Daily checks, follow-ups, and no forgotten cases
            </li>
          </ul>
        </motion.div>

        {/* Why I Built this Service */}
        <motion.div
          className="max-w-3xl mx-auto mt-10 text-left"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <h3 className="text-[17px] md:text-[18px] font-semibold text-[#001121] mb-3 text-center">
            Why I Built this Service
          </h3>
          <p className="text-[14px] sm:text-[15px] leading-7 text-[#222222]">
            I built this because founders shouldn&apos;t have to spend hours each week chasing couriers or
            calming anxious customers. Lost parcels, customs holds, returns, delays, and vague tracking
            updates can overwhelm small teams fast. This service exists to take that entire burden off
            your plate - giving brands a predictable, reliable partner who handles shipping
            problems quietly and professionally in the background.
          </p>
        </motion.div>

        {/* CTA */}
        <Link href="/contact">
          <motion.div
            className="max-w-3xl mx-auto mt-16 md:mt-22 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <h3 className="text-[40px] sm:text-[50px] md:text-[60px] font-semibold text-[#001121] mb-8 md:mb-10">
              Ready to get Started?
            </h3>
            <button className="flex gap-2 mx-auto items-center justify-center px-4 py-1 border border-[#001121]/40 rounded-[10px] text-[15px] md:text-[16px] font-semibold text-[#001121] hover:bg-[#001121] hover:text-white transition">
              Contact Sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="6 6 16 12"
              >
                <path
                  fill="currentColor"
                  d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
                />
              </svg>
            </button>
          </motion.div>
        </Link>
      </motion.section>


      <Footer type={0}></Footer>

    </main>
  )
}
