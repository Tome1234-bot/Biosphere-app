"use client"

import { Sidebar } from "@/components/sidebar"
import { Services } from "@/components/pages/services"

export default function ServicesPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Services />
      </main>
    </div>
  )
}
