import { 
  Course, 
  Instructor, 
  BlogPost, 
  EventItem, 
  StudentProject, 
  FAQItem, 
  AcademySettings, 
  LearningPath,
  Review 
} from '../types';
import realStudentCodingLab from '../assets/images/real_student_coding_lab_1791457660513.jpg';
import realStudentsLabGroup from '../assets/images/real_students_lab_group_1791457670891.jpg';
import courseDigitalDesign from '../assets/images/course_digital_design_1791456260371.jpg';
import realComputerWorkstations from '../assets/images/real_computer_workstations_1791457682176.jpg';
import realEnglishLectureHall from '../assets/images/real_english_lecture_hall_1791457694461.jpg';
import courseProgrammingLab from '../assets/images/course_programming_lab_1791456247667.jpg';

export const INITIAL_SETTINGS: AcademySettings = {
  nameAr: 'أكاديمية EPT',
  nameEn: 'EPT Academy',
  fullNameEn: 'English Plus Technology',
  sloganAr: 'نُعلّم مهارات اليوم',
  sloganEn: 'Teaching the Skills of Today',
  subSloganAr: 'تعلم التكنولوجيا، التصميم، البرمجة والمهارات الرقمية بأسلوب عملي يساعدك على بناء مهارات حقيقية للمستقبل.',
  subSloganEn: 'Learn technology, design, coding, and digital skills practically to build real capabilities for tomorrow.',
  mainLocationAr: 'سوهاج – مركز جهينة – جمهورية مصر العربية',
  mainLocationEn: 'Sohag – Gehana Center – Egypt',
  regionalReachAr: 'مقرنا الرئيسي في سوهاج (مركز جهينة)، ونصل لمتعلمينا في كافة المحافظات عبر برامجنا التفاعلية عن بُعد.',
  regionalReachEn: 'Based in Sohag (Gehana), serving learners beyond borders through live interactive cohorts.',
  phone: '+20 12 03246226',
  whatsapp: '+201203246226',
  techPhone: '+20 10 31473069',
  techWhatsapp: '+201031473069',
  whatsappPrefilledAr: 'مرحبًا EPT Academy، أريد معرفة تفاصيل أحد البرامج التدريبية المتاحة ومواعيد الدفعات القادمة.',
  whatsappPrefilledEn: 'Hello EPT Academy, I would like to inquire about training programs and upcoming cohorts.',
  email: 'info@eptacademy.edu.eg',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61563151359362',
    instagram: '',
    tiktok: '',
    linkedin: 'https://www.linkedin.com/company/ept-academy-eg/?skipRedirect=true',
    youtube: '',
  },
  seoTitleAr: 'EPT Academy | English Plus Technology - نُعلّم مهارات اليوم',
  seoTitleEn: 'EPT Academy | English Plus Technology - Skills Turn to Opportunity',
  seoDescriptionAr: 'أكاديمية تعليمية وتكنولوجية في سوهاج (مركز جهينة) وأونلاين لكافة المحافظات المصرية. برامج معتمدة في البرمجة والتصميم واللغة الإنجليزية.',
  seoDescriptionEn: 'Egyptian educational and technological academy based in Sohag (Gehana) and online nationwide. Real practical labs in coding, design, and English.',
};

