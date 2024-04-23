'use client';

import {
  DiscordLogoIcon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';
import React from 'react';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from 'next-themes';

export function Menu({ className }: { className?: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {MenuItem.usage.map((m) => (
          <NavigationMenuItem
            key={m.title}
            className='transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block'
          >
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href={m.href}
              target='_blank'
            >
              {m.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <div className='block md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className='flex justify-center'>
                <button className='outline-none'>
                  <HamburgerMenuIcon />
                </button>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-32'>
              <DropdownMenuGroup>
                {MenuItem.usage.map((m) => (
                  <DropdownMenuItem
                    key={m.title}
                    className='justify-center text-xs'
                  >
                    {m.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle size={'sm'}>
      {theme && theme === 'dark' ? (
        <SunIcon
          onClick={() => setTheme('light')}
          className='h-[1.2rem] w-[1.2rem]'
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme('dark')}
          className='h-[1.2rem] w-[1.2rem]'
        />
      )}
    </Toggle>
  );
}

export const MenuItem = {
  usage: [
    {
      title: 'AI UX pattern',
      href: 'https://aiux.rezza.io/?utm_source=rezza.io&utm_medium=menu',
    },
    {
      title: 'Usage.so',
      href: 'https://www.usage.so/?utm_source=rezza.io&utm_medium=menu',
    },
  ],
  community: [
    {
      title: 'Discord',
      href: 'https://discord.gg/taVR5X9hfw',
      icon: <DiscordLogoIcon />,
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/UsageHQ',
      icon: (
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
          className='h-4 w-4 dark:text-neutral-500 text-neutral-500'
        >
          <path d='M4 4l11.733 16h4.267l-11.733 -16z'></path>
          <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772'></path>
        </svg>
      ),
    },
  ],
};
