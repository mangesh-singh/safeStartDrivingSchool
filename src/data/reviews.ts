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

export const videoTestimonialsData: VideoTestimonial[] = [
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
