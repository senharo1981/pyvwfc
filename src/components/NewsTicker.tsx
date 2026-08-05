import React, { useState, useEffect } from 'react';
import { MOCK_TICKER_NEWS } from '../data/mockData';
import { Bell, ChevronLeft, ChevronRight } from 'lucide-react';

export const NewsTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCK_TICKER_NEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MOCK_TICKER_NEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MOCK_TICKER_NEWS.length) % MOCK_TICKER_NEWS.length);
  };

  return (
    <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
        {/* News Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500 text-slate-950 font-bold text-xs shrink-0 shadow-sm">
          <Bell className="w-3.5 h-3.5 animate-bounce" />
          <span>تازہ ترین اعلانات</span>
        </div>

        {/* Scrolling text display */}
        <div className="flex-1 overflow-hidden relative h-6 flex items-center">
          <p className="text-xs md:text-sm font-medium text-slate-200 truncate transition-all duration-300">
            {MOCK_TICKER_NEWS[currentIndex]}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handlePrev}
            className="p-1 rounded hover:bg-slate-800 text-slate-300 transition"
            title="پچھلا"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-[11px] text-slate-400 px-1 dir-ltr">
            {currentIndex + 1} / {MOCK_TICKER_NEWS.length}
          </span>
          <button
            onClick={handleNext}
            className="p-1 rounded hover:bg-slate-800 text-slate-300 transition"
            title="اگلا"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
