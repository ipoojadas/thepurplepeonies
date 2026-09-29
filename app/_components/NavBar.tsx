"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import { sectionPadding } from "./sectionPadding";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "BLOG", href: "#blog" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "CONTACT", href: "#contact" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`relative z-40 w-full ${sectionPadding}`}>
      <div className="flex w-full items-center justify-between gap-6 py-6 md:py-8">
        <Logo />

        <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-8 2xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-futura text-[15px] lg:text-[16px] xl:text-[18px] font-medium uppercase tracking-[0.1em] text-[#0d090a] transition-colors hover:text-[#9D71A8]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Button href="#contact">
            LET&apos;S WORK TOGETHER
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#4D2756] lg:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#fff5f0]/98 backdrop-blur-md shadow-lg border-b border-[#eeddd5] px-8 py-6 z-50 animate-in fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-futura text-lg font-normal uppercase tracking-[0.08em] text-[#0d090a] hover:text-[#9D71A8] py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                LET&apos;S WORK TOGETHER
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
