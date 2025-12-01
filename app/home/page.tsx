'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import Plasma from '@/components/plasma'

const HomePage = (): ReactNode => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-black to-blue-900">
      {/* Plasma Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Plasma
          color="#9333EA"
          speed={0.4}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen w-full px-4 pt-16 md:pt-24">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="flex justify-center">
            <Image
              src="/icons/jlm-estk-logo.png"
              alt="JLM ESTK Club Logo"
              width={200}
              height={200}
              className="w-48 h-48 md:w-56 md:h-56"
              priority
            />
          </div>

          <div className="mb-6">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
              <span className="text-red-500">J</span>
              <span className="text-green-500">L</span>
              <span className="text-yellow-400">M</span>
              <span className="text-white"> ESTK</span>
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">CLUB</h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A student community built on leadership, creativity, and innovation.
          </p>

          <div className="mt-10">
            <Link href="/dashboard" passHref>
              <button
                className="px-8 py-4 text-lg font-semibold bg-[#CCFF00] hover:bg-[#B8E600] text-black rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[#CCFF00]/50"
              >
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage