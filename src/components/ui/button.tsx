import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-none border px-5 text-sm font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-[var(--charcoal-noir)] bg-[var(--charcoal-noir)] [color:var(--cloud-veil)] visited:[color:var(--cloud-veil)] hover:bg-transparent hover:[color:var(--charcoal-noir)]",
        outline:
          "border-[var(--moonlit-silver)] bg-transparent [color:var(--charcoal-noir)] visited:[color:var(--charcoal-noir)] hover:border-[var(--charcoal-noir)] hover:bg-[var(--charcoal-noir)] hover:[color:var(--cloud-veil)]",
        ghost:
          "border-transparent bg-transparent [color:var(--ironclad-grey)] visited:[color:var(--ironclad-grey)] hover:[color:var(--charcoal-noir)]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
      ...props,
    });
  }

  return (
    <button data-slot="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export { Button, buttonVariants };
