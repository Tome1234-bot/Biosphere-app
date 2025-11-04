"use client"

import { Card } from "@/components/ui/card"
import { Activity, Pill, Zap, Droplet } from "lucide-react"

export function RecentActivityTimeline() {
  const activities = [
    { id: 1, type: "activity", label: "Morning Walk", time: "7:30 AM", icon: Activity },
    { id: 2, type: "medication", label: "Took Blood Pressure Medication", time: "8:00 AM", icon: Pill },
    { id: 3, type: "alert", label: "Hydration Reminder", time: "12:00 PM", icon: Droplet },
    { id: 4, type: "exercise", label: "Gym Session - 45 mins", time: "5:30 PM", icon: Zap },
  ]

  return (
    <Card className="bg-white border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                {index < activities.length - 1 && <div className="w-0.5 h-12 bg-slate-200 mt-2" />}
              </div>
              <div className="flex-1 pt-1">
                <p className="font-medium text-slate-900">{activity.label}</p>
                <p className="text-sm text-slate-500">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
