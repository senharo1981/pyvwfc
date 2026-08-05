import React, { useState } from 'react';
import { MOCK_LITERARY_WORKS, MOCK_AUTHORS, MOCK_NEWS } from '../data/mockData';
import { LiteraryWork } from '../types';
import { Search, X, BookOpen, Feather, Newspaper, ArrowLeft } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWork: (work: LiteraryWork) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectWork
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchingWorks = query.trim() === '' ? [] : MOCK_LITERARY_WORKS.filter(
    w => w.title.includes(query) || w.author.includes(query) || w.content.includes(query)
  );

  const matchingAuthors = query.trim() === '' ? [] : MOCK_AUTHORS.filter(
    a => a.name.includes(query) || a.bio.includes(query) || a.city.includes(query)
  );

  const matchingNews = query.trim() === '' ? [] : MOCK_NEWS.filter(
    n => n.title.includes(query) || n.content.includes(query)
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-16 px-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 space-y-6 shadow-2xl relative border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-amber-500" />
            <h3 className="font-nastaliq text-xl font-bold text-slate-900">
              پاکستان یوتھ وائس فورم - گلوبل سرچ
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="غزل، مضمون، افسانہ، مصنف یا خبر کا عنوان تلاش کریں..."
            className="w-full pr-12 pl-4 py-3.5 rounded-2xl bg-slate-50 border-2 border-amber-400 text-slate-900 placeholder-slate-400 focus:outline-none text-sm font-medium"
          />
          <Search className="w-5 h-5 text-amber-600 absolute right-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Results */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-slate-500 space-y-1">
              <p className="font-bold">برائے مہربانی تلاش کا لفظ ٹائپ کریں</p>
              <p>مثال: "اقبال"، "غزل"، "افسانہ"، "عدنان الیاس"، "مشاعرہ"</p>
            </div>
          ) : (
            <>
              {/* Literary Works */}
              {matchingWorks.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <span>ادبی شاہکار ({matchingWorks.length}):</span>
                  </h4>
                  <div className="space-y-2">
                    {matchingWorks.map(w => (
                      <div
                        key={w.id}
                        onClick={() => {
                          onSelectWork(w);
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 cursor-pointer flex justify-between items-center text-xs transition"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">{w.title}</span>
                          <span className="text-slate-500">{w.category} — از: {w.author}</span>
                        </div>
                        <ArrowLeft className="w-4 h-4 text-amber-600" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Authors */}
              {matchingAuthors.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                    <Feather className="w-4 h-4 text-blue-600" />
                    <span>مصنفین ({matchingAuthors.length}):</span>
                  </h4>
                  <div className="space-y-2">
                    {matchingAuthors.map(a => (
                      <div key={a.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-slate-900 block">{a.name}</span>
                          <span className="text-slate-500">{a.role} ({a.city})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News */}
              {matchingNews.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                    <Newspaper className="w-4 h-4 text-emerald-600" />
                    <span>خبریں و اعلانات ({matchingNews.length}):</span>
                  </h4>
                  <div className="space-y-2">
                    {matchingNews.map(n => (
                      <div key={n.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <span className="font-bold text-slate-900 block">{n.title}</span>
                        <span className="text-slate-500">{n.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchingWorks.length === 0 && matchingAuthors.length === 0 && matchingNews.length === 0 && (
                <div className="text-center py-8 text-xs text-slate-500">
                  کوئی نتائج نہیں ملے!
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
