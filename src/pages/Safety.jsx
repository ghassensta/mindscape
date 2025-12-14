import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Safety() {
	return (
		<div className="grid gap-4">
			<Card
				title="Sécurité & Ressources"
				subtitle="Informations importantes si tu te sens en danger ou mal." 
			>
				<div className="text-sm text-zinc-300">
					<p>
						MindScape n'est pas un service médical ni une ligne d'urgence. Si tu te sens en danger ou
						que tu penses te faire du mal, contacte immédiatement les services d'urgence de ton pays
						ou une ligne d'assistance locale.
					</p>

					<div className="mt-4 space-y-3">
						<div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
							<div className="text-sm font-semibold">France — Numéro d'urgence</div>
							<div className="text-sm text-zinc-400">Appelez le 15 (SAMU) ou le 112.</div>
						</div>

						<div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
							<div className="text-sm font-semibold">Suicide/Soutien émotionnel</div>
							<div className="text-sm text-zinc-400">Contactez votre ligne d'écoute nationale ou un proche de confiance.</div>
						</div>

						<div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
							<div className="text-sm font-semibold">Ressources en ligne</div>
							<div className="text-sm text-zinc-400">Consultez des organisations reconnues pour des conseils et des guides.</div>
						</div>
					</div>

					<div className="mt-4 flex flex-wrap gap-2">
						<a href="https://www.sos-suicide.org" target="_blank" rel="noreferrer">
							<Button variant="secondary">Soutien (externe)</Button>
						</a>
						<a href="https://www.who.int/" target="_blank" rel="noreferrer">
							<Button variant="ghost">OMS</Button>
						</a>
					</div>
				</div>
			</Card>

			<Card title="Conseils rapides" subtitle="Petits gestes à appliquer tout de suite">
				<ul className="list-disc pl-5 text-sm text-zinc-300">
					<li>Parle à quelqu'un en qui tu as confiance.</li>
					<li>Sors dans un endroit sûr et bien éclairé si possible.</li>
					<li>Si les pensées persistent, contacte un professionnel de santé.</li>
				</ul>
			</Card>
		</div>
	);
}

