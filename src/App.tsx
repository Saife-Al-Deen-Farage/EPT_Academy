import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AcademyVirtualTour } from './components/AcademyVirtualTour';
import { TrustSection } from './components/TrustSection';
import { CoursesSection } from './components/CoursesSection';
import { LearningPathsSection } from './components/LearningPathsSection';
import { OnlineReachSection } from './components/OnlineReachSection';
import { StudentProjectsSection } from './components/StudentProjectsSection';
import { InstructorsSection } from './components/InstructorsSection';
import { EventsSection } from './components/EventsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals and Overlays
import { CourseDetailModal } from './components/CourseDetailModal';
import { RegistrationModal } from './components/RegistrationModal';
import { ReviewModal } from './components/ReviewModal';
import { ArticleModal } from './components/ArticleModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminDashboard } from './components/admin/AdminDashboard';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Sections Hierarchy */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust Indicators / Why EPT */}
        <TrustSection />

        {/* 3. Real Academy Facilities & Interactive Virtual Tour */}
        <AcademyVirtualTour />

        {/* 4. Featured & Filterable Programs */}
        <CoursesSection />

        {/* 4. Progressive Learning Paths */}
        <LearningPathsSection />

        {/* 5. Online Learning & Geographic Reach across Egypt */}
        <OnlineReachSection />

        {/* 6. Real Student Projects Gallery */}
        <StudentProjectsSection />

        {/* 7. Dedicated Instructors */}
        <InstructorsSection />

        {/* 8. Interactive Events & Workshops */}
        <EventsSection />

        {/* 9. Verified Student Reviews & Testimonials */}
        <ReviewsSection />

        {/* 10. Educational Insights & Blog */}
        <BlogSection />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Contact Form & Location Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Actions */}
      <FloatingWhatsApp />

      {/* Modals & Dialogs */}
      <CourseDetailModal />
      <RegistrationModal />
      <ReviewModal />
      <ArticleModal />
      <GlobalSearchModal />
      <LegalModal />
      <AdminDashboard />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
