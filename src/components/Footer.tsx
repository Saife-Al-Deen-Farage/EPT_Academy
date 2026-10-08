import React from 'react';
import { useApp } from '../context/AppContext';
import { EPTLogo } from './EPTLogo';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings, setLegalModalType, setIsAdminOpen, language, t } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-start text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <EPTLogo variant="full" size="md" light />

            <p className="text-sm font-semibold text-slate-300">
              {settings.sloganAr}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              {t(
                'مبادرة تعليمية وتكنولوجية مصرية تهدف إلى تمكين الطلاب والشباب بمهارات البرمجة، التصميم، واللغة الإنجليزية من خلال التطبيق العملي وبناء مشاريع واقعية.',
                'An Egyptian educational & technological academy empowering youth with coding, design, and English capabilities via experiential project execution.'
              )}
            </p>

            {/* Headquarters Note (Prompt #13 & #41) */}
            <div className="pt-2 text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{settings.mainLocationAr}</span>
              </div>
              <div className="text-[11px] text-slate-400 ps-5">
                {t('مقرنا في سوهاج، ونصل لمتعلمينا في كافة المحافظات أونلاين', 'Based in Sohag, serving learners beyond borders.')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('روابط سريعة', 'Navigation')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  {t('البرامج التدريبية', 'Training Tracks')}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  {t('لماذا EPT Academy؟', 'Why Choose Us')}
                </a>
              </li>
              <li>
                <a href="#learning-paths" className="hover:text-amber-400 transition-colors">
                  {t('المسارات التأسيسية', 'Learning Paths')}
                </a>
              </li>
              <li>
                <a href="#online-reach" className="hover:text-amber-400 transition-colors">
                  {t('التعلم من محافظتك', 'Online Reach')}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  {t('مشاريع الطلاب', 'Student Projects')}
                </a>
              </li>
              <li>
                <a href="#instructors" className="hover:text-amber-400 transition-colors">
                  {t('الكادر التدريبي', 'Instructors')}
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-400 transition-colors">
                  {t('الورش والفعاليات', 'Events & Workshops')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('السياسات والشفافية', 'Transparency & Policies')}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setLegalModalType('privacy')}
                  className="hover:text-amber-400 transition-colors text-start"
                >
                  {t('سياسة الخصوصية', 'Privacy Policy')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModalType('terms')}
                  className="hover:text-amber-400 transition-colors text-start"
                >
                  {t('الشروط والأحكام', 'Terms & Conditions')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModalType('refund')}
                  className="hover:text-amber-400 transition-colors text-start"
                >
                  {t('سياسة الاسترداد', 'Refund Policy')}
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {t('الأسئلة الشائعة', 'Frequently Asked Questions')}
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="text-amber-400/90 hover:text-amber-300 flex items-center gap-1 font-mono text-[11px]"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('لوحة الإدارة (CMS Login)', 'Admin Control')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('التواصل الرسمي', 'Official Desk')}
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block">{t('الإدارة العامة:', 'General Desk:')}</span>
                  <a href={`tel:${settings.phone.replace(/[^0-9]/g, '')}`} className="font-mono hover:text-white font-semibold">
                    {settings.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-blue-400 block">{t('قسم التكنولوجيا:', 'Tech Dept:')}</span>
                  <a href={`tel:${(settings.techPhone || '+201031473069').replace(/[^0-9]/g, '')}`} className="font-mono hover:text-white font-semibold">
                    {settings.techPhone || '+20 10 31473069'}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="font-mono truncate">{settings.email || 'info@eptacademy.edu.eg'}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-2 flex flex-wrap gap-2">
              {settings.social.facebook && (
                <a
                  href={settings.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-blue-400 hover:text-white hover:border-blue-500 flex items-center gap-1 transition-colors"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
              {settings.social.linkedin && (
                <a
                  href={settings.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-blue-300 hover:text-white hover:border-blue-500 flex items-center gap-1 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
              {settings.social.instagram && (
                <a
                  href={settings.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] hover:text-white hover:border-slate-700"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} EPT Academy (English Plus Technology). {t('جميع الحقوق محفوظة.', 'All rights reserved.')}
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>{t('سوهاج · جمهورية مصر العربية', 'Sohag, Egypt')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('نُعلّم مهارات اليوم', 'Teaching Skills of Today')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
