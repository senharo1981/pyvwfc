import React, { useState } from 'react';
import { PageTab } from '../types';
import { ORGANISATION_INFO } from '../data/mockData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { 
  Feather, 
  Menu, 
  X, 
  Search, 
  UserCheck, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  Mail,
  Home,
  PenTool
} from 'lucide-react';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenSearch: () => void;
  onOpenSubmissionModal?: () => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenSubmissionModal,
  isAdmin,
  setIsAdmin
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'ہوم' },
    { id: 'about', label: 'ہمارے بارے میں' },
    { id: 'team', label: 'ہماری ٹیم' },
    { id: 'news', label: 'خبریں و اعلانات' },
    { id: 'library', label: 'ادبی لائبریری' },
    { id: 'authors', label: 'مصنفین' },
    { id: 'magazine', label: 'آن لائن میگزین' },
    { id: 'kids', label: 'بچوں کا گھر' },
    { id: 'courses', label: 'کورسز و ورکشاپس' },
    { id: 'competitions', label: 'مقابلہ جات' },
    { id: 'events', label: 'ایونٹس' },
    { id: 'members', label: 'فورم ممبران' },
    { id: 'gallery', label: 'گیلری' },
    { id: 'contact', label: 'رابطہ' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
      {/* Top Header Contact & Motto Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Motto & Tagline */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium text-[11px] border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {ORGANISATION_INFO.motto}
            </span>
            <span className="hidden md:inline text-slate-400 text-xs truncate max-w-md">
              "{ORGANISATION_INFO.tagline}"
            </span>
          </div>

          {/* Contact info & Admin Toggle */}
          <div className="flex items-center gap-4 me-auto sm:me-0">
            <a href={`mailto:${ORGANISATION_INFO.email}`} className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-amber-400 transition">
              <Mail className="w-3.5 h-3.5" />
              <span>{ORGANISATION_INFO.email}</span>
            </a>
            <a 
              href={`https://wa.me/${ORGANISATION_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noreferrer" 
              title="واٹس ایپ پر چیٹ کریں (03033413307)"
              className="flex items-center gap-1.5 bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-300 hover:text-emerald-200 px-2.5 py-1 rounded-full border border-emerald-500/30 transition dir-ltr group"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs font-bold">{ORGANISATION_INFO.whatsapp}</span>
            </a>

            {/* Admin toggle mode button */}
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition ${
                isAdmin ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
              title="سپر ایڈمن موڈ میں فون اور ای میل کے نجی ریکارڈز نظر آتے ہیں"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAdmin ? 'ایڈمن موڈ (فعال)' : 'سپر ایڈمن لاگ ان'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding & Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white ring-2 ring-blue-900/20 shadow-md group-hover:scale-105 transition-transform duration-200">
            <img 
              src={ORGANISATION_INFO.logo} 
              alt={ORGANISATION_INFO.nameUrdu} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-nastaliq text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                {ORGANISATION_INFO.nameUrdu}
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-xs border border-blue-200">
                {ORGANISATION_INFO.nameShort}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              {ORGANISATION_INFO.website} • {ORGANISATION_INFO.nameEnglish}
            </p>
          </div>
        </div>

        {/* Action Buttons (Search & Membership CTA) */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-lg text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition border border-slate-200 flex items-center gap-1.5 text-xs font-medium"
            title="تلاش کریں"
          >
            <Search className="w-4 h-4" />
            <span className="hidden md:inline">تلاش</span>
          </button>

          <button
            onClick={() => handleNavClick('magazine')}
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500/10 text-amber-900 hover:bg-amber-500/20 text-xs font-semibold border border-amber-300 transition"
          >
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>سہ ماہی میگزین</span>
          </button>

          <button
            onClick={() => onOpenSubmissionModal ? onOpenSubmissionModal() : window.open('https://wa.me/923033413307', '_blank')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-700 to-emerald-900 text-white hover:from-emerald-800 hover:to-emerald-950 text-xs font-bold shadow-sm hover:shadow transition border border-emerald-600"
          >
            <PenTool className="w-4 h-4 text-amber-300" />
            <span>تحریر / کہانی جمع کروائیں</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Main Navigation Bar */}
      <nav className="hidden lg:block bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto no-scrollbar">
          <ul className="flex items-center gap-1 py-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2.5 rounded-md text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1 ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    {item.id === 'home' && <Home className="w-3.5 h-3.5" />}
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 px-4 py-3 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium text-right transition ${
                  activeTab === item.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex justify-between items-center text-xs text-slate-400">
            <span>آن لائن ادبی و علمی پلیٹ فارم</span>
            <button
              onClick={() => handleNavClick('magazine')}
              className="text-amber-400 hover:underline"
            >
              میگزین مطالعہ کریں →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
