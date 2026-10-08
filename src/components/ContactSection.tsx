import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  ExternalLink,
  Building2,
  Laptop,
  Sparkles,
  Share2,
  Clock,
  Compass
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { settings, addContactMessage, language, t } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    addContactMessage({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      subject: subject.trim() || t('استفسار عام', 'General Inquiry'),
      message: message.trim(),
    });

    setSubmitted(true);
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  const openWhatsAppGeneral = () => {
    const text = encodeURIComponent(language === 'ar' ? settings.whatsappPrefilledAr : settings.whatsappPrefilledEn);
    const cleanNum = (settings.whatsapp || '+201203246226').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNum}?text=${text}`, '_blank');
  };

  const openWhatsAppTech = () => {
    const text = encodeURIComponent(
      language === 'ar' 
        ? 'مرحبًا قسم التكنولوجيا في EPT Academy، أود الاستفسار عن تفاصيل دورات البرمجة والمسارات التقنية ومواعيد بدء الدفعة القادمة.' 
        : 'Hello EPT Academy Tech Department, I would like to inquire about coding courses and technical tracks.'
    );
    const cleanNum = (settings.techWhatsapp || '+201031473069').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNum}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 end-0 w-[28rem] h-[28rem] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl text-start mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
            <span className="p-1 rounded-md bg-amber-400/10 border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </span>
            <span>{t('قنوات التواصل المباشرة المعتمدة', 'Official Verified Communication Channels')}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">{t('فريق القبول والتنسيق وقسم التكنولوجيا', 'Admissions Desk & Tech Department')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('تواصل مع إدارة EPT Academy', 'Get in Touch with EPT Academy')}
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {t(
              'يسعدنا الرد الفوري على جميع استفسارات الطلاب وأولياء الأمور بشأن تفاصيل البرامج التدريبية، مواعيد الدفعات القادمة، واختبارات تحديد المستوى، وزيارات المقر.',
              'Our academic advisory team is available to discuss track roadmaps, schedule placements, in-person campus visits, and remote cohort onboarding.'
            )}
          </p>
        </div>

        {/* 2-Column Layout: Direct Details Left, Message Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-start">
          
          {/* Details & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>{t('المقر الرئيسي والمعامل', 'Headquarters & Facilities')}</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/10 border border-amber-400/20 text-amber-300">
                  {t('سوهاج', 'SOHAG')}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {settings.mainLocationAr}
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {t(settings.regionalReachAr, settings.regionalReachEn)}
              </p>

              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('مواعيد العمل: يوميًا من 9:00 صباحًا حتى 9:00 مساءً', 'Hours: Daily 9:00 AM – 9:00 PM')}</span>
              </div>
            </div>

            {/* Direct Official Lines */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                {t('أرقام الهواتف والواتساب المباشرة:', 'Direct Phone & WhatsApp Lines:')}
              </span>

              {/* Number 1: General Academy Line */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{t('رقم الأكاديمية العام (الإدارة والقبول):', 'General Academy & Admissions Line:')}</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400">Main</span>
                </div>
                
                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="text-base font-mono font-bold text-white">
                    {settings.phone}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:${settings.phone.replace(/[^0-9]/g, '')}`}
                      className="px-2.5 py-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-950/40 border border-blue-800/40 rounded-lg flex items-center gap-1 transition-colors"
                      title={t('اتصال هاتفي', 'Call')}
                    >
                      <Phone className="w-3 h-3" />
                      <span>{t('اتصال', 'Call')}</span>
                    </a>
                    <button
                      onClick={openWhatsAppGeneral}
                      className="px-2.5 py-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/40 rounded-lg flex items-center gap-1 transition-colors"
                      title={t('واتساب', 'WhatsApp')}
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>{t('واتساب', 'WhatsApp')}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Number 2: Tech Department Line */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-blue-900/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5" />
                    <span>{t('رقم القسم الخاص بالتكنولوجيا والبرمجة:', 'Direct Technology & Coding Department:')}</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-950/80 text-blue-300">Tech</span>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="text-base font-mono font-bold text-white">
                    {settings.techPhone || '+20 10 31473069'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:${(settings.techPhone || '+201031473069').replace(/[^0-9]/g, '')}`}
                      className="px-2.5 py-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-950/40 border border-blue-800/40 rounded-lg flex items-center gap-1 transition-colors"
                      title={t('اتصال بقسم التكنولوجيا', 'Call Tech')}
                    >
                      <Phone className="w-3 h-3" />
                      <span>{t('اتصال', 'Call')}</span>
                    </a>
                    <button
                      onClick={openWhatsAppTech}
                      className="px-2.5 py-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/40 rounded-lg flex items-center gap-1 transition-colors"
                      title={t('واتساب قسم التكنولوجيا', 'WhatsApp Tech')}
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>{t('واتساب', 'WhatsApp')}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">{t('البريد الإلكتروني الرسمي:', 'Official Email:')}</span>
                  <span className="text-xs font-mono text-white font-semibold">
                    {settings.email || 'info@eptacademy.edu.eg'}
                  </span>
                </div>
              </div>

              {/* Social Channels: Facebook & LinkedIn */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-white block">
                  {t('الصفحات الرسمية المعتمدة على السوشيال ميديا:', 'Official Verified Social Channels:')}
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {/* Facebook */}
                  <a
                    href={settings.social.facebook || 'https://www.facebook.com/profile.php?id=61563151359362'}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-blue-950/30 hover:bg-blue-900/40 border border-blue-800/40 text-blue-300 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">Facebook</span>
                      <span className="text-[10px] text-blue-400">EPT Academy</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={settings.social.linkedin || 'https://www.linkedin.com/company/ept-academy-eg/?skipRedirect=true'}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-blue-950/30 hover:bg-blue-900/40 border border-blue-800/40 text-blue-300 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">LinkedIn</span>
                      <span className="text-[10px] text-blue-400">EPT Official</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {t('أرسل استفسارك أو طلب الزيارة مباشرة', 'Send Your Inquiry or Campus Visit Request')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                  {t(
                    'يتواصل معك أحد منسقي البرامج الأكاديمية خلال ساعات عبر الواتساب أو الهاتف لمساعدتك.',
                    'An admissions advisor will follow up via WhatsApp or phone within hours.'
                  )}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-center space-y-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    {t('تم استلام رسالتك بنجاح!', 'Message Sent Successfully!')}
                  </h4>
                  <p className="text-xs text-emerald-300">
                    {t(
                      'شكرًا لتواصلك مع EPT Academy. سيقوم فريقنا بالتواصل معك عبر الواتساب أو الهاتف المسجل في أقرب وقت.',
                      'Thank you for contacting EPT Academy. Our team will reach out via WhatsApp or phone shortly.'
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t('الاسم الكامل *', 'Full Name *')}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('مثال: سيف الدين فرج', 'e.g. Saif Eldeen')}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t('رقم الهاتف / الواتساب *', 'Phone / WhatsApp *')}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01xxxxxxxxx"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white font-mono focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t('البريد الإلكتروني (اختياري)', 'Email (Optional)')}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t('موضوع الاستفسار', 'Inquiry Subject')}
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder={t('مثال: حجز كورس برمجة بايثون / زيارة المقر', 'e.g. Python Course / Campus Visit')}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t('نص الرسالة أو الاستفسار *', 'Message Details *')}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t(
                        'اكتب أي سؤال بخصوص مواعيد الدورات، المناهج، أو الترتيب لزيارة المقر ومعاينة المعامل...',
                        'Write your questions about track roadmaps, schedule, or arranging a campus visit...'
                      )}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('إرسال الاستفسار الآن', 'Send Inquiry')}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
