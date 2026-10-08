import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Search, 
  BookOpen, 
  User, 
  Calendar, 
  HelpCircle, 
  FileText, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const { 
    isSearchModalOpen, 
    setIsSearchModalOpen, 
    courses, 
    instructors, 
    blogPosts, 
    events, 
    faqs, 
    setSelectedCourse, 
    setSelectedArticle, 
    language, 
    t 
  } = useApp();

  const [query, setQuery] = useState('');

  if (!isSearchModalOpen) return null;

  const q = query.trim().toLowerCase();

  const matchingCourses = q ? courses.filter(c => 
    c.titleAr.toLowerCase().includes(q) || 
    c.titleEn.toLowerCase().includes(q) ||
    c.skillsGained.some(s => s.toLowerCase().includes(q))
  ) : [];

  const matchingInstructors = q ? instructors.filter(i => 
    i.nameAr.toLowerCase().includes(q) || 
    i.nameEn.toLowerCase().includes(q) ||
    i.roleAr.toLowerCase().includes(q)
  ) : [];

  const matchingPosts = q ? blogPosts.filter(p => 
    p.titleAr.toLowerCase().includes(q) || 
    p.titleEn.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  ) : [];

  const matchingEvents = q ? events.filter(e => 
    e.titleAr.toLowerCase().includes(q) || 
    e.titleEn.toLowerCase().includes(q)
  ) : [];

  const matchingFaqs = q ? faqs.filter(f => 
    f.questionAr.toLowerCase().includes(q) || 
    f.questionEn.toLowerCase().includes(q) ||
    f.answerAr.toLowerCase().includes(q)
  ) : [];

  const totalResults = matchingCourses.length + matchingInstructors.length + matchingPosts.length + matchingEvents.length + matchingFaqs.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-12 text-start animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('ابحث عن كورس، مدرب، مقال، ورشة، أو سؤال شائع...', 'Search courses, instructors, articles, events, or FAQs...')}
            className="w-full bg-transparent border-0 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-0"
          />
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {!q ? (
            <div className="py-8 text-center text-xs text-slate-500 space-y-2">
              <p>{t('اكتب كلمة للبحث في محتوى موقع EPT Academy بالكامل.', 'Type keywords to search across the academy catalog.')}</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-slate-400">
                <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] cursor-pointer hover:text-white" onClick={() => setQuery('Python')}>Python</span>
                <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] cursor-pointer hover:text-white" onClick={() => setQuery('Web')}>Web</span>
                <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] cursor-pointer hover:text-white" onClick={() => setQuery('Design')}>Design</span>
                <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] cursor-pointer hover:text-white" onClick={() => setQuery('أونلاين')}>أونلاين</span>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-10 text-center text-xs text-slate-400">
              {t('لم يتم العثور على نتائج مطابقة لـ "', 'No results found for "')}{query}"
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Courses */}
              {matchingCourses.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                    {t('البرامج التدريبية', 'Courses')} ({matchingCourses.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchingCourses.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => {
                          setSelectedCourse(c);
                          setIsSearchModalOpen(false);
                        }}
                        className="p-3 rounded-lg bg-slate-950 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-white">
                            {t(c.titleAr, c.titleEn)}
                          </h4>
                          <span className="text-[11px] text-slate-400">
                            {c.durationWeeks} {t('أسابيع', 'weeks')} · {c.skillsGained.slice(0, 3).join(', ')}
                          </span>
                        </div>
                        <span className="text-xs text-blue-400 font-medium">{t('عرض التفاصيل', 'View')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Instructors */}
              {matchingInstructors.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                    {t('المدربون', 'Instructors')} ({matchingInstructors.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchingInstructors.map((i) => (
                      <div
                        key={i.id}
                        className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-between"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            {t(i.nameAr, i.nameEn)}
                          </h4>
                          <span className="text-[11px] text-slate-400">
                            {t(i.roleAr, i.roleEn)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles */}
              {matchingPosts.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                    {t('المقالات والأفكار', 'Articles')} ({matchingPosts.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchingPosts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          setSelectedArticle(p);
                          setIsSearchModalOpen(false);
                        }}
                        className="p-3 rounded-lg bg-slate-950 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            {t(p.titleAr, p.titleEn)}
                          </h4>
                          <span className="text-[11px] text-slate-400">
                            {p.category} · {p.readTimeMinutes} {t('دقائق', 'mins')}
                          </span>
                        </div>
                        <span className="text-xs text-amber-400 font-medium">{t('قراءة', 'Read')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {matchingFaqs.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider block">
                    {t('الأسئلة الشائعة', 'FAQs')} ({matchingFaqs.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchingFaqs.map((f) => (
                      <div
                        key={f.id}
                        className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1"
                      >
                        <h4 className="text-xs font-bold text-white">
                          {t(f.questionAr, f.questionEn)}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {t(f.answerAr, f.answerEn)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
