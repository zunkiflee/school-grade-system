import Link from 'next/link'
import {
  GraduationCap,
  BarChart3,
  BookOpen,
  ArrowRight,
  UserPlus,
  LogIn,
  Users,
  FileSpreadsheet,
  Award,
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      {/* 1. HEADER / NAVBAR */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-800 text-white p-2 rounded-xl shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg text-emerald-950 block leading-none">
                โรงเรียนจงรักสัตย์วิทยา
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Chongraksatwittaya School
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="flex items-center gap-2 text-slate-700 hover:text-emerald-800 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
            >
              <LogIn className="w-4 h-4" />
              เข้าสู่ระบบ
            </Link>
            <Link
              href="/auth/register"
              className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              <UserPlus className="w-4 h-4" />
              สมัครสมาชิก
            </Link>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <main className="flex-1">
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-emerald-900/5 via-slate-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-emerald-200 shadow-sm">
              <Award className="w-4 h-4" />
              ระบบงานวิชาการและรายงานผลสัมฤทธิ์ยุคใหม่
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
              ระบบรายงานผลสัมฤทธิ์ทางการเรียน <br className="hidden sm:block" />
              <span className="text-emerald-800">เพื่อการพัฒนาผู้เรียนอย่างยั่งยืน</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ยกระดับการจัดการข้อมูลวิชาการสำหรับครูผู้สอนและผู้บริหาร ครอบคลุมทั้งวิชาสามัญและวิชาอิสลามศึกษา
              พร้อมระบบแสดงผลสัมฤทธิ์เชิงวิเคราะห์และส่งออกรายงาน ปพ.6 ได้อย่างรวดเร็ว
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/auth/login"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl"
              >
                เข้าสู่ระบบสำหรับครู <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/auth/register"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-sm"
              >
                ลงทะเบียนครูผู้ใช้งาน
              </Link>
            </div>
          </div>
        </section>

        {/* 3. QUICK STATS */}
        <section className="py-10 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800">1,600+</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">นักเรียนระดับ ป.1 - ป.6</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800">100+</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">คณะครูและบุคลากร</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-800">19</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">วิชาสามัญ & อิสลามศึกษา</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800">100%</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">ระบบวิเคราะห์แบบดิจิทัล</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURES GRID */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              คุณสมบัติเด่นของระบบรายงานผลสัมฤทธิ์
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              ออกแบบมาเพื่อตอบโจทย์งานวิชาการของโรงเรียนจงรักสัตย์วิทยาโดยเฉพาะ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">รองรับ 2 หมวดวิชา</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                บริหารจัดการข้อมูลทั้งกลุ่มสาระวิชาสามัญ (10-11 วิชา) และหมวดวิชาอิสลามศึกษา (8 วิชา) ได้อย่างเป็นระบบ
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Dashboard แสดงผลสัมฤทธิ์</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                แสดงสถิติผลการเรียน การกระจายตัวของเกรด และคะแนนเฉลี่ยประจำห้องเรียนด้วยกราฟแบบ Micro View
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">คัดกรองกลุ่มต้องพัฒนา</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                จำแนกรายชื่อนักเรียนที่มีคะแนนต่ำกว่าเกณฑ์อัตโนมัติ เพื่อวางแผนซ่อมเสริมและติดตามรายบุคคล
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">ส่งออก PDF / ปพ.6 ง่าย</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                รองรับการสั่งพิมพ์และบันทึกรายงานสรุปเป็นเอกสาร PDF สำหรับรายงานผู้บริหารหรือแนบเล่ม SAR
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-emerald-950 text-emerald-200 py-10 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-emerald-400" />
            <div>
              <p className="font-bold text-white text-sm">โรงเรียนจงรักสัตย์วิทยา (Chongraksatwittaya School)</p>
              <p className="text-xs text-emerald-400">จังหวัดปัตตานี | ระบบบริหารจัดการและรายงานผลสัมฤทธิ์ทางการเรียน</p>
            </div>
          </div>

          <div className="text-xs text-emerald-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Chongraksatwittaya School. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}