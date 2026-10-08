import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EPTLogo } from '../EPTLogo';
import { 
  Course, 
  Instructor, 
  RegistrationStatus, 
  ReviewStatus, 
  BlogPost, 
  EventItem, 
  StudentProject, 
  FAQItem 
} from '../../types';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  ClipboardList, 
  Star, 
  MessageSquare, 
  Calendar, 
  FolderGit2, 
  HelpCircle, 
  Mail, 
  Settings, 
  LogOut, 
  X, 
  Plus, 
  Trash2, 
  Edit, 
  CheckCircle, 
  XCircle, 
  Eye, 
  EyeOff, 
  RotateCcw,
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';

type AdminTab = 
  | 'overview' 
  | 'courses' 
  | 'registrations' 
  | 'reviews' 
  | 'instructors' 
  | 'projects' 
  | 'events' 
  | 'blog' 
  | 'faqs' 
  | 'messages' 
  | 'settings';

export const AdminDashboard: React.FC = () => {
  const { 
    isAdminOpen, 
    setIsAdminOpen, 
    currentUser, 
    loginAsAdmin, 
    logout, 
    courses, 
    addCourse, 
    updateCourse, 
    deleteCourse,
    registrations, 
    updateRegistrationStatus, 
    deleteRegistration,
    reviews, 
    updateReviewStatus, 
    deleteReview,
    instructors, 
    addInstructor, 
    updateInstructor, 
    deleteInstructor,
    studentProjects, 
    addStudentProject, 
    updateStudentProject, 
    deleteStudentProject,
    events, 
    addEvent, 
    updateEvent, 
    deleteEvent,
    blogPosts, 
    addBlogPost, 
    updateBlogPost, 
    deleteBlogPost,
    faqs, 
    addFAQ, 
    updateFAQ, 
    deleteFAQ,
    contactMessages, 
    markMessageRead, 
    deleteContactMessage,
    settings, 
    updateSettings,
    clearDemoData,
    resetDemoData,
    language, 
    t 
  } = useApp();

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  
  // Registration filter state
  const [regStatusFilter, setRegStatusFilter] = useState<RegistrationStatus | 'all'>('all');
  
  // Course modal state
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);

  // Settings form state
  const [settingsForm, setSettingsForm] = useState(settings);

  // Quick state for simple course form
  const [courseForm, setCourseForm] = useState({
    titleAr: '',
    titleEn: '',
    category: 'programming' as Course['category'],
    shortDescAr: '',
    shortDescEn: '',
    durationWeeks: 8,
    sessionsCount: 16,
    sessionHours: 2,
    deliveryMethod: 'both' as Course['deliveryMethod'],
    priceEgp: 1500,
    showPrice: true,
  });

  if (!isAdminOpen) return null;

  // Overview metrics
  const totalRegistrations = registrations.length;
  const newRegistrations = registrations.filter(r => r.status === 'new').length;
  const pendingReviews = reviews.filter(r => r.status === 'pending').length;
  const publishedReviews = reviews.filter(r => r.status === 'approved').length;
  const unreadMessages = contactMessages.filter(m => !m.read).length;

  const handleSaveCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseForm.titleAr) return;

    if (editingCourse) {
      updateCourse(editingCourse.id, {
        titleAr: courseForm.titleAr,
        titleEn: courseForm.titleEn || courseForm.titleAr,
        category: courseForm.category,
        shortDescAr: courseForm.shortDescAr,
        shortDescEn: courseForm.shortDescEn || courseForm.shortDescAr,
        durationWeeks: Number(courseForm.durationWeeks),
        sessionsCount: Number(courseForm.sessionsCount),
        sessionHours: Number(courseForm.sessionHours),
        deliveryMethod: courseForm.deliveryMethod,
        priceEgp: Number(courseForm.priceEgp),
        showPrice: courseForm.showPrice,
      });
    } else {
      addCourse({
        titleAr: courseForm.titleAr,
        titleEn: courseForm.titleEn || courseForm.titleAr,
        category: courseForm.category,
        shortDescAr: courseForm.shortDescAr,
        shortDescEn: courseForm.shortDescEn || courseForm.shortDescAr,
        fullDescAr: courseForm.shortDescAr,
        fullDescEn: courseForm.shortDescEn || courseForm.shortDescAr,
        audienceAr: 'الطلاب والخريجون والمهتمون بالتكنولوجيا',
        audienceEn: 'Students and tech enthusiasts',
        outcomesAr: ['إتقان المهارات العملية', 'بناء مشروع التخرج'],
        outcomesEn: ['Master practical skills', 'Build capstone project'],
        durationWeeks: Number(courseForm.durationWeeks),
        sessionsCount: Number(courseForm.sessionsCount),
        sessionHours: Number(courseForm.sessionHours),
        deliveryMethod: courseForm.deliveryMethod,
        instructorId: instructors[0]?.id || 'inst-1',
        prerequisitesAr: 'معرفة أساسية باستخدام الحاسوب',
        prerequisitesEn: 'Basic computer literacy',
        projectsAr: ['مشروع عملي تطبيقي متكامل'],
        projectsEn: ['Integrated practical project'],
        skillsGained: ['Practical Skills', 'Problem Solving'],
        faqs: [],
        priceEgp: Number(courseForm.priceEgp),
        showPrice: courseForm.showPrice,
        discountPercentage: 0,
        featured: true,
        image: '/src/assets/images/course_programming_lab_1791456247667.jpg',
        isDemo: false,
      });
    }

    setIsCourseModalOpen(false);
    setEditingCourse(null);
  };

  const handleOpenEditCourse = (course: Course) => {
    setEditingCourse(course);
    setCourseForm({
      titleAr: course.titleAr,
      titleEn: course.titleEn,
      category: course.category,
      shortDescAr: course.shortDescAr,
      shortDescEn: course.shortDescEn,
      durationWeeks: course.durationWeeks,
      sessionsCount: course.sessionsCount,
      sessionHours: course.sessionHours,
      deliveryMethod: course.deliveryMethod,
      priceEgp: course.priceEgp || 0,
      showPrice: course.showPrice,
    });
    setIsCourseModalOpen(true);
  };

  const handleOpenNewCourse = () => {
    setEditingCourse(null);
    setCourseForm({
      titleAr: '',
      titleEn: '',
      category: 'programming',
      shortDescAr: '',
      shortDescEn: '',
      durationWeeks: 8,
      sessionsCount: 16,
      sessionHours: 2,
      deliveryMethod: 'both',
      priceEgp: 1500,
      showPrice: true,
    });
    setIsCourseModalOpen(true);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    alert(t('تم حفظ إعدادات الأكاديمية بنجاح!', 'Settings updated successfully!'));
  };

  return (
    <div className="fixed inset-0 z-50 flex bg-slate-950/95 backdrop-blur-md overflow-hidden text-start">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 border-e border-slate-800 flex flex-col justify-between shrink-0 h-full">
        <div className="p-4 space-y-6 overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <EPTLogo variant="icon" size="sm" />
              <div>
                <h2 className="text-sm font-bold text-white leading-none">EPT Admin</h2>
                <span className="text-[10px] text-slate-400">Control Management</span>
              </div>
            </div>
            <button
              onClick={() => setIsAdminOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'overview' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{t('نظرة عامة (Overview)', 'Overview')}</span>
            </button>

            <button
              onClick={() => setActiveTab('registrations')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'registrations' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ClipboardList className="w-4 h-4" />
                <span>{t('طلبات التسجيل', 'Registrations')}</span>
              </div>
              {newRegistrations > 0 && (
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-400 text-slate-950 font-bold">
                  {newRegistrations}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('courses')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'courses' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('البرامج التدريبية', 'Courses')}</span>
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'reviews' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4" />
                <span>{t('مراجعات الطلاب', 'Reviews Moderation')}</span>
              </div>
              {pendingReviews > 0 && (
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-500 text-white font-bold">
                  {pendingReviews}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('instructors')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'instructors' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>{t('المدربون', 'Instructors')}</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'projects' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>{t('مشاريع الطلاب', 'Student Projects')}</span>
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'events' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{t('الورش والفعاليات', 'Events')}</span>
            </button>

            <button
              onClick={() => setActiveTab('blog')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'blog' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t('المدونة والمقالات', 'Blog Posts')}</span>
            </button>

            <button
              onClick={() => setActiveTab('faqs')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'faqs' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>{t('الأسئلة الشائعة', 'FAQs')}</span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'messages' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4" />
                <span>{t('رسائل التواصل', 'Messages')}</span>
              </div>
              {unreadMessages > 0 && (
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-500 text-white font-bold">
                  {unreadMessages}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'settings' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>{t('إعدادات الأكاديمية', 'Academy Settings')}</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <div className="text-[11px] text-slate-400">
            {t('الدخول باسم:', 'Logged in as:')} <strong className="text-white block">{currentUser.name}</strong>
          </div>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="w-full py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>{t('العودة للموقع الرئيسي', 'Back to Public Site')}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-slate-950">
        
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800 px-6 flex items-center justify-between shrink-0 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <h1 className="text-base font-bold text-white capitalize">
              {activeTab}
            </h1>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              title="Close CMS"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400">{t('إجمالي طلبات التسجيل', 'Total Registrations')}</span>
                  <div className="text-2xl font-bold text-white font-mono">{totalRegistrations}</div>
                  <span className="text-[11px] text-amber-400 block font-mono">{newRegistrations} {t('جديدة تحتاج اتصال', 'new requests')}</span>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400">{t('المراجعات المعلقة (Pending)', 'Pending Reviews')}</span>
                  <div className="text-2xl font-bold text-white font-mono">{pendingReviews}</div>
                  <span className="text-[11px] text-emerald-400 block font-mono">{publishedReviews} {t('معتمدة ومنشورة', 'published')}</span>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400">{t('البرامج التدريبية', 'Active Courses')}</span>
                  <div className="text-2xl font-bold text-white font-mono">{courses.length}</div>
                  <span className="text-[11px] text-slate-400 block">{instructors.length} {t('مدربين معتمدين', 'mentors')}</span>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400">{t('رسائل التواصل الواردة', 'Contact Inquiries')}</span>
                  <div className="text-2xl font-bold text-white font-mono">{contactMessages.length}</div>
                  <span className="text-[11px] text-blue-400 block font-mono">{unreadMessages} {t('غير مقروءة', 'unread')}</span>
                </div>

              </div>

              {/* Demo Data Management Card (Prompt #50: delete demo data capability) */}
              <div className="p-6 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-amber-300">
                      {t('إدارة البيانات التجريبية (Demo Data Management)', 'Demo Data Controls')}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {t(
                        'وفق معايير EPT Academy الصارمة: تتيح لك هذه الأداة حذف جميع البيانات التجريبية والبدء ببيانات حقيقية 100% فقط دون أي أرقام وهمية.',
                        'In accordance with prompt trust rules: purge all sample/demo items and manage solely genuine student/course data.'
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={clearDemoData}
                      className="px-3.5 py-2 text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{t('حذف البيانات التجريبية الآن', 'Wipe Demo Data')}</span>
                    </button>

                    <button
                      onClick={resetDemoData}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t('استعادة البيانات النموذجية', 'Reset Demo')}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Registration Requests Table */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">
                    {t('أحدث طلبات التسجيل الواردة', 'Recent Admission Requests')}
                  </h3>
                  <button
                    onClick={() => setActiveTab('registrations')}
                    className="text-xs text-blue-400 hover:underline"
                  >
                    {t('عرض الكل', 'View All')}
                  </button>
                </div>

                <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900">
                  <table className="w-full text-xs text-slate-300 text-start">
                    <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 text-start">
                      <tr>
                        <th className="p-3 text-start">{t('اسم الطالب', 'Student')}</th>
                        <th className="p-3 text-start">{t('الهاتف', 'Phone')}</th>
                        <th className="p-3 text-start">{t('المحافظة', 'Gov')}</th>
                        <th className="p-3 text-start">{t('البرنامج', 'Course')}</th>
                        <th className="p-3 text-start">{t('الحالة', 'Status')}</th>
                        <th className="p-3 text-start">{t('إجراء', 'Action')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {registrations.slice(0, 5).map((reg) => (
                        <tr key={reg.id} className="hover:bg-slate-850">
                          <td className="p-3 font-semibold text-white">{reg.studentName}</td>
                          <td className="p-3 font-mono">{reg.phone}</td>
                          <td className="p-3">{reg.governorate}</td>
                          <td className="p-3 text-blue-400">{reg.courseTitleAr || 'Course'}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                              reg.status === 'new' ? 'bg-amber-500/20 text-amber-300' :
                              reg.status === 'contacted' ? 'bg-blue-500/20 text-blue-300' :
                              reg.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-300' :
                              'bg-slate-800 text-slate-400'
                            }`}>
                              {reg.status}
                            </span>
                          </td>
                          <td className="p-3">
                            <button
                              onClick={() => {
                                updateRegistrationStatus(reg.id, 'contacted');
                              }}
                              className="text-blue-400 hover:underline"
                            >
                              {t('تم الاتصال', 'Mark Contacted')}
                            </button>
                          </td>
                        </tr>
                      ))}
                      {registrations.length === 0 && (
                        <tr>
                          <td colSpan={6} className="p-6 text-center text-slate-500">
                            {t('لا توجد طلبات تسجيل مسجلة حتى الآن.', 'No registrations yet.')}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: COURSES CRUD */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t('إدارة البرامج والمناهج التدريبية', 'Manage Training Programs')}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t('إضافة، تعديل، إخفاء السعر، وتحديد طريقة الحضور (Online / Sohag).', 'Configure courses, syllabus details, price visibility, and delivery modes.')}
                  </p>
                </div>

                <button
                  onClick={handleOpenNewCourse}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>{t('إضافة برنامج جديد', 'Add Course')}</span>
                </button>
              </div>

              {/* Courses Table */}
              <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900">
                <table className="w-full text-xs text-slate-300 text-start">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 text-start">
                    <tr>
                      <th className="p-3 text-start">{t('البرنامج', 'Course Title')}</th>
                      <th className="p-3 text-start">{t('التصنيف', 'Category')}</th>
                      <th className="p-3 text-start">{t('المدة', 'Duration')}</th>
                      <th className="p-3 text-start">{t('طريقة الحضور', 'Delivery')}</th>
                      <th className="p-3 text-start">{t('السعر', 'Price')}</th>
                      <th className="p-3 text-start">{t('إجراءات', 'Actions')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {courses.map((course) => (
                      <tr key={course.id} className="hover:bg-slate-800/40">
                        <td className="p-3 font-semibold text-white">
                          <div>{course.titleAr}</div>
                          <span className="text-[10px] text-slate-500">{course.titleEn}</span>
                        </td>
                        <td className="p-3 font-mono">{course.category}</td>
                        <td className="p-3">{course.durationWeeks} {t('أسابيع', 'weeks')}</td>
                        <td className="p-3 text-blue-400">{course.deliveryMethod}</td>
                        <td className="p-3 font-mono">
                          {course.showPrice ? `${course.priceEgp} EGP` : t('مخفي', 'Hidden')}
                        </td>
                        <td className="p-3 flex items-center gap-2">
                          <button
                            onClick={() => handleOpenEditCourse(course)}
                            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteCourse(course.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-400 rounded hover:bg-slate-800"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: REGISTRATIONS MANAGEMENT */}
          {activeTab === 'registrations' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t('إدارة طلبات الالتحاق بالدفعات', 'Enrollment Requests Manager')}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t('متابعة كل طالب، تغيير الحالة، والتواصل لتأكيد الحجز.', 'Track prospective students, update contact status, and verify placements.')}
                  </p>
                </div>

                {/* Filter by Status */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">{t('تصفية حسب الحالة:', 'Status:')}</span>
                  <select
                    value={regStatusFilter}
                    onChange={(e) => setRegStatusFilter(e.target.value as any)}
                    className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-white"
                  >
                    <option value="all">{t('الكل', 'All')}</option>
                    <option value="new">{t('جديد (New)', 'New')}</option>
                    <option value="contacted">{t('تم التواصل (Contacted)', 'Contacted')}</option>
                    <option value="confirmed">{t('مؤكد الحجز (Confirmed)', 'Confirmed')}</option>
                    <option value="rejected">{t('ملغي (Rejected)', 'Rejected')}</option>
                    <option value="completed">{t('أتم الدورة (Completed)', 'Completed')}</option>
                  </select>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900">
                <table className="w-full text-xs text-slate-300 text-start">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 text-start">
                    <tr>
                      <th className="p-3 text-start">{t('الطالب', 'Student')}</th>
                      <th className="p-3 text-start">{t('الهاتف / واتساب', 'Phone')}</th>
                      <th className="p-3 text-start">{t('المحافظة', 'Gov')}</th>
                      <th className="p-3 text-start">{t('البرنامج', 'Course')}</th>
                      <th className="p-3 text-start">{t('طريقة الحضور', 'Mode')}</th>
                      <th className="p-3 text-start">{t('المستوى/العمر', 'Level/Age')}</th>
                      <th className="p-3 text-start">{t('الحالة', 'Status')}</th>
                      <th className="p-3 text-start">{t('إجراءات', 'Actions')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {registrations
                      .filter(r => regStatusFilter === 'all' || r.status === regStatusFilter)
                      .map((reg) => (
                        <tr key={reg.id} className="hover:bg-slate-800/40">
                          <td className="p-3">
                            <span className="font-bold text-white block">{reg.studentName}</span>
                            {reg.email && <span className="text-[11px] text-slate-400">{reg.email}</span>}
                          </td>
                          <td className="p-3 font-mono">
                            <a 
                              href={`https://wa.me/${reg.phone.replace(/[^0-9]/g, '')}`} 
                              target="_blank" 
                              rel="noreferrer"
                              className="text-emerald-400 hover:underline"
                            >
                              {reg.phone}
                            </a>
                          </td>
                          <td className="p-3">{reg.governorate}</td>
                          <td className="p-3 text-blue-400">{reg.courseTitleAr || reg.courseId}</td>
                          <td className="p-3">{reg.deliveryMode}</td>
                          <td className="p-3">{reg.ageOrStage}</td>
                          <td className="p-3">
                            <select
                              value={reg.status}
                              onChange={(e) => updateRegistrationStatus(reg.id, e.target.value as RegistrationStatus)}
                              className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] text-white"
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="rejected">Rejected</option>
                              <option value="completed">Completed</option>
                            </select>
                          </td>
                          <td className="p-3">
                            <button
                              onClick={() => deleteRegistration(reg.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-400 rounded"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    {registrations.length === 0 && (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-slate-500">
                          {t('لا توجد طلبات تسجيل بعد.', 'No enrollment requests.')}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: REVIEWS MODERATION (Prompt #17) */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-white">
                  {t('نظام مراجعة وتقييم تجارب الطلاب (Reviews Moderation)', 'Student Reviews Moderation')}
                </h3>
                <p className="text-xs text-slate-400">
                  {t(
                    'التقييمات الجديدة تدخل بحالة Pending لمنع العشوائية. يمكنك اعتمادها (Approve) لتظهر فورًا، أو رفضها، أو إخفائها.',
                    'New reviews arrive in Pending state. You can Approve, Hide, Reject, or Delete them.'
                  )}
                </p>
              </div>

              <div className="space-y-3">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-white">{rev.studentName}</span>
                        <span className="text-slate-500">·</span>
                        <span className="text-slate-400">{rev.governorate}</span>
                        <span className="text-slate-500">·</span>
                        <span className="text-amber-400 font-mono">{rev.rating} ★</span>
                        <span className="text-slate-500">·</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono ${
                          rev.status === 'approved' ? 'bg-emerald-500/20 text-emerald-300' :
                          rev.status === 'pending' ? 'bg-amber-500/20 text-amber-300' :
                          'bg-rose-500/20 text-rose-300'
                        }`}>
                          {rev.status}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200">
                        "{rev.comment}"
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {rev.status !== 'approved' && (
                        <button
                          onClick={() => updateReviewStatus(rev.id, 'approved')}
                          className="px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-lg hover:bg-emerald-900/40"
                        >
                          {t('اعتماد ونشر', 'Approve')}
                        </button>
                      )}
                      {rev.status !== 'hidden' && (
                        <button
                          onClick={() => updateReviewStatus(rev.id, 'hidden')}
                          className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 rounded-lg"
                        >
                          {t('إخفاء', 'Hide')}
                        </button>
                      )}
                      <button
                        onClick={() => deleteReview(rev.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400 rounded hover:bg-slate-800"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INSTRUCTORS */}
          {activeTab === 'instructors' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t('إدارة بيانات المدربين', 'Manage Instructors')}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t('بيانات حقيقية للمدربين دون استخدام صور AI لأشخاص.', 'Manage instructor profiles, biographies, and assigned courses.')}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {instructors.map((inst) => (
                  <div key={inst.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-blue-400 text-sm">
                          {inst.nameAr.slice(0, 2)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{inst.nameAr}</h4>
                          <span className="text-[11px] text-slate-400">{inst.roleAr}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteInstructor(inst.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-300">{inst.bioAr}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: SETTINGS (Prompt #20 & #24) */}
          {activeTab === 'settings' && (
            <form onSubmit={handleSaveSettings} className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-sm font-bold text-white">
                  {t('إعدادات الهوية والتواصل في الأكاديمية', 'Academy Identity & Contact Settings')}
                </h3>
                <p className="text-xs text-slate-400">
                  {t('جميع الأرقام والعناوين والشعارات قابلة للإدارة من هنا لتعديلها بحرية.', 'Configure WhatsApp, phone, email, headquarters address, and SEO tags.')}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                
                {/* Names & Slogans */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t('اسم الأكاديمية (عربي)', 'Name (Ar)')}
                    </label>
                    <input
                      type="text"
                      value={settingsForm.nameAr}
                      onChange={(e) => setSettingsForm({ ...settingsForm, nameAr: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t('الاسم بالإنجليزية', 'Name (En)')}
                    </label>
                    <input
                      type="text"
                      value={settingsForm.nameEn}
                      onChange={(e) => setSettingsForm({ ...settingsForm, nameEn: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t('الشعار الرئيسي (Slogan)', 'Main Slogan')}
                  </label>
                  <input
                    type="text"
                    value={settingsForm.sloganAr}
                    onChange={(e) => setSettingsForm({ ...settingsForm, sloganAr: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
                  />
                </div>

                {/* Contact Channels */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t('رقم واتساب الرسمي', 'WhatsApp Number')}
                    </label>
                    <input
                      type="text"
                      value={settingsForm.whatsapp}
                      onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t('رقم الهاتف للاتصال', 'Phone Line')}
                    </label>
                    <input
                      type="text"
                      value={settingsForm.phone}
                      onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t('البريد الرسمي', 'Official Email')}
                    </label>
                    <input
                      type="email"
                      value={settingsForm.email}
                      onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white font-mono"
                    />
                  </div>
                </div>

                {/* Headquarters */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t('الموقع الجغرافي الأساسي للمقر', 'Primary Headquarters Location')}
                  </label>
                  <input
                    type="text"
                    value={settingsForm.mainLocationAr}
                    onChange={(e) => setSettingsForm({ ...settingsForm, mainLocationAr: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                >
                  {t('حفظ التعديلات في النظام', 'Save Settings Changes')}
                </button>
              </div>
            </form>
          )}

          {/* TAB 7: MESSAGES INBOX */}
          {activeTab === 'messages' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white">
                  {t('صندوق الرسائل والاستفسارات الواردة', 'Contact Inquiries Inbox')}
                </h3>
              </div>

              <div className="space-y-3">
                {contactMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded-xl border transition-all ${
                      msg.read ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-900 border-blue-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-white">{msg.name}</span>
                        <span className="text-slate-500">·</span>
                        <span className="font-mono text-emerald-400">{msg.phone}</span>
                        {msg.email && (
                          <>
                            <span className="text-slate-500">·</span>
                            <span className="text-slate-400">{msg.email}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {!msg.read && (
                          <button
                            onClick={() => markMessageRead(msg.id)}
                            className="text-xs text-blue-400 hover:underline"
                          >
                            {t('تعليم كمقروء', 'Mark Read')}
                          </button>
                        )}
                        <button
                          onClick={() => deleteContactMessage(msg.id)}
                          className="p-1 text-slate-400 hover:text-rose-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-amber-300 mb-1">{msg.subject}</div>
                    <p className="text-xs text-slate-300">{msg.message}</p>
                  </div>
                ))}
                {contactMessages.length === 0 && (
                  <div className="p-8 text-center text-xs text-slate-500 rounded-xl bg-slate-900 border border-slate-800">
                    {t('لا توجد رسائل واردة حاليًا.', 'No incoming messages.')}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </main>

      {/* Modal: Course Add/Edit */}
      {isCourseModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 text-start">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white">
                {editingCourse ? t('تعديل البرنامج التدريبي', 'Edit Course') : t('إضافة برنامج تدريبي جديد', 'New Course')}
              </h3>
              <button onClick={() => setIsCourseModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCourse} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t('اسم البرنامج بالعربية *', 'Title (Ar) *')}</label>
                <input
                  type="text"
                  required
                  value={courseForm.titleAr}
                  onChange={(e) => setCourseForm({ ...courseForm, titleAr: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t('اسم البرنامج بالإنجليزية', 'Title (En)')}</label>
                <input
                  type="text"
                  value={courseForm.titleEn}
                  onChange={(e) => setCourseForm({ ...courseForm, titleEn: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">{t('التصنيف', 'Category')}</label>
                  <select
                    value={courseForm.category}
                    onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                  >
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="digital-skills">Digital Skills</option>
                    <option value="design-business">Design + Business</option>
                    <option value="english">English Plus</option>
                    <option value="technology">Technology & AI</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">{t('طريقة الحضور', 'Delivery')}</label>
                  <select
                    value={courseForm.deliveryMethod}
                    onChange={(e) => setCourseForm({ ...courseForm, deliveryMethod: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                  >
                    <option value="both">Both (Sohag & Online)</option>
                    <option value="online">Online Only</option>
                    <option value="in-person">In-Person Sohag Only</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">{t('المدة (أسابيع)', 'Weeks')}</label>
                  <input
                    type="number"
                    value={courseForm.durationWeeks}
                    onChange={(e) => setCourseForm({ ...courseForm, durationWeeks: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">{t('الجلسات', 'Sessions')}</label>
                  <input
                    type="number"
                    value={courseForm.sessionsCount}
                    onChange={(e) => setCourseForm({ ...courseForm, sessionsCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">{t('السعر (EGP)', 'Price')}</label>
                  <input
                    type="number"
                    value={courseForm.priceEgp}
                    onChange={(e) => setCourseForm({ ...courseForm, priceEgp: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="showPriceCheck"
                  checked={courseForm.showPrice}
                  onChange={(e) => setCourseForm({ ...courseForm, showPrice: e.target.checked })}
                  className="rounded text-amber-500 bg-slate-950 border-slate-800"
                />
                <label htmlFor="showPriceCheck" className="text-slate-300">
                  {t('إظهار السعر للعامة في الموقع', 'Show price publicly on website')}
                </label>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t('الوصف المختصر', 'Short Description')}</label>
                <textarea
                  rows={2}
                  value={courseForm.shortDescAr}
                  onChange={(e) => setCourseForm({ ...courseForm, shortDescAr: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsCourseModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg"
                >
                  {t('إلغاء', 'Cancel')}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-400 text-slate-950 font-bold rounded-lg"
                >
                  {t('حفظ البرنامج', 'Save Course')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
