"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  Wind,
  Pill,
  Shield,
  Droplet,
  Settings,
  CheckCircle2,
  Clock,
  TrendingUp,
  Activity,
  Brain,
  Heart,
} from "lucide-react"
import { useState } from "react"

const activeInterventions = [
  {
    id: 1,
    title: "Stress Reduction Program",
    description: "AI-detected elevated stress levels",
    status: "active",
    progress: 65,
    recommendation: "Practice 10-minute meditation",
    icon: Brain,
    color: "from-orange-100 to-orange-50",
    borderColor: "border-orange-300",
    textColor: "text-orange-900",
  },
  {
    id: 2,
    title: "Hydration Optimization",
    description: "Below optimal water intake detected",
    status: "active",
    progress: 45,
    recommendation: "Drink 2 more glasses of water today",
    icon: Droplet,
    color: "from-cyan-100 to-cyan-50",
    borderColor: "border-cyan-300",
    textColor: "text-cyan-900",
  },
  {
    id: 3,
    title: "Sleep Quality Enhancement",
    description: "Irregular sleep pattern detected",
    status: "active",
    progress: 72,
    recommendation: "Maintain consistent bedtime (10 PM)",
    icon: Clock,
    color: "from-indigo-100 to-indigo-50",
    borderColor: "border-indigo-300",
    textColor: "text-indigo-900",
  },
]

const automationRules = [
  {
    id: 1,
    name: "Morning Health Check",
    trigger: "Every day at 7:00 AM",
    action: "Send health summary and daily goals",
    enabled: true,
  },
  {
    id: 2,
    name: "Medication Reminder",
    trigger: "Daily at 8:00 AM & 8:00 PM",
    action: "Remind to take medications",
    enabled: true,
  },
  {
    id: 3,
    name: "Activity Alert",
    trigger: "No movement for 2 hours",
    action: "Suggest a 5-minute walk",
    enabled: true,
  },
  {
    id: 4,
    name: "Hydration Reminder",
    trigger: "Every 2 hours",
    action: "Remind to drink water",
    enabled: true,
  },
  {
    id: 5,
    name: "Sleep Preparation",
    trigger: "Every day at 9:30 PM",
    action: "Prepare for sleep with relaxation tips",
    enabled: false,
  },
]

const emergencyProtocols = [
  {
    condition: "Heart Rate > 120 bpm",
    action: "Alert user and suggest rest",
    severity: "high",
  },
  {
    condition: "Blood Pressure > 140/90",
    action: "Recommend medical consultation",
    severity: "high",
  },
  {
    condition: "Oxygen Level < 95%",
    action: "Alert and suggest fresh air",
    severity: "critical",
  },
  {
    condition: "Temperature > 38.5°C",
    action: "Recommend fever management",
    severity: "high",
  },
]

const interventionPrograms = [
  {
    icon: Brain,
    title: "Stress Reduction Coach",
    description: "AI-powered stress management with personalized techniques",
    features: ["Guided meditation", "Breathing exercises", "Stress tracking"],
    color: "from-orange-100 to-orange-50",
    borderColor: "border-orange-300",
    textColor: "text-orange-900",
    iconColor: "text-orange-600",
  },
  {
    icon: Heart,
    title: "Cardiovascular Optimizer",
    description: "Personalized heart health improvement program",
    features: ["Exercise plans", "Diet recommendations", "Progress tracking"],
    color: "from-red-100 to-red-50",
    borderColor: "border-red-300",
    textColor: "text-red-900",
    iconColor: "text-red-600",
  },
  {
    icon: Activity,
    title: "Fitness Accelerator",
    description: "AI-optimized workout and activity recommendations",
    features: ["Custom workouts", "Form guidance", "Performance metrics"],
    color: "from-green-100 to-green-50",
    borderColor: "border-green-300",
    textColor: "text-green-900",
    iconColor: "text-green-600",
  },
  {
    icon: Pill,
    title: "Medication Manager",
    description: "Smart medication optimization and adherence tracking",
    features: ["Dosage optimization", "Drug interactions", "Refill alerts"],
    color: "from-blue-100 to-blue-50",
    borderColor: "border-blue-300",
    textColor: "text-blue-900",
    iconColor: "text-blue-600",
  },
  {
    icon: Wind,
    title: "Environmental Shield",
    description: "Air quality monitoring and environmental health alerts",
    features: ["Air quality alerts", "Pollen tracking", "Weather impact"],
    color: "from-yellow-100 to-yellow-50",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-900",
    iconColor: "text-yellow-600",
  },
  {
    icon: Shield,
    title: "Immunity Booster",
    description: "Personalized immune system strengthening program",
    features: ["Nutrition plans", "Supplement tracking", "Wellness tips"],
    color: "from-purple-100 to-purple-50",
    borderColor: "border-purple-300",
    textColor: "text-purple-900",
    iconColor: "text-purple-600",
  },
]

