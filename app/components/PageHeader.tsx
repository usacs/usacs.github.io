// Component for the top page header section (the red rounded banner at the top of each page)
// Used for titles like "OUR BOARD", "EVENTS", etc

type PageHeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function PageHeader({
  children,
  className = "",
}: PageHeaderProps) {
  return (
    // Header with red gradient background and rounded bottom corners
    // Gives the curved red banner look at the top of each page
    <header
      className={`
  bg-gradient-to-b from-[var(--usacs-red-dark)] to-[var(--usacs-red-light)]
  pt-7 pb-7
  px-4
  rounded-b-[40px]
  relative
  ${className}
  `}
    >
      <div className="mt-12 text-center">{children}</div>
    </header>
  );
}
