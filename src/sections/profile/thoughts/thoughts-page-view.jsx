import React, { useState } from 'react'
import ProfileLayout from '../../../layouts/ProfileLayout'
import { Brain, Heart, MessageCircle, Lightbulb, RefreshCw, Send, User, Clock, AlertCircle, CheckCircle } from 'lucide-react'

export default function ThoughtsPageView() {
  const [thought, setThought] = useState('')
  const [feelings, setFeelings] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState(null)
  const [step, setStep] = useState('input') // 'input', 'analyzing', 'results'

  // Mock CBT analysis data (will be replaced with AI later)
  const mockAnalysis = {
    negative_thought: thought,
    bias: "Catastrophisme",
    question: "Quelle est la preuve que cette pensée est vraie à 100%?",
    alternative_thought: "Je ressens de l'anxiété, mais je peux gérer cette situation étape par étape.",
    explanation: "Votre pensée montre une tendance à anticiper le pire. Essayez de vous concentrer sur les faits concrets plutôt que sur les possibilités négatives."
  }

  const handleAnalyze = () => {
    if (!thought.trim()) return
    
    setStep('analyzing')
    setIsAnalyzing(true)
    
    // Simulate AI analysis delay
    setTimeout(() => {
      setAnalysis(mockAnalysis)
      setIsAnalyzing(false)
      setStep('results')
    }, 2000)
  }

  const handleReset = () => {
    setThought('')
    setFeelings('')
    setAnalysis(null)
    setStep('input')
  }

  const getBiasColor = (bias) => {
    const colors = {
      'Catastrophisme': 'red',
      'Tout ou rien': 'orange', 
      'Filtre mental': 'yellow',
      'Sur-généralisation': 'purple',
      'Personnalisation': 'blue',
      'Lecture de pensée': 'green'
    }
    return colors[bias] || 'gray'
  }

  return (
    <ProfileLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Analyse de Pensées</h1>
              <p className="text-gray-600">Votre espace pour comprendre et transformer vos pensées</p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        {step === 'input' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="space-y-6">
              {/* Thought Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Quelle pensée traverse votre esprit actuellement?
                </label>
                <textarea
                  value={thought}
                  onChange={(e) => setThought(e.target.value)}
                  placeholder="Décrivez votre pensée sans filtre... Ex: 'Je vais échouer à cet examen, tout le monde va me juger.'"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={4}
                />
              </div>

              {/* Feelings Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Heart className="w-4 h-4 inline mr-2" />
                  Comment cette pensée vous fait-elle ressentir?
                </label>
                <textarea
                  value={feelings}
                  onChange={(e) => setFeelings(e.target.value)}
                  placeholder="Décrivez vos émotions... Ex: 'Je me sens anxieux, tendu, impuissant.'"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleAnalyze}
                disabled={!thought.trim()}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Analyser ma pensée</span>
              </button>
            </div>
          </div>
        )}

        {/* Analyzing Section */}
        {step === 'analyzing' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Analyse en cours...</h3>
                <p className="text-gray-600">Notre système analyse votre pensée avec bienveillance</p>
              </div>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {step === 'results' && analysis && (
          <div className="space-y-6">
            {/* Original Thought */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">Votre pensée initiale</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{analysis.negative_thought}</p>
              </div>
            </div>

            {/* CBT Analysis */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-800">Analyse CBT</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Bias */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className={`w-4 h-4 text-${getBiasColor(analysis.bias)}-600`} />
                    <h4 className="font-medium text-gray-700">Biais cognitif identifié</h4>
                  </div>
                  <div className={`p-4 bg-${getBiasColor(analysis.bias)}-50 rounded-lg border border-${getBiasColor(analysis.bias)}-200`}>
                    <p className={`font-medium text-${getBiasColor(analysis.bias)}-800`}>{analysis.bias}</p>
                  </div>
                </div>

                {/* CBT Question */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                    <h4 className="font-medium text-gray-700">Question CBT</h4>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800">{analysis.question}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Thought */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-800">Pensée alternative</h3>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800">{analysis.alternative_thought}</p>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-800">Explication et conseils</h3>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-purple-800">{analysis.explanation}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleReset}
                className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Nouvelle analyse</span>
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Sauvegarder cette analyse
              </button>
            </div>
          </div>
        )}
      </div>
    </ProfileLayout>
  )
}
