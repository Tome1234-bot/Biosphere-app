"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { User, Smartphone, Bell, CreditCard, Phone, Globe, HelpCircle } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Settings & Profile</h1>
            <p className="text-slate-600">Manage your account and preferences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Profile */}
            <Card className="bg-gradient-to-br from-gray-100 to-gray-50 border-gray-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Personal Profile</h3>
              </div>
              <p className="text-sm text-gray-700">Update your health profile</p>
            </Card>

            {/* Device Pairing */}
            <Card className="bg-gradient-to-br from-slate-100 to-slate-50 border-slate-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-slate-600" />
                <h3 className="font-semibold text-slate-900">Device Pairing</h3>
              </div>
              <p className="text-sm text-slate-700">Connect health devices</p>
            </Card>

            {/* Notifications */}
            <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Notifications</h3>
              </div>
              <p className="text-sm text-blue-700">Manage notification preferences</p>
            </Card>

            {/* Subscription */}
            <Card className="bg-gradient-to-br from-purple-100 to-purple-50 border-purple-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-purple-900">Subscription</h3>
              </div>
              <p className="text-sm text-purple-700">Manage your subscription</p>
            </Card>

            {/* Emergency Contacts */}
            <Card className="bg-gradient-to-br from-red-100 to-red-50 border-red-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-red-600" />
                <h3 className="font-semibold text-red-900">Emergency Contacts</h3>
              </div>
              <p className="text-sm text-red-700">Add emergency contacts</p>
            </Card>

            {/* Language & Accessibility */}
            <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-green-900">Language</h3>
              </div>
              <p className="text-sm text-green-700">Language and accessibility settings</p>
            </Card>

            {/* Support */}
            <Card className="bg-gradient-to-br from-orange-100 to-orange-50 border-orange-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-orange-600" />
                <h3 className="font-semibold text-orange-900">Support</h3>
              </div>
              <p className="text-sm text-orange-700">Get help and support</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
