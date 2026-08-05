import React, { useState } from 'react';
import { LiteraryWork } from '../types';
import { X, Feather, ThumbsUp, Eye, Copy, Check, Type, Sun, Moon } from 'lucide-react';

interface LiteraryReaderModalProps {
  work: LiteraryWork | null;
  onClose: () => void;
}

export const LiteraryReaderModal: React.FC<LiteraryReaderModalProps> = ({ work, onClose }) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>('normal');
  const [readerTheme, setReaderTheme] = useState<'light' | 'sepia' | 'dark'>('light');
  const [fontFamily, setFontFamily] = useState<'nastaliq' | 'sans'>('nastaliq');
  const [copied, setCopied] = useState(false);
  const [likesCount, setLikesCount] = useState<number>(work?.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);

  if (!work) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${work.title}\nاز: ${work.author}\n\n${work.content}\n\nپیشکش: پاکستان یوتھ وائس اینڈ رائٹرز فورم (www.PYVWF.org)`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount(prev => prev + 1);
      setHasLiked(true);
    }
  };

  const fontSizeClasses = {
    normal: 'text-base md:text-lg leading-loose',
    large: 'text-lg md:text-xl leading-loose',
    huge: 'text-xl md:text-2xl leading-loose'
  };

  const themeClasses = {
    light: 'bg-white text-slate-900 border-slate-200',
    sepia: 'bg-[#fbf0d9] text-[#433422] border-[#e7d7b5]',
    dark: 'bg-slate-950 text-slate-100 border-slate-800'
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className={`w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border ${themeClasses[readerTheme]}`}>
        
        {/* Top Header Bar */}
        <div className="p-4 md:px-6 border-b flex items-center justify-between gap-4 border-slate-200/40 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 text-xs font-bold">
              {work.category}
            </span>
            <span className="text-xs opacity-70 font-medium">{work.date}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Font Family Toggle */}
            <button
              onClick={() => setFontFamily(fontFamily === 'nastaliq' ? 'sans' : 'nastaliq')}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 text-xs font-bold hover:opacity-80 transition"
              title="خط تبدیل کریں"
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Theme switcher */}
            <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
              <button
                onClick={() => setReaderTheme('light')}
                className={`p-1.5 rounded-lg text-xs ${readerTheme === 'light' ? 'bg-white shadow text-slate-900' : 'opacity-60'}`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => setReaderTheme('sepia')}
                className={`p-1.5 rounded-lg text-xs ${readerTheme === 'sepia' ? 'bg-[#f4e4c1] shadow text-amber-950' : 'opacity-60'}`}
              >
                کاہگلی
              </button>
              <button
                onClick={() => setReaderTheme('dark')}
                className={`p-1.5 rounded-lg text-xs ${readerTheme === 'dark' ? 'bg-slate-900 shadow text-white' : 'opacity-60'}`}
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 hover:opacity-80 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-6 text-right">
          
          <div className="border-b border-amber-500/20 pb-4 space-y-2">
            <h1 className={`${fontFamily === 'nastaliq' ? 'font-nastaliq' : 'font-urdu-sans'} text-2xl md:text-3xl font-bold text-amber-700 dark:text-amber-400`}>
              {work.title}
            </h1>
            
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold opacity-80">
              <Feather className="w-4 h-4 text-amber-600" />
              <span>مصنف / شاعر: {work.author}</span>
            </div>
          </div>

          {/* Main Body */}
          <div className={`${fontSizeClasses[fontSize]} ${fontFamily === 'nastaliq' ? 'font-nastaliq' : 'font-urdu-sans'} whitespace-pre-line leading-loose tracking-wide`}>
            {work.content}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="p-4 md:px-6 border-t border-slate-200/40 flex flex-wrap items-center justify-between gap-4 shrink-0 bg-slate-500/5">
          <div className="flex items-center gap-4 text-xs font-bold">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition ${
                hasLiked
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-slate-300 hover:bg-slate-100 dark:border-slate-700'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>پسند کریں ({likesCount})</span>
            </button>

            <span className="flex items-center gap-1 opacity-70">
              <Eye className="w-4 h-4" />
              <span>{work.views + 1} قارئین</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font Size Adjuster */}
            <div className="flex items-center gap-1 text-xs font-bold border border-slate-300 dark:border-slate-700 rounded-xl p-1">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded ${fontSize === 'normal' ? 'bg-amber-500 text-slate-950' : 'opacity-70'}`}
              >
                چھوٹا
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded ${fontSize === 'large' ? 'bg-amber-500 text-slate-950' : 'opacity-70'}`}
              >
                متوسط
              </button>
              <button
                onClick={() => setFontSize('huge')}
                className={`px-2 py-0.5 rounded ${fontSize === 'huge' ? 'bg-amber-500 text-slate-950' : 'opacity-70'}`}
              >
                بڑا
              </button>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 text-xs font-bold hover:bg-slate-800 transition shadow"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'کاپی ہو گیا!' : 'متن کاپی کریں'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
