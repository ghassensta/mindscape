import React from 'react'
import ProfileLayout from '../../../layouts/ProfileLayout'
import { Shield, Phone, Globe, AlertTriangle, Heart, Clock, ExternalLink, Users, Hospital } from 'lucide-react'

export default function SecurityPageView() {
  return (
    <ProfileLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Sécurité & Ressources</h1>
              <p className="text-gray-600">Informations importantes si vous vous sentez en danger ou mal</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Important</h3>
              <p className="text-gray-600">
                MindScape n'est pas un service médical ni une ligne d'urgence. Si vous vous sentez en danger ou que vous pensez vous faire du mal, contactez immédiatement les services d'urgence de votre pays ou une ligne d'assistance locale.
              </p>
            </div>
          </div>
        </div>

        {/* Tunisia Emergency Contacts */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="w-5 h-5 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-800">Tunisie — Numéros d'urgence</h3>
          </div>
          
          <div className="space-y-3">
            <div className="rounded-2xl border border-gray-200 bg-red-50 p-4">
              <div className="text-sm font-semibold text-gray-800">SAMU Tunisie</div>
              <div className="text-sm text-gray-600">Appelez le 190 (urgence médicale)</div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-blue-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Police Nationale</div>
              <div className="text-sm text-gray-600">Appelez le 197</div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-green-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Protection Civile</div>
              <div className="text-sm text-gray-600">Appelez le 198</div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-purple-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Numéro d'urgence européen</div>
              <div className="text-sm text-gray-600">Appelez le 112 (fonctionne en Tunisie)</div>
            </div>
          </div>
        </div>

        {/* Mental Health Support */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-5 h-5 text-pink-600" />
            <h3 className="text-lg font-semibold text-gray-800">Soutien Psychologique Tunisie</h3>
          </div>
          
          <div className="space-y-3">
            <div className="rounded-2xl border border-gray-200 bg-pink-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Ligne d'écoute nationale</div>
              <div className="text-sm text-gray-600">Appelez le 3112 - Soutien psychologique 24/7</div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-indigo-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Office des Tunisiens à l'Étranger</div>
              <div className="text-sm text-gray-600">+216 71 840 800 - Support pour expatriés</div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-teal-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Association Tunisienne de Santé Mentale</div>
              <div className="text-sm text-gray-600">www.atsm.org.tn - Ressources et guidance</div>
            </div>
          </div>
        </div>

        {/* Hospitals and Clinics */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Hospital className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Hôpitaux et Cliniques (Tunis)</h3>
          </div>
          
          <div className="space-y-3">
            <div className="rounded-2xl border border-gray-200 bg-blue-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Hôpital Psychiatrique de Tunis</div>
              <div className="text-sm text-gray-600">Tunis - +216 71 562 444</div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-green-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Centre de Santé Mentale Ariana</div>
              <div className="text-sm text-gray-600">Ariana - +216 71 754 200</div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-yellow-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Clinique Les Jasmins</div>
              <div className="text-sm text-gray-600">Tunis - +216 71 890 000</div>
            </div>
          </div>
        </div>

        {/* International Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-800">Ressources Internationales</h3>
          </div>
          
          <div className="space-y-3">
            <div className="rounded-2xl border border-gray-200 bg-green-50 p-4">
              <div className="text-sm font-semibold text-gray-800">Organisation Mondiale de la Santé (OMS)</div>
              <div className="text-sm text-gray-600">www.who.int - Guidelines et ressources mondiales</div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-blue-50 p-4">
              <div className="text-sm font-semibold text-gray-800">International Association for Suicide Prevention</div>
              <div className="text-sm text-gray-600">www.iasp.info - Resources et prévention</div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-purple-50 p-4">
              <div className="text-sm font-semibold text-gray-800">SOS Suicide International</div>
              <div className="text-sm text-gray-600">www.sossuicide.org - Support multilingue</div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-5 h-5 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-800">Conseils Rapides</h3>
          </div>
          
          <ul className="list-disc space-y-2 text-gray-600 pl-5">
            <li>Parlez à quelqu'un en qui vous avez confiance</li>
            <li>Sortez dans un endroit sûr et bien éclairé si possible</li>
            <li>Si les pensées persistent, contactez un professionnel de santé</li>
            <li>Respirez profondément et concentrez-vous sur le moment présent</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-wrap gap-4">
            <a href="https://www.atsm.org.tn" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>Soutien Tunisie</span>
            </a>
            <a href="https://www.who.int" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Globe className="w-4 h-4" />
              <span>OMS</span>
            </a>
            <a href="https://www.sossuicide.org" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Heart className="w-4 h-4" />
              <span>SOS Suicide</span>
            </a>
          </div>
        </div>
      </div>
    </ProfileLayout>
  )
}
