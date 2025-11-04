"use client"

import { Card } from "@/components/ui/card"
import { Smartphone, Watch, Wifi, Battery } from "lucide-react"

const devices = [
  {
    id: 1,
    name: "Smartwatch",
    icon: Watch,
    status: "connected",
    battery: 85,
    signal: "strong",
  },
  {
    id: 2,
    name: "Blood Pressure Monitor",
    icon: Smartphone,
    status: "connected",
    battery: 92,
    signal: "strong",
  },
  {
    id: 3,
    name: "Fitness Tracker",
    icon: Watch,
    status: "connected",
    battery: 45,
    signal: "weak",
  },
]

export function DeviceStatus() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Connected Devices</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {devices.map((device) => {
          const Icon = device.icon
          const statusColor = device.status === "connected" ? "text-green-500" : "text-gray-400"
          const signalColor = device.signal === "strong" ? "text-green-500" : "text-yellow-500"

          return (
            <div key={device.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-slate-600" />
                  <div>
                    <p className="font-semibold text-sm text-slate-900">{device.name}</p>
                    <p className={`text-xs font-medium ${statusColor}`}>
                      {device.status === "connected" ? "Connected" : "Disconnected"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 flex items-center gap-1">
                    <Battery className="w-4 h-4" />
                    Battery
                  </span>
                  <span className="font-semibold text-slate-900">{device.battery}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${device.battery}%` }} />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 flex items-center gap-1">
                    <Wifi className={`w-4 h-4 ${signalColor}`} />
                    Signal
                  </span>
                  <span className="font-semibold text-slate-900 capitalize">{device.signal}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
