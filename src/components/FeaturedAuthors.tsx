import React, { useState } from 'react';
import { MOCK_AUTHORS } from '../data/mockData';
import { Author, PageTab } from '../types';
import { BookMarked, MapPin, Feather, Award, X } from 'lucide-react';

interface FeaturedAuthorsProps {
  setActiveTab: (tab: PageTab) => void;
}

export const FeaturedAuthors: React.FC<FeaturedAuthorsProps> = ({ setActiveTab }) => {
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold mb-2">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>اهلِ قلم</span>
            </div>
            <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-slate-900">
              نمایاں شائع شدہ مصنفین و شعراء
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              ادب کی دنیا میں PYVWF کے معروف اور باصلاحیت قلمکاروں کی فہرست
            </p>
          </div>

          <button
            onClick={() => setActiveTab('authors')}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition flex items-center gap-1.5"
          >
            <Feather className="w-4 h-4 text-amber-400" />
            <span>تمام مصنفین کی فہرست ←</span>
          </button>
        </div>

        {/* Authors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_AUTHORS.map((author) => (
            <div
              key={author.id}
              onClick={() => setSelectedAuthor(author)}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-center space-y-3 group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-500 mx-auto shadow-md group-hover:scale-105 transition-transform">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-nastaliq text-lg font-bold text-slate-900 group-hover:text-blue-900 transition">
                  {author.name}
                </h3>
                <p className="text-xs text-amber-700 font-semibold">{author.role}</p>
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{author.city}، {author.country}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {author.bio}
              </p>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <BookMarked className="w-3.5 h-3.5 text-blue-900" />
                  <span>{author.publishedBooks.length} کتب</span>
                </span>
                <span className="text-blue-900 font-bold group-hover:underline">
                  پروفائل دیکھیں
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Author Details Modal */}
        {selectedAuthor && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl relative border border-amber-500/30">
              
              <button
                onClick={() => setSelectedAuthor(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-right border-b border-slate-100 pb-5">
                <img
                  src={selectedAuthor.avatar}
                  alt={selectedAuthor.name}
                  className="w-28 h-28 rounded-2xl object-cover border-4 border-amber-500 shadow-lg"
                />
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                    شائع شدہ مصنف
                  </span>
                  <h3 className="font-nastaliq text-2xl font-bold text-slate-900">
                    {selectedAuthor.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-700">{selectedAuthor.role}</p>
                  <p className="text-xs text-slate-500">{selectedAuthor.city}، {selectedAuthor.country}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-slate-900">مختصر تعارف:</h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {selectedAuthor.bio}
                </p>
              </div>

              {/* Published Books */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-amber-600" />
                  <span>شائع شدہ کتابیں ({selectedAuthor.publishedBooks.length}):</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedAuthor.publishedBooks.map((book, idx) => (
                    <div key={idx} className="flex gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-16 h-22 object-cover rounded shadow border border-slate-300 shrink-0"
                      />
                      <div className="space-y-1">
                        <h5 className="font-bold text-xs text-slate-900">{book.title}</h5>
                        <p className="text-[11px] text-amber-700 font-semibold">سال: {book.year}</p>
                        <p className="text-[11px] text-slate-600 line-clamp-2">{book.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <div className="pt-2 flex justify-end border-t border-slate-100">
                <button
                  onClick={() => setSelectedAuthor(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition"
                >
                  بند کریں
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
