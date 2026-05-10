// ===== IMPORTS =====
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import PageSubtitle from "../components/PageSubtitle";

// ===== TYPES =====
type Committee = {
  title: string;
  subtitle: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
};

// ===== DATA =====
const committees: Committee[] = [
  {
    title: "Technology",
    subtitle: "Inspire and keep alive the\nspirit of hacking",
    bullets: ["Codestorms", "Tech Workshops"],
    imageSrc: "/icons/tech.svg",
    imageAlt: "Technology committee mascot",
  },
  {
    title: "Education",
    subtitle: "Promoting, mentorship,\nresearch, and learning",
    bullets: ["Mock Interviews", "Resume Workshops"],
    imageSrc: "/icons/edu.svg",
    imageAlt: "Education committee mascot",
  },
  {
    title: "Community",
    subtitle: "Foster diverse, inclusive, and\nfriendly social spaces",
    bullets: ["Socials", "Paws & Professors"],
    imageSrc: "/icons/community.svg",
    imageAlt: "Community committee mascots",
  },
  {
    title: "Outreach",
    subtitle: "Build relationships with youth,\nalumni, and tech companies",
    bullets: ["Company Events", "Alumni Networking"],
    imageSrc: "/icons/outreach.svg",
    imageAlt: "Outreach committee mascot",
  },
];

// ===== COMPONENT =====
function CommitteeCard({ item }: { item: Committee }) {
  return (
    <div
      className="flex h-full flex-col rounded-[28px] bg-[#7A1A1A] px-6 pb-6 pt-7 shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
      /* vertical layout + consistent card sizing + custom shadow */
    >
      <h3 className="text-center text-base font-extrabold tracking-wide text-white">
        {item.title}
      </h3>

      <p
        className="mt-2 whitespace-pre-line text-center text-xs font-medium leading-snug text-white/90"
        /* preserves \n line breaks + tighter text spacing */
      >
        {item.subtitle}
      </p>

      <div className="mt-5 mb-3 flex justify-center">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      <ul
        className="mt-auto space-y-2 text-sm text-white"
        /* pushes bullets to bottom + evenly spaced list */
      >
        {item.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/90" />
            <span className="font-semibold">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ===== PAGE =====
export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#F7F0E6]">
      {/* ===== HERO ===== */}
      <PageHeader className="pb-40">
        <h1
          className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-wide text-white"
          /* responsive scaling + strong visual emphasis */
        >
          OUR MISSION
        </h1>

        <PageSubtitle className="py-7 text-center text-2xl tracking-wide text-white">
          <span className="font-light">USACS’ </span>
          <span>VISION</span>
          <span className="font-light">
            {" "}
            IS TO KEEP THE RUTGERS CS/TECH COMMUNITY THRIVING.
          </span>
        </PageSubtitle>

        <h2
          className="mt-14 text-center text-[clamp(2rem,5vw,3.25rem)] font-extrabold tracking-wide text-white"
          /* secondary responsive heading */
        >
          COMMITTEES
        </h2>
      </PageHeader>

      {/* ===== COMMITTEES ===== */}
      <section
        className="relative z-10 -mt-32"
        /* pulls cards upward to overlap hero + ensures proper stacking */
      >
        <div className="mx-auto max-w-6xl px-4">
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            /* responsive grid: 1 → 2 → 4 columns */
          >
            {committees.map((c) => (
              <CommitteeCard key={c.title} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== METHODS ===== */}
      <section className="pb-14 pt-16">
        <div
          className="grid items-center gap-5 lg:grid-cols-2"
          /* two-column layout on large screens */
        >
          <div
            className="px-6 sm:px-10 lg:ml-20 lg:px-0 text-right lg:text-left"
            /* right-aligned on mobile → left-aligned on desktop */
          >
            <h3 className="text-4xl font-extrabold tracking-wide text-[#5A1A1A] sm:text-5xl">
              METHODS
            </h3>

            <div className="mt-6 space-y-2 text-sm leading-relaxed text-[#2B2B2B] sm:text-base">
              <p>Host quality-assured technical talks on a weekly basis.</p>
              <p>
                Provide platforms for career development and project sharing.
              </p>
              <p>Initiate and oversee mentorship program for undergraduates.</p>
              <p>
                Promote undergraduate research and faculty involvement through
                our meetings.
              </p>
              <p>Grow and maintain social media presence for CS students.</p>
              <p>Stay in tune with CS management and hackathon coordination.</p>
              <p>
                Build framework to connect alumni with community after
                graduation.
              </p>
              <p>Coordinate tech company recruitment and outreach efforts.</p>
              <p>
                Connect students with mentorship opportunities targeting youth.
              </p>
              <p>
                Inviting prominent leaders in technology to speak to our
                community.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="relative h-[260px] w-full max-w-[600px] overflow-hidden rounded-l-[180px] bg-white shadow-sm sm:h-[320px]"
              /* responsive image container with curved left edge */
            >
              <Image
                src="/icons/1.png"
                alt="USACS members in a meetup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEASURES ===== */}
      <section className="pb-20">
        <div>
          <div
            className="grid items-center gap-10 lg:grid-cols-2"
            /* two-column layout with spacing */
          >
            <div
              className="order-1 lg:order-2 flex justify-center lg:justify-end mr-20"
              /* swaps order on desktop + aligns content right */
            >
              <div className="max-w-md lg:text-left">
                <h3 className="text-4xl font-extrabold tracking-wide text-[#5A1A1A] sm:text-5xl">
                  MEASURES
                </h3>

                <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#2B2B2B] sm:text-base">
                  <p>
                    Students feeling comfortable in and growing from our events,
                    spaces, and programs.
                  </p>
                  <p>
                    Other communities, departments, and universities knowing how
                    awesome we are.
                  </p>
                  <p>
                    Public visibility for our community’s projects and endeavors
                    while keeping diverse.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1 flex justify-start">
              <div
                className="relative h-[260px] w-full max-w-[600px] overflow-hidden rounded-r-[180px] bg-white shadow-sm sm:h-[320px]"
                /* mirrored image style with curved right edge */
              >
                <Image
                  src="/icons/2.png"
                  alt="USACS classroom and whiteboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
