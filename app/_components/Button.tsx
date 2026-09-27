import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, href = "#", className = "", onClick }: ButtonProps) => {
  const baseClass =
    "inline-flex items-center justify-center rounded-lg bg-[#9D71A8] hover:bg-[#8A5E95] px-7 py-3.5 font-futura text-[13px] md:text-[14px] font-medium uppercase tracking-[0.12em] text-white shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${baseClass} ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={`${baseClass} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
