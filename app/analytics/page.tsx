"use client"

import { Sidebar } from "@/components/sidebar"
import { Analytics } from "@/components/pages/analytics"

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Analytics />
      </main>
    </div>
  )
}
