"use client";

import Header from '../utils/Header'
import Footer from '../utils/Footer'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <main>
      <Header pageType={1}></Header>

      {/* ONLY SECTION */}
      <motion.section
        className="w-full px-6 sm:px-10 lg:px-20 pt-20 lg:pt-35 pb-15"
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
          className="flex flex-col items-center justify-center text-center"
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <p className="font-semibold text-[30px] sm:text-[38px] lg:text-[60px]">
            Chat with our team
          </p>
          <p className="mt-2 text-[14px] sm:text-[16px] lg:text-[18px] leading-6 text-center">
            Contact our team on email or WhatsApp for
            <br className="hidden sm:block" />
            quick and personal assistance
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="flex flex-col md:flex-row xs:items-center items-stretch gap-8 md:gap-10 justify-center pt-14 lg:pt-20"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          {/* WhatsApp card */}
          <motion.div
            className="w-full max-w-md md:w-95 border-[#001121]/18 pl-5 sm:pl-7 py-5 rounded-[10px] border"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
            }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                className="sm:w-10 sm:h-10"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1H9.171L9 16.171V16H6c-.542 0-1-.458-1-1V8c0-.542.458-1 1-1h12m0-2H6C4.35 5 3 6.35 3 8v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3V8c0-1.65-1.35-3-3-3z"
                />
              </svg>
              <p className="font-semibold text-[22px] sm:text-[26px] lg:text-[29px]">
                WhatsApp
              </p>
            </div>
            <p className="w-[90%] md:w-[85%] mt-2 ml-1 sm:ml-2 text-[14px] sm:text-[16px] lg:text-[18px] text-[#000000] leading-6">
              Message our team on WhatsApp -
              we will answer your questions and
              can help you book a call if needed.
            </p>
            <Link
              href="https://wa.me/message/N2HI2EGESWBDE1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex mt-6 sm:mt-8 ml-1 sm:ml-2 items-center gap-2 text-white font-semibold bg-[#007bff] w-fit py-1 rounded-[9px] px-4">
                <p>Text us</p>
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
              </div>
            </Link>
            <p className="text-[12px] sm:text-[14px] ml-1 sm:ml-2 mt-3 text-[#3a3a3a]">
              Or text us at +44 7404 583395
            </p>
          </motion.div>

          {/* Email card */}
          <motion.div
            className="w-full max-w-md md:w-95 border-[#001121]/18 pl-5 sm:pl-7 py-5 rounded-[10px] border"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut", delay: 0.1 },
              },
            }}
          >
            <div className="flex items-center gap-3 sm:gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-0.5 sm:ml-1"
                width="28"
                height="28"
                viewBox="0 0 20 24"
              >
                <path
                  fill="currentColor"
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671L18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                />
              </svg>
              <p className="font-semibold text-[22px] sm:text-[26px] lg:text-[29px]">
                Email
              </p>
            </div>
            <p className="w-[90%] md:w-[85%] mt-2 ml-1 sm:ml-2 text-[14px] sm:text-[16px] lg:text-[18px] text-[#000000] leading-6">
              Send our team an email and we can
              answer any of your questions or help
              book your call.
            </p>
            <Link href="mailto:support@romanlogistics.co.uk">
              <div className="flex mt-6 sm:mt-8 ml-1 sm:ml-2 items-center gap-2 text-white font-semibold bg-[#007bff] w-fit py-1 rounded-[9px] px-4">
                <p>Email us</p>
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
              </div>
            </Link>
            <p className="text-[12px] sm:text-[14px] ml-1 sm:ml-2 mt-3 text-[#3a3a3a]">
              Or email us at support@romanlogistics.co.uk
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer type={1}></Footer>
    </main>
  )
}
