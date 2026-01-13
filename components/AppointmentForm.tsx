
import React, { useState } from 'react';
import { Send, Instagram, MessageCircle, CheckCircle2, Loader2, Phone } from 'lucide-react';

const AppointmentForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: 'Bridal & Wedding',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto px-6 text-center py-12 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="font-serif text-4xl text-stone-800 dark:text-white mb-4">Request Received</h2>
        <p className="text-stone-500 dark:text-stone-400 font-light mb-8 leading-relaxed">
          Thank you, <span className="text-gold font-semibold">{formData.name}</span>. Sonia Gupta will personally reach out to you via phone or WhatsApp to confirm your bespoke session.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-gold text-xs tracking-widest uppercase border-b border-gold hover:text-gold-dark transition-colors"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="bg-white dark:bg-stone-900 shadow-2xl rounded-sm overflow-hidden grid md:grid-cols-5 transition-colors">
        <div className="md:col-span-2 bg-[#FAF9F6] dark:bg-stone-800/50 p-12 flex flex-col justify-between border-r border-stone-100 dark:border-stone-800">
          <div>
            <h2 className="font-serif text-3xl text-stone-800 dark:text-white mb-6">Begin Your Journey</h2>
            <p className="text-stone-500 dark:text-stone-400 font-light mb-8 leading-relaxed">
              Fill out the form to schedule your personalized design consultation with Sonia Gupta. We look forward to creating magic with you.
            </p>

            <div className="space-y-6">
              <a href="https://instagram.com/desidivaboutique" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-stone-600 dark:text-stone-400 group">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-stone-700 border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
                  <Instagram size={18} />
                </div>
                <span className="text-sm font-light">@DesiDivaBoutique</span>
              </a>
              <a href="https://wa.me/918840972081" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-stone-600 dark:text-stone-400 group">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-stone-700 border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
                  <MessageCircle size={18} />
                </div>
                <span className="text-sm font-light">WhatsApp: +91 88409 72081</span>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-stone-200 dark:border-stone-700">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">The Studio</p>
            <address className="not-italic text-sm text-stone-600 dark:text-stone-400 font-light mt-2 leading-relaxed">
              825 1, near Allahabad Bank Chauraha,<br />
              Civil Lines, Jhansi, UP 284001
            </address>
          </div>
        </div>

        <div className="md:col-span-3 p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-stone-400 font-bold" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-stone-200 dark:border-stone-700 py-3 focus:border-gold transition-colors outline-none font-light placeholder:text-stone-300 dark:text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-stone-400 font-bold" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  required
                  type="tel"
                  placeholder="+91 88409 72081"
                  className="w-full bg-transparent border-b border-stone-200 dark:border-stone-700 py-3 focus:border-gold transition-colors outline-none font-light placeholder:text-stone-300 dark:text-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest uppercase text-stone-400 font-bold" htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                className="w-full border-b border-stone-200 dark:border-stone-700 py-3 focus:border-gold transition-colors outline-none font-light bg-transparent text-stone-600 dark:text-stone-300"
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              >
                <option value="Bridal & Wedding">Bridal & Wedding</option>
                <option value="Festive Wear">Festive Wear</option>
                <option value="Custom Blouse">Custom Blouse</option>
                <option value="Indo-Western Fusion">Indo-Western Fusion</option>
                <option value="Party Wear">Party Wear</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest uppercase text-stone-400 font-bold" htmlFor="date">Preferred Date</label>
              <input
                id="date"
                required
                type="date"
                className="w-full border-b border-stone-200 dark:border-stone-700 py-3 focus:border-gold transition-colors outline-none font-light text-stone-600 dark:text-stone-300 bg-transparent"
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-stone-900 dark:bg-gold text-white tracking-[0.3em] uppercase text-xs hover:bg-gold dark:hover:bg-gold-dark transition-all duration-500 shadow-xl flex items-center justify-center space-x-3 disabled:opacity-70 font-bold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Schedule My Session</span>
                  <Send size={14} />
                </>
              )}
            </button>
            <p className="text-center text-[10px] text-stone-400 font-light mt-4 italic">
              *Your privacy is our priority. We only contact you regarding your inquiry.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
