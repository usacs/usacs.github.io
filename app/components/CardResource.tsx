// components/Card.tsx

// Card component used specifically for tile sections on the Resources page
// Keeps a consistent layout with rounded corners and a shadow for each section

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ResourceCard({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl shadow-lg transition ${className}`}>
      {children}
    </div>
  );
}