export const INITIAL_INSTRUCTORS: Instructor[] = [
  {
    id: 'inst-1',
    nameAr: 'م. أحمد الشريف',
    nameEn: 'Eng. Ahmed El-Sherif',
    roleAr: 'مدرب هندسة البرمجيات والويب',
    roleEn: 'Software Engineering & Web Instructor',
    bioAr: 'مهندس برمجيات متخصص في تطوير تطبيقات الويب الحديثة وحل المشكلات البرمجية بخبرة تتجاوز 7 سنوات في التدريب والعمل التقني.',
    bioEn: 'Software engineer specializing in modern web development and algorithmic problem solving with 7+ years of hands-on technical teaching.',
    experienceYears: 7,
    coursesIds: ['course-web-dev', 'course-python'],
    avatarUrl: '',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    isDemo: true,
  },
  {
    id: 'inst-2',
    nameAr: 'أ. سارة عبد الرحمن',
    nameEn: 'Sara Abdelrahman',
    roleAr: 'أخصائية التصميم الرقمي والذكاء الاصطناعي',
    roleEn: 'Digital Design & AI Specialist',
    bioAr: 'مصممة جرافيك متخصصة في الهويات البصرية والوسائط الرقمية وأدوات التصميم المدعومة بالذكاء الاصطناعي للمستقلين وأصحاب المشاريع.',
    bioEn: 'Graphic designer specialized in brand identities, visual media, and AI-assisted creative workflows for freelancers and digital creators.',
    experienceYears: 5,
    coursesIds: ['course-graphic-design', 'course-design-business'],
    avatarUrl: '',
    social: {
      linkedin: 'https://linkedin.com',
    },
    isDemo: true,
  },
  {
    id: 'inst-3',
    nameAr: 'أ. محمود طه',
    nameEn: 'Mahmoud Taha',
    roleAr: 'مدرب لغة إنجليزية للتكنولوجيا وسوق العمل',
    roleEn: 'English for Tech & Professional Skills',
    bioAr: 'مدرس لغة إنجليزية متخصص في التواصل التقني والمهني والمصطلحات التكنولوجية للمبرمجين والمصممين لتأهيلهم لفرص العمل الإقليمية والدولية.',
    bioEn: 'English educator specializing in tech-industry terminology, business communication, and interview preparation for tech practitioners.',
    experienceYears: 6,
    coursesIds: ['course-english-tech'],
    avatarUrl: '',
    social: {
      linkedin: 'https://linkedin.com',
    },
    isDemo: true,
  },
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-python',
    titleAr: 'أساسيات البرمجة بلغة بايثون والتفكير المنطقي',
    titleEn: 'Python Programming & Computational Logic',
    category: 'programming',
    shortDescAr: 'مدخلك العملي الشامل لعالم البرمجة باستخدام بايثون من كتابة أول كود وحتى بناء مشاريع وأدوات حقيقية.',
    shortDescEn: 'A hands-on foundation in computational thinking and Python programming, from first syntax to standalone software utilities.',
    fullDescAr: 'برنامج تدريبي تأسيسي يركز على الفهم العميق لمفاهيم البرمجة بدون تعقيد، حيث يتعلم الطالب كيفية التفكير كمهندس برمجيات، واستخدام المتغيرات، الدوال، هياكل البيانات، ومكتبات بايثون لتنفيذ أدوات حقيقية للتعامل مع البيانات والملفات.',
    fullDescEn: 'A structured foundation course focused on deep algorithmic understanding, data structures, OOP principles, and building practical scripts to manipulate data and files.',
    audienceAr: 'الطلاب من سن 14 فما فوق، طلاب الجامعات، والراغبون في دخول مجالات التكنولوجيا وتحليل البيانات والذكاء الاصطناعي.',
    audienceEn: 'High school students (14+), college students, and anyone starting their journey in coding, data, or AI.',
    outcomesAr: [
      'فهم المنطق البرمجي وحل المشكلات الخوارزمية',
      'إتقان أساسيات بايثون وهياكل البيانات (Lists, Dictionaries, Tuples)',
      'البرمجة كائنية التوجه (OOP) وتنظيم الأكواد',
      'التعامل مع الملفات ومصادر البيانات الخارجية',
      'بناء 3 مشاريع برمجية متكاملة لضمها لسجل أعمالك'
    ],
    outcomesEn: [
      'Master computational problem solving and logic',
      'Fluency in Python syntax and key data structures',
      'Object-Oriented Programming (OOP) architectures',
      'File handling and automated task scripts',
      'Build 3 capstone software projects for your portfolio'
    ],
    durationWeeks: 8,
    sessionsCount: 16,
    sessionHours: 2,
    deliveryMethod: 'both',
    instructorId: 'inst-1',
    instructorNameAr: 'م. أحمد الشريف',
    instructorNameEn: 'Eng. Ahmed El-Sherif',
    prerequisitesAr: 'معرفة أساسية باستخدام الحاسوب وتصفح الإنترنت. لا يشترط أي خلفية برمجية سابقة.',
    prerequisitesEn: 'Basic computer literacy. No prior coding experience required.',
    projectsAr: [
      'برنامج إدارة المصروفات والمهام اليومية مع حفظ البيانات',
      'أداة تحليل ومعالجة ملفات الإكسل والبيانات تلقائيًا',
      'مشروع نهائي: محرك بحث داخلي وتطبيق سطح مكتب مصغر'
    ],
    projectsEn: [
      'Personal expense & task management CLI utility',
      'Automated spreadsheet and file processing tool',
      'Capstone: mini desktop productivity software'
    ],
    skillsGained: ['Python 3', 'Algorithms', 'Data Structures', 'Git Basics', 'Clean Code'],
    faqs: [
      {
        qAr: 'هل يمكنني حضور الكورس أونلاين من محافظتي؟',
        qEn: 'Can I join this cohort online from another governorate?',
        aAr: 'نعم، هذا البرنامج متاح بحضور مباشر داخل مقرنا في سوهاج وأيضًا عبر قاعات تفاعلية أونلاين مباشرة مع المدرب للطلاب من كافة المحافظات.',
        aEn: 'Yes, this program runs in-person at our Sohag center and live online with direct instructor guidance for learners across Egypt.'
      },
      {
        qAr: 'هل الكورس مناسب للمبتدئين تمامًا؟',
        qEn: 'Is this suitable for absolute beginners?',
        aAr: 'تم تصميم المنهج ليبدأ من الصفر تمامًا مع الشرح التطبيقي خطوة بخطوة والتطبيق العملي في كل جلسة.',
        aEn: 'Yes, the curriculum is structured from scratch with live hands-on practice in every single session.'
      }
    ],
    priceEgp: 1450,
    showPrice: true,
    discountPercentage: 0,
    featured: true,
    image: realStudentCodingLab,
    isDemo: true,
  },
  {
    id: 'course-web-dev',
    titleAr: 'تطوير مواقع الويب الحديثة (Front-End Development)',
    titleEn: 'Modern Front-End Web Development',
    category: 'programming',
    shortDescAr: 'تعلم بناء مواقع وتطبيقات ويب سريعة وتفاعلية باستخدام HTML5, CSS3, JavaScript ومكتبة React.',
    shortDescEn: 'Learn to build responsive, fast, and interactive web applications using HTML5, modern CSS, JavaScript, and React.',
    fullDescAr: 'مسار احترافي لإعداد مطوري واجهات الويب. يبدأ من هيكلة الصفحات القياسية وتصميم الواجهات المتجاوبة مع مختلف الشاشات، مرورًا ببرمجة التفاعل بلغة جافاسكريبت، وصولًا إلى بناء تطبيقات ويب حقيقية ورفعها على الإنترنت.',
    fullDescEn: 'A rigorous frontend program covering semantic web standards, responsive layouts, modern JavaScript ES6+, API integration, and component-based React development.',
    audienceAr: 'طلاب الجامعات، الخريجون، والشباب الراغبون في بناء مواقع لمشاريعهم أو بدء العمل الحر في تطوير الويب.',
    audienceEn: 'University students, graduates, and aspiring front-end developers seeking real practical portfolio projects.',
    outcomesAr: [
      'بناء وتنسيق صفحات ويب متجاوبة 100% مع الهواتف والحواسب',
      'إتقان لغة جافاسكريبت الحديثة والتفاعل مع واجهات المستخدم',
      'التعامل مع واجهات برمجة التطبيقات (APIs) وعرض البيانات الديناميكية',
      'فهم أساسيات React وإدارة حالة التطبيق',
      'رفع المشاريع واستضافتها على الإنترنت عبر منصات الاستضافة الحديثة'
    ],
    outcomesEn: [
      'Build fully responsive layouts with modern CSS & Tailwind',
      'Master modern JavaScript ES6+ logic and DOM interaction',
      'Connect with external REST APIs to fetch and render live data',
      'Core React component design and state management',
      'Deploy and publish live websites on modern hosting platforms'
    ],
    durationWeeks: 10,
    sessionsCount: 20,
    sessionHours: 2.5,
    deliveryMethod: 'both',
    instructorId: 'inst-1',
    instructorNameAr: 'م. أحمد الشريف',
    instructorNameEn: 'Eng. Ahmed El-Sherif',
    prerequisitesAr: 'إجادة استخدام الحاسوب وكتابة النصوص باللغتين العربية والإنجليزية.',
    prerequisitesEn: 'General computer proficiency and typing in Arabic/English.',
    projectsAr: [
      'موقع تعريفي احترافي متجاوب لشركة ناشئة',
      'تطبيق تصفح بيانات وتصفية متقدمة مع لوحة تحكم مصغرة',
      'مشروع التخرج: موقع ويب تجاري تفاعلي منشور على رابط مباشر'
    ],
    projectsEn: [
      'Responsive multi-page portfolio and agency site',
      'Dynamic data browser with search and filter controls',
      'Graduation Capstone: live-deployed responsive web app'
    ],
    skillsGained: ['HTML5', 'CSS3', 'JavaScript ES6', 'React', 'Git & GitHub', 'Responsive Design'],
    faqs: [
      {
        qAr: 'هل يُشترط وجود لابتوب خاص بي؟',
        qEn: 'Do I need my own laptop?',
        aAr: 'يفضل وجود جهاز حاسوب أو لابتوب لتطبيق التمارين والمشاريع بين الجلسات. في المقر نوفر أجهزة للمتدربين أثناء الجلسات الحضورية.',
        aEn: 'A laptop is recommended for home assignments. In-person lab machines are available at our training center during sessions.'
      }
    ],
    priceEgp: 1950,
    showPrice: true,
    discountPercentage: 0,
    featured: true,
    image: realStudentsLabGroup,
    isDemo: true,
  },
  {
    id: 'course-graphic-design',
    titleAr: 'التصميم الجرافيكي والهوية البصرية مع أدوات الذكاء الاصطناعي',
    titleEn: 'Graphic Design, Branding & AI Workflows',
    category: 'design',
    shortDescAr: 'احترف مبادئ التصميم الجرافيكي، الفوتوشوب، Canva وتوظيف أدوات الذكاء الاصطناعي لإنتاج تصاميم متميزة.',
    shortDescEn: 'Master graphic design fundamentals, Adobe Photoshop, Canva, and AI image tools to craft modern visual assets.',
    fullDescAr: 'برنامج تطبيقي يعلمك كيف تفكر كمصمم قبل أن تفتح البرامج: نظرية الألوان، التيبوغرافي، الاتزان البصري، وقواعد الهوية البصرية. يشمل التدريب العملي على Photoshop وتطبيقات Canva الاحترافية، ودمج أدوات التوليد البصري بالذكاء الاصطناعي لتسريع الإنتاجية.',
    fullDescEn: 'A practical design program teaching foundational visual literacy, color theory, typography, and layout balance before executing in Photoshop, Canva, and modern AI creative tools.',
    audienceAr: 'أصحاب المشاريع، صناع المحتوى، والراغبون في بدء مسيرة العمل الحر في التصميم الجرافيكي.',
    audienceEn: 'Content creators, entrepreneurs, and aspiring graphic designers seeking real visual design capabilities.',
    outcomesAr: [
      'فهم نظريات التصميم البصري، التباين، وعلم نفس الألوان',
      'التحكم في أدوات Photoshop لتعديل الصور وتصميم الإعلانات',
      'تصميم منشورات وبوسترات احترافية لمنصات التواصل الاجتماعي',
      'توظيف أدوات الذكاء الاصطناعي لتوليد الأفكار والخلفيات والعناصر',
      'بناء ملف أعمال (Behance Portfolio) يضم 5 تصاميم جاهزة للعرض'
    ],
    outcomesEn: [
      'Grasp visual balance, contrast, and typography rules',
      'Manipulate imagery and create social media campaign creatives',
      'Streamline client graphics using Canva & template systems',
      'Leverage AI tools for rapid ideation and asset generation',
      'Compile a Behance portfolio showcasing 5 polished design pieces'
    ],
    durationWeeks: 6,
    sessionsCount: 12,
    sessionHours: 2,
    deliveryMethod: 'both',
    instructorId: 'inst-2',
    instructorNameAr: 'أ. سارة عبد الرحمن',
    instructorNameEn: 'Sara Abdelrahman',
    prerequisitesAr: 'لا تشترط موهبة رسم سابقة، نحتاج فقط شغفًا بالبصريات واستخدام الحاسوب.',
    prerequisitesEn: 'No drawing talent required. General computer comfort is sufficient.',
    projectsAr: [
      'تصميم هوية بصرية مصغرة لنشاط تجاري (شعار، ألوان، خطوط)',
      'حملة إعلانية كاملة لوسائل التواصل الاجتماعي (3 بوستات + ستوري)',
      'معالجة صور احترافية باستخدام تقنيات الدمج والذكاء الاصطناعي'
    ],
    projectsEn: [
      'Mini brand identity system (palette, typography, logo layout)',
      'Social media promotional campaign package',
      'Creative photo manipulation and composite artwork'
    ],
    skillsGained: ['Photoshop', 'Canva Pro', 'Color Theory', 'Typography', 'AI Generative Tools', 'Branding'],
    faqs: [
      {
        qAr: 'هل يركز الكورس على التطبيق أم مجرد شرح أدوات؟',
        qEn: 'Is the course practical or just tool theory?',
        aAr: 'التطبيق العملي يمثل أكثر من 80% من كل جلسة، مع تقييم فردي لكل تصميم يقدمه المتدرب.',
        aEn: 'Practical execution accounts for over 80% of every session, with structured 1-on-1 critique.'
      }
    ],
    priceEgp: 1300,
    showPrice: true,
    discountPercentage: 0,
    featured: true,
    image: courseDigitalDesign,
    isDemo: true,
  },
  {
    id: 'course-digital-skills',
    titleAr: 'أساسيات الحاسوب والإنتاجية الرقمية (Digital Skills & ICDL)',
    titleEn: 'Computer Essentials & Digital Productivity',
    category: 'digital-skills',
    shortDescAr: 'إتقان استخدام نظام التشغيل، برامج Microsoft Office والبحث الآمن واستخدام التكنولوجيا في الدراسة والعمل.',
    shortDescEn: 'Master computer navigation, Microsoft Office suite, cloud storage, and practical productivity tools for study and work.',
    fullDescAr: 'برنامج تمكيني مصمم لردم الفجوة الرقمية وتزويد المتدرب بالمهارات الأساسية اللازمة للتعامل مع الحاسوب بثقة: من إدارة الملفات، برامج Word وExcel وPowerPoint، وحتى مهارات الحماية الرقمية والعمل السحابي.',
    fullDescEn: 'A foundational empowerment program covering computer file systems, advanced Word document formatting, Excel calculations, PowerPoint presenting, and cloud collaboration.',
    audienceAr: 'الطلاب من مختلف الأعمار، الموظفون، والباحثون عن وظائف تتطلب كفاءة رقمية موثوقة.',
    audienceEn: 'School and university students, job seekers, and office workers seeking solid digital fluency.',
    outcomesAr: [
      'إدارة نظام التشغيل والملفات وتنظيم البيانات بحرفية',
      'إنشاء وتنسيق المستندات والتقارير الرسمية عبر Microsoft Word',
      'استخدام الجداول الحسابية والدوال الأساسية في Microsoft Excel',
      'إعداد عروض تقديمية واضحة ومقنعة عبر PowerPoint',
      'استخدام برامج Google Workspace والبريد الإلكتروني المهني'
    ],
    outcomesEn: [
      'Efficient operating system navigation and file structures',
      'Professional document drafting and typography in Microsoft Word',
      'Data entry, formulas, and reporting using Microsoft Excel',
      'Compelling slide presentations via PowerPoint',
      'Cloud storage and business email hygiene'
    ],
    durationWeeks: 5,
    sessionsCount: 10,
    sessionHours: 2,
    deliveryMethod: 'in-person',
    instructorId: 'inst-1',
    instructorNameAr: 'م. أحمد الشريف',
    instructorNameEn: 'Eng. Ahmed El-Sherif',
    prerequisitesAr: 'لا توجد أي متطلبات سابقة. نرحب بالجميع من الصفر.',
    prerequisitesEn: 'Zero prerequisites. Absolute beginners are welcome.',
    projectsAr: [
      'ملف سيرة ذاتية وتقرير عمل رسمي منسق وفق المعايير',
      'نموذج ميزانية وجدول حسابي متكامل مع الرسوم البيانية',
      'عرض تقديمي تقديمي تفاعلي لمنتج أو فكرة مشروع'
    ],
    projectsEn: [
      'Formatted professional resume and formal project brief',
      'Automated budgeting spreadsheet with summary charts',
      'Product introduction presentation deck'
    ],
    skillsGained: ['Windows OS', 'MS Word', 'MS Excel', 'PowerPoint', 'Google Drive', 'Cyber Hygiene'],
    faqs: [
      {
        qAr: 'أين تُعقد الجلسات؟',
        qEn: 'Where are sessions conducted?',
        aAr: 'تُعقد جلسات هذا البرنامج حضوريًا في معمل الحاسوب بأكاديمية EPT في سوهاج لضمان التدريب المباشر على الأجهزة.',
        aEn: 'Sessions are conducted in-person at our Sohag computer laboratory to ensure supervised practice.'
      }
    ],
    priceEgp: 950,
    showPrice: true,
    discountPercentage: 0,
    featured: false,
    image: realComputerWorkstations,
    isDemo: true,
  },
  {
    id: 'course-design-business',
    titleAr: 'التصميم الرقمي، الذكاء الاصطناعي وبدء العمل الحر',
    titleEn: 'Digital Design, AI & Digital Monetization',
    category: 'design-business',
    shortDescAr: 'برنامج متكامل يربط مهارات التصميم وأدوات AI بأساسيات العمل الحر وتقديم الخدمات الرقمية وبناء سلة أعمال.',
    shortDescEn: 'Connect design skills and modern AI generation with practical freelancing, client communication, and digital monetization.',
    fullDescAr: 'لا يكفي أن تتعلم أداة التصميم دون أن تعرف كيف توظفها تجاريًا. هذا البرنامج الفريد يجمع بين تعلم أدوات التصميم الحديثة، أتمتة المهام بالذكاء الاصطناعي، كيفية تسعير الخدمات، إنشاء المنتجات الرقمية، والتواصل المهني مع العملاء.',
    fullDescEn: 'A distinctive bridging program teaching how to translate design and AI capabilities into tangible service offerings, portfolio positioning, client contracts, and digital products.',
    audienceAr: 'الشباب وطلاب الجامعات الراغبون في بدء دخل من العمل الحر (Freelancing) وتقديم الخدمات الرقمية.',
    audienceEn: 'University students and young professionals seeking to launch freelance creative services and micro-agency offerings.',
    outcomesAr: [
      'إنشاء أصول تصميمية عالية الجودة باستخدام Canva وأدوات AI المتقدمة',
      'تجهيز معرض أعمال مهني على منصات العمل الحر (مستقل، خمسات، LinkedIn)',
      'حساب تكلفة الخدمة وتسعير المشاريع بشكل واقعي ومربح',
      'صياغة عروض العمل (Proposals) والتواصل الفعال مع العملاء',
      'بناء متجر مصغر لبيع القوالب والتصاميم الرقمية'
    ],
    outcomesEn: [
      'Create high-value visual assets using modern AI and vector workflows',
      'Build a standout freelancer profile on local and regional platforms',
      'Calculate project cost, pricing models, and scope management',
      'Draft persuasive client proposals and contract terms',
      'Launch digital template products for passive monetization'
    ],
    durationWeeks: 6,
    sessionsCount: 12,
    sessionHours: 2,
    deliveryMethod: 'both',
    instructorId: 'inst-2',
    instructorNameAr: 'أ. سارة عبد الرحمن',
    instructorNameEn: 'Sara Abdelrahman',
    prerequisitesAr: 'معرفة أساسية بالتصميم أو حضور دورة التصميم التأسيسية.',
    prerequisitesEn: 'Basic familiarity with design software or completion of introductory design modules.',
    projectsAr: [
      'حقيبة خدمات رقمية متكاملة لعميل افتراضي مع عرض السعر',
      'قالب تصميمي رقمي جاهز للبيع عبر الإنترنت',
      'حساب عمل حر معتمد مع 3 نماذج أعمال واقعية'
    ],
    projectsEn: [
      'Client service package proposal with deliverables and milestones',
      'Commercial digital design template kit',
      'Live freelancer profile with 3 documented showcase cases'
    ],
    skillsGained: ['Digital Products', 'Canva & AI', 'Freelance Platforms', 'Client Pitching', 'Pricing Models'],
    faqs: [
      {
        qAr: 'هل يضمن الكورس الحصول على مشاريع فورية؟',
        qEn: 'Does the course guarantee immediate projects?',
        aAr: 'نحن نعلّمك المهارات الحقيقية، كيفية بناء سابقة أعمال قوية، وأسلوب التفاوض. النجاح يتوقف على استمرارك وتطبيقك الجاد.',
        aEn: 'We provide the real skills, portfolio architecture, and pitching mechanics. Success relies on your dedication and consistent practice.'
      }
    ],
    priceEgp: 1600,
    showPrice: true,
    discountPercentage: 0,
    featured: true,
    image: courseDigitalDesign,
    isDemo: true,
  },
  {
    id: 'course-english-tech',
    titleAr: 'اللغة الإنجليزية لمتعلمي التكنولوجيا وسوق العمل (English Plus)',
    titleEn: 'English Plus for Tech & Career Skills',
    category: 'english',
    shortDescAr: 'طور مهارات التحدث والاستماع والمصطلحات التقنية للتحضير لمقابلات العمل والتواصل مع فرق العمل الدولية.',
    shortDescEn: 'Boost speaking, listening, and tech vocabulary for coding interviews, remote work, and international collaboration.',
    fullDescAr: 'برنامج مخصص لطلاب وممارسي مجالات التقنية والتصميم. يركز على كسر حاجز الخوف من التحدث، التدرب على المقابلات الشخصية، قراءة وتوثيق الأكواد، وكتابة الرسائل المهنية للعملاء ومديري المشاريع باللغة الإنجليزية.',
    fullDescEn: 'A specialized conversational and vocational track tailored for tech learners. Focuses on speaking confidence, tech jargon, interviewing, and clear professional email communication.',
    audienceAr: 'المبرمجون، المصممون، والباحثون عن عمل في شركات محلية أو عن بُعد مع عملاء يتحدثون الإنجليزية.',
    audienceEn: 'Developers, designers, and students aiming for remote global employment or tech job interviews.',
    outcomesAr: [
      'التحدث بطلاقة وثقة في سياقات التكنولوجيا وبيئات العمل',
      'إجراء مقابلات عمل تجريبية (Mock Interviews) بالإنجليزية وتجاوزها بنجاح',
      'قراءة المقالات التقنية والتوثيق البرمجي (Documentation) دون صعوبة',
      'كتابة بريد إلكتروني رسمي ومراسلات مهنية دقيقة',
      'شرح مشروعك وعرض أفكارك (Pitching) أمام الجمهور'
    ],
    outcomesEn: [
      'Confident spoken communication in tech and professional contexts',
      'Tech interview simulations and answer structuring',
      'Comprehension of technical software documentation and articles',
      'Professional email writing and workplace messaging',
      'Presentation and project demo skills in English'
    ],
    durationWeeks: 8,
    sessionsCount: 16,
    sessionHours: 2,
    deliveryMethod: 'both',
    instructorId: 'inst-3',
    instructorNameAr: 'أ. محمود طه',
    instructorNameEn: 'Mahmoud Taha',
    prerequisitesAr: 'معرفة أساسية بقواعد ومفردات اللغة الإنجليزية (مستوى مبتدئ أو متوسط).',
    prerequisitesEn: 'Elementary to pre-intermediate English background.',
    projectsAr: [
      'محاكاة مقابلة عمل تقنية مسجلة ومقيمة فرديًا',
      'عرض تقديمي مدته 5 دقائق لشرح فكرة تقنية أو مشروع شخصي',
      'ملف مراسلات مهنية يتضمن نماذج إيميلات ومقترحات'
    ],
    projectsEn: [
      'Simulated technical job interview recording with personalized critique',
      '5-minute English product/project presentation demo',
      'Professional correspondence kit with email templates'
    ],
    skillsGained: ['Tech Vocabulary', 'Spoken Fluency', 'Interview Prep', 'Professional Emailing', 'Presentation Skills'],
    faqs: [
      {
        qAr: 'هل يركز الكورس على القواعد أم المحادثة؟',
        qEn: 'Does this focus on grammar or conversation?',
        aAr: 'التركيز الأساسي على الممارسة والمحادثة الواقعية وتطبيق المصطلحات في مواقف حقيقية، مع تدعيم القواعد عند الحاجة.',
        aEn: 'The primary emphasis is interactive conversation, situational fluency, and tech vocabulary in real scenarios.'
      }
    ],
    priceEgp: 1200,
    showPrice: true,
    discountPercentage: 0,
    featured: false,
    image: realEnglishLectureHall,
    isDemo: true,
  },
];

