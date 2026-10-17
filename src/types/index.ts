export type UserRole = 'admin' | 'teacher' | 'executive'
export type TeacherType = 'homeroom' | 'general_special' | 'islamic_special'

export interface Profile {
  id: string
  email: string
  full_name: string
  role: UserRole
  teacher_type: TeacherType
  is_approved: boolean
  created_at?: string
}

export interface Student {
  id: number
  student_id: string
  id_card?: string
  prefix?: string
  first_name: string
  last_name: string
  full_name: string
  gender: 'ช' | 'ญ' | 'ชาย' | 'หญิง'
  created_at?: string
}

export interface Subject {
  id: number
  subject_code?: string
  subject_name: string
  category: 'general' | 'islamic'
  applicable_levels: string[]
}