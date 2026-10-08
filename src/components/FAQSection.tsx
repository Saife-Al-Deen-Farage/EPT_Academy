import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  MessageCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { faqs, language, t, settings } = useApp();
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs.length > 0 ? faqs[0].id : null);
  const [query, setQuery] = useState('');

  const filteredFaqs = faqs.filter(faq => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      faq.questionAr.toLowerCase().includes(q) ||
      faq.questionEn.toLowerCase().includes(q) ||
      faq.answerAr.toLowerCase().includes(q) ||
      faq.answerEn.toLowerCase().includes(q)
    );
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(language === 'ar' ? settings.whatsappPrefilledAr : settings.whatsappPrefilledEn);
    window.open(`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>{t('إجابات شفافة ومباشرة', 'Clear & Transparent Answers')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('الأسئلة الأكثر شيوعًا', 'Frequently Asked Questions')}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            {t(
              'كل ما يدور في ذهنك حول طريقة التدريب، الحضور من المحافظات، متطلبات الأجهزة، وضمان الجودة في EPT Academy.',
              'Everything you need to know regarding cohort delivery, interstate enrollment, lab requirements, and curriculum clarity.'
            )}
          </p>

          {/* FAQ Search */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('ابحث في الأسئلة الشائعة...', 'Search answers...')}
              className="w-full ps-10 pe-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3 text-start">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-slate-900/70 border border-slate-800/90 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-start hover:bg-slate-900 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {t(faq.questionAr, faq.questionEn)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-800/60 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {t(faq.answerAr, faq.answerEn)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-start">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white">
              {t('لديك استفسار خاص لم تجد إجابته هنا؟', 'Have an inquiry not addressed here?')}
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              {t('تواصل مباشرة مع المستشار الأكاديمي عبر واتساب وسيجيبك فورًا.', 'Message our academic advisor on WhatsApp for direct answers.')}
            </p>
          </div>

          <button
            onClick={openWhatsApp}
            className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-slate-950" />
            <span>{t('تحدث مع مستشارنا الآن', 'Chat with Advisor')}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
