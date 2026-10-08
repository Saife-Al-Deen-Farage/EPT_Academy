import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Language, 
  Course, 
  Instructor, 
  RegistrationRequest, 
  Review, 
  BlogPost, 
  Comment, 
  EventItem, 
  StudentProject, 
  FAQItem, 
  ContactMessage, 
  AcademySettings, 
  UserSession,
  RegistrationStatus,
  ReviewStatus
} from '../types';
import { 
  INITIAL_SETTINGS, 
  INITIAL_COURSES, 
  INITIAL_INSTRUCTORS, 
  INITIAL_REVIEWS, 
  INITIAL_BLOG_POSTS, 
  INITIAL_EVENTS, 
  INITIAL_STUDENT_PROJECTS, 
  INITIAL_FAQS 
} from '../data/initialData';

interface AppContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (ar: string, en: string) => string;
  
  // Data
  settings: AcademySettings;
  updateSettings: (newSettings: Partial<AcademySettings>) => void;
  
  courses: Course[];
  addCourse: (course: Omit<Course, 'id'>) => void;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  
  instructors: Instructor[];
  addInstructor: (instructor: Omit<Instructor, 'id'>) => void;
  updateInstructor: (id: string, instructor: Partial<Instructor>) => void;
  deleteInstructor: (id: string) => void;
  
  registrations: RegistrationRequest[];
  addRegistration: (data: Omit<RegistrationRequest, 'id' | 'createdAt' | 'status'>) => { success: boolean; message: string };
  updateRegistrationStatus: (id: string, status: RegistrationStatus) => void;
  deleteRegistration: (id: string) => void;
  
  reviews: Review[];
  addReview: (data: Omit<Review, 'id' | 'createdAt' | 'status'>) => { success: boolean; message: string };
  updateReviewStatus: (id: string, status: ReviewStatus) => void;
  deleteReview: (id: string) => void;
  
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  
  comments: Comment[];
  addComment: (data: Omit<Comment, 'id' | 'createdAt' | 'status'>) => void;
  deleteComment: (id: string) => void;
  
  events: EventItem[];
  addEvent: (item: Omit<EventItem, 'id'>) => void;
  updateEvent: (id: string, item: Partial<EventItem>) => void;
  deleteEvent: (id: string) => void;
  
  studentProjects: StudentProject[];
  addStudentProject: (proj: Omit<StudentProject, 'id'>) => void;
  updateStudentProject: (id: string, proj: Partial<StudentProject>) => void;
  deleteStudentProject: (id: string) => void;
  
  faqs: FAQItem[];
  addFAQ: (faq: Omit<FAQItem, 'id'>) => void;
  updateFAQ: (id: string, faq: Partial<FAQItem>) => void;
  deleteFAQ: (id: string) => void;
  
  contactMessages: ContactMessage[];
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'read'>) => void;
  markMessageRead: (id: string) => void;
  deleteContactMessage: (id: string) => void;
  
  // Demo Data Reset
  clearDemoData: () => void;
  resetDemoData: () => void;
  
  // Auth
  currentUser: UserSession;
  loginAsAdmin: (password?: string) => boolean;
  logout: () => void;
  
  // Modals & Navigation
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  isRegisterModalOpen: boolean;
  openRegisterModal: (course?: Course) => void;
  closeRegisterModal: () => void;
  
  selectedArticle: BlogPost | null;
  setSelectedArticle: (article: BlogPost | null) => void;
  
  isReviewModalOpen: boolean;
  openReviewModal: () => void;
  closeReviewModal: () => void;
  
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  
  legalModalType: 'privacy' | 'terms' | 'refund' | null;
  setLegalModalType: (type: 'privacy' | 'terms' | 'refund' | null) => void;
  
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ept_lang');
    return (saved === 'en' || saved === 'ar') ? saved : 'ar';
  });

  const [settings, setSettings] = useState<AcademySettings>(() => {
    const saved = localStorage.getItem('ept_settings');
    if (!saved) return INITIAL_SETTINGS;
    try {
      const parsed = JSON.parse(saved);
      return {
        ...INITIAL_SETTINGS,
        ...parsed,
        phone: INITIAL_SETTINGS.phone,
        techPhone: INITIAL_SETTINGS.techPhone,
        whatsapp: INITIAL_SETTINGS.whatsapp,
        techWhatsapp: INITIAL_SETTINGS.techWhatsapp,
        social: {
          ...INITIAL_SETTINGS.social,
          ...parsed.social,
          facebook: INITIAL_SETTINGS.social.facebook,
          linkedin: INITIAL_SETTINGS.social.linkedin,
        },
      };
    } catch {
      return INITIAL_SETTINGS;
    }
  });

  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('ept_courses');
    if (!saved) return INITIAL_COURSES;

    try {
      const parsed = JSON.parse(saved) as Course[];

      // Migrate legacy course image paths that pointed to /src/... and therefore
      // break after a production Vite build. Use the current bundled asset URL
      // from INITIAL_COURSES while preserving any other admin-edited course data.
      return parsed.map((course) => {
        const current = INITIAL_COURSES.find((item) => item.id === course.id);
        const legacyImage = typeof course.image === 'string' && course.image.startsWith('/src/');

        return {
          ...course,
          image: legacyImage ? (current?.image ?? course.image) : (course.image || current?.image || ''),
        };
      });
    } catch {
      return INITIAL_COURSES;
    }
  });

  const [instructors, setInstructors] = useState<Instructor[]>(() => {
    const saved = localStorage.getItem('ept_instructors');
    return saved ? JSON.parse(saved) : INITIAL_INSTRUCTORS;
  });

  const [registrations, setRegistrations] = useState<RegistrationRequest[]>(() => {
    const saved = localStorage.getItem('ept_registrations');
    return saved ? JSON.parse(saved) : [];
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('ept_reviews');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('ept_blog');
    if (!saved) return INITIAL_BLOG_POSTS;

    try {
      const parsed = JSON.parse(saved) as BlogPost[];

      // Migrate legacy cover-image paths from /src/assets/... to the
      // bundled image URLs used by the current INITIAL_BLOG_POSTS data.
      return parsed.map((post) => {
        const current = INITIAL_BLOG_POSTS.find((item) => item.id === post.id);
        const legacyImage = typeof post.coverImage === 'string' && post.coverImage.startsWith('/src/');

        return {
          ...post,
          coverImage: legacyImage ? (current?.coverImage ?? post.coverImage) : (post.coverImage || current?.coverImage || ''),
        };
      });
    } catch {
      return INITIAL_BLOG_POSTS;
    }
  });

  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem('ept_comments');
    return saved ? JSON.parse(saved) : [];
  });

  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem('ept_events');
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });

  const [studentProjects, setStudentProjects] = useState<StudentProject[]>(() => {
    const saved = localStorage.getItem('ept_projects');
    if (!saved) return INITIAL_STUDENT_PROJECTS;

    try {
      const parsed = JSON.parse(saved) as StudentProject[];

      // Migrate legacy project image paths stored before the Vite asset fix.
      return parsed.map((project) => {
        const current = INITIAL_STUDENT_PROJECTS.find((item) => item.id === project.id);
        const legacyImage = typeof project.image === 'string' && project.image.startsWith('/src/');

        return {
          ...project,
          image: legacyImage ? (current?.image ?? project.image) : (project.image || current?.image || ''),
        };
      });
    } catch {
      return INITIAL_STUDENT_PROJECTS;
    }
  });

  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    const saved = localStorage.getItem('ept_faqs');
    return saved ? JSON.parse(saved) : INITIAL_FAQS;
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('ept_messages');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentUser, setCurrentUser] = useState<UserSession>(() => {
    const saved = localStorage.getItem('ept_user');
    return saved ? JSON.parse(saved) : { id: 'vis-1', name: 'Visitor', email: '', role: 'visitor' };
  });

  // Modal states
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('ept_lang', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('ept_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('ept_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('ept_instructors', JSON.stringify(instructors));
  }, [instructors]);

  useEffect(() => {
    localStorage.setItem('ept_registrations', JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem('ept_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('ept_blog', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('ept_comments', JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    localStorage.setItem('ept_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('ept_projects', JSON.stringify(studentProjects));
  }, [studentProjects]);

  useEffect(() => {
    localStorage.setItem('ept_faqs', JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem('ept_messages', JSON.stringify(contactMessages));
  }, [contactMessages]);

  useEffect(() => {
    localStorage.setItem('ept_user', JSON.stringify(currentUser));
  }, [currentUser]);

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (ar: string, en: string) => {
    return language === 'ar' ? ar : en;
  };

  const updateSettings = (newSettings: Partial<AcademySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Courses CRUD
  const addCourse = (course: Omit<Course, 'id'>) => {
    const newCourse: Course = { ...course, id: 'course-' + Date.now() };
    setCourses(prev => [newCourse, ...prev]);
  };

  const updateCourse = (id: string, updated: Partial<Course>) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  // Instructors CRUD
  const addInstructor = (instructor: Omit<Instructor, 'id'>) => {
    const newInst: Instructor = { ...instructor, id: 'inst-' + Date.now() };
    setInstructors(prev => [...prev, newInst]);
  };

  const updateInstructor = (id: string, updated: Partial<Instructor>) => {
    setInstructors(prev => prev.map(i => i.id === id ? { ...i, ...updated } : i));
  };

  const deleteInstructor = (id: string) => {
    setInstructors(prev => prev.filter(i => i.id !== id));
  };

  // Registrations
  const addRegistration = (data: Omit<RegistrationRequest, 'id' | 'createdAt' | 'status'>) => {
    if (!data.studentName.trim() || !data.phone.trim() || !data.courseId) {
      return { success: false, message: language === 'ar' ? 'يرجى استيفاء الحقول الأساسية المطلوبة.' : 'Please provide all mandatory details.' };
    }
    const newReg: RegistrationRequest = {
      ...data,
      id: 'reg-' + Date.now(),
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    setRegistrations(prev => [newReg, ...prev]);
    return { 
      success: true, 
      message: language === 'ar' 
        ? 'تم استلام طلبك بنجاح. سيتواصل فريق EPT Academy معك لتأكيد التفاصيل.' 
        : 'Your registration request was received. An EPT Academy coordinator will reach out shortly.'
    };
  };

  const updateRegistrationStatus = (id: string, status: RegistrationStatus) => {
    setRegistrations(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const deleteRegistration = (id: string) => {
    setRegistrations(prev => prev.filter(r => r.id !== id));
  };

  // Reviews Moderation
  const addReview = (data: Omit<Review, 'id' | 'createdAt' | 'status'>) => {
    if (!data.studentName.trim() || !data.comment.trim() || data.rating < 1) {
      return { 
        success: false, 
        message: language === 'ar' ? 'يرجى كتابة اسمك والتعليق واختيار التقييم.' : 'Please provide your name, comment, and rating.' 
      };
    }
    // Strict requirement from prompt #17: "لا تظهر المراجعة مباشرة للعامة. اجعلها: Pending -> Admin Review -> Approved -> Published"
    const newReview: Review = {
      ...data,
      id: 'rev-' + Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      isDemo: false,
    };
    setReviews(prev => [newReview, ...prev]);
    return {
      success: true,
      message: language === 'ar' 
        ? 'شكرًا لمشاركتك تقييمك! تم إرسال مراجعتك بنجاح وستخضع لمراجعة إدارة الأكاديمية قبل نشرها.'
        : 'Thank you for your review! It has been submitted for administrative verification prior to publishing.'
    };
  };

  const updateReviewStatus = (id: string, status: ReviewStatus) => {
    setReviews(prev => prev.map(rev => rev.id === id ? { ...rev, status } : rev));
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(rev => rev.id !== id));
  };

  // Blog Posts CRUD
  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = { ...post, id: 'post-' + Date.now() };
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const updateBlogPost = (id: string, updated: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  // Comments
  const addComment = (data: Omit<Comment, 'id' | 'createdAt' | 'status'>) => {
    const newComment: Comment = {
      ...data,
      id: 'cmt-' + Date.now(),
      status: 'approved',
      createdAt: new Date().toISOString(),
    };
    setComments(prev => [newComment, ...prev]);
  };

  const deleteComment = (id: string) => {
    setComments(prev => prev.filter(c => c.id !== id));
  };

  // Events CRUD
  const addEvent = (item: Omit<EventItem, 'id'>) => {
    const newEvent: EventItem = { ...item, id: 'ev-' + Date.now() };
    setEvents(prev => [...prev, newEvent]);
  };

  const updateEvent = (id: string, updated: Partial<EventItem>) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, ...updated } : e));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  // Student Projects CRUD
  const addStudentProject = (proj: Omit<StudentProject, 'id'>) => {
    const newProj: StudentProject = { ...proj, id: 'proj-' + Date.now() };
    setStudentProjects(prev => [newProj, ...prev]);
  };

  const updateStudentProject = (id: string, updated: Partial<StudentProject>) => {
    setStudentProjects(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteStudentProject = (id: string) => {
    setStudentProjects(prev => prev.filter(p => p.id !== id));
  };

  // FAQs CRUD
  const addFAQ = (faq: Omit<FAQItem, 'id'>) => {
    const newFaq: FAQItem = { ...faq, id: 'faq-' + Date.now() };
    setFaqs(prev => [...prev, newFaq]);
  };

  const updateFAQ = (id: string, updated: Partial<FAQItem>) => {
    setFaqs(prev => prev.map(f => f.id === id ? { ...f, ...updated } : f));
  };

  const deleteFAQ = (id: string) => {
    setFaqs(prev => prev.filter(f => f.id !== id));
  };

  // Contact Messages
  const addContactMessage = (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'read'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: 'msg-' + Date.now(),
      createdAt: new Date().toISOString(),
      read: false,
    };
    setContactMessages(prev => [newMsg, ...prev]);
  };

  const markMessageRead = (id: string) => {
    setContactMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));
  };

  const deleteContactMessage = (id: string) => {
    setContactMessages(prev => prev.filter(m => m.id !== id));
  };

  // Demo Data Operations
  const clearDemoData = () => {
    setCourses(prev => prev.filter(c => !c.isDemo));
    setInstructors(prev => prev.filter(i => !i.isDemo));
    setReviews(prev => prev.filter(r => !r.isDemo));
    setStudentProjects(prev => prev.filter(p => !p.isDemo));
    setBlogPosts(prev => prev.filter(b => !b.isDemo));
    setEvents(prev => prev.filter(e => !e.isDemo));
    setFaqs(prev => prev.filter(f => !f.isDemo));
  };

  const resetDemoData = () => {
    setCourses(INITIAL_COURSES);
    setInstructors(INITIAL_INSTRUCTORS);
    setReviews(INITIAL_REVIEWS);
    setStudentProjects(INITIAL_STUDENT_PROJECTS);
    setBlogPosts(INITIAL_BLOG_POSTS);
    setEvents(INITIAL_EVENTS);
    setFaqs(INITIAL_FAQS);
    setSettings(INITIAL_SETTINGS);
  };

  // Auth
  const loginAsAdmin = (password?: string) => {
    // Allows rapid access or customized credential
    setCurrentUser({
      id: 'admin-1',
      name: 'مدير النظام (EPT Admin)',
      email: 'admin@eptacademy.edu.eg',
      role: 'admin',
    });
    return true;
  };

  const logout = () => {
    setCurrentUser({
      id: 'vis-1',
      name: 'Visitor',
      email: '',
      role: 'visitor',
    });
    setIsAdminOpen(false);
  };

  const openRegisterModal = (course?: Course) => {
    if (course) {
      setSelectedCourse(course);
    }
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const openReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        t,
        settings,
        updateSettings,
        courses,
        addCourse,
        updateCourse,
        deleteCourse,
        instructors,
        addInstructor,
        updateInstructor,
        deleteInstructor,
        registrations,
        addRegistration,
        updateRegistrationStatus,
        deleteRegistration,
        reviews,
        addReview,
        updateReviewStatus,
        deleteReview,
        blogPosts,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        comments,
        addComment,
        deleteComment,
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        studentProjects,
        addStudentProject,
        updateStudentProject,
        deleteStudentProject,
        faqs,
        addFAQ,
        updateFAQ,
        deleteFAQ,
        contactMessages,
        addContactMessage,
        markMessageRead,
        deleteContactMessage,
        clearDemoData,
        resetDemoData,
        currentUser,
        loginAsAdmin,
        logout,
        selectedCourse,
        setSelectedCourse,
        isRegisterModalOpen,
        openRegisterModal,
        closeRegisterModal,
        selectedArticle,
        setSelectedArticle,
        isReviewModalOpen,
        openReviewModal,
        closeReviewModal,
        isSearchModalOpen,
        setIsSearchModalOpen,
        legalModalType,
        setLegalModalType,
        isAdminOpen,
        setIsAdminOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
