"use client"

interface CircularProgressProps {
  value: number
  size?: number
  color?: string
}

export function CircularProgress({ value, size = 100, color = "text-blue-500" }: CircularProgressProps) {
  const radius = (size - 8) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        className="text-slate-200"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={color}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
    </svg>
  )
}
