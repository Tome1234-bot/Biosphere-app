"use client"

import { HealthScoreWidget } from "@/components/widgets/health-score-widget"
import { RiskAlertPanel } from "@/components/widgets/risk-alert-panel"
import { TodayInsights } from "@/components/widgets/today-insights"
import { QuickActionBar } from "@/components/widgets/quick-action-bar"
import { UpcomingAppointments } from "@/components/widgets/upcoming-appointments"
import { HealthSignature } from "@/components/widgets/health-signature"
import { RecentActivityTimeline } from "@/components/widgets/recent-activity-timeline"

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Health Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's your health overview.</p>
      </div>

      {/* Top Row - Health Score & Risk Alert */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <HealthScoreWidget />
        <RiskAlertPanel />
        <TodayInsights />
      </div>

      {/* Quick Actions */}
      <QuickActionBar />

      {/* Middle Row - Appointments & Health Signature */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <UpcomingAppointments />
        <HealthSignature />
      </div>

      {/* Recent Activity */}
      <RecentActivityTimeline />
    </div>
  )
}
