import Image from "next/image";

type BeeIconProps = {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
};

const BeeIcon = ({ className = "", size = 32, style }: BeeIconProps) => (
  <span
    className={`inline-block shrink-0 relative overflow-visible pointer-events-none leading-none ${className}`}
    style={{
      width: size,
      height: size,
      ...style,
    }}
    aria-hidden="true"
  >
    <Image
      src="/frame1/moving-bee.GIF"
      alt="Moving Bee"
      width={400}
      height={400}
      unoptimized
      className="absolute -top-[140%] -left-[140%] w-[380%] h-[380%] max-w-none object-contain pointer-events-none block"
    />
  </span>
);

export default BeeIcon;
