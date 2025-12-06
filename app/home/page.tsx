'use client'

import Link from 'next/link'
import Image from 'next/image'
import CircularText from '@/components/CircularText'

const HomePage = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0A0E17] flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto mt-12 md:mt-16 flex flex-col items-center px-4">
        {/* Circular Text with Logo */}
        <CircularText 
          text="INSPIRE*CREAT*LEAD*" 
          className="-mt-8 md:-mt-12 w-[298px] h-[298px] md:w-[350px] md:h-[350px]"
          logo={
            <Image 
              src="/images-removebg-preview.png" 
              alt="JLM ESTK Club Logo" 
              width={160} 
              height={160}
              className="object-contain"
            />
          }
          logoSize="160px"
          textRadius={90}
        />
        
        {/* Text directly under circle */}
        <div className="text-center mt-16 w-full">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            <span className="text-red-500">J</span>
            <span className="text-green-500">L</span>
            <span className="text-yellow-400">M</span>
            <span className="text-white"> ESTK</span>
          </h1>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">CLUB</h2>
        </div>
        
        {/* Description and CTA */}
        <div className="w-full text-center mt-16">
          <p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-300 mb-8">
            A forward-thinking student community focused on empowering leadership,
            nurturing creativity, and transforming innovative ideas into real-world
            impact.
          </p>
          <div>
            <Link href="/dashboard">
              <button className="
  rounded-full 
  bg-[#CCFF00] 
  px-8 py-4 
  text-lg 
  font-semibold 
  hover:bg-yellow-400 
  transform 
  hover:scale-105 
  hover:shadow-lg 
  transition-all 
  duration-300 
  ease-in-out
  active:scale-95
  focus:outline-none 
  focus:ring-2 
  focus:ring-offset-2 
  focus:ring-yellow-400
">
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
