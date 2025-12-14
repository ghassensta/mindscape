import React, { useState } from 'react'
import ProfileLayout from '../../../layouts/ProfileLayout'
import { Users, UserX, DoorOpen, MessageCircle, Coffee, Briefcase, AlertCircle, Play, RotateCcw, Heart, Brain } from 'lucide-react'

// ==================== GAME DATA ====================
const gameScenarios = {
  start: {
    id: 'start',
    title: 'Le Mixeur Réseau',
    description: 'Vous entrez dans une salle de conférence bondée pour un événement de réseautage professionnel. La musique joue doucement, des groupes de gens discutent animément.',
    incompleteInfo: 'Vous ne savez pas: qui sont ces personnes, si elles sont ouvertes à la conversation, ou ce qu\'elles font professionnellement.',
    mood: 50,
    choices: [
      {
        id: 'approach',
        text: 'Aborder un groupe près du bar',
        icon: <Users className="w-5 h-5" />,
        moodImpact: -10,
        nextScene: 'barGroup'
      },
      {
        id: 'observe',
        text: 'Observer depuis les coins',
        icon: <UserX className="w-5 h-5" />,
        moodImpact: 5,
        nextScene: 'observe'
      },
      {
        id: 'coffee',
        text: 'Aller chercher un café d\'abord',
        icon: <Coffee className="w-5 h-5" />,
        moodImpact: 0,
        nextScene: 'coffeeStation'
      }
    ]
  },
  
  barGroup: {
    id: 'barGroup',
    title: 'Près du Bar',
    description: 'Un groupe de trois personnes discute en riant. L\'une d\'elles vous regarde brièvement avec un sourire ambigu avant de retourner à sa conversation.',
    incompleteInfo: 'Était-ce une invitation à rejoindre, ou juste une reconnaissance polie? Le groupe semble bien établi.',
    mood: 40,
    choices: [
      {
        id: 'join',
        text: 'Rejoindre leur conversation',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -15,
        nextScene: 'joinConversation'
      },
      {
        id: 'wait',
        text: 'Attendre une ouverture naturelle',
        icon: <Heart className="w-5 h-5" />,
        moodImpact: -5,
        nextScene: 'waitOpening'
      },
      {
        id: 'retreat',
        text: 'Reculer poliment',
        icon: <UserX className="w-5 h-5" />,
        moodImpact: 10,
        nextScene: 'retreat'
      }
    ]
  },
  
  observe: {
    id: 'observe',
    title: 'Depuis les Coins',
    description: 'Vous observez la foule depuis un coin discret. Vous remarquez plusieurs personnes seules comme vous, et quelques groupes qui semblent plus ouverts.',
    incompleteInfo: 'Ces personnes seules cherchent-elles elles aussi à se connecter, ou préfèrent-elles rester seules?',
    mood: 55,
    choices: [
      {
        id: 'approachSolo',
        text: 'Approcher une autre personne seule',
        icon: <Users className="w-5 h-5" />,
        moodImpact: -8,
        nextScene: 'soloApproach'
      },
      {
        id: 'joinSmallGroup',
        text: 'Tenter de rejoindre un petit groupe',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -12,
        nextScene: 'smallGroup'
      },
      {
        id: 'leave',
        text: 'Quitter l\'événement',
        icon: <DoorOpen className="w-5 h-5" />,
        moodImpact: 20,
        nextScene: 'earlyExit'
      }
    ]
  },
  
  coffeeStation: {
    id: 'coffeeStation',
    title: 'Station de Café',
    description: 'À la station de café, une personne ajuste sa machine. Elle vous sourit chaleureusement. "Le café est excellent ici," dit-elle.',
    incompleteInfo: 'Est-ce juste de la politesse, ou une invitation à converser? Cette personne semble seule mais occupée.',
    mood: 50,
    choices: [
      {
        id: 'coffeeChat',
        text: 'Engager une conversation sur le café',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -5,
        nextScene: 'coffeeChat'
      },
      {
        id: 'quickThanks',
        text: 'Remercier rapidement et partir',
        icon: <Heart className="w-5 h-5" />,
        moodImpact: 0,
        nextScene: 'quickThanks'
      },
      {
        id: 'businessCard',
        text: 'Remettre votre carte professionnelle',
        icon: <Briefcase className="w-5 h-5" />,
        moodImpact: -10,
        nextScene: 'businessCard'
      }
    ]
  },
  
  joinConversation: {
    id: 'joinConversation',
    title: 'Conversation Engagée',
    description: 'Le groupe vous accueille chaleureusement. "Rejoignez-nous!" dit l\'une. Vous découvrez qu\'ils travaillent dans des domaines connexes au vôtre.',
    incompleteInfo: 'Sont-ils vraiment intéressés par votre travail, ou juste polis? Comment maintenir cette conversation?',
    mood: 35,
    choices: [
      {
        id: 'shareWork',
        text: 'Partager votre expertise',
        icon: <Briefcase className="w-5 h-5" />,
        moodImpact: -8,
        nextScene: 'successEnding'
      },
      {
        id: 'askQuestions',
        text: 'Poser des questions sur leur travail',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -5,
        nextScene: 'moderateEnding'
      },
      {
        id: 'exchangeCards',
        text: 'Proposer d\'échanger des cartes',
        icon: <Briefcase className="w-5 h-5" />,
        moodImpact: -3,
        nextScene: 'moderateEnding'
      }
    ]
  },
  
  soloApproach: {
    id: 'soloApproach',
    title: 'Approche Solitaire',
    description: 'Une personne seule regarde son téléphone, l\'air un peu perdue. Elle lève les yeux quand vous vous approchez.',
    incompleteInfo: 'Est-elle ouverte à la conversation ou juste en attente de quelqu\'un?',
    mood: 47,
    choices: [
      {
        id: 'introduce',
        text: 'Se présenter poliment',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -6,
        nextScene: 'moderateEnding'
      },
      {
        id: 'comment',
        text: 'Faire un commentaire sur l\'événement',
        icon: <Heart className="w-5 h-5" />,
        moodImpact: -4,
        nextScene: 'moderateEnding'
      },
      {
        id: 'excuse',
        text: 'S\'excuser et partir',
        icon: <UserX className="w-5 h-5" />,
        moodImpact: 8,
        nextScene: 'avoidanceEnding'
      }
    ]
  },
  
  smallGroup: {
    id: 'smallGroup',
    title: 'Petit Groupe',
    description: 'Un groupe de deux personnes discute calmement. Ils semblent plus accessibles que les grands groupes.',
    incompleteInfo: 'Sont-ils en conversation privée ou ouverts à une nouvelle personne?',
    mood: 43,
    choices: [
      {
        id: 'listen',
        text: 'Écouter d\'abord',
        icon: <Heart className="w-5 h-5" />,
        moodImpact: -2,
        nextScene: 'moderateEnding'
      },
      {
        id: 'interrupt',
        text: 'Interrompre poliment',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -10,
        nextScene: 'anxietyEnding'
      },
      {
        id: 'wait',
        text: 'Attendre une pause',
        icon: <Users className="w-5 h-5" />,
        moodImpact: -5,
        nextScene: 'moderateEnding'
      }
    ]
  },
  
  // Additional intermediate scenes
  waitOpening: {
    id: 'waitOpening',
    title: 'En Attente',
    description: 'Vous attendez patiemment. Le groupe semble apprécier votre présence respectueuse.',
    incompleteInfo: 'Est-ce le bon moment pour intervenir, ou devriez-vous continuer d\'attendre?',
    mood: 35,
    choices: [
      {
        id: 'speak',
        text: 'Prendre la parole maintenant',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -8,
        nextScene: 'moderateEnding'
      },
      {
        id: 'continue',
        text: 'Continuer d\'attendre',
        icon: <Heart className="w-5 h-5" />,
        moodImpact: 2,
        nextScene: 'avoidanceEnding'
      },
      {
        id: 'leave',
        text: 'Partir discrètement',
        icon: <UserX className="w-5 h-5" />,
        moodImpact: 15,
        nextScene: 'avoidanceEnding'
      }
    ]
  },
  
  retreat: {
    id: 'retreat',
    title: 'Repli Stratégique',
    description: 'Vous reculez poliment. Le groupe ne semble pas avoir remarqué votre hésitation.',
    incompleteInfo: 'Avez-vous manqué une opportunité, ou était-ce la bonne décision?',
    mood: 50,
    choices: [
      {
        id: 'tryAgain',
        text: 'Réessayer plus tard',
        icon: <Users className="w-5 h-5" />,
        moodImpact: -5,
        nextScene: 'moderateEnding'
      },
      {
        id: 'observe',
        text: 'Observer d\'autres groupes',
        icon: <UserX className="w-5 h-5" />,
        moodImpact: 3,
        nextScene: 'observe'
      },
      {
        id: 'leave',
        text: 'Quitter l\'événement',
        icon: <DoorOpen className="w-5 h-5" />,
        moodImpact: 20,
        nextScene: 'avoidanceEnding'
      }
    ]
  },
  
  coffeeChat: {
    id: 'coffeeChat',
    title: 'Conversation Café',
    description: 'Vous discutez du café. La personne semble détendue et ouverte à la conversation.',
    incompleteInfo: 'Cette conversation peut-elle évoluer vers quelque chose de professionnel?',
    mood: 45,
    choices: [
      {
        id: 'work',
        text: 'Transition vers le travail',
        icon: <Briefcase className="w-5 h-5" />,
        moodImpact: -7,
        nextScene: 'moderateEnding'
      },
      {
        id: 'personal',
        text: 'Continuer la conversation personnelle',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -3,
        nextScene: 'moderateEnding'
      },
      {
        id: 'card',
        text: 'Échanger des cartes',
        icon: <Briefcase className="w-5 h-5" />,
        moodImpact: -5,
        nextScene: 'moderateEnding'
      }
    ]
  },
  
  quickThanks: {
    id: 'quickThanks',
    title: 'Remerciement Rapide',
    description: 'Vous remerciez la personne et partez. Elle semble un peu surprise mais compréhensive.',
    incompleteInfo: 'Avez-vous manqué une opportunité de connexion?',
    mood: 50,
    choices: [
      {
        id: 'return',
        text: 'Revenir pour parler',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -8,
        nextScene: 'moderateEnding'
      },
      {
        id: 'explore',
        text: 'Explorer d\'autres options',
        icon: <Users className="w-5 h-5" />,
        moodImpact: -3,
        nextScene: 'observe'
      },
      {
        id: 'accept',
        text: 'Accepter cette interaction',
        icon: <Heart className="w-5 h-5" />,
        moodImpact: 5,
        nextScene: 'avoidanceEnding'
      }
    ]
  },
  
  businessCard: {
    id: 'businessCard',
    title: 'Carte Professionnelle',
    description: 'Vous tendez votre carte. La personne la prend avec intérêt et vous donne la sienne.',
    incompleteInfo: 'Est-ce le début d\'une relation professionnelle ou juste une formalité?',
    mood: 40,
    choices: [
      {
        id: 'followUp',
        text: 'Proposer de suivre',
        icon: <MessageCircle className="w-5 h-5" />,
        moodImpact: -6,
        nextScene: 'moderateEnding'
      },
      {
        id: 'thank',
        text: 'Remercier et partir',
        icon: <Heart className="w-5 h-5" />,
        moodImpact: 0,
        nextScene: 'moderateEnding'
      },
      {
        id: 'connect',
        text: 'Se connecter maintenant',
        icon: <Briefcase className="w-5 h-5" />,
        moodImpact: -4,
        nextScene: 'successEnding'
      }
    ]
  },
  
  // Endings
  successEnding: {
    id: 'successEnding',
    title: 'Connexion Réussie',
    description: 'Vous avez fait plusieurs contacts significatifs. Bien que nerveux au début, votre courage a été récompensé.',
    ending: true,
    mood: 75,
    reflection: 'L\'exposition graduelle à l\'anxiété sociale, bien que difficile au début, mène souvent à des résultats positifs. Votre courage d\'affronter l\'incertitude a créé des opportunités réelles.',
    path: ['approach', 'join', 'shareWork']
  },
  
  moderateEnding: {
    id: 'moderateEnding',
    title: 'Progression Modérée',
    description: 'Vous avez fait quelques contacts, mais l\'anxiété a limité vos interactions. C\'est un début.',
    ending: true,
    mood: 55,
    reflection: 'Même les petits pas vers l\'exposition sociale sont valables. Chaque interaction, même brève, renforce votre confiance pour la prochaine fois.',
    path: ['coffee', 'coffeeChat', 'askQuestions']
  },
  
  avoidanceEnding: {
    id: 'avoidanceEnding',
    title: 'Évitement et Regret',
    description: 'Vous avez quitté l\'événement tôt. Le soulagement immédiat est maintenant mêlé de regret.',
    ending: true,
    mood: 30,
    reflection: 'L\'évitement procure un soulagement à court terme mais renforce l\'anxiété à long terme. Chaque occasion manquée renforce la conviction que "je ne peux pas le faire".',
    path: ['observe', 'leave']
  },
  
  anxietyEnding: {
    id: 'anxietyEnding',
    title: 'Anxiété Accrue',
    description: 'Les tentatives d\'interaction ont augmenté votre stress. Vous vous sentez plus anxieux qu\'au début.',
    ending: true,
    mood: 25,
    reflection: 'Parfois, les tentatives mal chronométrées peuvent augmenter l\'anxiété. La pratique dans des environnements moins intenses peut aider à construire la confiance progressivement.',
    path: ['approach', 'join', 'retreat']
  },
  
  earlyExit: {
    id: 'earlyExit',
    title: 'Sortie Précoce',
    description: 'Vous avez décidé de quitter l\'événement rapidement. Le soulagement est palpable mais...',
    ending: true,
    mood: 35,
    reflection: 'Parfois, reconnaître ses limites est une forme de courage. Cependant, l\'évitement systématique peut empêcher la croissance et renforcer les peurs.',
    path: ['observe', 'leave']
  }
}

