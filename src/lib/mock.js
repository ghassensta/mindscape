export const mockReframe = (text) => {
  const lower = text.toLowerCase();
  let bias = "inconnu";
  if (lower.includes("toujours") || lower.includes("jamais")) bias = "généralisation";
  if (lower.includes("rater") || lower.includes("échouer")) bias = "catastrophisme";
  if (lower.includes("nul") || lower.includes("nulle") || lower.includes("fashl")) bias = "auto-dévalorisation";

  const newThought =
    bias === "catastrophisme"
      ? "Un mauvais résultat est possible, mais je peux me préparer et augmenter mes chances."
      : bias === "auto-dévalorisation"
      ? "Je ne suis pas “nul”. J’ai des points forts et je peux progresser."
      : "Je peux chercher une version plus réaliste et plus équilibrée de cette pensée.";

  return {
    negative_thought: text,
    bias,
    question:
      bias === "catastrophisme"
        ? "Quelle preuve j’ai que le pire va arriver ?"
        : bias === "auto-dévalorisation"
        ? "Est-ce que je parlerais comme ça à un ami ?"
        : "Quelles sont les autres explications possibles ?",
    new_thought: newThought,
    explanation: "On remplace une pensée extrême par une pensée plus réaliste et utile (CBT).",
    mood: lower.includes("stress") || lower.includes("peur") ? "peur" : "stress",
  };
};

export const mockWorld = (bias, mood) => {
  const world =
    bias === "auto-dévalorisation"
      ? "Salle des Jugements"
      : bias === "catastrophisme"
      ? "Couloir du Pire Scénario"
      : "Brouillard des Doutes";

  return {
    id: crypto.randomUUID(),
    world,
    mood,
    monster: {
      name: bias === "auto-dévalorisation" ? "Le Juge" : bias === "catastrophisme" ? "L’Oracle Noir" : "Le Brouillard",
      bias,
      level: 3,
    },
    story:
      world === "Salle des Jugements"
        ? "Des phrases dures sont gravées sur les murs. Une silhouette te fixe, comme si tout était déjà décidé."
        : world === "Couloir du Pire Scénario"
        ? "Chaque porte montre une catastrophe. Ton esprit court plus vite que la réalité."
        : "Tu vois à peine devant toi. Les doutes remplissent l’espace et rendent tout flou.",
    actions: [
      { id: "observe", label: "Observer la pensée", cbt: "identifier" },
      { id: "question", label: "Questionner le monstre", cbt: "socratique" },
      { id: "reframe", label: "Créer une pensée alternative", cbt: "restructuration" },
    ],
  };
};

export const mockResources = (bias) => {
  const common = [
    { type: "Exercice", title: "Respiration 4–4–6 (2 min)", desc: "Inspire 4s, bloque 4s, expire 6s. Répéter." },
    { type: "Mini-défi", title: "Une action de 5 minutes", desc: "Fais un petit pas concret (un mail, une liste, un plan)." },
  ];
  const extra =
    bias === "auto-dévalorisation"
      ? { type: "CBT", title: "Liste de preuves", desc: "Écris 3 preuves que tu as déjà réussi quelque chose." }
      : bias === "catastrophisme"
      ? { type: "CBT", title: "Plan B réaliste", desc: "Écris 1 plan B simple si ça se passe mal (sans dramatiser)." }
      : { type: "CBT", title: "Alternative neutre", desc: "Écris une version neutre de la situation, sans jugement." };

  return [...common, extra];
};
