"use client"

import { Card } from "@/components/ui/card"

export function HealthSignature() {
  return (
    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6">
      <h3 className="text-lg font-semibold mb-4">Health Signature</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm">Heart Rate</span>
          <span className="font-bold">72 bpm</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Blood Pressure</span>
          <span className="font-bold">120/80 mmHg</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Temperature</span>
          <span className="font-bold">98.6°F</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Oxygen Level</span>
          <span className="font-bold">98%</span>
        </div>
      </div>
    </Card>
  )
}
