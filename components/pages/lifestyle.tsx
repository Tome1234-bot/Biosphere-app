"use client"

import { Card } from "@/components/ui/card"
import { Apple, Moon, Brain, Zap, CheckCircle2, AlertCircle } from "lucide-react"
import {
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const nutritionData = [
  { day: "Mon", calories: 1950, protein: 70, carbs: 220, fat: 65 },
  { day: "Tue", calories: 1850, protein: 68, carbs: 210, fat: 62 },
  { day: "Wed", calories: 2050, protein: 72, carbs: 230, fat: 68 },
  { day: "Thu", calories: 1900, protein: 69, carbs: 215, fat: 64 },
  { day: "Fri", calories: 2100, protein: 75, carbs: 240, fat: 70 },
  { day: "Sat", calories: 2200, protein: 76, carbs: 250, fat: 72 },
  { day: "Sun", calories: 1800, protein: 65, carbs: 200, fat: 60 },
]

const sleepData = [
  { day: "Mon", hours: 7.2, quality: 85 },
  { day: "Tue", hours: 6.8, quality: 78 },
  { day: "Wed", hours: 7.5, quality: 88 },
  { day: "Thu", hours: 7.1, quality: 82 },
  { day: "Fri", hours: 6.5, quality: 75 },
  { day: "Sat", hours: 8.2, quality: 92 },
  { day: "Sun", hours: 7.8, quality: 90 },
]

const activityData = [
  { day: "Mon", steps: 8234, calories: 450, workouts: 1 },
  { day: "Tue", steps: 9102, calories: 520, workouts: 1 },
  { day: "Wed", steps: 7856, calories: 420, workouts: 0 },
  { day: "Thu", steps: 10234, calories: 580, workouts: 2 },
  { day: "Fri", steps: 8945, calories: 490, workouts: 1 },
  { day: "Sat", steps: 12456, calories: 680, workouts: 2 },
  { day: "Sun", steps: 6234, calories: 350, workouts: 0 },
]

const moodData = [
  { name: "Happy", value: 45, color: "#10b981" },
  { name: "Neutral", value: 35, color: "#6b7280" },
  { name: "Stressed", value: 15, color: "#ef4444" },
  { name: "Anxious", value: 5, color: "#f59e0b" },
]

const behaviorTracking = [
  { behavior: "Morning Exercise", adherence: 85, target: 90, status: "on-track" },
  { behavior: "Meditation", adherence: 72, target: 80, status: "needs-improvement" },
  { behavior: "Healthy Eating", adherence: 88, target: 90, status: "on-track" },
  { behavior: "Sleep Schedule", adherence: 78, target: 85, status: "needs-improvement" },
  { behavior: "Water Intake", adherence: 92, target: 90, status: "excellent" },
  { behavior: "Social Time", adherence: 65, target: 75, status: "needs-improvement" },
]

export function Lifestyle() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Lifestyle & Behavioral Tracking</h1>
        <p className="text-slate-600">Monitor your daily habits, behaviors, and wellness patterns</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Today's Steps</p>
              <p className="text-3xl font-bold text-green-900 mt-2">8,234</p>
              <p className="text-xs text-green-600 mt-1">82% of goal</p>
            </div>
            <Zap className="w-8 h-8 text-green-500 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-100 to-indigo-50 border-indigo-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-indigo-700 font-medium">Last Night Sleep</p>
              <p className="text-3xl font-bold text-indigo-900 mt-2">7.5h</p>
              <p className="text-xs text-indigo-600 mt-1">Excellent quality</p>
            </div>
            <Moon className="w-8 h-8 text-indigo-500 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-100 to-orange-50 border-orange-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-700 font-medium">Calories Burned</p>
              <p className="text-3xl font-bold text-orange-900 mt-2">450</p>
              <p className="text-xs text-orange-600 mt-1">1 workout today</p>
            </div>
            <Apple className="w-8 h-8 text-orange-500 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-pink-100 to-pink-50 border-pink-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-pink-700 font-medium">Mood Score</p>
              <p className="text-3xl font-bold text-pink-900 mt-2">8.2/10</p>
              <p className="text-xs text-pink-600 mt-1">Positive trend</p>
            </div>
            <Brain className="w-8 h-8 text-pink-500 opacity-50" />
          </div>
        </Card>
      </div>

      {/* Nutrition Tracking */}
      <Card className="bg-white border-slate-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Apple className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-semibold text-slate-900">Weekly Nutrition Tracking</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={nutritionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calories" fill="#10b981" name="Calories" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Protein</span>
                <span className="text-sm font-bold text-slate-900">70g / 75g</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: "93%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Carbohydrates</span>
                <span className="text-sm font-bold text-slate-900">220g / 250g</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "88%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Fat</span>
                <span className="text-sm font-bold text-slate-900">65g / 70g</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "93%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Water Intake</span>
                <span className="text-sm font-bold text-slate-900">6 / 8 glasses</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Sleep & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sleep Tracking */}
        <Card className="bg-white border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Moon className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-slate-900">Sleep Patterns</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <RechartsLineChart data={sleepData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hours" stroke="#4f46e5" strokeWidth={2} name="Hours" />
              <Line type="monotone" dataKey="quality" stroke="#10b981" strokeWidth={2} name="Quality %" />
            </RechartsLineChart>
          </ResponsiveContainer>
        </Card>

        {/* Activity Tracking */}
        <Card className="bg-white border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-orange-600" />
            <h3 className="text-xl font-semibold text-slate-900">Activity Levels</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="steps" fill="#f59e0b" name="Steps" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Mood & Mental Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Mood Distribution */}
        <Card className="bg-white border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-pink-600" />
            <h3 className="text-xl font-semibold text-slate-900">Mood Distribution (This Week)</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={moodData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {moodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Mental Health Details */}
        <Card className="bg-white border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-pink-600" />
            <h3 className="text-xl font-semibold text-slate-900">Mental Wellness</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="text-sm font-semibold text-slate-900">Stress Level</p>
              <p className="text-xs text-slate-600 mt-1">Low - Well managed</p>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }} />
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-sm font-semibold text-slate-900">Anxiety Level</p>
              <p className="text-xs text-slate-600 mt-1">Minimal - Controlled</p>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "15%" }} />
              </div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <p className="text-sm font-semibold text-slate-900">Emotional Balance</p>
              <p className="text-xs text-slate-600 mt-1">Positive - Stable</p>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "82%" }} />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Behavior Adherence */}
      <Card className="bg-white border-slate-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle2 className="w-6 h-6 text-teal-600" />
          <h3 className="text-xl font-semibold text-slate-900">Behavior Adherence Tracking</h3>
        </div>
        <div className="space-y-4">
          {behaviorTracking.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-slate-900">{item.behavior}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      item.status === "excellent"
                        ? "bg-green-100 text-green-700"
                        : item.status === "on-track"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status === "excellent"
                      ? "Excellent"
                      : item.status === "on-track"
                        ? "On Track"
                        : "Needs Improvement"}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.adherence >= 85 ? "bg-green-500" : item.adherence >= 75 ? "bg-blue-500" : "bg-yellow-500"
                    }`}
                    style={{ width: `${item.adherence}%` }}
                  />
                </div>
              </div>
              <div className="ml-4 text-right">
                <p className="text-sm font-bold text-slate-900">{item.adherence}%</p>
                <p className="text-xs text-slate-600">Target: {item.target}%</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recommendations */}
      <Card className="bg-gradient-to-r from-teal-100 to-green-100 border-teal-300 p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-teal-600" />
          <h3 className="text-xl font-semibold text-teal-900">Behavioral Insights & Recommendations</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-900 mb-2">Strengths</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>✓ Excellent water intake consistency</li>
              <li>✓ Strong nutrition adherence</li>
              <li>✓ Good sleep quality overall</li>
            </ul>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-900 mb-2">Areas for Improvement</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Increase meditation practice</li>
              <li>• Improve sleep consistency</li>
              <li>• Boost social interactions</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
