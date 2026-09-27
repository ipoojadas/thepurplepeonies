type BrushDividerProps = {
  className?: string;
};

const BrushDivider = ({ className = "" }: BrushDividerProps) => {
  return (
    <div
      className={`relative w-full leading-none z-30 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-3.5 sm:h-4 md:h-5 lg:h-6 block drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="brushGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C47320" stopOpacity="0.8" />
            <stop offset="15%" stopColor="#DE8C33" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#E2923A" stopOpacity="1" />
            <stop offset="70%" stopColor="#D88328" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#C47320" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="brushGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DE8C33" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#E89B42" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#D48227" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#DE8C33" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        {/* Top subtle dry-brush flecks and wisps */}
        <path
          d="M30 8C75 7 140 9 210 7.5C280 6 360 8.5 440 7C530 5.5 620 8 710 6.5C800 5 900 8 1000 6.5C1100 5 1200 7.5 1310 6C1420 4.5 1520 7 1630 6.5C1730 6 1820 8 1890 7.5"
          stroke="url(#brushGrad2)"
          strokeWidth="1.8"
          strokeDasharray="45 15 80 12 30 20 110 16 65 18 140 14 90 22"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Top edge ragged texture */}
        <path
          d="M0 13C80 11 160 12.5 240 10.5C330 8.5 420 12 510 9.5C600 7 700 11.5 800 9C900 6.5 1010 11 1120 8.5C1220 6 1330 10.5 1440 8C1540 5.5 1650 10 1760 8.5C1830 7.5 1890 9 1920 10V18C1880 19 1810 17.5 1740 19.5C1640 22 1530 18 1420 20.5C1310 23 1200 18.5 1090 21C980 23.5 870 19 760 21.5C650 24 550 19.5 450 22C350 24.5 250 20 150 21.5C90 22.5 40 21 0 20Z"
          fill="url(#brushGrad1)"
          opacity="0.95"
        />

        {/* Main textured brush body with organic contours */}
        <path
          d="M10 14.5C120 12 230 15.5 350 13C470 10.5 590 15 710 12.5C830 10 960 14.5 1080 12C1200 9.5 1330 14 1450 11.5C1580 9 1700 13.5 1820 12C1865 11.5 1900 13 1920 13.5V17C1870 18 1810 16.5 1730 18.5C1610 21 1490 17 1370 19.5C1240 22 1120 17.5 1000 20C870 22.5 750 18 630 20.5C500 23 380 18.5 260 20.5C170 21.5 80 19 10 18Z"
          fill="#D68329"
          opacity="0.9"
        />

        {/* Dense central stroke overlay for rich opacity */}
        <path
          d="M0 15.5C150 14 300 16.5 460 14.5C620 12.5 780 16 940 14C1100 12 1270 15.5 1430 13.5C1590 11.5 1750 15 1920 14.5"
          stroke="#C2711E"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Bottom edge dry-brush strokes and bristles */}
        <path
          d="M20 22C110 20.5 200 23 300 21.5C400 20 510 23.5 620 21.5C730 19.5 840 23 960 21C1070 19 1190 22.5 1300 20.5C1420 18.5 1530 22 1650 20.5C1750 19 1840 21.5 1900 21"
          stroke="url(#brushGrad1)"
          strokeWidth="2"
          strokeDasharray="60 18 100 14 40 22 130 15 80 20 110 16"
          strokeLinecap="round"
          opacity="0.8"
        />

        <path
          d="M50 24.5C160 23.5 280 25.5 400 24C520 22.5 650 25.5 780 23.5C900 21.5 1030 25 1160 23C1280 21 1410 24.5 1540 22.5C1660 20.5 1770 23.5 1870 23"
          stroke="#D8862C"
          strokeWidth="1.2"
          strokeDasharray="25 35 70 25 45 40 90 30 60 35"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
    </div>
  );
};

export default BrushDivider;
