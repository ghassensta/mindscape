import React from 'react'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo/Brand Section */}
        <div className="mb-8">
          <div className="relative inline-flex items-center justify-center">
            {/* Animated circles background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full animate-ping"></div>
              <div className="absolute w-16 h-16 bg-blue-300 rounded-full animate-ping animation-delay-200"></div>
              <div className="absolute w-12 h-12 bg-blue-400 rounded-full animate-ping animation-delay-400"></div>
            </div>
            
            {/* Main logo */}
            <div className="relative w-24 h-24 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            MindScape
          </h1>
          <p className="text-lg text-gray-600">
            Chargement en cours...
          </p>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-linear-to-r from-blue-600 to-purple-600 rounded-full animate-pulse">
              <div className="h-full bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Loading Messages */}
          <div className="space-y-2 mt-6">
            <p className="text-sm text-gray-500 animate-pulse">
              Préparation de votre expérience thérapeutique
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-100"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-200"></div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">IA Avancée</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">Thérapie TCC</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">Gamification</p>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  )
}
