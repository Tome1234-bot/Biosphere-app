"use client"

import { Card } from "@/components/ui/card"
import { CircularProgress } from "@/components/ui/circular-progress"

export function HealthScoreWidget() {
  const healthScore = 78

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 p-6">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-sm font-semibold text-slate-600 mb-4">Health Score</h3>
        <CircularProgress value={healthScore} size={120} color="text-blue-500" />
        <p className="mt-4 text-2xl font-bold text-blue-600">{healthScore}</p>
        <p className="text-xs text-slate-600 mt-1">Excellent condition</p>
      </div>
    </Card>
  )
}
