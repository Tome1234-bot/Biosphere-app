"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import {
  LayoutDashboard,
  Activity,
  TrendingUp,
  Leaf,
  Smartphone,
  AlertCircle,
  Lock,
  Users,
  Settings,
  Heart,
  CreditCard,
  Menu,
  X,
  LogOut,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Real-time Monitoring",
    href: "/monitoring",
    icon: Activity,
    color: "from-red-500 to-red-600",
  },
  {
    name: "Predictive Analytics",
    href: "/analytics",
    icon: TrendingUp,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Lifestyle Tracking",
    href: "/lifestyle",
    icon: Leaf,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Virtual Health Services",
    href: "/services",
    icon: Smartphone,
    color: "from-teal-500 to-teal-600",
  },
  {
    name: "Interventions",
    href: "/interventions",
    icon: AlertCircle,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Data & Privacy",
    href: "/privacy",
    icon: Lock,
    color: "from-sky-500 to-sky-600",
  },
  {
    name: "Family Network",
    href: "/family",
    icon: Users,
    color: "from-pink-500 to-pink-600",
  },
  {
    name: "Medical Records",
    href: "/medical",
    icon: Heart,
    color: "from-rose-500 to-rose-600",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    color: "from-gray-500 to-gray-600",
  },
  {
    name: "Subscription",
    href: "/subscription",
    icon: CreditCard,
    color: "from-amber-500 to-amber-600",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (!mobile) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavigate = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-700 flex items-center justify-between px-4 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-bold text-white tracking-tight">BioSigna</h1>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-slate-800 rounded-lg transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative w-64 h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-r border-slate-700/50 flex flex-col transition-transform duration-300 ease-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:translate-x-0 pt-16 lg:pt-0 shadow-2xl lg:shadow-lg`}
      >
        <div className="hidden lg:block p-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold tracking-tight">BioSigna</h1>
              <p className="text-xs text-slate-400 font-medium">Health Management</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavigate}
                className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                  isActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105 origin-left`
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white hover:translate-x-1"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-700/50 space-y-3 bg-gradient-to-t from-slate-950 to-transparent">
          <div className="flex items-center gap-3 px-4 py-3 bg-slate-800/40 rounded-lg hover:bg-slate-800/60 transition-all duration-200 cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-sm font-semibold text-white">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">John Doe</p>
              <p className="text-xs text-slate-400 truncate">Premium Member</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/40 hover:bg-red-500/20 hover:border-red-500/30 rounded-lg transition-all duration-200 border border-transparent hover:border-red-500/30">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Content Spacer */}
      {isMobile && <div className="h-16 lg:hidden" />}
    </>
  )
}
