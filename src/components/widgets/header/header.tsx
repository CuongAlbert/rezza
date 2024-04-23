'use client';

import { DarkMode, Menu, MenuItem } from './menu';
import React, { useEffect, useState } from 'react';
import { VuaduLogoBlack, VuaduLogoWhite } from '@/lib/logo';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/avatar-vuadu.png';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export function Header() {
  return (
    <header className='z-[50] fixed top-0 w-full border-b backdrop-blur-md bg-white/80 dark:bg-black/80 border-neutral-200 dark:border-white/[0.1]'>
      <div className='flex items-center h-16 max-w-[88rem] mx-auto gap-4 md:gap-10'>
        <div className='w-auto flex justify-between items-center h-20 top-0 left-0'>
          <span className='hidden dark:block'>
            <VuaduLogoWhite />
          </span>
          <span className='dark:hidden'>
            <VuaduLogoBlack />
          </span>
          <h1 className='hidden sm:block text-xl text-black dark:text-white ml-3'>
            Rezza
          </h1>
        </div>
        <div className='flex w-full justify-between items-center'>
          <Menu />
          <div className='flex justify-between gap-2'>
            {MenuItem.community.map((m) => (
              <div
                key={m.title}
                className='flex transition-colors hover:text-foreground/80 text-foreground/60'
              >
                <Link
                  href={m.href}
                  target='_blank'
                  className={navigationMenuTriggerStyle()}
                >
                  {m.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <DarkMode />
      </div>
    </header>
  );
}
