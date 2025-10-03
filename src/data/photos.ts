// BrightStarz Production Photo Gallery Data
export interface PhotoData {
  id: string;
  filename: string;
  category: 'performances' | 'audience-fans' | 'events';
  alt: string;
  title: string;
}

export const performancePhotos: PhotoData[] = [
  { id: 'perf-1', filename: 'IMG_3540.jpg', category: 'performances', alt: 'Performance moment', title: 'Stage Performance' },
  { id: 'perf-2', filename: 'IMG_5035.JPG', category: 'performances', alt: 'Setbook dramatization', title: 'Setbook Performance' },
  { id: 'perf-3', filename: 'IMG_5046.JPG', category: 'performances', alt: 'Theater performance', title: 'Educational Theater' },
  { id: 'perf-4', filename: 'IMG_5047.JPG', category: 'performances', alt: 'Stage scene', title: 'Dramatic Scene' },
  { id: 'perf-5', filename: 'IMG_5050.JPG', category: 'performances', alt: 'Performance highlight', title: 'Performance Highlight' },
  { id: 'perf-6', filename: 'IMG_5064.JPG', category: 'performances', alt: 'Theatrical moment', title: 'Theatrical Moment' },
  { id: 'perf-7', filename: 'IMG_6318.jpg', category: 'performances', alt: 'Performance scene', title: 'Performance Scene' },
  { id: 'perf-8', filename: 'IMG_7053.jpg', category: 'performances', alt: 'Stage production', title: 'Stage Production' },
];

export const audienceFansPhotos: PhotoData[] = [
  { id: 'aud-1', filename: 'IMG_2485.jpg', category: 'audience-fans', alt: 'Engaged audience', title: 'Audience Engagement' },
  { id: 'aud-2', filename: 'IMG_2544.jpg', category: 'audience-fans', alt: 'Students watching', title: 'Student Audience' },
  { id: 'aud-3', filename: 'IMG_2545.jpg', category: 'audience-fans', alt: 'Audience reaction', title: 'Audience Reaction' },
  { id: 'aud-4', filename: 'IMG_2546.jpg', category: 'audience-fans', alt: 'Fans enjoying show', title: 'Enjoying the Show' },
  { id: 'aud-5', filename: 'IMG_2569.jpg', category: 'audience-fans', alt: 'Audience participation', title: 'Active Participation' },
  { id: 'aud-6', filename: 'IMG_3534.jpg', category: 'audience-fans', alt: 'School audience', title: 'School Audience' },
  { id: 'aud-7', filename: 'IMG_3535.jpg', category: 'audience-fans', alt: 'Students engaged', title: 'Engaged Students' },
  { id: 'aud-8', filename: 'IMG_3536.jpg', category: 'audience-fans', alt: 'Audience members', title: 'Audience Members' },
  { id: 'aud-9', filename: 'IMG_3537.jpg', category: 'audience-fans', alt: 'Fans at event', title: 'Event Fans' },
  { id: 'aud-10', filename: 'IMG_3541.jpg', category: 'audience-fans', alt: 'Crowd engagement', title: 'Crowd Engagement' },
  { id: 'aud-11', filename: 'IMG_3542.jpg', category: 'audience-fans', alt: 'Audience enjoyment', title: 'Audience Enjoyment' },
  { id: 'aud-12', filename: 'IMG_4678.jpg', category: 'audience-fans', alt: 'Fan interaction', title: 'Fan Interaction' },
  { id: 'aud-13', filename: 'IMG_4688.jpg', category: 'audience-fans', alt: 'Audience appreciation', title: 'Audience Appreciation' },
];

