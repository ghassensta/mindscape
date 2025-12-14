import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Home() {
  return (
    <div className="grid gap-4">
      <Card
        title="Bienvenue dans MindScape"
        subtitle="Un voyage créatif pour transformer les pensées négatives avec des techniques CBT."
        right={
          <Link to="/thought">
            <Button>Commencer</Button>
          </Link>
        }
      >
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
            <div className="text-sm font-semibold">1) Thought Reframer</div>
            <div className="mt-1 text-sm text-zinc-400">Tu écris une pensée → on l’analyse CBT.</div>
          </div>
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
            <div className="text-sm font-semibold">2) Mind World Game</div>
            <div className="mt-1 text-sm text-zinc-400">La pensée devient un monde + un “monstre”.</div>
          </div>
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
            <div className="text-sm font-semibold">3) Resources</div>
            <div className="mt-1 text-sm text-zinc-400">Des ressources personnalisées selon ton état.</div>
          </div>
        </div>
      </Card>

      <Card title="Démo rapide" subtitle="Essaye avec : “Je suis nul, je vais rater mon entretien.”">
        <div className="flex flex-wrap gap-2">
          <Link to="/thought"><Button variant="secondary">Aller à Thought</Button></Link>
          <Link to="/world"><Button variant="ghost">Voir World</Button></Link>
          <Link to="/resources"><Button variant="ghost">Voir Resources</Button></Link>
        </div>
      </Card>
    </div>
  );
}
