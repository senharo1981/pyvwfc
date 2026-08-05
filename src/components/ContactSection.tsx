import React, { useState } from 'react';
import { ORGANISATION_INFO } from '../data/mockData';
import { Mail, PhoneCall, MapPin, Send, MessageSquare, CheckCircle2, Globe } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
            <MessageSquare className="w-3.5 h-3.5 text-blue-700" />
            <span>بلاجھجک رابطہ کریں</span>
          </div>
          <h1 className="font-nastaliq text-3xl md:text-4xl font-bold text-slate-900">
            رابطہ و معلومات (Contact Us)
          </h1>
          <p className="text-xs md:text-sm text-slate-600">
            پاکستان یوتھ وائس اینڈ رائٹرز فورم کے مرکزی دفتر، آفیشل واٹس ایپ یا آن لائن فارم کے ذریعے رابطہ قائم کریں۔
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-xl border border-slate-800">
              <h3 className="font-nastaliq text-2xl font-bold text-amber-300">
                مرکزی رابطے
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">مرکزی دفتر:</h4>
                    <p className="text-slate-300 leading-relaxed">{ORGANISATION_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm">آفیشل ای میل:</h4>
                    <a href={`mailto:${ORGANISATION_INFO.email}`} className="text-slate-300 hover:text-amber-300 transition dir-ltr block">
                      {ORGANISATION_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="w-5 h-5 fill-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm">واٹس ایپ ہیلپ لائن (WhatsApp):</h4>
                    <a href={`https://wa.me/${ORGANISATION_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200 font-bold transition dir-ltr block text-base">
                      {ORGANISATION_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm">آفیشل ویب سائٹ:</h4>
                    <p className="text-slate-300 font-mono dir-ltr">{ORGANISATION_INFO.website}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`https://wa.me/${ORGANISATION_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition duration-200 group"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>براہ راست واٹس ایپ چیٹ پر جائیں (03033413307)</span>
              </a>
            </div>

            {/* Google Maps Visual Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>گوگل نقشہ (Google Maps Location):</span>
              </h4>
              <div className="h-44 rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 relative flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <MapPin className="w-8 h-8 text-rose-600 mx-auto animate-bounce" />
                  <p className="font-bold text-xs text-slate-800">{ORGANISATION_INFO.address}</p>
                  <span className="text-[11px] text-blue-900 font-bold underline cursor-pointer">
                    گوگل میپ پر لوکیشن کھولیں →
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-md space-y-6">
            <h3 className="font-nastaliq text-2xl font-bold text-slate-900">
              پیغام بھیجیں (Direct Message)
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg">بہت بہت شکریہ!</h4>
                <p className="text-xs">آپ کا پیغام مرکزی ایڈمنسٹریشن کو موصول ہو گیا ہے۔ جلد ہی رابطہ کیا جائے گا۔</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">نام:</label>
                    <input required type="text" placeholder="پورا نام لکھیں" className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">شہر / ملک:</label>
                    <input required type="text" placeholder="مثلاً: لاہور، پاکستان" className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">ای میل:</label>
                    <input required type="email" placeholder="example@mail.com" className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700 dir-ltr text-right" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">واٹس ایپ نمبر:</label>
                    <input required type="tel" placeholder="+92 300 0000000" className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700 dir-ltr text-right" />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">موضوع (Subject):</label>
                  <select className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700 font-bold">
                    <option>عمومی معلومات</option>
                    <option>ممبرشپ کے متعلق</option>
                    <option>تحریر یا کتاب کی اشاعت</option>
                    <option>کورسز و ورکشاپس</option>
                    <option>اشتہار و اسپانسرشپ</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">پیغام کا متن:</label>
                  <textarea rows={5} required placeholder="اپنا پیغام یہاں تفصیل سے تحریر کریں..." className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700" />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>پیغام بھیجیں</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
