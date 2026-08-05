import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ORGANISATION_INFO } from '../data/mockData';

export function FloatingWhatsApp() {
  const cleanPhone = ORGANISATION_INFO.whatsapp.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanPhone}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact on WhatsApp 03033413307"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-white/30"
    >
      <WhatsAppIcon className="w-6 h-6 fill-white text-white shrink-0 animate-bounce" />
      <span className="font-nastaliq text-xs font-bold hidden sm:inline text-white">
        واٹس ایپ پر رابطہ کریں
      </span>
      <span className="font-mono text-xs dir-ltr font-semibold bg-emerald-800/60 px-2 py-0.5 rounded-full text-emerald-100">
        0303-3413307
      </span>
    </a>
  );
}