// ==================== VISUAL GAME COMPONENT ====================
const VisualGame = ({ mood, showTransition }) => {
  const getMoodColor = (value) => {
    if (value > 60) return 'from-green-400 to-green-600'
    if (value > 30) return 'from-yellow-400 to-orange-500'
    return 'from-red-400 to-red-600'
  }

  const getAvatarPosition = (value) => {
    const scale = 0.8 + (value / 100) * 0.4
    const rotation = (50 - value) * 0.3 // Tilt based on mood
    return { scale, rotation }
  }

  const avatarStyle = getAvatarPosition(mood)

  return (
    <div className={`bg-gradient-to-br ${getMoodColor(mood)} rounded-2xl p-8 mb-6 transition-all duration-1000 ${
      showTransition ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
    }`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-xl font-bold">Visualisation du Parcours</h3>
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-white font-bold">Humeur: {mood}%</span>
        </div>
      </div>
      
      {/* Path Visualization */}
      <div className="relative h-32 bg-white/10 rounded-lg mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Path */}
          <div className="w-full h-2 bg-white/30 rounded-full relative">
            <div 
              className="absolute top-0 left-0 h-full bg-white/80 rounded-full transition-all duration-1000"
              style={{ width: `${mood}%` }}
            />
            
            {/* Avatar */}
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000"
              style={{ 
                left: `${mood}%`,
                transform: `translate(-50%, -50%) scale(${avatarStyle.scale}) rotate(${avatarStyle.rotation}deg)`
              }}
            >
              <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-500" />
              </div>
            </div>
            
            {/* Decision Points */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/4">
              <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-3/4">
              <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mood Indicators */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="w-6 h-6 bg-green-400 rounded-full mx-auto mb-2" />
          <span className="text-white text-sm font-medium">Confiant</span>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="w-6 h-6 bg-yellow-400 rounded-full mx-auto mb-2" />
          <span className="text-white text-sm font-medium">Neutre</span>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="w-6 h-6 bg-red-400 rounded-full mx-auto mb-2" />
          <span className="text-white text-sm font-medium">Stressé</span>
        </div>
      </div>
    </div>
  )
}

// ==================== GAME MENU COMPONENT ====================
const GameMenu = ({ onStartGame }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Chemin du Courage</h1>
          <p className="text-lg text-gray-600 mb-2">
            Un simulateur de décisions avec information incomplète
          </p>
          <p className="text-sm text-gray-500">
            Navigatez à travers un événement de réseautage et gérez l'anxiété sociale
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
  )
}

// ==================== GAME SCENE COMPONENT ====================
const GameScene = ({ scenario, mood, onChoice, showTransition }) => {
  const getMoodColor = (value) => {
    if (value > 60) return 'text-green-600 bg-green-100'
    if (value > 30) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mood Meter */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-700">Humeur Actuelle</span>
          <div className={`px-4 py-2 rounded-full font-bold ${getMoodColor(mood)}`}>
            {mood}%
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div 
            className={`h-4 rounded-full transition-all duration-1000 ${
              mood > 60 ? 'bg-green-500' : mood > 30 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${mood}%` }}
          />
        </div>
      </div>

      {/* Visual Game */}
      <VisualGame mood={mood} showTransition={showTransition} />

      {/* Scene Content */}
      <div className={`bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500 ${
        showTransition ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
      }`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{scenario.title}</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {scenario.description}
          </p>
          
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Information Incomplète:</h3>
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
                    Impact humeur: {choice.moodImpact > 0 ? '+' : ''}{choice.moodImpact}%
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ==================== GAME ENDING COMPONENT ====================
const GameEnding = ({ scenario, choiceHistory, onReset }) => {
  const getMoodColor = (value) => {
    if (value > 60) return 'text-green-600 bg-green-100'
    if (value > 30) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-3xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{scenario.title}</h2>
          <p className="text-lg text-gray-700 mb-6">{scenario.description}</p>
          
          <div className={`inline-block px-6 py-3 rounded-full text-2xl font-bold mb-6 ${getMoodColor(scenario.mood)}`}>
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
              <span key={index} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
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
  )
}

// ==================== MAIN GAME COMPONENT ====================
export default function WorldPageView() {
  const [gameState, setGameState] = useState('menu')
  const [currentScene, setCurrentScene] = useState('start')
  const [mood, setMood] = useState(50)
  const [choiceHistory, setChoiceHistory] = useState([])
  const [showTransition, setShowTransition] = useState(false)

  const handleChoice = (choice) => {
    const newMood = Math.max(0, Math.min(100, mood + choice.moodImpact))
    setMood(newMood)
    setChoiceHistory([...choiceHistory, choice.id])
    
    if (choice.nextScene.includes('Ending')) {
      setTimeout(() => {
        setCurrentScene(choice.nextScene)
        setGameState('ended')
      }, 1000)
    } else {
      setShowTransition(true)
      setTimeout(() => {
        setCurrentScene(choice.nextScene)
        setShowTransition(false)
      }, 500)
    }
  }

  const startGame = () => {
    setGameState('playing')
    setCurrentScene('start')
    setMood(50)
    setChoiceHistory([])
  }

  const resetGame = () => {
    setGameState('menu')
    setCurrentScene('start')
    setMood(50)
    setChoiceHistory([])
    setShowTransition(false)
  }

  const currentScenario = gameScenarios[currentScene]

  return (
    <ProfileLayout>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto p-6">
          {gameState === 'menu' && <GameMenu onStartGame={startGame} />}
          
          {gameState === 'playing' && currentScenario && !currentScenario.ending && (
            <GameScene 
              scenario={currentScenario}
              mood={mood}
              onChoice={handleChoice}
              showTransition={showTransition}
            />
          )}
          
          {gameState === 'ended' && currentScenario && currentScenario.ending && (
            <GameEnding 
              scenario={currentScenario}
              choiceHistory={choiceHistory}
              onReset={resetGame}
            />
          )}
        </div>
      </div>
    </ProfileLayout>
  )
}
