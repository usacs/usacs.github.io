// Component for subtitle text shown inside the page header

type PageSubtitleProps = {
  children: React.ReactNode; // subtitle text
  className?: string;
};

// ===== COMPONENT =====
export default function PageSubtitle({
  children,
  className = "",
}: PageSubtitleProps) {
  return (
    // Styled text container with rounded edges and a semi-transparent background
    // Used to highlight subtitle text within the header section
    <p
      className={`
        inline-block
        rounded-full
        bg-black/25
        px-7 py-3
        font-medium
        ${className}
      `}
      /* pill-shaped subtitle with semi-transparent background */
    >
      {children}
    </p>
  );
}
