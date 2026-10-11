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
    <section id="contact" className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-20">
      
      {/* 3D Kinetic Animated Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        
        {/* 1. 3D Kinetic Levitating "Get in Touch" Badge */}
        <div className="relative inline-flex items-center justify-center group mb-4 select-none animate-badge-3d">
          {/* Conic neon plasma aura spinning in background */}
          <div className="absolute -inset-[2px] rounded-full bg-[conic-gradient(from_0deg,#10b981,#06b6d4,#6366f1,#a855f7,#10b981)] animate-spin-conic opacity-70 group-hover:opacity-100 blur-[3px] transition-opacity duration-500"></div>

          {/* Elevated Glass Pill with Aceternity Beam Shine */}
          <div className={`relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 border backdrop-blur-xl transition-all duration-300 group-hover:scale-105 overflow-hidden shadow-lg ${
            darkMode 
              ? 'bg-slate-900/90 text-emerald-300 border-emerald-500/40 shadow-emerald-950/50' 
              : 'bg-white/95 text-emerald-700 border-emerald-400/50 shadow-emerald-200/50'
          }`}>
            {/* Beam sweep across pill */}
            <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-beam-sweep pointer-events-none"></div>

            {/* Pulsing/twinkling 3D Sparkle */}
            <div className="relative flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="absolute w-2 h-2 rounded-full bg-emerald-400/40 animate-ping"></span>
            </div>

            <span className="tracking-wide relative z-10 font-bold">
              {t.badge}
            </span>

            {/* Live radar dot */}
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
        </div>

        {/* 2. 3D Iridescent Holographic Headline: "Let's Build Something Exceptional" */}
        <div className="relative mb-4">
          {/* Ambient 3D Neon Aura Glow */}
          <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-indigo-500/15 via-emerald-500/20 to-cyan-500/15 blur-3xl rounded-full pointer-events-none opacity-75 animate-pulse"></div>

          <h2 className="relative text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {lang === 'id' ? (
              <>
                <span className={`inline-block transition-transform duration-300 hover:scale-105 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Mari Bangun Solusi yang{' '}
                </span>
                <span className="hero-shiny-aurora-ai animate-text-3d-flow inline-block relative px-1">
                  Luar Biasa
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 rounded-full animate-pulse"></span>
                </span>
              </>
            ) : (
              <>
                <span className={`inline-block transition-transform duration-300 hover:scale-105 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Let's Build Something{' '}
                </span>
                <span className="hero-shiny-aurora-ai animate-text-3d-flow inline-block relative px-1">
                  Exceptional
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 rounded-full animate-pulse"></span>
                </span>
              </>
            )}
          </h2>
        </div>

        {/* 3. Kinetic Animated Subtitle with Interactive 3D Pillar Tags */}
        <p className={`text-xs sm:text-sm md:text-base mt-2 max-w-2xl mx-auto leading-relaxed animate-float-subtle ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {lang === 'id' ? (
            <>
              Terbuka untuk peluang kolaborasi strategis di bidang{' '}
              <span className="inline-block mx-0.5 px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-500/20">
                Data Science
              </span>
              ,{' '}
              <span className="inline-block mx-0.5 px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-cyan-500/20">
                Machine Learning Engineering
              </span>
              ,{' '}
              <span className="inline-block mx-0.5 px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-500/20">
                Enterprise Systems
              </span>
              , dan{' '}
              <span className="inline-block mx-0.5 px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-amber-500/20">
                Project Controlling
              </span>
              .
            </>
          ) : (
            <>
              Open to strategic collaborations across{' '}
              <span className="inline-block mx-0.5 px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-500/20">
                Data Science
              </span>
              ,{' '}
              <span className="inline-block mx-0.5 px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-cyan-500/20">
                Machine Learning Engineering
              </span>
              ,{' '}
              <span className="inline-block mx-0.5 px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-500/20">
                Enterprise Systems
              </span>
              , and{' '}
              <span className="inline-block mx-0.5 px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-amber-500/20">
                Project Controlling
              </span>
              .
            </>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
          
          {/* Email Quick Card */}
          <div className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 border transition-all ${
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
          <div className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 border transition-all ${
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
              <span className={`text-sm sm:text-base font-bold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>
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
          <div className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${
            darkMode 
              ? 'bg-slate-900/80 border-slate-800' 
              : 'bg-white border-slate-200 shadow-md'
          }`}>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3 sm:mb-4">
              {t.directConnect}
            </span>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border flex items-center justify-between transition hover:-translate-y-0.5 ${
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
                className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border flex items-center justify-between transition hover:-translate-y-0.5 ${
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
          <div className={`rounded-2xl sm:rounded-3xl p-4 sm:p-8 border ${
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
