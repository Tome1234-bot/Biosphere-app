"use client"

import { Card } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export function TodayInsights() {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-purple-200 rounded-lg">
          <Lightbulb className="w-6 h-6 text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-purple-900 mb-1">Today's Insight</h3>
          <p className="text-sm text-purple-700">You've been 23% more active than usual</p>
          <p className="text-xs text-purple-600 mt-2">Keep up the great work!</p>
        </div>
      </div>
    </Card>
  )
}
