import React, { useState } from 'react';
import { MOCK_GALLERY } from '../data/mockData';
import { GalleryItem } from '../types';
import { Image, Film, Play, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [activeMedia, setActiveMedia] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? MOCK_GALLERY
    : MOCK_GALLERY.filter(item => item.type === filter);

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold mb-2">
              <Image className="w-3.5 h-3.5 text-blue-700" />
              <span>تصویری و ویڈیو ریکارڈ</span>
            </div>
            <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-slate-900">
              فوٹو و ویڈیو گیلری
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              ادبی نشستوں، مشاعروں، ایوارڈ تقریبات اور ورکشاپس کے تصویری مناظر
            </p>
          </div>

          <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                filter === 'all' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              تمام ({MOCK_GALLERY.length})
            </button>
            <button
              onClick={() => setFilter('photo')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                filter === 'photo' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              تصاویر
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                filter === 'video' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              ویڈیوز (YouTube)
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition cursor-pointer group relative"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                {item.type === 'video' ? (
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Play className="w-6 h-6 fill-current mr-0.5" />
                    </div>
                  </div>
                ) : (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-900/80 text-amber-300 text-[11px] font-bold">
                    {item.category}
                  </span>
                )}
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-nastaliq text-base font-bold text-slate-900 line-clamp-1 group-hover:text-blue-900">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeMedia && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl max-w-3xl w-full p-6 text-white space-y-4 shadow-2xl relative border border-slate-800">
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  {activeMedia.category} ({activeMedia.type === 'photo' ? 'تصویر' : 'ویڈیو'})
                </span>
                <h3 className="font-nastaliq text-2xl font-bold text-white">
                  {activeMedia.title}
                </h3>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 max-h-[65vh] flex items-center justify-center">
                {activeMedia.type === 'photo' ? (
                  <img src={activeMedia.url} alt={activeMedia.title} className="max-h-[60vh] object-contain" />
                ) : (
                  <div className="w-full aspect-video bg-slate-950 flex flex-col items-center justify-center space-y-3 p-8">
                    <Film className="w-16 h-16 text-amber-400" />
                    <p className="text-sm font-bold text-slate-200">یوٹیوب ویڈیو ریکارڑنگ - PYVWF آفیشل چینل</p>
                    <button
                      onClick={() => alert("یہ ویڈیو یوٹیوب پر لائیو پلے ہو رہی ہے!")}
                      className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                    >
                      یوٹیوب پر دیکھیں
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span>پاکستان یوتھ وائس اینڈ رائٹرز فورم گیلری</span>
                <span>{activeMedia.date}</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