export const eventPhotos: PhotoData[] = [
  { id: 'evt-1', filename: 'IMG_4691.jpg', category: 'events', alt: 'Event setup', title: 'Event Setup' },
  { id: 'evt-2', filename: 'IMG_4692.jpg', category: 'events', alt: 'Behind the scenes', title: 'Behind the Scenes' },
  { id: 'evt-3', filename: 'IMG_4792.jpg', category: 'events', alt: 'Event preparation', title: 'Event Preparation' },
  { id: 'evt-4', filename: 'IMG_5510.jpg', category: 'events', alt: 'Event venue', title: 'Event Venue' },
  { id: 'evt-5', filename: 'IMG_5511.jpg', category: 'events', alt: 'Team at event', title: 'BrightStarz Team' },
  { id: 'evt-6', filename: 'IMG_5512.jpg', category: 'events', alt: 'Event activities', title: 'Event Activities' },
  { id: 'evt-7', filename: 'IMG_5513.jpg', category: 'events', alt: 'Event highlights', title: 'Event Highlights' },
  { id: 'evt-8', filename: 'IMG_5514.jpg', category: 'events', alt: 'Event moments', title: 'Special Moments' },
  { id: 'evt-9', filename: 'IMG_5515.jpg', category: 'events', alt: 'Event gathering', title: 'Community Gathering' },
  { id: 'evt-10', filename: 'IMG_5516.jpg', category: 'events', alt: 'Event coordination', title: 'Event Coordination' },
  { id: 'evt-11', filename: 'IMG_5517.jpg', category: 'events', alt: 'Event success', title: 'Successful Event' },
  { id: 'evt-12', filename: 'IMG_5972.jpg', category: 'events', alt: 'Event coverage', title: 'Event Coverage' },
  { id: 'evt-13', filename: 'IMG_5973.jpg', category: 'events', alt: 'Event documentation', title: 'Event Documentation' },
  { id: 'evt-14', filename: 'IMG_5993.jpg', category: 'events', alt: 'Event memory', title: 'Event Memory' },
  { id: 'evt-15', filename: 'IMG_6024.jpg', category: 'events', alt: 'Event participation', title: 'Active Participation' },
  { id: 'evt-16', filename: 'IMG_6025.jpg', category: 'events', alt: 'Event engagement', title: 'Community Engagement' },
  { id: 'evt-17', filename: 'IMG_6317.jpg', category: 'events', alt: 'Event celebration', title: 'Event Celebration' },
  { id: 'evt-18', filename: 'IMG_6319.jpg', category: 'events', alt: 'Event achievement', title: 'Achievement Moment' },
  { id: 'evt-19', filename: 'IMG_7543.jpg', category: 'events', alt: 'Event experience', title: 'Event Experience' },
  { id: 'evt-20', filename: 'IMG_7544.jpg', category: 'events', alt: 'Event impact', title: 'Community Impact' },
  { id: 'evt-21', filename: 'IMG_7545.jpg', category: 'events', alt: 'Event connection', title: 'Making Connections' },
  { id: 'evt-22', filename: 'IMG_7546.jpg', category: 'events', alt: 'Event inspiration', title: 'Inspiring Moments' },
  { id: 'evt-23', filename: 'IMG_7547.jpg', category: 'events', alt: 'Event unity', title: 'Community Unity' },
  { id: 'evt-24', filename: 'IMG_7548.jpg', category: 'events', alt: 'Event joy', title: 'Joyful Moments' },
  { id: 'evt-25', filename: 'IMG_7550.jpg', category: 'events', alt: 'Event success story', title: 'Success Story' },
  { id: 'evt-26', filename: 'IMG_7810.jpg', category: 'events', alt: 'Event finale', title: 'Event Finale' },
  { id: 'evt-27', filename: 'IMG_9999.jpg', category: 'events', alt: 'Special event', title: 'Special Event' },
];

export const getAllPhotos = (): PhotoData[] => {
  return [...performancePhotos, ...audienceFansPhotos, ...eventPhotos];
};

export const getPhotosByCategory = (category: string): PhotoData[] => {
  switch (category) {
    case 'performances':
      return performancePhotos;
    case 'audience-fans':
      return audienceFansPhotos;
    case 'events':
      return eventPhotos;
    default:
      return getAllPhotos();
  }
};

// Helper function to get image path from public folder
export const getImagePath = (category: string, filename: string): string => {
  return `/images/${category}/${filename}`;
};