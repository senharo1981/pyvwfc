import React, { useState } from 'react';
import { UserCheck, CheckCircle2, Sparkles, Send, ShieldCheck, CreditCard } from 'lucide-react';
import { ORGANISATION_INFO } from '../data/mockData';

export const MembershipForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    category: 'مصنف / شاعر',
    field: '',
    city: '',
    province: 'پنجاب',
    phone: '',
    whatsapp: '',
    email: '',
    bio: ''
  });

  const [submittedCard, setSubmittedCard] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `PYVWF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedCard({
      ...formData,
      membershipId: generatedId,
      joinDate: 'اگست ۲۰۲۶'
    });
  };

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-900 text-xs font-bold border border-amber-500/30">
            <UserCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>آن لائن فارم</span>
          </div>
          <h1 className="font-nastaliq text-3xl md:text-4xl font-bold text-slate-900">
            آن لائن ممبرشپ فارم (سیشن ۲۰۲۶-۲۷)
          </h1>
          <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto">
            پاکستان یوتھ وائس اینڈ رائٹرز فورم کے باقاعدہ رکن بنیں اور علمی و ادبی سرگرمیوں کا حصہ بنیں
          </p>
        </div>

        {submittedCard ? (
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-400 shadow-xl text-center space-y-6 animate-in zoom-in duration-300">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
            
            <div className="space-y-2">
              <h2 className="font-nastaliq text-2xl font-bold text-slate-900">
                مبارک ہو! آپ کی آن لائن درخواست موصول ہو گئی ہے۔
              </h2>
              <p className="text-xs text-slate-600">
                ایڈمنسٹریشن کی منظوری کے بعد آپ کا نجی ریکارڈ ڈیٹا بیس میں شامل کر دیا جائے گا۔
              </p>
            </div>

            {/* Instant Membership Card Preview */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-2xl p-6 text-white space-y-4 shadow-2xl border-2 border-amber-500 text-right relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-white ring-2 ring-amber-400 shrink-0">
                    <img 
                      src={ORGANISATION_INFO.logo} 
                      alt={ORGANISATION_INFO.nameUrdu}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-nastaliq text-lg font-bold text-amber-300 leading-none">PYVWF</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">www.PYVWF.org</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[10px]">
                  عارضی کارڈ (Pending Approval)
                </span>
              </div>

              <div className="space-y-1">
                <h5 className="font-nastaliq text-xl font-bold text-white">{submittedCard.name}</h5>
                <p className="text-xs text-amber-300 font-medium">شعبہ: {submittedCard.field || submittedCard.category}</p>
                <p className="text-[11px] text-slate-400">شہر: {submittedCard.city}</p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-300">
                <div>
                  <span className="text-slate-400">ممبرشپ نمبر:</span>
                  <strong className="text-amber-400 font-mono mr-1 dir-ltr">{submittedCard.membershipId}</strong>
                </div>
                <div>
                  <span className="text-slate-400">تاریخ:</span>
                  <span className="text-white mr-1">{submittedCard.joinDate}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSubmittedCard(null)}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
            >
              نیا فارم بھریں
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-md space-y-6">
            
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">مکمل نام (حسبِ شناختی کارڈ):</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="اپنا پورا نام لکھیں"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">ولدیت / سرپرست کا نام:</label>
                <input
                  required
                  type="text"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                  placeholder="والد کا نام لکھیں"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">ممبرشپ کیٹیگری (Member Category):</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700 font-bold"
                >
                  <option value="طالب علم">طالب علم (Student Member)</option>
                  <option value="مصنف / شاعر">مصنف / شاعر (Writer / Poet)</option>
                  <option value="نوجوان ممبر">نوجوان ممبر (Youth Member)</option>
                  <option value="سینئر ممبر">سینئر ممبر (Senior Member)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">شعبہ یا اداریت (Field of Expertise):</label>
                <input
                  required
                  type="text"
                  value={formData.field}
                  onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                  placeholder="مثلاً: شاعری، کالم نگاری، گرافکس"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">شہر:</label>
                <input
                  required
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="اپنا شہر درج کریں"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">صوبہ / ملک:</label>
                <input
                  required
                  type="text"
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  placeholder="پنجاب، سندھ، یو کے وغیرہ"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">واٹس ایپ نمبر (Private Database):</label>
                <input
                  required
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="+92 300 0000000"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700 dir-ltr text-right"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">ای میل ایڈریس:</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@mail.com"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-700 dir-ltr text-right"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-xs text-slate-700 mb-1">مختصر ادبی یا علمی تعارف (Bio):</label>
              <textarea
                rows={3}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                placeholder="اپنے بارے میں دو جملے لکھیں..."
                className="w-full p-3 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-blue-700"
              />
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-800 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>پرائیویسی اور میرٹ کی ضامنت:</span>
              </span>
              <p>آپ کے فون اور ای میل کے نجی ریکارڈز محفوظ رکھے جائیں گے اور صرف سپر ایڈمن کے لیے دستیاب ہوں گے۔</p>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white font-bold text-sm hover:from-blue-950 hover:to-slate-950 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-amber-400" />
              <span>آن لائن ممبرشپ رجسٹریشن فارم جمع کریں</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
