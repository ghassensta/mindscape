import React, { useState, useEffect, useRef, useCallback } from "react";
import ProfileLayout from "../../../layouts/ProfileLayout";
import {
  Users,
  UserX,
  DoorOpen,
  MessageCircle,
  Coffee,
  Briefcase,
  AlertCircle,
  Play,
  RotateCcw,
  Heart,
  Brain,
} from "lucide-react";

// ==================== GAME DATA ====================
const gameScenarios = {
  start: {
    id: "start",
    title: "Le Mixeur Réseau",
    description:
      "Vous entrez dans une salle de conférence bondée pour un événement de réseautage professionnel. La musique joue doucement, des groupes de gens discutent animément.",
    incompleteInfo:
      "Vous ne savez pas: qui sont ces personnes, si elles sont ouvertes à la conversation, ou ce qu'elles font professionnellement.",
    mood: 50,
    choices: [
      {
        id: "approach",
        text: "Aborder un groupe près du bar",
        icon: <Users className="w-5 h-5" />,
        moodImpact: -10,
        nextScene: "barGroup",
      },
      {
        id: "observe",
        text: "Observer depuis les coins",
        icon: <UserX className="w-5 h-5" />,
        moodImpact: 5,
        nextScene: "observe",
      },
      {
        id: "coffee",
        text: "Aller chercher un café d'abord",
        icon: <Coffee className="w-5 h-5" />,
        moodImpact: 0,
        nextScene: "coffeeStation",
      },
    ],
  },

  barGroup: {
    id: "barGroup",
    title: "Près du Bar",
    description:
      "Un groupe de trois personnes discute en riant. L'une d'elles vous regarde brièvement avec un sourire ambigu avant de retourner à sa conversation.",
    incompleteInfo:
      "Était-ce une invitation à rejoindre, ou juste une reconnaissance polie? Le groupe semble bien établi.",
    mood: 40,
    choices: [
      {
        id: "join",
        text: "Rejoindre leur conversation",
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -15,
        nextScene: "joinConversation",
      },
      {
        id: "wait",
        text: "Attendre une ouverture naturelle",
        icon: <Heart className="w-5 h-5" />,
        moodImpact: -5,
        nextScene: "waitOpening",
      },
      {
        id: "retreat",
        text: "Reculer poliment",
        icon: <UserX className="w-5 h-5" />,
        moodImpact: 10,
        nextScene: "retreat",
      },
    ],
  },

  observe: {
    id: "observe",
    title: "Depuis les Coins",
    description:
      "Vous observez la foule depuis un coin discret. Vous remarquez plusieurs personnes seules comme vous, et quelques groupes qui semblent plus ouverts.",
    incompleteInfo:
      "Ces personnes seules cherchent-elles elles aussi à se connecter, ou préfèrent-elles rester seules?",
    mood: 55,
    choices: [
      {
        id: "approachSolo",
        text: "Approcher une autre personne seule",
        icon: <Users className="w-5 h-5" />,
        moodImpact: -8,
        nextScene: "soloApproach",
      },
      {
        id: "joinSmallGroup",
        text: "Tenter de rejoindre un petit groupe",
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -12,
        nextScene: "smallGroup",
      },
      {
        id: "leave",
        text: "Quitter l'événement",
        icon: <DoorOpen className="w-5 h-5" />,
        moodImpact: 20,
        nextScene: "earlyExit",
      },
    ],
  },

  coffeeStation: {
    id: "coffeeStation",
    title: "Station de Café",
    description:
      'À la station de café, une personne ajuste sa machine. Elle vous sourit chaleureusement. "Le café est excellent ici," dit-elle.',
    incompleteInfo:
      "Est-ce juste de la politesse, ou une invitation à converser? Cette personne semble seule mais occupée.",
    mood: 50,
    choices: [
      {
        id: "coffeeChat",
        text: "Engager une conversation sur le café",
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -5,
        nextScene: "coffeeChat",
      },
      {
        id: "quickThanks",
        text: "Remercier rapidement et partir",
        icon: <Heart className="w-5 h-5" />,
        moodImpact: 0,
        nextScene: "quickThanks",
      },
      {
        id: "businessCard",
        text: "Remettre votre carte professionnelle",
        icon: <Briefcase className="w-5 h-5" />,
        moodImpact: -10,
        nextScene: "businessCard",
      },
    ],
  },

  joinConversation: {
    id: "joinConversation",
    title: "Conversation Engagée",
    description:
      "Le groupe vous accueille chaleureusement. \"Rejoignez-nous!\" dit l'une. Vous découvrez qu'ils travaillent dans des domaines connexes au vôtre.",
    incompleteInfo:
      "Sont-ils vraiment intéressés par votre travail, ou juste polis? Comment maintenir cette conversation?",
    mood: 35,
    choices: [
      {
        id: "shareWork",
        text: "Partager votre expertise",
        icon: <Briefcase className="w-5 h-5" />,
        moodImpact: -8,
        nextScene: "successEnding",
      },
      {
        id: "askQuestions",
        text: "Poser des questions sur leur travail",
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -5,
        nextScene: "moderateEnding",
      },
      {
        id: "exchangeCards",
        text: "Proposer d'échanger des cartes",
        icon: <Briefcase className="w-5 h-5" />,
        moodImpact: -3,
        nextScene: "moderateEnding",
      },
    ],
  },

  // Endings
  successEnding: {
    id: "successEnding",
    title: "Connexion Réussie",
    description:
      "Vous avez fait plusieurs contacts significatifs. Bien que nerveux au début, votre courage a été récompensé.",
    ending: true,
    mood: 75,
    reflection:
      "L'exposition graduelle à l'anxiété sociale, bien que difficile au début, mène souvent à des résultats positifs. Votre courage d'affronter l'incertitude a créé des opportunités réelles.",
    path: ["approach", "join", "shareWork"],
  },

  moderateEnding: {
    id: "moderateEnding",
    title: "Progression Modérée",
    description:
      "Vous avez fait quelques contacts, mais l'anxiété a limité vos interactions. C'est un début.",
    ending: true,
    mood: 55,
    reflection:
      "Même les petits pas vers l'exposition sociale sont valables. Chaque interaction, même brève, renforce votre confiance pour la prochaine fois.",
    path: ["coffee", "coffeeChat", "askQuestions"],
  },

  avoidanceEnding: {
    id: "avoidanceEnding",
    title: "Évitement et Regret",
    description:
      "Vous avez quitté l'événement tôt. Le soulagement immédiat est maintenant mêlé de regret.",
    ending: true,
    mood: 30,
    reflection:
      "L'évitement procure un soulagement à court terme mais renforce l'anxiété à long terme. Chaque occasion manquée renforce la conviction que \"je ne peux pas le faire\".",
    path: ["observe", "leave"],
  },

  anxietyEnding: {
    id: "anxietyEnding",
    title: "Anxiété Accrue",
    description:
      "Les tentatives d'interaction ont augmenté votre stress. Vous vous sentez plus anxieux qu'au début.",
    ending: true,
    mood: 25,
    reflection:
      "Parfois, les tentatives mal chronométrées peuvent augmenter l'anxiété. La pratique dans des environnements moins intenses peut aider à construire la confiance progressivement.",
    path: ["approach", "join", "retreat"],
  },
};

