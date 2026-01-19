import { CheckCircle2, XCircle } from 'lucide-react';

type ToastProps = {
  variant: 'success' | 'error';
  message: string;
  onClose?: () => void;
};

export default function Toast({ variant, message, onClose }: ToastProps) {
  const Icon = variant === 'success' ? CheckCircle2 : XCircle;
  const tone = variant === 'success' ? 'bg-[color:var(--color-accent-soft)]' : 'bg-white';

  return (
    <div
      className={`pointer-events-auto flex items-center gap-2 rounded-xl border border-[color:var(--color-border)] px-4 py-3 shadow-xl text-[color:var(--color-ink)] ${tone}`}
      role="status"
    >
      <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
      <p className="text-sm font-medium">{message}</p>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="ml-2 text-xs text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]"
          aria-label="Chiudi"
        >
          Chiudi
        </button>
      ) : null}
    </div>
  );
}
