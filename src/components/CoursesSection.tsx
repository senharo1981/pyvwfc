import React, { useState } from 'react';
import { MOCK_COURSES } from '../data/mockData';
import { Course } from '../types';
import { Award, GraduationCap, CheckCircle2, Clock, User, X, Sparkles, Send } from 'lucide-react';

export const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [registeringCourse, setRegisteringCourse] = useState<Course | null>(null);
  const [registeredSuccess, setRegisteredSuccess] = useState<boolean>(false);
  
  // Certificate Simulator state
  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false);
  const [certName, setCertName] = useState<string>('احمد علی خان');
  const [certCourse, setCertCourse] = useState<string>('تخلیقی تحریر و افسانہ نگاری سرٹیفکیٹ کورس');

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredSuccess(true);
    setTimeout(() => {
      setRegisteredSuccess(false);
      setRegisteringCourse(null);
    }, 3000);
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
              <span>فکری و فن کارانہ تربیت</span>
            </div>
            <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-slate-900">
              آن لائن و آف لائن کورسز و ورکشاپس
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              تخلیقی تحریر، شاعری، کالم نگاری، ڈیجیٹل ڈیزائن اور وائس اوور کی خصوصی تربیت
            </p>
          </div>

          <button
            onClick={() => setShowCertificateModal(true)}
            className="px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition flex items-center gap-1.5 shadow-md"
          >
            <Award className="w-4 h-4 text-slate-950" />
            <span>ڈیجیٹل سرٹیفکیٹ نمونہ (Preview Certificate)</span>
          </button>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold shadow-sm ${
                    course.status === 'حالیہ سیشن' ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-slate-950'
                  }`}>
                    {course.status}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 text-[11px] font-bold">
                    {course.category}
                  </span>

                  <h3 className="font-nastaliq text-lg font-bold text-slate-900 leading-snug">
                    {course.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                    <p className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-600" />
                      <span>استاد: {course.instructor}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>دورانیہ: {course.duration}</span>
                    </p>
                    <p className="flex items-center gap-1.5 font-bold text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>فیس: {course.fee}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex gap-2">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="flex-1 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition"
                >
                  تفصیلات
                </button>
                <button
                  onClick={() => setRegisteringCourse(course)}
                  className="flex-1 py-2 rounded-xl bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold transition shadow-sm"
                >
                  رجسٹریشن
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Course Details Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl relative border border-blue-200">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  {selectedCourse.category}
                </span>
                <h3 className="font-nastaliq text-2xl font-bold text-slate-900">
                  {selectedCourse.title}
                </h3>
                <p className="text-xs text-slate-600">{selectedCourse.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-xs text-slate-900">نصاب کا خاکہ (Curriculum):</h4>
                <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedCourse.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs font-bold text-emerald-700">فیس: {selectedCourse.fee} ({selectedCourse.mode})</span>
                <button
                  onClick={() => {
                    setRegisteringCourse(selectedCourse);
                    setSelectedCourse(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-blue-900 text-white font-bold text-xs hover:bg-blue-950 transition"
                >
                  ابھی فارم بھریں
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Course Registration Modal */}
        {registeringCourse && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl relative border border-amber-400">
              <button
                onClick={() => setRegisteringCourse(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <h3 className="font-nastaliq text-xl font-bold text-slate-900">
                  کورس رجسٹریشن: {registeringCourse.title}
                </h3>
                <p className="text-xs text-slate-500">مطلوبہ معلومات درج کریں، منظوری کی ای میل موصول ہوگی۔</p>
              </div>

              {registeredSuccess ? (
                <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm">رجسٹریشن مکمل ہو گئی ہے!</h4>
                  <p className="text-xs">آپ کو واٹس ایپ پر کلاس کا لنک بھیج دیا جائے گا۔</p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">پورا نام:</label>
                    <input required type="text" placeholder="نام درج کریں" className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">واٹس ایپ نمبر:</label>
                    <input required type="tel" placeholder="+92 300 0000000" className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 dir-ltr text-right" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">شہر:</label>
                    <input required type="text" placeholder="شہر کا نام" className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <Send className="w-4 h-4" />
                    <span>رجسٹریشن جمع کریں</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Digital Certificate Preview Modal */}
        {showCertificateModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative border-4 border-amber-400">
              <button
                onClick={() => setShowCertificateModal(false)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  مستقبل کے منصوبے (Digital Certificate Verification)
                </span>
                <h3 className="font-nastaliq text-2xl font-bold text-slate-900">
                  سرٹیفکیٹ آن لائن نمونہ
                </h3>
              </div>

              {/* Printable / Viewable Certificate Frame */}
              <div className="bg-slate-50 border-8 border-double border-amber-600 p-8 rounded-xl text-center space-y-4 shadow-inner relative overflow-hidden">
                <div className="flex justify-between items-center text-xs font-bold text-slate-600 border-b border-amber-200 pb-2">
                  <span>سند نمبر: PYVWF-CERT-2026-889</span>
                  <span>تاریخ: ۲۰۲۶</span>
                </div>

                <div className="w-12 h-12 bg-amber-500 rounded-full mx-auto flex items-center justify-center text-slate-950 shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>

                <h2 className="font-nastaliq text-2xl font-bold text-blue-950">
                  پاکستان یوتھ وائس اینڈ رائٹرز فورم
                </h2>

                <h3 className="font-serif text-lg font-bold text-amber-700">
                  سندِ فراغت و قدر دانی
                </h3>

                <p className="text-xs text-slate-600">
                  تصدیق کی جاتی ہے کہ محترم / محترمہ <strong className="text-slate-900 underline px-2">{certName}</strong> نے 
                  ورکشاپ برائے <strong className="text-slate-900 px-1">{certCourse}</strong> میں نمایاں کامیابی کے ساتھ شرکت کی۔
                </p>

                <div className="pt-6 flex justify-between items-end text-xs font-bold text-slate-800 border-t border-amber-200">
                  <div>
                    <p className="border-t border-slate-400 pt-1">دستخط بانی و صدر</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border border-amber-500 flex items-center justify-center text-[10px] bg-amber-100 text-amber-900 font-bold">
                    آفیشل مہر
                  </div>
                  <div>
                    <p className="border-t border-slate-400 pt-1">دستخط ڈائریکٹر کورسز</p>
                  </div>
                </div>
              </div>

              {/* Dynamic Tester Inputs */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">نام تبدیل کریں:</label>
                  <input
                    type="text"
                    value={certName}
                    onChange={(e) => setCertName(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">کورس کا عنوان:</label>
                  <input
                    type="text"
                    value={certCourse}
                    onChange={(e) => setCertCourse(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-300"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
                >
                  سرٹیفکیٹ پرنٹ کریں
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
