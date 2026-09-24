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

export const reviewsData: Review[] = [
  {
    id: "r1",
    name: "Sunil Verma",
    role: "Beginner Learner",
    rating: 5,
    text: "Safe Start Driving School in Rudrapur is top-notch! The instructor was extremely patient while teaching me clutch control and reverse parking. Cleared my RTO driving test on the first attempt!",
    course: "Beginner Driving Course",
    date: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r2",
    name: "Gurpreet Singh",
    role: "Refresher Learner",
    rating: 5,
    text: "Best driving school in Rudrapur! Dual control vehicle gave me complete peace of mind during heavy traffic practice. Flexible morning timings suited my work schedule perfectly.",
    course: "Refresher Course",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r3",
    name: "Deepak Joshi",
    role: "Test Prep Student",
    rating: 5,
    text: "Highly professional instructors and friendly teaching style. They trained me well for the H-track and slope test at the local RTO. Recommended to anyone learning car driving in Rudrapur!",
    course: "Test Preparation",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];

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
