import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { EGYPT_GOVERNORATES } from '../data/initialData';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  BookOpen, 
  Clock 
} from 'lucide-react';

export const RegistrationModal: React.FC = () => {
  const { 
    isRegisterModalOpen, 
    closeRegisterModal, 
    selectedCourse, 
    courses, 
    addRegistration, 
    language, 
    t 
  } = useApp();

  const [courseId, setCourseId] = useState(selectedCourse ? selectedCourse.id : '');
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [governorate, setGovernorate] = useState('sohag');
  const [deliveryMode, setDeliveryMode] = useState<'online' | 'in-person'>('online');
  const [level, setLevel] = useState('beginner');
  const [ageOrStage, setAgeOrStage] = useState('');
  const [notes, setNotes] = useState('');

  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedCourse) {
      setCourseId(selectedCourse.id);
      if (selectedCourse.deliveryMethod === 'in-person') {
        setDeliveryMode('in-person');
      } else {
        setDeliveryMode('online');
      }
    } else if (courses.length > 0 && !courseId) {
      setCourseId(courses[0].id);
    }
  }, [selectedCourse, courses]);

  if (!isRegisterModalOpen) return null;

  const currentCourse = courses.find(c => c.id === courseId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Validation
    if (!studentName.trim() || studentName.trim().length < 3) {
      setStatusMessage({
        type: 'error',
        text: t('يرجى إدخال الاسم الثلاثي بالكامل.', 'Please provide your full three-part name.')
      });
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setStatusMessage({
        type: 'error',
        text: t('يرجى إدخال رقم هاتف صحيح مفعّل عليه تطبيق واتساب للتواصل.', 'Please provide a valid phone number with active WhatsApp.')
      });
      return;
    }

    if (!courseId) {
      setStatusMessage({
        type: 'error',
        text: t('يرجى اختيار البرنامج التدريبي المراد الالتحاق به.', 'Please select a training program.')
      });
      return;
    }

    setIsSubmitting(true);

    const result = addRegistration({
      studentName: studentName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      governorate,
      courseId,
      courseTitleAr: currentCourse?.titleAr,
      courseTitleEn: currentCourse?.titleEn,
      deliveryMode,
      level,
      ageOrStage: ageOrStage.trim() || 'Not specified',
      notes: notes.trim(),
    });

    setIsSubmitting(false);

    if (result.success) {
      setStatusMessage({
        type: 'success',
        text: result.message
      });
      // Clear inputs
      setStudentName('');
      setPhone('');
      setEmail('');
      setNotes('');
      setAgeOrStage('');
    } else {
      setStatusMessage({
        type: 'error',
        text: result.message
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-start animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span>{t('طلب تسجيل مبدئي', 'Enrollment Request')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">EPT Academy</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {t('استمارة الالتحاق بالبرامج التدريبية', 'Program Enrollment Form')}
            </h2>
          </div>
          <button
            onClick={closeRegisterModal}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-8rem)] overflow-y-auto">
          
          {/* Submission feedback */}
          {statusMessage && (
            <div
              className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
              )}
              <div className="space-y-1">
                <p className="font-semibold">{statusMessage.text}</p>
                {statusMessage.type === 'success' && (
                  <p className="text-xs text-slate-400 font-normal">
                    {t(
                      'ملاحظة: هذا التسجيل لحجز المقعد، وسيقوم المنسق بشرح كافة التفاصيل والمواعيد وطرق السداد الرسمية قبل بدء الدفعة.',
                      'Note: Submission secures cohort placement. Coordinators finalize scheduling and verified payment details prior to launch.'
                    )}
                  </p>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Step 1: Course Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t('البرنامج التدريبي المطلوب *', 'Selected Training Program *')}
              </label>
              <select
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {t(c.titleAr, c.titleEn)} ({c.durationWeeks} {t('أسابيع', 'wks')})
                  </option>
                ))}
              </select>
            </div>

            {/* Delivery Method & Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('طريقة الحضور والتطبيق *', 'Study Mode *')}
                </label>
                <select
                  value={deliveryMode}
                  onChange={(e) => setDeliveryMode(e.target.value as 'online' | 'in-person')}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="online">{t('أونلاين تفاعلي مباشر (من محافظتك)', 'Live Online (From Your City)')}</option>
                  <option value="in-person">{t('حضوري بمعامل سوهاج (جهينة)', 'In-Person at Sohag Lab (Gehana)')}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('المستوى المعرفي الحالي بالمهارة', 'Current Proficiency Level')}
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="beginner">{t('مبتدئ تمامًا من الصفر', 'Absolute Beginner')}</option>
                  <option value="intermediate">{t('لدي معرفة سطحية بالأساسيات', 'Familiar with basics')}</option>
                  <option value="advanced">{t('لدي تجارب سابقة وأريد الاحتراف', 'Experienced, seeking mastery')}</option>
                </select>
              </div>
            </div>

            {/* Student Info: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('الاسم الثلاثي للطالب *', 'Full Student Name *')}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder={t('مثال: أحمد محمد علي', 'e.g. Ahmed Mohamed Ali')}
                    className="w-full ps-9 pe-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('رقم الهاتف المحمول (واتساب) *', 'Phone / WhatsApp *')}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('010xxxxxxxx أو +20', '010xxxxxxxx')}
                    className="w-full ps-9 pe-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Governorate & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('المحافظة المقيم بها *', 'Governorate of Residence *')}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={governorate}
                    onChange={(e) => setGovernorate(e.target.value)}
                    className="w-full ps-9 pe-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {EGYPT_GOVERNORATES.map((gov) => (
                      <option key={gov.id} value={gov.nameAr}>
                        {t(gov.nameAr, gov.nameEn)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t('البريد الإلكتروني (اختياري)', 'Email Address (Optional)')}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full ps-9 pe-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Age / Stage */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t('العمر أو المرحلة الدراسية / الوظيفة', 'Age or Academic Stage / Profession')}
              </label>
              <input
                type="text"
                value={ageOrStage}
                onChange={(e) => setAgeOrStage(e.target.value)}
                placeholder={t('مثال: طالب جامعي (سنة ثانية حاسبات) أو خريج أو 16 سنة', 'e.g. University student, High school 16yo, Graduate')}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t('ملاحظات أو استفسار محدد', 'Special Notes or Questions')}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t('أي أوقات تفضلها للجلسات أو أسئلة محددة تريد توضيحها...', 'Any preferred session timings or questions...')}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? t('جارٍ الإرسال...', 'Submitting...') : t('تأكيد إرسال طلب الالتحاق', 'Confirm Registration Request')}</span>
              </button>
            </div>

            {/* Transparency Note (Prompt #11) */}
            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              {t(
                'سيقوم منسق القبول بأكاديمية EPT بالتواصل معك هاتفيًا لمراجعة المتطلبات والتأكيد قبل بدء التدريب.',
                'An EPT admissions coordinator will phone you to verify requirements and finalize cohort dates.'
              )}
            </p>
          </form>

        </div>
      </div>
    </div>
  );
};
