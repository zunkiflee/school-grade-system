'use client'

import React from 'react'

export default function AdminDashboardPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">แผงควบคุมผู้ดูแลระบบ (Admin Dashboard)</h1>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <p className="text-slate-600">ยินดีต้อนรับผู้ดูแลระบบ สามารถจัดการอนุมัติครูผู้ใช้งาน ชั้นเรียน และตั้งค่าปีการศึกษาได้ที่นี่</p>
      </div>
    </div>
  )
}