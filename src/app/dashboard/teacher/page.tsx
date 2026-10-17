'use client'

import React, { useState } from 'react'
import StatCard from '@/components/StatCard'
import GradeDistributionChart from '@/components/GradeDistributionChart'
import StudentTable from '@/components/StudentTable'
import { Student } from '@/types'
import { Printer, BookOpen, Moon } from 'lucide-react'

export default function TeacherDashboardPage() {
  const [roomInfo] = useState({
    className: 'ประถมศึกษาปีที่ 1/1',
    year: '2569',
    semester: '1',
  })

  const [stats] = useState({
    totalStudents: 35,
    avgScore: 33.43,
    maxScore: 40,
    minScore: 27,
    atRiskCount: 6,
  })

  const gradeChartData = [
    { grade: 'ดีเยี่ยม (35-40)', count: 16 },
    { grade: 'ดี (30-34)', count: 13 },
    { grade: 'พอใช้ (25-29)', count: 6 },
    { grade: 'ปรับปรุง (0-24)', count: 0 },
  ]

  // ตัวอย่างข้อมูลนักเรียนจำลองจาก data.csv
  const mockStudents: Student[] = [
    { id: 1, student_id: '18293', id_card: '1949400101457', prefix: 'เด็กชาย', first_name: 'รีฏูวาน', last_name: 'เปาะและ', full_name: 'เด็กชายรีฏูวาน เปาะและ', gender: 'ช' },
    { id: 2, student_id: '18296', id_card: '1949901227569', prefix: 'เด็กชาย', first_name: 'แวมูฮัมหมัดซาบูดิง', last_name: 'แวดือเระ', full_name: 'เด็กชายแวมูฮัมหมัดซาบูดิง แวดือเระ', gender: 'ช' },
    { id: 3, student_id: '18303', id_card: '1949901262381', prefix: 'เด็กหญิง', first_name: 'อัยริน', last_name: 'แซปูตะ', full_name: 'เด็กหญิงอัยริน แซปูตะ', gender: 'ญ' },
  ]

  const generalSubjects = [
    'ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์และเทคโนโลยี', 'ประวัติศาสตร์',
    'สังคมศึกษา', 'สุขศึกษา', 'พลศึกษา', 'ศิลปะ', 'การงานอาชีพ', 'ภาษาอังกฤษ'
  ]

  const islamicSubjects = [
    'อัลกุรฺอานและอัตตัฟซีร', 'อัลหะดีษ', 'อัลอะกีดะฮฺ', 'อัลฟิกฮฺ',
    'อัตตารีค', 'อัคลาค', 'ภาษาอาหรับ', 'ภาษามลายู'
  ]

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            สรุปผลสัมฤทธิ์ทางการเรียน {roomInfo.className}
          </h1>
          <p className="text-slate-500 font-medium text-sm mt-1">
            ภาคเรียนที่ {roomInfo.semester} ปีการศึกษา {roomInfo.year} | โรงเรียนจงรักสัตย์วิทยา
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="print:hidden flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-md"
        >
          <Printer size={18} /> พิมพ์ / ส่งออก PDF
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="นักเรียนทั้งหมด" value={`${stats.totalStudents} คน`} icon="👨‍🎓" colorStyle="primary" />
        <StatCard title="คะแนนเฉลี่ยรวม" value={stats.avgScore} subText="คิดเป็น 83.57%" icon="📈" colorStyle="success" />
        <StatCard title="คะแนน สูงสุด / ต่ำสุด" value={`${stats.maxScore} / ${stats.minScore}`} icon="🏆" colorStyle="warning" />
        <StatCard title="กลุ่มที่ต้องพัฒนา" value={`${stats.atRiskCount} คน`} subText="คะแนนต่ำกว่า 30" icon="⚠️" colorStyle="danger" />
      </div>

      <GradeDistributionChart data={gradeChartData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg mb-3">
            <BookOpen size={20} />
            <h3>วิชาสามัญ ({generalSubjects.length} วิชา)</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {generalSubjects.map((sub, idx) => (
              <span key={idx} className="bg-emerald-50 text-emerald-900 text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-100">
                {sub}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 text-teal-800 font-bold text-lg mb-3">
            <Moon size={20} />
            <h3>วิชาอิสลามศึกษา ({islamicSubjects.length} วิชา)</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {islamicSubjects.map((sub, idx) => (
              <span key={idx} className="bg-teal-50 text-teal-900 text-xs font-semibold px-3 py-1.5 rounded-lg border border-teal-100">
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>

      <StudentTable students={mockStudents} className={roomInfo.className} />
    </div>
  )
}