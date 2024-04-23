'use client';

import { HoverEffect } from '@/components/ui/hover-effect';

export function Pricing() {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <h1 className='font-bold text-4xl text-center'>
          {`Want to launch quickly and conquer the market?`}
        </h1>
        <h1 className='font-bold text-4xl text-center mt-2'>
          {`We've got you covered`}
        </h1>
      </div>
      <div className='w-full md:w-[50%] mx-auto mt-8'>
        <p className='text-center text-md'>
          From custom integration to complete product tailored to your needs.
          Simple pricing, no hidden fees
        </p>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}

export type Pricing = {
  title: string;
  prices: {
    des: string;
    price: string;
  };
  description: string;
  utilities: string[];
}[];

export const projects: Pricing = [
  {
    title: 'AI-UX Pattern library',
    prices: {
      des: '',
      price: 'Free',
    },
    description:
      'All the components that are freely available on the website are free to use.',
    utilities: [
      'A growing library of design patterns',
      'Full of samples from real-world products',
      'Serves a wide variety of use cases for AI Products',
      'Contact over chat for support.',
    ],
  },

  {
    title: 'AI models integration',
    prices: {
      des: 'pause or cancel anytime',
      price: '$4,999/mo',
    },
    description:
      'Best for early-stage startups and businesses that need to quickly leverage AI to improve their products.',
    utilities: [
      'One feature model integration at a time',
      'Support all major AI models',
      'React / Next.js / Tailwind CSS code',
      'Design + Development',
      'Unlimited Revisions',
      'CMS integration',
      'Search Engine Optimization',
      '24-hour support response time',
      'Private communication channel',
      '7-10 days turnaround time',
      'Pause or cancel anytime',
    ],
  },
  {
    title: 'Complete Product Development',
    prices: {
      des: 'start at',
      price: '$12,499',
    },
    description:
      'Best for businesses that need a complete product development solution. We take care of everything from design to development to deployment.',
    utilities: [
      'Completed product development',
      'Support all major AI models',
      'AI Web Apps or SaaS development',
      'Design + Development',
      'AI usage analytics',
      'AI cost optimization',
      '24-hour support response time',
      'Private communication channel',
      'Unlimited Revisions',
      'Negotiable delivery time',
    ],
  },
];
