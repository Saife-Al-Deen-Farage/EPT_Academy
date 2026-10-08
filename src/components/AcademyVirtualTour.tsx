import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  MapPin, 
  Laptop, 
  Monitor, 
  Users, 
  BookOpen, 
  Building2, 
  Compass,
  CheckCircle2,
  Info,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  Grid,
  Layers,
  ZoomIn,
  ZoomOut,
  ChevronRight,
  ChevronLeft,
  X,
  Phone,
  MessageCircle,
  Eye,
  Activity
} from 'lucide-react';

export interface FacilitySlide {
  id: string;
  categoryAr: string;
  categoryEn: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  image: string;
  badgeAr: string;
  badgeEn: string;
  auraColor: string; // Tailwind glow / accent
  hallZone: 'entrance' | 'reception' | 'coding-lab' | 'english-hall';
  equipment: { labelAr: string; labelEn: string }[];
  hotspots: {
    x: number; // percentage
    y: number; // percentage
    titleAr: string;
    titleEn: string;
    detailAr: string;
    detailEn: string;
  }[];
}

export const REAL_FACILITIES: FacilitySlide[] = [
  {
    id: 'coding-lab-live',
    categoryAr: 'معمل التكنولوجيا والبرمجة',
    categoryEn: 'Advanced Tech & Coding Lab',
    titleAr: 'تطبيق برمجي واقعي بشاشات مزدوجة وبيئة تركيز احترافية',
    titleEn: 'Live Coding Workstations & Dual-Display Setups',
    descAr: 'صورة واقعية من داخل معمل البرمجة بأكاديمية EPT بسوهاج. يعمل كل متدرب على محطة حاسوبية مجهزة بشاشات مزدوجة وإضاءة محيطية تفاعلية ولوحات مفاتيح احترافية لكتابة أكواد C#، بايثون، وتطوير الويب تحت إشراف مباشر.',
    descEn: 'Authentic photograph inside EPT Academy coding lab in Sohag. Students train on dual-monitor workstations with IDEs and ambient lighting for deep coding focus.',
    image: '/src/assets/images/real_student_coding_lab_1791457660513.jpg',
    badgeAr: 'معمل التكنولوجيا – LAB TECHNOLOGY',
    badgeEn: 'Lab Technology Official',
    auraColor: 'from-blue-600/30 via-cyan-500/15 to-transparent',
    hallZone: 'coding-lab',
    equipment: [
      { labelAr: 'شاشات مزدوجة لكل طالب', labelEn: 'Dual IPS Displays' },
      { labelAr: 'بيئات برمجية IDEs متقدمة', labelEn: 'Professional IDEs' },
      { labelAr: 'تكييف مركزي متواصل', labelEn: 'Climate-Controlled' },
      { labelAr: 'إضاءة محيطية للتركيز', labelEn: 'Ambient Focus Lighting' },
    ],
    hotspots: [
      {
        x: 28,
        y: 45,
        titleAr: 'محطة برمجية تفاعلية',
        titleEn: 'Developer Workstation',
        detailAr: 'أجهزة حاسوب بمعالجات حديثة مع شاشات مزدوجة لسهولة مراجعة الأكواد وتشغيل البيئات البرمجية في آنٍ واحد.',
        detailEn: 'Modern high-spec PCs with dual monitors to test code and manage documentation simultaneously.',
      },
      {
        x: 75,
        y: 28,
        titleAr: 'جدارية EPT المضيئة',
        titleEn: 'Branded Tech Slogan',
        detailAr: 'لافتة الأكاديمية الرسمية: "EPT ACADEMY - TECHNOLOGY IS THE FUTURE - LEARN · CODE · INNOVATE".',
        detailEn: 'Official ambient backlit plaque declaring the core vision: Technology Is The Future.',
      },
      {
        x: 48,
        y: 82,
        titleAr: 'متابعة فردية وتطبيق عملي',
        titleEn: 'Individual Mentorship',
        detailAr: 'يكتب المتدرب أسطر الكود البرمجي بنفسه من أول جلسة وحتى مشروع التخرج النهائي مع مراجعة كوده سطرًا بسطر.',
        detailEn: 'Learners write code line-by-line from day one with hands-on instructor coaching.',
      },
    ],
  },
  {
    id: 'students-community',
    categoryAr: 'مجتمع الطلاب ولافتة النيون',
    categoryEn: 'Student Cohort & Neon Studio',
    titleAr: 'مجتمع EPT الطلابي: شغف، إنجاز، وبيئة ملهمة',
    titleEn: 'Thriving Learner Cohorts with Neon Ambience',
    descAr: 'لقطة تجمع طلاب أحد أفواجنا التدريبية داخل المعمل تحت لافتة النيون الشهيرة "EPT TECHNOLOGY PROFESSIONALS". بيئة تشجع روح العمل الجماعي والابتكار وتبادل الأفكار البرمجية وتحديات الهاكاثون المصغرة.',
    descEn: 'Real student cohort inside the training hall beneath the glowing EPT Technology Professionals neon wall sign, celebrating milestones and shared coding progress.',
    image: '/src/assets/images/real_students_lab_group_1791457670891.jpg',
    badgeAr: 'لافتة نيون: EPT TECHNOLOGY PROFESSIONALS',
    badgeEn: 'Neon Sign: EPT Professionals',
    auraColor: 'from-amber-500/35 via-orange-500/20 to-transparent',
    hallZone: 'coding-lab',
    equipment: [
      { labelAr: 'لافتة نيون الأكاديمية الأيقونية', labelEn: 'Signature Neon Art' },
      { labelAr: 'أجواء استوديو برمجيات تقني', labelEn: 'Software Studio Vibe' },
      { labelAr: 'مجموعات عمل تفاعلية', labelEn: 'Team Collaboration Hub' },
    ],
    hotspots: [
      {
        x: 82,
        y: 35,
        titleAr: 'لافتة نيون الأكاديمية الأصلية',
        titleEn: 'Signature Neon Sign',
        detailAr: 'شعار مضيء دافئ يضفي طابع شركات التقنية الحديثة على قاعات التدريب ويشعل حماس الطلاب.',
        detailEn: 'Warm neon wall installation infusing modern software studio energy into every session.',
      },
      {
        x: 50,
        y: 55,
        titleAr: 'أفواج متدرجة الأعمار والمهارات',
        titleEn: 'Multi-Age Cohorts',
        detailAr: 'برامج مهيأة لطلاب المدارس الإعدادية والثانوية وطلاب الجامعات لتأسيس العقلية الرقمية السليمة.',
        detailEn: 'Tailored cohorts for middle school, high school, and university students.',
      },
    ],
  },
  {
    id: 'lab-workstations',
    categoryAr: 'تجهيزات ومحطات الحواسب',
    categoryEn: 'Lab Hardware & Ergonomics',
    titleAr: 'معامل مجهزة بأحدث الشاشات والمقاعد المريحة',
    titleEn: 'Full Multi-Station Workstation Bench',
    descAr: 'منظر بانورامي لمعمل التكنولوجيا موضحًا صفوف الأجهزة المستمرة، لوحات المفاتيح والفأرات المخصصة للعمل المريح، وتكييف هواء ومجسمات إضاءة دافئة لخلق مناخ تعليمي فريد يمتد لساعات دون إجهاد.',
    descEn: 'Panoramic view of the computer lab showing continuous workstation desks, ergonomic seating, responsive monitors, and ambient illumination.',
    image: '/src/assets/images/real_computer_workstations_1791457682176.jpg',
    badgeAr: 'تجهيزات متكاملة ومعامل مكيفة',
    badgeEn: 'Air-Conditioned Tech Lab',
    auraColor: 'from-indigo-600/30 via-blue-500/15 to-transparent',
    hallZone: 'coding-lab',
    equipment: [
      { labelAr: 'شاشات IPS عالية التباين', labelEn: 'High-Contrast IPS' },
      { labelAr: 'مقاعد مريحة للجلوس الطويل', labelEn: 'Ergonomic Seating' },
      { labelAr: 'شبكة إنترنت عالية السرعة', labelEn: 'High-Speed Fiber Net' },
    ],
    hotspots: [
      {
        x: 20,
        y: 60,
        titleAr: 'شاشات عريضة واضحة ومريحة للعين',
        titleEn: 'Wide IPS Monitors',
        detailAr: 'شاشات عالية الدقة مريحة للعين أثناء فترات التدريب وتصميم الجرافيك والبرمجة المستمرة.',
        detailEn: 'Color-accurate high-resolution displays optimal for web coding and visual design.',
      },
      {
        x: 85,
        y: 52,
        titleAr: 'إضاءة جمالية مريحة وتركيز عالٍ',
        titleEn: 'Ambient Aesthetic Lighting',
        detailAr: 'عناصر ديكورية محفزة للإبداع والتركيز بعيدًا عن الروتين التقليدي للمراكز التعليمية.',
        detailEn: 'Curated ambient decor fostering creativity and sustained focus.',
      },
    ],
  },
  {
    id: 'english-hall',
    categoryAr: 'قاعة المحاضرات واللغات',
    categoryEn: 'English Plus & Presentation Hall',
    titleAr: 'قاعة English Plus: منصة إلقاء، شاشة عرض، ومقاعد دراسية',
    titleEn: 'English Plus Hall with Presentation Screen & Podium',
    descAr: 'القاعة المخصصة لدورات اللغة الإنجليزية التقنية ومحاضرات تطوير المهارات. مزودة بمنصة خشبية لتدريب الطلاب على التحدث والعرض (Public Speaking)، شاشة عرض تفاعلية، وسبورة بيضاء لشرح القواعد والمصطلحات.',
    descEn: 'Dedicated hall for English Plus, soft skills, and tech presentations equipped with speaker podium, 55-inch interactive screen, and lecture seating.',
    image: '/src/assets/images/real_english_lecture_hall_1791457694461.jpg',
    badgeAr: 'قاعة اللغات والمحاضرات – LEARN ENGLISH',
    badgeEn: 'Learn English Classroom',
    auraColor: 'from-blue-600/30 via-indigo-600/20 to-transparent',
    hallZone: 'english-hall',
    equipment: [
      { labelAr: 'منصة تدريب الإلقاء والخطابة', labelEn: 'Speaker Podium' },
      { labelAr: 'شاشة عرض وسائط ذكية 55 بوصة', labelEn: '55" Presentation Display' },
      { labelAr: 'مقاعد قاعات مخصصة للتدوين', labelEn: 'Lecture Tablet Armchairs' },
    ],
    hotspots: [
      {
        x: 28,
        y: 65,
        titleAr: 'منصة العرض والتقديم (Public Speaking)',
        titleEn: 'Presentation Lectern',
        detailAr: 'يتدرب كل طالب على تقديم مشروعه باللغة الإنجليزية وشرح أفكاره أمام زملائه لكسر حاجز الخوف وبناء الشخصية القيادية.',
        detailEn: 'Every student practices public pitching, mock interviews, and project demos.',
      },
      {
        x: 68,
        y: 35,
        titleAr: 'شاشة عرض تفاعلية عالية الوضوح',
        titleEn: 'High-Def Media Display',
        detailAr: 'شاشة كبيرة لعرض الشرائح والمقاطع التعليمية والمواد السمعية والبصرية لتحسين النطق والاستماع.',
        detailEn: 'Large display for curriculum slideshows, audio drills, and live coding reviews.',
      },
    ],
  },
  {
    id: 'reception-hub',
    categoryAr: 'صالة الاستقبال والنجيل الأخضر',
    categoryEn: 'Reception Lounge & Guidance Hub',
    titleAr: 'صالة الاستقبال بأرضية النجيل الأخضر والبوسترات التوجيهية',
    titleEn: 'Reception Lounge with Green Turf & Guidance Hub',
    descAr: 'صالة انتظار واستقبال رحبة مكسوة بأرضية النجيل الصناعي الأخضر، تمنح الزائر شعورًا بالراحة والبهجة، وتضم مكتب الاستقبال وبوسترات الأكاديمية التعريفية الشاملة لكافة مسارات التكنولوجيا واللغة.',
    descEn: 'Bright welcoming student reception hall with green turf flooring, reception desk, official banners, and comfortable waiting seating.',
    image: '/src/assets/images/real_reception_lounge_1791457724273.jpg',
    badgeAr: 'سوهاج – مركز جهينة (المقر الرئيسي)',
    badgeEn: 'Sohag – Gehana HQ Reception',
    auraColor: 'from-emerald-500/30 via-teal-500/15 to-transparent',
    hallZone: 'reception',
    equipment: [
      { labelAr: 'أرضية نجيل صناعي مريحة', labelEn: 'Green Turf Flooring' },
      { labelAr: 'مكتب استفسارات وتنسيق القبول', labelEn: 'Admissions Info Desk' },
      { labelAr: 'بوسترات المسارات المعتمدة', labelEn: 'Curriculum Boards' },
    ],
    hotspots: [
      {
        x: 45,
        y: 35,
        titleAr: 'البوستر الرسمي لمسارات الأكاديمية',
        titleEn: 'Official Track Board',
        detailAr: 'يضم تفاصيل مسارات التكنولوجيا والبرمجة واللغة الإنجليزية ورقم التواصل الرسمي للأكاديمية.',
        detailEn: 'Displays official track details and verified academy direct phone line.',
      },
      {
        x: 35,
        y: 80,
        titleAr: 'أرضية عشبية رحبة ومريحة',
        titleEn: 'Green Turf Floor',
        detailAr: 'بيئة مرحبة تكسر الجمود وتجعل الأكاديمية مكانًا محببًا للتعلم والإبداع والتواصل الإيجابي.',
        detailEn: 'Relaxing modern aesthetic setting a warm and inspiring tone upon arrival.',
      },
    ],
  },
  {
    id: 'stairs-mural',
    categoryAr: 'المدخل والجدارية الملهمة',
    categoryEn: 'Entrance Marble Stairs & Mural',
    titleAr: 'جدارية المدخل: LEARN · CODE · BUILD THE FUTURE',
    titleEn: 'Iconic Staircase Mural: Learn · Code · Build The Future',
    descAr: 'مدخل الأكاديمية ودرج الرخام الأنيق الذي يستقبلك بجدارية ملهمة تختصر رسالة الأكاديمية: "تعلم، برمج، وابنِ المستقبل" مع رمز الأكواد البرمجية </> وشعار EPT كأول ما يراه الطالب والزائر.',
    descEn: 'The marble entrance staircase greeting learners with the motivational typographic wall installation: Learn, Code, Build The Future.',
    image: '/src/assets/images/real_entrance_stairs_wallart_1791457711230.jpg',
    badgeAr: 'جدارية المستقبل: LEARN CODE BUILD',
    badgeEn: 'Inspirational Entrance Art',
    auraColor: 'from-amber-400/25 via-blue-600/20 to-transparent',
    hallZone: 'entrance',
    equipment: [
      { labelAr: 'درج رخامي فخم ومدخل رئيسي', labelEn: 'Marble Entrance Stairs' },
      { labelAr: 'جدارية برمجية محفزة للهمم', labelEn: 'Motivational Mural' },
      { labelAr: 'شعار EPT الرسمي الموثق', labelEn: 'Official Logo Crest' },
    ],
    hotspots: [
      {
        x: 72,
        y: 25,
        titleAr: 'رسالة الأكاديمية الخالدة: LEARN · CODE · BUILD',
        titleEn: 'The Guiding Mantra',
        detailAr: 'تذكير دائم لكل متعلم بأن المهارات التكنولوجية هي مفتاح بناء الفرص والمستقبل الشخصي والمهني.',
        detailEn: 'A daily reminder that technical capability is the gateway to real opportunities.',
      },
    ],
  },
];

