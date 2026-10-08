export type Language = 'ar' | 'en';

export type UserRole = 'visitor' | 'student' | 'instructor' | 'admin';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export type CourseCategory = 
  | 'technology'
  | 'programming'
  | 'design'
  | 'digital-skills'
  | 'english'
  | 'design-business';

export type DeliveryMethod = 'online' | 'in-person' | 'both';

export interface Course {
  id: string;
  titleAr: string;
  titleEn: string;
  category: CourseCategory;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  audienceAr: string;
  audienceEn: string;
  outcomesAr: string[];
  outcomesEn: string[];
  durationWeeks: number;
  sessionsCount: number;
  sessionHours: number;
  deliveryMethod: DeliveryMethod;
  instructorId: string;
  instructorNameAr?: string;
  instructorNameEn?: string;
  prerequisitesAr: string;
  prerequisitesEn: string;
  projectsAr: string[];
  projectsEn: string[];
  skillsGained: string[];
  faqs: {
    qAr: string;
    qEn: string;
    aAr: string;
    aEn: string;
  }[];
  priceEgp?: number;
  showPrice: boolean;
  discountPercentage?: number;
  featured: boolean;
  image: string;
  isDemo?: boolean;
}

export interface Instructor {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  bioAr: string;
  bioEn: string;
  experienceYears: number;
  coursesIds: string[];
  avatarUrl: string;
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  isDemo?: boolean;
}

export type RegistrationStatus = 'new' | 'contacted' | 'confirmed' | 'rejected' | 'completed';

export interface RegistrationRequest {
  id: string;
  studentName: string;
  phone: string;
  email: string;
  governorate: string;
  courseId: string;
  courseTitleAr?: string;
  courseTitleEn?: string;
  deliveryMode: 'online' | 'in-person';
  level: string;
  ageOrStage: string;
  notes?: string;
  status: RegistrationStatus;
  createdAt: string;
}

export type ReviewStatus = 'pending' | 'approved' | 'rejected' | 'hidden';

export interface Review {
  id: string;
  studentName: string;
  governorate: string;
  courseId: string;
  courseTitle?: string;
  rating: number; // 1 to 5
  comment: string;
  status: ReviewStatus;
  createdAt: string;
  isDemo?: boolean;
}

export interface Comment {
  id: string;
  targetType: 'blog' | 'event';
  targetId: string;
  authorName: string;
  authorEmail: string;
  content: string;
  status: 'approved' | 'pending' | 'hidden';
  createdAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  category: string;
  summaryAr: string;
  summaryEn: string;
  contentAr: string;
  contentEn: string;
  author: string;
  readTimeMinutes: number;
  date: string;
  coverImage: string;
  isDemo?: boolean;
}

export interface EventItem {
  id: string;
  titleAr: string;
  titleEn: string;
  typeAr: string;
  typeEn: string;
  date: string;
  timeAr: string;
  timeEn: string;
  locationAr: string;
  locationEn: string;
  deliveryMethod: DeliveryMethod;
  instructorName?: string;
  descriptionAr: string;
  descriptionEn: string;
  capacity?: number;
  registeredCount: number;
  isDemo?: boolean;
}

export interface StudentProject {
  id: string;
  titleAr: string;
  titleEn: string;
  studentName: string;
  governorate: string;
  courseTitle: string;
  descriptionAr: string;
  descriptionEn: string;
  techStack: string[];
  projectUrl?: string;
  image: string;
  status: 'approved' | 'pending';
  isDemo?: boolean;
}

export interface FAQItem {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  category: string;
  isDemo?: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface LearningPath {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  stepsAr: string[];
  stepsEn: string[];
  targetAudienceAr: string;
  targetAudienceEn: string;
}

export interface AcademySettings {
  nameAr: string;
  nameEn: string;
  fullNameEn: string;
  sloganAr: string;
  sloganEn: string;
  subSloganAr: string;
  subSloganEn: string;
  mainLocationAr: string;
  mainLocationEn: string;
  regionalReachAr: string;
  regionalReachEn: string;
  phone: string;
  whatsapp: string;
  techPhone?: string;
  techWhatsapp?: string;
  whatsappPrefilledAr: string;
  whatsappPrefilledEn: string;
  email: string;
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    linkedin?: string;
    youtube?: string;
  };
  seoTitleAr: string;
  seoTitleEn: string;
  seoDescriptionAr: string;
  seoDescriptionEn: string;
}
