"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function SubscriptionPage() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      features: ["Health Dashboard", "Basic Monitoring", "Mobile App"],
      color: "from-yellow-100 to-yellow-50",
      borderColor: "border-yellow-300",
    },
    {
      name: "Pro",
      price: "$29.99",
      period: "/month",
      features: ["All Basic Features", "Advanced Analytics", "Virtual Consultations", "Family Sharing"],
      color: "from-blue-100 to-blue-50",
      borderColor: "border-blue-300",
      popular: true,
    },
    {
      name: "Premium",
      price: "$59.99",
      period: "/month",
      features: ["All Pro Features", "AI Health Coach", "Priority Support", "Genetic Testing"],
      color: "from-purple-100 to-purple-50",
      borderColor: "border-purple-300",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Subscription Plans</h1>
            <p className="text-slate-600">Choose the perfect plan for your health journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-gradient-to-br ${plan.color} ${plan.borderColor} p-6 ${
                  plan.popular ? "ring-2 ring-blue-500 transform scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  {plan.popular ? "Current Plan" : "Upgrade"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