export const AcademyVirtualTour: React.FC = () => {
  const { language, t, openRegisterModal, settings } = useApp();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);
  const [viewMode, setViewMode] = useState<'stage' | 'bento'>('stage');
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxZoom, setLightboxZoom] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeZoneFilter, setActiveZoneFilter] = useState<string>('all');

  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = REAL_FACILITIES[currentIndex];

  // 3D Parallax Tilt Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 9,
      y: (x / rect.width) * 9,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Auto-Cruise Timer
  useEffect(() => {
    if (isAutoPlaying) {
      setProgress(0);
      const stepMs = 50;
      const totalDuration = 5000;
      let elapsed = 0;

      progressIntervalRef.current = setInterval(() => {
        elapsed += stepMs;
        setProgress((elapsed / totalDuration) * 100);
        if (elapsed >= totalDuration) {
          setCurrentIndex((prev) => (prev + 1) % REAL_FACILITIES.length);
          setActiveHotspot(0);
          elapsed = 0;
        }
      }, stepMs);
    } else {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setProgress(0);
    }

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % REAL_FACILITIES.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + REAL_FACILITIES.length) % REAL_FACILITIES.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REAL_FACILITIES.length);
    setActiveHotspot(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REAL_FACILITIES.length) % REAL_FACILITIES.length);
    setActiveHotspot(0);
  };

  const filteredFacilities = activeZoneFilter === 'all'
    ? REAL_FACILITIES
    : REAL_FACILITIES.filter(f => f.hallZone === activeZoneFilter);

  return (
    <section id="tour" className="py-24 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background Tech Mesh & Dynamic Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a0f_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
      <div className={`absolute top-1/4 start-1/2 -translate-x-1/2 w-[42rem] h-[34rem] bg-gradient-to-tr ${currentSlide.auraColor} blur-[160px] rounded-full pointer-events-none transition-all duration-1000`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-start">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span className="p-1 rounded-md bg-amber-400/10 border border-amber-400/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </span>
              <span>{t('صور وتجهيزات المكان الفعلية الحقيقية', 'Official Authentic Facility Tour')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-normal">{t('سوهاج – مركز جهينة (المقر المعتمد)', 'Sohag – Gehana HQ')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t('جولة داخل قاعات ومعامل EPT Academy', 'Inside EPT Academy Labs & Studios')}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t(
                'شاهد صور قاعاتنا ومعاملنا الحقيقية من الداخل: معامل التكنولوجيا والشاشات المزدوجة، قاعة English Plus والمحاضرات، لافتة النيون الشهيرة، وصالة الاستقبال والنجيل الأخضر. بيئة تعليمية حقيقية بنيت لتلهمك.',
                'Explore our real halls from inside: dual-screen computer labs, English Plus lecture studio with presentation podium, glowing neon installations, and green reception lounge.'
              )}
            </p>
          </div>

          {/* Top Controls: Mode Switcher & Auto-Play */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-end">
            
            {/* View Mode Switcher */}
            <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
              <button
                onClick={() => setViewMode('stage')}
                className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'stage'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{t('المسرح السينمائي 3D', '3D Cinema Stage')}</span>
              </button>
              <button
                onClick={() => setViewMode('bento')}
                className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'bento'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{t('معرض البينتو (كل الصور)', 'Bento Grid (All)')}</span>
              </button>
            </div>

            {/* Auto-Play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isAutoPlaying
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-400/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
              title={t('تشغيل/إيقاف الجولة التلقائية', 'Toggle Auto Cruise Tour')}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>{t('إيقاف الجولة', 'Pause Tour')}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{t('جولة سينمائية تلقائية', 'Auto Cruise')}</span>
                </>
              )}
            </button>

            {/* Next / Prev Navigation */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1">
              <button
                onClick={prevSlide}
                aria-label="Previous facility photo"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-2">
                {currentIndex + 1}/{REAL_FACILITIES.length}
              </span>
              <button
                onClick={nextSlide}
                aria-label="Next facility photo"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
              </button>
            </div>

          </div>
        </div>

        {/* Hall Zone Quick Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
          <button
            onClick={() => setActiveZoneFilter('all')}
            className={`px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap font-medium ${
              activeZoneFilter === 'all'
                ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {t('جميع القاعات والمعامل (6)', 'All Facilities (6)')}
          </button>
          <button
            onClick={() => setActiveZoneFilter('coding-lab')}
            className={`px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
              activeZoneFilter === 'coding-lab'
                ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Laptop className="w-3.5 h-3.5 text-blue-400" />
            <span>{t('معامل التكنولوجيا والشاشات المزدوجة', 'Coding & Tech Labs')}</span>
          </button>
          <button
            onClick={() => setActiveZoneFilter('english-hall')}
            className={`px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
              activeZoneFilter === 'english-hall'
                ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('قاعة English Plus والمحاضرات', 'English & Lecture Hall')}</span>
          </button>
          <button
            onClick={() => setActiveZoneFilter('reception')}
            className={`px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
              activeZoneFilter === 'reception'
                ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('صالة الاستقبال والنجيل الأخضر', 'Reception Lounge')}</span>
          </button>
          <button
            onClick={() => setActiveZoneFilter('entrance')}
            className={`px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
              activeZoneFilter === 'entrance'
                ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span>{t('المدخل والدرج وجدارية المستقبل', 'Entrance & Stairs Mural')}</span>
          </button>
        </div>

        {/* ---------------------------------------------------- */}
        {/* MODE 1: 3D INTERACTIVE STAGE                         */}
        {/* ---------------------------------------------------- */}
        {viewMode === 'stage' && (
          <div className="space-y-6">
            
            {/* Auto-Play Progress Bar (shown when auto-playing) */}
            {isAutoPlaying && (
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-400 to-blue-500 h-full transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* Thumbnail Navigation Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {REAL_FACILITIES.map((fac, idx) => {
                const isSelected = currentIndex === idx;
                return (
                  <button
                    key={fac.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setActiveHotspot(0);
                    }}
                    className={`relative rounded-xl overflow-hidden text-start p-1.5 border transition-all group ${
                      isSelected
                        ? 'bg-slate-900 border-amber-400 shadow-lg shadow-amber-400/10 ring-2 ring-amber-400/20'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="relative h-14 w-full rounded-lg overflow-hidden bg-slate-950">
                      <img
                        src={fac.image}
                        alt={t(fac.titleAr, fac.titleEn)}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isSelected ? 'scale-105' : 'group-hover:scale-105'
                        }`}
                      />
                      <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors" />
                      <span className="absolute bottom-1 end-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-950/80 text-white">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="pt-1.5 px-0.5 truncate">
                      <span className={`text-[11px] font-bold block truncate ${isSelected ? 'text-amber-300' : 'text-slate-300'}`}>
                        {t(fac.categoryAr, fac.categoryEn)}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Stage Grid (8 cols photo + 4 cols details) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-start">
              
              {/* Photo Stage (8 cols) */}
              <div className="lg:col-span-8 relative">
                <div
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: isHovered
                      ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.01, 1.01, 1.01)`
                      : 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                    transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s ease-out',
                  }}
                  className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group select-none"
                >
                  {/* Dynamic Shimmer Light Reflection on mouse movement */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle 320px at ${50 + tilt.y * 3}% ${50 - tilt.x * 3}%, rgba(255,255,255,0.08), transparent 70%)`,
                    }}
                  />

                  {/* Main Authentic Photograph with Ken-Burns motion */}
                  <div className="relative h-88 sm:h-[480px] lg:h-[530px] w-full overflow-hidden bg-slate-950">
                    <img
                      src={currentSlide.image}
                      alt={t(currentSlide.titleAr, currentSlide.titleEn)}
                      className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                        isAutoPlaying ? 'scale-105' : 'group-hover:scale-102'
                      }`}
                    />

                    {/* Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30 pointer-events-none" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 start-4 flex items-center gap-2 z-20">
                      <div className="px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{t(currentSlide.badgeAr, currentSlide.badgeEn)}</span>
                      </div>
                      <div className="px-2.5 py-1.5 rounded-xl bg-blue-950/80 backdrop-blur-md border border-blue-800/60 text-[11px] font-mono text-blue-300 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{t('صورة حقيقية موثقة', 'Verified Photo')}</span>
                      </div>
                    </div>

                    {/* Top Right Quick Controls */}
                    <div className="absolute top-4 end-4 flex items-center gap-2 z-20">
                      <button
                        onClick={() => {
                          setLightboxZoom(1);
                          setLightboxOpen(true);
                        }}
                        className="p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-900 transition-all shadow-md group/btn"
                        title={t('تكبير وعرض ملء الشاشة', 'Fullscreen Lightbox')}
                      >
                        <Maximize2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>

                    {/* Interactive Hotspots Pins */}
                    {currentSlide.hotspots.map((spot, sIdx) => {
                      const isActive = activeHotspot === sIdx;
                      return (
                        <div
                          key={sIdx}
                          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/spot"
                        >
                          <button
                            onClick={() => setActiveHotspot(sIdx)}
                            className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-115 focus:outline-none ${
                              isActive
                                ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/40 shadow-xl scale-110'
                                : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg ring-2 ring-white/30'
                            }`}
                            title={t(spot.titleAr, spot.titleEn)}
                          >
                            {/* Animated Radar Pulse Ring */}
                            <span className="absolute inset-0 rounded-full animate-radar-ping bg-amber-400/50 pointer-events-none" />
                            <span className="text-xs font-bold font-mono">{sIdx + 1}</span>
                          </button>

                          {/* Detail Popover Card */}
                          {isActive && (
                            <div className="absolute bottom-11 start-1/2 -translate-x-1/2 w-72 p-3.5 rounded-xl bg-slate-950/95 backdrop-blur-md border border-amber-400/40 text-xs text-start shadow-2xl z-30 animate-in fade-in zoom-in-95 duration-150">
                              <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5 text-xs">
                                <Info className="w-3.5 h-3.5 text-amber-400" />
                                <span>{t(spot.titleAr, spot.titleEn)}</span>
                              </div>
                              <p className="text-[11px] text-slate-200 leading-relaxed font-normal">
                                {t(spot.detailAr, spot.detailEn)}
                              </p>
                              <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                                <span>EPT Facilities Verified</span>
                                <span className="text-blue-400 font-mono">0{sIdx + 1}/0{currentSlide.hotspots.length}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Bottom Bar Info Overlay */}
                    <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-10">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                            {t(currentSlide.categoryAr, currentSlide.categoryEn)}
                          </span>
                          <span className="text-slate-500">·</span>
                          <span className="text-[11px] text-slate-400">
                            {t(currentSlide.badgeAr, currentSlide.badgeEn)}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                          {t(currentSlide.titleAr, currentSlide.titleEn)}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            setLightboxZoom(1);
                            setLightboxOpen(true);
                          }}
                          className="px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-700/80 rounded-lg flex items-center gap-1.5 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-blue-400" />
                          <span>{t('معاينة مكبرة', 'Zoom & Inspect')}</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Sidebar Details & Hotspots Drawer (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                
                {/* Description Card */}
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span>{t('مواصفات وتجهيزات القاعة', 'Hall Equipment Specs')}</span>
                    </span>
                    <span className="font-mono text-amber-400 font-bold">#EPT_CAMPUS</span>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug">
                    {t(currentSlide.titleAr, currentSlide.titleEn)}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {t(currentSlide.descAr, currentSlide.descEn)}
                  </p>

                  {/* Equipment Checklist */}
                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {t('التجهيزات المتوفرة في هذه القاعة:', 'Included Lab Features:')}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {currentSlide.equipment.map((eq, eqIdx) => (
                        <div key={eqIdx} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{t(eq.labelAr, eq.labelEn)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hotspots Interactive Selection List */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {t('انقر لاستكشاف معالم القاعة:', 'Interactive Hotspots (Click to view):')}
                    </span>

                    <div className="space-y-2">
                      {currentSlide.hotspots.map((spot, sIdx) => {
                        const isSelected = activeHotspot === sIdx;
                        return (
                          <div
                            key={sIdx}
                            onClick={() => setActiveHotspot(sIdx)}
                            className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-slate-950 border-amber-400/60 shadow-md ring-1 ring-amber-400/30'
                                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] font-mono ${
                                  isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                                }`}
                              >
                                {sIdx + 1}
                              </span>
                              <span className={`font-semibold ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                                {t(spot.titleAr, spot.titleEn)}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-relaxed ps-7 font-normal">
                              {t(spot.detailAr, spot.detailEn)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => openRegisterModal()}
                      className="w-full py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shadow-amber-400/20 active:scale-98"
                    >
                      {t('احجز مقعدك في هذا المعمل الآن', 'Reserve Seat in this Lab')}
                    </button>
                  </div>

                </div>

                {/* Direct Verification Info Card */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                    <Activity className="w-4 h-4" />
                    <span>{t('المقر مفتوح ومتاح للزيارة اليومية', 'Open for Daily Physical Visits')}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {t(
                      'سوهاج – مركز جهينة. نرحب بزيارة الطلاب وأولياء الأمور لمعاينة المعامل والقاعات على أرض الواقع والتحدث مع المدربين.',
                      'Sohag – Gehana Center. We welcome students and parents to tour the actual facility and meet instructors.'
                    )}
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* MODE 2: BENTO GRID VIEW (All 6 Photos Showcased)     */}
        {/* ---------------------------------------------------- */}
        {viewMode === 'bento' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
              {filteredFacilities.map((fac, idx) => (
                <div
                  key={fac.id}
                  onClick={() => {
                    setCurrentIndex(REAL_FACILITIES.findIndex(f => f.id === fac.id));
                    setViewMode('stage');
                  }}
                  className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-amber-400/60 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1"
                >
                  {/* Photo with zoom on hover */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                    <img
                      src={fac.image}
                      alt={t(fac.titleAr, fac.titleEn)}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 start-3 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[11px] font-semibold text-amber-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{t(fac.categoryAr, fac.categoryEn)}</span>
                    </div>

                    {/* Expand icon on hover */}
                    <div className="absolute top-3 end-3 p-2 rounded-lg bg-slate-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80">
                      <span className="text-[10px] font-mono text-blue-400 block mb-0.5">
                        {t(fac.badgeAr, fac.badgeEn)}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                        {t(fac.titleAr, fac.titleEn)}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                        {t(fac.descAr, fac.descEn)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setViewMode('stage')}
                className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white hover:border-amber-400 transition-colors inline-flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span>{t('العودة للمسرح السينمائي التفاعلي 3D مع نقاط الفحص', 'Back to Interactive 3D Stage with Hotspots')}</span>
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* DIRECT DEPARTMENT CONTACT & VISIT STRIP              */}
        {/* ---------------------------------------------------- */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 text-start">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>{t('هل تود زيارة الأكاديمية أو تجربة حضور جلسة تمهيدية؟', 'Want to visit our campus or join a free orientation?')}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              {t(
                'تواصل مباشرة مع إدارة الأكاديمية أو قسم التكنولوجيا لحجز موعد زيارة أو الاستفسار عن المجموعات القادمة.',
                'Contact the General Administration or Tech Department directly to arrange a visit or ask about upcoming cohorts.'
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* General Admissions Desk */}
            <a
              href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{t('واتساب الإدارة: ', 'Admissions Desk: ')}</span>
              <span className="font-mono font-bold text-white">{settings.phone}</span>
            </a>

            {/* Direct Tech Department Desk */}
            <a
              href={`https://wa.me/${settings.techWhatsapp?.replace(/[^0-9]/g, '') || '201031473069'}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Laptop className="w-4 h-4 text-blue-400" />
              <span>{t('قسم التكنولوجيا: ', 'Tech Department: ')}</span>
              <span className="font-mono font-bold text-white">{settings.techPhone || '+20 10 31473069'}</span>
            </a>
          </div>
        </div>

      </div>

      {/* ---------------------------------------------------- */}
      {/* FULLSCREEN LIGHTBOX MODAL                            */}
      {/* ---------------------------------------------------- */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold">
                {currentIndex + 1} / {REAL_FACILITIES.length}
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {t(currentSlide.titleAr, currentSlide.titleEn)}
                </h4>
                <span className="text-xs text-slate-400">
                  {t(currentSlide.badgeAr, currentSlide.badgeEn)}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLightboxZoom((z) => Math.max(1, z - 0.25))}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-400 w-10 text-center">
                {Math.round(lightboxZoom * 100)}%
              </span>
              <button
                onClick={() => setLightboxZoom((z) => Math.min(2.5, z + 0.25))}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-lg bg-red-950/40 border border-red-800/40 text-red-300 hover:text-white hover:bg-red-900 transition-colors ms-2"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image Container with Zoom & Navigation */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
            
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute start-4 z-20 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-slate-800 transition-colors"
            >
              <ChevronRight className="w-6 h-6 rtl:rotate-0 ltr:rotate-180" />
            </button>

            {/* The Image */}
            <div className="relative max-w-5xl max-h-[75vh] overflow-auto rounded-xl flex items-center justify-center">
              <img
                src={currentSlide.image}
                alt={t(currentSlide.titleAr, currentSlide.titleEn)}
                style={{ transform: `scale(${lightboxZoom})`, transition: 'transform 0.2s ease-out' }}
                className="max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute end-4 z-20 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-slate-800 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 rtl:rotate-0 ltr:rotate-180" />
            </button>
          </div>

          {/* Bottom Thumbnail Strip & CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-4">
            
            {/* Thumbs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
              {REAL_FACILITIES.map((fac, idx) => (
                <button
                  key={fac.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setLightboxZoom(1);
                  }}
                  className={`w-14 h-10 rounded-lg overflow-hidden border shrink-0 transition-all ${
                    currentIndex === idx
                      ? 'border-amber-400 ring-2 ring-amber-400/40 scale-105'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={fac.image} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setLightboxOpen(false);
                  openRegisterModal();
                }}
                className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-amber-400/20"
              >
                {t('احجز مقعدك في هذا المعمل', 'Book Seat in This Lab')}
              </button>
              <button
                onClick={() => setLightboxOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 transition-colors"
              >
                {t('إغلاق (Esc)', 'Close')}
              </button>
            </div>

          </div>

        </div>
      )}

    </section>
  );
};
