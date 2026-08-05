import React, { useState } from 'react';
import { MOCK_MEMBERS, ORGANISATION_INFO } from '../data/mockData';
import { Member } from '../types';
import { UserCheck, ShieldCheck, Phone, Mail, MapPin, CreditCard, Sparkles, Printer, X } from 'lucide-react';

interface MembersSectionProps {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
}

export const MembersSection: React.FC<MembersSectionProps> = ({ isAdmin, setIsAdmin }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('تمام');
  const [cardMember, setCardMember] = useState<Member | null>(null);

  const categories = ['تمام', 'طالب علم', 'مصنف / شاعر', 'نوجوان ممبر', 'سینئر ممبر'];

  const filteredMembers = selectedCategory === 'تمام'
    ? MOCK_MEMBERS
    : MOCK_MEMBERS.filter(m => m.category === selectedCategory);

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold mb-2">
              <UserCheck className="w-3.5 h-3.5 text-blue-700" />
              <span>قومی و بین الاقوامی نیٹ ورک</span>
            </div>
            <h2 className="font-nastaliq text-2xl md:text-3xl font-bold text-slate-900">
              رجسٹرڈ فورم ممبران
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              پاکستان اور دنیا بھر سے شامل باوقار طالب علم، شعراء، ادیب اور سینئر اراکین
            </p>
          </div>

          {/* Admin Toggle Alert Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 border ${
                isAdmin
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isAdmin ? 'سپر ایڈمن ویو (نجی ڈیٹا فعال)' : 'عوامی ویو (پبلک)'}</span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-amber-300 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Members Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition text-center space-y-3 relative group"
            >
              <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[10px] font-bold">
                {member.category}
              </span>

              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-500 mx-auto shadow-md">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>

              <div>
                <h3 className="font-nastaliq text-lg font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-xs text-amber-700 font-semibold">{member.field}</p>
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{member.city}، {member.country}</span>
                </div>
              </div>

              {/* Private vs Public Details */}
              {isAdmin ? (
                <div className="bg-amber-100/70 p-3 rounded-xl text-xs text-slate-800 text-right space-y-1 border border-amber-200">
                  <span className="font-bold text-[10px] text-amber-900 block border-b border-amber-300 pb-0.5">
                    سپر ایڈمن نجی ریکارڈ:
                  </span>
                  <p className="flex items-center gap-1 text-[11px] dir-ltr text-right">
                    <Phone className="w-3 h-3 text-amber-800" />
                    <span>{member.phonePrivate}</span>
                  </p>
                  <p className="flex items-center gap-1 text-[11px] dir-ltr text-right">
                    <Mail className="w-3 h-3 text-amber-800" />
                    <span>{member.emailPrivate}</span>
                  </p>
                </div>
              ) : (
                <p className="text-[11px] text-slate-500 font-medium">
                  آئی ڈی: <strong className="text-slate-700 dir-ltr inline-block">{member.membershipId}</strong>
                </p>
              )}

              {/* Digital Membership Card Button */}
              <button
                onClick={() => setCardMember(member)}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                <span>ڈیجیٹل کارڈ دیکھیں</span>
              </button>
            </div>
          ))}
        </div>

        {/* Digital Membership Card Modal */}
        {cardMember && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-6 shadow-2xl relative border-4 border-amber-400">
              <button
                onClick={() => setCardMember(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  آفیشل ڈیجیٹل ممبرشپ کارڈ
                </span>
                <h3 className="font-nastaliq text-xl font-bold text-slate-900">
                  پاکستان یوتھ وائس اینڈ رائٹرز فورم
                </h3>
              </div>

              {/* Card visual */}
              <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-2xl p-6 text-white space-y-4 shadow-xl border-2 border-amber-500 relative overflow-hidden">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-white ring-2 ring-amber-400 shrink-0">
                      <img 
                        src={ORGANISATION_INFO.logo} 
                        alt={ORGANISATION_INFO.nameUrdu}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-nastaliq text-lg font-bold text-amber-300 leading-none">PYVWF</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">www.PYVWF.org</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[10px]">
                    ارکانِ فورم
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <img
                    src={cardMember.avatar}
                    alt={cardMember.name}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-amber-400 shadow shrink-0"
                  />
                  <div className="space-y-0.5 text-right">
                    <h5 className="font-nastaliq text-xl font-bold text-white">{cardMember.name}</h5>
                    <p className="text-xs text-amber-300 font-medium">{cardMember.field}</p>
                    <p className="text-[11px] text-slate-400">{cardMember.city}، {cardMember.country}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-300">
                  <div>
                    <span className="text-slate-400">ممبرشپ نمبر:</span>
                    <strong className="text-amber-400 font-mono mr-1 dir-ltr">{cardMember.membershipId}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">تاریخِ شمولیت:</span>
                    <span className="text-white mr-1">{cardMember.joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-slate-500">QR Code Verified</span>
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 flex items-center gap-1.5 shadow"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>پرنٹ یا سیو (PDF)</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
