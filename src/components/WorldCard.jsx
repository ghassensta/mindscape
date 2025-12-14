import Button from "./Button.jsx";

export default function WorldCard({ world, onAction }) {
  return (
    <div className="rounded-3xl border border-zinc-900 bg-gradient-to-b from-zinc-950 to-zinc-950/30 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-zinc-400">World</div>
          <div className="text-lg font-semibold">{world.world}</div>
          <div className="mt-2 text-sm text-zinc-300">{world.story}</div>
          <div className="mt-3 text-xs text-zinc-400">
            Monster: <span className="text-zinc-200">{world.monster.name}</span> • Bias:{" "}
            <span className="text-zinc-200">{world.monster.bias}</span>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 px-3 py-2 text-xs">
          Level <span className="text-zinc-100 font-semibold">{world.monster.level}</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {world.actions.map((a) => (
          <Button key={a.id} variant="secondary" onClick={() => onAction(a)}>
            {a.label}
            <span className="text-xs text-zinc-400">({a.cbt})</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
