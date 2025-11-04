import { Sidebar } from "@/components/sidebar"
import { Monitoring } from "@/components/pages/monitoring"

export default function MonitoringPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Monitoring />
      </main>
    </div>
  )
}
