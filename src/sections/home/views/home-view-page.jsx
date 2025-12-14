import React from 'react'
import MainLayout from '../../../layouts/MainLayout'

export default function HomeViewPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Transformez Votre Esprit avec
            <span className="text-blue-600"> MindScape</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez notre application IA qui combine la thérapie cognitivo-comportementale 
            avec des jeux interactifs pour évaluer et améliorer votre santé mentale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Se Connecter
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              S'inscrire Gratuitement
            </button>
          </div>
        </div>
      </section>

      {/* AI-Powered CBT Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Notre Approche Innovante
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'intelligence artificielle au service de votre bien-être mental
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">IA Intelligente</h3>
              <p className="text-gray-600 mb-4">
                Notre IA analyse vos schémas de pensée et vous fournit des recommandations 
                personnalisées basées sur les techniques éprouvées.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Analyse cognitive en temps réel
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Plans thérapeutiques personnalisés
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Suivi des progrès intelligent
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Jeux Thérapeutiques</h3>
              <p className="text-gray-600 mb-4">
                Des jeux interactifs conçus par des psychologues pour évaluer et améliorer 
                votre santé mentale de manière ludique et engageante.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Évaluations par le jeu
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Exercices cognitifs adaptatifs
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Récompenses de motivation
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Profil Personnalisé</h3>
              <p className="text-gray-600 mb-4">
                Votre espace personnel où l'IA vous aide à comprendre et gérer vos 
                défis mentaux à travers des expériences uniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Dashboard de santé mentale
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Jeux d'évaluation adaptatifs
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Rapports détaillés IA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Importance & Benefits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Pourquoi MindScape ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La technologie de pointe pour votre bien-être mental
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Innovation Scientifique
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Validé Cliniquement</h4>
                    <p className="text-gray-600">Notre approche est reconnue scientifiquement pour traiter la dépression, l'anxiété et autres troubles mentaux.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Apprentissage Ludique</h4>
                    <p className="text-gray-600">Les jeux thérapeutiques rendent l'évaluation et l'amélioration de votre santé mentale engageante et motivante.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">IA Personnalisée</h4>
                    <p className="text-gray-600">Notre intelligence artificielle s'adapte à votre profil pour offrir des recommandations uniques et évolutives.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-linear-to-br from-blue-100 to-purple-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-sm text-gray-600">Amélioration des symptômes avec l'IA</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                  <p className="text-sm text-gray-600">Plus d'engagement avec les jeux</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <p className="text-sm text-gray-600">Support IA disponible</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
                  <p className="text-sm text-gray-600">Satisfaction utilisateurs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Troubles Mentaux Traités
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Dépression</h4>
                <p className="text-sm text-gray-600">Surmontez les schémas négatifs et retrouvez la motivation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Anxiété</h4>
                <p className="text-sm text-gray-600">Gérez les attaques de panique et l'anxiété sociale</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Stress</h4>
                <p className="text-sm text-gray-600">Développez des stratégies pour gérer le stress quotidien</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CBT Methodology Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              La Méthodologie en Détail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprendre la science derrière la thérapie cognitivo-comportementale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Les Principes Fondamentaux
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Connexion Pensées-Émotions-Comportements</h4>
                  <p className="text-gray-600">La repose sur le principe que nos pensées influencent nos émotions et nos comportements. En modifiant les schémas de pensée négatifs, nous pouvons changer nos réactions émotionnelles et comportementales.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Approche Structurée et Orientée vers les Objectifs</h4>
                  <p className="text-gray-600">Chaque séance est planifiée avec des objectifs spécifiques. La thérapie est collaborative entre le thérapeute et le patient, avec des tâches concrètes à réaliser entre les séances.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Focus sur le Présent</h4>
                  <p className="text-gray-600">Bien que reconnaissant l'influence du passé, la TBT se concentre sur les problèmes actuels et les solutions pratiques pour améliorer le présent et l'avenir.</p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Le Processus Thérapeutique
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Évaluation Initiale</h4>
                    <p className="text-gray-600 text-sm">Analyse détaillée des symptômes, identification des schémas de pensée et des comportements problématiques.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Définition des Objectifs</h4>
                    <p className="text-gray-600 text-sm">Établissement d'objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Interventions Actives</h4>
                    <p className="text-gray-600 text-sm">Application des techniques spécifiques avec des exercices pratiques et des expérimentations comportementales.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Prévention des Rechutes</h4>
                    <p className="text-gray-600 text-sm">Développement de stratégies pour maintenir les progrès et faire face aux futurs défis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Techniques Spécifiques de la
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Journal de Pensées</h4>
                <p className="text-gray-600 text-sm mb-3">Enregistrement systématique des pensées automatiques, émotions et situations déclenchantes.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Identification des distorsions cognitives</li>
                  <li>• Analyse des preuves pour/contre</li>
                  <li>• Génération d'alternatives équilibrées</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Exercices Comportementaux</h4>
                <p className="text-gray-600 text-sm mb-3">Activités planifiées pour modifier les comportements et tester les croyances.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Hiérarchie des peurs</li>
                  <li>• Exposition graduelle</li>
                  <li>• Activation comportementale</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Techniques de Relaxation</h4>
                <p className="text-gray-600 text-sm mb-3">Méthodes pour gérer le stress et l'anxiété par la régulation physiologique.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Respiration diaphragmatique</li>
                  <li>• Relaxation musculaire progressive</li>
                  <li>• Visualisation guidée</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Restructuration Cognitive</h4>
                <p className="text-gray-600 text-sm mb-3">Identification et modification des schémas de pensée irrationnels.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Questionnement socratique</li>
                  <li>• Décatastrophisation</li>
                  <li>• Re-framing positif</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Résolution de Problèmes</h4>
                <p className="text-gray-600 text-sm mb-3">Approche systématique pour faire face aux défis de la vie quotidienne.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Identification du problème</li>
                  <li>• Génération de solutions</li>
                  <li>• Évaluation et implémentation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Habiletés Sociales</h4>
                <p className="text-gray-600 text-sm mb-3">Développement des compétences pour améliorer les relations interpersonnelles.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Communication assertive</li>
                  <li>• Gestion des conflits</li>
                  <li>• Expression des besoins</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CBT Research and Evidence */}
      <section className="py-20 px-4 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Preuves Scientifiques et Recherche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des décennies de recherche valident l'efficacité de la
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Base de Données Scientifiques
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Méta-analyses</h4>
                  </div>
                  <p className="text-gray-600">Plus de 500 méta-analyses démontrent l'efficacité de la pour divers troubles mentaux, avec des tailles d'effet allant de modérées à grandes (d = 0.5-0.8).</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Études Neurologiques</h4>
                  </div>
                  <p className="text-gray-600">Les neurosciences montrent que la modifie l'activité cérébrale dans les régions associées à la régulation émotionnelle et au traitement cognitif.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Comparaisons Thérapeutiques</h4>
                  </div>
                  <p className="text-gray-600">La est aussi efficace que les médicaments pour la dépression modérée, avec des taux de rechute inférieurs à long terme.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Statistiques Clés
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">65-80%</div>
                  <p className="text-sm text-gray-700 font-medium">Taux de réponse pour la dépression</p>
                  <p className="text-xs text-gray-500 mt-1">Comparé à 40-60% pour les médicaments seuls</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50-70%</div>
                  <p className="text-sm text-gray-700 font-medium">Réduction des symptômes anxieux</p>
                  <p className="text-xs text-gray-500 mt-1">Maintenue à 6-12 mois</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">12-20</div>
                  <p className="text-sm text-gray-700 font-medium">Séances en moyenne</p>
                  <p className="text-xs text-gray-500 mt-1">Pour des résultats durables</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">30%</div>
                  <p className="text-sm text-gray-700 font-medium">Moins de rechutes</p>
                  <p className="text-xs text-gray-500 mt-1">Comparé aux médicaments seuls</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Domaines d'Application Validés
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-linear-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-lg font-bold text-blue-700 mb-2">Dépression</div>
                <p className="text-xs text-gray-600">Niveau de preuve: A+</p>
                <p className="text-xs text-gray-500 mt-1">Plus de 300 RCTs</p>
              </div>
              <div className="text-center p-4 bg-linear-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="text-lg font-bold text-purple-700 mb-2">Anxiété</div>
                <p className="text-xs text-gray-600">Niveau de preuve: A+</p>
                <p className="text-xs text-gray-500 mt-1">TAG, panique, phobies</p>
              </div>
              <div className="text-center p-4 bg-linear-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-lg font-bold text-green-700 mb-2">TOC</div>
                <p className="text-xs text-gray-600">Niveau de preuve: A+</p>
                <p className="text-xs text-gray-500 mt-1">Avec exposition</p>
              </div>
              <div className="text-center p-4 bg-linear-to-br from-orange-50 to-orange-100 rounded-lg">
                <div className="text-lg font-bold text-orange-700 mb-2">Stress PTSD</div>
                <p className="text-xs text-gray-600">Niveau de preuve: A</p>
                <p className="text-xs text-gray-500 mt-1">Traumatismes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Commencer Votre Voyage ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers d'utilisateurs qui ont transformé leur santé mentale 
            avec notre application IA. Commencez dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Se Connecter
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Créer un Compte
            </button>
          </div>
          <p className="text-blue-100 mt-6 text-sm">
            Accès gratuit • Essai de 14 jours • Annulation à tout moment
          </p>
        </div>
      </section>
    </MainLayout>
  )
}
