import SectionWrapper from "../components/SectionWrapper";
import PageHeader from "../components/PageHeader";
import Card from "../components/CardResource";
import PageSubtitle from "../components/PageSubtitle";

export default async function ResourcesPage() {
  return (
    <>
      {/* red header */}
      {/* Top page header with title and subtitle */}
      <PageHeader>
        <h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-[var(--cream-light)]">
          RESOURCES
        </h1>

        <PageSubtitle className="text-[var(--cream)]">
          A COMMUNITY-DRIVEN COLLECTION OF RESOURCES TO AID YOU IN YOUR CS
          ENDEAVORS.
        </PageSubtitle>
      </PageHeader>

      <section className="mx-auto mt-10 max-w-[900px] px-6 text-[var(--usacs-red-dark)]">
        <p className="mb-6 text-lg leading-8">
          The guides presented here are adapted from guides on “Succeeding in
          Rutgers CS” written by Sakib Jalal (‘18). Much of the information has
          been updated, but some is still the same. You can find his guides{" "}
          <a
            href="https://github.com/sakib/succeeding_in_rutgers_cs"
            className="font-semibold underline"
          >
            here
          </a>
          . For further reading, Vaibhav Verma (‘15) created his own set of
          guides. You can find his guides{" "}
          <a
            href="https://vverma.net/succeeding-in-rutgers-cs.html"
            className="font-semibold underline"
          >
            here
          </a>
          .
        </p>

        <h3 className="mb-3 text-2xl font-bold">Background</h3>

        <p className="mb-6 text-lg leading-8">
          Initially, when you first start college, make sure you're settled in
          and comfortable with college life. Defining what success looks like
          for you and achieving your goals can be overwhelming, but college is a
          marathon, not a sprint. You have years to explore your interests, make
          life-long friends, and to learn faster than you ever have.
        </p>

        <p className="mb-6 text-lg leading-8">
          The information presented in these guides is based on what we’ve found
          effective in our experiences in Rutgers CS. However, there is no one
          way to do things, and everyone has their own path. We hope these
          guides provide you a starting point in your time here at Rutgers, but
          they are by no means an end-all be all.
        </p>

        <h3 className="mb-3 text-2xl font-bold">Contributors</h3>

        <ul className="list-disc space-y-1 pl-6 text-lg leading-8">
          <li>
            <a
              href="https://www.linkedin.com/in/jiayue-xue/"
              className="underline"
            >
              Angela Xue (‘26)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ranajay531/"
              className="underline"
            >
              Jay Rana (‘26)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/farhan-khan29/"
              className="underline"
            >
              Farhan Khan (‘26)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/barghavig/"
              className="underline"
            >
              Barghavi Gopinath (‘26)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/martin5390/"
              className="underline"
            >
              Martin Shen (‘27)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hasan-ali-618021292/"
              className="underline"
            >
              Hasan Ali (‘27)
            </a>
          </li>
        </ul>
      </section>

      {/* suggestion box */}
      {/* Call-to-action for users to suggest new resources */}
      <section className="mt-10 text-center">
        <Card
          className="
            inline-block
            bg-[var(--light-red-box)]
            px-8 py-4
            rounded-[22px]
            text-[1.05rem]
          "
        >
          <p className="text-[var(--usacs-red-dark)]">
            Want to add something?{" "}
            <a href="#" className="font-extrabold underline">
              Let us know.
            </a>
          </p>
        </Card>
      </section>

      {/* resource cards */}
      {/* Resource tiles (Academics, Career, General, Alumni) */}
      {/* Each tile is a Card component that links to its own route (ex: /resources/academics) */}

      {/* To add a new resource tile:
          1. Copy one of the existing Card blocks below
          2. Update the link (href) to match the new route (ex: /resources/newsection)
          3. Update the icon, title, and description text
          4. Make sure a matching folder exists in app/resources (ex: /resources/newsection/page.tsx)
      */}
      <SectionWrapper>
        <section
          className="
    mx-auto
    mt-10 mb-14
    grid
    grid-cols-1 sm:grid-cols-2
    gap-6 sm:gap-8
    max-w-7xl
    px-4 sm:px-8 lg:px-12
  "
        >
          {/* ACADEMICS */}
          <Card
            className="  
            w-full
            min-h-[300px]
        bg-[var(--resource-tile)]
        text-[var(--cream)]
        rounded-[22px]
        px-6 pt-7 pb-6
        text-center
        shadow-[0_10px_20px_rgba(0,0,0,0.15)]
        cursor-pointer
      "
          >
            <a
              href="/resources/academics"
              className="block h-full no-underline text-inherit"
            >
              <div
                className="
                  mx-auto mb-4
                  flex h-34 w-34 items-center justify-center
                  rounded-full
                  bg-[var(--resource-circle)]
                "
              >
                <img
                  src="/icons/academics.png"
                  alt="Academics"
                  className="h-[100px] w-[100px] object-contain block"
                />
              </div>

              <h3 className="mt-1 mb-1.5 text-[var(--cream)] font-bold">
                ACADEMICS
              </h3>

              <p className="text-[var(--cream)] text-sm leading-[1.35]">
                Advice for succeeding in the classroom in Rutgers CS.
              </p>
            </a>
          </Card>

          {/* CAREER */}
          <Card
            className="
            w-full
            min-h-[300px]
        bg-[var(--resource-tile)]
        text-[var(--cream)]
        rounded-[22px]
        px-6 pt-7 pb-6
        text-center
        shadow-[0_10px_20px_rgba(0,0,0,0.15)]
        cursor-pointer
      "
          >
            <a
              href="/resources/career"
              className="block h-full no-underline text-inherit"
            >
              <div
                className="
    mx-auto mb-4
    flex h-34 w-34 items-center justify-center
    rounded-full
    bg-[var(--resource-circle)]
  "
              >
                <img
                  src="/icons/career.png"
                  alt="Career"
                  className="h-[100px] w-[100px] object-contain block"
                />
              </div>

              <h3 className="mt-1 mb-1.5 text-[var(--cream)] font-bold">
                CAREER
              </h3>

              <p className="text-[var(--cream)] text-sm leading-[1.35]">
                Our internship guide covering all you need to know from scratch
                to land a tech internship. Includes resources for learning new
                technical skills.
              </p>
            </a>
          </Card>

          {/* GENERAL */}
          <Card
            className="
            w-full
            min-h-[300px]
            bg-[var(--resource-tile)]
            text-[var(--cream)]
            rounded-[22px]
            px-6 pt-7 pb-6
            text-center
            shadow-[0_10px_20px_rgba(0,0,0,0.15)]
            cursor-pointer
      "
          >
            <a
              href="/resources/general"
              className="block h-full no-underline text-inherit"
            >
              <div
                className="
                mx-auto mb-4
                flex h-34 w-34 items-center justify-center
                rounded-full
                bg-[var(--resource-circle)]
              "
              >
                <img
                  src="/icons/general.png"
                  alt="General"
                  className="h-[100px] w-[100px] object-contain block"
                />
              </div>

              <h3 className="mt-1 mb-1.5 text-[var(--cream)] font-bold">
                GENERAL
              </h3>

              <p className="text-[var(--cream)] text-sm leading-[1.35]">
                Advice we wish we had when we began Rutgers CS.
              </p>
            </a>
          </Card>

          {/* ALUMNI ADVICE */}
          <Card
            className="
            w-full
            min-h-[300px]
      bg-[var(--resource-tile)]
      text-[var(--cream)]
      rounded-[22px]
      px-6 pt-7 pb-6
      text-center
      shadow-[0_10px_20px_rgba(0,0,0,0.15)]
      cursor-pointer
    "
          >
            <a
              href="/resources/alumni"
              className="block h-full no-underline text-inherit"
            >
              <div
                className="
          mx-auto mb-4
          flex h-34 w-34 items-center justify-center
          rounded-full
          bg-[var(--resource-circle)]
        "
              >
                <img
                  src="/icons/alumni-advice.png"
                  alt="Alumni Advice"
                  className="h-[100px] w-[100px] object-contain block"
                />
              </div>

              <h3 className="mt-1 mb-1.5 text-[var(--cream)] font-bold">
                ALUMNI ADVICE
              </h3>

              <p className="text-[var(--cream)] text-sm leading-[1.35]">
                Tips from accomplished graduates.
              </p>
            </a>
          </Card>
        </section>
      </SectionWrapper>

      {/* LOCATIONS */}
      {/* Campus locations section showing CS-related spaces */}
      {/* Each location is displayed with an image on the left and description on the right */}
      <section className="bg-[#DED3BF] pt-15 pb-32">
        <h2
          className="
      text-center
      font-bold
      text-[50px]
      leading-none
      tracking-normal
      text-[#342606]
    "
        >
          LOCATIONS
        </h2>

        <section className="max-w-[1200px] mx-auto px-8 mt-32 space-y-32">
          {/* THE CSL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-20">
            <div className="order-2 lg:order-1 overflow-hidden rounded-[28px]">
              <img
                src="/icons/csl.png"
                alt="The CSL"
                className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
              />
            </div>

            <div className="order-1 lg:order-2 max-w-full lg:max-w-[520px]">
              <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-[#87111D]">
                THE CSL
              </h3>
              <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-[#54412F]">
                The CSL (Coding & Social Lounge) is located on the second floor
                of the Hill Center Room 252. Part of the Computer Science
                Instructional Labs, the CSL was designed to provide students
                their own atmosphere for collaboration and group projects.
              </p>
            </div>
          </div>

          {/* MELTDOWN LAB */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-20">
            <div className="order-1 lg:order-1 max-w-full lg:max-w-[520px]">
              <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-[#87111D]">
                MELTDOWN LAB
              </h3>
              <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-[#54412F]">
                Right next door to the CSL, the Meltdown Lab is stocked with
                Linux machines and whiteboards, perfect for late night cram
                sessions.
              </p>
            </div>

            <div className="order-2 lg:order-2 overflow-hidden rounded-[28px]">
              <img
                src="/icons/meltdown-lab.png"
                alt="Meltdown Lab"
                className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
              />
            </div>
          </div>

          {/* HACKERSPACE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-20">
            <div className="order-2 lg:order-1 overflow-hidden rounded-[28px]">
              <img
                src="/icons/hackerspace.png"
                alt="Hackerspace"
                className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
              />
            </div>

            <div className="order-1 lg:order-2 max-w-full lg:max-w-[520px]">
              <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-[#87111D]">
                HACKERSPACE
              </h3>
              <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-[#54412F]">
                The Hack-R-space is located in Hill 120. The Hack-R-Space is a
                workshop for students to tinker and build. It offers access to
                an abundance of resources, including 3D printing, robotics,
                Oculus Rifts, and instrumental recording hardware.
              </p>
            </div>
          </div>

          {/* MAKERSPACE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-20">
            <div className="order-1 lg:order-1 max-w-full lg:max-w-[520px]">
              <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-[#87111D]">
                MAKERSPACE
              </h3>
              <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-[#54412F]">
                The Makerspace is designed for Rutgers affiliates of all
                experience levels to bring their ideas to life. Located near
                Livingston Campus, the Makerspace is a tech atelier for students
                to design and construct hardware.
              </p>
            </div>

            <div className="order-2 lg:order-2 overflow-hidden rounded-[28px]">
              <img
                src="/icons/makerspace.png"
                alt="Makerspace"
                className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
