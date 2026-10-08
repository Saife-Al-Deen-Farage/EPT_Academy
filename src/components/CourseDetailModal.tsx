import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  FolderGit2, 
  BookOpen, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft,
  MapPin,
  Laptop
} from 'lucide-react';

export const CourseDetailModal: React.FC = () => {
  const { selectedCourse, setSelectedCourse, openRegisterModal, language, t } = useApp();

  if (!selectedCourse) return null;

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const getDeliveryLabel = () => {
    switch (selectedCourse.deliveryMethod) {
      case 'online':
        return t('قاعات أونلاين تفاعلية مباشرة مع المدرب', 'Live Interactive Online Sessions');
      case 'in-person':
        return t('حضوري بمعامل أكاديمية EPT في سوهاج (جهينة)', 'In-Person at EPT Sohag Labs (Gehana)');
      case 'both':
        return t('متاح الاختيار بين الحضور بسوهاج أو أونلاين لمختلف المحافظات', 'Available in Sohag Lab or Live Online across Egypt');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-start animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header with Image Scrim */}
        <div className="relative h-60 sm:h-72 bg-slate-950 overflow-hidden">
          <img
            src={selectedCourse.image}
            alt={t(selectedCourse.titleAr, selectedCourse.titleEn)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={() => setSelectedCourse(null)}
            className="absolute top-4 end-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and Unboxed Metadata */}
          <div className="absolute bottom-4 inset-x-6 space-y-2">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <span>{selectedCourse.durationWeeks} {t('أسابيع', 'Weeks')}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedCourse.sessionsCount} {t('جلسة تدريبية', 'Sessions')}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedCourse.sessionHours} {t('ساعة للجلسة', 'hrs/session')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {t(selectedCourse.titleAr, selectedCourse.titleEn)}
            </h2>
          </div>
        </div>

        {/* Modal Body with 2-Column Specs Layout */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[calc(85vh-16rem)] overflow-y-auto">
          
          {/* Overview & Short Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">
              {t('نبذة عن البرنامج', 'Program Overview')}
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {t(selectedCourse.fullDescAr, selectedCourse.fullDescEn)}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
            <div>
              <span className="text-slate-400 block mb-0.5">{t('المدة الإجمالية:', 'Duration:')}</span>
              <span className="font-semibold text-white">{selectedCourse.durationWeeks} {t('أسابيع', 'Weeks')}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">{t('عدد الجلسات:', 'Total Sessions:')}</span>
              <span className="font-semibold text-white">{selectedCourse.sessionsCount} {t('جلسة', 'Sessions')}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">{t('المدرب المسؤول:', 'Instructor:')}</span>
              <span className="font-semibold text-white">
                {t(selectedCourse.instructorNameAr || 'م. أحمد الشريف', selectedCourse.instructorNameEn || 'Eng. Ahmed')}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">{t('طريقة الحضور:', 'Delivery:')}</span>
              <span className="font-semibold text-white">
                {selectedCourse.deliveryMethod === 'both' ? t('حضوري أو أونلاين', 'In-Person or Online') : selectedCourse.deliveryMethod}
              </span>
            </div>
          </div>

          {/* Who is this for & Prerequisites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {t('لمن هذا البرنامج التدريبي؟', 'Who Is This Course For?')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {t(selectedCourse.audienceAr, selectedCourse.audienceEn)}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                {t('المتطلبات السابقة (Prerequisites)', 'Prerequisites')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {t(selectedCourse.prerequisitesAr, selectedCourse.prerequisitesEn)}
              </p>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t('مخرجات التعلم والمهارات المكتسبة', 'Learning Outcomes & Competencies')}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(language === 'ar' ? selectedCourse.outcomesAr : selectedCourse.outcomesEn).map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Projects */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-blue-400" />
              <span>{t('المشروعات العملية والتطبيقات', 'Hands-on Projects & Capstone')}</span>
            </h3>
            <div className="space-y-2">
              {(language === 'ar' ? selectedCourse.projectsAr : selectedCourse.projectsEn).map((proj, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="font-mono text-xs text-blue-400">0{idx + 1}.</span>
                  <span>{proj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Gained Tags */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('التقنيات والأدوات المغطاة:', 'Technologies & Tools Covered:')}
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300 font-mono">
              {selectedCourse.skillsGained.map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Course FAQ */}
          {selectedCourse.faqs && selectedCourse.faqs.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>{t('أسئلة شائعة حول هذا البرنامج', 'Frequently Asked Questions')}</span>
              </h3>
              <div className="space-y-2.5">
                {selectedCourse.faqs.map((faq, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 space-y-1">
                    <p className="text-xs font-semibold text-white">
                      {t(faq.qAr, faq.qEn)}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {t(faq.aAr, faq.aEn)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-5 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-start">
            <span className="text-xs text-slate-400 block">
              {t('طريقة التدريب:', 'Delivery Location / Format:')}
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-200">
              {getDeliveryLabel()}
            </span>
            {selectedCourse.showPrice && selectedCourse.priceEgp && (
              <div className="text-sm font-bold text-amber-400 mt-0.5">
                {selectedCourse.priceEgp} EGP
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCourse(null)}
              className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {t('إغلاق', 'Close')}
            </button>

            <button
              onClick={() => {
                const c = selectedCourse;
                setSelectedCourse(null);
                openRegisterModal(c);
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{t('المتابعة للتسجيل في البرنامج', 'Proceed to Registration')}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