export function Intervention() {
  const [expandedRule, setExpandedRule] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Intelligent Intervention & Automation</h1>
        <p className="text-slate-600">AI-powered health optimization and automated wellness management</p>
      </div>

      {/* Active Interventions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Active Interventions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeInterventions.map((intervention) => {
            const Icon = intervention.icon
            return (
              <Card
                key={intervention.id}
                className={`bg-gradient-to-br ${intervention.color} ${intervention.borderColor} p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${intervention.textColor}`} />
                  <h3 className={`font-semibold ${intervention.textColor}`}>{intervention.title}</h3>
                </div>
                <p className={`text-sm ${intervention.textColor} opacity-80 mb-3`}>{intervention.description}</p>
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium text-slate-700">Progress</span>
                    <span className="text-xs font-bold text-slate-900">{intervention.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${intervention.progress}%` }}
                    />
                  </div>
                </div>
                <div className="bg-white/50 rounded p-2 mb-3">
                  <p className="text-xs text-slate-700">
                    <span className="font-semibold">Recommendation:</span> {intervention.recommendation}
                  </p>
                </div>
                <Button className="w-full text-xs bg-transparent" variant="outline">
                  View Details
                </Button>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Intervention Programs */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Intervention Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interventionPrograms.map((program, idx) => {
            const Icon = program.icon
            return (
              <Card
                key={idx}
                className={`bg-gradient-to-br ${program.color} ${program.borderColor} p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-6 h-6 ${program.iconColor}`} />
                  <h3 className={`font-semibold ${program.textColor}`}>{program.title}</h3>
                </div>
                <p className={`text-sm ${program.textColor} opacity-80 mb-4`}>{program.description}</p>
                <div className="space-y-2 mb-4">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${program.iconColor}`} />
                      <span className="text-xs text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full text-xs bg-transparent" variant="outline">
                  Enroll Now
                </Button>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Automation Rules */}
      <Card className="bg-white border-slate-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-slate-900">Automation Rules</h3>
          </div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Add Rule
          </Button>
        </div>
        <div className="space-y-3">
          {automationRules.map((rule) => (
            <div
              key={rule.id}
              className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 cursor-pointer transition-colors"
              onClick={() => setExpandedRule(expandedRule === rule.id ? null : rule.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-slate-900">{rule.name}</h4>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        rule.enabled ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {rule.enabled ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>
                      <span className="font-medium">Trigger:</span> {rule.trigger}
                    </p>
                    <p>
                      <span className="font-medium">Action:</span> {rule.action}
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Emergency Protocols */}
      <Card className="bg-gradient-to-r from-red-100 to-orange-100 border-red-300 p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h3 className="text-xl font-semibold text-red-900">Emergency Protocols</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyProtocols.map((protocol, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border-l-4 ${
                protocol.severity === "critical" ? "border-red-600 bg-red-50" : "border-orange-600 bg-orange-50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{protocol.condition}</p>
                  <p className="text-sm text-slate-700 mt-1">{protocol.action}</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-bold rounded ${
                    protocol.severity === "critical" ? "bg-red-200 text-red-800" : "bg-orange-200 text-orange-800"
                  }`}
                >
                  {protocol.severity.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Status */}
        <Card className="bg-white border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-slate-900">System Status</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">AI Engine Status</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Automation Rules</span>
              <span className="text-sm font-bold text-slate-900">5 Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Active Interventions</span>
              <span className="text-sm font-bold text-slate-900">3 Running</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Last Update</span>
              <span className="text-sm font-bold text-slate-900">2 min ago</span>
            </div>
          </div>
        </Card>

        {/* AI Recommendations */}
        <Card className="bg-white border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-slate-900">AI Recommendations</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm font-medium text-slate-900">Increase Exercise</p>
              <p className="text-xs text-slate-600 mt-1">Your activity level is 15% below optimal</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="text-sm font-medium text-slate-900">Sleep Quality Improving</p>
              <p className="text-xs text-slate-600 mt-1">Continue current sleep schedule for best results</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <p className="text-sm font-medium text-slate-900">Nutrition Optimization</p>
              <p className="text-xs text-slate-600 mt-1">Add more fiber to your diet for better digestion</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm font-medium text-slate-900">Stress Management</p>
              <p className="text-xs text-slate-600 mt-1">Practice meditation 3x weekly for optimal results</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
