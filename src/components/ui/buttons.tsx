'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export const Buttons = ({
  children,
  className,
  disabled,
  size,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'group/btn w-full relative flex items-center justify-center ease-in-out duration-500',
        className
      )}
    >
      <div className='absolute inset-0 w-full' />
      <div className='relative z-40 w-full'>
        <button className='w-full relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-sky-50 my-2'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />

          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-md font-medium text-white backdrop-blur-3xl'>
            {children}
          </span>
        </button>
      </div>
    </div>
  );
};
