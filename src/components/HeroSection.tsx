import React from 'react';
import { ORGANISATION_INFO } from '../data/mockData';
import { PageTab } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import { 
  Feather, 
  BookOpen, 
  UserPlus, 
  Award, 
  Users, 
  BookMarked, 
  Globe, 
  Building2, 
  PenTool,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenSubmissionModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab, onOpenSubmissionModal }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden py-12 md:py-20 border-b border-slate-800">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,119,6,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.15),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Right Column (Urdu Calligraphic Content) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>عالمی معیار کا ڈیجیٹل علمی و ادبی مرکز</span>
            </div>

            {/* Main Title & Tagline */}
            <div className="space-y-3">
              <h1 className="font-nastaliq text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-relaxed text-amber-100">
                {ORGANISATION_INFO.nameUrdu}
              </h1>
              <p className="font-nastaliq text-lg md:text-2xl text-amber-400/90 font-medium">
                "{ORGANISATION_INFO.tagline}"
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              اردو زبان و ادب کی ترویج، نوجوان نسل کی فکری تربیت، تحقیق و مطالعہ، آن لائن کتب، 
              اور پاکستان سمیت دنیا بھر کے اہل قلم کو ایک ہی ڈیجیٹل پلیٹ فارم پر منظم کرنے کا باوقار ادارہ۔
            </p>

            {/* Core Pillars Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['علم', 'ادب', 'کردار', 'خدمت', 'تحقیق', 'ایمانداری'].map((val, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-slate-800/80 text-slate-200 text-xs font-medium border border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {val}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={onOpenSubmissionModal}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm hover:from-amber-400 hover:to-amber-500 transition shadow-lg shadow-amber-500/20 transform hover:-translate-y-0.5"
              >
                <PenTool className="w-5 h-5 text-slate-950" />
                <span>اپنی تحریر / کہانی جمع کروائیں</span>
              </button>

              <a
                href="https://wa.me/923033413307?text=السلام%20علیکم!%20میں%20اپنی%20تحریر%20/%20کہانی%20ارسال%20کرنا%20چاہتا/چاہتی%20ہوں۔"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>واٹس ایپ پر تحریر ارسال کریں</span>
              </a>

              <button
                onClick={() => setActiveTab('magazine')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 text-white font-semibold text-sm hover:bg-slate-800 transition border border-slate-700 hover:border-amber-500/50"
              >
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>سہ ماہی میگزین پڑھیں</span>
              </button>
            </div>
          </div>

          {/* Left Column (Logo Badge & Featured Box) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-700/60 pb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white ring-4 ring-amber-500/30 shadow-lg shrink-0">
                  <img 
                    src={ORGANISATION_INFO.logo} 
                    alt={ORGANISATION_INFO.nameUrdu}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-nastaliq text-xl font-bold text-white">
                    {ORGANISATION_INFO.nameShort} آفیشل پورٹل
                  </h3>
                  <p className="text-xs text-amber-400 font-medium dir-ltr">
                    {ORGANISATION_INFO.website}
                  </p>
                </div>
              </div>

              {/* Quick Feature Highlights */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-700/50">
                  <BookMarked className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">ادبی لائبریری و آن لائن میگزین</h4>
                    <p className="text-[11px] text-slate-400">غزلیات، نظم، افسانے اور آن لائن PDF فلپ بک مطالعہ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-700/50">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">تربیتی کورسز و سرٹیفکیٹس</h4>
                    <p className="text-[11px] text-slate-400">تخلیقی تحریر، کالم نگاری، اور وائس اوور کورسز</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-700/50">
                  <Users className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">مصنفین و شعراء کی ترویج</h4>
                    <p className="text-[11px] text-slate-400">نئے لکھاریوں کے لیے باوقار پہچان اور پلیٹ فارم</p>
                  </div>
                </div>
              </div>

              {/* Tagline Footer Badge */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                <span className="text-xs font-medium text-amber-300">
                  شعور • شائستگی • ادب • تربیت
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Counter Statistics Grid (فورم کے اعدادوشمار) */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <Users className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <div className="text-xl md:text-2xl font-extrabold text-white">
              {ORGANISATION_INFO.stats.members.toLocaleString()}+
            </div>
            <div className="text-xs text-slate-400 mt-0.5">ممبران</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <PenTool className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <div className="text-xl md:text-2xl font-extrabold text-white">
              {ORGANISATION_INFO.stats.works.toLocaleString()}+
            </div>
            <div className="text-xs text-slate-400 mt-0.5">شائع شدہ تحریریں</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <div className="text-xl md:text-2xl font-extrabold text-white">
              {ORGANISATION_INFO.stats.authors}+
            </div>
            <div className="text-xs text-slate-400 mt-0.5">مصنفین و شعراء</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <BookMarked className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <div className="text-xl md:text-2xl font-extrabold text-white">
              {ORGANISATION_INFO.stats.books}+
            </div>
            <div className="text-xs text-slate-400 mt-0.5">کتب و شائع شدہ مجموعے</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <Globe className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <div className="text-xl md:text-2xl font-extrabold text-white">
              {ORGANISATION_INFO.stats.countries}+
            </div>
            <div className="text-xs text-slate-400 mt-0.5">ممالک</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            <Building2 className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <div className="text-xl md:text-2xl font-extrabold text-white">
              {ORGANISATION_INFO.stats.cities}+
            </div>
            <div className="text-xs text-slate-400 mt-0.5">شہر</div>
          </div>
        </div>
      </div>
    </section>
  );
};
