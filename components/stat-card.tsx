import type React from "react"
interface StatCardProps {
  label: string
  value: string | number
  unit?: string
  icon: React.ReactNode
  color: string
  trend?: number
}

export function StatCard({ label, value, unit, icon, color, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-slate-600 mb-1">{label}</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-slate-900">{value}</p>
            {unit && <p className="text-sm text-slate-500">{unit}</p>}
          </div>
        </div>
        <div className={`p-3 rounded-lg ${color} text-white`}>{icon}</div>
      </div>
      {trend !== undefined && (
        <p className={`text-xs font-medium ${trend >= 0 ? "text-green-600" : "text-red-600"}`}>
          {trend >= 0 ? "↑" : "↓"} {Math.abs(trend)}% from last week
        </p>
      )}
    </div>
  )
}