// ==================== PHASER GAME COMPONENT ====================
const PhaserGame = ({ mood, onMoodUpdate }) => {
  const gameContainerRef = useRef(null);
  const phaserGameRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);

  const initPhaserGame = useCallback(() => {
    if (gameStarted || !gameContainerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/phaser@3.70.0/dist/phaser.min.js";
    script.onload = () => {
      const Phaser = window.Phaser;

      const gameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 400,
        parent: gameContainerRef.current,
        backgroundColor: "#87CEEB",
        scene: {
          create: function () {
            // Background gradient
            const graphics = this.add.graphics();
            graphics.fillGradientStyle({
              topLeft: 0x87ceeb,
              topRight: 0x98fb98,
              bottomLeft: 0x87ceeb,
              bottomRight: 0x98fb98,
              alpha: 0.8,
            });
            graphics.fillRect(0, 0, 800, 400);

            // Mood meter background
            const moodBarBg = this.add.graphics();
            moodBarBg.fillStyle(0x333333);
            moodBarBg.fillRect(50, 20, 700, 30);
            moodBarBg.setAlpha(0.3);

            // Mood meter
            this.moodBar = this.add.graphics();
            this.updateMoodBar(mood);

            // Mood text
            this.moodText = this.add
              .text(400, 35, `Humeur: ${mood}%`, {
                fontSize: "16px",
                fill: "#fff",
                align: "center",
              })
              .setOrigin(0.5, 0.5);

            // Avatar
            this.avatar = this.add.circle(400, 200, 25, 0x4169e1);
            this.updateAvatarPosture(mood);

            // Path
            const path = this.add.graphics();
            path.lineStyle(3, 0x8b4513);
            path.beginPath();
            path.moveTo(100, 300);
            path.quadraticCurveTo(400, 200, 700, 300);
            path.strokePath();

            // Decision points
            const decisionPoints = [
              { x: 250, y: 250 },
              { x: 400, y: 200 },
              { x: 550, y: 250 },
            ];

            decisionPoints.forEach((point) => {
              const circle = this.add.circle(point.x, point.y, 20, 0xffd700);
              circle.setInteractive();
              circle.on("pointerdown", () => {
                this.createParticles(point.x, point.y, 0x4caf50);
              });
            });

            // Title
            this.add
              .text(400, 80, "Le Chemin du Courage", {
                fontSize: "24px",
                fill: "#2C3E50",
                fontStyle: "bold",
              })
              .setOrigin(0.5, 0.5);

            // Instructions
            this.add
              .text(400, 360, "Cliquez sur les points dorés pour interagir", {
                fontSize: "14px",
                fill: "#555",
                align: "center",
              })
              .setOrigin(0.5, 0.5);
          },

          updateMoodBar: function (moodLevel) {
            if (!this.moodBar) return;
            this.moodBar.clear();
            const width = (moodLevel / 100) * 700;
            const color =
              moodLevel > 60 ? 0x4caf50 : moodLevel > 30 ? 0xff9800 : 0xf44336;
            this.moodBar.fillStyle(color);
            this.moodBar.fillRect(50, 20, width, 30);

            if (this.moodText) {
              this.moodText.setText(`Humeur: ${moodLevel}%`);
            }
          },

          updateAvatarPosture: function (moodLevel) {
            if (!this.avatar) return;
            const color =
              moodLevel > 60 ? 0x4caf50 : moodLevel > 30 ? 0xff9800 : 0xf44336;
            this.avatar.setFillStyle(color);

            const scale = 0.8 + (moodLevel / 100) * 0.4;
            this.avatar.setScale(scale);
          },

          createParticles: function (x, y, color) {
            const particles = this.add.particles(x, y);
            particles.createEmitter({
              color: color,
              scale: { start: 0.1, end: 0 },
              speed: { min: 50, max: 100 },
              lifespan: 1000,
              quantity: 10,
            });
          },
        },
      };

      phaserGameRef.current = new Phaser.Game(gameConfig);
      setGameStarted(true);
    };

    document.head.appendChild(script);
  }, [gameStarted, mood]);

  useEffect(() => {
    initPhaserGame();

    return () => {
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy(true);
      }
    };
  }, []);

  useEffect(() => {
    if (
      gameStarted &&
      phaserGameRef.current &&
      phaserGameRef.current.scene &&
      phaserGameRef.current.scene.scenes &&
      phaserGameRef.current.scene.scenes[0]
    ) {
      const scene = phaserGameRef.current.scene.scenes[0];
      if (scene && typeof scene.updateMoodBar === "function") {
        scene.updateMoodBar(mood);
        scene.updateAvatarPosture(mood);
      }
    }
  }, [mood, gameStarted]);

  return (
    <div className="flex justify-center mb-6">
      <div
        ref={gameContainerRef}
        className="border-4 border-gray-300 rounded-2xl shadow-2xl"
      />
    </div>
  );
};

