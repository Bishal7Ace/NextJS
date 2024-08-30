"use client";

import Image from "next/image";
import clsx from "clsx";
import Link from "next/link"; // Import Link for navigation

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string; // Optional href prop for navigation
};

const Button = ({ type, title, icon, variant, full = false, href }: ButtonProps) => {
  const buttonContent = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer">
        {title}
      </span>
    </>
  );

  if (href) {
    // If href is provided, render as a Link component
    return (
      <Link href={href} className={clsx("flexCenter gap-3 rounded-full border", variant, full && "w-full")}>
        {buttonContent}
      </Link>
    );
  }

  // If no href, render as a button
  return (
    <button
      className={clsx("flexCenter gap-3 rounded-full border", variant, full && "w-full")}
      type={type}
      aria-label={icon && !title ? title : undefined}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
