import PageHeader from "./components/PageHeader";
import PageSubtitle from "./components/PageSubtitle";

// Homepage layout with the hero section, update box, about section, and group photo
export default function HomePage() {
  return (
    <>
      {/* Hero section with logo, mailing list button, social icons, and photo collage */}
      <PageHeader className="overflow-visible py-10 sm:py-14 lg:py-16 lg:min-h-[44vh]">
        <div className="relative mx-auto max-w-7xl pt-4 px-4 sm:px-8 lg:px-12 pb-28 sm:pb-44 md:pb-52 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
            <div className="flex flex-col items-center text-center xl:text-left">
              {/* Left side of hero: organization name, logo, mailing list button, and social icons */}
              <p className="mb-2 text-sm tracking-wide text-[var(--cream)] opacity-90 px-4 md:px-0">
                Undergraduate Student Alliance of Computer Scientists
              </p>

              <img
                src="/icons/logo.png"
                alt="USACS logo"
                className="mt-1 w-[260px] sm:w-[340px] md:w-[500px] lg:w-[560px] h-auto px-4 md:px-0"
              />

              <div className="mt-6">
                <PageSubtitle
                  className="
                    inline-flex items-center gap-4
                    py-4
                    bg-[var(--resource-tile)]
                    text-[var(--cream-light)]
                    whitespace-nowrap
                    rounded-full
                    px-5
                    mx-auto 
                  "
                >
                  <img
                    src="/icons/mail.png"
                    alt=""
                    className="h-6 w-auto shrink-0"
                  />
                  <span className="font-extrabold tracking-wide">
                    GET ON THE MAILING LIST
                  </span>
                </PageSubtitle>

                <div className="mt-5 flex flex-wrap items-center gap-2 justify-center px-4 md:px-0">
                  <a
                    href="https://www.instagram.com/rutgers_usacs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/Instagram.png"
                      alt="Instagram"
                      className="h-8 w-auto cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://github.com/usacs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/Github.png"
                      alt="GitHub"
                      className="h-8 w-auto cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCwDoERNwcCrZICFil2fmdmA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/Youtube.png"
                      alt="YouTube"
                      className="h-8 w-auto cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://medium.com/@rutgersusacs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/MediumBlog.png"
                      alt="Medium Blog"
                      className="h-8 w-auto cursor-pointer"
                    />
                  </a>
                  {/* <a 
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/Discord.png"
                      alt="Discord"
                      className="h-8 w-auto cursor-pointer"
                    />
                  </a>
                  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end w-full">
              {/* Right side of hero: collage of event and community photos */}
              <div className="w-full max-w-[600px] lg:max-w-[640px]">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full aspect-[600/630] grid-rows-[1.1fr_1.1fr_1.6fr]">
                  <div className="row-span-2 overflow-hidden rounded-[32px]">
                    <img
                      src="/icons/pic1.png"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[28px]">
                    <img
                      src="/icons/pic2.png"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[28px]">
                    <img
                      src="/icons/pic3.png"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 overflow-hidden rounded-[32px]">
                    <img
                      src="/icons/pic4.png"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative tiger image that overlaps the hero and next section */}
          <img
            src="/icons/tiger.png"
            alt=""
            className="
              z-10 pointer-events-none select-none h-auto
              absolute bottom-0
              left-1/2 -translate-x-1/2
              translate-y-[55%]
              sm:translate-y-[50%]
              md:translate-y-[35%]
              w-[160px] sm:w-[220px] md:w-[260px]
              lg:left-21 lg:-translate-x-0 lg:translate-y-[61%]
              lg:w-[380px] xl:w-[440px]
            "
          />
        </div>
      </PageHeader>
      {/* Stay Updated section with important links for students */}
      <section className="bg-[var(--cream)] pt-20 md:pt-12 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px]">
              {/* Title */}
              <div className="mb-6 flex items-center gap-4">
                {/* Stay Updated heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--brown)]">
                  STAY UPDATED!
                </h2>
                <img src="/icons/bell.png" alt="" className="h-7 w-7" />
              </div>

              {/* Info box */}
              {/* Box listing ways students can stay connected (GroupMe, etc) */}
              <div className="bg-[var(--light-red-box)] px-7 py-6 rounded-[26px]">
                <p className="text-[var(--usacs-red-dark)] text-xl sm:text-2xl md:text-3xl leading-8 sm:leading-9 md:leading-10">
                  Check out our{" "}
                  <a
                    className="font-extrabold"
                    href="https://web.groupme.com/join_group/107740869/jBpq3tpX"
                  >
                    GroupMe
                  </a>
                  <br />
                  Follow our{" "}
                  <a
                    className="font-extrabold"
                    href="https://www.instagram.com/rutgers_usacs/"
                  >
                    Instagram
                  </a>
                  <br />
                  See our{" "}
                  <a
                    className="font-extrabold"
                    href="https://calendar.google.com/calendar/u/0?cid=OTIzYTkyNzRlZjRmOTVhNjc0MGJmNDA3NTBjNjBiOGI2ZjUxMDgxNDFhY2E2YjQ4OGQ1NjM5ZWVlNjFkMTMxZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                  >
                    Google Calendar
                  </a>{" "}
                  for future events
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Description of what USACS is and what it offers */}
        <section className="bg-[#DED3BF] py-12 sm:py-16 md:py-20 mt-13">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <p className="text-[var(--grey)] text-lg sm:text-xl md:text-2xl lg:text-[35px] leading-7 sm:leading-8 md:leading-10 lg:leading-14">
              <span className="font-extrabold">
                The Undergraduate Student Alliance of Computer Scientists
                (USACS)
              </span>{" "}
              is Rutgers' premier student organization for every and any
              aspiring computer scientist! We host weekly workshops on topics
              not taught in class, mentorship services and programs, outreach
              opportunities to alumni and companies, diversity and community
              bonding events, and technical project building/open-source
              contributions.
            </p>
          </div>
        </section>
        {/* Full-width group photo of the organization */}
        <section className="bg-[var(--cream)] pt-12 sm:pt-16 pb-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <div className="rounded-[28px] bg-[var(--cream)]">
              <img
                src="/icons/group.png"
                alt="USACS group photo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
