import React, { useState } from 'react'
import ProfileLayout from '../../../layouts/ProfileLayout'
import { BookOpen, Heart, Brain, Activity, Lightbulb, Target, Smile, Cloud, Sun, Meh, Filter, Search, Clock, Star, ChevronRight } from 'lucide-react'

export default function RessourcesPageView() {
  const [selectedMood, setSelectedMood] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const moods = [
    { id: 'all', label: 'Tous', icon: Heart, color: 'gray' },
    { id: 'happy', label: 'Heureux', icon: Sun, color: 'yellow' },
    { id: 'neutral', label: 'Neutre', icon: Meh, color: 'gray' },
    { id: 'sad', label: 'Triste', icon: Cloud, color: 'blue' },
    { id: 'anxious', label: 'Anxieux', icon: Heart, color: 'red' }
  ]

  const categories = [
    { id: 'all', label: 'Toutes catégories' },
    { id: 'tips', label: 'Conseils' },
    { id: 'exercises', label: 'Exercices' },
    { id: 'activities', label: 'Activités' },
    { id: 'meditation', label: 'Méditation' },
    { id: 'breathing', label: 'Respiration' }
  ]

  // Mock resources data
  const resources = [
    {
      id: 1,
      title: "Techniques de respiration profonde",
      category: "breathing",
      mood: ["anxious", "sad"],
      type: "exercice",
      duration: "5 min",
      difficulty: "Débutant",
      description: "Apprenez des techniques de respiration pour calmer votre esprit rapidement.",
      icon: Activity,
      color: "blue"
    },
    {
      id: 2,
      title: "Journal de gratitude",
      category: "activities",
      mood: ["sad", "neutral"],
      type: "activité",
      duration: "10 min",
      difficulty: "Facile",
      description: "Pratiquez la gratitude pour améliorer votre humeur et perspective.",
      icon: Heart,
      color: "green"
    },
    {
      id: 3,
      title: "Méditation guidée pour débutants",
      category: "meditation",
      mood: ["anxious", "neutral"],
      type: "méditation",
      duration: "15 min",
      difficulty: "Débutant",
      description: "Une méditation douce pour vous initier à la pleine conscience.",
      icon: Brain,
      color: "purple"
    },
    {
      id: 4,
      title: "Exercice de restructuration cognitive",
      category: "exercises",
      mood: ["sad", "anxious"],
      type: "exercice",
      duration: "20 min",
      difficulty: "Intermédiaire",
      description: "Identifiez et transformez les pensées négatives en pensées positives.",
      icon: Lightbulb,
      color: "yellow"
    },
    {
      id: 5,
      title: "Planification d'objectifs hebdomadaires",
      category: "activities",
      mood: ["neutral", "happy"],
      type: "activité",
      duration: "30 min",
      difficulty: "Facile",
      description: "Définissez des objectifs réalistes pour vous motiver et progresser.",
      icon: Target,
      color: "orange"
    },
    {
      id: 6,
      title: "Conseils pour mieux dormir",
      category: "tips",
      mood: ["all"],
      type: "conseil",
      duration: "Lecture",
      difficulty: "Facile",
      description: "Améliorez la qualité de votre sommeil avec ces conseils pratiques.",
      icon: Star,
      color: "indigo"
    }
  ]

  const filteredResources = resources.filter(resource => {
    const moodMatch = selectedMood === 'all' || resource.mood.includes(selectedMood)
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory
    const searchMatch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return moodMatch && categoryMatch && searchMatch
  })

  const getTypeColor = (type) => {
    const colors = {
      'exercice': 'blue',
      'activité': 'green',
      'méditation': 'purple',
      'conseil': 'orange'
    }
    return colors[type] || 'gray'
  }

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Débutant': 'green',
      'Facile': 'blue',
      'Intermédiaire': 'yellow',
      'Avancé': 'red'
    }
    return colors[difficulty] || 'gray'
  }

  return (
    <ProfileLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Ressources Thérapeutiques</h1>
              <p className="text-gray-600">Des outils personnalisés pour votre bien-être mental</p>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une ressource..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Mood Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Filtrer par humeur
              </h3>
              <div className="flex flex-wrap gap-2">
                {moods.map((mood) => {
                  const Icon = mood.icon
                  const isActive = selectedMood === mood.id
                  
                  return (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? `bg-${mood.color}-100 text-${mood.color}-700 border-2 border-${mood.color}-300` 
                          : 'bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{mood.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Catégorie
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-sm font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const Icon = resource.icon
            
            return (
              <div key={resource.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-${resource.color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${resource.color}-600`} />
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{resource.duration}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 bg-${getTypeColor(resource.type)}-100 text-${getTypeColor(resource.type)}-700 text-xs rounded-full`}>
                      {resource.type}
                    </span>
                    <span className={`px-2 py-1 bg-${getDifficultyColor(resource.difficulty)}-100 text-${getDifficultyColor(resource.difficulty)}-700 text-xs rounded-full`}>
                      {resource.difficulty}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <span className="text-sm font-medium">Commencer</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Aucune ressource trouvée</h3>
            <p className="text-gray-600">Essayez de modifier vos filtres ou votre recherche</p>
          </div>
        )}
      </div>
    </ProfileLayout>
  )
}
