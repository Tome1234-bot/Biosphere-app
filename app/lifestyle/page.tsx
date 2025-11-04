"use client"

import { Sidebar } from "@/components/sidebar"
import { Lifestyle } from "@/components/pages/lifestyle"

export default function LifestylePage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Lifestyle />
      </main>
    </div>
  )
}
