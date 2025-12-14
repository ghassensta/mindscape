import React from 'react'
import MainLayout from '../../../layouts/MainLayout'

export default function AboutViewPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            À Propos de
            <span className="text-blue-600"> MindScape</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            L'innovation au service de votre bien-être mental depuis 2024
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Chez MindScape, nous croyons que la santé mentale devrait être accessible, 
                efficace et engageante pour tous. Notre mission est de démocratiser l'accès 
                aux thérapies cognitivo-comportementales grâce à la technologie de pointe.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                En combinant l'intelligence artificielle avec des approches thérapeutiques 
                validées scientifiquement, nous créons des expériences personnalisées qui 
                aident réellement les gens à surmonter leurs défis mentaux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Science Basée</h3>
                    <p className="text-sm text-gray-600">Approches validées cliniquement</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">IA Innovante</h3>
                    <p className="text-sm text-gray-600">Solutions personnalisées</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-blue-100 to-purple-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                  <p className="text-sm text-gray-600">Utilisateurs Actifs</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                  <p className="text-sm text-gray-600">Taux de Satisfaction</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <p className="text-sm text-gray-600">Experts en Santé</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <p className="text-sm text-gray-600">Support Disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés dédiés à votre bien-être
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Marie Laurent</h3>
              <p className="text-blue-600 font-medium mb-3">Fondatrice & PDG</p>
              <p className="text-gray-600 text-sm mb-4">
                Psychologue clinicienne avec 15 ans d'expérience en thérapie cognitivo-comportementale 
                et spécialiste en intelligence artificielle appliquée à la santé mentale.
              </p>
              <div className="flex justify-center space-x-3">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Ph.D. Psychologie</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">IA & Santé</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jean-Pierre Martin</h3>
              <p className="text-green-600 font-medium mb-3">Directeur Technique</p>
              <p className="text-gray-600 text-sm mb-4">
                Ingénieur en intelligence artificielle spécialisé dans le machine learning 
                et le traitement du langage naturel pour les applications de santé mentale.
              </p>
              <div className="flex justify-center space-x-3">
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Machine Learning</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">NLP</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Sophie Bernard</h3>
              <p className="text-purple-600 font-medium mb-3">Directrice Scientifique</p>
              <p className="text-gray-600 text-sm mb-4">
                Neuropsychologue et chercheuse spécialisée dans les neurosciences 
                comportementales et la validation clinique des interventions numériques.
              </p>
              <div className="flex justify-center space-x-3">
                <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Neurosciences</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Recherche</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action chaque jour
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Empathie</h3>
              <p className="text-gray-600 text-sm">
                Nous mettons l'humain au centre de toutes nos décisions et innovations.
              </p>
            </div>

            <div className="bg-linear-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Nous nous engageons à fournir les solutions les plus efficaces et validées.
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Nous repoussons les limites pour créer des solutions révolutionnaires.
              </p>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Inclusion</h3>
              <p className="text-gray-600 text-sm">
                Nous rendons la santé mentale accessible à tous, sans exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contactez-Nous</h2>
          <p className="text-xl text-gray-600 mb-8">
            Une question ? Une suggestion ? Nous serions ravis de vous entendre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Envoyer un Message
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Prendre Rendez-vous
            </button>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@mindscape.fr</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+33 1 23 45 67 89</span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
