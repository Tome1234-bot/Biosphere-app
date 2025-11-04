"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface VitalSignCardProps {
  label: string
  value: string
  unit: string
  icon: LucideIcon
  status: "normal" | "warning" | "critical"
  trend: "up" | "down" | "stable"
  color: string
}

export function VitalSignCard({ label, value, unit, icon: Icon, status, trend, color }: VitalSignCardProps) {
  const statusColors = {
    normal: "bg-green-50 border-green-200",
    warning: "bg-yellow-50 border-yellow-200",
    critical: "bg-red-50 border-red-200",
  }

  const statusBadgeColors = {
    normal: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    critical: "bg-red-100 text-red-800",
  }

  return (
    <Card className={`p-6 border-2 ${statusColors[status]}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-slate-600 mb-1">{label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900">{value}</span>
            <span className="text-sm text-slate-500">{unit}</span>
          </div>
        </div>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-semibold px-2 py-1 rounded ${statusBadgeColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        <div className="flex items-center gap-1 text-xs text-slate-600">
          {trend === "up" && <TrendingUp className="w-4 h-4 text-red-500" />}
          {trend === "down" && <TrendingDown className="w-4 h-4 text-green-500" />}
          {trend === "stable" && <span className="text-slate-400">Stable</span>}
        </div>
      </div>
    </Card>
  )
}
