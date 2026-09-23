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
    name: "Anjali S.",
    role: "Beginner Student",
    rating: 5,
    text: "Excellent instructor at Safe Start, very patient and professional. I was very nervous initially, but they helped me gain confidence and I passed my driving test on the first attempt in Rudrapur!",
    course: "Beginner Driving Course",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r2",
    name: "Rohan K.",
    role: "Refresher Student",
    rating: 5,
    text: "Great learning experience and flexible timings. Highly recommend Safe Start Driving School! The instructor explained clutch control and hill starts so easily.",
    course: "Refresher Course",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r3",
    name: "Priya M.",
    role: "Test Prep Student",
    rating: 5,
    text: "Very supportive and friendly instructors. Helped me build real confidence on heavy traffic roads and H-track parking. 10/10 experience!",
    course: "Test Preparation",
    date: "1 month ago",
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
