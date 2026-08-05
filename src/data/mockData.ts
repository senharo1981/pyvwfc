import {
  LiteraryWork,
  Author,
  NewsItem,
  TeamMember,
  MagazineIssue,
  KidsItem,
  Course,
  Competition,
  EventItem,
  GalleryItem,
  Member,
  AdBanner
} from '../types';
import logoImg from '../assets/images/pyvwf_official_logo_1785860781972.jpg';
import founderPhoto from '../assets/images/adnan_ilyas_exact_1785861715738.jpg';

export const ORGANISATION_INFO = {
  logo: logoImg,
  nameUrdu: "پاکستان یوتھ وائس اینڈ رائٹرز فورم",
  nameShort: "PYVWF",
  nameEnglish: "Pakistan Youth Voice & Writers Forum",
  website: "www.PYVWF.org",
  tagline: "جہاں اس دور میں مستقبل کے معماروں کو خوابوں کی تعبیر ملتی ہے۔",
  motto: "علم • ادب • کردار • خدمت",
  email: "adnan@pyvwf.org",
  whatsapp: "+92 303 3413307",
  address: "مرکزی دفتر: یوتھ لٹریری سینٹر، گلبرگ 3، لاہور، پاکستان",
  vision: "پاکستان یوتھ وائس اینڈ رائٹرز فورم کو اردو زبان و ادب، نوجوانوں کی فکری و تخلیقی تربیت، تحقیق، مطالعہ، آن لائن تعلیم، ادبی سرگرمیوں، مصنفین و شعراء کی ترویج، اور قومی و بین الاقوامی علمی روابط کے لیے ایک ایسا عالمی معیار کا ڈیجیٹل پلیٹ فارم بنانا جہاں ہر عمر کے افراد سیکھ سکیں، لکھ سکیں، پڑھ سکیں، اپنی تخلیقات شائع کر سکیں اور باوقار انداز میں اپنی شناخت قائم کر سکیں۔",
  mission: [
    "نوجوان نسل کی مثبت تربیت اور فکری آبیاری",
    "اردو زبان و ادب کا قومی و بین الاقوامی فروغ",
    "نوآموز اور باصلاحیت اہل قلم کی حوصلہ افزائی",
    "مطالعہ، تحقیق اور کتب بینی کا فروغ",
    "تخلیقی صلاحیتوں (ادب، خطاطی، صحافت) کی ترقی",
    "آن لائن اور آف لائن تعلیمی و تربیتی ورکشاپس",
    "قومی اور بین الاقوامی ادبی روابط کی استواری"
  ],
  values: [
    "دیانت داری", "شفافیت", "احترام", "خدمت", "علم دوستی", "ادب پروری", "تحقیق", "میرٹ", "اتحاد", "مثبت سوچ"
  ],
  stats: {
    members: 12500,
    authors: 650,
    works: 3400,
    books: 180,
    countries: 28,
    cities: 145
  }
};

export const MOCK_FOUNDER: TeamMember = {
  id: 'founder-1',
  name: 'عدنان الیاس',
  role: 'بانی و چیئرمین / مرکزی صدر (PYVWF)',
  tier: 'president',
  photo: founderPhoto,
  city: 'لاہور',
  bio: 'معروف ادیب، فکرِ نو کے علمبردار اور بانی پاکستان یوتھ وائس اینڈ رائٹرز فورم (PYVWF)۔ نوجوانوں کو ادبی و فکری میدان میں منظم کرنے، علم و قلم کی پاسداری اور ان کی صلاحیتوں کو اجاگر کرنے کے لیے کوشاں ہیں۔',
  literaryServices: 'ادبی و اصلاحی تحریروں کے مصنف، متعدد تعلیمی و ادبی جرائد کے سرپرستِ اعلیٰ، اور ملک بھر کے نوجوان اہل قلم کے رہبر و قائد۔',
  socialServices: 'نوجوانوں کی فکری تربیت، آن لائن مطالعہ گاہ، مفت تحریری ورکشاپس اور ادبا کی سرپرستی کے فلاحی منصوبوں کے روحِ رواں۔',
  message: 'نوجوان ہمارا عظیم ترین اثاثہ ہیں۔ اگر ان کے ہاتھوں میں قلم، فکر میں پختگی اور دلوں میں خدمت کا جذبہ رہے گا تو ہمارا معاشرہ امن، علم اور ادب کا گہوارہ بنے گا۔ PYVWF نوجوانوں کی آواز اور ان کے خوابوں کی تعبیر کا روشن نام ہے۔'
};

