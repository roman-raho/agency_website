import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const links = [
  { id: "solution", label: "Solution", href: "/" },
  { id: "how-it-works", label: "How It Works", href: "how-it-works" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];


export default function Footer({ type }: { type: number }) {
  const imageSrc = type === 0 ? "/logo_5.png" : "/logo_4.png";
  return (
    <div className='py-15 flex flex-col items-center'>
      <div className='cursor-pointer w-fit h-fit overflow-clip rounded-[12px]'>
        <Link href="/">
          <Image className="block md:hidden" src={imageSrc} width={50} height={50} alt={"Roman Logistics Logo"} />
          <Image className="hidden md:block" src={imageSrc} width={62} height={62} alt={"Roman Logistics Logo"} />
        </Link>
      </div>
      <nav className="flex flex-col md:flex-row items-center mt-7 md:mt-10 justify-center gap-[6px] md:gap-[43px]" >
        {
          links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-[15px] font-regular text-[#535353] hover:text-[#AEAEAE]"
            >
              {link.label}
            </Link>
          ))
        }
      </nav>
      <div className='flex justify-center mt-8 gap-5 md:gap-10'>
        <p className='italic text-[11px] md:text-[13px] text-[#535353]'>+44 7404 583395</p>
        <p className='italic text-[11px] md:text-[13px] text-[#535353]'>roman@romanlogistics.co.uk</p>
      </div>
    </div >
  )
}
