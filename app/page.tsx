import Header from "./utils/Header";
import { colours } from "./colours.js"
import { LearnMoreBtn, WorkWithUsBtn } from "./utils/Buttons";
import Image from "next/image.js";
import Link from "next/link";
import PriceDropdown from "./interactive/PriceDropdown";

const IMAGES = [
  "/CourierLogos/DHL.png",
  "/CourierLogos/FEDEX.png",
  "/CourierLogos/UPS.png",
  "/CourierLogos/ROYAL_MAIL.png",
  "/CourierLogos/EVRI.webp",
  "/CourierLogos/DPD.png",
];

export default function LandingPage() {
  return (
    <main>
      <Header pageType={0}></Header>

      {/* HERO SECTION */}

      <section className={`${colours.background_hero}
      h-[770px]
      flex items-center justify-center gap-55`}>
        <div>
          <div>
            <div className="inline-block px-2.5 py-1 bg-[#c5e2ff]/22 rounded-[9px]">
              <p className="text-white font-bold text-[16px]">Used by independent watch brands worldwide</p>
            </div>
            <p className="font-semibold mt-5 text-white text-[35px] tracking-[1px] leading-tight">
              Managing the messy side <br />of watch-brand shipping
            </p>
            <p className="font-light mt-5 text-[#e8e8e8] text-[14px]">
              Built by a watch microbrand founder who shipped internatioanally.
            </p>
            <p className="leading-[30px] mt-1 text-[22px] font-medium text-white ">
              We handle everything that can go wrong <br />after your watches ship - from customs <br />seizures to lost parcels alongside <br />operational work: filing claims, chasing <br />couriers, updating customers, and more.
            </p>
          </div>
          <div className="mt-14">
            <WorkWithUsBtn height={37} width={157} />
          </div>
        </div>

        {/* Elipses */}
        <div className="absolute top-40 right-40 w-[320px] h-[220px] rounded-full bg-[#024384] blur-[40px] opacity-50"></div>
        <div className="absolute top-75 right-130 w-[120px] h-[170px] rounded-full bg-[#0b84fd] blur-[40px] opacity-50"></div>
        <div className="absolute top-115 right-50 w-[240px] h-[140px] rounded-full bg-[#09549f] blur-[40px] opacity-50"></div>
        {/* Glass Panel */}
        <div
          className="
    relative
    w-[360px] p-8 rounded-2xl
    bg-white/10 backdrop-blur-xl
    border border-white/60
    shadow-[0_20px_40px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_14px_rgba(255,255,255,0.22)]
    text-white
  "
        >
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
        </div>

      </section>

      {/* SECTION 1 - COURIERS */}

      <section className="w-full h-auto px-20 py-15">
        <div className="flex items-center justify-center">
          <div className="text-[30px] font-bold text-[#006FE4]"><span className="opacity-40">We deal with </span><span className="opacity-100">all major</span><span className="opacity-40"> couriers</span></div>
        </div>

        {/* INFINITE SCROLL */}
        <div
          className="
    relative
    w-250
    mx-auto mt-13
    overflow-hidden
    py-4
  "
        >
          {/* Fade left */}
          <div
            className="
      pointer-events-none
      absolute left-0 top-0 h-full w-60 
      bg-gradient-to-r from-white to-transparent
      z-20
    "
          />

          {/* Fade right */}
          <div
            className="
      pointer-events-none
      absolute right-0 top-0 h-full w-60
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
              <div key={`a-${i}`} className="mx-13 flex items-center justify-center">
                <Image
                  src={src}
                  alt=""
                  width={200}
                  height={200}
                  className="object-contain"
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
              <div key={`b-${i}`} className="mx-13 flex items-center justify-center">
                <Image
                  src={src}
                  alt=""
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 px-17 py-14 border rounded-[12px] border-[#cecece] h-auto">
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

            <span className="text-[#00284b] font-semibold">Time Save</span>
          </div>

          <p className="font-bold text-[53px]">
            All your <br />shipping headaches <span className="text-[#0088FF]">gone.</span>
          </p>

          {/* 3 Box Breakdown */}
          <div className="mt-21 grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-16 ">

            {/* Card 1 */}
            <div>
              <div className="w-16 h-16 p-1 rounded-[9px] bg-[#289BFF]/12">
                <div className="flex items-center justify-center text-[#289BFF] w-full h-full rounded-[9px] bg-[#f3f9ff]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m20 7l-8-4l-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>

              <p className="mt-6 font-semibold leading-[1.35] tracking-[1px] text-[28px]">
                Dealing with Courier <br />Chaos
              </p>
              <p className="mt-3 text-[#545454] leading-[1.5] text-[19px]">
                Lost parcels, customs issues and <br />tracking dead-ends waste your time. <br />
                We take over all carrier communication <br />and resolve issues for you.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="w-16 h-16 p-1 rounded-[9px] bg-[#289BFF]/12">
                <div className="flex items-center justify-center text-[#289BFF] w-full h-full rounded-[9px] bg-[#f3f9ff]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 1000 1000">
                    <path fill="currentColor" d="m746 641l254 255l-105 105l-254-254q-106 72-232 72q-169 0-289-120T0 410t120-289T409 1t289 120t120 289q0 127-72 231zm-65-231q0-113-79.5-193T409 137t-193 80t-80 193t80 192.5T409 682t192.5-79.5T681 410z" />
                  </svg>
                </div>
              </div>

              <p className="mt-6 font-semibold leading-[1.35] tracking-[1px] text-[28px]">
                Claims and <br />Investigations Hell
              </p>
              <p className="mt-3 text-[#545454] leading-[1.5] text-[19px]">
                Claims are confusing and easy to <br />get wrong. We manage the full <br />
                investigation → claim → resolution <br />process.
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <div className="w-16 h-16 p-1 rounded-[9px] bg-[#289BFF]/12">
                <div className="flex items-center justify-center text-[#289BFF] w-full h-full rounded-[9px] bg-[#f3f9ff]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
                    <path fill="currentColor" fillRule="evenodd" d="M10 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-9 8c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10c1.68 0 3.162.44 4.18 1.041c1.1.65 1.32 1.255 1.32 1.459a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1m5.5-4c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <p className="mt-6 font-semibold leading-[1.35] tracking-[1px] text-[28px]">
                Customer Stress and <br />Reputation Risk
              </p>
              <p className="mt-3 text-[#545454] leading-[1.5] text-[19px]">
                Delays make customers anxious. <br />
                We handle all shipping related <br />
                communication to protect your <br />brand experience.
              </p>
            </div>

          </div>
          <div className="mt-14 mx-auto w-full flex justify-center">
            <LearnMoreBtn width={145} height={37} />
          </div>
        </div>
      </section>

      {/* SECTION 2 - Founders Note */}
      <section className="px-20 pt-3 pb-15 w-full">
        <div className="grid grid-cols-[11%_89%] items-start">
          <div className="h-20 w-20 rounded-full bg-[radial-gradient(circle,_#6aaeff_0%,_#add3ff_55%,_#eef6ff_100%)]" />
          <div>
            <p className="font-bold text-[40px] text-[#021f3b]">Founders Note</p>
            <p className="mt-2 text-[17px] italic">Built by a watch microbrand founder who shipped worldwide.</p>
            <p className="mt-5 text-[22px]">I built this after running a watch microbrand. Shipping Seiko mods worldwide <br />showed me how chaotic couriers can be - this is the system I wish I had.</p>
            <div className="mt-4">
              <Link href="#about" className="font-semibold text-[17px]">
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - How it Works */}
      <section className={`px-20 overflow-clip py-15 relative h-180 w-full ${colours.background_hero}`}>
        <div className="absolute z-0 top-30 right-40 w-[420px] h-[320px] rounded-full bg-[#1e81e3] blur-[40px] opacity-50"></div>
        <div className="absolute z-0 top-70 left-40 w-[350px] h-[400px] rounded-full bg-[#033465] blur-[40px] opacity-50"></div>
        <div className="absolute z-0 -bottom-50 right-40 w-[600px] h-[300px] rounded-full bg-[#06498b] blur-[40px] opacity-50"></div>

        <div className="flex z-10 relative justify-between items-center">
          <div>
            <p className="font-bold text-[#0088FF] text-[27px] mb-2">How it works</p>
            <p className="font-bold text-white text-[55px]"><span className="italic">Simple, </span><br />Intuitive & quick.</p>
            <div className="bg-white cursor-pointer hover:shadow-lg transition-100 hover:shadow-white/10 w-fit px-4 mt-19 py-1.5 rounded-[10px] flex items-center gap-2">
              <p className="font-semibold">See full process</p>
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
            </div>
          </div>

          <p className="font-semibold text-[31px] leading-11 text-white text-right">We plug directly into your<br />shipping flow, monitor every<br />parcel in real time and resolve<br />issues before they impact your<br />customers.</p>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-2 pb-3 mt-2 ">
          <p className="text-white font-bold tracking-[0.5px] text-[24px]">Issue</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 24 24"
            className="fill-[url(#errorGradient)]"
          >
            <defs>
              <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9ECDFF" />
                <stop offset="100%" stopColor="#3F9DFF" />
              </linearGradient>
            </defs>

            <path d="m12 1l11.951 20.7H.05L12 1ZM3.513 19.7h16.974L12 5L3.513 19.7ZM13 9.5V15h-2V9.5h2Zm-2 7h2.004v2.004H11V16.5Z" />
          </svg>
        </div>
        <div className="relative grid grid-cols-3 mt-15 ">
          <svg
            className="absolute left-44 top-1/2 -translate-y-1/2 w-[74px] h-[4px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#3F9DFF"
              strokeWidth="6"
              strokeDasharray="14 10"
            />
          </svg>
          <svg
            className="absolute right-46 top-1/2 -translate-y-1/2 w-[71px] h-[4px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#3F9DFF"
              strokeWidth="6"
              strokeDasharray="14 10"
            />
          </svg>
          <svg
            className="absolute left-110 -rotate-[22deg] bottom-16.5 w-[228.5px] h-[4px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#3F9DFF"
              strokeWidth="6"
              strokeDasharray="14 10"
            />
          </svg>
          <svg
            className="absolute right-110 rotate-[22deg] bottom-16.5 w-[228.5px] h-[4px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#3F9DFF"
              strokeWidth="6"
              strokeDasharray="14 10"
            />
          </svg>
          <div className="flex items-center gap-25">
            <p className="text-white leading-7 font-bold text-[24px] tracking-[0.5px]">Onboard onto <br />our system</p>
            <p className="text-white leading-7 font-bold text-[24px] tracking-[0.5px]">Monitor your <br />shipments</p>
          </div>
          <div>

          </div>
          <div className="flex items-center justify-start gap-25">
            <p className="text-white leading-7 ml-4 font-bold text-[24px] tracking-[0.5px]">We deal with <br />issues</p>
            <p className="text-white leading-7 font-bold text-[24px] tracking-[0.5px]">You get <br />updated</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Pricing Section */}
      <section className="px-20 py-15 bg-[linear-gradient(to_right,#55AAFF2b,#88C4FF2b)] overflow-clip relative h-auto">
        <div className="relative z-10">
          <p className="text-[#001121] font-bold text-[60px]">Simple, Transparent Pricing</p>
          <p className="text-[#001121] italic text-[18px] mt-5">Each plan includes all listed features</p>
          <div className="text-[#001121] flex justify-end mt-9 items-center gap-2 cursor-pointer hover:text-[#001121]/85 transition-100">
            <p className="font-bold text-[18px]">Full Pricing Details</p>
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
          </div>
          <div className="mt-7">
            <PriceDropdown />
          </div>
        </div>
        <div className="absolute z-1 blur-[40px] top-70 w-[760px] bg-[radial-gradient(circle,#289BFF,#fff)] h-[320px] rounded-full bg-black "></div>
        <div className="absolute z-1 blur-[40px] left-15 bottom-5 w-[900px] bg-[radial-gradient(circle,#0057A3,#fff)] h-[200px] rounded-full bg-black "></div>
        <div className="absolute z-0 blur-[40px] right-0 top-55 w-[1000px] bg-[radial-gradient(circle,#289BFF,#fff)] h-[800px] rounded-full bg-black "></div>
      </section>
    </main >
  )
}