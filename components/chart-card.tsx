import type React from "react"
interface ChartCardProps {
  title: string
  children: React.ReactNode
  footer?: string
}

export function ChartCard({ title, children, footer }: ChartCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
      <h3 className="font-semibold text-slate-900 mb-4">{title}</h3>
      {children}
      {footer && <p className="text-xs text-slate-500 mt-4">{footer}</p>}
    </div>
  )
}
