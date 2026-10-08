import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CourseCategory, DeliveryMethod, Course } from '../types';
import { 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Check, 
  ExternalLink, 
  Laptop, 
  Search,
  SlidersHorizontal 
} from 'lucide-react';

export const CoursesSection: React.FC = () => {
  const { courses, language, t, setSelectedCourse, openRegisterModal } = useApp();

  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'all'>('all');
  const [deliveryFilter, setDeliveryFilter] = useState<DeliveryMethod | 'all'>('all');
  const [searchFilter, setSearchFilter] = useState('');

  const categories: { id: CourseCategory | 'all'; nameAr: string; nameEn: string }[] = [
    { id: 'all', nameAr: 'جميع البرامج', nameEn: 'All Programs' },
    { id: 'programming', nameAr: 'البرمجة وهندسة البرمجيات', nameEn: 'Programming' },
    { id: 'design', nameAr: 'التصميم الجرافيكي', nameEn: 'Design' },
    { id: 'digital-skills', nameAr: 'المهارات الرقمية وICDL', nameEn: 'Digital Skills' },
    { id: 'design-business', nameAr: 'التصميم والعمل الحر', nameEn: 'Design + Business' },
    { id: 'english', nameAr: 'اللغة الإنجليزية للتكنولوجيا', nameEn: 'English Plus' },
    { id: 'technology', nameAr: 'التكنولوجيا العامة والذكاء الاصطناعي', nameEn: 'Technology & AI' },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchDelivery = deliveryFilter === 'all' || course.deliveryMethod === deliveryFilter || course.deliveryMethod === 'both';
    const matchSearch = searchFilter === '' || 
      course.titleAr.toLowerCase().includes(searchFilter.toLowerCase()) ||
      course.titleEn.toLowerCase().includes(searchFilter.toLowerCase()) ||
      course.skillsGained.some(s => s.toLowerCase().includes(searchFilter.toLowerCase()));
    return matchCategory && matchDelivery && matchSearch;
  });

  const getDeliveryLabel = (method: DeliveryMethod) => {
    switch (method) {
      case 'online':
        return t('أونلاين تفاعلي مباشر', 'Live Interactive Online');
      case 'in-person':
        return t('حضوري بمعامل سوهاج', 'In-Person at Sohag Lab');
      case 'both':
        return t('متاح حضوريًا بسوهاج أو أونلاين', 'In-Person Sohag or Live Online');
    }
  };

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="courses" className="py-20 bg-slate-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-start">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
              <span>{t('المسارات التدريبية المعتمدة', 'Certified Training Tracks')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{t('تعليم يواكب متطلبات العصر', 'Skills of Today')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('البرامج التدريبية المتاحة', 'Available Training Programs')}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t(
                'برامج تدريبية منظمة تجمع بين التأسيس الأكاديمي والتطبيق العملي. اختر البرنامج المناسب لمرحلتك واطلع على تفاصيل المنهج كاملة.',
                'Structured programs combining rigorous foundations with real-world project execution. Select your track and review complete syllabus details.'
              )}
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={t('ابحث عن برنامج أو مهارة...', 'Search program or skill...')}
              className="w-full ps-9 pe-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Filter Controls Bar (Interactive buttons, not static pills) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-800/80">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {t(cat.nameAr, cat.nameEn)}
              </button>
            ))}
          </div>

          {/* Delivery Method Segmented Filter */}
          <div className="flex items-center gap-2 shrink-0 text-xs">
            <span className="text-slate-400 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{t('طريقة الحضور:', 'Mode:')}</span>
            </span>
            <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setDeliveryFilter('all')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  deliveryFilter === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t('الكل', 'All')}
              </button>
              <button
                onClick={() => setDeliveryFilter('online')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  deliveryFilter === 'online' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t('أونلاين', 'Online')}
              </button>
              <button
                onClick={() => setDeliveryFilter('in-person')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  deliveryFilter === 'in-person' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t('سوهاج (حضوري)', 'Sohag (In-Person)')}
              </button>
            </div>
          </div>
        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={course.image}
                      alt={t(course.titleAr, course.titleEn)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    
                    {/* Delivery Method Overlay */}
                    <div className="absolute top-3 start-3 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[11px] font-medium text-slate-200">
                      {getDeliveryLabel(course.deliveryMethod)}
                    </div>

                    {/* Price Tag if Enabled (Prompt #44: EGP & editable in admin) */}
                    {course.showPrice && course.priceEgp && (
                      <div className="absolute bottom-3 end-3 px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 font-bold text-xs shadow-md">
                        {course.priceEgp} EGP
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 text-start space-y-3">
                    
                    {/* Unboxed Metadata (Anti-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{course.durationWeeks} {t('أسابيع', 'Weeks')}</span>
                      <span aria-hidden="true">·</span>
                      <span>{course.sessionsCount} {t('جلسة تدريبية', 'Sessions')}</span>
                      <span aria-hidden="true">·</span>
                      <span>{course.sessionHours} {t('ساعة/جلسة', 'hrs/session')}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {t(course.titleAr, course.titleEn)}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-normal">
                      {t(course.shortDescAr, course.shortDescEn)}
                    </p>

                    {/* Skills Clean List */}
                    <div className="pt-2">
                      <div className="text-[11px] font-medium text-slate-400 mb-1.5">
                        {t('المهارات المستهدفة:', 'Targeted Competencies:')}
                      </div>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-300">
                        {course.skillsGained.slice(0, 4).map((skill, idx) => (
                          <span key={skill} className="flex items-center gap-1">
                            {idx > 0 && <span aria-hidden="true" className="text-slate-600">·</span>}
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-5 pt-3 border-t border-slate-900 bg-slate-950/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>{t('تفاصيل المنهج', 'Course Details')}</span>
                  </button>

                  <button
                    onClick={() => openRegisterModal(course)}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <span>{t('سجل في البرنامج', 'Enroll Now')}</span>
                    <ArrowIcon className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Clean Empty State */
          <div className="p-12 text-center rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <p className="text-base text-slate-300 font-medium">
              {t('لا توجد برامج تدريبية مطابقة لمعايير البحث الحالية.', 'No training programs matched the selected filter.')}
            </p>
            <p className="text-xs text-slate-400">
              {t('جرب إعادة ضبط الفلاتر أو تواصل معنا لاقتراح مسار مخصص لك.', 'Try clearing filters or message our advisors directly.')}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setDeliveryFilter('all');
                setSearchFilter('');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg"
            >
              {t('إعادة ضبط الفلاتر', 'Reset Filters')}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
