'use client'

import React, { useRef } from 'react'
import StatCard from '@/components/StatCard'
import GradeDistributionChart from '@/components/GradeDistributionChart'
import { Printer, Download } from 'lucide-react'

export default function TeacherDashboardPage() {
  const printRef = useRef<HTMLDivElement>(null)

  // ตัวอย่างข้อมูล Mockup (จำลองข้อมูลจริงจาก Supabase)
  const roomInfo = { className: 'ประถมศึกษาปีที่ 1/1', year: '2569', semester: '1' }
  const stats = { totalStudents: 35, avgScore: 33.43, maxScore: 40, minScore: 27, atRiskCount: 6 }

  const gradeChartData = [
    { grade: 'ดีเยี่ยม (35-40)', count: 16 },
    { grade: 'ดี (30-34)', count: 13 },
    { grade: 'พอใช้ (25-29)', count: 6 },
    { grade: 'ปรับปรุง (0-24)', count: 0 },
  ]

  const atRiskStudents = [
    { id: '18293', name: 'ด.ช. แวมูฮัมหมัดซาบูดิง', score: 27, status: 'ต้องพัฒนาการอ่านสะกดคำ' },
    { id: '18296', name: 'ด.ช. อับดุลเลาะห์', score: 28, status: 'ต้องพัฒนาคำศัพท์' },
  ]

  // ฟังก์ชันสั่งพิมพ์ออกเป็นเอกสาร PDF
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      
      {/* Header และ ปุ่มพิมพ์ */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            สรุปผลสัมฤทธิ์ทางการเรียน {roomInfo.className}
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            ภาคเรียนที่ {roomInfo.semester} ปีการศึกษา {roomInfo.year} | โรงเรียนจงรักสัตย์วิทยา
          </p>
        </div>

        <div className="flex gap-3 print:hidden">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-md hover:shadow-lg"
          >
            <Printer size={18} /> พิมพ์ / ส่งออก PDF
          </button>
        </div>
      </div>

      {/* ขอบเขตพื้นที่สำหรับการพิมพ์ (Print Area) */}
      <div ref={printRef} className="max-w-6xl mx-auto space-y-6 print:p-0">
        
        {/* ส่วนที่ 1: KPI Cards สรุปตัวเลข */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="นักเรียนทั้งหมด" value={`${stats.totalStudents} คน`} icon="👨‍🎓" colorStyle="primary" />
          <StatCard title="คะแนนเฉลี่ยรวม" value={stats.avgScore} subText="คิดเป็น 83.57%" icon="📈" colorStyle="success" />
          <StatCard title="คะแนน สูงสุด / ต่ำสุด" value={`${stats.maxScore} / ${stats.minScore}`} icon="🏆" colorStyle="warning" />
          <StatCard title="กลุ่มที่ต้องพัฒนา" value={`${stats.atRiskCount} คน`} subText="คะแนนต่ำกว่าเกณฑ์ 30" icon="⚠️" colorStyle="danger" />
        </div>

        {/* ส่วนที่ 2: กราฟแท่งระดับผลสัมฤทธิ์ */}
        <GradeDistributionChart data={gradeChartData} />

        {/* ส่วนที่ 3: ตารางกลุ่มนักเรียนที่ต้องพัฒนา */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span>🔴</span> รายชื่อนักเรียนกลุ่มที่ต้องพัฒนา (คะแนนต่ำกว่า 30 คะแนน)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-medium text-sm">
                  <th className="py-3 px-4">เลขประจำตัว</th>
                  <th className="py-3 px-4">ชื่อ - นามสกุล</th>
                  <th className="py-3 px-4 text-center">คะแนนที่ได้</th>
                  <th className="py-3 px-4">แนวทางพัฒนา / จุดเฝ้าระวัง</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                {atRiskStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono">{student.id}</td>
                    <td className="py-3 px-4 font-semibold">{student.name}</td>
                    <td className="py-3 px-4 text-center font-bold text-rose-600">{student.score}</td>
                    <td className="py-3 px-4">{student.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ส่วนที่ 4: บันทึกเป้าหมายและการส่งเสริม */}
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
          <h4 className="text-md font-bold text-emerald-900 mb-2">🎯 เป้าหมายการพัฒนาในภาคเรียนถัดไป</h4>
          <p className="text-sm text-emerald-800 leading-relaxed">
            มุ่งพัฒนานักเรียนกลุ่มที่มีคะแนนต่ำกว่า 30 คะแนน จำนวน 6 คน ให้มีความรู้และทักษะพื้นฐานเพิ่มขึ้น 
            โดยเน้นการซ่อมเสริมรายบุคคลด้านการอ่าน สะกดคำ และการฝึกจำคำศัพท์อย่างต่อเนื่อง
          </p>
        </div>

      </div>
    </div>
  )
}