import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageCircle, X, Laptop, Building2, ChevronUp } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { settings, language, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const openGeneralWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'ar' ? settings.whatsappPrefilledAr : settings.whatsappPrefilledEn
    );
    const cleanNumber = (settings.whatsapp || '+201203246226').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  const openTechWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'ar'
        ? 'مرحبًا قسم التكنولوجيا في EPT Academy، أود الاستفسار عن تفاصيل دورات البرمجة والمسارات التقنية ومواعيد بدء الدفعة القادمة.'
        : 'Hello EPT Academy Tech Department, I would like to inquire about coding courses and technical tracks.'
    );
    const cleanNumber = (settings.techWhatsapp || '+201031473069').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 end-6 z-40 flex flex-col items-end gap-3 select-none">
      
      {/* Interactive Department Modal Bubble */}
      {isOpen && (
        <div className="bg-slate-900/95 backdrop-blur-xl text-slate-200 text-xs p-4 rounded-2xl border border-slate-700/80 shadow-2xl w-80 animate-in fade-in slide-in-from-bottom-3 duration-200 text-start space-y-3">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white text-xs">EPT Academy WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] leading-relaxed text-slate-300">
            {t(
              'اختر القسم الذي تود التواصل معه للرد السريع عبر الواتساب:',
              'Select department for instant WhatsApp assistance:'
            )}
          </p>

          <div className="space-y-2">
            
            {/* General Admissions Desk */}
            <button
              onClick={openGeneralWhatsApp}
              className="w-full p-2.5 rounded-xl bg-slate-950 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/50 text-start flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    {t('الإدارة والاستفسارات العامة', 'General Admissions')}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    {settings.phone}
                  </span>
                </div>
              </div>
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </button>

            {/* Direct Tech Department Desk */}
            <button
              onClick={openTechWhatsApp}
              className="w-full p-2.5 rounded-xl bg-slate-950 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/50 text-start flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20">
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    {t('قسم التكنولوجيا والبرمجة', 'Technology Department')}
                  </span>
                  <span className="text-[10px] font-mono text-blue-400">
                    {settings.techPhone || '+20 10 31473069'}
                  </span>
                </div>
              </div>
              <MessageCircle className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            </button>

          </div>

          <div className="text-[10px] text-slate-500 text-center pt-1 border-t border-slate-800/80">
            {t('متاح يوميًا للرد السريع · سوهاج & أونلاين', 'Available Daily · Sohag & Online Nationwide')}
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all hover:scale-108 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950 relative"
        aria-label="Contact EPT Academy on WhatsApp"
        title="WhatsApp Desk"
      >
        <span className="absolute -top-1 -end-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-950 flex items-center justify-center text-[9px] font-bold text-slate-950">
          2
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 group-hover:rotate-6 transition-transform" />
      </button>

    </div>
  );
};
