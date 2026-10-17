'use client'

import React, { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teacherType, setTeacherType] = useState('homeroom')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const supabase = createClient()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    // ดึง Domain ปัจจุบันเพื่อส่งให้ Supabase Redirect ถูกต้อง
    const redirectUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}/auth/login` 
      : undefined

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
          teacher_type: teacherType,
        },
      },
    })

    if (error) {
      setMessage({ type: 'error', text: 'เกิดข้อผิดพลาด: ' + error.message })
      setLoading(false)
      return
    }

    if (data.user) {
      setMessage({
        type: 'success',
        text: 'ลงทะเบียนสำเร็จ! บัญชีของคุณอยู่ระหว่างรอผู้ดูแลระบบ (Admin) ตรวจสอบและอนุมัติสิทธิ์เข้าใช้งาน',
      })
      setFullName('')
      setEmail('')
      setPassword('')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-slate-200">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-emerald-900">ลงทะเบียนครูผู้ใช้งาน</h1>
          <p className="text-slate-500 text-sm mt-1">โรงเรียนจงรักสัตย์วิทยา</p>
        </div>

        {message && (
          <div className={`p-4 rounded-xl text-sm mb-4 border ${
            message.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-rose-50 text-rose-600 border-rose-200'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">ชื่อ - นามสกุล</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="ครูซูลกิฟลี วาเอนก"
              className="w-full p-3 border border-slate-300 rounded-xl text-slate-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">ประเภท / หน้าที่การสอน</label>
            <select
              value={teacherType}
              onChange={(e) => setTeacherType(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-xl text-slate-800 bg-white"
              required
            >
              <option value="homeroom">🏫 ครูประจำชั้น</option>
              <option value="general_special">📖 ครูพิเศษสามัญ</option>
              <option value="islamic_special">🌙 ครูพิเศษอิสลามศึกษา</option>
            </select>
          </div>

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
            <label className="block text-sm font-semibold text-slate-700 mb-1">รหัสผ่าน (อย่างน้อย 6 ตัวอักษร)</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength={6}
              className="w-full p-3 border border-slate-300 rounded-xl text-slate-800"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white p-3 rounded-xl font-bold transition-all disabled:bg-slate-400"
          >
            {loading ? 'กำลังลงทะเบียน...' : 'ลงทะเบียน'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          มีบัญชีอยู่แล้ว?{' '}
          <Link href="/auth/login" className="text-emerald-700 font-bold hover:underline">
            เข้าสู่ระบบที่นี่
          </Link>
        </div>
      </div>
    </div>
  )
}