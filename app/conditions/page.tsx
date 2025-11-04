"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Heart, Activity, BookOpen, AlertTriangle, TrendingUp, Pill } from "lucide-react"

export default function ConditionsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Medical Condition Intelligence</h1>
            <p className="text-slate-600">Manage and track medical conditions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Disease Registry */}
            <Card className="bg-gradient-to-br from-red-100 to-red-50 border-red-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-red-600" />
                <h3 className="font-semibold text-red-900">Disease Registry</h3>
              </div>
              <p className="text-sm text-red-700">Track diagnosed conditions</p>
            </Card>

            {/* Monitoring Modules */}
            <Card className="bg-gradient-to-br from-pink-100 to-pink-50 border-pink-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-pink-600" />
                <h3 className="font-semibold text-pink-900">Monitoring</h3>
              </div>
              <p className="text-sm text-pink-700">Condition-specific monitoring</p>
            </Card>

            {/* Treatment Protocol */}
            <Card className="bg-gradient-to-br from-purple-100 to-purple-50 border-purple-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Pill className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-purple-900">Treatment Protocol</h3>
              </div>
              <p className="text-sm text-purple-700">Manage treatment plans</p>
            </Card>

            {/* Symptom Checker */}
            <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Symptom Checker</h3>
              </div>
              <p className="text-sm text-blue-700">Check symptoms and get insights</p>
            </Card>

            {/* Education Library */}
            <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-green-900">Education</h3>
              </div>
              <p className="text-sm text-green-700">Learn about your conditions</p>
            </Card>

            {/* Progression Tracker */}
            <Card className="bg-gradient-to-br from-orange-100 to-orange-50 border-orange-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
                <h3 className="font-semibold text-orange-900">Progression</h3>
              </div>
              <p className="text-sm text-orange-700">Track condition progression</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
