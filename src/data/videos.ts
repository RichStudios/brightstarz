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
    id: "dQw4w9WgXcQ", // Replace with actual video ID from The Samaritan video
    title: "The Samaritan - Alvita & Montano Scene",
    description: "Professional dramatization of The Samaritan setbook featuring key characters",
    category: "performance"
  },
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Ali Butterfly Performing Live",
    description: "Live performance alongside Brightstarz production team",
    category: "performance"
  },
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Saba Saba Protests Documentation",
    description: "Behind the scenes coverage during saba saba protests",
    category: "documentary"
  },
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Blossoms of the Savannah",
    description: "Complete setbook dramatization highlighting key themes",
    category: "performance"
  },
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "The River Between",
    description: "Ngugi wa Thiong'o's classic brought to life",
    category: "performance"
  },
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "HIV/AIDS Awareness Campaign",
    description: "Interactive sensitization program for students",
    category: "campaign"
  },
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "GBV Prevention Workshop",
    description: "Gender-based violence awareness through theater",
    category: "campaign"
  },
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Mental Health Sensitization",
    description: "Supporting student mental health and wellbeing",
    category: "campaign"
  }
];

export const getVideosByCategory = (category: string) => {
  return youtubeVideos.filter(video => video.category === category);
};

export const getAllVideos = () => youtubeVideos;