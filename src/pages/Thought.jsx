import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { reframeThought } from "../lib/api.js";

export default function Thought() {
  const [text, setText] = useState("Je suis nul, je vais rater mon entretien demain");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const nav = useNavigate();

  async function onAnalyze() {
    setLoading(true);
    try {
      const r = await reframeThought(text);
      setResult(r);

      // petite “history” locale
      const prev = JSON.parse(localStorage.getItem("mindscape_history") || "[]");
      localStorage.setItem("mindscape_history", JSON.stringify([{ ...r, at: Date.now() }, ...prev].slice(0, 30)));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-4">
      <Card title="Thought Reframer" subtitle="Écris une pensée. On applique la CBT pour la rendre plus réaliste.">
        <textarea
          className="w-full min-h-[120px] rounded-3xl border border-zinc-900 bg-zinc-950/40 p-4 text-sm outline-none focus:border-zinc-700"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <Button onClick={onAnalyze} disabled={loading}>
            {loading ? "Analyse..." : "Analyser"}
          </Button>
          <Button variant="ghost" onClick={() => nav("/world")} disabled={!result}>
            Aller au monde (jeu)
          </Button>
          <Button variant="ghost" onClick={() => nav("/resources")} disabled={!result}>
            Voir ressources
          </Button>
        </div>
      </Card>

      {result && (
        <Card title="Résultat CBT" subtitle="Structure claire pour la suite (jeu + ressources).">
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
              <div className="text-xs text-zinc-400">Pensée</div>
              <div className="mt-1">{result.negative_thought}</div>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
              <div className="text-xs text-zinc-400">Biais</div>
              <div className="mt-1 font-medium">{result.bias}</div>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
              <div className="text-xs text-zinc-400">Question CBT</div>
              <div className="mt-1">{result.question}</div>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
              <div className="text-xs text-zinc-400">Pensée alternative</div>
              <div className="mt-1">{result.new_thought}</div>
            </div>
          </div>
          <div className="mt-3 text-sm text-zinc-400">{result.explanation}</div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => nav("/world", { state: { bias: result.bias, mood: result.mood } })}>
              Générer le monde (jeu)
            </Button>
            <Button variant="ghost" onClick={() => nav("/resources", { state: { bias: result.bias } })}>
              Ressources adaptées
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
