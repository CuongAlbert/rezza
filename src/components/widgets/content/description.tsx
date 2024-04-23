'use client';

import {
  MotionLogo,
  NextLogo,
  ReactLogo,
  ShadcnLogo,
  TailwindLogo,
} from '@/lib/logo';

import { Buttons } from '@/components/ui/buttons';
import { Crisp } from 'crisp-sdk-web';
import React from 'react';
import { motion } from 'framer-motion';

export const Description = () => {
  const [count, setCount] = React.useState(0);
  const span = ['faster', 'less hassle', 'more reliably'];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % span.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='pb-20 md:pb-10 flex flex-col w-full md:max-w-[580px]'>
      <h1 className='z-10 inline-block font-bold relative pb-6 text-3xl md:text-6xl text-wrap:text-balance'>
        {`Accelerate AI Innovations`}
        <br />
        <span>
          {`10x `}
          <motion.span
            key={count}
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {span[count]}
          </motion.span>
        </span>
      </h1>
      <h2 className='relative font-regular sm:text-xl text-zinc-500 tracking-wide mb-8 text-left max-w-2xl'>
        Transform your AI ideas into successful products with our comprehensive
        support that reduces time to market and maximizes technological
        advancement.
      </h2>
      <div className='flex flex-wrap gap-x-4 gap-y-4'>
        {/* <div className="flex gap-8 lg:gap-4 lg:justify-between items-center"> */}
        <div className='flex items-center gap-1 shrink-0'>
          <NextLogo />

          <span className='text-xs hidden lg:block'>Next.js</span>
        </div>
        <div className='flex items-center gap-1 shrink-0'>
          <ReactLogo />
          <span className='text-xs hidden lg:block'>React</span>
        </div>
        <div className='flex items-center gap-1 shrink-0'>
          <ShadcnLogo />
          <span className='text-xs hidden lg:block'>Shadcn</span>
        </div>
        {/* </div>
        <div className="flex gap-8 lg:gap-4 justify-around items-center my-8"> */}
        <div className='flex items-center gap-1 shrink-0'>
          <MotionLogo />
          <span className='text-xs hidden lg:block'>Framer Motion</span>
        </div>
        <div className='flex items-center gap-1 shrink-0'>
          <TailwindLogo />
          <span className='text-xs hidden lg:block'>TailwindCSS</span>
        </div>
        {/* </div> */}
      </div>
      <Buttons
        onClick={() =>
          typeof window === 'undefined' ? null : Crisp.chat.open()
        }
        className='max-w-fit mt-10 md:mt-8'
      >
        Contact us
      </Buttons>
    </div>
  );
};
