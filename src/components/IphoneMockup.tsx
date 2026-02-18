type IphoneMockupProps = {
  label: string;
  variant?: 'agenda' | 'payments' | 'requests';
  className?: string;
};

function PlaceholderContent({ variant }: { variant: IphoneMockupProps['variant'] }) {
  if (variant === 'payments') {
    return (
      <div className="space-y-2">
        <div className="rounded-xl bg-[color:var(--color-accent-soft)] p-3">
          <div className="h-3 w-24 rounded bg-white/80" />
          <div className="mt-2 h-2 w-16 rounded bg-white/70" />
        </div>
        <div className="rounded-xl border border-[color:var(--color-border)] bg-white/80 p-3">
          <div className="h-3 w-20 rounded bg-[color:var(--color-sky)]" />
          <div className="mt-2 h-2 w-28 rounded bg-[color:var(--color-sand)]" />
        </div>
        <div className="rounded-xl border border-[color:var(--color-border)] bg-white/80 p-3">
          <div className="h-3 w-16 rounded bg-[color:var(--color-sky)]" />
          <div className="mt-2 h-2 w-24 rounded bg-[color:var(--color-sand)]" />
        </div>
      </div>
    );
  }

  if (variant === 'requests') {
    return (
      <div className="space-y-2">
        <div className="rounded-xl bg-[color:var(--color-accent-soft)] p-3">
          <div className="h-3 w-24 rounded bg-white/80" />
          <div className="mt-2 h-2 w-20 rounded bg-white/70" />
        </div>
        <div className="rounded-xl border border-[color:var(--color-border)] bg-white/80 p-3">
          <div className="h-3 w-28 rounded bg-[color:var(--color-sky)]" />
          <div className="mt-2 h-2 w-16 rounded bg-[color:var(--color-sand)]" />
        </div>
        <div className="rounded-xl border border-[color:var(--color-border)] bg-white/80 p-3">
          <div className="h-3 w-24 rounded bg-[color:var(--color-sky)]" />
          <div className="mt-2 h-2 w-20 rounded bg-[color:var(--color-sand)]" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="rounded-xl bg-[color:var(--color-accent-soft)] p-3">
        <div className="h-3 w-20 rounded bg-white/80" />
        <div className="mt-2 h-2 w-24 rounded bg-white/70" />
      </div>
      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/80 p-3">
        <div className="h-3 w-24 rounded bg-[color:var(--color-sky)]" />
        <div className="mt-2 h-2 w-16 rounded bg-[color:var(--color-sand)]" />
      </div>
      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/80 p-3">
        <div className="h-3 w-28 rounded bg-[color:var(--color-sky)]" />
        <div className="mt-2 h-2 w-20 rounded bg-[color:var(--color-sand)]" />
      </div>
      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/80 p-3">
        <div className="h-3 w-16 rounded bg-[color:var(--color-sky)]" />
        <div className="mt-2 h-2 w-24 rounded bg-[color:var(--color-sand)]" />
      </div>
    </div>
  );
}

export default function IphoneMockup({ label, variant = 'agenda', className }: IphoneMockupProps) {
  return (
    <div className={className}>
      <div className="iphone-shell">
        <div className="iphone-notch" />
        <div className="iphone-screen">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)]">
              {label}
            </span>
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
          </div>
          <PlaceholderContent variant={variant} />
        </div>
      </div>
    </div>
  );
}