// ==================== GAME MENU COMPONENT ====================
const GameMenu = ({ onStartGame }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Chemin du Courage
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Un simulateur de décisions avec information incomplète
          </p>
          <p className="text-sm text-gray-500">
            Navigatez à travers un événement de réseautage et gérez l'anxiété
            sociale
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-blue-800 mb-3">Comment jouer:</h3>
          <ul className="text-left text-blue-700 space-y-2">
            <li>• Lisez chaque situation attentivement</li>
            <li>• Les informations sont souvent incomplètes ou ambiguës</li>
            <li>• Vos choix affectent votre humeur et votre parcours</li>
            <li>• Il n\'y a pas de "bonne" réponse parfaite</li>
          </ul>
        </div>

        <button
          onClick={onStartGame}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center space-x-3 mx-auto"
        >
          <Play className="w-6 h-6" />
          <span className="text-lg font-semibold">Commencer l\'aventure</span>
        </button>
      </div>
    </div>
  );
};

// ==================== GAME SCENE COMPONENT ====================
const GameScene = ({ scenario, mood, onChoice, showTransition }) => {
  const getMoodColor = (value) => {
    if (value > 60) return "text-green-600 bg-green-100";
    if (value > 30) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mood Meter */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-700">
            Humeur Actuelle
          </span>
          <div
            className={`px-4 py-2 rounded-full font-bold ${getMoodColor(mood)}`}
          >
            {mood}%
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div
            className={`h-4 rounded-full transition-all duration-1000 ${
              mood > 60
                ? "bg-green-500"
                : mood > 30
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{ width: `${mood}%` }}
          />
        </div>
      </div>

      {/* Phaser Game */}
      <PhaserGame mood={mood} />

      {/* Scene Content */}
      <div
        className={`bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500 ${
          showTransition
            ? "opacity-0 transform scale-95"
            : "opacity-100 transform scale-100"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {scenario.title}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {scenario.description}
          </p>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Information Incomplète:
                </h3>
                <p className="text-yellow-700">{scenario.incompleteInfo}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {scenario.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => onChoice(choice)}
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl hover:from-teal-50 hover:to-blue-50 hover:border-teal-300 transition-all transform hover:scale-102 text-left group"
              >
                <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                  {choice.icon}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium text-gray-800 group-hover:text-teal-700 transition-colors">
                    {choice.text}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Impact humeur: {choice.moodImpact > 0 ? "+" : ""}
                    {choice.moodImpact}%
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== GAME ENDING COMPONENT ====================
const GameEnding = ({ scenario, choiceHistory, onReset }) => {
  const getMoodColor = (value) => {
    if (value > 60) return "text-green-600 bg-green-100";
    if (value > 30) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-3xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {scenario.title}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{scenario.description}</p>

          <div
            className={`inline-block px-6 py-3 rounded-full text-2xl font-bold mb-6 ${getMoodColor(
              scenario.mood
            )}`}
          >
            Humeur Finale: {scenario.mood}%
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
            <Brain className="w-5 h-5 mr-2" />
            Réflexion TCC:
          </h3>
          <p className="text-blue-700 leading-relaxed">{scenario.reflection}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-800 mb-3">Votre Parcours:</h3>
          <div className="flex flex-wrap gap-2">
            {choiceHistory.map((choice, index) => (
              <span
                key={index}
                className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
              >
                Étape {index + 1}: {choice}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onReset}
            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center space-x-3"
          >
            <RotateCcw className="w-6 h-6" />
            <span className="text-lg font-semibold">Rejouer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN GAME COMPONENT ====================
export default function WorldPageView() {
  const [gameState, setGameState] = useState("menu");
  const [currentScene, setCurrentScene] = useState("start");
  const [mood, setMood] = useState(50);
  const [choiceHistory, setChoiceHistory] = useState([]);
  const [showTransition, setShowTransition] = useState(false);

  const handleChoice = (choice) => {
    const newMood = Math.max(0, Math.min(100, mood + choice.moodImpact));
    setMood(newMood);
    setChoiceHistory([...choiceHistory, choice.id]);

    if (choice.nextScene.includes("Ending")) {
      setTimeout(() => {
        setCurrentScene(choice.nextScene);
        setGameState("ended");
      }, 1000);
    } else {
      setShowTransition(true);
      setTimeout(() => {
        setCurrentScene(choice.nextScene);
        setShowTransition(false);
      }, 500);
    }
  };

  const startGame = () => {
    setGameState("playing");
    setCurrentScene("start");
    setMood(50);
    setChoiceHistory([]);
  };

  const resetGame = () => {
    setGameState("menu");
    setCurrentScene("start");
    setMood(50);
    setChoiceHistory([]);
    setShowTransition(false);
  };

  const currentScenario = gameScenarios[currentScene];

  return (
    <ProfileLayout>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto p-6">
          {gameState === "menu" && <GameMenu onStartGame={startGame} />}

          {gameState === "playing" &&
            currentScenario &&
            !currentScenario.ending && (
              <GameScene
                scenario={currentScenario}
                mood={mood}
                onChoice={handleChoice}
                showTransition={showTransition}
              />
            )}

          {gameState === "ended" &&
            currentScenario &&
            currentScenario.ending && (
              <GameEnding
                scenario={currentScenario}
                choiceHistory={choiceHistory}
                onReset={resetGame}
              />
            )}
        </div>
      </div>
    </ProfileLayout>
  );
}
