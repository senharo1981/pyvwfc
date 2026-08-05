import React, { useState } from 'react';
import { MOCK_EVENTS } from '../data/mockData';
import { Calendar, MapPin, Clock, Users, Sparkles } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [filterType, setFilterType] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = MOCK_EVENTS.filter(e => 
    filterType === 'upcoming' ? e.isUpcoming : !e.isUpcoming
  );

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold mb-2">
              <Calendar className="w-3.5 h-3.5 text-blue-700" />
              <span>ادبی تقریبات</span>
            </div>
            <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-slate-900">
              ایونٹس، سیمینارز و کل پاکستان مشاعرے
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              مستقبل میں منعقد ہونے والے اور ماضی کے یادگار علمی و ادبی پروگرامز
            </p>
          </div>

          <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setFilterType('upcoming')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                filterType === 'upcoming'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              عنقریب منعقد ہونے والے ({MOCK_EVENTS.filter(e => e.isUpcoming).length})
            </button>
            <button
              onClick={() => setFilterType('past')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                filterType === 'past'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ماضی کی رپورٹس ({MOCK_EVENTS.filter(e => !e.isUpcoming).length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-sm text-amber-400 font-bold text-xs shadow-md">
                    {event.type}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>{event.date}</span>
                    <span className="text-slate-400">•</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-500">{event.time}</span>
                  </div>

                  <h3 className="font-nastaliq text-xl font-bold text-slate-900 group-hover:text-blue-900 transition leading-snug">
                    {event.title}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-600">
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>{event.venue} ({event.city})</span>
                    </p>
                    {event.chiefGuest && (
                      <p className="flex items-center gap-1.5 font-bold text-amber-800">
                        <Users className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>مہمانِ خاص: {event.chiefGuest}</span>
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => alert(`ایونٹ "${event.title}" کے لیے سیٹ محفوظ کرنے کی تفصیلات آپ کے واٹس ایپ پر بھیج دی جائیں گی!`)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{event.isUpcoming ? 'آن لائن رجسٹریشن کریں' : 'تصویری رپورٹ دیکھیں'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
