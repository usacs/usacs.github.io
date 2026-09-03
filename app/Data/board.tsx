export type BoardMember = {
  name: string;
  position: string;
  major: string;
  minor?: string;
  description1: string;
  description2: string;
  imageSrc: string;
  isCoPresident: boolean;
};

/* =========================
   EXEC / CO-PRESIDENTS
========================= */

export const EXEC_BOARD: BoardMember[] = [
  {
    name: "Pallavi Biswas",
    position: "President",
    major: "CS & Data Science",
    minor: "Business Administration",
    description1:
      "Pallavi is a senior, bringing three years of board experience to the role. She hopes to continue fostering a welcoming and inclusive environment for all members, and is excited to lead the club in its mission to connect students with opportunities in the computer science industry.",
    description2:
      "Outside of academics, she spends her time in the gym or watching re-runs of her favorite shows and movies. Pallavi is especially passionate about pursuing a career in AI/ML engineering and data analytics.",
    imageSrc: "/profiles/pallavi-r.png",
    isCoPresident: true,
  },
  {
    name: "Reeya Singh",
    position: "Vice President, Community Director & Mentorship Co-Director",
    major: "CS, Data Science & Economics",
    description1:
      " Reeya is a senior who's been a part of USACS for three years now. With multiple roles this year, she looks forward to helping general members connect and grow in their journey as an individual in this field.",
    description2:
      "In my free time, I like to watch crime shows, try new cafes, and play tennis. I'm excited to meet new members and help the club grow!",
    imageSrc: "/profiles/reeya-r.png",
    isCoPresident: true,
  },
];

/* =========================
   DIRECTORS
========================= */

export const BOARD: BoardMember[] = [
  {
    name: "Brayden Uglione",
    position: "Education Director",
    major: "CS & Data Science",
    minor: "Math & Statistics",
    description1:
      "A sophomore, this is Brayden's first year on the board, but he served as an intern for the year 2025-26.",
    description2:
      "Besides USACS, he is on the board of HackRU, and he loves playing basketball and spikeball.",
    imageSrc: "/profiles/brayden-r.png",
    isCoPresident: false,
  },
  {
    name: "Advik Bhatt",
    position: "Tech Director",
    major: "CS & Data Science",
    description1:
      "Advik is junior, who is joining USACS for as its newest member, and is excited to be a part of the board. He is passionate about technology and loves exploring new advancements in the field, especially in AI.",
    description2:
      "He remains dedicated to his advancements through participating and winning multiple hackathons, as well as building his startup, Rolemate.",
    imageSrc: "/profiles/advik-r.png",
    isCoPresident: false,
  },
  {
    name: "Ethan Poon",
    position: "Outreach Director",
    major: "Computer Engineering",
    description1:
      "Ethan is a sophomore passionate about software engineering, AI, and building technology that solves real-world problems. As a former intern, he hopes to use his experience to grow the network between recruiters and students, and to help students find opportunities in the tech industry.",
    description2:
      "Outside of tech, he loves music and enjoy discovering new artists, listening to different genres, and going to festivals.",
    imageSrc: "/profiles/ethan-r.png",
    isCoPresident: false,
  },
  {
    name: "Nirmit Bhoyar",
    position: "Communications Director",
    major: "CS & Data Science",
    minor: "Entrepreneurship",
    description1:
      "Nirmit is a sophomore who served as a USACS intern for the 2025-26 year. He and is excited to be joining the board as Communications Director. He is always working on new projects and looking for ways to learn something new.",
    description2:
      "He is excited to help grow the Rutgers CS community and connect students with opportunities!",
    imageSrc: "/profiles/nirmit-r.png",
    isCoPresident: false,
  },
  {
    name: "Juhi Gaware",
    position: "Treasury Director",
    major: "CS & Finance",
    description1:
      "With her second year in treasury, Juhi is our resident treasurer, and is excited to be a part of e-board and for all the exciting events coming up. She hopes to plan fun fundraising events and help the club grow.",
    description2:
      " Outside of USACS, she loves crocheting, trying new restaurants, and game night with her friends",
    imageSrc: "/profiles/juhi-r.png",
    isCoPresident: false,
  },
  {
    name: "Anusha Iyer",
    position: "Road to SWE Director",
    major: "CS & Math",
    minor: "Philosophy, Politics, and Economics",
    description1:
      "Anusha is a junior, who has been a part of USACS for two years & founded the RTSWE program last year! She is excited to continue growing the program and helping students prepare for their future careers in SWE.",
    description2:
      "In her free time, she enjoys practicing dance, watercoloring, playing the guitar, running, and reading!",
    imageSrc: "/profiles/anusha-r.png",
    isCoPresident: false,
  },
];
