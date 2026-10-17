'use client'

import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface ChartData {
  grade: string
  count: number
}

const COLORS = ['#1E4D3B', '#25855A', '#38A169', '#ECC94B', '#E53E3E']

export default function GradeDistributionChart({ data }: { data: ChartData[] }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-80 animate-pulse bg-slate-50" />
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <h4 className="text-lg font-bold text-slate-800 mb-4">ระดับผลสัมฤทธิ์ (จำนวนนักเรียนในแต่ละระดับ)</h4>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="grade" stroke="#718096" fontSize={12} />
            <YAxis stroke="#718096" allowDecimals={false} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1A202C', color: '#FFF', borderRadius: '10px' }}
              formatter={(value: any) => [`${value} คน`, 'จำนวนนักเรียน']}
            />
            <Bar dataKey="count" radius={[8, 8, 0, 0]}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}