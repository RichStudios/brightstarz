// BrightStarz Production YouTube Videos
export interface VideoData {
  id: string;
  title: string;
  description: string;
  category: 'performance' | 'event' | 'campaign' | 'documentary';
  duration?: string;
}

export const youtubeVideos: VideoData[] = [
  {
    id: "iDm2sQB9GW8",
    title: "Fathers of the Nation Intro by Brightstarz Production",
    description: "An introductory performance by Brightstarz Production.",
    category: "performance"
  },
  {
    id: "pmeMFgYiNtQ",
    title: "Remember the Matatus in Kenya?",
    description: "A nostalgic look at Matatus in Kenya.",
    category: "performance"
  },
  {
    id: "aSsFk_IYHZM",
    title: "Tila Amuuliza Babake Maswali Magumu",
    description: "Tila asks her father difficult questions.",
    category: "performance"
  },
  {
    id: "HkpMCjPADMk",
    title: "MEET BABALAH MOHAMMED SEE WHAT HE IS DOING AND HOW HE MOTIVATES US TO FOLLOW SUIT",
    description: "Meet Babalah Mohammed and his motivational work.",
    category: "campaign"
  },
  {
    id: "AbkCXnJS428",
    title: "THE VAGABONDS",
    description: "A performance of 'The Vagabonds'.",
    category: "performance"
  },
  {
    id: "fR6Atb6Gu0A",
    title: "A DOLL'S HOUSE PART 1",
    description: "Part 1 of 'A Doll's House'.",
    category: "performance"
  },
  {
    id: "v7FiQLMHV-o",
    title: "A DOLL'S HOUSE PART 2",
    description: "Part 2 of 'A Doll's House'.",
    category: "performance"
  },
  {
    id: "DEUUbZ1T2Y8",
    title: "Kutana na Bwana Duncan Obwocha mwandishi /mwalimu wa fasihi shule ya upili ya wavulana ya keborigo",
    description: "An interview with Mr. Duncan Obwocha, a writer and literature teacher.",
    category: "campaign"
  },
  {
    id: "LvVkAYQsWwo",
    title: "CHOZI LA HERI PART ONEn",
    description: "Part 1 of 'Chozi La Heri'.",
    category: "performance"
  },
  {
    id: "8ApqqIrqUGU",
    title: "CHOZI LA HERI PART TWO",
    description: "Part 2 of 'Chozi La Heri'.",
    category: "performance"
  },
  {
    id: "FNZMK7ze-mE",
    title: "CHOZI LA HERI PART THREE",
    description: "Part 3 of 'Chozi La Heri'.",
    category: "performance"
  },
  {
    id: "LGaiqXm5-y0",
    title: "CHOZI LA HERI PART FOUR",
    description: "Part 4 of 'Chozi La Heri'.",
    category: "performance"
  },
  {
    id: "wkMsx3q7N4A",
    title: "CHOZI LA HERI PART FIVE",
    description: "Part 5 of 'Chozi La Heri'.",
    category: "performance"
  },
  {
    id: "wkMsx3q7N4A",
    title: "CHOZI LA HERI PART SIX",
    description: "Part 6 of 'Chozi La Heri'.",
    category: "performance"
  },
  {
    id: "X5M6Cbxqrso",
    title: "Blossoms of the Savannah PART 1",
    description: "Part 1 of 'Blossoms of the Savannah'.",
    category: "performance"
  },
  {
    id: "DF0bh-l5PHk",
    title: "Blossoms of the Savannah PART 2",
    description: "Part 2 of 'Blossoms of the Savannah'.",
    category: "performance"
  },
  {
    id: "QYySKFeWY60",
    title: "POWERFUL MOTIVATION (TEAM WORK IS ALL) HOMABAY BOYS",
    description: "A powerful motivational video featuring Homabay Boys.",
    category: "campaign"
  }
];

export const getVideosByCategory = (category: string) => {
  return youtubeVideos.filter(video => video.category === category);
};

export const getAllVideos = () => youtubeVideos;