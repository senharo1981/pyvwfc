import React from 'react';
import { MOCK_ADS } from '../data/mockData';
import { BookOpen, Sparkles, ExternalLink } from 'lucide-react';

interface AdBannersProps {
  type: 'top' | 'sidebar' | 'book';
  onBannerClick?: () => void;
}

export const AdBanners: React.FC<AdBannersProps> = ({ type, onBannerClick }) => {
  const ad = MOCK_ADS.find(a => a.type === type) || MOCK_ADS[0];

  if (type === 'top') {
    return (
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm font-bold">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />
            <span>{ad.title}</span>
            <span className="hidden md:inline text-slate-900 font-medium">— {ad.subtitle}</span>
          </div>
          <button
            onClick={onBannerClick}
            className="px-4 py-1.5 rounded-lg bg-slate-950 text-amber-400 text-xs font-bold hover:bg-slate-900 transition flex items-center gap-1 shadow-sm"
          >
            <span>{ad.linkText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  if (type === 'sidebar') {
    return (
      <div className="bg-white rounded-2xl p-4 border-2 border-amber-400 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-[11px] font-bold text-amber-800">
          <span>اسپانسرڈ کتب و اعلانات</span>
          <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">اشتہار</span>
        </div>
        <div className="h-36 rounded-xl overflow-hidden relative">
          <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-nastaliq text-lg font-bold text-slate-900">{ad.title}</h4>
          <p className="text-xs text-slate-600">{ad.subtitle}</p>
        </div>
        <button
          onClick={onBannerClick}
          className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition"
        >
          {ad.linkText}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl p-6 text-white border border-slate-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="space-y-1 text-center md:text-right">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[11px] font-bold">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>مصنفین کی کتب کی تشہیر</span>
        </div>
        <h3 className="font-nastaliq text-xl font-bold text-white">{ad.title}</h3>
        <p className="text-xs text-slate-300">{ad.subtitle}</p>
      </div>
      <button
        onClick={onBannerClick}
        className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition shadow-md shrink-0"
      >
        {ad.linkText}
      </button>
    </div>
  );
};
