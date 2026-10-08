import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INITIAL_LEARNING_PATHS } from '../data/initialData';
import { 
  Compass, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Laptop, 
  Sparkles,
  Layers
} from 'lucide-react';

export const LearningPathsSection: React.FC = () => {
  const { language, t, openRegisterModal } = useApp();
  const [selectedPathIndex, setSelectedPathIndex] = useState(0);

  const paths = INITIAL_LEARNING_PATHS;
  const currentPath = paths[selectedPathIndex];
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="learning-paths" className="py-20 bg-slate-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-start mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <span>{t('خرائط التطور المهني', 'Curated Progression')}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{t('تدرج من الصفر حتى الإنتاج', 'From Zero to Capstone')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('اختر مسارك التعليمي المناسب', 'Choose Your Structured Learning Path')}
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {t(
              'لا داعي للحيرة أو التشتت في اختيار الدورات المنفصلة. رتبنا لك مسارات تدريبية واضحة ومترابطة تأخذك بتدرج منطقي من نقطة البداية وحتى إنتاج المشاريع الحقيقية.',
              'Avoid fragmented learning. Follow cohesive milestone-based paths taking you progressively from fundamental concepts to deployable capabilities.'
            )}
          </p>
        </div>

        {/* Path Selector Tabs (Interactive Buttons) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {paths.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedPathIndex(idx)}
              className={`p-4 rounded-xl text-start transition-all border ${
                selectedPathIndex === idx
                  ? 'bg-slate-900 border-blue-500 shadow-md ring-1 ring-blue-500/30'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-xs font-mono text-slate-400 mb-1">
                0{idx + 1}. Track
              </div>
              <div className="text-sm font-bold text-white">
                {t(p.titleAr, p.titleEn)}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Path Details Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 text-start space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                {t('الجمهور المستهدف:', 'Ideal for:')} {t(currentPath.targetAudienceAr, currentPath.targetAudienceEn)}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {t(currentPath.titleAr, currentPath.titleEn)}
              </h3>
            </div>

            <button
              onClick={() => openRegisterModal()}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 self-start md:self-auto shrink-0 shadow-sm"
            >
              <span>{t('سجل في هذا المسار', 'Enroll in Track')}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
            {t(currentPath.descAr, currentPath.descEn)}
          </p>

          {/* Sequential Path Steps Flow */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              {t('مراحل التدرج في المسار:', 'Sequential Curriculum Stages:')}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(language === 'ar' ? currentPath.stepsAr : currentPath.stepsEn).map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-blue-400">
                      Step 0{sIdx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {step}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
