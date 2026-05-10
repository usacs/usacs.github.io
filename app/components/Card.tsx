"use client";

// ===== TYPES =====
type CardProps = {
  name: string;
  position: string;
  major: string;
  minor?: string;
  description1: string;
  description2: string;
  imageSrc: string;
  isCoPresident: boolean;
};

// ===== COMPONENT =====
const Card = ({
  name,
  position,
  major,
  minor,
  description1,
  description2,
  imageSrc,
  isCoPresident,
}: CardProps) => {
  // Dynamic styling based on role
  const bgColor = isCoPresident ? "#481110" : "#E4D1C3";
  const fontColor = isCoPresident ? "#fbf4e4" : "#54412F";

  return (
    <div
      className="flex w-full max-w-[410px] aspect-[410/570] rounded-[3rem] text-left"
      /* fixed aspect ratio card + max width + large rounded corners */
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col">
        {/* ===== TOP SECTION (IMAGE + BASIC INFO) ===== */}
        <div
          className="flex items-start mt-8 mx-6 gap-6"
          /* horizontal layout with spacing between image and text */
        >
          <img
            src={imageSrc}
            alt={`${name} profile picture`}
            className="w-36 h-36 rounded-full object-cover"
            /* fixed square image → circular crop */
          />

          <div className="flex flex-col">
            <h1
              className="lg:text-2xl font-bold md:text-xl"
              /* responsive name sizing (md → lg) */
              style={{ color: fontColor }}
            >
              {name}
            </h1>

            <p
              className="mt-1 text-base font-medium"
              style={{ color: fontColor }}
            >
              {position}
            </p>

            <div
              className="flex flex-col mt-1 text-base font-bold"
              /* stacked major/minor labels */
              style={{ color: fontColor }}
            >
              <p>
                Major:
                <span className="font-light"> {major}</span>
              </p>

              {/* Conditional rendering if minor exists */}
              {minor && (
                <p>
                  Minor:
                  <span className="font-light"> {minor}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ===== DESCRIPTION SECTION ===== */}
        <div
          className="m-6 space-y-3 overflow-y-auto cardScroll"
          /* vertical spacing + scrollable content area if text overflows */
          style={{ color: fontColor }}
        >
          <p>{description1}</p>
          <p>{description2}</p>
        </div>

        {/* ===== CUSTOM SCROLLBAR STYLING ===== */}
        <style jsx>{`
          .cardScroll::-webkit-scrollbar {
            width: 6px;
          }

          .cardScroll::-webkit-scrollbar-thumb {
            background: ${fontColor};
            border-radius: 999px;
          }

          .cardScroll::-webkit-scrollbar-track {
            background: transparent;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Card;
