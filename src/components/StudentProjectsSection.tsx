import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  FolderGit2, 
  ExternalLink, 
  User, 
  MapPin, 
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const StudentProjectsSection: React.FC = () => {
  const { studentProjects, language, t } = useApp();

  const publishedProjects = studentProjects.filter(p => p.status === 'approved');

  return (
    <section id="projects" className="py-20 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-start">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span>{t('معرض المخرجات العملية', 'Verified Student Portfolio')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{t('مشروعات تم تنفيذها خلال البرامج', 'Completed in EPT Cohorts')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('مشاريع وتطبيقات الطلاب', 'Real Student Projects')}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t(
                'الشهادة الحقيقية لأي متعلم هي قدرته على إنجاز مشروع يعمل بالفعل. نستعرض هنا نماذج من مشروعات تخرج طلابنا في البرمجة والتصميم وتحليل البيانات.',
                'The true credential is an operable project. Here are verified projects executed by our learners across programming, design, and data cohorts.'
              )}
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            {t('مشاريع معتمدة وموثقة', 'Admin-Verified Submissions')}
          </div>
        </div>

        {/* Projects Grid */}
        {publishedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-slate-900/80 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between text-start group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={proj.image}
                      alt={t(proj.titleAr, proj.titleEn)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    
                    {proj.isDemo && (
                      <div className="absolute top-3 end-3 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/90 text-amber-300 border border-slate-800">
                        SAMPLE / DEMO
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    
                    {/* Unboxed Metadata: Student & Governorate */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-semibold text-slate-200">{proj.studentName}</span>
                      <span aria-hidden="true">·</span>
                      <span>{proj.governorate}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-blue-400">{proj.courseTitle}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {t(proj.titleAr, proj.titleEn)}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {t(proj.descriptionAr, proj.descriptionEn)}
                    </p>

                    {/* Tech Stack List */}
                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-300">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    {t('مشروع تخرج مكتمل', 'Verified Graduation Project')}
                  </span>
                  {proj.projectUrl && (
                    <a
                      href={proj.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium"
                    >
                      <span>{t('معاينة المشروع', 'Live Demo')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-10 rounded-xl bg-slate-900 border border-slate-800 text-center text-sm text-slate-400">
            {t('سيتم عرض مشاريع دفعات الطلاب فور اعتمادها من لوحة الإدارة.', 'Student projects will be featured here upon administrator verification.')}
          </div>
        )}

      </div>
    </section>
  );
};
