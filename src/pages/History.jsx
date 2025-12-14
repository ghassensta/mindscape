import { useMemo, useState } from "react";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function History() {
  const [refresh, setRefresh] = useState(0);

  const items = useMemo(() => {
    const raw = localStorage.getItem("mindscape_history");
    const arr = raw ? JSON.parse(raw) : [];
    return arr;
  }, [refresh]);

  function clear() {
    localStorage.removeItem("mindscape_history");
    setRefresh((x) => x + 1);
  }

  return (
    <div className="grid gap-4">
      <Card
        title="Historique"
        subtitle="Les dernières pensées analysées (stockées localement)."
        right={<Button variant="ghost" onClick={clear}>Effacer</Button>}
      >
        <div className="text-sm text-zinc-400">
          Total: <span className="text-zinc-200">{items.length}</span>
        </div>
      </Card>

      <div className="space-y-3">
        {items.length === 0 ? (
          <Card title="Aucun historique" subtitle="Va sur Thought et analyse une pensée." />
        ) : (
          items.map((it, i) => (
            <div key={i} className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-zinc-400">
                  {new Date(it.at).toLocaleString()}
                </div>
                <div className="text-xs px-2 py-1 rounded-full border border-zinc-800 bg-zinc-900/40">
                  {it.bias}
                </div>
              </div>
              <div className="mt-2 text-sm text-zinc-300">
                <span className="text-zinc-400">Pensée:</span> {it.negative_thought}
              </div>
              <div className="mt-2 text-sm">
                <span className="text-zinc-400">Alternative:</span> {it.new_thought}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
