"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Users, Heart, Share2, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"

export default function FamilyPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Family & Care Network</h1>
            <p className="text-slate-600">Manage family health and care coordination</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Family Dashboard */}
            <Card className="bg-gradient-to-br from-pink-100 to-pink-50 border-pink-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-pink-600" />
                <h3 className="font-semibold text-pink-900">Family Dashboard</h3>
              </div>
              <p className="text-sm text-pink-700">View family members' health overview</p>
            </Card>

            {/* Dependent Care */}
            <Card className="bg-gradient-to-br from-rose-100 to-rose-50 border-rose-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-rose-600" />
                <h3 className="font-semibold text-rose-900">Dependent Care</h3>
              </div>
              <p className="text-sm text-rose-700">Manage care for dependents</p>
            </Card>

            {/* Care Circle */}
            <Card className="bg-gradient-to-br from-red-100 to-red-50 border-red-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-6 h-6 text-red-600" />
                <h3 className="font-semibold text-red-900">Care Circle</h3>
              </div>
              <p className="text-sm text-red-700">Manage permissions and sharing</p>
            </Card>

            {/* Milestone Tracker */}
            <Card className="bg-gradient-to-br from-orange-100 to-orange-50 border-orange-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
                <h3 className="font-semibold text-orange-900">Milestones</h3>
              </div>
              <p className="text-sm text-orange-700">Track health milestones</p>
            </Card>

            {/* Emergency Status */}
            <Card className="bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
                <h3 className="font-semibold text-yellow-900">Emergency Status</h3>
              </div>
              <p className="text-sm text-yellow-700">Emergency alerts and status</p>
            </Card>

            {/* Caregiver Tasks */}
            <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-green-900">Caregiver Tasks</h3>
              </div>
              <p className="text-sm text-green-700">Coordinate caregiver tasks</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
