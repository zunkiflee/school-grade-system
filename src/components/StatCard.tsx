import React from 'react'

interface StatCardProps {
  title: string
  value: string | number
  subText?: string
  icon?: string
  colorStyle?: 'primary' | 'success' | 'warning' | 'danger'
}

export default function StatCard({ title, value, subText, icon, colorStyle = 'primary' }: StatCardProps) {
  const bgColors = {
    primary: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    danger: 'bg-rose-50 border-rose-200 text-rose-900'
  }

  return (
    <div className={`p-5 rounded-2xl border ${bgColors[colorStyle]} shadow-sm flex items-center justify-between`}>
      <div>
        <p className="text-sm font-medium opacity-80">{title}</p>
        <h3 className="text-3xl font-bold mt-1">{value}</h3>
        {subText && <p className="text-xs mt-1 opacity-70">{subText}</p>}
      </div>
      {icon && <div className="text-3xl">{icon}</div>}
    </div>
  )
}