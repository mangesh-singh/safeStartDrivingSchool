export interface GalleryItem {
  id: string;
  title: string;
  category: "Training" | "Cars" | "Students" | "Sessions";
  imageUrl: string;
  caption: string;
}

// Automatically glob all photo files in public/photos folder
const photoFiles = import.meta.glob('/public/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });

function formatTitle(filename: string): string {
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  const words = nameWithoutExt.replace(/[-_]/g, ' ').split(' ');
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const autoPhotos: GalleryItem[] = Object.keys(photoFiles).map((filePath, index) => {
  const filename = filePath.split('/').pop() || `photo_${index + 1}`;
  const title = formatTitle(filename);
  const publicUrl = filePath.replace('/public', '');
  const categories: Array<"Training" | "Cars" | "Students" | "Sessions"> = ["Training", "Cars", "Students", "Sessions"];

  return {
    id: `photo_${index + 1}`,
    title: title || `Safe Start Driving Session ${index + 1}`,
    category: categories[index % categories.length],
    imageUrl: publicUrl,
    caption: `Practical training session at Safe Start Driving School, Rudrapur.`
  };
});

const fallbackPhotos: GalleryItem[] = [
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
  }
];

export const galleryData: GalleryItem[] = autoPhotos.length > 0 ? autoPhotos : fallbackPhotos;
