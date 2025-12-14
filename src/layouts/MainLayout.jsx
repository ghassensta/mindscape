import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function MainLayout({ children }) {
  return (
    <div className='min-h-screen bg-[#e7e7ff] text-zinc-100 overflow-x-hidden'>
        <div className="flex flex-col h-full">
            <Navbar />
            {children}
        </div>
    </div>
  )
}
