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
    name: "Angela Xue",
    position: "Co-President",
    major: "CS, Math, & Cognitive Science",
    description1:
      "Angela Xue is a senior triple majoring in Computer Science, Mathematics, and Cognitive Science, and she currently serves as the Co-President of USACS. Known for her year-on-year growth, Angela brings energy and dedication to the organization while also being a proud member of Rutgers’ Women’s Ultimate Frisbee team, Nightshades.",
    description2:
      "She has countless favorite USACS events—Paws and Professors, Mock Interviews, and the Bloomberg office visit to name a few—but her favorite memories are hosting board meetings with a team of kind, passionate, and driven board members. Angela is especially interested in exploring finance and tech career paths outside of traditional software engineering roles.",
    imageSrc: "profiles/angela-r.png",
    isCoPresident: true,
  },
  {
    name: "Ishita Gabhane",
    position: "Vice President & Road to SWE Co-Director",
    major: "CS & Data Science",
    minor: "Business Administration",
    description1:
      "Ishita Gabhane is a senior double-majoring in Computer Science and Data Science with a minor in Business Administration. She serves as Vice President of USACS and Co-Director of Road to SWE, bringing three years of board experience to the role.",
    description2:
      "Outside of USACS, she enjoys spending time with friends, making art, planning her next travel adventure, and trying new food spots. Ishita’s favorite events include Paws & Professors and board socials, and she is passionate about pursuing career paths in software engineering, AI/ML, and fintech.",
    imageSrc: "profiles/ishita-r.png",
    isCoPresident: true,
  },
];

/* =========================
   DIRECTORS
========================= */

export const BOARD: BoardMember[] = [
  {
    name: "Hasan Ali",
    position: "Education Director",
    major: "CS & Physics",
    description1:
      "Hasan Ali is a junior double-majoring in Computer Science and Physics and currently serves as the Education Director of USACS. Passionate about building community and sharing knowledge, Hasan loves connecting with peers and creating opportunities for growth within the organization.",
    description2:
      "Outside of academics, he enjoys playing the saxophone, hitting the tennis courts, reading, and exploring his love for cars. His favorite USACS memory is attending his first Town Hall, and he’s excited to pursue a career in software engineering.",
    imageSrc: "profiles/hasan-r.png",
    isCoPresident: false,
  },
  {
    name: "Gokul Elangovan",
    position: "Tech Director",
    major: "CS & Data Science",
    description1:
      "Gokul Elangovan is a junior majoring in Computer Science and Data Science, currently serving as the Tech Director of USACS. Passionate about tech and community building, Gokul is excited to help lead and grow the organization this year.",
    description2:
      "Outside of academics, he’s a big fan of sweets and enjoys creative outlets—his favorite event so far was the Paint and Sip, where he formed peers as President Sib. Gokul is especially interested in AI/ML research and loves collaborating on exciting projects.",
    imageSrc: "profiles/gokul-r.png",
    isCoPresident: false,
  },
  {
    name: "Zene Sangoi",
    position: "Community Director",
    major: "CS & Data Science",
    minor: "Business Administration",
    description1:
      "Zene Sangoi is a sophomore double-majoring in Computer Science and Data Science with a minor in Business Administration, serving as Community Director of USACS. Always curious and eager to try new things, Zene loves traveling and exploring emerging technologies.",
    description2:
      "A fun fact about her—she’s already visited 40 countries! Her favorite USACS memory is the outdoor boba social held right before elections, and she’s especially passionate about pursuing a career in Data Science and AI/ML.",
    imageSrc: "profiles/zene-r.png",
    isCoPresident: false,
  },
  {
    name: "Ved Patel",
    position: "Outreach Director",
    major: "CS & Data Science",
    description1:
      "Ved Patel is a junior double-majoring in Computer Science and Data Science, currently serving as the Outreach Director of USACS. He’s excited to help make this year memorable and enjoys connecting with new members.",
    description2:
      "Outside of academics, Ved loves playing basketball and going on hikes. One of his favorite USACS experiences was the mentorship socials, where he met incredible mentors who supported him along his journey. He hopes to pursue a career in software engineering and artificial intelligence.",
    imageSrc: "profiles/ved-r.png",
    isCoPresident: false,
  },
  {
    name: "Pallavi Biswas",
    position: "Communications Director",
    major: "CS & Data Science",
    minor: "Business Administration",
    description1:
      "Pallavi Biswas is a junior double-majoring in Computer Science and Data Science with a minor in Business Administration, currently serving as Communications Director of USACS.",
    description2:
      "She treasures events like Paws & Professors, where she combined her love for dogs with networking opportunities, and considers e-board socials a favorite. Pallavi is especially passionate about pursuing a career in AI/ML engineering and data analytics.",
    imageSrc: "profiles/pallavi-r.png",
    isCoPresident: false,
  },
  {
    name: "Anusha Iyer",
    position: "Road to SWE Co-Director",
    major: "CS & Math",
    minor: "Philosophy, Politics, and Economics",
    description1:
      "Anusha Iyer is a sophomore majoring in Mathematics and Computer Science with a minor in Philosophy, Politics, and Economics, serving as Co-Director of Road to SWE.",
    description2:
      "Her favorite USACS memory is last year’s mentorship socials, where she connected with peers and mentors who inspired her journey. Outside of academics, she enjoys dancing, reading, listening to music, and solving crossword puzzles. She’s especially interested in pursuing a career in software engineering and AI/ML.",
    imageSrc: "profiles/anusha-r.png",
    isCoPresident: false,
  },
];
