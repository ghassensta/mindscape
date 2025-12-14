import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Brain, Gamepad2, BookOpen, Clock, Shield, User, ChevronDown } from 'lucide-react'

export default function ProfileLayout({ children }) {
  const location = useLocation()
  const [showUserMenu, setShowUserMenu] = useState(false)

  const menuItems = [
    { id: 'home', icon: Home, label: 'Accueil', color: 'blue', path: '/profile' },
    { id: 'thoughts', icon: Brain, label: 'Pensées', color: 'purple', path: '/profile/thoughts' },
    { id: 'world', icon: Gamepad2, label: 'Monde', color: 'green', path: '/profile/world' },
    { id: 'resources', icon: BookOpen, label: 'Ressources', color: 'orange', path: '/profile/ressources' },
    { id: 'history', icon: Clock, label: 'Historique', color: 'teal', path: '/profile/history' },
    { id: 'safety', icon: Shield, label: 'Sécurité', color: 'red', path: '/profile/security' }
  ]

  const mentalHealthTips = [
    "Prenez une profonde respiration et concentrez-vous sur le moment présent.",
    "Chaque petit pas compte dans votre parcours de bien-être.",
    "Soyez gentil avec vous-même aujourd'hui.",
    "Votre santé mentale est tout aussi importante que votre santé physique.",
    "Prenez une pause si vous en ressentez le besoin."
  ]

  const randomTip = mentalHealthTips[Math.floor(Math.random() * mentalHealthTips.length)]

  const getColorClasses = (color, isActive = false) => {
    const baseClasses = {
      blue: isActive ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-50',
      purple: isActive ? 'bg-purple-600 text-white' : 'text-purple-600 hover:bg-purple-50',
      green: isActive ? 'bg-green-600 text-white' : 'text-green-600 hover:bg-green-50',
      orange: isActive ? 'bg-orange-600 text-white' : 'text-orange-600 hover:bg-orange-50',
      teal: isActive ? 'bg-teal-600 text-white' : 'text-teal-600 hover:bg-teal-50',
      red: isActive ? 'bg-red-600 text-white' : 'text-red-600 hover:bg-red-50'
    }
    return baseClasses[color] || baseClasses.blue
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100'>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Left Side - Greeting and Mental Health Tip */}
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-800">
                    Bonjour, Jean! 👋
                  </h1>
                  <p className="text-sm text-gray-600 italic">
                    💡 {randomTip}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Mon Profil
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Paramètres
                  </a>
                  <hr className="my-1" />
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Déconnexion
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar Menu */}
        <aside className="w-64 bg-white shadow-lg border-r border-gray-200">
          <nav className="p-4">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${getColorClasses(item.color, isActive)}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 p-4 bg-linear-to-br from-blue-50 to-purple-50 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Votre Progression</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-linear-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-xs text-gray-600">65% complet cette semaine</p>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
