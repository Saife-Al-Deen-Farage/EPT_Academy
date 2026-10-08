import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  MapPin, 
  Wifi, 
  Users, 
  Monitor, 
  ArrowRight, 
  ArrowLeft,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const OnlineReachSection: React.FC = () => {
  const { language, t, openRegisterModal, settings } = useApp();

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const sampleGovernorates = [
    { nameAr: 'سوهاج (المقر الرئيسي)', nameEn: 'Sohag (HQ)', noteAr: 'حضوري بالمعامل + أونلاين', noteEn: 'In-Person & Online' },
    { nameAr: 'القاهرة & الجيزة', nameEn: 'Cairo & Giza', noteAr: 'قاعات أونلاين تفاعلية', noteEn: 'Live Interactive Virtual' },
    { nameAr: 'الإسكندرية', nameEn: 'Alexandria', noteAr: 'قاعات أونلاين تفاعلية', noteEn: 'Live Interactive Virtual' },
    { nameAr: 'قنا & الأقصر & أسوان', nameEn: 'Qena, Luxor & Aswan', noteAr: 'قاعات أونلاين تفاعلية', noteEn: 'Live Interactive Virtual' },
    { nameAr: 'أسيوط & المنيا', nameEn: 'Asyut & Minya', noteAr: 'قاعات أونلاين تفاعلية', noteEn: 'Live Interactive Virtual' },
    { nameAr: 'شمال سيناء (العريش)', nameEn: 'North Sinai (Arish)', noteAr: 'قاعات أونلاين تفاعلية', noteEn: 'Live Interactive Virtual' },
  ];

  return (
    <section id="online-reach" className="py-20 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Decorative Radial Backdrop */}
      <div className="absolute top-1/2 start-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Visual Map Left + Detailed Outreach Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Visualization (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <img
                src="/src/assets/images/egypt_learning_reach_1791456271660.jpg"
                alt="EPT Academy Egypt Geographic Learning Network"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-start space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>{settings.mainLocationAr}</span>
                </div>
                <p className="text-xs text-slate-300 font-normal">
                  {t(settings.regionalReachAr, settings.regionalReachEn)}
                </p>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-3 start-4 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-blue-400 flex items-center gap-2 shadow-lg">
              <Wifi className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>{t('اتصال تفاعلي مباشر', 'Live Interactive Distance Learning')}</span>
            </div>
          </div>

          {/* Text & Governorates Breakdown (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-start order-1 lg:order-2">
            
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span>{t('حضور رقمي يتجاوز الحدود الجغرافية', 'National Learning Reach')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{t('شمال وجنوب مصر', 'Upper & Lower Egypt')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t('تعلم من أي مكان في مصر', 'Learn from Anywhere Across Egypt')}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {t(
                'لا يُشترط أن تكون في نفس المدينة لتبدأ رحلة التعلم مع EPT Academy. بعض برامجنا يمكن تقديمها Online بقاعات تفاعلية مباشرة مع المدربين، مما يتيح للطلاب من مختلف المحافظات الوصول إلى التدريب والمحتوى التعليمي والمتابعة الفردية.',
                'You do not need to be physically in our city to learn with EPT Academy. Many of our flagship tracks run in live interactive online formats, giving learners from every governorate direct access to expert coaching.'
              )}
            </p>

            {/* Geographic Distribution Cards (Truthful, non-fabricated) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {sampleGovernorates.map((gov, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-start"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-white block">
                        {t(gov.nameAr, gov.nameEn)}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {t(gov.noteAr, gov.noteEn)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Transparency statement */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/30 text-xs text-blue-300 leading-relaxed flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                {t(
                  'المقر الرئيسي والفيزيائي للأكاديمية يقع في سوهاج (جهينة)، ونقدم البرامج المخصصة عن بُعد عبر غرف بث وتدريب مهيأة بالكامل للمتابعة وحل المشكلات كأنك معنا في المعمل.',
                  'Our physical academy headquarters and computer laboratories are in Sohag (Gehana). Virtual cohorts run on low-latency interactive rooms with screen share and instant debugging.'
                )}
              </span>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => openRegisterModal()}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all flex items-center gap-2"
              >
                <span>{t('انضم لدفعة جديدة من محافظتك', 'Join an Online Cohort from Your City')}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