export const MOCK_TEAM: TeamMember[] = [
  MOCK_FOUNDER,
  {
    id: 'team-2',
    name: 'سیدہ عائشہ فاطمہ',
    role: 'نائب صدر (خواتین شعبہ)',
    tier: 'executive',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    city: 'اسلام آباد',
    bio: 'معروف افسانہ نگار و کالم نگار، خواتین کے ادبی و تخلیقی تحریری حقوق کی سرگرم علمبردار۔',
    literaryServices: 'دو افسانوی مجموعے "خواب اور چراغ" اور "حرفِ صداقت" شائع ہو چکے ہیں۔',
    socialServices: 'طالبات کی تخلیقی صلاحیتوں کی آبیاری کے لیے سالانہ ورکشاپس کا انعقاد۔'
  },
  {
    id: 'team-3',
    name: 'احمد رضا چوہدری',
    role: 'جنرل سیکرٹری',
    tier: 'executive',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    city: 'کراچی',
    bio: 'محقق، نقاد اور صحافی۔ PYVWF کے تنظیمی ڈھانچے اور آئین کے ترتیب کار۔',
    literaryServices: 'ادبی تنقید پر مقالات اور تین کتابیں شائع شدہ۔',
    socialServices: 'کراچی کے نوجوانوں میں کتب بینی تحریک کے روحِ رواں۔'
  },
  {
    id: 'team-4',
    name: 'محمد ہارون رشید',
    role: 'سیکرٹری نشریات و میڈیا',
    tier: 'executive',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    city: 'پشاور',
    bio: 'ڈیجیٹل میگزین کے چیف ایڈیٹر، وائس اوور آرٹسٹ اور بلاگر۔',
    literaryServices: 'سہ ماہی میگزین PYVWF کی تدوین اور ڈیجیٹل لائبریری کے منتظم۔',
    socialServices: 'خیبر پختونخوا میں آن لائن ادبی مقابلوں کے بانی۔'
  },
  {
    id: 'team-5',
    name: 'ڈاکٹر طارق محمود ظفر',
    role: 'چیئرمین مشاورتی بورڈ',
    tier: 'advisory',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    city: 'راولپنڈی',
    bio: 'سابق پروفیسر شعبہ اردو، پنجاب یونیورسٹی و کالم نگار۔',
    literaryServices: 'تحقیق و تدوین میں ۳۰ سالہ تجربہ، متعدد قومی ایوارڈز یافتہ۔',
    socialServices: 'ادبی اداروں کی سرپرستی اور نوجوانوں کو وظائف کی فراہمی۔'
  },
  {
    id: 'team-6',
    name: 'حکیم محمد الیاس صدیقی',
    role: 'بین الاقوامی نمائندہ (یو کے)',
    tier: 'international',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    city: 'لندن، برطانیہ',
    bio: 'بیرون ملک اردو ادب کی ترویج کے لیے متحرک ادبی شخصیت۔',
    literaryServices: 'برطانیہ میں اردو مشاعروں اور ورکشاپس کا انعقاد۔',
    socialServices: 'دیارِ غیر میں مقیم پاکستانی بچوں کو اردو سیکھانے کا پروجیکٹ۔'
  }
];

