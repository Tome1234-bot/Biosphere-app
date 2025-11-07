interface DataPoint {
  label: string
  value: number
}

interface LineChartProps {
  data: DataPoint[]
  color: string
  height?: number
}

export function LineChart({ data, color, height = 200 }: LineChartProps) {
  if (data.length === 0) return null

  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue || 1

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - ((d.value - minValue) / range) * 100
    return { x, y, ...d }
  })

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ height }}>
      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map((y) => (
        <line key={`grid-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
      ))}
      {/* Line */}
      <path d={pathD} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
      {/* Fill under line */}
      <path d={`${pathD} L 100 100 L 0 100 Z`} fill={color} opacity="0.1" />
      {/* Data points */}
      {points.map((p, i) => (
        <circle key={`point-${i}`} cx={p.x} cy={p.y} r="1.5" fill={color} />
      ))}
    </svg>
  )
}
