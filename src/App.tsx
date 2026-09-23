import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Courses } from './components/Courses';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileContactBar } from './components/MobileContactBar';
import { EnquiryModal } from './components/EnquiryModal';
import { Course } from './data/courses';

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState<string>('Beginner Lessons');

  const handleOpenEnquiry = (courseTitle?: string) => {
    if (courseTitle) {
      setSelectedCourseTitle(courseTitle);
    }
    setIsEnquiryOpen(true);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourseTitle(course.title);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <TopBar />
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />
      
      <main className="flex-grow">
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />
        <WhyChooseUs />
        <Courses onSelectCourse={handleSelectCourse} />
        <HowItWorks />
        <Gallery />
        <Reviews />
        <Contact onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      <Footer />
      <MobileContactBar />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        preselectedCourse={selectedCourseTitle}
      />
    </div>
  );
};

export default App;
