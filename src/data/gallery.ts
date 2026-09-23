export interface GalleryItem {
  id: string;
  title: string;
  category: "Training" | "Cars" | "Students" | "Sessions";
  imageUrl: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Safe Start Training Fleet & Vehicle",
    category: "Cars",
    imageUrl: "/images/photo1.jpg",
    caption: "Dual-control training vehicle ready for practice sessions in Rudrapur."
  },
  {
    id: "g2",
    title: "On-Road Student Practical Lesson",
    category: "Training",
    imageUrl: "/images/photo2.jpg",
    caption: "Real-world road practice with our certified instructor."
  },
  {
    id: "g3",
    title: "Proud Student License Passed",
    category: "Students",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    caption: "Student receiving her driving license after clearing the RTO test on first try!"
  },
  {
    id: "g4",
    title: "Cone Parking & Steering Practice",
    category: "Sessions",
    imageUrl: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",
    caption: "Parallel parking practice on our dedicated training track."
  },
  {
    id: "g5",
    title: "Highway & Traffic Navigation",
    category: "Sessions",
    imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    caption: "Real-world traffic driving lesson with full safety supervisor."
  },
  {
    id: "g6",
    title: "Happy Learner Driver",
    category: "Students",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    caption: "Student smiling after completing his first successful city solo drive."
  }
];
