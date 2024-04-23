import React from 'react';
import { cn } from '@/lib/utils';
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm relative z-20',
        className
      )}
    >
      <div className='relative z-50 h-full'>
        <div className='p-4 h-full flex flex-col gap-3 justify-between'>
          {children}
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h4 className={cn('tracking-wide mt-2', className)}>{children}</h4>;
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-4 h-full tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-2 pt-0', className)}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-2', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-2 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';
