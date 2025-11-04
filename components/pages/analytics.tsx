"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, BarChart3, LineChart, AlertTriangle, Target, Zap } from "lucide-react"
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const riskData = [
  { name: "Cardiovascular", risk: 12, trend: "↑" },
  { name: "Diabetes", risk: 8, trend: "↓" },
  { name: "Respiratory", risk: 5, trend: "→" },
  { name: "Mental Health", risk: 15, trend: "↑" },
]

const trendData = [
  { month: "Jan", health: 72, fitness: 65, stress: 45 },
  { month: "Feb", health: 74, fitness: 68, stress: 42 },
  { month: "Mar", health: 76, fitness: 72, stress: 38 },
  { month: "Apr", health: 78, fitness: 75, stress: 35 },
  { month: "May", health: 80, fitness: 78, stress: 32 },
  { month: "Jun", health: 82, fitness: 82, stress: 28 },
]

const riskFactors = [
  { factor: "Sedentary lifestyle", severity: "high", impact: "Increases cardiovascular risk by 25%" },
  { factor: "Irregular sleep", severity: "medium", impact: "Affects metabolic health" },
  { factor: "High stress levels", severity: "high", impact: "Increases cortisol levels" },
  { factor: "Poor nutrition", severity: "medium", impact: "Impacts energy and immunity" },
]

export function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Predictive Analytics</h1>
        <p className="text-slate-600">AI-powered risk assessment and health forecasting</p>
      </div>

      {/* Risk Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-red-100 to-red-50 border-red-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-700 font-medium">Overall Risk Score</p>
              <p className="text-3xl font-bold text-red-900 mt-2">10%</p>
              <p className="text-xs text-red-600 mt-1">Low Risk</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Health Score</p>
              <p className="text-3xl font-bold text-green-900 mt-2">82</p>
              <p className="text-xs text-green-600 mt-1">Excellent</p>
            </div>
            <Zap className="w-8 h-8 text-green-500 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700 font-medium">Fitness Index</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">78</p>
              <p className="text-xs text-blue-600 mt-1">Good</p>
            </div>
            <Target className="w-8 h-8 text-blue-500 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-100 to-orange-50 border-orange-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-700 font-medium">Stress Level</p>
              <p className="text-3xl font-bold text-orange-900 mt-2">28%</p>
              <p className="text-xs text-orange-600 mt-1">Managed</p>
            </div>
            <LineChart className="w-8 h-8 text-orange-500 opacity-50" />
          </div>
        </Card>
      </div>

      {/* Disease Risk Scores */}
      <Card className="bg-white border-slate-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-semibold text-slate-900">Disease Risk Assessment</h3>
        </div>
        <div className="space-y-4">
          {riskData.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">{item.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">{item.risk}%</span>
                  <span
                    className={`text-sm font-bold ${item.trend === "↑" ? "text-red-600" : item.trend === "↓" ? "text-green-600" : "text-slate-600"}`}
                  >
                    {item.trend}
                  </span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    item.risk > 15 ? "bg-red-500" : item.risk > 10 ? "bg-orange-500" : "bg-green-500"
                  }`}
                  style={{ width: `${item.risk}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Trends Chart */}
      <Card className="bg-white border-slate-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-slate-900">6-Month Health Trends</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsLineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="health" stroke="#3b82f6" strokeWidth={2} name="Health Score" />
            <Line type="monotone" dataKey="fitness" stroke="#10b981" strokeWidth={2} name="Fitness Index" />
            <Line type="monotone" dataKey="stress" stroke="#f59e0b" strokeWidth={2} name="Stress Level" />
          </RechartsLineChart>
        </ResponsiveContainer>
      </Card>

      {/* Risk Factors & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Factors */}
        <Card className="bg-white border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-slate-900">Identified Risk Factors</h3>
          </div>
          <div className="space-y-4">
            {riskFactors.map((item, idx) => (
              <div key={idx} className="border-l-4 border-red-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-slate-900">{item.factor}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      item.severity === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-600">{item.impact}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Personalized Recommendations */}
        <Card className="bg-white border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-slate-900">Personalized Recommendations</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
              <p className="text-sm font-medium text-green-900">Increase Physical Activity</p>
              <p className="text-xs text-green-700 mt-1">Aim for 30 minutes of moderate exercise daily</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
              <p className="text-sm font-medium text-blue-900">Improve Sleep Quality</p>
              <p className="text-xs text-blue-700 mt-1">Maintain consistent sleep schedule (10 PM - 6 AM)</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded">
              <p className="text-sm font-medium text-purple-900">Stress Management</p>
              <p className="text-xs text-purple-700 mt-1">Practice meditation or yoga 3x per week</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded">
              <p className="text-sm font-medium text-orange-900">Nutrition Optimization</p>
              <p className="text-xs text-orange-700 mt-1">Increase fiber intake and reduce processed foods</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Health Horizon Report */}
      <Card className="bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-300 p-6 mt-6">
        <h3 className="text-xl font-semibold text-indigo-900 mb-4">12-Month Health Horizon</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-indigo-700 font-medium mb-2">Projected Outcome</p>
            <p className="text-lg font-bold text-indigo-900">Excellent Health</p>
            <p className="text-xs text-indigo-600 mt-1">If recommendations are followed</p>
          </div>
          <div>
            <p className="text-sm text-indigo-700 font-medium mb-2">Key Milestones</p>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Month 3: Fitness +20%</li>
              <li>• Month 6: Stress -40%</li>
              <li>• Month 12: Risk -50%</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-indigo-700 font-medium mb-2">Success Factors</p>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Consistency in exercise</li>
              <li>• Healthy eating habits</li>
              <li>• Regular monitoring</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
