import React, { useState } from 'react'
import ProfileLayout from '../../../layouts/ProfileLayout'
import { Smile, Meh, Frown, Angry, Heart, Sun, Cloud, CloudRain, Star, Calendar } from 'lucide-react'

export default function ProfileHomeView() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [todayMood, setTodayMood] = useState(null)

  const moods = [
    { id: 'very-happy', icon: Smile, label: 'Très Heureux', color: 'green', bgColor: 'bg-green-100', textColor: 'text-green-600', hoverColor: 'hover:bg-green-200' },
    { id: 'happy', icon: Sun, label: 'Heureux', color: 'yellow', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600', hoverColor: 'hover:bg-yellow-200' },
    { id: 'neutral', icon: Meh, label: 'Neutre', color: 'gray', bgColor: 'bg-gray-100', textColor: 'text-gray-600', hoverColor: 'hover:bg-gray-200' },
    { id: 'sad', icon: Cloud, label: 'Triste', color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-600', hoverColor: 'hover:bg-blue-200' },
    { id: 'very-sad', icon: CloudRain, label: 'Très Triste', color: 'indigo', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600', hoverColor: 'hover:bg-indigo-200' },
    { id: 'anxious', icon: Heart, label: 'Anxieux', color: 'red', bgColor: 'bg-red-100', textColor: 'text-red-600', hoverColor: 'hover:bg-red-200' }
  ]

  // Mock mood history data
  const moodHistory = [
    { date: '2024-12-14', mood: 'happy', moodLabel: 'Heureux', icon: Sun },
    { date: '2024-12-13', mood: 'neutral', moodLabel: 'Neutre', icon: Meh },
    { date: '2024-12-12', mood: 'very-happy', moodLabel: 'Très Heureux', icon: Smile },
    { date: '2024-12-11', mood: 'sad', moodLabel: 'Triste', icon: Cloud },
    { date: '2024-12-10', mood: 'happy', moodLabel: 'Heureux', icon: Sun },
    { date: '2024-12-09', mood: 'very-happy', moodLabel: 'Très Heureux', icon: Smile },
    { date: '2024-12-08', mood: 'neutral', moodLabel: 'Neutre', icon: Meh }
  ]

  const handleMoodSelection = (moodId) => {
    setSelectedMood(moodId)
    setTodayMood(moodId)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  const getDayName = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', { weekday: 'long' })
  }

  return (
    <ProfileLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Mood Selection Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Comment vous sentez-vous aujourd'hui?</h2>
              <p className="text-gray-600 mt-1">Votre humeur du jour</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>{new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          {/* Mood Buttons Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {moods.map((mood) => {
              const Icon = mood.icon
              const isSelected = selectedMood === mood.id || todayMood === mood.id
              
              return (
                <button
                  key={mood.id}
                  onClick={() => handleMoodSelection(mood.id)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 ${mood.bgColor} ${mood.hoverColor} ${
                    isSelected ? 'ring-2 ring-offset-2 ring-' + mood.color + '-500 scale-105' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${isSelected ? mood.bgColor : ''}`}>
                    <Icon className={`w-6 h-6 ${mood.textColor}`} />
                  </div>
                  <span className={`text-sm font-medium ${mood.textColor}`}>{mood.label}</span>
                </button>
              )
            })}
          </div>

          {/* Mood Confirmation Message */}
          {todayMood && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-blue-600" />
                <p className="text-blue-800">
                  Merci d'avoir partagé votre humeur! Votre suivi vous aide à mieux comprendre vos émotions.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Mood History Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Historique des humeurs</h2>
              <p className="text-gray-600 mt-1">Suivi de vos émotions au fil du temps</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Voir tout l'historique
            </button>
          </div>

          {/* Mood Timeline */}
          <div className="space-y-4">
            {moodHistory.map((entry, index) => {
              const Icon = entry.icon
              const moodInfo = moods.find(m => m.id === entry.mood)
              
              return (
                <div key={entry.date} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${moodInfo?.bgColor || 'bg-gray-100'}`}>
                    <Icon className={`w-5 h-5 ${moodInfo?.textColor || 'text-gray-600'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">{entry.moodLabel}</p>
                        <p className="text-sm text-gray-500">{getDayName(entry.date)} • {formatDate(entry.date)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${moodInfo?.bgColor || 'bg-gray-100'} ${moodInfo?.textColor || 'text-gray-600'}`}>
                          {entry.moodLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Statistics Summary */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">3</p>
              <p className="text-sm text-gray-600">Jours positifs</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-gray-600">2</p>
              <p className="text-sm text-gray-600">Jours neutres</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">2</p>
              <p className="text-sm text-gray-600">Jours difficiles</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">7</p>
              <p className="text-sm text-gray-600">Jours suivis</p>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  )
}
