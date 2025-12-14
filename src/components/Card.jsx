export default function Card({ title, subtitle, children, right }) {
  return (
    <div className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      {(title || subtitle || right) && (
        <div className="flex items-start justify-between gap-4">
          <div>
            {title && <h2 className="text-base font-semibold">{title}</h2>}
            {subtitle && <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>}
          </div>
          {right}
        </div>
      )}
      <div className={title || subtitle || right ? "mt-4" : ""}>{children}</div>
    </div>
  );
}
