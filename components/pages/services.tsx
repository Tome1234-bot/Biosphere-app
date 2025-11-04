"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Calendar,
  FileText,
  Users,
  Pill,
  Star,
  Clock,
  MapPin,
  Video,
  MessageSquare,
  CheckCircle2,
} from "lucide-react"
import { useState } from "react"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Practitioner",
    rating: 4.9,
    reviews: 234,
    available: true,
    nextAvailable: "Today, 2:00 PM",
    image: "👩‍⚕️",
    experience: "12 years",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    rating: 4.8,
    reviews: 189,
    available: true,
    nextAvailable: "Tomorrow, 10:00 AM",
    image: "👨‍⚕️",
    experience: "15 years",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Nutritionist",
    rating: 4.7,
    reviews: 156,
    available: false,
    nextAvailable: "In 2 days",
    image: "👩‍⚕️",
    experience: "8 years",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Mental Health Counselor",
    rating: 4.9,
    reviews: 267,
    available: true,
    nextAvailable: "Today, 4:00 PM",
    image: "👨‍⚕️",
    experience: "10 years",
  },
]

const services = [
  {
    icon: Phone,
    title: "Instant Consultation",
    description: "Connect with a doctor within 5 minutes",
    color: "from-teal-100 to-teal-50",
    borderColor: "border-teal-300",
    textColor: "text-teal-900",
    iconColor: "text-teal-600",
  },
  {
    icon: Video,
    title: "Video Consultation",
    description: "Face-to-face consultation via secure video",
    color: "from-cyan-100 to-cyan-50",
    borderColor: "border-cyan-300",
    textColor: "text-cyan-900",
    iconColor: "text-cyan-600",
  },
  {
    icon: MessageSquare,
    title: "Chat Support",
    description: "Text-based consultation with healthcare professionals",
    color: "from-blue-100 to-blue-50",
    borderColor: "border-blue-300",
    textColor: "text-blue-900",
    iconColor: "text-blue-600",
  },
  {
    icon: Calendar,
    title: "Schedule Appointment",
    description: "Book appointments with specialists",
    color: "from-purple-100 to-purple-50",
    borderColor: "border-purple-300",
    textColor: "text-purple-900",
    iconColor: "text-purple-600",
  },
  {
    icon: FileText,
    title: "Medical Records",
    description: "Access your complete medical history",
    color: "from-green-100 to-green-50",
    borderColor: "border-green-300",
    textColor: "text-green-900",
    iconColor: "text-green-600",
  },
  {
    icon: Pill,
    title: "Prescription Management",
    description: "Manage and refill prescriptions online",
    color: "from-orange-100 to-orange-50",
    borderColor: "border-orange-300",
    textColor: "text-orange-900",
    iconColor: "text-orange-600",
  },
]

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "General Practitioner",
    date: "Today",
    time: "2:00 PM",
    type: "Video Call",
    status: "confirmed",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Cardiologist",
    date: "Tomorrow",
    time: "10:00 AM",
    type: "In-Person",
    status: "confirmed",
  },
]

export function Services() {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Virtual Health Services</h1>
        <p className="text-slate-600">Connect with healthcare professionals instantly and manage your health</p>
      </div>

      {/* Quick Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {services.map((service, idx) => {
          const Icon = service.icon
          return (
            <Card
              key={idx}
              className={`bg-gradient-to-br ${service.color} ${service.borderColor} p-6 cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`w-6 h-6 ${service.iconColor}`} />
                <h3 className={`font-semibold ${service.textColor}`}>{service.title}</h3>
              </div>
              <p className={`text-sm ${service.textColor} opacity-80 mb-4`}>{service.description}</p>
              <Button className="w-full text-xs bg-transparent" variant="outline">
                Get Started
              </Button>
            </Card>
          )
        })}
      </div>

      {/* Upcoming Appointments */}
      <Card className="bg-white border-slate-200 p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-slate-900">Upcoming Appointments</h3>
        </div>
        <div className="space-y-3">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((apt) => (
              <div
                key={apt.id}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{apt.doctor}</p>
                  <p className="text-sm text-slate-600">{apt.specialty}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {apt.date} at {apt.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Video className="w-4 h-4" />
                      {apt.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Confirmed
                  </span>
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-600 text-center py-4">No upcoming appointments</p>
          )}
        </div>
      </Card>

      {/* Available Doctors */}
      <Card className="bg-white border-slate-200 p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-semibold text-slate-900">Available Healthcare Professionals</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedDoctor === doctor.id ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-slate-300"
              }`}
              onClick={() => setSelectedDoctor(selectedDoctor === doctor.id ? null : doctor.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{doctor.image}</div>
                  <div>
                    <p className="font-semibold text-slate-900">{doctor.name}</p>
                    <p className="text-sm text-slate-600">{doctor.specialty}</p>
                  </div>
                </div>
                {doctor.available && <CheckCircle2 className="w-5 h-5 text-green-500" />}
              </div>

              <div className="space-y-2 mb-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>
                    {doctor.rating} ({doctor.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{doctor.experience} experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {doctor.available
                      ? `Available: ${doctor.nextAvailable}`
                      : `Next available: ${doctor.nextAvailable}`}
                  </span>
                </div>
              </div>

              {selectedDoctor === doctor.id && (
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Consultation</Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    View Profile
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Service Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Why Choose Our Services */}
        <Card className="bg-white border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Choose Our Services</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">Licensed Professionals</p>
                <p className="text-sm text-slate-600">All doctors are verified and licensed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">Secure & Private</p>
                <p className="text-sm text-slate-600">HIPAA compliant and encrypted communications</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">24/7 Availability</p>
                <p className="text-sm text-slate-600">Access healthcare anytime, anywhere</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">Affordable Pricing</p>
                <p className="text-sm text-slate-600">Competitive rates with insurance support</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Consultation Process */}
        <Card className="bg-white border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">How It Works</h3>
          <div className="space-y-4">
            {[
              { step: 1, title: "Select Service", desc: "Choose your preferred consultation type" },
              { step: 2, title: "Pick a Doctor", desc: "Browse and select from available professionals" },
              { step: 3, title: "Schedule Time", desc: "Choose a convenient time slot" },
              { step: 4, title: "Connect", desc: "Join your consultation via video or chat" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-semibold text-sm">
                    {item.step}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Prescription Management */}
      <Card className="bg-gradient-to-r from-green-100 to-emerald-100 border-green-300 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Pill className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-semibold text-green-900">Prescription Management</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-900 mb-2">Active Prescriptions</p>
            <p className="text-2xl font-bold text-green-600">3</p>
            <p className="text-xs text-slate-600 mt-1">All up to date</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-900 mb-2">Refills Available</p>
            <p className="text-2xl font-bold text-blue-600">2</p>
            <p className="text-xs text-slate-600 mt-1">Request refills online</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-900 mb-2">Pharmacy Partners</p>
            <p className="text-2xl font-bold text-purple-600">50+</p>
            <p className="text-xs text-slate-600 mt-1">Nationwide coverage</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
