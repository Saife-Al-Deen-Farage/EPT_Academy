import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  User, 
  Linkedin, 
  Github, 
  Mail, 
  BookOpen, 
  Award,
  Layers
} from 'lucide-react';

export const InstructorsSection: React.FC = () => {
  const { instructors, courses, language, t } = useApp();

  return (
    <section id="instructors" className="py-20 bg-slate-900/50 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-start mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <span>{t('الكادر التدريبي', 'Academic & Industry Mentors')}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{t('خبرات تطبيقية متخصصة', 'Domain Practitioners')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('مدربو وموجهو EPT Academy', 'Our Expert Instructors')}
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {t(
              'يقوم على تدريبك مهندسون ومختصون يعملون في مجالاتهم التقنية. نركز على نقل الخبرة الميدانية وحل مشكلات المشاريع العملية كأنك تعمل معهم في بيئة شركة.',
              'Mentored by active software engineers and creative designers. We bridge the gap between classroom theory and real production demands.'
            )}
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((inst) => {
            // Associated courses
            const instCourses = courses.filter(c => inst.coursesIds.includes(c.id));

            return (
              <div
                key={inst.id}
                className="bg-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col justify-between text-start hover:border-slate-700 transition-all group"
              >
                <div className="space-y-4">
                  
                  {/* Avatar / Placeholder (Prompt #15: use clean placeholder, not AI face) */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 transition-colors">
                      {inst.avatarUrl ? (
                        <img 
                          src={inst.avatarUrl} 
                          alt={t(inst.nameAr, inst.nameEn)} 
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-lg text-slate-300 bg-slate-900 rounded-xl">
                          {inst.nameAr.slice(0, 2)}
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {t(inst.nameAr, inst.nameEn)}
                      </h3>
                      <p className="text-xs text-blue-400 font-medium">
                        {t(inst.roleAr, inst.roleEn)}
                      </p>
                    </div>
                  </div>

                  {/* Unboxed Metadata: Experience */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{inst.experienceYears} {t('سنوات خبرة مهنية', 'Years Industry Experience')}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t('إشراف وتدريب عملي', 'Supervised Mentorship')}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {t(inst.bioAr, inst.bioEn)}
                  </p>

                  {/* Courses Taught */}
                  {instCourses.length > 0 && (
                    <div className="pt-2 border-t border-slate-900 space-y-1.5">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        {t('البرامج التي يقدمها:', 'Mentors tracks:')}
                      </div>
                      <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                        {instCourses.map((c) => (
                          <span key={c.id} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                            {t(c.titleAr, c.titleEn)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>{t('تواصل مهني', 'Professional Links')}</span>
                  <div className="flex items-center gap-2 text-slate-400">
                    {inst.social.linkedin && (
                      <a 
                        href={inst.social.linkedin} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hover:text-blue-400 transition-colors p-1"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {inst.social.github && (
                      <a 
                        href={inst.social.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hover:text-white transition-colors p-1"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
