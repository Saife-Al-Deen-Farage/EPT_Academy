import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Laptop, 
  ArrowRight, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';

export const EventsSection: React.FC = () => {
  const { events, language, t, openRegisterModal } = useApp();

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="events" className="py-20 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-start mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
            <span>{t('الفعاليات والورش التقنية', 'Events & Workshops')}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{t('ندوات تطبيقية وتوجيهية', 'Hands-on Clinics & Webinars')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('الورش التدريبية واللقاءات القادمة', 'Upcoming Workshops & Masterclasses')}
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {t(
              'ننظم ورش عمل مفتوحة ولقاءات دورية تناقش اتجاهات التكنولوجيا الحديثة، وتساعد الطلاب على استكشاف المجالات البرمجية والتصميمية وتحديد مساراتهم.',
              'Periodic interactive masterclasses and orientation clinics unpacking modern software, digital crafts, and roadmap strategies.'
            )}
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-start"
            >
              <div className="space-y-3 max-w-3xl">
                
                {/* Unboxed Metadata: Type, Date, Time */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-amber-400">{t(ev.typeAr, ev.typeEn)}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{ev.date}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{t(ev.timeAr, ev.timeEn)}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">
                  {t(ev.titleAr, ev.titleEn)}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {t(ev.descriptionAr, ev.descriptionEn)}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{t(ev.locationAr, ev.locationEn)}</span>
                  </div>
                  {ev.instructorName && (
                    <div className="flex items-center gap-1.5">
                      <span>{t('تقديم:', 'Speaker:')} {ev.instructorName}</span>
                    </div>
                  )}
                  {ev.capacity && (
                    <div className="flex items-center gap-1 text-slate-400 font-mono">
                      <span>{t('المقاعد المتاحة:', 'Seats:')} {ev.registeredCount}/{ev.capacity}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="shrink-0 self-start lg:self-center">
                <button
                  onClick={() => openRegisterModal()}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
                >
                  <span>{t('حجز مقعد بالورشة', 'Reserve Seat')}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
