export default function Button({ children, variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium border transition active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-white"
      : variant === "ghost"
      ? "bg-transparent text-zinc-200 border-zinc-800 hover:bg-zinc-900/50"
      : "bg-zinc-900 text-zinc-100 border-zinc-800 hover:bg-zinc-800";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}
