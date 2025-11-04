"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Activity,
  TrendingUp,
  Leaf,
  Stethoscope,
  Zap,
  Lock,
  Users,
  Settings,
  Heart,
  CreditCard,
} from "lucide-react"

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard, color: "text-blue-500" },
  { href: "/monitoring", label: "Monitoring", icon: Activity, color: "text-red-500" },
  { href: "/analytics", label: "Analytics", icon: TrendingUp, color: "text-purple-600" },
  { href: "/lifestyle", label: "Lifestyle", icon: Leaf, color: "text-green-500" },
  { href: "/services", label: "Services", icon: Stethoscope, color: "text-teal-500" },
  { href: "/intervention", label: "Intervention", icon: Zap, color: "text-orange-500" },
  { href: "/privacy", label: "Privacy", icon: Lock, color: "text-blue-600" },
  { href: "/family", label: "Family", icon: Users, color: "text-pink-500" },
  { href: "/conditions", label: "Conditions", icon: Heart, color: "text-red-600" },
  { href: "/settings", label: "Settings", icon: Settings, color: "text-gray-500" },
  { href: "/subscription", label: "Subscription", icon: CreditCard, color: "text-yellow-500" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white border-r border-slate-700 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">HealthHub</h1>
            <p className="text-xs text-slate-400">Pro</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700/50"
              }`}
            >
              <Icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className="bg-slate-700/50 rounded-lg p-3 text-xs text-slate-300">
          <p className="font-semibold mb-1">Need Help?</p>
          <p>Contact support 24/7</p>
        </div>
      </div>
    </aside>
  )
}
