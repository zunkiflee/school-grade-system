'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setErrorMsg('อีเมลหรือรหัสผ่านไม่ถูกต้อง')
      setLoading(false)
      return
    }

    if (data.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role, is_approved')
        .eq('id', data.user.id)
        .single()

      if (!profile?.is_approved) {
        setErrorMsg('บัญชีนี้อยู่ระหว่างรอผู้ดูแลระบบ (Admin) อนุมัติสิทธิ์เข้าใช้งาน')
        await supabase.auth.signOut()
        setLoading(false)
        return
      }

      if (profile.role === 'admin') {
        router.push('/dashboard/admin')
      } else {
        router.push('/dashboard/teacher')
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-slate-200">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-emerald-900">ระบบรายงานผลสัมฤทธิ์</h1>
          <p className="text-slate-500 text-sm mt-1">โรงเรียนจงรักสัตย์วิทยา</p>
        </div>

        {errorMsg && (
          <div className="bg-rose-50 text-rose-600 p-3 rounded-xl text-sm mb-4 border border-rose-200">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">อีเมลผู้ใช้งาน</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="teacher@school.com"
              className="w-full p-3 border border-slate-300 rounded-xl text-slate-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">รหัสผ่าน</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 border border-slate-300 rounded-xl text-slate-800"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white p-3 rounded-xl font-bold transition-all disabled:bg-slate-400"
          >
            {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          ยังไม่มีบัญชีผู้ใช้งาน?{' '}
          <Link href="/auth/register" className="text-emerald-700 font-bold hover:underline">
            ลงทะเบียนที่นี่
          </Link>
        </div>
      </div>
    </div>
  )
}