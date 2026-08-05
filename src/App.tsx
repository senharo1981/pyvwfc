/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageTab, LiteraryWork } from './types';
import { MOCK_NEWS } from './data/mockData';

import { Header } from './components/Header';
import { NewsTicker } from './components/NewsTicker';
import { HeroSection } from './components/HeroSection';
import { FounderMessage } from './components/FounderMessage';
import { LatestLiteraryContent } from './components/LatestLiteraryContent';
import { FeaturedAuthors } from './components/FeaturedAuthors';
import { OnlineMagazine } from './components/OnlineMagazine';
import { KidsCorner } from './components/KidsCorner';
import { CoursesSection } from './components/CoursesSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { EventsSection } from './components/EventsSection';
import { LiteraryLibrary } from './components/LiteraryLibrary';
import { MembersSection } from './components/MembersSection';
import { MembershipForm } from './components/MembershipForm';
import { TeamShowcase } from './components/TeamShowcase';
import { AboutUs } from './components/AboutUs';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { AdBanners } from './components/AdBanners';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { LiteraryReaderModal } from './components/LiteraryReaderModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { SubmissionModal } from './components/SubmissionModal';
import { Newspaper, Bell } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [selectedWork, setSelectedWork] = useState<LiteraryWork | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-urdu-sans selection:bg-amber-500 selection:text-white dir-rtl">
      
      {/* Main Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubmissionModal={() => setIsSubmissionOpen(true)}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />

      {/* Breaking News Ticker */}
      <NewsTicker />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              setActiveTab={setActiveTab}
              onOpenSubmissionModal={() => setIsSubmissionOpen(true)}
            />

            <FounderMessage setActiveTab={setActiveTab} />

            <LatestLiteraryContent
              onSelectWork={(work) => setSelectedWork(work)}
              setActiveTab={setActiveTab}
            />

            {/* Middle Book Banner Ad */}
            <div className="max-w-7xl mx-auto px-4 my-8">
              <AdBanners type="book" onBannerClick={() => setIsSubmissionOpen(true)} />
            </div>

            <FeaturedAuthors setActiveTab={setActiveTab} />

            <OnlineMagazine />

            <KidsCorner />

            <CoursesSection />

            <CompetitionsSection />

            <EventsSection />
          </>
        )}

        {activeTab === 'about' && <AboutUs />}

        {activeTab === 'team' && <TeamShowcase />}

        {activeTab === 'news' && (
          <section className="py-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-900 text-xs font-bold">
                  <Bell className="w-3.5 h-3.5 text-amber-700" />
                  <span>تنظیمی اعلانات</span>
                </div>
                <h1 className="font-nastaliq text-3xl font-bold text-slate-900">
                  ادبی و تنظیمی خبریں (News & Press Releases)
                </h1>
                <p className="text-xs text-slate-600">پاکستان یوتھ وائس اینڈ رائٹرز فورم کی سرگرمیوں کا مستند ریکارڈ</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_NEWS.map((news) => (
                  <div key={news.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-3 p-5 flex flex-col justify-between">
                    {news.image && (
                      <div className="h-44 rounded-xl overflow-hidden">
                        <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 font-bold">{news.category}</span>
                        <span className="text-slate-400 font-medium">{news.date}</span>
                      </div>
                      <h3 className="font-nastaliq text-xl font-bold text-slate-900 leading-snug">{news.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">{news.excerpt}</p>
                    </div>
                    <button
                      onClick={() => alert(`تفصیلات: ${news.content}`)}
                      className="w-full py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                    >
                      مکمل خبر پڑھیں
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'library' && (
          <LiteraryLibrary onSelectWork={(work) => setSelectedWork(work)} />
        )}

        {activeTab === 'authors' && (
          <FeaturedAuthors setActiveTab={setActiveTab} />
        )}

        {activeTab === 'magazine' && <OnlineMagazine />}

        {activeTab === 'kids' && <KidsCorner />}

        {activeTab === 'courses' && <CoursesSection />}

        {activeTab === 'competitions' && <CompetitionsSection />}

        {activeTab === 'events' && <EventsSection />}

        {activeTab === 'gallery' && <GallerySection />}

        {activeTab === 'members' && (
          <MembersSection isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        )}

        {activeTab === 'contact' && <ContactSection />}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Modals */}
      <LiteraryReaderModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectWork={(work) => setSelectedWork(work)}
      />

      <SubmissionModal
        isOpen={isSubmissionOpen}
        onClose={() => setIsSubmissionOpen(false)}
      />

      {/* Floating WhatsApp Quick-Chat Button */}
      <FloatingWhatsApp />
    </div>
  );
}
