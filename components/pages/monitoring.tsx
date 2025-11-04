"use client"

import { VitalSignCard } from "@/components/widgets/vital-sign-card"
import { LiveVitalsChart } from "@/components/widgets/live-vitals-chart"
import { AlertsPanel } from "@/components/widgets/alerts-panel"
import { DeviceStatus } from "@/components/widgets/device-status"
import { Activity, Heart, Wind, Thermometer } from "lucide-react"

export function Monitoring() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Real-time Monitoring</h1>
        <p className="text-slate-600">Live vital signs and health metrics</p>
      </div>

      {/* Top Row - Critical Vital Signs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <VitalSignCard
          label="Heart Rate"
          value="72"
          unit="bpm"
          icon={Heart}
          status="normal"
          trend="stable"
          color="text-red-500"
        />
        <VitalSignCard
          label="Blood Pressure"
          value="120/80"
          unit="mmHg"
          icon={Activity}
          status="normal"
          trend="stable"
          color="text-blue-500"
        />
        <VitalSignCard
          label="Oxygen Level"
          value="98"
          unit="%"
          icon={Wind}
          status="normal"
          trend="stable"
          color="text-teal-500"
        />
        <VitalSignCard
          label="Temperature"
          value="37.2"
          unit="°C"
          icon={Thermometer}
          status="normal"
          trend="stable"
          color="text-orange-500"
        />
      </div>

      {/* Middle Row - Live Charts & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <LiveVitalsChart />
        </div>
        <AlertsPanel />
      </div>

      {/* Bottom Row - Device Status */}
      <DeviceStatus />
    </div>
  )
}
