import React from 'react';
import { ORGANISATION_INFO } from '../data/mockData';
import { Target, Compass, Award, Shield, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 rounded-3xl p-8 md:p-12 text-white text-center space-y-4 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="flex justify-center mb-2">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-white p-1 ring-4 ring-amber-400/30 shadow-2xl">
              <img 
                src={ORGANISATION_INFO.logo} 
                alt={ORGANISATION_INFO.nameUrdu}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>جامع ڈیجیٹل علمی و ادبی مرکز</span>
          </div>
          <h1 className="font-nastaliq text-3xl md:text-5xl font-bold text-white leading-relaxed">
            {ORGANISATION_INFO.nameUrdu}
          </h1>
          <p className="font-nastaliq text-lg md:text-2xl text-amber-300 font-medium">
            "{ORGANISATION_INFO.tagline}"
          </p>
          <div className="inline-block bg-slate-800/80 px-4 py-1.5 rounded-xl border border-slate-700 text-amber-400 font-bold text-xs dir-ltr">
            {ORGANISATION_INFO.website}
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="font-nastaliq text-2xl font-bold text-slate-900">
                ویب سائٹ کا وژن (Vision)
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-light bg-amber-50/50 p-5 rounded-2xl border border-amber-100">
              {ORGANISATION_INFO.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <Target className="w-6 h-6 text-blue-700" />
              </div>
              <h2 className="font-nastaliq text-2xl font-bold text-slate-900">
                ادارے کا مشن (Mission)
              </h2>
            </div>
            <div className="space-y-2.5">
              {ORGANISATION_INFO.mission.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Core Values (بنیادی اقدار) */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            <h2 className="font-nastaliq text-2xl font-bold text-slate-900">
              بنیادی اقدار (Core Values)
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {ORGANISATION_INFO.values.map((val, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center font-nastaliq text-base font-bold text-slate-900 hover:border-amber-400 hover:bg-amber-50 transition">
                {val}
              </div>
            ))}
          </div>
        </div>

        {/* Constitution & Rules (آئین و قواعد) */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 space-y-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Shield className="w-7 h-7 text-amber-400" />
            <div>
              <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-white">
                آئین و قواعد (Constitution & Rules)
              </h2>
              <p className="text-xs text-slate-400">تنظیمی شفافیت، میرٹ اور دائرۂ کار کی ضمانت</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
              <h3 className="font-bold text-amber-300 text-sm">۱. میرٹ اور غیر سیاسی پالیسی</h3>
              <p className="leading-relaxed">تنظیم تمام تر لسانی، مسلکی اور سیاسی وابستگیوں سے بالاطر ہو کر صرف اور صرف میرٹ، اردو ادب اور خدمت کو ترجیح دیتی ہے۔</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
              <h3 className="font-bold text-amber-300 text-sm">۲. ادبی اشاعت کے ضوابط</h3>
              <p className="leading-relaxed">ویب سائٹ اور میگزین میں صرف وہی مواد شائع ہوتا ہے جو اخلاقی، دینی، قومی اور اصلاحی اصولوں پر پورا اترے۔</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
              <h3 className="font-bold text-amber-300 text-sm">۳. اراکین کے حقوق</h3>
              <p className="leading-relaxed">تمام رجسٹرڈ اراکین کو آن لائن ورکشاپس، سرٹیفکیٹس، کتب کی ترویج اور مشاورت کا مساوی حق حاصل ہے۔</p>
            </div>
          </div>
        </div>

        {/* Unique Identity (PYVWF کی منفرد شناخت) */}
        <div className="bg-amber-500/10 border-2 border-amber-400 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-amber-900">
            <BookOpen className="w-6 h-6 text-amber-700" />
            <h2 className="font-nastaliq text-2xl font-bold text-slate-900">
              PYVWF کی منفرد شناخت
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-medium">
            اس ویب سائٹ کو عام ادبی ویب سائٹ نہیں بنایا گیا بلکہ اسے ایک جامع "ڈیجیٹل علمی و ادبی مرکز" کی شکل دی گئی ہے جہاں ادب محفوظ ہوگا، نئے لکھنے والوں کو موقع ملے گا، تربیت اور رہنمائی فراہم کی جائے گی، مقابلہ جات منعقد ہوں گے، اور سہ ماہی میگزین شائع ہوگا۔
          </p>
        </div>

      </div>
    </section>
  );
};