export const INITIAL_LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-digital-skills',
    titleAr: 'مسار التأسيس الرقمي والإنتاجية',
    titleEn: 'Digital Foundations & Productivity',
    descAr: 'المسار الأمثل لمن يبدأ من الصفر لبناء ثقة رقمية متكاملة وسرعة في إنجاز المهام المكتبية والدراسية.',
    descEn: 'The ideal trajectory from computer basics to high-efficiency office workflow and digital communication.',
    stepsAr: [
      'أساسيات الحاسوب والإنترنت',
      'حزمة البرامج المكتبية Microsoft Office',
      'التطبيقات السحابية والحماية الرقمية',
      'الاستعداد للدراسة والعمل المكتبي'
    ],
    stepsEn: [
      'Operating Systems & Safe Web Navigation',
      'Microsoft Office Productivity Suite',
      'Cloud Workspaces & Digital Safety',
      'Workplace & Academic Readiness'
    ],
    targetAudienceAr: 'المبتدئون والباحثون عن عمل والطلاب',
    targetAudienceEn: 'Beginners, school students, and office professionals',
  },
  {
    id: 'path-programming',
    titleAr: 'مسار البرمجة وهندسة الويب',
    titleEn: 'Programming & Web Engineering',
    descAr: 'رحلة متدرجة من بناء التفكير المنطقي إلى بناء تطبيقات برمجية ومواقع متجاوبة جاهزة للنشر.',
    descEn: 'Step-by-step progress from computational logic to full interactive web applications.',
    stepsAr: [
      'المنطق والتفكير الحسابي (Computational Thinking)',
      'لغة بايثون للتحكم في البيانات والملفات',
      'تطوير واجهات الويب (HTML / CSS / JavaScript)',
      'بناء تطبيقات React ونشر المشاريع'
    ],
    stepsEn: [
      'Computational Logic & Problem Solving',
      'Python Scripting & Data Handling',
      'Modern Front-End Standards (HTML/CSS/JS)',
      'Interactive React Applications & Deployment'
    ],
    targetAudienceAr: 'طلاب الجامعات، المهتمون بالبرمجة، وصناع التكنولوجيا',
    targetAudienceEn: 'University students, software enthusiasts, and future developers',
  },
  {
    id: 'path-design',
    titleAr: 'مسار التصميم الجرافيكي والذكاء الاصطناعي',
    titleEn: 'Visual Design & Creative AI',
    descAr: 'من فهم قواعد التكوين والألوان إلى ابتكار الهويات البصرية والعمل الحر للمبدعين.',
    descEn: 'From layout principles to crafting brand identities and freelancing with AI tools.',
    stepsAr: [
      'مبادئ التكوين ونظرية الألوان والخطوط',
      'أدوات Photoshop الاحترافية ومعالجة الصور',
      'إنتاج الوسائط والمنشورات عبر Canva وAI',
      'بناء معرض الأعمال وبدء تسعير الخدمات'
    ],
    stepsEn: [
      'Visual Composition, Color & Typography Rules',
      'Adobe Photoshop Imaging & Compositing',
      'Canva & AI Generative Media Systems',
      'Portfolio Curation & Freelance Launch'
    ],
    targetAudienceAr: 'المبدعون، صناع المحتوى، والباحثون عن العمل الحر',
    targetAudienceEn: 'Content creators, visual storytellers, and freelance aspirants',
  },
  {
    id: 'path-technology-career',
    titleAr: 'مسار المهارات المتكاملة (Tech + English)',
    titleEn: 'Integrated Career Track (Tech + English)',
    descAr: 'دمج المهارات التقنية باللغة الإنجليزية لتأهيل المتعلم للعمل عن بُعد والمنافسة في السوق الحديث.',
    descEn: 'Combining hard technical prowess with professional English communication for remote work readiness.',
    stepsAr: [
      'المهارة التخصصية (برمجة أو تصميم)',
      'اللغة الإنجليزية لمجال التكنولوجيا (English Plus)',
      'بناء المشروعات الواقعية وسابقة الأعمال',
      'المقابلات الشخصية والتواصل مع العملاء والشركات'
    ],
    stepsEn: [
      'Core Technical Craft (Coding or Design)',
      'English for Tech & Workplace Scenarios',
      'Capstone Projects & Public Proof-of-Work',
      'Job Interviews, Remote Pitching & Collaboration'
    ],
    targetAudienceAr: 'الخريجون والباحثون عن وظائف تكنولوجية وعمل حر دولي',
    targetAudienceEn: 'Graduates, career changers, and remote work seekers',
  },
];

