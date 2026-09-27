type BeeIconProps = {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
};

const BeeIcon = ({ className = '', size = 28, style }: BeeIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 align-middle ${className}`}
    style={style}
    aria-hidden="true"
  >
    {/* Glow */}
    <circle cx="16" cy="17" r="7" fill="#FEE985" opacity="0.45" />

    {/* Wings */}
    <ellipse
      cx="10"
      cy="12"
      rx="6"
      ry="3.5"
      fill="#98D6F2"
      opacity="0.8"
      transform="rotate(-28 10 12)"
    />
    <ellipse
      cx="22"
      cy="12"
      rx="6"
      ry="3.5"
      fill="#98D6F2"
      opacity="0.8"
      transform="rotate(28 22 12)"
    />

    {/* Body */}
    <ellipse cx="16" cy="18" rx="7" ry="5.5" fill="#D48432" />
    
    {/* Dark Stripes */}
    <path
      d="M11 16.5C12.5 15.5 19.5 15.5 21 16.5"
      stroke="#22181C"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M12 19.5C13.5 18.5 18.5 18.5 20 19.5"
      stroke="#22181C"
      strokeWidth="1.75"
      strokeLinecap="round"
    />

    {/* Head */}
    <circle cx="16" cy="11.5" r="3.5" fill="#22181C" />

    {/* Antennae */}
    <path
      d="M14.5 9.5C13.5 7.5 11 7 10 7.5"
      stroke="#22181C"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M17.5 9.5C18.5 7.5 21 7 22 7.5"
      stroke="#22181C"
      strokeWidth="1.2"
      strokeLinecap="round"
    />

    {/* Stinger */}
    <path d="M16 23.5L16 25" stroke="#22181C" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default BeeIcon;
