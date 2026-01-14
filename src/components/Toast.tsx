import { CheckCircle2, XCircle } from 'lucide-react';

type ToastProps = {
  variant: 'success' | 'error';
  message: string;
  onClose?: () => void;
};

export default function Toast({ variant, message, onClose }: ToastProps) {
  const Icon = variant === 'success' ? CheckCircle2 : XCircle;
  const border = variant === 'success' ? 'border-emerald-200' : 'border-rose-200';
  const text = variant === 'success' ? 'text-emerald-700' : 'text-rose-700';
  const icon = variant === 'success' ? 'text-emerald-500' : 'text-rose-500';

  return (
    <div
      className={`pointer-events-auto flex items-center gap-2 rounded-xl border bg-white px-4 py-3 shadow-xl ${border} ${text}`}
      role="status"
    >
      <Icon className={`h-5 w-5 ${icon}`} />
      <p className="text-sm font-medium">{message}</p>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="ml-2 text-xs text-black/50 hover:text-black/70"
          aria-label="Chiudi"
        >
          Chiudi
        </button>
      ) : null}
    </div>
  );
}