export const INITIAL_STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'proj-1',
    titleAr: 'نظام إدارة حجوزات الأطباء والمواعيد',
    titleEn: 'Medical Clinic Booking Dashboard',
    studentName: 'عمر خالد',
    governorate: 'سوهاج',
    courseTitle: 'Modern Front-End Web Development',
    descriptionAr: 'لوحة تحكم تفاعلية متجاوبة تتيح للعيادات تنظيم مواعيد المرضى والبحث في سجلاتهم مع واجهة سريعة.',
    descriptionEn: 'A responsive administrative dashboard allowing medical clinics to organize appointments and filter patient logs.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript', 'LocalStorage'],
    projectUrl: 'https://github.com',
    image: realStudentCodingLab,
    status: 'approved',
    isDemo: true,
  },
  {
    id: 'proj-2',
    titleAr: 'هوية بصرية كاملة لمتجر منتجات طبيعية',
    titleEn: 'Visual Identity for Organic Brand',
    studentName: 'مريم السيد',
    governorate: 'قنا',
    courseTitle: 'Graphic Design, Branding & AI Workflows',
    descriptionAr: 'تصميم شعار، لوحة ألوان، ملصقات تغليف وتصاميم سوشيال ميديا باستخدام فوتوشوب وأدوات AI.',
    descriptionEn: 'Full packaging labels, logo system, and social launch collateral designed using Photoshop and generative AI tools.',
    techStack: ['Photoshop', 'Canva', 'AI Generation', 'Branding'],
    projectUrl: 'https://behance.net',
    image: courseDigitalDesign,
    status: 'approved',
    isDemo: true,
  },
  {
    id: 'proj-3',
    titleAr: 'أداة أتمتة وتحليل بيانات المبيعات ببايثون',
    titleEn: 'Sales Automation & Excel Analyzer',
    studentName: 'كريم مصطفى',
    governorate: 'أسيوط',
    courseTitle: 'Python Programming & Computational Logic',
    descriptionAr: 'برنامج يقوم بقراءة مئات الفواتير من ملفات الإكسل واستخراج تقارير إحصائية وتصديرها تلقائيًا في ثوانٍ.',
    descriptionEn: 'Automated Python script that digests batch invoice sheets, generates summarized statistical tables, and exports clean reports.',
    techStack: ['Python', 'OpenPyXL', 'Data Logic', 'CLI'],
    projectUrl: 'https://github.com',
    image: realStudentsLabGroup,
    status: 'approved',
    isDemo: true,
  },
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    studentName: 'محمود عبد الرحيم',
    governorate: 'سوهاج',
    courseId: 'course-python',
    courseTitle: 'Python Programming',
    rating: 5,
    comment: 'التدريب منظم جداً، والجميل أن المدرب يتابع معنا التطبيق العملي كود بكود ولا نخرج من الجلسة بدون فهم المنطق وراء كل خطوة.',
    status: 'approved',
    createdAt: '2026-09-15T10:00:00Z',
    isDemo: true,
  },
  {
    id: 'rev-2',
    studentName: 'ياسمين حسن',
    governorate: 'الأقصر',
    courseId: 'course-web-dev',
    courseTitle: 'Modern Front-End Web Development',
    rating: 5,
    comment: 'اشتركت في الدفعة الأونلاين وكنت متخوفة في البداية من البُعد الجغرافي، لكن التجربة فاقت توقعاتي من حيث وضوح الصوت والمتابعة المستمرة للمشاريع.',
    status: 'approved',
    createdAt: '2026-09-22T14:30:00Z',
    isDemo: true,
  },
  {
    id: 'rev-3',
    studentName: 'زياد إبراهيم',
    governorate: 'شمال سيناء (العريش)',
    courseId: 'course-graphic-design',
    courseTitle: 'Graphic Design & AI Workflows',
    rating: 5,
    comment: 'المحتوى احترافي ومباشر بعيدًا عن الحشو. تعلمت كيف أستخدم أدوات الذكاء الاصطناعي مع الفوتوشوب لبناء تصاميم متقنة.',
    status: 'approved',
    createdAt: '2026-10-01T11:20:00Z',
    isDemo: true,
  },
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'why-practical-learning-matters',
    titleAr: 'لماذا يفشل التعلم النظري للبرمجة وما الذي يجعلك محترفًا بالفعل؟',
    titleEn: 'Why Passive Tech Tutorials Fail and How Project-Based Practice Wins',
    category: 'Technology',
    summaryAr: 'شرح منهجي للفرق بين مشاهدة مقاطع الشرح على يوتيوب وبين التدريب العملي المعتمد على بناء المشاريع وحل المشكلات الحقيقية.',
    summaryEn: 'An editorial breakdown of the tutorial trap vs. experiential project-based coding practice.',
    contentAr: `كثير من الطلاب يقضون شهورًا في مشاهدة الفيديوهات التعليمية، لكن عند فتح محرر الأكواد يصابون بالحيرة ولا يعرفون من أين يبدأون. هذا ما يُعرف في مجتمع المبرمجين بـ "Tutorial Hell".

السر الحقيقي لا يكمن في حفظ الأوامر، بل في اكتساب المهارة من خلال:
1. ارتكاب الأخطاء وفهم رسائل الخطأ وحلها.
2. بناء مشروع متكامل من الصفر بدلاً من نسخ كود جاهز.
3. التفكير في متطلبات المستخدم النهائي قبل كتابة أول سطر كود.

في EPT Academy، نعتمد استراتيجية التعلم القائم على المشاريع (Project-Based Learning) لأنها الطريقة الوحيدة التي تبني ثقة المتعلم وتجعله جاهزًا لسوق العمل الحقيقي.`,
    contentEn: `Passive watching leads to an illusion of competence. True technical mastery only emerges when a learner confronts broken code, analyzes runtime errors, and designs software architecture with intention.`,
    author: 'فريق EPT Academy الأكاديمي',
    readTimeMinutes: 4,
    date: '2026-09-28',
    coverImage: courseProgrammingLab,
    isDemo: true,
  },
  {
    id: 'post-2',
    slug: 'ai-tools-for-designers-and-developers',
    titleAr: 'كيف تدمج أدوات الذكاء الاصطناعي في سير عملك اليومي دون أن تفقد هويتك؟',
    titleEn: 'Integrating Modern AI Tools Into Creative Workflows Without Sacrificing Craft',
    category: 'AI',
    summaryAr: 'كيف يستفيد المصمم والمبرمج من نماذج الذكاء الاصطناعي لتسريع الإنتاجية دون الاعتماد عليها كبديل للمهارة الأساسية.',
    summaryEn: 'How designers and coders leverage generative AI assistants to speed delivery while preserving originality.',
    contentAr: `الذكاء الاصطناعي ليس بديلاً عن المصمم الماهر أو المبرمج المتمكن، بل هو مضاعف للإنتاجية (Productivity Multiplier).

إذا كنت تمتلك الأساسيات القوية:
- في البرمجة: يساعدك الذكاء الاصطناعي في كتابة الاختبارات، واقتراح التحسينات، وتوثيق الدوال.
- في التصميم: يساعدك في توليد الأفكار البصرية، وتوسيع اللوحات، واختبار خيارات الألوان في دقائق.

أما إذا كنت تفتقر للأساسيات، فلن تستطيع تقييم جودة النتيجة التي يقدمها النموذج. لهذا السبب نبدأ في EPT دائمًا بتعليم الأصول وقواعد الصنعة، ثم نعلّم الطالب كيف يسخر أحدث الأدوات التكنولوجية لصالحه.`,
    contentEn: `AI tools magnify foundational strength. If your core craft is weak, AI magnifies noise. If your craft is disciplined, AI turns you into a full product studio.`,
    author: 'أ. سارة عبد الرحمن',
    readTimeMinutes: 5,
    date: '2026-10-02',
    coverImage: courseDigitalDesign,
    isDemo: true,
  },
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    titleAr: 'ورشة عمل: خارطة طريق تعلم البرمجة من الصفر في 2026',
    titleEn: 'Workshop: The Zero-to-One Coding Roadmap in 2026',
    typeAr: 'ورشة عمل تفاعلية',
    typeEn: 'Interactive Workshop',
    date: '2026-10-25',
    timeAr: '6:00 مساءً بتوقيت القاهرة',
    timeEn: '6:00 PM CLT',
    locationAr: 'أونلاين عبر البث المباشر (Google Meet)',
    locationEn: 'Live Interactive Online (Google Meet)',
    deliveryMethod: 'online',
    instructorName: 'م. أحمد الشريف',
    descriptionAr: 'جلسة توجيهية مدتها 90 دقيقة تناقش أفضل لغات البرمجة للبدء بها، كيفية تجنب التشتت، وبناء أول سابقة أعمال للمبتدئين في مختلف المحافظات.',
    descriptionEn: 'A 90-minute live orientation session on selecting the right coding foundation, avoiding overwhelm, and structuring your early portfolio.',
    capacity: 60,
    registeredCount: 38,
    isDemo: true,
  },
  {
    id: 'event-2',
    titleAr: 'ملتقى EPT للتصميم الرقمي والهوية البصرية',
    titleEn: 'EPT Digital Design & Visual Media Clinic',
    typeAr: 'جلسة تطبيقية حضورية',
    typeEn: 'In-Person Studio Clinic',
    date: '2026-11-05',
    timeAr: '4:00 مساءً',
    timeEn: '4:00 PM CLT',
    locationAr: 'مقر أكاديمية EPT – سوهاج (جهينة)',
    locationEn: 'EPT Academy HQ – Sohag (Gehana)',
    deliveryMethod: 'in-person',
    instructorName: 'أ. سارة عبد الرحمن',
    descriptionAr: 'يوم تدريبي مفتوح في معمل الأكاديمية لتحليل ونقد تصاميم المتدربين وتجربة أدوات توليد الصور الاحترافية تحت إشراف مباشر.',
    descriptionEn: 'Hands-on design critique day at our Sohag lab reviewing student portfolios and testing production workflows.',
    capacity: 25,
    registeredCount: 17,
    isDemo: true,
  },
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    questionAr: 'هل البرامج التدريبية متاحة أونلاين أم حضورية فقط؟',
    questionEn: 'Are programs conducted online or in-person only?',
    answerAr: 'تقدم الأكاديمية برامجها بنمطين بحسب طبيعة المحتوى: برامج حضورية في مقرنا بسوهاج لتوفير المعامل والأجهزة، وبرامج تفاعلية أونلاين مباشرة مع المدربين تتيح للطلاب من مختلف محافظات مصر (القاهرة، الإسكندرية، قنا، أسيوط، شمال سيناء، الأقصر وغيرها) الانضمام والاستفادة من التدريب والمتابعة.',
    answerEn: 'Programs are structured based on pedagogical requirements: in-person sessions at our Sohag lab with dedicated hardware, and live interactive online cohorts allowing learners across Egypt to participate with direct mentoring.',
    category: 'study-mode',
    isDemo: true,
  },
  {
    id: 'faq-2',
    questionAr: 'أنا مقيم في محافظة أخرى خارج سوهاج، كيف يمكنني الانضمام؟',
    questionEn: 'I live in another governorate outside Sohag, how can I enroll?',
    answerAr: 'يمكنك اختيار البرنامج المناسب الذي يدعم نمط الدراسة أونلاين وتعبئة نموذج التسجيل مع تحديد محافظتك. سيتواصل معك فريق الأكاديمية عبر الهاتف والواتساب لتأكيد مواعيد الجلسات وتزويدك بروابط القاعات التفاعلية ومنصة المتابعة.',
    answerEn: 'Select an online-supported program, fill out the registration form indicating your governorate, and our admissions team will contact you to confirm cohort dates and supply direct session access.',
    category: 'registration',
    isDemo: true,
  },
  {
    id: 'faq-3',
    questionAr: 'هل توجد برامج للمبتدئين الذين لا يملكون أي خبرة سابقة؟',
    questionEn: 'Are there courses for absolute beginners with no background?',
    answerAr: 'نعم بالتأكيد. أغلب مساراتنا التأسيسية مثل (أساسيات البرمجة بلغة بايثون)، (أساسيات الحاسوب والإنتاجية الرقمية)، و(التصميم الجرافيكي) مصممة خصيصًا لتبدأ مع المتعلم من الصفر مع الشرح العملي المبسط.',
    answerEn: 'Yes. Foundational tracks in Python, Computer Essentials, and Graphic Design are purpose-built from ground zero with supervised, progressive exercises.',
    category: 'curriculum',
    isDemo: true,
  },
  {
    id: 'faq-4',
    questionAr: 'كيف أعرف أي البرامج هو الأنسب لأهدافي أو لعمر ابني؟',
    questionEn: 'How do I determine which program best fits my goals or my child?',
    answerAr: 'يمكنك التواصل معنا عبر الواتساب أو عبر نموذج التواصل وسيقوم أحد مستشارينا الأكاديميين بمساعدتك ومناقشة اهتماماتك أو المرحلة الدراسية واقتراح المسار الأمثل.',
    answerEn: 'You can message our academic advisors directly via WhatsApp or the contact form for personalized guidance based on career goals or grade level.',
    category: 'guidance',
    isDemo: true,
  },
  {
    id: 'faq-5',
    questionAr: 'هل التدريب نظري أم قائم على مشروعات وتطبيق عملي؟',
    questionEn: 'Is training theoretical or project-based practical work?',
    answerAr: 'فلسفة EPT Academy تقوم بالأساس على "نُعلّم مهارات اليوم" من خلال التطبيق الفعلي. كل جلسة تتضمن تدريبًا على الكود أو التصميم، وكل متدرب ينهي البرنامج وهو يمتلك مشروعات حقيقية موثقة في سابقة أعماله.',
    answerEn: 'Our guiding principle is experiential learning: every session involves hands-on execution, culminating in verified portfolio projects that demonstrate real competence.',
    category: 'quality',
    isDemo: true,
  },
  {
    id: 'faq-6',
    questionAr: 'هل يتم تأكيد الحجز مباشرة بعد ملء الاستمارة في الموقع؟',
    questionEn: 'Is enrollment finalized immediately upon submitting the form?',
    answerAr: 'إرسال الاستمارة هو بمثابة طلب تسجيل مبدئي لحجز مقعدك في الدفعة القادمة. يقوم فريقنا بمراجعة الطلب والتواصل معك هاتفيًا لتأكيد التفاصيل وتنسيق المواعيد وطريقة الدفع المريحة لك.',
    answerEn: 'Form submission is an admission request. Our team contacts you to verify session times, answer questions, and finalize placement before cohort kickoff.',
    category: 'registration',
    isDemo: true,
  },
];

