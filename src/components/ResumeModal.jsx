import React, { useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { 
  X, 
  Download, 
  ExternalLink, 
  Printer, 
  FileText, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  CheckCircle2,
  FileCheck,
  Eye,
  Maximize2
} from 'lucide-react';

export default function ResumeModal({ 
  isOpen, 
  onClose, 
  darkMode = true, 
  lang = 'en'
}) {
  const [zoomLevel, setZoomLevel] = useState(100);
  // Default to Ultra-HD rendered pages for 100% guaranteed, instant rendering across all browsers without iframe blocks
  const [viewFormat, setViewFormat] = useState('pages');
  const t = translations[lang]?.cvModal || translations.en.cvModal;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setZoomLevel(100);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Open the PDF in a dedicated window and trigger print for pristine vector output
    const printWindow = window.open('/Steven_Harun_Samba_CV_ATS.pdf', '_blank');
    if (printWindow) {
      printWindow.focus();
    } else {
      window.print();
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 15, 145));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 15, 70));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  return (
    <div className="resume-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0 no-print" onClick={onClose}></div>

      {/* Modal Dialog Container */}
      <div 
        className={`resume-modal-dialog relative w-full max-w-5xl max-h-[94vh] flex flex-col rounded-3xl transition-all border shadow-2xl z-10 overflow-hidden ${
          darkMode 
            ? 'bg-slate-900 border-slate-800 text-slate-100 shadow-indigo-500/10' 
            : 'bg-slate-50 border-slate-200 text-slate-900 shadow-xl'
        }`}
      >
        {/* Top Header & Document Toolbar */}
        <div className={`no-print px-4 sm:px-6 py-3.5 border-b flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 ${
          darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          {/* Document Title & Badge */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`font-bold text-sm sm:text-base leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Steven Harun Samba • Curriculum Vitae
                </h3>
                <span className="hidden md:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ATS Official (2 Pages)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Steven_Harun_Samba_CV_ATS.pdf (224 KB)
              </p>
            </div>
          </div>

          {/* Controls: Zoom, View Mode & Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {/* View Format Selector (Ultra-HD Pages vs Native PDF) */}
            <div className={`flex items-center p-0.5 rounded-xl border text-[11px] font-medium ${
              darkMode ? 'bg-slate-800/80 border-slate-700/80' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                type="button"
                onClick={() => setViewFormat('pages')}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                  viewFormat === 'pages'
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tampilkan dokumen per halaman resolusi Ultra-HD (dijamin tampil 100%)"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Halaman HD' : 'HD Pages'}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewFormat('pdf')}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                  viewFormat === 'pdf'
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tampilkan langsung dokumen PDF asli"
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'PDF Asli' : 'Native PDF'}</span>
              </button>
            </div>

            {/* Zoom Controls (Active in Pages view) */}
            {viewFormat === 'pages' && (
              <div className={`hidden md:flex items-center gap-1 p-1 rounded-xl border text-xs ${
                darkMode ? 'bg-slate-800/80 border-slate-700/80 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1 hover:bg-slate-700/40 rounded-lg transition"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-1 text-[11px] font-mono min-w-[42px] text-center">
                  {zoomLevel}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1 hover:bg-slate-700/40 rounded-lg transition"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {zoomLevel !== 100 && (
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="p-1 hover:bg-slate-700/40 rounded-lg transition text-indigo-400"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {/* Download PDF Button */}
            <a
              href="/Steven_Harun_Samba_CV_ATS.pdf"
              download="Steven_Harun_Samba_CV_ATS.pdf"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs inline-flex items-center gap-1.5 transition shadow-md shadow-emerald-600/25 active:scale-95"
              title="Download original uploaded ATS PDF file (224 KB)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Unduh PDF' : 'Download PDF'}</span>
            </a>

            {/* Open in New Tab Button */}
            <a
              href="/Steven_Harun_Samba_CV_ATS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
              title="Open full PDF in new browser tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Print Document Button */}
            <button
              onClick={handlePrint}
              type="button"
              className={`p-2 rounded-xl border transition ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
              title="Print document"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              type="button"
              className={`p-2 rounded-xl border transition ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Document Body Area */}
        <div className={`flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 transition-all ${
          darkMode ? 'bg-slate-950/80' : 'bg-slate-200/60'
        }`}>
          {viewFormat === 'pdf' ? (
            /* Native Browser PDF Embed (Official Document as PDF) */
            <div className="flex flex-col h-full space-y-3">
              <div className={`px-4 py-2.5 rounded-2xl border text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shrink-0 ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-semibold text-emerald-400">
                    {lang === 'id' ? 'Format Asli Dokumen PDF Resmi' : 'Official Native PDF Document'}
                  </span>
                  <span className="text-slate-400 hidden sm:inline">•</span>
                  <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">Steven_Harun_Samba_CV_ATS.pdf (224 KB)</span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-slate-400">
                    {lang === 'id' ? 'Tampilan tidak muncul?' : "PDF not rendering?"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setViewFormat('pages')}
                    className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2"
                  >
                    {lang === 'id' ? 'Beralih ke Halaman HD' : 'Switch to HD Pages'}
                  </button>
                </div>
              </div>

              <div className="w-full flex-1 min-h-[75vh] sm:min-h-[78vh] rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900">
                <iframe
                  src="/Steven_Harun_Samba_CV_ATS.pdf#toolbar=1&navpanes=0&view=FitH"
                  title="Steven Harun Samba ATS CV"
                  className="w-full h-full min-h-[75vh] sm:min-h-[78vh] border-none"
                />
              </div>
            </div>
          ) : (
            /* Ultra-HD Document Pages View (100% faithful, crisp, aligned and comfortable to read) */
            <div 
              className="space-y-8 flex flex-col items-center transition-all duration-200 ease-out"
              style={{
                width: `${zoomLevel}%`,
                maxWidth: zoomLevel <= 100 ? '820px' : '1100px',
                margin: '0 auto'
              }}
            >
              {/* Page 1 */}
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center justify-between w-full max-w-[800px] mb-2 px-1 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Page 1
                  </span>
                  <span>Education • Experience • Skills</span>
                </div>
                <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-300/80 transition-shadow hover:shadow-indigo-500/10">
                  <img 
                    src="/cv/page_1.png" 
                    alt="Steven Harun Samba CV - Page 1" 
                    className="w-full h-auto block select-none pointer-events-auto"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Page 2 */}
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center justify-between w-full max-w-[800px] mb-2 px-1 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Page 2
                  </span>
                  <span>Certifications • Projects • Publications</span>
                </div>
                <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-300/80 transition-shadow hover:shadow-indigo-500/10">
                  <img 
                    src="/cv/page_2.png" 
                    alt="Steven Harun Samba CV - Page 2" 
                    className="w-full h-auto block select-none pointer-events-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bottom Quick Download Banner */}
              <div className={`w-full max-w-[800px] p-4 rounded-2xl border text-center flex flex-col sm:flex-row items-center justify-between gap-3 ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-300 text-slate-700 shadow-sm'
              }`}>
                <div className="text-left text-xs">
                  <strong className="block text-sm text-emerald-400">
                    {lang === 'id' ? 'Butuh dokumen asli untuk HRD?' : 'Need the original PDF for recruitment?'}
                  </strong>
                  <span>Steven_Harun_Samba_CV_ATS.pdf • 224 KB • Verified ATS Format</span>
                </div>
                <a
                  href="/Steven_Harun_Samba_CV_ATS.pdf"
                  download="Steven_Harun_Samba_CV_ATS.pdf"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs inline-flex items-center gap-2 transition shadow-md shadow-emerald-600/25 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'id' ? 'Unduh PDF Asli' : 'Download Official PDF'}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
