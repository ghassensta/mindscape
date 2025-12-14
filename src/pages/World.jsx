import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import ProgressPill from "../components/ProgressPill.jsx";
import WorldCard from "../components/WorldCard.jsx";
import { generateWorld } from "../lib/api.js";

export default function World() {
  const loc = useLocation();
  const nav = useNavigate();

  const bias = loc.state?.bias || "auto-dévalorisation";
  const mood = loc.state?.mood || "peur";

  const [world, setWorld] = useState(null);
  const [stats, setStats] = useState({ calm: 40, clarity: 35, courage: 30 });
  const [log, setLog] = useState([]);

  async function load() {
    const w = await generateWorld({ bias, mood });
    setWorld(w);
    setLog([]);
    setStats({ calm: 40, clarity: 35, courage: 30 });
  }

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [bias, mood]);

  const ambient = useMemo(() => {
    const level = world?.monster?.level ?? 3;
    // juste un petit “effet” visuel avec un overlay
    return Math.max(0, Math.min(60, level * 15));
  }, [world]);

  function onAction(a) {
    // effets simples (à remplacer plus tard par backend)
    let delta = { calm: 0, clarity: 0, courage: 0 };
    if (a.id === "observe") delta = { calm: +5, clarity: +10, courage: +0 };
    if (a.id === "question") delta = { calm: +10, clarity: +10, courage: +5 };
    if (a.id === "reframe") delta = { calm: +15, clarity: +15, courage: +10 };

    setStats((s) => ({
      calm: Math.min(100, s.calm + delta.calm),
      clarity: Math.min(100, s.clarity + delta.clarity),
      courage: Math.min(100, s.courage + delta.courage),
    }));

    setWorld((w) => ({
      ...w,
      monster: { ...w.monster, level: Math.max(0, w.monster.level - 1) },
    }));

    setLog((l) => [
      { at: Date.now(), action: a.label, note: a.cbt },
      ...l,
    ]);
  }

  return (
    <div className="grid gap-4">
      <Card
        title="Mind World (Jeu)"
        subtitle="La pensée devient un monde. Tes actions CBT éclaircissent l’espace."
        right={
          <Button variant="ghost" onClick={load}>
            Régénérer
          </Button>
        }
      >
        <div className="grid sm:grid-cols-3 gap-3">
          <ProgressPill label="Calm" value={stats.calm} />
          <ProgressPill label="Clarity" value={stats.clarity} />
          <ProgressPill label="Courage" value={stats.courage} />
        </div>
      </Card>

      {world && (
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 40%),
                 radial-gradient(circle at 70% 60%, rgba(255,255,255,0.06), transparent 45%),
                 linear-gradient(to bottom, rgba(0,0,0,${ambient / 100}), rgba(0,0,0,0))`,
            }}
          />
          <WorldCard world={world} onAction={onAction} />
        </div>
      )}

      <Card title="Journal de la session" subtitle="Petites traces des actions (pour la progression).">
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => nav("/resources", { state: { bias } })}>
            Voir ressources adaptées
          </Button>
          <Button variant="ghost" onClick={() => nav("/thought")}>
            Nouvelle pensée
          </Button>
        </div>

        <div className="mt-4 space-y-2">
          {log.length === 0 ? (
            <div className="text-sm text-zinc-400">Aucune action encore. Clique sur une action CBT.</div>
          ) : (
            log.map((e) => (
              <div key={e.at} className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-3 text-sm">
                <div className="text-zinc-200">{e.action}</div>
                <div className="text-xs text-zinc-400">{e.note}</div>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