export const EGYPT_GOVERNORATES = [
  { id: 'sohag', nameAr: 'سوهاج', nameEn: 'Sohag' },
  { id: 'cairo', nameAr: 'القاهرة', nameEn: 'Cairo' },
  { id: 'giza', nameAr: 'الجيزة', nameEn: 'Giza' },
  { id: 'alexandria', nameAr: 'الإسكندرية', nameEn: 'Alexandria' },
  { id: 'qena', nameAr: 'قنا', nameEn: 'Qena' },
  { id: 'asyut', nameAr: 'أسيوط', nameEn: 'Asyut' },
  { id: 'luxor', nameAr: 'الأقصر', nameEn: 'Luxor' },
  { id: 'north-sinai', nameAr: 'شمال سيناء (العريش)', nameEn: 'North Sinai (Arish)' },
  { id: 'south-sinai', nameAr: 'جنوب سيناء', nameEn: 'South Sinai' },
  { id: 'aswan', nameAr: 'أسوان', nameEn: 'Aswan' },
  { id: 'red-sea', nameAr: 'البحر الأحمر', nameEn: 'Red Sea' },
  { id: 'dakahlia', nameAr: 'الدقهلية', nameEn: 'Dakahlia' },
  { id: 'sharqia', nameAr: 'الشرقية', nameEn: 'Sharqia' },
  { id: 'gharbia', nameAr: 'الغربية', nameEn: 'Gharbia' },
  { id: 'monufia', nameAr: 'المنوفية', nameEn: 'Monufia' },
  { id: 'qalyubia', nameAr: 'القليوبية', nameEn: 'Qalyubia' },
  { id: 'beheira', nameAr: 'البحيرة', nameEn: 'Beheira' },
  { id: 'kafr-el-sheikh', nameAr: 'كفر الشيخ', nameEn: 'Kafr El Sheikh' },
  { id: 'damietta', nameAr: 'دمياط', nameEn: 'Damietta' },
  { id: 'port-said', nameAr: 'بورسعيد', nameEn: 'Port Said' },
  { id: 'ismailia', nameAr: 'الإسماعيلية', nameEn: 'Ismailia' },
  { id: 'suez', nameAr: 'السويس', nameEn: 'Suez' },
  { id: 'fayoum', nameAr: 'الفيوم', nameEn: 'Fayoum' },
  { id: 'beni-suef', nameAr: 'بني سويف', nameEn: 'Beni Suef' },
  { id: 'minya', nameAr: 'المنيا', nameEn: 'Minya' },
  { id: 'matrouh', nameAr: 'مطروح', nameEn: 'Matrouh' },
  { id: 'new-valley', nameAr: 'الوادي الجديد', nameEn: 'New Valley' },
];
