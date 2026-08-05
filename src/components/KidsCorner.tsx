import React, { useState } from 'react';
import { MOCK_KIDS_ITEMS, ORGANISATION_INFO } from '../data/mockData';
import { KidsItem } from '../types';
import { Smile, Heart, Sparkles, Send, X, CheckCircle2, Mail } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const KidsCorner: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('تمام');
  const [selectedKidItem, setSelectedKidItem] = useState<KidsItem | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [submittedMessage, setSubmittedMessage] = useState<boolean>(false);

  const categories = ['تمام', 'کہانیاں', 'نظمیں', 'مضامین', 'ڈرائنگ', 'بچوں کے مقابلے'];

  const filteredItems = activeCategory === 'تمام'
    ? MOCK_KIDS_ITEMS
    : MOCK_KIDS_ITEMS.filter(item => item.category === activeCategory);

  const handleSubmitKidStory = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowSubmitModal(false);
    }, 3000);
  };

  return (
    <section className="py-12 bg-amber-500/10 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-amber-400 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold">
              <Smile className="w-4 h-4 text-pink-600 animate-bounce" />
              <span>ننھے شاہکار</span>
            </div>
            <h2 className="font-nastaliq text-3xl md:text-4xl font-bold text-slate-900">
              بچوں کا گھر (Kids Corner)
            </h2>
            <p className="text-xs md:text-sm text-slate-600">
              کہانیاں، نظمیں، ڈرائنگ، مضامین اور بچوں کی تخلیقی صلاحیتوں کو نکھارنے کا خصوصی گوشہ
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-amber-500 text-white font-bold text-xs hover:from-pink-600 hover:to-amber-600 transition shadow-lg flex items-center gap-2 shrink-0"
          >
            <Heart className="w-4 h-4 text-white fill-current" />
            <span>بچوں کی تخلیق جمع کروائیں</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Kids Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedKidItem(item)}
              className="bg-white rounded-3xl overflow-hidden border border-amber-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              {item.image && (
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 text-amber-800 text-[11px] font-bold shadow-sm">
                    {item.category}
                  </span>
                </div>
              )}

              <div className="p-5 space-y-3">
                <h3 className="font-nastaliq text-xl font-bold text-slate-900 group-hover:text-amber-600 transition">
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span className="text-pink-600 font-semibold">{item.author}</span>
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md text-[11px]">
                    عمر: {item.age}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed bg-amber-50/50 p-3 rounded-2xl">
                  {item.content}
                </p>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-amber-600">
                <span>مکمل پڑھیں ←</span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Story Modal */}
        {selectedKidItem && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 space-y-5 shadow-2xl relative border-4 border-amber-300">
              <button
                onClick={() => setSelectedKidItem(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedKidItem.image && (
                <div className="h-52 rounded-2xl overflow-hidden shadow">
                  <img src={selectedKidItem.image} alt={selectedKidItem.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold">
                  {selectedKidItem.category}
                </span>
                <h3 className="font-nastaliq text-2xl font-bold text-slate-900">
                  {selectedKidItem.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  مصنف/مصنُفہ: <strong className="text-pink-600">{selectedKidItem.author}</strong> ({selectedKidItem.age})
                </p>
              </div>

              <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 text-slate-800 text-sm leading-relaxed whitespace-pre-line font-medium">
                {selectedKidItem.content}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedKidItem(null)}
                  className="px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  بند کریں
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Submit Kid Story Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative border-4 border-pink-300">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <h3 className="font-nastaliq text-2xl font-bold text-slate-900">
                  بچوں کی تحریر یا ڈرائنگ جمع کروائیں
                </h3>
                <p className="text-xs text-slate-500">
                  اپنے بچے کی کہانی، نظم یا ڈرائنگ ہمیں براہ راست ای میل یا واٹس ایپ کے ذریعے ارسال کریں۔
                </p>
              </div>

              {/* Direct WhatsApp and Email Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="https://wa.me/923033413307?text=السلام%20علیکم!%20میں%20بچوں%20کے%20گھر%20کے%20لیے%20کہانی%20/%20نظم%20ارسال%20کرنا%20چاہتا/چاہتی%20ہوں۔"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>واٹس ایپ کریں (03033413307)</span>
                </a>

                <a
                  href={`mailto:${ORGANISATION_INFO.email}?subject=${encodeURIComponent("بچوں کی کہانی / تخلیق - PYVWF")}`}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs transition shadow"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>ای میل کریں ({ORGANISATION_INFO.email})</span>
                </a>
              </div>

              {submittedMessage ? (
                <div className="p-6 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-base">بہت بہت شکریہ!</h4>
                  <p className="text-xs">تخلیق موصول ہو گئی ہے۔ معائنہ کے بعد بچوں کے گھر میں شائع کر دی جائے گی۔</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitKidStory} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">بچے کا نام:</label>
                    <input required type="text" placeholder="مثلاً: علی احمد" className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-pink-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">عمر:</label>
                      <input required type="text" placeholder="مثلاً: ۱۰ سال" className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-pink-500" />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">شعبہ:</label>
                      <select className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-pink-500">
                        <option>کہانی</option>
                        <option>نظم</option>
                        <option>مضمون</option>
                        <option>ڈرائنگ</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">والد/والدہ کا رابطہ نمبر (WhatsApp):</label>
                    <input required type="tel" placeholder="+92 300 1234567" className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-pink-500 dir-ltr text-right" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">تحریر کا متن / تفصیل:</label>
                    <textarea rows={4} required placeholder="یہاں اپنی کہانی یا نظم تحریر کریں..." className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-pink-500" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <Send className="w-4 h-4" />
                    <span>جمع کروائیں</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
