export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  course: string;
  date: string;
  avatar: string;
}

export interface VideoTestimonial {
  id: string;
  studentName: string;
  title: string;
  duration: string;
  thumbnail: string;
  embedUrl: string;
  highlight: string;
}

export const reviewsData: Review[] = [];

// Automatically glob all video files in public/videos folder
const videoFiles = import.meta.glob('/public/videos/*.{mp4,webm,MP4,WEBM}', { eager: true });
const thumbnailFiles = import.meta.glob('/public/videos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });

function formatTitle(filename: string): string {
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  const words = nameWithoutExt.replace(/[-_]/g, ' ').split(' ');
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const autoVideos: VideoTestimonial[] = Object.keys(videoFiles).map((filePath, idx) => {
  const filename = filePath.split('/').pop() || `video_${idx + 1}`;
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  const title = formatTitle(filename);
  const videoUrl = filePath.replace('/public', '');

  // Look for matching thumbnail image with same basename or fallback thumbnail
  const matchingThumbKey = Object.keys(thumbnailFiles).find(k => k.includes(nameWithoutExt));
  const thumbnailUrl = matchingThumbKey ? matchingThumbKey.replace('/public', '') : '/images/video_thumb1.jpg';

  return {
    id: `v_auto_${idx + 1}`,
    studentName: `Student Video ${idx + 1}`,
    title: title || "Safe Start Practical Driving Video",
    duration: "Play Video",
    thumbnail: thumbnailUrl,
    embedUrl: videoUrl,
    highlight: "Practical road session at Safe Start Driving School Rudrapur."
  };
});

const fallbackVideos: VideoTestimonial[] = [
  {
    id: "v1",
    studentName: "Student Experience Video 1",
    title: "Safe Start Driving Lesson & Review",
    duration: "Play Video",
    thumbnail: "/images/video_thumb1.jpg",
    embedUrl: "https://drive.google.com/file/d/1JNzj-tEz6iFKK4Ok0iBepLvMSgZQEupn/view?usp=drive_link",
    highlight: "Student feedback & practical session in Rudrapur."
  },
  {
    id: "v2",
    studentName: "Student Experience Video 2",
    title: "On-Road Practical Driving Training",
    duration: "Play Video",
    thumbnail: "/images/video_thumb2.jpg",
    embedUrl: "https://drive.google.com/file/d/1FMhTJXUAKdG_N7JgAm7tSYddXdFK_LKQ/view?usp=drive_link",
    highlight: "Building road confidence with dual-control safety vehicle."
  }
];

export const videoTestimonialsData: VideoTestimonial[] = autoVideos.length > 0 ? autoVideos : fallbackVideos;
