import React, { useState } from 'react';
import { PenTool, X, CheckCircle2, Send, Mail } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ORGANISATION_INFO } from '../data/mockData';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmissionModal: React.FC<SubmissionModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'غزل',
    city: '',
    whatsapp: '',
    title: '',
    content: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp pre-filled text
    const message = `السلام علیکم!\n*پاکستان یوتھ وائس فورم - تحریر / کہانی ارسال*\n\n*نام:* ${formData.name}\n*شہر:* ${formData.city}\n*کیٹیگری:* ${formData.category}\n*رابطہ نمبر:* ${formData.whatsapp}\n*عنوان:* ${formData.title}\n\n*تحریر کا متن:*\n${formData.content}`;
    
    const waUrl = `https://wa.me/923033413307?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  const directEmailUrl = `mailto:${ORGANISATION_INFO.email}?subject=${encodeURIComponent("پاکستان یوتھ وائس فورم - ادبی تحریر / کہانی ارسال")}&body=${encodeURIComponent("نام:\nعنوان:\nکیٹیگری:\nشہر:\n\nتحریر کا متن:\n")}`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 space-y-5 shadow-2xl relative border-2 border-amber-400 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 text-right">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            <PenTool className="w-3.5 h-3.5 text-amber-700" />
            <span>قلمکاروں کے لیے موقع</span>
          </div>
          <h3 className="font-nastaliq text-2xl font-bold text-slate-900">
            اپنی تحریر / کہانی جمع کروائیں
          </h3>
          <p className="text-xs text-slate-600">
            اپنی غزل، نظم، افسانہ، کہانی یا مضمون براہ راست ہمارے ای میل یا واٹس ایپ پر ارسال کریں۔
          </p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          <a
            href="https://wa.me/923033413307?text=السلام%20علیکم!%20میں%20اپنی%20تحریر%20/%20کہانی%20ارسال%20کرنا%20چاہتا/چاہتی%20ہوں۔"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>واٹس ایپ پر بھیجیں (03033413307)</span>
          </a>

          <a
            href={directEmailUrl}
            className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition shadow"
          >
            <Mail className="w-4 h-4 text-amber-300" />
            <span>ای میل کریں ({ORGANISATION_INFO.email})</span>
          </a>
        </div>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink mx-3 text-slate-400 text-xs font-bold">یا فارم کے ذریعے بھیجیں</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-base">تحریر کی تفصیل تیار ہے!</h4>
            <p className="text-xs">آپ کو براہ راست واٹس ایپ پر منتقل کیا جا رہا ہے...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs text-right">
            <div>
              <label className="block font-bold text-slate-700 mb-1">نام:</label>
              <input 
                required 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="اپنا پورا نام لکھیں" 
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500" 
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">شعبہ / کیٹیگری:</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500 font-bold"
                >
                  <option>افسانہ / کہانی</option>
                  <option>غزل</option>
                  <option>نظم</option>
                  <option>مضمون</option>
                  <option>کالم</option>
                  <option>کتابی تبصرہ</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">شہر:</label>
                <input 
                  required 
                  type="text" 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  placeholder="شہر کا نام" 
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500" 
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">واٹس ایپ نمبر:</label>
              <input 
                required 
                type="tel" 
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                placeholder="03033413307" 
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500 dir-ltr text-right" 
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">عنوان:</label>
              <input 
                required 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="تحریر یا کہانی کا عنوان" 
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500" 
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">تحریر کا پورا متن:</label>
              <textarea 
                rows={4} 
                required 
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                placeholder="یہاں اپنی مکمل تحریر یا کہانی تحریر کیجئے..." 
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500" 
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow"
            >
              <Send className="w-4 h-4" />
              <span>واٹس ایپ / ای میل پر تحریر بھیجیں</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
