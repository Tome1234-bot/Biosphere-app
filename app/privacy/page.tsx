"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Lock, Database, Shield, Share2, Zap, Eye } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Data Integration & Privacy</h1>
            <p className="text-slate-600">Manage your data and privacy settings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Connected Apps */}
            <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Connected Apps</h3>
              </div>
              <p className="text-sm text-blue-700">Manage connected health apps and devices</p>
            </Card>

            {/* Genetic Kit Portal */}
            <Card className="bg-gradient-to-br from-purple-100 to-purple-50 border-purple-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-purple-900">Genetic Portal</h3>
              </div>
              <p className="text-sm text-purple-700">Access genetic testing and results</p>
            </Card>

            {/* Privacy Dashboard */}
            <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-green-900">Privacy Dashboard</h3>
              </div>
              <p className="text-sm text-green-700">Control your privacy settings</p>
            </Card>

            {/* Data Export */}
            <Card className="bg-gradient-to-br from-orange-100 to-orange-50 border-orange-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-6 h-6 text-orange-600" />
                <h3 className="font-semibold text-orange-900">Data Export</h3>
              </div>
              <p className="text-sm text-orange-700">Export your health data</p>
            </Card>

            {/* Blockchain Verification */}
            <Card className="bg-gradient-to-br from-indigo-100 to-indigo-50 border-indigo-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
                <h3 className="font-semibold text-indigo-900">Blockchain Verify</h3>
              </div>
              <p className="text-sm text-indigo-700">Verify data authenticity</p>
            </Card>

            {/* Permission Controls */}
            <Card className="bg-gradient-to-br from-pink-100 to-pink-50 border-pink-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-pink-600" />
                <h3 className="font-semibold text-pink-900">Permissions</h3>
              </div>
              <p className="text-sm text-pink-700">Manage data access permissions</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
