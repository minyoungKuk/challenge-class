import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

const buttonVariant = cva(
  "border font-semibold hover:brightness-90 active:brightness-80 transition",
  {
    variants: {
      intent: {
        primary: "border-sky-500 text-white",
        secondary: "bg-slate-500 border-slate-500 text-white",
        danger: "bg-red-500 border-red-500 text-white",
      },
      size: {
        sm: "px-3 py-1 rounded-md text-[10px] ",
        md: "px-4 py-1.5 rounded-md text-[15px]",
        lg: "px-5 py-2 rounded-md text-[17px] ",
      },
      variant: {
        outline: "bg-white",
        contained: "text-white",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "contained",
        className: "bg-sky-500",
      },
      {
        intent: "primary",
        variant: "outline",
        className: "text-sky-500",
      },

      {
        intent: "secondary",
        variant: "contained",
        className: "bg-slate-500",
      },
      {
        intent: "secondary",
        variant: "outline",
        className: "text-slate-500",
      },

      {
        intent: "danger",
        variant: "contained",
        className: "bg-red-500",
      },
      {
        intent: "danger",
        variant: "outline",
        className: "text-red-500",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      variant: "contained",
    },
  }
);

type ButtonVariant = VariantProps<typeof buttonVariant>;

// 수정전
// type ButtonProps = {} & ButtonVariant & ComponentProps<"button">;

// href를 넣었을때는 Link처럼 쓸 수 있도록 바꿔줄게~!
type ButtonProps = ButtonVariant &
  (
    | ({} & ComponentProps<"button">)
    | ({ href: string } & ComponentProps<typeof Link>)
  );

function Button({
  children,
  intent,
  size,
  variant,
  ...props
}: PropsWithChildren<ButtonProps>) {
  if ("href" in props) {
    return (
      <Link className={buttonVariant({ intent, size, variant })} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={buttonVariant({ intent, size, variant })} {...props}>
        {children}
      </button>
    );
  }

  // 수정 전
  // return (
  //   <button className={buttonVariant({ intent, size, variant })} {...props}>
  //     {children}
  //   </button>
  // );
}

export default Button;
