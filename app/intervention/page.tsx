"use client"

import { Sidebar } from "@/components/sidebar"
import { Intervention } from "@/components/pages/intervention"

export default function InterventionPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Intervention />
      </main>
    </div>
  )
}
