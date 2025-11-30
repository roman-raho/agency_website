import React from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import PriceDropdown from '../interactive/PriceDropdown'

export default function PricingPage() {
  return (
    <main className='bg-[linear-gradient(to_right,#55AAFF2b,#88C4FF2b)] w-full'>
      <Header pageType={2} />

      {/* SECTION 1 - Free Trial */}
      <section className="w-full px-25 pt-35 pb-15 h-auto">
        <div className="grid grid-rows-1 grid-cols-[80%_20%] border rounded-[12px] px-10 py-5 border-[#001121]/17">
          <div className="py-3">
            <p className="font-bold text-[#001121] text-[40px]">2 Week Free Trial</p>
            <p className="text-[#001121] text-[13px] mt-1">No credit card required</p>
          </div>
          <div className="flex items-center border border-[#001121]/17 duration-100 hover:border-[#001121]/21 h-fit w-fit px-4 py-2 rounded-[10px] justify-self-end mt-auto gap-2 cursor-pointer">
            <p className="font-semibold">Contact Page</p>
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
      </section>

      {/* SECTION 2 - Pricing Details */}

      <section className="px-25 pb-8 bg-transparent overflow-x-clip relative h-auto">
        <div className="relative z-10">
          <p className="text-[#001121] font-bold text-[60px]">Plan Breakdown</p>
          <p className="text-[#001121] italic text-[18px] mt-5">Each plan includes all listed features</p>
          <div className="text-[#001121] flex justify-end mt-9 items-center gap-2 cursor-pointer hover:text-[#001121]/85 transition-100">
            <p className="font-bold text-[18px]">Contact sales</p>
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
          <p className="text-[#013058] font-bold  pt-17 text-right text-[15px]">Pause or cancel anytime. No setup fees. No long-term contracts.</p>

        </div>
        <div className="absolute z-1 blur-[40px] top-70 w-[760px] bg-[radial-gradient(circle,#289BFF,#fff)] h-[400px] rounded-full bg-black "></div>
        <div className="absolute z-1 blur-[40px] left-0 bottom-18 w-[1000px] bg-[radial-gradient(circle,#0057A3,#fff)] h-[180px] rounded-full bg-black "></div>
        <div className="absolute z-0 blur-[40px] -right-10 top-80 w-[1000px] bg-[radial-gradient(circle,#289BFF,#fff)] h-[590px] rounded-full bg-black "></div>
      </section>

      {/* SECTION 3 - Detailed overview of plans */}

      <section className="w-full px-40 py-24 rounded-2xl">
        {/* Heading */}
        <div className="text-center mb-30">
          <h2 className="text-[70px] font-semibold text-[#001121]">What every plan covers</h2>
          <p className="text-[15px] text-[#4a4a4a] mt-3.5">
            Each plan contains the same features. Plan pricing varies depending on order volume.
          </p>
        </div>

        {/* Table */}
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-y-10 gap-x-16">

          <div>
            <p className="font-semibold text-[29px] text-[#001121]">Feature</p>
          </div>
          <div className="font-semibold text-[29px] text-[#001121]">
            Explanation
          </div>

          <div>
            <p className="font-semibold text-[18px] text-[#001121]">Tracking & Delivery Problems</p>
          </div>
          <div className="text-[15px] leading-6 text-[#2e2e2e]">
            We monitor every shipment and step in when delays, missing scans, failed deliveries,
            or tracking dead-ends appear — resolving the issue directly with the courier and
            keeping the customer informed.
          </div>

          <div>
            <p className="font-semibold text-[18px] text-[#001121]">Lost / Damaged Parcel Management</p>
          </div>
          <div className="text-[15px] leading-6 text-[#2e2e2e]">
            If a parcel is lost, misrouted, or arrives damaged, we handle the full investigation:
            gathering evidence, contacting the courier, preparing documentation, and guiding
            the client toward the correct resolution.
          </div>

          <div>
            <p className="font-semibold text-[18px] text-[#001121]">Customs and International Issues</p>
          </div>
          <div className="text-[15px] leading-6 text-[#2e2e2e]">
            We resolve customs holds, missing documents, incorrect HS codes, duty/VAT
            confusion, and any cross-border problems — coordinating with customs teams and
            guiding customers through required steps.
          </div>

          <div>
            <p className="font-semibold text-[18px] text-[#001121]">Claims Management and Filing</p>
          </div>
          <div className="text-[15px] leading-6 text-[#2e2e2e]">
            We build complete claim packets, file claims where allowed, manage courier
            back-and-forth, escalate when needed, handle appeals, and track compensation
            until the case is closed.
          </div>

          <div>
            <p className="font-semibold text-[18px] text-[#001121]">Return Management and Reverse Logistics</p>
          </div>
          <div className="text-[15px] leading-6 text-[#2e2e2e]">
            We create clear return instructions, track inbound returns, handle lost return
            parcels, and manage the refund/replacement workflow with the brand.
          </div>

          <div>
            <p className="font-semibold text-[18px] text-[#001121]">Customer Communication and Support</p>
          </div>
          <div className="text-[15px] leading-6 text-[#2e2e2e]">
            We handle all shipping-related customer messages across email, WhatsApp, and DMs —
            providing structured updates, calming anxious buyers, and protecting the brand’s
            reputation.
          </div>

          <div>
            <p className="font-semibold text-[18px] text-[#001121]">Address and Delivery Issues</p>
          </div>
          <div className="text-[15px] leading-6 text-[#2e2e2e]">
            When customers enter incorrect or incomplete addresses, we correct details with
            the courier, arrange redelivery, reroute parcels, or coordinate collection to
            ensure successful delivery.
          </div>

          <div>
            <p className="font-semibold text-[18px] text-[#001121]">Client Dashboard and Reports</p>
          </div>
          <div className="text-[15px] leading-6 text-[#2e2e2e]">
            Every week, we provide insights on delivery performance, courier reliability,
            common failure reasons, top countries with issues, claims outcomes, and
            actionable recommendations.
          </div>

          <div>
            <p className="font-semibold text-[18px] text-[#001121]">Courier Escalation and Investigation Management</p>
          </div>
          <div className="text-[15px] leading-6 text-[#2e2e2e]">
            For serious issues, we escalate cases inside courier systems, contact support
            teams, request internal scans, follow up every 48 hours, and keep detailed logs
            until resolved.
          </div>

        </div>

        {/* CTA */}
        <div className="flex cursor-pointer justify-center mt-25">
          <button className="px-7 text-[20px] py-1.5 bg-[#007bff] text-white font-semibold rounded-lg cursor-pointer transition">
            Contact Sales
          </button>
        </div>
      </section>

      <Footer type={1} />
    </main>
  )
}
