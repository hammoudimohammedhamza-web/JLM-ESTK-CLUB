"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"
import { useState, useCallback } from "react"

const phoneData = [
  {
    title: "Team Leader",
    sub: "Aya moumen",
    role: "coordinates and guides a team to achieve shared objectives. They organize tasks, support team members, ensure clear communication, and monitor progress while maintaining motivation and accountability.",
    gradient: "from-[#0f172a] via-[#1e3a8a] to-[#172554]",
    imageSrc: "/images/team/WhatsApp Image 2025-12-06 at 15.35.14_62bbc458.jpg",
  },
  {
    title: "Vice Team Leader",
    sub: "Ali bichara",
    role: "Supports the Team Leader and oversees operations",
    gradient: "from-[#0f172a] via-[#1e3a8a] to-[#172554]",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-19%20at%2021.58.54_25260b5b-wFH6b87ktpFEFcoEwfBHlNNHzjyICN.jpg",
  },
  {
    title: "Chef de projet",
    sub: "Mohamed hamza hammoudi",
    role: "Manages and coordinates all club projects and initiatives",
    gradient: "from-[#1e1b4b] via-[#3730a3] to-[#1e1b4b]",
    imageSrc: "/images/team/IMG-20251128-WA0007.jpg"
  },
  {
    title: "Media & Photographer",
    sub: "Mohammed chakir",
    role: "Documents events and creates visual content for the club",
    gradient: "from-[#0f172a] via-[#1e3a8a] to-[#172554]",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-19%20at%2021.58.55_9e1109a7-r5g9bzG7Bbd8lj2vLZJqpaf3Abqj4b.jpg",
  },
  {
    title: "Ressource Humaine",
    sub: "Mohammed hida",
    role: "Manages member relations and human resources",
    gradient: "from-[#0f172a] via-[#14532d] to-[#052e16]",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-19%20at%2021.58.54_79cb836b-PpxHsxEmBgp7NbPsKRjdtXW3pTTbh6.jpg",
  },
  {
    title: "Secrétaire Générale",
    sub: "Hajar layyadi",
    role: "Handles documentation and official club communications",
    gradient: "from-[#1e1b4b] via-[#3730a3] to-[#1e1b4b]",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-19%20at%2021.58.55_caa08dfb-YQvQCLqAG1QP3XrTQ20pQCjSX9tPLU.jpg",
  },
  {
    title: "Chef Logistique",
    sub: "Nasrollah moutahir",
    role: "Oversees event logistics and resource management",
    gradient: "from-[#0f172a] via-[#14532d] to-[#052e16]",
    imageSrc: "/images/team/IMG-20251128-WA0005.jpg"
  },
  {
    title: "Sponsoring",
    sub: "Mohamed yassine lachhab",
    role: "Secures partnerships and funding for club activities",
    gradient: "from-[#1e1b4b] via-[#3730a3] to-[#1e1b4b]",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-19%20at%2021.58.55_e01db408-7da7IXy8VaGDgKD57uxKFAPO51vMH8.jpg",
  },
  {
    title: "Communication",
    sub: "Aya elabisy",
    role: "Manages internal and external club communications",
    gradient: "from-[#0f172a] via-[#1e3a8a] to-[#172554]",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-19%20at%2021.58.55_8f2a7734-3PmZbAKcsZ9etXo8zWiOpUHTXyL4yj.jpg",
  },
  {
    title: "Trésorerie",
    sub: "Sara aabida",
    role: "Manages club finances and budgeting",
    gradient: "from-[#0f172a] via-[#14532d] to-[#052e16]",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-19%20at%2021.58.55_a4b858cb-nqp665K5eWkV7XOkzcit7bwdoUrdE6.jpg",
  },
  {
    title: "jLM junior",
    sub: "Aya abid",
    role: "Leads junior member initiatives and activities",
    gradient: "from-[#1e1b4b] via-[#3730a3] to-[#1e1b4b]",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-19%20at%2021.58.54_93407ad9-GlqXGAQwk4vIwedRERivRndqul3HNO.jpg",
  },
  {
    title: "Designer",
    sub: "Oussama boutaounte",
    role: "creates clear and effective visual solutions by turning ideas and goals into simple, functional, and aesthetically balanced designs",
    gradient: "from-[#0f172a] via-[#6b21a8] to-[#1e1b4b]",
    imageSrc: "/images/team/WhatsApp Image 2025-11-19 at 20.40.02_8b57acfe.jpg"
  },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/jlm-estk-logo.png" alt="JLM ESTK logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">JLM ESTK CLUB</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">REAL-WORLD</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">PROJECTS & LEADERSHIP</span>
            <span className="block">FOR STUDENTS</span>
          </h1>

          <div className="mt-10 flex w-full flex-col items-center gap-4">
            {phoneData.map((p, i) => {
              return (
                <div key={i} className="w-full max-w-sm">
                  <PhoneCard title={p.title} sub={p.sub} role={p.role} gradient={p.gradient} imageSrc={p.imageSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  role = "Role description goes here",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
  imageSrc,
}: {
  title?: string
  sub?: string
  role?: string
  gradient?: string
  videoSrc?: string
  imageSrc?: string
}) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(imageSrc)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const isLocalImage = imgSrc?.startsWith('/')
  
  const handleImageError = useCallback(() => {
    console.warn(`Failed to load image: ${imgSrc}`)
    setImgSrc("/placeholder.svg")
  }, [imgSrc])

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true)
  }, [])
  
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2" aria-label={`${title} - ${sub}`}>
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black/50">
        {imgSrc || imageSrc ? (
          <div className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={imgSrc || imageSrc || "/placeholder.svg"}
              alt={`${title} - ${sub}`}
              width={300}
              height={600}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
              className="h-auto w-auto max-w-full max-h-full object-contain"
              priority={false}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              quality={85}
              onError={handleImageError}
              onLoad={handleImageLoad}
              unoptimized={!isLocalImage} // Only optimize local images
            />
          </div>
        ) : videoSrc ? (
          <LazyVideo
            src={videoSrc}
            className="absolute inset-0 h-full w-full object-cover"
            autoplay={true}
            loop={true}
            muted={true}
            playsInline={true}
            aria-label={`${title} - ${sub}`}
          />
        ) : (
          <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-gray-900 to-black" />
        )}

        {/* Loading skeleton */}
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="h-8 w-8 animate-pulse rounded-full border-2 border-lime-400 border-t-transparent" />
          </div>
        )}

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <h3 className="text-2xl font-bold leading-snug text-white/90 md:text-3xl">{title}</h3>
            <p className="text-xs font-medium text-lime-300 sm:text-sm">{sub}</p>
          </div>
        </div>
      </div>
      
      {/* Role description below the phone */}
      {role && (
        <div className="mt-3 rounded-lg bg-black/40 p-3 backdrop-blur-sm">
          <p className="text-xs text-white/80 sm:text-sm">{role}</p>
        </div>
      )}
    </div>
  )
}