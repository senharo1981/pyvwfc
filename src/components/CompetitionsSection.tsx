import React, { useState } from 'react';
import { MOCK_COMPETITIONS } from '../data/mockData';
import { Competition } from '../types';
import { Trophy, Calendar, CheckCircle2, Award, X, Send } from 'lucide-react';

export const CompetitionsSection: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<Competition | null>(null);
  const [submittingComp, setSubmittingComp] = useState<Competition | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState<boolean>(false);

  const handleSubmitEntry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setSubmittingComp(null);
    }, 3000);
  };

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold mb-2">
              <Trophy className="w-3.5 h-3.5 text-amber-700" />
              <span>ترغیب و اعترافِ ہنر</span>
            </div>
            <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-slate-900">
              ادبی و تعلیمی مقابلہ جات
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              شاعری، مضمون نویسی، افسانہ نگاری اور تقریری مقابلے
            </p>
          </div>
        </div>

        {/* Competitions Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {MOCK_COMPETITIONS.map((comp) => (
            <div
              key={comp.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row justify-between hover:shadow-md transition"
            >
              <div className="md:w-5/12 h-48 md:h-auto overflow-hidden relative">
                <img src={comp.image} alt={comp.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-md bg-amber-500 text-slate-950 font-bold text-xs">
                  {comp.status}
                </span>
              </div>

              <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 text-[11px] font-bold">
                    {comp.category}
                  </span>

                  <h3 className="font-nastaliq text-xl font-bold text-slate-900 leading-snug">
                    {comp.title}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-600">
                    <p className="flex items-center gap-1.5 font-bold text-amber-700">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>آخری تاریخ: {comp.deadline}</span>
                    </p>
                    <p className="flex items-center gap-1.5 text-slate-700">
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      <span>انعامات: {comp.prize}</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedComp(comp)}
                    className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                  >
                    قواعد و ضوابط
                  </button>
                  <button
                    onClick={() => setSubmittingComp(comp)}
                    className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm"
                  >
                    تخلیق جمع کروائیں
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competition Rules Modal */}
        {selectedComp && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative border border-amber-300">
              <button
                onClick={() => setSelectedComp(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  {selectedComp.category}
                </span>
                <h3 className="font-nastaliq text-2xl font-bold text-slate-900">
                  {selectedComp.title}
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-slate-900">قواعد و ضوابط (Rules):</h4>
                <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedComp.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs font-bold text-slate-700">
                <span>اہلیت: {selectedComp.eligibility}</span>
                <button
                  onClick={() => {
                    setSubmittingComp(selectedComp);
                    setSelectedComp(null);
                  }}
                  className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400"
                >
                  حصہ لیں
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Submit Entry Modal */}
        {submittingComp && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl relative border border-blue-400">
              <button
                onClick={() => setSubmittingComp(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <h3 className="font-nastaliq text-xl font-bold text-slate-900">
                  مقابلے میں تخلیق جمع کروائیں
                </h3>
                <p className="text-xs text-slate-500">{submittingComp.title}</p>
              </div>

              {submittedMessage ? (
                <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm">تخلیق موصول ہو گئی ہے!</h4>
                  <p className="text-xs">نتائج مقررہ تاریخ پر ویب سائٹ پر شائع کیے جائیں گے۔</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitEntry} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">نام:</label>
                    <input required type="text" placeholder="نام درج کریں" className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">ای میل / واٹس ایپ:</label>
                    <input required type="text" placeholder="رابطہ درج کریں" className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 dir-ltr text-right" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">اپنی تحریر / غزل / مضمون:</label>
                    <textarea rows={5} required placeholder="یہاں اپنی غیر مطبوعہ تحریر پیسٹ کریں..." className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <Send className="w-4 h-4" />
                    <span>مقابلے کے لیے جمع کریں</span>
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
