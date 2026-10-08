import realStudentCodingLab from '../assets/images/real_student_coding_lab_1791457660513.jpg';
import realStudentsLabGroup from '../assets/images/real_students_lab_group_1791457670891.jpg';
import realComputerWorkstations from '../assets/images/real_computer_workstations_1791457682176.jpg';
import realEnglishLectureHall from '../assets/images/real_english_lecture_hall_1791457694461.jpg';
import realEntranceStairsWallart from '../assets/images/real_entrance_stairs_wallart_1791457711230.jpg';

import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  ArrowLeft, 
  MessageCircle, 
  Compass, 
  CheckCircle2, 
  MapPin, 
  Layers, 
  Laptop,
  Sparkles,
  Eye,
  Monitor,
  BookOpen
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, t, openRegisterModal, settings } = useApp();

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const realHeroSlides = [
    {
      id: 'coding-lab',
      tagAr: 'معمل التكنولوجيا والبرمجة',
      tagEn: 'Coding & Tech Lab',
      headlineAr: 'محطات بشاشات مزدوجة وتطبيق عملي من أول جلسة',
      headlineEn: 'Dual-screen workstations & hands-on execution',
      image: realStudentCodingLab,
      badgeAr: 'معامل مجهزة في سوهاج',
      badgeEn: 'Modern Hardware in Sohag',
      highlightAr: 'لافتة: TECHNOLOGY IS THE FUTURE',
      highlightEn: 'Plaque: Technology Is The Future',
    },
    {
      id: 'neon-students',
      tagAr: 'مجتمع وفرق EPT',
      tagEn: 'Student Community & Neon',
      headlineAr: 'بيئة تقنية ملهمة تحت لافتة النيون الشهيرة',
      headlineEn: 'Inspiring software studio vibe under signature neon',
      image: realStudentsLabGroup,
      badgeAr: 'لافتة نيون الأكاديمية الأصلية',
      badgeEn: 'Original Neon Wall Art',
      highlightAr: 'EPT TECHNOLOGY PROFESSIONALS',
      highlightEn: 'EPT Technology Professionals',
    },
    {
      id: 'workstations',
      tagAr: 'تجهيزات المعامل المتطورة',
      tagEn: 'Full Lab Workstations',
      headlineAr: 'شاشات عريضة مريحة للعين ومقاعد تدريب مريحة',
      headlineEn: 'Wide high-contrast IPS displays & ergonomic setup',
      image: realComputerWorkstations,
      badgeAr: 'معامل مكيفة وشبكة فايبر',
      badgeEn: 'Fiber Network & AC Labs',
      highlightAr: 'IPS High-Resolution Workstations',
      highlightEn: 'IPS High-Resolution Workstations',
    },
    {
      id: 'english-hall',
      tagAr: 'قاعة English Plus والمحاضرات',
      tagEn: 'English Plus & Presentation Hall',
      headlineAr: 'منصة تدريب الإلقاء وشاشة عرض ذكية 55 بوصة',
      headlineEn: 'Public speaking podium & 55" presentation display',
      image: realEnglishLectureHall,
      badgeAr: 'تدريب النطق والإلقاء التقني',
      badgeEn: 'Pitching & Soft Skills Studio',
      highlightAr: 'LEARN ENGLISH FOR TECH',
      highlightEn: 'Learn English for Tech',
    },
    {
      id: 'entrance-mural',
      tagAr: 'مدخل وجدارية الأكاديمية',
      tagEn: 'Entrance Marble Stairs & Mural',
      headlineAr: 'جدارية المدخل: LEARN · CODE · BUILD THE FUTURE',
      headlineEn: 'Iconic staircase mural inspiring every incoming learner',
      image: realEntranceStairsWallart,
      badgeAr: 'رسالة الأكاديمية الملهمة',
      badgeEn: 'The Academy Guiding Motto',
      highlightAr: '</> LEARN · CODE · BUILD',
      highlightEn: '</> Learn · Code · Build',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % realHeroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, realHeroSlides.length]);

  const currentSlide = realHeroSlides[activeSlide];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(language === 'ar' ? settings.whatsappPrefilledAr : settings.whatsappPrefilledEn);
    window.open(`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      
      {/* Background Subtle Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 end-10 w-[24rem] h-[24rem] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Block (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            
            {/* Editorial Location & Focus Marker */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>{t('أكاديمية تكنولوجية وتعليمية مصرية معتمدة', 'Verified Egyptian Technology & Education Academy')}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-400 font-semibold">{t('المقر: سوهاج (جهينة) & أونلاين لكافة المحافظات', 'Campus: Sohag & Live Online Nationwide')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] text-balance">
              {settings.sloganAr}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty font-normal">
              {t(settings.subSloganAr, settings.subSloganEn)}
            </p>

            {/* Value Proposition Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('معامل وقاعات حقيقية مجهزة بشاشات مزدوجة', 'Authentic dual-screen computer labs in Sohag')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('تطبيق عملي 100% ومشروعات تخرج موثقة', '100% practical execution & portfolio capstones')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t('حضور مباشر أو أونلاين تفاعلي لكافة محافظات مصر', 'In-person cohorts or live interactive online across Egypt')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('قسم تكنولوجي مباشر لمتابعة وتطوير المهارات', 'Dedicated Tech Department for real-world mentorship')}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => scrollToSection('courses')}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap"
              >
                <Compass className="w-4.5 h-4.5" />
                <span>{t('استكشف البرامج التدريبية', 'Explore Programs')}</span>
              </button>

              <button
                onClick={() => openRegisterModal()}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap"
              >
                <span>{t('ابدأ التسجيل الآن', 'Start Enrollment')}</span>
                <ArrowIcon className="w-4.5 h-4.5" />
              </button>

              <button
                onClick={openWhatsApp}
                className="px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4.5 h-4.5 text-emerald-400" />
                <span>{t('تحدث مع الأكاديمية (واتساب)', 'Chat on WhatsApp')}</span>
              </button>
            </div>

            {/* Direct Phone Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">{t('رقم الأكاديمية:', 'Admissions:')}</span>
                <a href={`tel:${settings.phone.replace(/[^0-9]/g, '')}`} className="font-mono text-white hover:text-amber-400 font-bold transition-colors">
                  {settings.phone}
                </a>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-blue-400">{t('قسم التكنولوجيا المباشر:', 'Tech Desk:')}</span>
                <a href={`tel:${(settings.techPhone || '+201031473069').replace(/[^0-9]/g, '')}`} className="font-mono text-white hover:text-blue-400 font-bold transition-colors">
                  {settings.techPhone || '+20 10 31473069'}
                </a>
              </div>
            </div>

          </div>

          {/* High-Fidelity Real Facility Interactive Showcase (5 cols) */}
          <div 
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Interactive Photo Stage with Layered Glass Cards */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group select-none">
              
              {/* Photo with Smooth Crossfade */}
              <div className="relative h-92 sm:h-[450px] lg:h-[480px] w-full overflow-hidden bg-slate-950">
                <img
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt={t(currentSlide.tagAr, currentSlide.tagEn)}
                  className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
                />

                {/* Scrims */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20 pointer-events-none" />

                {/* Top Glowing Tech Tag */}
                <div className="absolute top-4 start-4 flex items-center gap-2 z-10">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-amber-400/50 text-xs font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg animate-neon-pulse">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t(currentSlide.highlightAr, currentSlide.highlightEn)}</span>
                  </div>
                </div>

                {/* Top End: Real Hall Badge */}
                <div className="absolute top-4 end-4 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-950/90 backdrop-blur-md border border-blue-800/80 text-[11px] font-mono text-blue-300 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t('معامل حقيقية بسوهاج', 'Real Campus')}</span>
                  </span>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-950/92 backdrop-blur-md border border-slate-800 text-start space-y-2 z-10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>{t(currentSlide.tagAr, currentSlide.tagEn)}</span>
                    </span>
                    <span className="text-amber-400 font-mono text-[11px] font-semibold">
                      {activeSlide + 1} / {realHeroSlides.length}
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {t(currentSlide.headlineAr, currentSlide.headlineEn)}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px]">
                    <span className="font-mono text-blue-400">&lt;/&gt; LEARN · CODE · INNOVATE</span>
                    <button
                      onClick={() => scrollToSection('tour')}
                      className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t('شاهد الجولة التفاعلية 3D ←', '3D Tour Labs →')}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Mini Thumbnail Carousel Ribbon Below Photo */}
              <div className="p-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
                {realHeroSlides.map((slide, sIdx) => {
                  const isCurrent = activeSlide === sIdx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlide(sIdx)}
                      className={`relative flex-1 min-w-[54px] h-11 rounded-lg overflow-hidden border transition-all ${
                        isCurrent
                          ? 'border-amber-400 ring-2 ring-amber-400/30 scale-102'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                      title={t(slide.tagAr, slide.tagEn)}
                    >
                      <img src={slide.image} alt="thumb" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-slate-950/20" />
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Floating Live Indicator Badge */}
            <div className="absolute -bottom-3 -start-3 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-slate-700/80 text-xs text-slate-200 flex items-center gap-2 shadow-2xl animate-float-slow">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-start">
                <span className="block font-bold text-white text-[11px]">{t('باب القبول والتسجيل مفتوح', 'Enrollment Open')}</span>
                <span className="text-[10px] text-slate-400">{t('سوهاج & محافظات مصر أونلاين', 'Sohag & Nationwide Online')}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
