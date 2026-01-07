'use client';
import React from 'react'
import { useRouter } from "next/navigation";


export default function ButtonRedirect({ children }: Readonly<{ children: React.ReactNode }>) {
    const router = useRouter(); 
  const handleClick = () => {
    router.push("/login");
  }
  return (
    <button onClick={handleClick}>{children}</button>
  )
}
