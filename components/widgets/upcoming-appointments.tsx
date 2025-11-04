"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

export function UpcomingAppointments() {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "Tomorrow",
      time: "2:00 PM",
      location: "Medical Center",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Neurologist",
      date: "Friday",
      time: "10:30 AM",
      location: "Downtown Clinic",
    },
  ]

  return (
    <Card className="bg-white border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Upcoming Appointments</h3>
      <div className="space-y-4">
        {appointments.map((apt) => (
          <div key={apt.id} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-semibold text-slate-900">{apt.doctor}</p>
                <p className="text-sm text-slate-600">{apt.specialty}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{apt.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{apt.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{apt.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
