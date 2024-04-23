import { VuaduLogoBlack, VuaduLogoWhite } from '@/lib/logo';

import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <section className='relative w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8 justify-center items-center border border-t-slate-5'>
      <footer className='flex w-full md:w-[60%] flex-col md:flex-row gap-2 md:gap-4 justify-around items-center'>
        <Link className='' href='/#about'>
          About us
        </Link>
        <Link className='' href='/#contact'>
          Contact
        </Link>
        <Link className='' href='/'>
          Terms of use
        </Link>
        <Link className='' href='/#privacy-policy'>
          Privacy policy
        </Link>{' '}
      </footer>
      <div className='flex items-center justify-center gap-2'>
        <span className='dark:hidden'>
          <VuaduLogoBlack />
        </span>
        <span className='hidden dark:block'>
          <VuaduLogoWhite />
        </span>
        Power by{' '}
        <Link
          className='text-emerald-600 hover:underline'
          href='https://rezza.io/'
        >
          Rezza.
        </Link>{' '}
      </div>
    </section>
  );
};
