"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WorkWithUsBtn } from "./Buttons";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "solution", label: "Solution", href: "/" },
  { id: "how-it-works", label: "How It Works", href: "how-it-works" },
  { id: "pricing", label: "Pricing", href: "pricing" },
  { id: "about", label: "About", href: "about" },
  { id: "contact", label: "Contact", href: "contact" },
];

export default function Header({ pageType }: { pageType: number }) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

  // normalise pathname so it matches your hrefs ("pricing", "about", etc.)
  const normalizedPath =
    pathname && pathname.startsWith("/") ? pathname.slice(1) : pathname;

  // Which tab should be active based on the current URL
  const activeTab =
    links.find(
      (l) => l.href === pathname || l.href === normalizedPath
    )?.id ?? "solution";

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  if (pageType !== 0 && pageType !== 1 && pageType !== 2) return null;

  if (pageType === 0) return (
    <div className="flex z-40 relative flex-col md:absolute top-0 md:top-5 lg:top-5.5 left-0 w-full px-6">
      {/* my-[22px] */}
      {/* Logo */}
      <Link href="/" className="absolute z-1 
      left-6.5 top-4.5 
      md:top-0 
      lg:left-10
      xl:left-17
      flex items-center justify-center 
      gap-1.5
      md:gap-2.5">
        <Image className="hidden md:block" src="/logo_1.png" alt="Logo" width={45} height={45}></Image>
        <Image className="md:hidden" src={`${dropdownOpen ? "/logo_2.png" : "/logo_1.png"}`} alt="Logo" width={41} height={41}></Image>
        <p className={`font-bold duration-100 transition-colors
        text-[18px]
        lg:text-[21px] lg:font-bold 
        lg:tracking-[0.5px] ${dropdownOpen ? "text-[#001121] md:text-white" : "text-white"}`}>ROMAN</p>
      </Link >

      {/* Dropdown */}
      {/* ✅ CHANGED: wrap conditional dropdown in AnimatePresence + motion.nav for enter/exit animation */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.nav
            className="absolute md:hidden flex flex-col gap-1.5 left-0 pl-11 pt-19 pb-10 z-0 top-0 w-full bg-[#fefefe] h-auto"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeInOut" }} // ✅ ADDED: smooth slide + fade
          >
            {
              links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-[32px] font-bold ${activeTab === link.id ? "text-[#001121]" : "text-[#001121]/60"}`}
                >
                  {link.label}
                </Link>
              ))
            }
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="hidden absolute left-1/2 -translate-x-1/2 md:top-3 md:flex items-center gap-[22px]">
        {
          links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-[14px] lg:text-[16px] font-semibold transition-colors ${activeTab !== link.id ? "text-white" : "text-white/70"
                } hover:text-white/70`}
            >
              {link.label}
            </Link>
          ))
        }
      </nav >

      {/* ✅ CHANGED: make icon wrapper a motion.div so hamburger/cross rotate + fade on toggle */}
      <motion.div
        className={`md:hidden z-1 ${dropdownOpen ? "text-[#00284d]/80" : "text-white/80"} absolute top-5.5 right-8`}
        onClick={toggleDropdown}
        animate={{
          rotate: dropdownOpen ? 90 : 0,
          opacity: dropdownOpen ? 0.8 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {
          !dropdownOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 25 24">
              <path fill="currentColor" d="M3.563 6a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m0 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m.75-6.75a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06" />
                <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0" />
              </g>
            </svg>
          )
        }
      </motion.div>

      {/* CTA */}
      <div className="hidden lg:flex absolute top-1.5 right-15 xl:right-22">
        < WorkWithUsBtn width={155} height={37} ></WorkWithUsBtn >
      </div>
      <div className="hidden md:flex lg:hidden absolute top-1.5 right-12 lg:right-15 xl:right-22">
        < WorkWithUsBtn width={137} height={32} ></WorkWithUsBtn >
      </div>
    </div >
  )

  if (pageType === 1) return (
    <div className="flex z-40 relative flex-col md:absolute top-0 md:top-5 lg:top-5.5 left-0 w-full px-6">
      {/* my-[22px] */}
      {/* Logo */}
      <Link href="/" className="absolute z-1 
      left-6.5 top-4.5 
      md:top-0 
      lg:left-10
      xl:left-17
      flex items-center justify-center 
      gap-1.5
      md:gap-2.5">
        <Image className="hidden md:block" src="/logo_1.png" alt="Logo" width={45} height={45}></Image>
        <Image className="block md:hidden" src="/logo_1.png" alt="Logo" width={41} height={41}></Image>
        <p className={`font-bold duration-100 transition-colors
        text-[18px]
        lg:text-[21px] lg:font-bold 
        lg:tracking-[0.5px] ${dropdownOpen ? "text-[#001121] md:text-[#001121]" : "text-[#001121]"}`}>ROMAN</p>
      </Link >

      {/* Dropdown */}
      {/* ✅ CHANGED: wrap conditional dropdown in AnimatePresence + motion.nav for enter/exit animation */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.nav
            className="absolute md:hidden flex flex-col gap-1.5 left-0 pl-11 pt-19 pb-10 z-0 top-0 w-full bg-[#fefefe] h-auto"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeInOut" }} // ✅ ADDED: smooth slide + fade
          >
            {
              links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-[32px] font-bold ${activeTab === link.id ? "text-[#001121]" : "text-[#001121]/60"}`}
                >
                  {link.label}
                </Link>
              ))
            }
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="hidden absolute left-1/2 -translate-x-1/2 md:top-3 md:flex items-center gap-[22px]">
        {
          links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-[14px] lg:text-[16px] font-semibold transition-colors ${activeTab !== link.id ? "text-[#001121]" : "text-[#001121]/40"
                } hover:text-[#001121]/70`}
            >
              {link.label}
            </Link>
          ))
        }
      </nav >

      {/* ✅ CHANGED: make icon wrapper a motion.div so hamburger/cross rotate + fade on toggle */}
      <motion.div
        className={`md:hidden z-1 ${dropdownOpen ? "text-[#00284d]/80" : "text-[#001121]/80"} absolute top-5.5 right-8`}
        onClick={toggleDropdown}
        animate={{
          rotate: dropdownOpen ? 90 : 0,
          opacity: dropdownOpen ? 0.8 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {
          !dropdownOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 25 24">
              <path fill="currentColor" d="M3.563 6a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m0 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m.75-6.75a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06" />
                <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0" />
              </g>
            </svg>
          )
        }
      </motion.div>

      {/* CTA */}
      <div className="hidden lg:flex absolute top-1.5 right-15 xl:right-22">
        < WorkWithUsBtn width={155} height={37} ></WorkWithUsBtn >
      </div>
      <div className="hidden md:flex lg:hidden absolute top-1.5 right-12 lg:right-15 xl:right-22">
        < WorkWithUsBtn width={137} height={32} ></WorkWithUsBtn >
      </div>
    </div >
  )

  if (pageType === 2) return (
    <div className="flex z-40 relative flex-col md:absolute top-0 md:top-5 lg:top-5.5 left-0 w-full px-6">
      {/* my-[22px] */}
      {/* Logo */}
      <Link href="/" className="absolute z-1 
      left-6.5 top-4.5 
      md:top-0 
      lg:left-10
      xl:left-17
      flex items-center justify-center 
      gap-1.5
      md:gap-2.5">
        <Image className="hidden md:block" src="/logo_1.png" alt="Logo" width={45} height={45}></Image>
        <Image className="md:hidden" src="/logo_2.png" alt="Logo" width={41} height={41}></Image>
        <p className={`font-bold duration-100 transition-colors
        text-[18px]
        lg:text-[21px] lg:font-bold 
        lg:tracking-[0.5px] ${dropdownOpen ? "text-[#001121] md:text-[#001121]" : "text-[#001121]"}`}>ROMAN</p>
      </Link >

      {/* Dropdown */}
      {/* ✅ CHANGED: wrap conditional dropdown in AnimatePresence + motion.nav for enter/exit animation */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.nav
            className="absolute md:hidden flex flex-col gap-1.5 left-0 pl-11 pt-19 pb-10 top-0 w-full bg-[#fefefe] h-auto"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeInOut" }} // ✅ ADDED: smooth slide + fade
          >
            {
              links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-[32px] font-bold ${activeTab === link.id ? "text-[#001121]" : "text-[#001121]/60"}`}
                >
                  {link.label}
                </Link>
              ))
            }
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="hidden absolute left-1/2 -translate-x-1/2 md:top-3 md:flex items-center gap-[22px]">
        {
          links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-[14px] lg:text-[16px] font-semibold transition-colors ${activeTab !== link.id ? "text-[#001121]" : "text-[#001121]/40"
                } hover:text-[#001121]/70`}
            >
              {link.label}
            </Link>
          ))
        }
      </nav >

      {/* ✅ CHANGED: make icon wrapper a motion.div so hamburger/cross rotate + fade on toggle */}
      <motion.div
        className={`md:hidden z-1 ${dropdownOpen ? "text-[#00284d]/80" : "text-[#001121]/80"} absolute top-5.5 right-8`}
        onClick={toggleDropdown}
        animate={{
          rotate: dropdownOpen ? 90 : 0,
          opacity: dropdownOpen ? 0.8 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {
          !dropdownOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 25 24">
              <path fill="currentColor" d="M3.563 6a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m0 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m.75-6.75a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06" />
                <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0" />
              </g>
            </svg>
          )
        }
      </motion.div>

      {/* CTA */}
      <div className="hidden lg:flex absolute top-1.5 right-15 xl:right-22">
        < WorkWithUsBtn width={155} height={37} ></WorkWithUsBtn >
      </div>
      <div className="hidden md:flex lg:hidden absolute top-1.5 right-12 lg:right-15 xl:right-22">
        < WorkWithUsBtn width={137} height={32} ></WorkWithUsBtn >
      </div>
    </div >
  )
}
