export type PageTab = 
  | 'home'
  | 'about'
  | 'team'
  | 'news'
  | 'library'
  | 'authors'
  | 'members'
  | 'magazine'
  | 'kids'
  | 'courses'
  | 'competitions'
  | 'events'
  | 'gallery'
  | 'membership'
  | 'contact';

export type LiteraryCategory = 
  | 'غزل'
  | 'نظم'
  | 'آزاد نظم'
  | 'افسانہ'
  | 'مضمون'
  | 'کالم'
  | 'تحقیق'
  | 'تنقید'
  | 'سفرنامہ'
  | 'انٹرویو'
  | 'کتابی تبصرے';

export interface LiteraryWork {
  id: string;
  title: string;
  author: string;
  authorId?: string;
  category: LiteraryCategory;
  date: string;
  excerpt: string;
  content: string;
  likes: number;
  views: number;
  featured?: boolean;
  coverImage?: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  city: string;
  country: string;
  avatar: string;
  bio: string;
  literaryContributions: string[];
  publishedBooks: {
    title: string;
    cover: string;
    year: string;
    description: string;
  }[];
  totalWorks: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'کورسز' | 'ورکشاپس' | 'سیمینارز' | 'مقابلہ جات' | 'مشاعرے' | 'تنظیمی اعلانات';
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  urgent?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tier: 'president' | 'executive' | 'advisory' | 'provincial' | 'international';
  photo: string;
  bio: string;
  literaryServices: string;
  socialServices: string;
  message?: string;
  city: string;
  phone?: string;
  email?: string;
}

export interface MagazineIssue {
  id: string;
  title: string;
  issueNumber: string;
  season: string;
  year: string;
  coverImage: string;
  editorial: string;
  pdfUrl: string;
  featuredArticles: {
    title: string;
    author: string;
    page: number;
  }[];
}

export interface KidsItem {
  id: string;
  title: string;
  category: 'کہانیاں' | 'نظمیں' | 'مضامین' | 'ڈرائنگ' | 'بچوں کے مقابلے' | 'بچوں کی تخلیقات';
  author: string;
  age: string;
  date: string;
  content: string;
  image?: string;
}

export interface Course {
  id: string;
  title: string;
  category: 'Creative Writing' | 'شاعری' | 'افسانہ' | 'کالم' | 'Graphic Designing' | 'Video Editing' | 'Voice Over';
  instructor: string;
  duration: string;
  mode: 'آن لائن' | 'آف لائن';
  fee: string;
  status: 'حالیہ سیشن' | 'عنقریب' | 'مملو';
  image: string;
  description: string;
  curriculum: string[];
}

export interface Competition {
  id: string;
  title: string;
  category: 'ادبی' | 'تعلیمی' | 'تخلیقی' | 'بچوں کے مقابلے';
  deadline: string;
  prize: string;
  eligibility: string;
  rules: string[];
  status: 'جاری ہے' | 'مکمل' | 'عنقریب';
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  type: 'سیمینار' | 'مشاعرہ' | 'تربیتی پروگرام' | 'کانفرنس';
  date: string;
  time: string;
  venue: string;
  city: string;
  description: string;
  isUpcoming: boolean;
  image: string;
  chiefGuest?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'photo' | 'video';
  url: string;
  thumbnail?: string;
  category: string;
  date: string;
}

export interface Member {
  id: string;
  membershipId: string;
  name: string;
  field: string;
  city: string;
  country: string;
  avatar: string;
  category: 'طالب علم' | 'مصنف / شاعر' | 'نوجوان ممبر' | 'سینئر ممبر';
  joinDate: string;
  phonePrivate?: string;
  emailPrivate?: string;
}

export interface AdBanner {
  id: string;
  type: 'top' | 'sidebar' | 'book' | 'sponsored';
  title: string;
  subtitle?: string;
  image: string;
  linkText: string;
}
