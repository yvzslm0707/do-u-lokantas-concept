import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const LUXE =
  "relative isolate overflow-hidden rounded-none font-medium uppercase tracking-[0.25em] text-[0.7rem] transition-all duration-500 ease-out hover:-translate-y-0.5 active:translate-y-0 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-out before:content-[''] hover:before:scale-x-100 [&_svg]:transition-transform [&_svg]:duration-500 hover:[&_svg]:translate-x-0.5";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        /* Luxury family: shared shape, type and a left-to-right fill sweep on hover. */
        hero: `${LUXE} border border-primary bg-primary text-primary-foreground shadow-burgundy before:bg-primary-deep hover:border-primary-deep`,
        heroOutline: `${LUXE} border border-charcoal-foreground/40 bg-transparent text-charcoal-foreground backdrop-blur-sm before:bg-gold hover:border-gold hover:text-charcoal`,
        gold: `${LUXE} border border-gold/60 bg-transparent text-gold before:bg-gold hover:border-gold hover:text-charcoal`,
        elegant: `${LUXE} border border-primary bg-transparent text-primary before:bg-primary hover:text-primary-foreground`,
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        md: "h-11 px-6",
        xl: "h-14 px-8 sm:px-10",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
