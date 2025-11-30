import React from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <main>
      <Header pageType={1}></Header>

      {/* ONLY SECTION */}
      <section className='px-20 pt-35 pb-15'>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-semibold text-[60px]'>Chat with our team</p>
          <p className='text-[18px] leading-6 text-center'>Contact our team on email or WhatsApp for<br />quick and personal assistance</p>
        </div>

        <div className='flex items-center gap-10 justify-center pt-20'>
          <div className='w-95 border-[#001121]/18 pl-7 py-5 rounded-[10px] border'>
            <div className='flex items-center gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1H9.171L9 16.171V16H6c-.542 0-1-.458-1-1V8c0-.542.458-1 1-1h12m0-2H6C4.35 5 3 6.35 3 8v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3V8c0-1.65-1.35-3-3-3z" />
              </svg>
              <p className='font-semibold text-[29px]'>WhatsApp</p>
            </div>
            <p className='mt-2 ml-2 text-[18px] text-[#000000]'>Message our team on WhatsApp - <br />we will answer your questions and <br />can help you book a call if needed.</p>
            <Link href="#">
              <div className='flex mt-8 ml-2 items-center gap-2 text-white font-semibold bg-[#007bff] w-fit py-1 rounded-[9px] px-4'>
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
            <p className='text-[14px] ml-2 mt-3 text-[#3a3a3a]'>Or text us at +44 7404 583395</p>
          </div>
          <div className='border-[#001121]/18 pl-7 w-95 py-5 rounded-[10px] border'>
            <div className='flex items-center gap-5'>
              <svg xmlns="http://www.w3.org/2000/svg" className='ml-1' width="35" height="35" viewBox="0 0 20 24">
                <path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671L18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z" />
              </svg>
              <p className='font-semibold text-[29px]'>Email</p>
            </div>
            <p className='mt-2 ml-2 text-[18px] text-[#000000]'>Send our team an email and we can <br />answer any of your questions or help <br />book your call.</p>
            <Link href="#">
              <div className='flex mt-8 ml-2 items-center gap-2 text-white font-semibold bg-[#007bff] w-fit py-1 rounded-[9px] px-4'>
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
            <p className="text-[14px] ml-2 mt-3 text-[#3a3a3a]">Or email us at support@romanlogistics.co.uk</p>
          </div>
        </div>
      </section>
      <Footer type={1}></Footer>
    </main>
  )
}
