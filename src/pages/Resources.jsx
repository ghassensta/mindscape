import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { getResources } from "../lib/api.js";

export default function Resources() {
  const loc = useLocation();
  const bias = loc.state?.bias || "auto-dévalorisation";
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getResources({ bias });
      setItems(res);
    })();
  }, [bias]);

  return (
    <div className="grid gap-4">
      <Card title="Resource Recommendation" subtitle={`Ressources adaptées au biais: ${bias}`}>
        <div className="flex flex-wrap gap-2">
          <Button variant="ghost" onClick={() => setItems((x) => [...x])}>Rafraîchir</Button>
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((r, idx) => (
          <div key={idx} className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-5">
            <div className="text-xs text-zinc-400">{r.type}</div>
            <div className="mt-1 text-base font-semibold">{r.title}</div>
            <div className="mt-2 text-sm text-zinc-300">{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
