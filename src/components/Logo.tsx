import Image from "next/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({ className = "h-14", priority = true }: LogoProps) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Charcoal black mark for light backgrounds */}
      <Image
        src="/brand/aurexis-logo.png"
        alt="Aurexis Digital Studio"
        width={751}
        height={377}
        priority={priority}
        className="h-full w-auto object-contain dark:hidden select-none pointer-events-none"
      />
      {/* Clean warm-white mark for dark backgrounds */}
      <Image
        src="/brand/aurexis-logo-white.png"
        alt="Aurexis Digital Studio"
        width={751}
        height={377}
        priority={priority}
        className="hidden h-full w-auto object-contain dark:block select-none pointer-events-none"
      />
    </span>
  );
}
