import React, { useState } from 'react';
import { MOCK_LITERARY_WORKS } from '../data/mockData';
import { LiteraryWork, LiteraryCategory } from '../types';
import { Search, BookOpen, ThumbsUp, Eye, Feather, Bookmark, Sparkles } from 'lucide-react';

interface LiteraryLibraryProps {
  onSelectWork: (work: LiteraryWork) => void;
}

export const LiteraryLibrary: React.FC<LiteraryLibraryProps> = ({ onSelectWork }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('تمام');
  const [savedBookmarked, setSavedBookmarked] = useState<string[]>([]);

  const categories: string[] = [
    'تمام',
    'غزل',
    'نظم',
    'آزاد نظم',
    'افسانہ',
    'مضمون',
    'کالم',
    'تحقیق',
    'تنقید',
    'سفرنامہ',
    'انٹرویو',
    'کتابی تبصرے'
  ];

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedBookmarked(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredWorks = MOCK_LITERARY_WORKS.filter((work) => {
    const matchesCat = selectedCategory === 'تمام' || work.category === selectedCategory;
    const matchesQuery = searchQuery.trim() === '' || 
      work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 text-white space-y-4 shadow-xl border border-slate-800">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>آن لائن ذخیرۂ ادب</span>
          </div>

          <h1 className="font-nastaliq text-3xl md:text-4xl font-bold text-white">
            ادبی لائبریری (Literary Library)
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl font-light leading-relaxed">
            اردو ادب کے تاریخی و معاصر شاہکاروں، غزلیات، نظموں، کالموں اور افسانوں کا باوقار ڈیجیٹل مجموعہ
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl">
            <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="عنوان، شاعر یا مصنف کا نام تلاش کریں..."
              className="w-full pr-12 pl-4 py-3 rounded-2xl bg-slate-800/90 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:border-amber-400 text-xs md:text-sm shadow-inner"
            />
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-amber-300 shadow-md border border-blue-800'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Works Count & Results */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
          <span>دستیاب تحاریر: ({filteredWorks.length})</span>
          {savedBookmarked.length > 0 && (
            <span className="text-amber-700 flex items-center gap-1">
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>محفوظ شدہ: {savedBookmarked.length}</span>
            </span>
          )}
        </div>

        {/* Works Grid */}
        {filteredWorks.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
            <Sparkles className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-nastaliq text-xl font-bold text-slate-700">کوئی تحریر نہیں ملی</h3>
            <p className="text-xs text-slate-500">براہ کرم تلاش کا لفظ یا کیٹیگری تبدیل کر کے دیکھیں۔</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work) => {
              const isBookmarked = savedBookmarked.includes(work.id);
              return (
                <div
                  key={work.id}
                  onClick={() => onSelectWork(work)}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 text-xs font-bold">
                        {work.category}
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(work.id, e)}
                        className={`p-1.5 rounded-lg transition ${
                          isBookmarked ? 'text-amber-600 bg-amber-50' : 'text-slate-400 hover:text-slate-600'
                        }`}
                        title="بک مارک کریں"
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <h3 className="font-nastaliq text-xl font-bold text-slate-900 group-hover:text-blue-900 transition line-clamp-1">
                      {work.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      <Feather className="w-3.5 h-3.5 text-amber-600" />
                      <span>{work.author}</span>
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 whitespace-pre-line">
                      {work.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
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
                      مکمل تحریر پڑھیں ←
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
