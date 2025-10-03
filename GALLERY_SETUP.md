# Gallery Setup Instructions

## 🎥 Adding Your Actual YouTube Videos

### Step 1: Get Video IDs
1. Go to each video on your YouTube channel: https://www.youtube.com/@brightstarz-arts
2. Copy the video ID from the URL (e.g., if URL is `youtube.com/watch?v=ABC123XYZ`, the ID is `ABC123XYZ`)

### Step 2: Update Video Data
Edit `src/data/videos.ts` and replace the placeholder video IDs (`dQw4w9WgXcQ`) with your actual video IDs:

```typescript
{
  id: "YOUR_ACTUAL_VIDEO_ID_HERE", // Replace this
  title: "The Samaritan - Alvita & Montano Scene",
  description: "Professional dramatization of The Samaritan setbook featuring key characters",
  category: "performance"
}
```

### Step 3: Add More Videos
Based on your YouTube channel with 110 videos, you can add more entries to the `youtubeVideos` array following the same format.

## 📸 Adding Your Photos

### Photo Directory Structure Created:
```
brightstarz-production/
├── src/
│   └── assets/
│       └── images/
│           ├── performances/     ← Place performance photos here
│           ├── audience-fans/    ← Place audience & fan photos here
│           └── events/          ← Place event photos here
```

### Step 1: Copy Your Photos
1. **Performance Photos**: Copy to `brightstarz-production/src/assets/images/performances/`
2. **Audience & Fan Photos**: Copy to `brightstarz-production/src/assets/images/audience-fans/`
3. **Event Photos**: Copy to `brightstarz-production/src/assets/images/events/`

### Step 2: Photo Naming Convention
- Use descriptive names: `performance-river-between-01.jpg`
- Avoid spaces, use hyphens: `audience-reaction-nairobi-school.jpg`
- Supported formats: JPG, PNG, WebP
- Recommended size: 1200x800px for optimal display

### Step 3: Update Gallery Component
After adding photos, you'll need to import and display them in the Gallery component. Example:

```typescript
import performanceImg1 from '../assets/images/performances/performance-1.jpg';
import audienceImg1 from '../assets/images/audience-fans/audience-1.jpg';

const performancePhotos = [
  { src: performanceImg1, title: 'The River Between Performance', category: 'performance' },
  // Add more photos...
];
```

## 🚀 Testing Your Gallery

1. Start the development server: `npm start`
2. Navigate to the Gallery page
3. Test all filter tabs:
   - All Content
   - Setbook Performances  
   - Sensitization Campaigns
   - Events & Behind Scenes
   - Photo Gallery

## ✨ Features Added

- **Interactive Filter Tabs**: Sort content by category
- **YouTube Integration**: Direct links to your channel and individual videos
- **Responsive Design**: Works on all devices
- **Category Badges**: Visual indicators for content types
- **Professional Layout**: Matches your brand design

## 🔗 Links Added

- Direct link to your YouTube channel: https://www.youtube.com/@brightstarz-arts
- Individual video links open in new tabs
- Contact page integration for bookings

---

**Need Help?** The gallery is already functional with placeholder content. Once you add your actual video IDs and photos, everything will display your real content automatically!