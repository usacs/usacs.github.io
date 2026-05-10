// ===== IMPORTS =====
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import PageSubtitle from "../components/PageSubtitle";

// ===== PAGE =====
export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#F7F0E6]">
      {" "}
      {/* full height + page background */}
      {/* ===== HERO ===== */}
      <PageHeader
        className="relative z-10 pb-20"
        /* positioned context + stacked above overlap content */
      >
        <h1
          className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-wide text-white"
          /* responsive scaling + bold emphasis + wider letter spacing */
        >
          DONATE
        </h1>

        <PageSubtitle className="py-7">
          <span
            className="text-white text-[clamp(1rem,2vw,1.375rem)] tracking-wide"
            /* responsive subtitle sizing + consistent spacing */
          >
            THANK YOU FOR DONATING TO THE RUTGERS UNDERGRADUATE COMPUTER SCIENCE
            COMMUNITY!
          </span>
        </PageSubtitle>
      </PageHeader>
      {/* ===== HEADING CARD ===== */}
      <div className="-mt-4 px-4">
        {" "}
        {/* slight overlap with hero */}
        <div
          className="mx-auto max-w-4xl rounded-3xl bg-[#E7D6C6] px-6 py-10 text-center shadow-sm"
          /* centered card container with max width and subtle elevation */
        >
          <h2 className="text-2xl font-extrabold text-[#5A1A1A] sm:text-3xl">
            Here are the steps to donate to USACS :
          </h2>
        </div>
      </div>
      {/* ===== STEPS ===== */}
      <div className="mx-auto mt-10 max-w-5xl px-4">
        <ol
          className="list-decimal space-y-3 pl-6 text-base text-[#2B2B2B] sm:text-lg"
          /* numbered list with vertical spacing and responsive text sizing */
        >
          <li>
            Go{" "}
            <a
              className="font-semibold text-[#7F1D1D] underline underline-offset-4 hover:opacity-90"
              /* styled link with underline offset and hover feedback */
              href="https://give.rutgers.edu/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </li>
          <li>
            Click on “I want to view a list of schools and programs that I can
            support.”
          </li>
          <li>Select “Other, please specify” and enter the amount.</li>
          <li>In the fund field, type “USACS”.</li>
          <li>Complete the form (recurring option + personal info).</li>
          <li>Proceed to payment and enter details.</li>
        </ol>
      </div>
      {/* ===== IMAGES ===== */}
      <div className="mx-auto mt-14 max-w-6xl px-4 pb-20">
        <div
          className="grid gap-8 md:grid-cols-2"
          /* responsive grid: single column → two columns on medium screens */
        >
          <div className="overflow-hidden rounded-4xl bg-white shadow-sm">
            <Image
              src="/icons/donate_dog.png"
              alt="USACS community event"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              /* ensures image fills container and crops cleanly */
              priority
            />
          </div>

          <div className="overflow-hidden rounded-4xl bg-white shadow-sm">
            <Image
              src="/icons/donate_dog.png"
              alt="USACS student collaboration"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
