'use client'

import React from 'react'
import { Student } from '@/types'

interface StudentTableProps {
  students: Student[]
  className: string
}

export default function StudentTable({ students, className }: StudentTableProps) {
  const maleCount = students.filter(s => s.gender === 'ช' || s.gender === 'ชาย').length
  const femaleCount = students.filter(s => s.gender === 'ญ' || s.gender === 'หญิง').length

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800">รายชื่อนักเรียน ชั้น {className}</h3>
          <p className="text-xs text-slate-500">จำนวนนักเรียนทั้งหมด {students.length} คน</p>
        </div>
        <div className="flex gap-2 text-xs font-semibold">
          <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-100">
            👦 ชาย {maleCount} คน
          </span>
          <span className="bg-pink-50 text-pink-700 px-3 py-1.5 rounded-lg border border-pink-100">
            👧 หญิง {femaleCount} คน
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 font-medium bg-slate-50">
              <th className="py-3 px-4 text-center w-12">ลำดับ</th>
              <th className="py-3 px-4">เลขประจำตัว</th>
              <th className="py-3 px-4">เลขบัตรประชาชน</th>
              <th className="py-3 px-4 text-center">เพศ</th>
              <th className="py-3 px-4">ชื่อ - นามสกุล</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {students.map((student, index) => (
              <tr key={student.student_id || index} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 text-center text-slate-400 font-mono">{index + 1}</td>
                <td className="py-3 px-4 font-mono font-semibold text-emerald-900">{student.student_id}</td>
                <td className="py-3 px-4 font-mono text-slate-500">{student.id_card || '-'}</td>
                <td className="py-3 px-4 text-center font-semibold">
                  <span className={student.gender === 'ช' || student.gender === 'ชาย' ? 'text-blue-600' : 'text-pink-600'}>
                    {student.gender}
                  </span>
                </td>
                <td className="py-3 px-4 font-medium">{student.full_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}