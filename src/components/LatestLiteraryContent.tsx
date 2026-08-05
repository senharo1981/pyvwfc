import React, { useState } from 'react';
import { MOCK_LITERARY_WORKS } from '../data/mockData';
import { LiteraryWork, LiteraryCategory, PageTab } from '../types';
import { BookOpen, ThumbsUp, Eye, Sparkles, Feather } from 'lucide-react';

interface LatestLiteraryContentProps {
  onSelectWork: (work: LiteraryWork) => void;
  setActiveTab: (tab: PageTab) => void;
}

export const LatestLiteraryContent: React.FC<LatestLiteraryContentProps> = ({
  onSelectWork,
  setActiveTab
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('تمام');

  const categories = ['تمام', 'غزل', 'نظم', 'افسانہ', 'مضمون', 'کالم', 'کتابی تبصرے'];

  const filteredWorks = selectedCategory === 'تمام'
    ? MOCK_LITERARY_WORKS
    : MOCK_LITERARY_WORKS.filter(w => w.category === selectedCategory);

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>ادبی شاہکار</span>
            </div>
            <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-slate-900">
              تازہ ترین ادبی مواد
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              شاعری، مضامین، کالم، افسانے اور محققین کی منتخب تحاریر
            </p>
          </div>

          <button
            onClick={() => setActiveTab('library')}
            className="self-start md:self-auto px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>مکمل ادبی لائبریری دیکھیں ←</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-amber-300 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Literary Works Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectWork(work)}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group hover:border-blue-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                    {work.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {work.date}
                  </span>
                </div>

                <h3 className="font-nastaliq text-xl font-bold text-slate-900 group-hover:text-blue-900 transition line-clamp-1">
                  {work.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Feather className="w-3.5 h-3.5 text-amber-600" />
                  <span>{work.author}</span>
                </p>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed whitespace-pre-line bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {work.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
                    <span>{work.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>{work.views}</span>
                  </span>
                </div>
                <span className="text-blue-900 font-bold group-hover:underline">
                  مطالعہ کریں ←
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
