// Wrapper component used to structure sections on a page
// Adds consistent spacing and keeps content centered
type Props = {
  children: React.ReactNode;
  className?: string;
};

// ===== COMPONENT =====
export default function SectionWrapper({ children, className = "" }: Props) {
  return (
    // Applies vertical and horizontal padding
    // max-w-6xl + mx-auto keeps the content centered and prevents it from stretching too wide
    <section className={`py-16 px-4 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
