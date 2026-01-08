import LoginForm from '@/app/(auth)/login/login-form'
import React from 'react'

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold ml-4 text-center">Login</h1>
            <div className="flex justify-center items-center">
              <LoginForm />
            </div>
    </div>
  )
}
