interface CircularProgressProps {
  value: number // 0-100
  label: string
  subLabel?: string
  size?: number
  color: string
  thickness?: number
}

export function CircularProgress({ value, label, subLabel, size = 180, color, thickness = 8 }: CircularProgressProps) {
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={thickness} />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={thickness}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        {/* Center text */}
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-bold text-slate-900">{value}%</span>
          {subLabel && <span className="text-xs text-slate-500">{subLabel}</span>}
        </div>
      </div>
      <p className="mt-4 font-semibold text-slate-700 text-center">{label}</p>
    </div>
  )
}
