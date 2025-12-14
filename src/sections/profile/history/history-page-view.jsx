import React, { useState } from 'react'
import ProfileLayout from '../../../layouts/ProfileLayout'
import { Clock, Calendar, TrendingUp, Heart, Brain, Star, Award, Target, Smile, MessageCircle, ChevronRight, Filter, Download } from 'lucide-react'

export default function HistoryPageView() {
  const [selectedPeriod, setSelectedPeriod] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  // Mock history data
  const thoughtHistory = [
    {
      id: 1,
      date: '2024-12-14',
      dayName: 'Aujourd\'hui',
      mood: 'anxious',
      originalThought: 'Je vais échouer à ma présentation demain',
      bias: 'Catastrophisme',
      alternativeThought: 'Je me prépare bien et je ferai de mon mieux',
      feeling: 'Anxieux, tendu',
      progress: 85,
      gratitude: 'Félicitations! Vous avez transformé une pensée catastrophique en une perspective réaliste.'
    },
    {
      id: 2,
      date: '2024-12-13',
      dayName: 'Hier',
      mood: 'sad',
      originalThought: 'Personne ne comprend ce que je ressens',
      bias: 'Personnalisation',
      alternativeThought: 'Je peux exprimer mes sentiments et trouver du soutien',
      feeling: 'Triste, seul',
      progress: 75,
      gratitude: 'Excellent travail! Vous avez reconnu votre besoin de connexion sociale.'
    },
    {
      id: 3,
      date: '2024-12-12',
      dayName: 'Jeudi',
      mood: 'neutral',
      originalThought: 'Je ne suis pas assez compétent pour ce travail',
      bias: 'Filtre mental',
      alternativeThought: 'J\'apprends et progresse chaque jour',
      feeling: 'Neutre, dubitatif',
      progress: 70,
      gratitude: 'Bravo! Vous avez développé une perspective de croissance.'
    },
    {
      id: 4,
      date: '2024-12-11',
      dayName: 'Mercredi',
      mood: 'happy',
      originalThought: 'J\'ai réussi à terminer mon projet à temps',
      bias: 'Aucun',
      alternativeThought: 'Je suis capable de gérer mes responsabilités',
      feeling: 'Heureux, fier',
      progress: 95,
      gratitude: 'Magnifique! Célébrez cette réussite et votre confiance en vous!'
    },
    {
      id: 5,
      date: '2024-12-10',
      dayName: 'Mardi',
      mood: 'anxious',
      originalThought: 'Tout le monde me juge quand je parle',
      bias: 'Lecture de pensée',
      alternativeThought: 'Je me concentre sur mon message et non sur les opinions',
      feeling: 'Anxieux, nerveux',
      progress: 80,
      gratitude: 'Super! Vous avez appris à vous concentrer sur l\'essentiel.'
    }
  ]

  const periods = [
    { id: 'all', label: 'Toute la période' },
    { id: 'week', label: 'Cette semaine' },
    { id: 'month', label: 'Ce mois' }
  ]

  const types = [
    { id: 'all', label: 'Tous les types' },
    { id: 'negative', label: 'Pensées négatives' },
    { id: 'positive', label: 'Pensées positives' }
  ]

  const getMoodIcon = (mood) => {
    const icons = {
      'happy': <Smile className="w-5 h-5 text-yellow-500" />,
      'sad': <Heart className="w-5 h-5 text-blue-500" />,
      'anxious': <Brain className="w-5 h-5 text-red-500" />,
      'neutral': <MessageCircle className="w-5 h-5 text-gray-500" />
    }
    return icons[mood] || <MessageCircle className="w-5 h-5 text-gray-500" />
  }

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'green'
    if (progress >= 60) return 'yellow'
    return 'red'
  }

  const getMotivationalMessage = () => {
    const messages = [
      "Chaque pensée transformée est une victoire vers votre bien-être.",
      "Votre progression est inspirante! Continuez comme ça.",
      "Vous développez une intelligence émotionnelle remarquable.",
      "Votre engagement envers votre santé mentale est admirable.",
      "Chaque jour, vous devenez plus fort et plus résilient."
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  const filteredHistory = thoughtHistory.filter(item => {
    // Mock filtering logic - in real app would use date comparison
    return true
  })

  const averageProgress = Math.round(
    thoughtHistory.reduce((acc, item) => acc + item.progress, 0) / thoughtHistory.length
  )

  return (
    <ProfileLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Historique Thérapeutique</h1>
              <p className="text-gray-600">Votre parcours de croissance et de transformation</p>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-800">Votre Progression</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">{averageProgress}%</span>
              </div>
              <p className="text-sm text-gray-600">Progression moyenne</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">{thoughtHistory.length}</span>
              </div>
              <p className="text-sm text-gray-600">Pensées analysées</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600">Jours consécutifs</p>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="bg-linear-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-3">
            <Star className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="text-lg font-semibold text-purple-800 mb-1">Message de motivation</h3>
              <p className="text-purple-700">{getMotivationalMessage()}</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-50">
              <label className="flex text-sm font-medium text-gray-700 mb-2 items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Période
              </label>
              <div className="flex flex-wrap gap-2">
                {periods.map((period) => (
                  <button
                    key={period.id}
                    onClick={() => setSelectedPeriod(period.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedPeriod === period.id
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {period.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 min-w-50">
              <label className="flex text-sm font-medium text-gray-700 mb-2 items-center">
                <Filter className="w-4 h-4 mr-2" />
                Type
              </label>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedType === type.id
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="space-y-4">
          {filteredHistory.map((item, index) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getMoodIcon(item.mood)}
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.dayName}</h4>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="text-right">
                    <span className={`text-sm font-medium text-${getProgressColor(item.progress)}-600`}>
                      {item.progress}% d'amélioration
                    </span>
                    <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className={`bg-${getProgressColor(item.progress)}-600 h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Brain className="w-4 h-4 mr-2 text-red-500" />
                    Pensée initiale
                  </h5>
                  <p className="text-sm text-gray-600 bg-red-50 p-3 rounded-lg">{item.originalThought}</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-green-500" />
                    Pensée alternative
                  </h5>
                  <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">{item.alternativeThought}</p>
                </div>
              </div>

              <div className="bg-linear-to-r from-yellow-50 to-orange-50 rounded-lg p-4 mb-4">
                <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-600" />
                  Message de gratitude
                </h5>
                <p className="text-sm text-gray-700">{item.gratitude}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Biais: {item.bias}</span>
                  <span>•</span>
                  <span> ressenti: {item.feeling}</span>
                </div>
                
                <button className="text-teal-600 hover:text-teal-700 flex items-center space-x-1 text-sm font-medium">
                  <span>Voir détails</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Export Options */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Exporter votre progression</h3>
              <p className="text-sm text-gray-600">Téléchargez votre historique pour le partager avec votre thérapeute</p>
            </div>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Exporter</span>
            </button>
          </div>
        </div>
      </div>
    </ProfileLayout>
  )
}
