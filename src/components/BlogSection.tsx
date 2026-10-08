import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { blogPosts, setSelectedArticle, language, t } = useApp();

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="blog" className="py-20 bg-slate-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-start">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
              <span>{t('المعرفة والمقالات الإرشادية', 'Insights & Guides')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{t('فهم التكنولوجيا وسوق العمل', 'Tech & Career Clarity')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('مقالات ومدونة EPT Academy', 'Educational Articles & Insights')}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t(
                'مقالات تقنية وتربوية موجهة للطلاب وأولياء الأمور لتوضيح كيفية الاستفادة من أدوات العصر وتجنب المشتتات والتعلم بأسلوب فعال.',
                'Curated articles for learners and families detailing modern skill acquisition, career roadmaps, and purposeful technology use.'
              )}
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between text-start group cursor-pointer"
              onClick={() => setSelectedArticle(post)}
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={post.coverImage}
                    alt={t(post.titleAr, post.titleEn)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3 start-3 px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-amber-400">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  {/* Unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{post.readTimeMinutes} {t('دقائق قراءة', 'min read')}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {t(post.titleAr, post.titleEn)}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {t(post.summaryAr, post.summaryEn)}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                <span>{t('قراءة المقال بالكامل ومناقشته', 'Read Full Article & Discussion')}</span>
                <ArrowIcon className="w-3.5 h-3.5 ms-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
