import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Star, 
  MessageSquarePlus, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { reviews, language, t, openReviewModal } = useApp();

  // Strict prompt requirement: "ويجب أن تكون Reviews الحقيقية فقط هي التي تظهر في الموقع"
  const approvedReviews = reviews.filter(r => r.status === 'approved');

  return (
    <section id="reviews" className="py-20 bg-slate-900/50 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-start">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('تجارب الطلاب المعتمدة', 'Verified Student Testimonials')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{t('شفافية بدون مبالغات', 'Unedited Authenticity')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('ماذا يقول طلاب EPT Academy؟', 'Student Experiences & Reviews')}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t(
                'آراء حقيقية من طلابنا في سوهاج ومختلف المحافظات المصرية بعد إتمام البرامج التدريبية والتطبيق العملي للمشاريع.',
                'Genuine evaluations from learners in Sohag and across Egyptian governorates following capstone project completions.'
              )}
            </p>
          </div>

          {/* Add Review Button */}
          <div className="shrink-0">
            <button
              onClick={openReviewModal}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4 text-amber-400" />
              <span>{t('+ أضف تقييمك للبرنامج', '+ Share Your Review')}</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        {approvedReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between text-start group"
              >
                <div className="space-y-4">
                  
                  {/* Rating Stars & Verification Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${
                            s <= rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t('طالب معتمد', 'Verified')}</span>
                    </span>
                  </div>

                  {/* Comment Quote */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal italic">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Author Info (Unboxed metadata) */}
                <div className="pt-4 mt-4 border-t border-slate-900 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">
                      {rev.studentName}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {rev.governorate}
                    </span>
                  </div>

                  {rev.courseTitle && (
                    <span className="text-[11px] text-blue-400 font-medium">
                      {rev.courseTitle}
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="p-10 rounded-xl bg-slate-950 border border-slate-800 text-center text-sm text-slate-400">
            {t('لا توجد تقييمات منشورة حاليًا. التقييمات تخضع لمراجعة إدارة الأكاديمية.', 'No published reviews yet. Submissions are reviewed by academy administrators.')}
          </div>
        )}

      </div>
    </section>
  );
};
