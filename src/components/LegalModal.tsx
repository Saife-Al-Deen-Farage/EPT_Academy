import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ShieldAlert, FileText } from 'lucide-react';

export const LegalModal: React.FC = () => {
  const { legalModalType, setLegalModalType, language, t } = useApp();

  if (!legalModalType) return null;

  const getContent = () => {
    switch (legalModalType) {
      case 'privacy':
        return {
          titleAr: 'سياسة الخصوصية وحماية البيانات (Privacy Policy)',
          titleEn: 'Privacy & Data Protection Policy',
          bodyAr: `تلتزم أكاديمية EPT بحماية خصوصية الطلاب والزوار وأولياء الأمور.

1. جمع المعلومات:
نقوم بجمع البيانات الشخصية الأساسية مثل (الاسم، رقم الهاتف، البريد الإلكتروني، المحافظة) فقط عند تقديم طلب التسجيل أو التواصل معنا، وذلك لغرض التنسيق الأكاديمي والمتابعة.

2. استخدام البيانات:
لا نقوم ببيع أو تأجير أو مشاركة بياناتك الشخصية مع أي طرف ثالث لأغراض تسويقية تجارية. يتم استخدام البيانات حصريًا للتواصل بشأن الدفعات التدريبية ومتابعة المهام.

3. سرية مشاريع الطلاب:
يحتفظ الطالب بحقوق ملكية مشاريعه البرمجية والتصميمية التي ينجزها أثناء التدريب، ولا يتم عرض أي مشروع في المعرض العام إلا بعد موافقة الطالب أو ولي أمره.

[إشعار قانوني: هذا نموذج استرشادي قابل للتحديث من لوحة الإدارة ويخضع للمراجعة القانونية الدورية].`,
          bodyEn: `EPT Academy is committed to safeguarding personal information of students and parents. Information gathered via admission forms is used exclusively for academic coordination and is never rented or sold to third parties.`,
        };
      case 'terms':
        return {
          titleAr: 'الشروط والأحكام العامة (Terms & Conditions)',
          titleEn: 'Terms and Conditions',
          bodyAr: `شروط الالتحاق والتدريب في EPT Academy:

1. الحضور والالتزام:
يتطلب إتقان المهارات في أكاديميتنا الالتزام بنسبة حضور لا تقل عن 80% من الجلسات المباشرة، وتسليم المهام والمشاريع المرحلية في مواعيدها المحددة.

2. حقوق الملكية الفكرية للمواد:
جميع المناهج والمواد التدريبية المكتوبة والأكواد والنماذج المقدمة في المعامل أو القاعات الافتراضية هي ملك للأكاديمية والمدربين، وتُمنح للمتدرب للاستخدام التعليمي الشخصي فقط.

3. بيئة التعلم الإيجابية:
تلتزم الأكاديمية بتوفير بيئة تعليمية آمنة ومحترمة سواء داخل المعامل بسوهاج أو في قاعات النقاش الافتراضية، ويُحظر أي سلوك يسيء للزملاء أو المدربين.

[إشعار قانوني: نموذج استرشادي يخضع للمراجعة والتحديث الإداري].`,
          bodyEn: `Registration terms require 80% minimum attendance and submission of capstone milestones. Training materials are proprietary and intended for personal educational use.`,
        };
      case 'refund':
        return {
          titleAr: 'سياسة الاسترداد وإلغاء التسجيل (Refund Policy)',
          titleEn: 'Refund & Cancellation Policy',
          bodyAr: `سياسة استرداد الرسوم التدريبية:

1. قبل بدء الدفعة:
يحق للمتدرب إلغاء التسجيل واسترداد الرسوم كاملة أو تحويلها لدفعة قادمة بشرط إخطار إدارة الأكاديمية قبل موعد الجلسة الافتتاحية بـ 48 ساعة على الأقل.

2. بعد حضور الجلسة الأولى:
في حال وجد المتدرب بعد حضور الجلسة الأولى أن المحتوى لا يناسب تطلعاته، يمكنه تقديم طلب استرداد خلال 24 ساعة من الجلسة الأولى مع خصم الرسوم الإدارية فقط.

3. بعد الجلسة الثانية:
لا يمكن استرداد الرسوم بعد بدء الجلسة التدريبية الثانية نظرًا لحجز المقعد وتخصيص موارد المعمل ومتابعة المدرب، ولكن يمكن ترحيل المقعد لدفعة مستقبلية بعذر مقبول.

[إشعار قانوني: نموذج تنظيمي خاضع للوائح الأكاديمية والاتفاقات الفردية قبل الدفع النهائي].`,
          bodyEn: `Full refund is eligible up to 48 hours prior to cohort kickoff. After session 1, partial refund applies. Seat postponements can be arranged with coordinator approval.`,
        };
    }
  };

  const { titleAr, titleEn, bodyAr, bodyEn } = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-start animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold text-white">
              {t(titleAr, titleEn)}
            </h3>
          </div>
          <button
            onClick={() => setLegalModalType(null)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-4">
          <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2 leading-relaxed">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
            <span>
              {t(
                'تنويه شفاف: هذا نص تنظيمي عام قابل للتعديل والإدارة من لوحة التحكم، ويخضع للمراجعة القانونية المعتمدة وفق اللوائح المصرية المعمول بها.',
                'Legal Notice: This is an administrative template subject to formal review and custom governance in accordance with applicable Egyptian regulations.'
              )}
            </span>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-normal">
            {t(bodyAr, bodyEn)}
          </div>
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => setLegalModalType(null)}
            className="px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
          >
            {t('فهمت ذلك', 'I Understand')}
          </button>
        </div>
      </div>
    </div>
  );
};
