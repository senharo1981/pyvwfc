import React, { useState } from 'react';
import { MOCK_MAGAZINE_ISSUES } from '../data/mockData';
import { MagazineIssue } from '../types';
import { BookOpen, Download, Eye, Sparkles, CheckCircle2, ChevronRight, ChevronLeft, X } from 'lucide-react';

export const OnlineMagazine: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<MagazineIssue>(MOCK_MAGAZINE_ISSUES[0]);
  const [isReadingMode, setIsReadingMode] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(1);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownloadPDF = (issue: MagazineIssue) => {
    setDownloadSuccess(`سہ ماہی میگزین "${issue.title}" کی PDF ڈاؤنلوڈ شروع ہو گئی ہے!`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>سہ ماہی آن لائن میگزین (PYVWF)</span>
          </div>
          <h2 className="font-nastaliq text-3xl md:text-4xl font-bold text-white">
            ادبی و علمی ڈیجیٹل میگزین
          </h2>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
            ہر ۳ ماہ بعد شائع ہونے والا شاہکار آن لائن میگزین — مفت آن لائن مطالعہ کریں یا PDF ڈاؤنلوڈ کرکے محفوظ رکھیں
          </p>
        </div>

        {/* Download notification Toast */}
        {downloadSuccess && (
          <div className="max-w-md mx-auto mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs font-bold flex items-center gap-2 shadow-lg animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Featured Main Issue View */}
        <div className="bg-slate-800/80 rounded-2xl p-6 md:p-8 border border-slate-700/80 shadow-2xl grid lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Magazine Cover */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group">
              <div className="w-56 md:w-64 h-80 rounded-xl overflow-hidden border-4 border-amber-500 shadow-2xl transition transform group-hover:scale-102">
                <img
                  src={selectedIssue.coverImage}
                  alt={selectedIssue.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-md shadow-md">
                شمارہ {selectedIssue.issueNumber}
              </span>
            </div>
          </div>

          {/* Details & Contents */}
          <div className="lg:col-span-8 space-y-6 text-right">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400">
                {selectedIssue.season} — {selectedIssue.year}
              </span>
              <h3 className="font-nastaliq text-2xl md:text-3xl font-bold text-white">
                {selectedIssue.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-700/60 leading-relaxed">
                <strong className="text-amber-300">افتتاحی کالم:</strong> {selectedIssue.editorial}
              </p>
            </div>

            {/* Featured Articles Table of Contents */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-amber-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>شمارے کی نمایاں تحاریر (Table of Contents):</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedIssue.featuredArticles.map((art, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-slate-700/40 text-xs">
                    <div>
                      <span className="font-bold text-slate-100">{art.title}</span>
                      <p className="text-[11px] text-slate-400">از: {art.author}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[11px]">
                      صفحہ {art.page}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => {
                  setIsReadingMode(true);
                  setActivePage(1);
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition shadow-lg shadow-amber-500/20"
              >
                <Eye className="w-4 h-4 text-slate-950" />
                <span>آن لائن میگزین پڑھیں (Flipbook Viewer)</span>
              </button>

              <button
                onClick={() => handleDownloadPDF(selectedIssue)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-700 transition border border-slate-600"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>PDF ڈاؤنلوڈ کریں</span>
              </button>
            </div>
          </div>
        </div>

        {/* Previous Issues Archive Header */}
        <div className="space-y-4">
          <h3 className="font-nastaliq text-xl font-bold text-white border-r-4 border-amber-500 pr-3">
            گزشتہ تمام شمارے (Magazine Archive)
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {MOCK_MAGAZINE_ISSUES.map((issue) => (
              <div
                key={issue.id}
                onClick={() => setSelectedIssue(issue)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex gap-4 items-center ${
                  selectedIssue.id === issue.id
                    ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg'
                    : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <img
                  src={issue.coverImage}
                  alt={issue.title}
                  className="w-16 h-22 object-cover rounded shadow shrink-0 border border-slate-600"
                />
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-amber-400">شمارہ {issue.issueNumber}</span>
                  <h4 className="font-bold text-xs text-white line-clamp-1">{issue.title}</h4>
                  <p className="text-[11px] text-slate-400">{issue.season} {issue.year}</p>
                  <span className="text-[11px] text-amber-400 font-bold block pt-1">کلک کرکے منتخب کریں</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Online Reading Flipbook Modal */}
        {isReadingMode && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8">
            {/* Top Toolbar */}
            <div className="w-full max-w-4xl flex items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-xs md:text-sm">{selectedIssue.title} (آن لائن مطالعہ)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-400 dir-ltr">
                  Page {activePage} of 48
                </span>
                <button
                  onClick={() => setIsReadingMode(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Book Reader Viewport */}
            <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl my-4 p-6 md:p-10 text-right space-y-6 overflow-y-auto max-h-[70vh] shadow-2xl relative">
              {activePage === 1 ? (
                <div className="text-center space-y-6 py-8">
                  <div className="w-32 h-44 mx-auto rounded-lg overflow-hidden border-2 border-amber-500 shadow-xl">
                    <img src={selectedIssue.coverImage} alt="Cover" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="font-nastaliq text-3xl font-bold text-amber-300">{selectedIssue.title}</h2>
                  <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">{selectedIssue.editorial}</p>
                  <div className="p-4 bg-slate-800 rounded-xl text-xs text-slate-300">
                    صفحہ آگے بڑھانے کے لیے نیچے موجود تیر والے بٹن استعمال کریں۔
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-amber-400 border-b border-slate-800 pb-2">
                    <span>صفحہ نمبر {activePage}</span>
                    <span>سہ ماہی پیامِ یوتھ</span>
                  </div>
                  <h3 className="font-nastaliq text-xl font-bold text-white">
                    {selectedIssue.featuredArticles[(activePage - 2) % selectedIssue.featuredArticles.length]?.title || 'خصوصی کلام و مضامین'}
                  </h3>
                  <p className="text-xs font-semibold text-amber-300">
                    از: {selectedIssue.featuredArticles[(activePage - 2) % selectedIssue.featuredArticles.length]?.author || 'نوجوان قلمکار'}
                  </p>
                  <p className="text-sm text-slate-200 leading-relaxed font-light py-4 border-b border-slate-800">
                    اردو زبان و ادب کی ترویج کے لیے یہ سہ ماہی شمارہ نوجوانوں کی سوچ کو نکھارنے کا ایک سنگِ میل ہے۔ 
                    اس میں مختلف موضوعات پر مقالات، غزلیات اور افسانے شامل کیے گئے ہیں تاکہ ہر قاری اپنی پسند کا مواد حاصل کر سکے۔
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="w-full max-w-4xl flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800 text-white">
              <button
                disabled={activePage <= 1}
                onClick={() => setActivePage((prev) => Math.max(1, prev - 1))}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold flex items-center gap-1"
              >
                <ChevronRight className="w-4 h-4" />
                <span>پچھلا صفحہ</span>
              </button>

              <div className="text-xs font-bold text-amber-400">
                صفحہ {activePage} / 48
              </div>

              <button
                disabled={activePage >= 48}
                onClick={() => setActivePage((prev) => Math.min(48, prev + 1))}
                className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 disabled:opacity-40 text-xs font-bold flex items-center gap-1"
              >
                <span>اگلا صفحہ</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
