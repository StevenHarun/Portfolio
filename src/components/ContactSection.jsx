import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { translations } from '../data/translations';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ContactSection({ darkMode, lang = 'en', showToast }) {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = translations[lang]?.contact || translations.en.contact;

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    showToast(`${type} ${t.copyToast}`);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast(t.fillRequired);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(lang === 'id' ? 'Terima kasih! Pesan telah disiapkan.' : 'Thank you! Your message inquiry has been prepared.');
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Executive Portfolio Inquiry')}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.open(mailtoLink, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-2 border ${
          darkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>
        <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          {t.title}
        </h2>
        <p className={`text-sm sm:text-base mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Quick Card */}
          <div className={`rounded-3xl p-6 border transition-all ${
            darkMode 
              ? 'bg-slate-900/80 border-slate-800' 
              : 'bg-white border-slate-200 shadow-md shadow-slate-200/50'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-xl ${
                  darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  <Mail className="w-4 h-4" />
                </div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>Email</span>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'Email')}
                type="button"
                className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
                title="Copy Email"
              >
                {copiedType === 'Email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[11px]">{copiedType === 'Email' ? (lang === 'id' ? 'Disalin' : 'Copied') : (lang === 'id' ? 'Salin' : 'Copy')}</span>
              </button>
            </div>
            <a 
              href={`mailto:${personalInfo.email}`}
              className={`text-base font-bold font-mono hover:text-indigo-500 transition block truncate ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {personalInfo.email}
            </a>
            <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {lang === 'id' ? 'Korespondensi resmi dan profesional.' : 'Direct corporate and professional correspondence.'}
            </p>
          </div>

          {/* WhatsApp & Phone Card */}
          <div className={`rounded-3xl p-6 border transition-all ${
            darkMode 
              ? 'bg-slate-900/80 border-slate-800' 
              : 'bg-white border-slate-200 shadow-md shadow-slate-200/50'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-xl ${
                  darkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  <Phone className="w-4 h-4" />
                </div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>WhatsApp / Phone</span>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                type="button"
                className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
                title="Copy Phone Number"
              >
                {copiedType === 'Phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[11px]">{copiedType === 'Phone' ? (lang === 'id' ? 'Disalin' : 'Copied') : (lang === 'id' ? 'Salin' : 'Copy')}</span>
              </button>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className={`text-base font-bold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.phone}
              </span>
              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold inline-flex items-center gap-1 transition shadow-md shadow-emerald-600/20"
              >
                <span>WhatsApp</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Profiles Card */}
          <div className={`rounded-3xl p-6 border ${
            darkMode 
              ? 'bg-slate-900/80 border-slate-800' 
              : 'bg-white border-slate-200 shadow-md'
          }`}>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-4">
              {t.directConnect}
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 rounded-2xl border flex items-center justify-between transition hover:-translate-y-0.5 ${
                  darkMode 
                    ? 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800 text-slate-200' 
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <span className="text-xs font-bold">LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 rounded-2xl border flex items-center justify-between transition hover:-translate-y-0.5 ${
                  darkMode 
                    ? 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800 text-slate-200' 
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <span className="text-xs font-bold">GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
          <div className={`rounded-3xl p-6 sm:p-8 border ${
            darkMode 
              ? 'bg-slate-900/90 border-slate-800 shadow-2xl shadow-black/30' 
              : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
          }`}>
            <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-1 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {lang === 'id' ? 'Kirim Pesan Langsung' : 'Send a Direct Message'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              {lang === 'id' 
                ? 'Isi formulir di bawah ini untuk mengirim pesan atau diskusi peluang karir.' 
                : 'Fill out the form below to initiate an immediate inquiry or professional discussion.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode 
                        ? 'bg-slate-800/60 border-slate-700 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    {t.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode 
                        ? 'bg-slate-800/60 border-slate-700 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  {t.subjectLabel}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.subjectPlaceholder}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode 
                      ? 'bg-slate-800/60 border-slate-700 text-white placeholder-slate-500' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  {t.messageLabel} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.messagePlaceholder}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                    darkMode 
                      ? 'bg-slate-800/60 border-slate-700 text-white placeholder-slate-500' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:brightness-110 text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? t.submitting : t.sendBtn}</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
