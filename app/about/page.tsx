import Footer from "../utils/Footer";
import Header from "../utils/Header";

export default function AboutPage() {
  return (
    <main>
      <Header pageType={1}></Header>

      <section className="w-full px-6 md:px-20 pt-30 pb-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[45px] md:text-[60px] font-semibold text-[#001121]">
            About the Founder
          </h2>
          <p className="mt-2 text-[14px] md:text-[15px] text-[#5a5a5a]">
            Built for watch brands by a founder who&apos;s lived the shipping chaos.
          </p>

          {/* Intro paragraph */}
          <p className="mt-8 text-center text-[15px] leading-7 text-[#222222]">
            I started this after running my own watch microbrand, shipping Seiko mods and small-batch
            releases to customers around the world. I dealt with every problem you&apos;re facing now —
            delays with no explanation, customs holds, missing scans, damaged parcels, and anxious
            customers wanting answers I didn&apos;t have. After years of handling these issues myself,
            I built the system I always wished existed: a structured, calm way to manage the messy side
            of shipping so founders can focus on building their brand, not chasing couriers.
          </p>
        </div>

        {/* Experience Highlights */}
        <div className="max-w-3xl mx-auto mt-10">
          <h3 className="text-[18px] font-semibold text-[#001121] mb-3">
            Experience Highlights
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-[#222222]">
            <li>Shipped internationally to over 20 countries</li>
            <li>Managed hundreds of courier issues directly</li>
            <li>Learned escalation systems through real-world experience</li>
            <li>Built structured workflows that now power this service</li>
          </ul>
        </div>

        {/* How I Work */}
        <div className="max-w-3xl mx-auto mt-10">
          <h3 className="text-[18px] font-semibold text-[#001121] mb-3">
            How I Work
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-[#222222]">
            <li>
              <span className="font-semibold">Clarity —</span> Every issue gets a structured, transparent update
            </li>
            <li>
              <span className="font-semibold">Calm —</span> Customers are guided without fear, frustration, or confusion
            </li>
            <li>
              <span className="font-semibold">Consistency —</span> Daily checks, follow-ups, and no forgotten cases
            </li>
          </ul>
        </div>

        {/* Why I Built this Service */}
        <div className="max-w-3xl mx-auto mt-10 text-left">
          <h3 className="text-[18px] font-semibold text-[#001121] mb-3 text-center">
            Why I Built this Service
          </h3>
          <p className="text-[15px] leading-7 text-[#222222]">
            I built this because founders shouldn&apos;t have to spend hours each week chasing couriers or
            calming anxious customers. Lost parcels, customs holds, returns, delays, and vague tracking
            updates can overwhelm small teams fast. This service exists to take that entire burden off
            your plate — giving watch brands a predictable, reliable partner who handles shipping
            problems quietly and professionally in the background.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-14 text-center">
          <h3 className="text-[40px] md:text-[48px] font-semibold text-[#001121] mb-10">
            Ready to get Started?
          </h3>
          <button className="flex gap-2 mx-auto items-center justify-center px-4 py-1 border border-[#001121] rounded-[10px] text-[16px] font-semibold text-[#001121] hover:bg-[#001121] hover:text-white transition">
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
        </div>
      </section>

      <Footer type={0}></Footer>

    </main>
  )
}
