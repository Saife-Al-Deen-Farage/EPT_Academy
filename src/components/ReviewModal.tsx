import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EGYPT_GOVERNORATES } from '../data/initialData';
import { 
  X, 
  Star, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck 
} from 'lucide-react';

export const ReviewModal: React.FC = () => {
  const { 
    isReviewModalOpen, 
    closeReviewModal, 
    courses, 
    addReview, 
    language, 
    t 
  } = useApp();

  const [studentName, setStudentName] = useState('');
  const [governorate, setGovernorate] = useState('سوهاج');
  const [courseId, setCourseId] = useState(courses.length > 0 ? courses[0].id : '');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isReviewModalOpen) return null;

  const currentCourse = courses.find(c => c.id === courseId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!studentName.trim() || studentName.trim().length < 3) {
      setFeedback({
        type: 'error',
        text: t('يرجى إدخال اسمك الحقيقي الكامل.', 'Please enter your real full name.')
      });
      return;
    }

    if (!comment.trim() || comment.trim().length < 15) {
      setFeedback({
        type: 'error',
        text: t('يرجى كتابة تقييم تفصيلي يوضح تجربتك مع البرنامج (15 حرفًا على الأقل).', 'Please provide a detailed comment about your experience (min 15 chars).')
      });
      return;
    }

    setIsSubmitting(true);

    const result = addReview({
      studentName: studentName.trim(),
      governorate,
      courseId,
      courseTitle: currentCourse?.titleAr || 'EPT Training Track',
      rating,
      comment: comment.trim(),
    });

    setIsSubmitting(false);

    if (result.success) {
      setFeedback({
        type: 'success',
        text: result.message
      });
      setStudentName('');
      setComment('');
    } else {
      setFeedback({
        type: 'error',
        text: result.message
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-start animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t('نظام التقييم المعتمد', 'Verified Review Submission')}</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              {t('شاركنا تجربتك في EPT Academy', 'Submit Your Cohort Feedback')}
            </h2>
          </div>
          <button
            onClick={closeReviewModal}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5">
          
          {feedback && (
            <div
              className={`p-4 rounded-xl flex items-start gap-3 text-sm ${
                feedback.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
              }`}
            >
              {feedback.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
              )}
              <div className="space-y-1">
                <p className="font-semibold text-xs sm:text-sm">{feedback.text}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Rating Stars Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                {t('تقييمك الإجمالي (1 إلى 5 نجوم) *', 'Your Rating (1 to 5 Stars) *')}
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 text-slate-600 hover:text-amber-400 transition-colors focus:outline-none"
                    aria-label={`${star} Stars`}
                  >
                    <Star
                      className={`w-7 h-7 ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-700'
                      }`}
                    />
                  </button>
                ))}
                <span className="ms-2 text-xs font-mono text-slate-400">
                  {rating} / 5
                </span>
              </div>
            </div>

            {/* Student Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t('الاسم الثلاثي أو الثنائي *', 'Your Full Name *')}
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder={t('مثال: سارة محمد الشريف', 'e.g. Sara Mohamed')}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Course & Governorate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('البرنامج الذي درسته *', 'Course Completed *')}
                </label>
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {t(c.titleAr, c.titleEn)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('المحافظة *', 'Governorate *')}
                </label>
                <select
                  value={governorate}
                  onChange={(e) => setGovernorate(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  {EGYPT_GOVERNORATES.map((gov) => (
                    <option key={gov.id} value={gov.nameAr}>
                      {t(gov.nameAr, gov.nameEn)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t('تعليقك وتجربتك بالتفصيل *', 'Your Detailed Comment & Experience *')}
              </label>
              <textarea
                rows={3}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t(
                  'حدثنا عن أسلوب الشرح، التطبيق العملي، والمشروع الذي أنجزته...',
                  'Describe the instructional quality, practical exercises, and project outcomes...'
                )}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Moderation Notice (Prompt #17) */}
            <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-900/40 text-[11px] text-blue-300 leading-relaxed">
              {t(
                'سياسة الشفافية: لضمان موثوقية التقييمات ومنع المشاركات العشوائية، تمر المراجعات بمرحلة التحقق الإداري (Pending -> Approved) قبل ظهورها للزوار.',
                'Transparency Policy: Submissions undergo administrator verification before becoming publicly visible to ensure authentic peer feedback.'
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t('إرسال التقييم للمراجعة', 'Submit Review for Verification')}</span>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};
