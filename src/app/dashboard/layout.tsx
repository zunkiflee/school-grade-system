'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LogOut } from 'lucide-react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-emerald-900 text-white px-6 py-4 flex items-center justify-between shadow-md print:hidden">
        <div className="font-bold text-lg">ระบบรายงานผลสัมฤทธิ์ | โรงเรียนจงรักสัตย์วิทยา</div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
        >
          <LogOut size={16} /> ออกจากระบบ
        </button>
      </header>
      <main>{children}</main>
    </div>
  )
}