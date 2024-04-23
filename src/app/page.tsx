'use client';

import { CardsChat } from '@/components/widgets/content/cardsChat';
import { CardsPayment } from '@/components/widgets/content/payment';
import { CardsStats } from '@/components/widgets/content/cardStats';
import { Crisp } from 'crisp-sdk-web';
import { Description } from '@/components/widgets/content/description';
import { Footer } from '@/components/widgets/footer';
import { Header } from '@/components/widgets/header/header';
import { Pricing } from '@/components/widgets/pricing/pricing';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    Crisp.configure('3cc6bbeb-8679-4c21-aa95-0cdf5ce2d3be');
  }, []);
  return (
    <main className='bg-white dark:bg-black'>
      <div className='h-full w-full dark:bg-grid-white/[0.1] bg-grid-black/[0.04] relative flex flex-col'>
        <div className='absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <Header />
        <div className='max-w-[88rem] w-full mx-auto relative z-20 pt-32 md:pt-40 pb-20 lg:pb-40 px-6 overflow-hidden'>
          {/* <svg
            width="236"
            height="68"
            viewBox="0 0 236 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
              stroke="url(#paint0_linear)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                gradientUnits="userSpaceOnUse"
                x1="-61.81000000000125"
                y1="0"
                x2="-49.69975000000164"
                y2="5.024999999999835"
              >
                <stop stop-color="#2EB9DF" stop-opacity="0"></stop>
                <stop stop-color="#2EB9DF"></stop>
                <stop offset="1" stop-color="#9E00FF" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg> */}
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-9 gap-10 pb-20 lg:pb-40'>
            <div className='xl:col-span-4'>
              <Description />
            </div>
            <div className='hidden lg:flex xl:col-span-5 justify-end gap-3 items-center'>
              <div>
                <CardsPayment />
              </div>
              <div className='hidden xl:flex xl:flex-col justify-between gap-3 h-full'>
                {/* <div className="flex flex-col h-full justify-between"> */}
                <CardsChat />
                <CardsStats />
                {/* </div> */}
              </div>
            </div>
          </div>
          <Pricing />
        </div>
        <Footer />
      </div>
    </main>
  );
}
