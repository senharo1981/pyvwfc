import React, { useState } from 'react';
import { ORGANISATION_INFO } from '../data/mockData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PageTab } from '../types';
import { Feather, Heart, Mail, PhoneCall, Sparkles, Shield, FileText, X } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-amber-500 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white ring-2 ring-amber-500/50 shadow-md">
                <img 
                  src={ORGANISATION_INFO.logo} 
                  alt={ORGANISATION_INFO.nameUrdu}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-nastaliq text-xl font-bold text-white">
                {ORGANISATION_INFO.nameShort}
              </h3>
            </div>

            <p className="font-nastaliq text-sm text-amber-300 leading-relaxed">
              "{ORGANISATION_INFO.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              پاکستان کا سب سے بڑا ڈیجیٹل علمی، ادبی، تعلیمی اور تنظیمی پلیٹ فارم۔ 
              علم، ادب، کردار اور خدمت کا ترجمان۔
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{ORGANISATION_INFO.motto}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white border-r-2 border-amber-500 pr-2">
              اہم لنکس (Quick Links)
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => handleNav('home')} className="hover:text-amber-400 transition">ہوم پیج</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-amber-400 transition">ہمارے بارے میں</button></li>
              <li><button onClick={() => handleNav('team')} className="hover:text-amber-400 transition">ہماری ٹیم و عہدیداران</button></li>
              <li><button onClick={() => handleNav('library')} className="hover:text-amber-400 transition">ادبی لائبریری</button></li>
              <li><button onClick={() => handleNav('authors')} className="hover:text-amber-400 transition">شائع شدہ مصنفین</button></li>
              <li><button onClick={() => handleNav('magazine')} className="hover:text-amber-400 transition">سہ ماہی آن لائن میگزین</button></li>
            </ul>
          </div>

          {/* Col 3: Sections & Features */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white border-r-2 border-amber-500 pr-2">
              خصوصی شعبہ جات
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => handleNav('kids')} className="hover:text-amber-400 transition">بچوں کا گھر (Kids Corner)</button></li>
              <li><button onClick={() => handleNav('courses')} className="hover:text-amber-400 transition">کورسز و ورکشاپس</button></li>
              <li><button onClick={() => handleNav('competitions')} className="hover:text-amber-400 transition">ادبی مقابلہ جات</button></li>
              <li><button onClick={() => handleNav('events')} className="hover:text-amber-400 transition">ایونٹس و مشاعرے</button></li>
              <li><button onClick={() => handleNav('members')} className="hover:text-amber-400 transition">فورم ممبران ریکارڈ</button></li>
              <li><a href="https://wa.me/923033413307" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition text-emerald-400 font-bold">تحریر / کہانی جمع کروائیں (واٹس ایپ)</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white border-r-2 border-amber-500 pr-2">
              رابطہ کریں
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="leading-relaxed">{ORGANISATION_INFO.address}</p>
              <a 
                href={`https://wa.me/${ORGANISATION_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition dir-ltr my-1"
              >
                <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
                <span>WhatsApp: {ORGANISATION_INFO.whatsapp}</span>
              </a>
              <p className="dir-ltr text-right font-mono text-slate-300">{ORGANISATION_INFO.email}</p>
              <p className="dir-ltr text-right font-bold text-amber-400">{ORGANISATION_INFO.website}</p>
            </div>
          </div>

        </div>

        {/* Newsletter Subscription Box */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-right">
            <h4 className="font-nastaliq text-lg font-bold text-white">
              ہفتہ وار ادبی نوزلیٹر کے لیے سبسکرائب کریں
            </h4>
            <p className="text-xs text-slate-400">تازہ ترین غزلیں، مضامین اور مقابلے ای میل پر حاصل کریں۔</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              placeholder="اپنا ای میل درج کریں..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 dir-ltr text-right"
            />
            <button
              onClick={() => alert("سبسکرائب کرنے کا شکریہ!")}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shrink-0"
            >
              سبسکرائب
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Modal Triggers */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {ORGANISATION_INFO.nameUrdu}. جملہ حقوق محفوظ ہیں۔</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-amber-400 transition"
            >
              پرائیویسی پالیسی
            </button>
            <span>•</span>
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-amber-400 transition"
            >
              شرائط و ضوابط
            </button>
          </div>
        </div>

        {/* Privacy Policy Modal */}
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 text-slate-900 space-y-4 shadow-2xl relative">
              <button onClick={() => setShowPrivacyModal(false)} className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700">
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-nastaliq text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span>پرائیویسی پالیسی (Privacy Policy)</span>
              </h3>
              <div className="text-xs text-slate-700 leading-relaxed space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <p>پاکستان یوتھ وائس اینڈ رائٹرز فورم تمام ممبران کے نجی ڈیٹا بشمول فون نمبرز، واٹس ایپ اور ای میلز کے تحفظ کو اولین ترجیح دیتا ہے۔</p>
                <p>عوامی پورٹل پر صرف اراکین کا نام، شعبہ اور شہر دکھایا جاتا ہے جبکہ نجی رابطہ معلومات صرف سپر ایڈمنسٹریٹر کے پاس محفوظ رہتی ہیں۔</p>
              </div>
              <div className="flex justify-end">
                <button onClick={() => setShowPrivacyModal(false)} className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold">بند کریں</button>
              </div>
            </div>
          </div>
        )}

        {/* Terms Modal */}
        {showTermsModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 text-slate-900 space-y-4 shadow-2xl relative">
              <button onClick={() => setShowTermsModal(false)} className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700">
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-nastaliq text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" />
                <span>قواعد و ضوابط (Terms & Conditions)</span>
              </h3>
              <div className="text-xs text-slate-700 leading-relaxed space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <p>فورم پر شائع ہونے والا تمام کلام مصنفین کی اپنی ذات سے منسوب ہے۔ سرقہ یا نقل شدہ مواد فوراً ہٹا دیا جائے گا۔</p>
                <p>تمام اراکین کو اخلاقی اور تربیتی ضوابط کی پاسداری کرنا ہوگی۔</p>
              </div>
              <div className="flex justify-end">
                <button onClick={() => setShowTermsModal(false)} className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold">بند کریں</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </footer>
  );
};
