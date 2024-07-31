import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/helpers/classHelpers";
import { FaSpinner } from "react-icons/fa";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 space-x-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-white  hover:bg-primary-hover active:bg-primary-active",
        destructive: "bg-red-600 text-white  hover:bg-red-500",
        outline: "border  border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground  hover:bg-secondary-hover active:bg-secondary-active",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        quickAction: "text-[#4E2DBE] bg-white text-xs py-[6px] px-3 rounded font-[500]",
        glass: "bg-white bg-opacity-[0.20]",
      },
      size: {
        default: "h-9 px-4 py-4",
        sm: "h-[35px] rounded-md px-6 text-sm font-light",
        lg: "h-14 px-4 py-4",
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp =  "button";
    if (props.loading) {
      props.disabled = true;
    }
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        <div className="flex gap-x-2 text-md items-center">{props.children}</div>
        {props.loading == true && <FaSpinner className="animate-spin" />}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button };
