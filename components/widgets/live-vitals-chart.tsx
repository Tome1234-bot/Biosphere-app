"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { time: "00:00", heartRate: 68, bloodPressure: 118, oxygen: 97, temp: 36.8 },
  { time: "04:00", heartRate: 65, bloodPressure: 116, oxygen: 98, temp: 36.7 },
  { time: "08:00", heartRate: 72, bloodPressure: 120, oxygen: 98, temp: 37.0 },
  { time: "12:00", heartRate: 75, bloodPressure: 122, oxygen: 97, temp: 37.2 },
  { time: "16:00", heartRate: 73, bloodPressure: 121, oxygen: 98, temp: 37.1 },
  { time: "20:00", heartRate: 70, bloodPressure: 119, oxygen: 98, temp: 37.0 },
  { time: "24:00", heartRate: 72, bloodPressure: 120, oxygen: 98, temp: 37.2 },
]

export function LiveVitalsChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">24-Hour Vital Signs Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="time" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#f1f5f9",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke="#ef4444"
            dot={false}
            strokeWidth={2}
            name="Heart Rate (bpm)"
          />
          <Line type="monotone" dataKey="oxygen" stroke="#14b8a6" dot={false} strokeWidth={2} name="Oxygen (%)" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
