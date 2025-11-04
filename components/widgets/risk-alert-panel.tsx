"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, TrendingUp } from "lucide-react"

export function RiskAlertPanel() {
  return (
    <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-red-200 rounded-lg">
          <AlertCircle className="w-6 h-6 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-red-900 mb-1">Risk Alert</h3>
          <p className="text-sm text-red-700 mb-3">Elevated blood pressure detected</p>
          <div className="flex items-center gap-2 text-xs text-red-600">
            <TrendingUp className="w-4 h-4" />
            <span>+12% from baseline</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
