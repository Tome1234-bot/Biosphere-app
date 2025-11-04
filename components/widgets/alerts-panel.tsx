"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "critical",
    title: "High Blood Pressure",
    message: "Reading above normal range",
    time: "2 min ago",
  },
  {
    id: 2,
    type: "warning",
    title: "Irregular Heartbeat",
    message: "Detected 3 irregular beats",
    time: "15 min ago",
  },
  {
    id: 3,
    type: "info",
    title: "Medication Reminder",
    message: "Time to take your evening medication",
    time: "1 hour ago",
  },
]

export function AlertsPanel() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Active Alerts</h3>
      <div className="space-y-3">
        {alerts.map((alert) => {
          const iconMap = {
            critical: <AlertCircle className="w-5 h-5 text-red-500" />,
            warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
            info: <CheckCircle className="w-5 h-5 text-blue-500" />,
          }

          const bgMap = {
            critical: "bg-red-50 border-red-200",
            warning: "bg-yellow-50 border-yellow-200",
            info: "bg-blue-50 border-blue-200",
          }

          return (
            <div key={alert.id} className={`p-3 rounded-lg border ${bgMap[alert.type as keyof typeof bgMap]}`}>
              <div className="flex gap-3">
                {iconMap[alert.type as keyof typeof iconMap]}
                <div className="flex-1">
                  <p className="font-semibold text-sm text-slate-900">{alert.title}</p>
                  <p className="text-xs text-slate-600">{alert.message}</p>
                  <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
