import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardTitle } from './card';

import { Buttons } from './buttons';
import { Crisp } from 'crisp-sdk-web';
import Link from 'next/link';
import { Meteors } from './meteors';
import { Pricing } from '../widgets/pricing/pricing';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const HoverEffect = ({
  items,
  className,
}: {
  items: Pricing;
  className?: string;
}) => {
  // let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className={cn(
          'max-w-[83rem] mx-auto grid grid-cols-1 items-center gap-4 lg:grid-cols-3 xl:grid-cols-3 py-10',
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item.title}
            className='relative group p-2 h-full w-full'
            // onMouseEnter={() => setHoveredIndex(idx)}
            // onMouseLeave={() => setHoveredIndex(null)}
          >
            {idx === items.length - 1 && (
              <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-blue-700 to-teal-700 bg-red-700 dark:from-blue-300 dark:to-teal-300 transform scale-[0.80] dark:bg-red-300 rounded-full blur-3xl' />
            )}
            {/* <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence> */}
            <Card
              className={
                idx === items.length - 1
                  ? 'w-full bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] shadow-2xl text-zinc-100 pb-2 mx-auto h-full'
                  : 'w-full shadow-2xl pb-2 mx-auto h-full'
              }
            >
              <CardTitle
                className={
                  idx === items.length - 1
                    ? 'text-base text-emerald-400'
                    : 'text-base text-emerald-600'
                }
              >
                {item.title}
              </CardTitle>
              <div className='flex-1 flex flex-col justify-end'>
                <p className='h-12 text-sm flex items-center'>
                  {item.prices.des}
                </p>
                <p
                  className={
                    idx === items.length - 1
                      ? 'text-4xl font-bold'
                      : 'text-4xl font-bold dark:text-white text-gray-900'
                  }
                >
                  {item.prices.price}
                </p>
              </div>
              <CardDescription className='h-24'>
                {item.description}
              </CardDescription>
              <CardContent className='h-full flex flex-col justify-start items-start'>
                {item.utilities.map((u, idx) => (
                  <div key={idx} className='flex gap-3 py-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='text-emerald-400 h-6 w-5 flex-none'
                      aria-hidden='true'
                    >
                      <path
                        d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'
                        fill='currentColor'
                        strokeWidth='0'
                      ></path>
                    </svg>
                    <p>{u}</p>
                  </div>
                ))}
              </CardContent>
              <div className='w-full pb-4'>
                <Buttons
                  onClick={() =>
                    typeof window === 'undefined' ? null : Crisp.chat.open()
                  }
                >
                  Build now
                </Buttons>
              </div>
              {idx === items.length - 1 && <Meteors number={20} />}
            </Card>
          </div>
        ))}
        {/* <MeteorsDemo /> */}
      </div>
    </>
  );
};
