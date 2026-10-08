import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EPTLogo } from './EPTLogo';
import { 
  Globe, 
  Search, 
  Menu, 
  X, 
  ShieldCheck, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    language, 
    toggleLanguage, 
    t, 
    openRegisterModal, 
    setIsSearchModalOpen,
    isAdminOpen,
    setIsAdminOpen,
    currentUser
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#tour', labelAr: 'قاعات ومعامل الأكاديمية', labelEn: 'Campus & Labs' },
    { href: '#courses', labelAr: 'البرامج التدريبية', labelEn: 'Programs' },
    { href: '#why-us', labelAr: 'لماذا EPT؟', labelEn: 'Why Us' },
    { href: '#learning-paths', labelAr: 'المسارات', labelEn: 'Paths' },
    { href: '#online-reach', labelAr: 'التعلم عن بُعد', labelEn: 'Online Reach' },
    { href: '#projects', labelAr: 'مشاريع الطلاب', labelEn: 'Projects' },
    { href: '#instructors', labelAr: 'المدربون', labelEn: 'Instructors' },
    { href: '#faq', labelAr: 'الأسئلة الشائعة', labelEn: 'FAQ' },
    { href: '#contact', labelAr: 'تواصل معنا', labelEn: 'Contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/92 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Zone 1: Single text element wordmark with Official Logo (Top Bar Contract) */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="#" 
            className="flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors group"
          >
            <EPTLogo variant="full" size="md" light />
          </a>
        </div>

        {/* Zone 2: 4-6 Clean single-line nav links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-slate-300">
          {navLinks.slice(0, 6).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors whitespace-nowrap text-[13px] py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t(link.labelAr, link.labelEn)}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions (Search, Lang Switcher, Admin, Register CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Global Search Button */}
          <button
            onClick={() => setIsSearchModalOpen(true)}
            aria-label={t('بحث في الموقع', 'Search website')}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
            title={t('بحث شامل في الموقع', 'Search site')}
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors whitespace-nowrap"
            title={t('تغيير اللغة إلى الإنجليزية', 'Switch to Arabic')}
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>{language === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          {/* Admin Dashboard Trigger */}
          <button
            onClick={() => setIsAdminOpen(true)}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
              currentUser.role === 'admin'
                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 border-slate-800 hover:bg-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('لوحة الإدارة', 'Admin CMS')}</span>
          </button>

          {/* Primary CTA: Register */}
          <button
            onClick={() => openRegisterModal()}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm shadow-amber-400/20 transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95"
          >
            <span>{t('ابدأ التسجيل', 'Enroll Now')}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {t(link.labelAr, link.labelEn)}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsAdminOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t('دخول لوحة الإدارة (CMS)', 'Admin Management Portal')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
