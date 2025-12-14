import React from 'react'
import MainLayout from '../../../layouts/MainLayout'

export default function TechniquesPageView() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Nos Techniques
            <span className="text-blue-600"> Thérapeutiques</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez nos approches innovantes combinant science et technologie
          </p>
        </div>
      </section>

      {/* Main Techniques Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Approches Fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des méthodes éprouvées améliorées par l'intelligence artificielle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Restructuration Cognitive</h3>
              <p className="text-gray-600 mb-4">
                Identification et modification des schémas de pensée négatifs grâce à notre IA qui analyse vos pensées automatiques en temps réel.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Journal de pensées intelligent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Détection de distorsions cognitives</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Reformulations assistées par IA</span>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Activation Comportementale</h3>
              <p className="text-gray-600 mb-4">
                Planification et suivi d'activités positives avec notre système de gamification qui vous motive à reprendre le contrôle de vos actions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Planification d'activités adaptative</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Système de récompenses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Suivi des progrès en temps réel</span>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Exposition Thérapeutique</h3>
              <p className="text-gray-600 mb-4">
                Gestion progressive des peurs et anxiétés à travers des exercices d'exposition virtuelle guidés par notre IA.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Hiérarchies de peurs personnalisées</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Exposition graduelle assistée</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Techniques de relaxation intégrées</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Fonctionnalités IA Avancées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'intelligence artificielle au service de votre thérapie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Analyse Cognitive en Temps Réel</h3>
                    <p className="text-gray-600 mb-3">
                      Notre IA analyse vos schémas de pensée au fur et à mesure que vous les exprimez, 
                      identifiant les distorsions cognitives et suggérant des reformulations plus équilibrées.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">NLP Avancé</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Machine Learning</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Jeux Thérapeutiques Adaptatifs</h3>
                    <p className="text-gray-600 mb-3">
                      Des exercices ludiques qui s'adaptent à votre niveau et à vos progrès, 
                      rendant la thérapie engageante et motivante tout en étant cliniquement efficaces.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Gamification</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Adaptatif</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Profils Personnalisés</h3>
                    <p className="text-gray-600 mb-3">
                      Votre évolution est unique. Notre IA crée un profil personnalisé basé sur 
                      vos réponses, vos progrès et vos objectifs pour des recommandations sur mesure.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Personnalisation</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-100 to-purple-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Comment ça Marche</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Évaluation Initiale</h4>
                    <p className="text-gray-600 text-sm">
                      Notre IA évalue votre état mental à travers des jeux et questionnaires interactifs 
                      pour établir votre profil de base.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Plan Personnalisé</h4>
                    <p className="text-gray-600 text-sm">
                      L'IA génère un programme thérapeutique adapté à vos besoins spécifiques 
                      avec des exercices et des objectifs personnalisés.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Suivi Continu</h4>
                    <p className="text-gray-600 text-sm">
                      Votre progression est analysée en continu pour ajuster le programme 
                      et maximiser l'efficacité de votre thérapie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Techniques Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Techniques Spécialisées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des approches ciblées pour des besoins spécifiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Gestion du Stress</h3>
              <p className="text-gray-600 text-sm mb-3">Techniques de relaxation et de pleine conscience avec biofeedback virtuel.</p>
              <div className="text-xs text-orange-700 font-medium">• Respiration guidée • Méditation active • Biofeedback</div>
            </div>

            <div className="bg-linear-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Anxiété Sociale</h3>
              <p className="text-gray-600 text-sm mb-3">Exposition virtuelle progressive aux situations sociales avec coaching IA.</p>
              <div className="text-xs text-teal-700 font-medium">• Simulation sociale • Entraînement conversationnel • Confiance en soi</div>
            </div>

            <div className="bg-linear-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Amélioration du Sommeil</h3>
              <p className="text-gray-600 text-sm mb-3">Hygiène du sommeil et techniques de relaxation pour un repos optimal.</p>
              <div className="text-xs text-indigo-700 font-medium">• Routine du coucher • Relaxation profonde • Analyse du sommeil</div>
            </div>

            <div className="bg-linear-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Dépression Légère</h3>
              <p className="text-gray-600 text-sm mb-3">Activation comportementale et restructuration cognitive adaptées.</p>
              <div className="text-xs text-pink-700 font-medium">• Planification d'activités • Pensées positives • Énergie progressive</div>
            </div>

            <div className="bg-linear-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Gestion des Émotions</h3>
              <p className="text-gray-600 text-sm mb-3">Intelligence émotionnelle et régulation des affects par l'IA.</p>
              <div className="text-xs text-yellow-700 font-medium">• Reconnaissance émotionnelle • Stratégies de coping • Équilibre émotionnel</div>
            </div>

            <div className="bg-linear-to-br from-red-50 to-red-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Procrastination</h3>
              <p className="text-gray-600 text-sm mb-3">Techniques de motivation et de gestion du temps gamifiées.</p>
              <div className="text-xs text-red-700 font-medium">• Planification • Récompenses • Suivi des objectifs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Commencez Votre Voyage Thérapeutique
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Découvrez comment nos techniques innovantes peuvent vous aider à atteindre 
            une meilleure santé mentale dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Essai Gratuit
            </button>
            <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              En Savoir Plus
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
