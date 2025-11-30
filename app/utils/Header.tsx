"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WorkWithUsBtn } from "./Buttons";

const links = [
  { id: "solution", label: "Solution", href: "#" },
  { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header({ pageType }: { pageType: number }) {
  const [activeTab, setActiveTab] = useState<string>("solution");

  if (pageType !== 0 && pageType !== 1) return null;

  if (pageType === 0) return (
    <div className="absolute flex w-full justify-center items-center gap-35 my-[22px]" >
      {/* Logo */}
      <div className="flex items-center justify-center gap-2" >
        <Image src="/logo_1.png" alt="Logo" width={49} height={49}></Image>
        <p className="font-bold text-[21px] tracking-[0.5px] text-white">ROMAN</p>
      </div >

      {/* Navigation */}
      <nav className="flex items-center justify-center gap-[25px]" >
        {
          links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setActiveTab(link.id)}
              className={`text-[16px] font-bold transition-colors ${activeTab !== link.id ? "text-white" : "text-[#AEAEAE]"
                } hover:text-[#AEAEAE]`}
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
