"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"
import { useState, useCallback } from "react"

const phoneData = [
  {
    title: "Team Leader (Président)",
    sub: "Aya moumen",
    role: "Leads the club, sets the vision, coordinates all teams, and represents the association officially.",
    gradient: "from-[#0f172a] via-[#14532d] to-[#052e16]",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-19%20at%2021.58.55_ecb97ad4-7sjq7GHdMml1h2HKBL23lLcNe3ap2O.jpg",
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
]

export function Hero() {
  const buttonNew = (
    <Button disabled className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-400 cursor-default">
      Scroll
    </Button>
  )

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
          <div className="mt-6">{buttonNew}</div>

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
  const [imgSrc, setImgSrc] = useState(imageSrc)
  
  const handleImageError = useCallback(() => {
    setImgSrc("/placeholder.svg")
  }, [])
  
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        {imgSrc || imageSrc ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <Image
              src={imgSrc || imageSrc || "/placeholder.svg"}
              alt={title}
              width={300}
              height={600}
              className="h-auto w-auto max-w-full max-h-full object-contain"
              priority={false}
              onError={handleImageError}
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
          <div className="absolute inset-0 h-full w-full bg-black" />
        )}

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-sm font-medium text-lime-300">{sub}</p>
          </div>
        </div>
      </div>
      
      {/* Role description below the phone */}
      {role && (
        <div className="mt-3 p-3 bg-black/40 rounded-lg">
          <p className="text-sm text-white/80 text-center">{role}</p>
        </div>
      )}
    </div>
  )
}