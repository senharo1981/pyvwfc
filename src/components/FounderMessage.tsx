import React from 'react';
import { MOCK_FOUNDER } from '../data/mockData';
import { Quote, Award, HeartHandshake, MapPin } from 'lucide-react';
import { PageTab } from '../types';

interface FounderMessageProps {
  setActiveTab: (tab: PageTab) => void;
}

export const FounderMessage: React.FC<FounderMessageProps> = ({ setActiveTab }) => {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-2xl text-white p-6 md:p-10 shadow-xl relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Founder Image & Quick Bio */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-amber-500/80 shadow-2xl mx-auto">
                  <img
                    src={MOCK_FOUNDER.photo}
                    alt={MOCK_FOUNDER.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  بانی و صدر
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <h3 className="font-nastaliq text-2xl font-bold text-white">
                  {MOCK_FOUNDER.name}
                </h3>
                <p className="text-amber-300 text-xs font-medium">
                  {MOCK_FOUNDER.role}
                </p>
                <div className="flex items-center justify-center gap-1 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{MOCK_FOUNDER.city}، پاکستان</span>
                </div>
              </div>
            </div>

            {/* Message & Details */}
            <div className="lg:col-span-8 space-y-6 text-right">
              <div className="flex items-center gap-2 text-amber-400">
                <Quote className="w-8 h-8 text-amber-400 rotate-180" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">بانی و صدر کا پیغام</span>
              </div>

              <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-amber-100 leading-relaxed">
                "قلم سے سوچ تک، سوچ سے معاشرے تک — مثبت تبدیلی ہی ہمارا اولین مقصد ہے۔"
              </h2>

              <blockquote className="text-slate-200 text-sm md:text-base leading-relaxed bg-slate-800/60 p-5 rounded-xl border-r-4 border-amber-500 font-light">
                {MOCK_FOUNDER.message}
              </blockquote>

              {/* Literary & Social Services Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>ادبی خدمات:</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {MOCK_FOUNDER.literaryServices}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
                    <HeartHandshake className="w-4 h-4 text-emerald-400" />
                    <span>سماجی خدمات:</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {MOCK_FOUNDER.socialServices}
                  </p>
                </div>
              </div>

              {/* View Full Team Link */}
              <div className="pt-2 flex justify-start">
                <button
                  onClick={() => setActiveTab('team')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
                >
                  <span>مکمل تنظیمی ڈھانچہ اور ہماری ٹیم دیکھیں ←</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
