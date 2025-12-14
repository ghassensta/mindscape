export default function ProgressPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 px-3 py-2">
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>{label}</span>
        <span className="text-zinc-200">{value}</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-zinc-900 overflow-hidden">
        <div className="h-full bg-zinc-200" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
      </div>
    </div>
  );
}
