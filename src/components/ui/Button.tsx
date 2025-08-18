import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva("px-5 py-2 rounded-sm transition-all", {
  variants: {
    variant: {
      primary: "bg-blue-dark text-fg0 hover:bg-blue-light",
      secondary: "bg-gray-dark text-fg0 hover:bg-gray-light",
      danger: "bg-red-dark text-fg0 hover:bg-red-light",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button className={button({ variant, className })} {...props}>
      {children}
    </button>
  );
};
