import realStudentCodingLab from '../assets/images/real_student_coding_lab_1791457660513.jpg';
import realStudentsLabGroup from '../assets/images/real_students_lab_group_1791457670891.jpg';
import realEnglishLectureHall from '../assets/images/real_english_lecture_hall_1791457694461.jpg';

import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Code2, 
  Layers, 
  Cpu, 
  MonitorSmartphone, 
  FolderGit2, 
  Users2 
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const { t } = useApp();

  const trustPillars = [
    {
      num: '01',
      icon: Code2,
      titleAr: 'التعلم القائم على الممارسة (Practical Learning)',
      titleEn: 'Hands-on Practical Learning',
      descAr: 'لا نعتمد على الإلقاء النظري أو حفظ المصطلحات؛ كل جلسة تدريبية تتضمن تطبيقًا فوريًا وتدريبات برمجية وتصميمية مستمرة.',
      descEn: 'We discard passive lecturing; every session is grounded in immediate execution, live code writing, and iterative drills.'
    },
    {
      num: '02',
      icon: Layers,
      titleAr: 'برامج منظمة بمخرجات واضحة (Structured Programs)',
      titleEn: 'Structured Curricula with Clear Milestones',
      descAr: 'مناهج مقسمة بعناية حسب المراحل ومصممة لنقلك خطوة بخطوة من المفاهيم التأسيسية حتى إتقان المهارة وبناء النماذج.',
      descEn: 'Carefully staged roadmaps designed to guide you progressively from foundational concepts to end-to-end craft mastery.'
    },
    {
      num: '03',
      icon: Cpu,
      titleAr: 'التركيز على التكنولوجيا الحديثة (Technology Focus)',
      titleEn: 'High-Demand Digital & AI Skills',
      descAr: 'مواكبة سريعة لأحدث الأدوات: لغات البرمجة الرائجة، أطر العمل الحديثة، والتطبيقات المدعومة بالذكاء الاصطناعي لسوق اليوم.',
      descEn: 'Up-to-date tracks incorporating modern coding frameworks, production tools, and AI workflows relevant to today.'
    },
    {
      num: '04',
      icon: MonitorSmartphone,
      titleAr: 'مرونة التعلم حضوريًا وعن بُعد (Flexible Learning)',
      titleEn: 'Flexible In-Person & Live Online Modes',
      descAr: 'معامل مجهزة في مقرنا بسوهاج مع إمكانية الانضمام لقاعات أونلاين تفاعلية للطلاب من سائر المحافظات المصرية.',
      descEn: 'Modern physical labs in Sohag alongside live interactive virtual cohorts for learners joining from any Egyptian governorate.'
    },
    {
      num: '05',
      icon: FolderGit2,
      titleAr: 'مشاريع حقيقية لسابقة أعمالك (Real Projects)',
      titleEn: 'Verified Real Projects for Your Portfolio',
      descAr: 'تتخرج من برامجنا وأنت تمتلك مشروعات وتطبيقات فعلية منشورة يمكنك تقديمها لأصحاب العمل والعملاء لإثبات كفاءتك.',
      descEn: 'You finish our tracks with tangible, deployed projects that stand as empirical proof of ability when pitching clients or employers.'
    },
    {
      num: '06',
      icon: Users2,
      titleAr: 'بيئة داعمة ومتابعة مستمرة (Supportive Environment)',
      titleEn: 'Mentored Guidance & Peer Support',
      descAr: 'قنوات تواصل مباشرة مع المدربين لمراجعة المهام، تقديم التوجيه الفردي، وحل التحديات التي تواجه كل متعلم خطوة بخطوة.',
      descEn: 'Direct instructor feedback channels to critique code, troubleshoot bottlenecks, and sustain continuous learner momentum.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-start mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
            <span>{t('معايير الجودة والأداء', 'Quality & Commitment')}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{t('فلسفة التعليم في EPT', 'The EPT Educational Philosophy')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('لماذا يختار الطلاب والمهتمون EPT Academy؟', 'Why Learners & Families Trust EPT Academy')}
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {t(
              'لا نبيع مجرد دورات تدريبية معلبة، بل نلتزم بمسار تعليمي متكامل يبني مهارة حقيقية قابلة للتطبيق في الحياة العملية والدراسة وسوق العمل.',
              'We do not sell pre-packaged video libraries. We operate a structured learning journey built around real, verifiable capabilities.'
            )}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all text-start flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {t(item.titleAr, item.titleEn)}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {t(item.descAr, item.descEn)}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{t('معيار أساسي في جميع البرامج', 'Standard across all cohorts')}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Real Facility Proof Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-amber-950/20 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-start">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3 rtl:space-x-reverse overflow-hidden shrink-0">
              <img
                src=realStudentCodingLab
                alt="EPT Coding Lab"
                className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-950 object-cover"
              />
              <img
                src=realStudentsLabGroup
                alt="EPT Student Cohort"
                className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-950 object-cover"
              />
              <img
                src=realEnglishLectureHall
                alt="EPT English Hall"
                className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-950 object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                {t('واقع ملموس ومعامل حقيقية — لسنا مجرد وعود أو تصاميم افتراضية', 'Tangible Reality & Genuine Facilities — Not Just Promises')}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {t(
                  'صور حقيقية موثقة من داخل قاعات ومعامل الأكاديمية بسوهاج وأفواجنا التدريبية التفاعلية.',
                  'Authentic photographs from inside our training halls, coding labs, and active cohorts in Sohag.'
                )}
              </p>
            </div>
          </div>

          <a
            href="#tour"
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow-md shadow-amber-400/20"
          >
            {t('شاهد جولة القاعات 3D ←', 'View 3D Tour →')}
          </a>
        </div>

      </div>
    </section>
  );
};
