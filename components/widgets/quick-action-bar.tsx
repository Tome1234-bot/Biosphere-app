"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Calendar, Pill } from "lucide-react"

export function QuickActionBar() {
  return (
    <Card className="bg-white border-slate-200 p-6 mb-6">
      <h3 className="text-sm font-semibold text-slate-600 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Phone className="w-4 h-4" />
          <span>Call Doctor</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <MessageSquare className="w-4 h-4" />
          <span>Message</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Pill className="w-4 h-4" />
          <span>Refill Meds</span>
        </Button>
      </div>
    </Card>
  )
}