export const MOCK_TICKER_NEWS: string[] = [
  "📢 سیشن ۲۰۲۶-۲۷ کے لیے نئی ممبرشپ کے آن لائن فارم دستیاب ہیں!",
  "🏆 کل پاکستان سالانہ بین الکلیاتی شاعری و مضمون نویسی مقابلہ - رجسٹریشن کا آخری دن ۲۰ اگست",
  "📚 سہ ماہی آن لائن میگزین PYVWF (شمارہ شمارہ ۳) آن لائن مطالعہ اور PDF ڈاؤنلوڈ کے لیے تیار ہے",
  "🎨 بچوں کا گھر: ننھے تخلیق کاروں کے لیے ڈرائنگ اور کہانی نویسی کا خصوصی مقابلہ شروع",
  "💻 تخلیقی تحریر اور وائس اوور آن لائن سرٹیفکیٹ کورس کی نئی کلاسز کا آغاز ۲۵ اگست سے"
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'PYVWF کے زیرِ اہتمام کل پاکستان آن لائن مشاعرہ و ادبی کانفرنس کا انعقاد',
    category: 'مشاعرے',
    date: '۰۲ اگست ۲۰۲۶',
    excerpt: 'ملک بھر سے سو سے زائد نوجوان اور سینئر شعراء نے شرکت کی، اور اصلاحِ معاشرہ و حبِ وطن کے موضوعات پر دلپذیر کلام پیش کیا۔',
    content: 'پاکستان یوتھ وائس اینڈ رائٹرز فورم کے زیرِ اہتمام ایک عظیم الشان آن لائن کل پاکستان مشاعرہ منعقد ہوا۔ تقریب کی صدارت پروفیسر ڈاکٹر طارق محمود نے کی جبکہ مہمانِ خاص بانی صدر عدنان الیاس تھے۔ مشاعرے میں ملک کے مختلف شہروں سمیت برطانیہ اور سعودی عرب میں مقیم پاکستانی نوجوان شعراء نے بھی کلام پیش کیا۔',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    urgent: true
  },
  {
    id: 'news-2',
    title: 'مفت آن لائن کرئیٹو رائٹنگ اور کالم نگاری ورکشاپ کی رجسٹریشن شروع',
    category: 'ورکشاپس',
    date: '۲۸ جولائی ۲۰۲۶',
    excerpt: 'نوجوانوں کو جدید صحافت اور تخلیقی تحریر کی بنیادی باریکیاں سکھانے کے لیے ۲ ہفتہ وار آن لائن سیشنز۔',
    content: 'PYVWF اکیڈمی کے تحت نئے لکھنے والوں کے لیے ایک جامع ورکشاپ تیار کی گئی ہے جس میں کالم نگاری، افسانہ نگاری اور بلاگنگ کے بنیادی اصول سکھائے جائیں گے۔ تمام کامیاب شرکاء کو ڈیجیٹل سرٹیفکیٹ دیے جائیں گے۔',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'news-3',
    title: 'سہ ماہی میگزین کا نیا شمارہ شائع: خصوصی گوشہ "اقبال کا فلسفہ اور نوجوان"',
    category: 'تنظیمی اعلانات',
    date: '۱۵ جولائی ۲۰۲۶',
    excerpt: 'شمارے میں ملک کے ممتاز کالم نگاروں، محققین اور فورم کے نئے مصنفین کی شاہکار تحریریں شامل ہیں۔',
    content: 'سہ ماہی ڈیجیٹل میگزین کا تیسرا شمارہ باضابطہ جاری کر دیا گیا ہے۔ قاریین اب آن لائن ریڈر فلپ بک اور PDF فارمیٹ میں مفت ڈاؤنلوڈ کر سکتے ہیں۔',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_LITERARY_WORKS: LiteraryWork[] = [
  {
    id: 'lit-1',
    title: 'چراغِ آرزو اور روشنی کا سفر',
    author: 'عدنان الیاس (بانی)',
    category: 'غزل',
    date: '۰۳ اگست ۲۰۲۶',
    excerpt: 'ہوا کی ضد سے چراغِ وفا جلائے رکھ\nکوئی تو آئے گا تم آس بس لگائے رکھ',
    content: `ہوا کی ضد سے چراغِ وفا جلائے رکھ
کوئی تو آئے گا تم آس بس لگائے رکھ

سیاہ شب کی ردا کو چیر کر نکلنا ہے
قدَم کو راہِ تمنا میں یوں جمائے رکھ

نہ توڑ حوصلۂ زیست گردشِ دوراں
دیارِ فکر میں امید کو سجائے رکھ

وفا کی راہ میں ملیں گے لاکھ کانٹے مگر
گلوں کی خوشبو سے دامن کو مسکرائے رکھ`,
    likes: 342,
    views: 1250,
    featured: true
  },
  {
    id: 'lit-2',
    title: 'مستقبل کے معمار اور ہماری فکری ذمہ داریاں',
    author: 'احمد رضا چوہدری',
    category: 'مضمون',
    date: '۰۱ اگست ۲۰۲۶',
    excerpt: 'کسی بھی قوم کا حقیقی سرمایہ اس کا زر و سیم نہیں بلکہ اس کی باصلاحیت اور صاحبِ فکر نوجوان نسل ہوتی ہے...',
    content: `کسی بھی قوم کا حقیقی سرمایہ اس کا زر و سیم نہیں بلکہ اس کی باصلاحیت اور صاحبِ فکر نوجوان نسل ہوتی ہے۔ آج کا دور معلومات کے انفجار (Information Explosion) کا دور ہے۔ اس دور میں اگر نوجوانوں کی فکری بالیدگی اور اخلاقی تربیت پر توجہ نہ دی جائے تو ٹیکنالوجی کا مثبت استعمال منفی سمت اختیار کر سکتا ہے۔

پاکستان یوتھ وائس اینڈ رائٹرز فورم نے اسی ضرورت کے پیشِ نظر نوجوانوں کو ایک ایسا مثبت ماحول فراہم کیا ہے جہاں وہ اپنی تحریری و تقریری صلاحیتوں کو جلا بخش سکتے ہیں۔ ہمیں چاہیے کہ ہم مطالعے کی روایت کو دوبارہ زندہ کریں اور سوشل میڈیا کو علم و ادب کے فروغ کا وسیلہ بنائیں۔`,
    likes: 215,
    views: 890,
    featured: true
  },
  {
    id: 'lit-3',
    title: 'پرانا موڑ اور اجنبی سائے',
    author: 'سیدہ عائشہ فاطمہ',
    category: 'افسانہ',
    date: '۲۹ جولائی ۲۰۲۶',
    excerpt: 'گاؤں کے پرانے برگد کے نیچے شام کے وقت جب ٹھنڈی ہوا چلتی تو علی وہاں بیٹھ کر کتابیں پڑھا کرتا تھا...',
    content: `گاؤں کے پرانے برگد کے نیچے شام کے وقت جب ٹھنڈی ہوا چلتی تو علی وہاں بیٹھ کر کتابیں پڑھا کرتا تھا۔ وہ گاؤں کا واحد لڑکا تھا جو شہر کے کالج میں پڑھتا تھا اور اس کا خواب تھا کہ وہ اپنے گاؤں میں ایک عظیم الشان لائبریری قائم کرے۔

لوگ اسے دیوانہ کہتے تھے۔ "علی میاں! روٹی کتابوں سے نہیں ملتی، ہل چلانے سے ملتی ہے۔" مگر علی خاموشی سے مسکرا دیتا اور کہتا: "چاچا! روٹی پیٹ بھرتی ہے اور کتاب روح کو زندگی دیتی ہے۔"

آج تیس سال بعد جب گاؤں کا ہر بچہ اس کے ہاتھوں قائم کردہ 'چراغِ علم لائبریری' میں پڑھ رہا تھا، تو برگد کا پرانا درخت جیسے علی کی فکر کو سلام پیش کر رہا تھا۔`,
    likes: 410,
    views: 1560,
    featured: true
  },
  {
    id: 'lit-4',
    title: 'نئے عہد کی اذان (نظم)',
    author: 'محمد ہارون رشید',
    category: 'نظم',
    date: '۲۵ جولائی ۲۰۲۶',
    excerpt: 'اٹھو کہ صبحِ نو کا نور آ رہا ہے\nدیارِ شرق پر ایک سرور آ رہا ہے',
    content: `اٹھو کہ صبحِ نو کا نور آ رہا ہے
دیارِ شرق پر ایک سرور آ رہا ہے

تمہاری محنتوں کا رنگ لائے گا صبا
دلوں کے شیش محل پر شعور آ رہا ہے

قلم اٹھاؤ کہ حَرفِ صداقت کا وقت ہے
کہ ظُلمتوں کو اب زوالِ غرور آ رہا ہے`,
    likes: 189,
    views: 730
  },
  {
    id: 'lit-5',
    title: 'کتابی تبصرہ: "کلیاتِ اقبال میں نوجوانوں کا پیغام"',
    author: 'ڈاکٹر طارق محمود ظفر',
    category: 'کتابی تبصرے',
    date: '۲۰ جولائی ۲۰۲۶',
    excerpt: 'زیرِ تبصرہ کتاب اقبال شناسی کے باب میں ایک گراں قدر اضافہ ہے جس میں فکرِ اقبال کو آسان اور عام فہم انداز میں پیش کیا گیا ہے۔',
    content: `اقبال کا کلام ہر دور کے نوجوانوں کے لیے مشعلِ راہ ہے۔ زیرِ نظر تصنیف میں مصنف نے اقبال کے شاہین اور خودی کے فلسفے پر نہایت جامع بحث کی ہے۔ کتاب کا اسلوب سادہ، شگفتہ اور دلنشیں ہے۔ نوجوان نسل کو اس کتاب کا مطالعہ لازمی کرنا چاہیے۔`,
    likes: 275,
    views: 940
  }
];

export const MOCK_AUTHORS: Author[] = [
  {
    id: 'author-1',
    name: 'عدنان الیاس',
    role: 'بانی و چیئرمین PYVWF',
    city: 'لاہور',
    country: 'پاکستان',
    avatar: founderPhoto,
    bio: 'اردو ادب کی ترویج، نوجوانوں کی فکری تربیت اور پاکستان یوتھ وائس اینڈ رائٹرز فورم کے بانی۔',
    literaryContributions: ['بانی PYVWF', 'مدیر اعلیٰ سہ ماہی پیامِ یوتھ', 'اصلاحِ فکر و تحریر'],
    publishedBooks: [
      { title: 'چراغِ آرزو (شاعری)', cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400', year: '۲۰۲۱', description: 'اردو غزل کا نکھرا ہوا اسلوب' },
      { title: 'نوجوان اور سفرِ علم', cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400', year: '۲۰۲۴', description: 'نوجوانوں کی تربیتی راہنمائی' }
    ],
    totalWorks: 48
  },
  {
    id: 'author-2',
    name: 'سیدہ عائشہ فاطمہ',
    role: 'افسانہ نگار و کالم نگار',
    city: 'اسلام آباد',
    country: 'پاکستان',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'خواتین کے مسائل اور معاشرتی موضوعات پر پراثر افسانے اور کالم تحریر کرتی ہیں۔',
    literaryContributions: ['افسانوی مجموعہ', 'کالم نگاری', 'ورکشاپ انسٹرکٹر'],
    publishedBooks: [
      { title: 'خواب اور چراغ (افسانے)', cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400', year: '۲۰۲۲', description: 'حقیقت نگاری سے مزین افسانے' }
    ],
    totalWorks: 32
  },
  {
    id: 'author-3',
    name: 'احمد رضا چوہدری',
    role: 'محقق و ناقد',
    city: 'کراچی',
    country: 'پاکستان',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'جدید اردو ادب اور تنقید پر درجنوں مضامین کے مصنف۔',
    literaryContributions: ['ادبی تنقید', 'تحقیقی مقالاجات', 'تاریخِ ادب'],
    publishedBooks: [
      { title: 'جدید اردو تنقید کا منظرنامہ', cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400', year: '۲۰۲۳', description: 'معاصر ادبی جہتیں' }
    ],
    totalWorks: 29
  },
  {
    id: 'author-4',
    name: 'محمد ہارون رشید',
    role: 'شاعر و مترجم',
    city: 'پشاور',
    country: 'پاکستان',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: 'نظم و غزل کے نوجوان شاعر، عالمی شاہکاروں کے اردو تراجم کے لیے مشہور۔',
    literaryContributions: ['نظم نگاری', 'تراجم', 'صوتی کلام'],
    publishedBooks: [
      { title: 'نئے عہد کی اذان (شاعری)', cover: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=400', year: '۲۰۲۵', description: 'انقلابی و تربیتی نظمیں' }
    ],
    totalWorks: 24
  }
];

export const MOCK_MAGAZINE_ISSUES: MagazineIssue[] = [
  {
    id: 'mag-1',
    title: 'سہ ماہی پیامِ یوتھ - شمارہ ۳',
    issueNumber: '۰۳',
    season: 'موسمِ تابستان',
    year: '۲۰۲۶',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    editorial: 'نوجوانوں کی قلمی جدوجہد اور وقت کا تقاضا - تحریر: بانی و ایڈیٹر بانی عدنان الیاس',
    pdfUrl: '#download-pdf-mag-3',
    featuredArticles: [
      { title: 'اقبال کا شاہین اور عصرِ حاضر', author: 'ڈاکٹر طارق محمود', page: 6 },
      { title: 'اردو زبان کی بقا ڈیجیٹل دور میں', author: 'احمد رضا', page: 14 },
      { title: 'منتخب غزلیاتِ یوتھ شعراء', author: 'متعدد شعراء', page: 22 },
      { title: 'بچوں کا ادب: ذمہ داریاں اور امکانات', author: 'سیدہ عائشہ فاطمہ', page: 34 }
    ]
  },
  {
    id: 'mag-2',
    title: 'سہ ماہی پیامِ یوتھ - شمارہ ۲',
    issueNumber: '۰۲',
    season: 'موسمِ بہار',
    year: '۲۰۲۶',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
    editorial: 'مطالعہ اور کتب بینی کی ازسرنو بحالی - تحریر: ایڈیٹر بورڈ',
    pdfUrl: '#download-pdf-mag-2',
    featuredArticles: [
      { title: 'تخلیقی تحریر کے ۵ سنہری اصول', author: 'محمد ہارون رشید', page: 5 },
      { title: 'نئے افسانے کی تعبیر', author: 'عائشہ فاطمہ', page: 18 }
    ]
  },
  {
    id: 'mag-3',
    title: 'سہ ماہی پیامِ یوتھ - شمارہ ۱ (افتتاحی شمارہ)',
    issueNumber: '۰۱',
    season: 'موسمِ سرما',
    year: '۲۰۲۵',
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    editorial: 'سفر کا آغاز: چراغ سے چراغ جلتا ہے',
    pdfUrl: '#download-pdf-mag-1',
    featuredArticles: [
      { title: 'PYVWF کا منشور اور مقاصد', author: 'بانی صدر', page: 4 }
    ]
  }
];

export const MOCK_KIDS_ITEMS: KidsItem[] = [
  {
    id: 'kid-1',
    title: 'سچائی کا انعام (دلچسپ تربیتی کہانی)',
    category: 'کہانیاں',
    author: 'ام کلثوم (عمر: ۱۲ سال)',
    age: '۱۰ تا ۱۴ سال',
    date: '۰۲ اگست ۲۰۲۶',
    content: 'ایک گاؤں میں اسد نامی ایک ایماندار لڑکا رہتا تھا۔ ایک دن اسے راستے میں ایک قیمتی بٹوا ملا۔ اس نے بغیر کسی لالچ کے بٹوا اس کے مالک تک پہنچا دیا...',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'kid-2',
    title: 'میرا پیارا پاکستان (نظم)',
    category: 'نظمیں',
    author: 'زین العابدین (عمر: ۹ سال)',
    age: '۶ تا ۱۰ سال',
    date: '۳۰ جولائی ۲۰۲۶',
    content: 'ہرے بھرے ہیں کھیت اس کے، اونچے ہیں کہسار\nمیرا پیارا پاکستان ہے پھولوں کا گلزار!',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'kid-3',
    title: 'بچوں کا سالانہ مصوری و ڈرائنگ مقابلہ',
    category: 'ڈرائنگ',
    author: 'فورم ایڈمن',
    age: '۵ تا ۱۵ سال',
    date: '۲۵ جولائی ۲۰۲۶',
    content: 'موضوع: "سرسبز پاکستان" - تمام بچے اپنی مصوری کی تصاویر آن لائن اپلوڈ کر سکتے ہیں۔ بہترین ۳ شاہکاروں کو سرٹیفکیٹ اور خصوصی تحائف ملیں گے۔',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600'
  }
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'مفت آن لائن کرئیٹو رائٹنگ و افسانہ نگاری سرٹیفکیٹ کورس',
    category: 'Creative Writing',
    instructor: 'سیدہ عائشہ فاطمہ و ٹیم',
    duration: '۴ ہفتے (۸ آن لائن سیشنز)',
    mode: 'آن لائن',
    fee: 'مفت (برائے فورم ممبران)',
    status: 'حالیہ سیشن',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600',
    description: 'تخلیقی تحریر کے تمام بنیادی اصول، کردار نگاری، پلاٹ کی ساخت اور اردو افسانے کے عصری تقاضوں پر پریکٹیکل ترین۔',
    curriculum: [
      'سیشن ۱: تخلیقی سوچ کا آغاز اور خیال کی پیدائش',
      'سیشن ۲: افسانے کا پلاٹ اور نقطۂ عروج (Climax)',
      'سیشن ۳: کردار نگاری اور مکالمہ نویسی',
      'سیشن ۴: اسلوب اور زبان و بیان کی نفاست',
      'سیشن ۵: عملی مشق اور تصحیح کی نشت'
    ]
  },
  {
    id: 'course-2',
    title: 'کالم نگاری اور ڈیجیٹل جرنلزم ماسٹر کلاس',
    category: 'کالم',
    instructor: 'احمد رضا چوہدری',
    duration: '۳ ہفتے',
    mode: 'آن لائن',
    fee: 'مفت',
    status: 'عنقریب',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600',
    description: 'مقالہ اور کالم میں فرق، موضوع کے انتخاب کے اصول، اور اخبارات و ویب سائٹس کو تحریر بھیجنے کے طرائق۔',
    curriculum: ['موضوع کا انتخاب', 'سرخی اور ابتدائیہ', 'دلیل کی ساخت', 'اختتامیہ']
  },
  {
    id: 'course-3',
    title: 'وائس اوور اور اردو تلفظ و نطق ورکشاپ',
    category: 'Voice Over',
    instructor: 'محمد ہارون رشید',
    duration: '۲ ہفتے',
    mode: 'آن لائن',
    fee: 'مفت',
    status: 'حالیہ سیشن',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600',
    description: 'صحیح اردو اعراب، تلفظ کی درستگی، آواز کا اتار چڑھاؤ اور پوڈکاسٹ کے لیے وائس ریکارڈنگ کی تکنیک۔',
    curriculum: ['مخارج اور اعراب', 'تحریر کی ادائیگی', 'مائیک ٹیکنیک']
  },
  {
    id: 'course-4',
    title: 'گرافک ڈیزائننگ برائے سوشل میڈیا و بک کور',
    category: 'Graphic Designing',
    instructor: 'اسامہ خان (سینئر ڈیزائنر)',
    duration: '۴ ہفتے',
    mode: 'آن لائن',
    fee: 'مفت',
    status: 'عنقریب',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
    description: 'کتابوں کے خوبصورت کور، اردو پوسٹرز اور سوشل میڈیا بینرز بنانے کی تکنیک۔',
    curriculum: ['Canva & Photoshop Basics', 'Urdu Typography & Calligraphy', 'Book Cover Layout design']
  }
];

export const MOCK_COMPETITIONS: Competition[] = [
  {
    id: 'comp-1',
    title: 'کل پاکستان سالانہ جوانِ ملت شاعری مقابلہ ۲۰۲۶',
    category: 'ادبی',
    deadline: '۲۰ اگست ۲۰۲۶',
    prize: 'پہلا انعام: ۲۵,۰۰۰ روپے + شیلڈ | دوسرا انعام: ۱۵,۰۰۰ روپے | تیسرا انعام: ۱۰,۰۰۰ روپے',
    eligibility: 'عمر: ۱۵ تا ۳۵ سال',
    rules: [
      'کلام بالکل غیر مطبوعہ اور ذاتی تخلیق ہونا چاہیے۔',
      'موضوع: "پاکستان کا روشن مستقبل" یا آزاد موضوع۔',
      'غزل یا نظم دونوں شعبوں میں حصہ لیا جا سکتا ہے۔',
      'انتخاب جیوری کے میرٹ فیصلوں پر مبنی ہوگا۔'
    ],
    status: 'جاری ہے',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'comp-2',
    title: 'قومی مضمون نویسی مقابلہ: "علامہ اقبال کا پیغام اور عصرِ حاضر"',
    category: 'تعلیمی',
    deadline: '۳۰ اگست ۲۰۲۶',
    prize: 'سرٹیفکیٹ، نقد انعامات اور میگزین میں اشاعت',
    eligibility: 'تمام طالب علم اور اہل قلم',
    rules: ['تحریر ۱۰۰۰ تا ۱۵۰۰ الفاظ پر مشتمل ہو۔', 'اردو املا اور قواعد کا خاص خیال رکھا جائے۔'],
    status: 'جاری ہے',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=600'
  }
];

export const MOCK_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    title: 'سالانہ کل پاکستان ادب و یوتھ کانفرنس ۲۰۲۶',
    type: 'کانفرنس',
    date: '۱۵ ستمبر ۲۰۲۶',
    time: 'صبح ۱۰:۰۰ بجے',
    venue: 'الحمراء آرٹس کونسل، ہال نمبر ۲',
    city: 'لاہور',
    description: 'ملک بھر سے نامور ادیب، ڈائریکٹرز، طلباء اور شعراء اکٹھے ہوں گے۔ اہم علمی و ادبی نشستیں اور ایوارڈ تقریب۔',
    isUpcoming: true,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    chiefGuest: 'وزیر اطلاعات و معروف ادیب'
  },
  {
    id: 'event-2',
    title: 'آن لائن فکری نشت: "فکرِ اقبال اور اردو خطاطی"',
    type: 'سیمینار',
    date: '۲۸ اگست ۲۰۲۶',
    time: 'شام ۰۸:۰۰ بجے (زوم پریمیم)',
    venue: 'آن لائن (Zoom / Facebook Live)',
    city: 'آن لائن',
    description: 'مشہور خطاط اور محققین کی خصوصی گفتگو اور لائیو مظاہرہ۔',
    isUpcoming: true,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'event-3',
    title: 'بہاریہ کل پاکستان نوجوان مشاعرہ (ماضی)',
    type: 'مشاعرہ',
    date: '۱۰ مارچ ۲۰۲۶',
    time: 'شام ۰۶:۰۰ بجے',
    venue: 'پشاور پریس کلب',
    city: 'پشاور',
    description: '۸۰ سے زائد نوجوانوں کی شرکت اور بہترین کلام کی داد۔',
    isUpcoming: false,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_MEMBERS: Member[] = [
  {
    id: 'mem-1',
    membershipId: 'PYVWF-2026-0101',
    name: 'حسان علی شاہ',
    field: 'شاعر و کالم نگار',
    city: 'ملتان',
    country: 'پاکستان',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    category: 'مصنف / شاعر',
    joinDate: 'جنوری ۲۰۲۶',
    phonePrivate: '+92 301 2345678',
    emailPrivate: 'hassan@example.com'
  },
  {
    id: 'mem-2',
    membershipId: 'PYVWF-2026-0102',
    name: 'مریم نور',
    field: 'طالب علم و افسانہ نگار',
    city: 'فیصل آباد',
    country: 'پاکستان',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    category: 'طالب علم',
    joinDate: 'فروری ۲۰۲۶',
    phonePrivate: '+92 302 3456789',
    emailPrivate: 'maryam@example.com'
  },
  {
    id: 'mem-3',
    membershipId: 'PYVWF-2026-0103',
    name: 'حماد احمد صدیقی',
    field: 'محقق و بلاگر',
    city: 'حیدرآباد',
    country: 'پاکستان',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    category: 'نوجوان ممبر',
    joinDate: 'مارچ ۲۰۲۶',
    phonePrivate: '+92 303 4567890',
    emailPrivate: 'hammad@example.com'
  },
  {
    id: 'mem-4',
    membershipId: 'PYVWF-2026-0104',
    name: 'ڈاکٹر سہیل اصغر',
    field: 'سینئر پروفیسر و ناقد',
    city: 'سیالکوٹ',
    country: 'پاکستان',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    category: 'سینئر ممبر',
    joinDate: 'اپریل ۲۰۲۶',
    phonePrivate: '+92 304 5678901',
    emailPrivate: 'sohail@example.com'
  }
];

export const MOCK_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'سالانہ ادبی ایوارڈ تقریب ۲۰۲۶ - الحمراء لاہور',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    category: 'ایوارڈز',
    date: 'مئی ۲۰۲۶'
  },
  {
    id: 'gal-2',
    title: 'آن لائن رائٹنگ ورکشاپ کے شرکاء کا گروپ فوٹو',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    category: 'ورکشاپس',
    date: 'جون ۲۰۲۶'
  },
  {
    id: 'gal-3',
    title: 'کل پاکستان نوجوان مشاعرہ پشاور - ریکارڈنگ',
    type: 'video',
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800',
    category: 'مشاعرہ',
    date: 'مارچ ۲۰۲۶'
  },
  {
    id: 'gal-4',
    title: 'بچوں کے سالانہ مقابلے کی تصویری رپورٹ',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    category: 'بچوں کا گھر',
    date: 'اپریل ۲۰۲۶'
  }
];

export const MOCK_ADS: AdBanner[] = [
  {
    id: 'ad-top-1',
    type: 'top',
    title: 'مفت آن لائن ممبرشپ رجسٹریشن سیشن ۲۰۲۶-۲۷ کھلی ہے!',
    subtitle: 'ابھی شامل ہوں اور اپنی تحریریں شائع کروائیں',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200',
    linkText: 'رجسٹریشن کریں'
  },
  {
    id: 'ad-side-1',
    type: 'sidebar',
    title: 'نئی کتاب: چراغِ آرزو',
    subtitle: 'مصنف: عدنان الیاس (بانی PYVWF) - 20% رعایتی قیمت',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    linkText: 'آن لائن آرڈر کریں'
  },
  {
    id: 'ad-book-1',
    type: 'book',
    title: 'شائع شدہ کتب کی آن لائن ترویج و اشتہار',
    subtitle: 'اپنی کتاب کو پاکستان بھر کے ۵۰ ہزار+ قارئین تک پہنچائیں',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600',
    linkText: 'کتاب رجسٹر کریں'
  }
];
