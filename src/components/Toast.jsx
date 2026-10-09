import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, visible, onClose }) {
  if (!message && !visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-obsidian-850/95 border border-indigo-500/40 text-white text-xs font-semibold shadow-2xl shadow-indigo-500/20 backdrop-blur-xl">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
