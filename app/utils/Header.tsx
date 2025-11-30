"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WorkWithUsBtn } from "./Buttons";
import { usePathname } from "next/navigation";

const links = [
  { id: "solution", label: "Solution", href: "/" },
  { id: "how-it-works", label: "How It Works", href: "how-it-works" },
  { id: "pricing", label: "Pricing", href: "pricing" },
  { id: "about", label: "About", href: "about" },
  { id: "contact", label: "Contact", href: "contact" },
];

export default function Header({ pageType }: { pageType: number }) {
  const pathname = usePathname();

  // normalise pathname so it matches your hrefs ("pricing", "about", etc.)
  const normalizedPath =
    pathname && pathname.startsWith("/") ? pathname.slice(1) : pathname;

  // Which tab should be active based on the current URL
  const activeTab =
    links.find(
      (l) => l.href === pathname || l.href === normalizedPath
    )?.id ?? "solution";

  if (pageType !== 0 && pageType !== 1 && pageType !== 2) return null;

  if (pageType === 0) return (
    <div className="absolute flex w-full justify-center items-center gap-35 my-[22px]" >
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center gap-2.5">
        <Image src="/logo_1.png" alt="Logo" width={49} height={49}></Image>
        <p className="font-bold text-[21px] tracking-[0.5px] text-white">ROMAN</p>
      </Link >

      {/* Navigation */}
      <nav className="flex items-center justify-center gap-[25px]" >
        {
          links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-[16px] font-semibold transition-colors ${activeTab !== link.id ? "text-white" : "text-white/70"
                } hover:text-white/70`}
            >
              {link.label}
            </Link>
          ))
        }
      </nav >

      {/* CTA */}
      < WorkWithUsBtn width={155} height={37} ></WorkWithUsBtn >
    </div >
  )

  if (pageType === 1) return (
    <div className="absolute flex w-full justify-center items-center gap-35 my-[22px]" >
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center gap-2.5">
        <Image src="/logo_1.png" alt="Logo" width={49} height={49}></Image>
        <p className="font-bold text-[21px] tracking-[0.5px] text-[#001121]">ROMAN</p>
      </Link >

      {/* Navigation */}
      <nav className="flex items-center justify-center gap-[25px]" >
        {
          links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-[16px] font-semibold transition-colors ${activeTab !== link.id ? "text-[#001121]" : "text-[#001121]/70"
                } hover:text-[#001121]/70`}
            >
              {link.label}
            </Link>
          ))
        }
      </nav >

      {/* CTA */}
      < WorkWithUsBtn width={155} height={37} ></WorkWithUsBtn >
    </div >
  )

  if (pageType === 2) return (
    <div className="absolute flex w-full justify-center items-center gap-35 my-[22px]" >
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center gap-2.5">
        <Image src="/logo_2.png" alt="Logo" width={49} height={49}></Image>
        <p className="font-bold text-[21px] tracking-[0.5px] text-[#001121]">ROMAN</p>
      </Link >

      {/* Navigation */}
      <nav className="flex items-center justify-center gap-[25px]" >
        {
          links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-[16px] font-semibold transition-colors ${activeTab !== link.id ? "text-[#001121]" : "text-[#001121]/70"
                } hover:text-[#001121]/70`}
            >
              {link.label}
            </Link>
          ))
        }
      </nav >

      {/* CTA */}
      < WorkWithUsBtn width={155} height={37} ></WorkWithUsBtn >
    </div >
  )
}
