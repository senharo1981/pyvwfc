import React, { useState } from 'react';
import { MOCK_TEAM } from '../data/mockData';
import { TeamMember } from '../types';
import { Users, Award, MapPin, HeartHandshake, Quote } from 'lucide-react';

export const TeamShowcase: React.FC = () => {
  const [activeTier, setActiveTier] = useState<string>('all');

  const filteredTeam = activeTier === 'all'
    ? MOCK_TEAM
    : MOCK_TEAM.filter(m => m.tier === activeTier);

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold mb-2">
              <Users className="w-3.5 h-3.5 text-amber-700" />
              <span>تنظیمی ڈھانچہ</span>
            </div>
            <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-slate-900">
              ہماری ٹیم و مرکزی عہدیداران
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              بانی و صدر، مرکزی قیادت، مشاورتی بورڈ اور بین الاقوامی نمائندگان
            </p>
          </div>

          <div className="flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setActiveTier('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTier === 'all' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              تمام عہدیداران
            </button>
            <button
              onClick={() => setActiveTier('president')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTier === 'president' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              بانی و صدر
            </button>
            <button
              onClick={() => setActiveTier('executive')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTier === 'executive' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              مرکزی عہدیداران
            </button>
            <button
              onClick={() => setActiveTier('advisory')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTier === 'advisory' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              مشاورتی بورڈ
            </button>
            <button
              onClick={() => setActiveTier('international')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTier === 'international' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              بین الاقوامی نمائندگان
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className={`bg-slate-50 rounded-2xl p-6 border shadow-sm transition hover:shadow-md space-y-4 ${
                member.tier === 'president' ? 'border-amber-400 bg-amber-50/30' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-500 shadow shrink-0">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    member.tier === 'president' ? 'bg-amber-500 text-slate-950' : 'bg-blue-100 text-blue-900'
                  }`}>
                    {member.tier === 'president' ? 'بانی و صدر' : member.role}
                  </span>
                  <h3 className="font-nastaliq text-xl font-bold text-slate-900">{member.name}</h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{member.city}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-light">
                {member.bio}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                <div className="flex items-start gap-1.5 text-slate-700">
                  <Award className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>ادبی خدمات:</strong> {member.literaryServices}</span>
                </div>
                <div className="flex items-start gap-1.5 text-slate-700">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>سماجی خدمات:</strong> {member.socialServices}</span>
                </div>
              </div>

              {member.message && (
                <div className="p-3 bg-amber-100/60 rounded-xl border border-amber-300 text-xs text-amber-950 flex gap-2">
                  <Quote className="w-4 h-4 text-amber-600 shrink-0 rotate-180" />
                  <p className="italic">"{member.message}"</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
