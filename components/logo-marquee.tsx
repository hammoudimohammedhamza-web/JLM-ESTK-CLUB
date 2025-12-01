"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function LogoMarquee() {
  return (
    <section className="text-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Our <span className="text-lime-300">vibrant</span>
            <br />
            leaders
          </h2>
          <Button
            variant="outline"
            asChild
            className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced text-white border-white/20 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20"
          >
            <Link href="/join-cell">
              Join a Cell
            </Link>
          </Button>
        </div>

        {/* Logo Marquee */}
        <div className="relative rounded-3xl overflow-hidden liquid-glass p-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2014.33.30_69e6a079-vhDx7FeCtlgdrvjQ0Fj826IsmmPomU.jpg"
              alt="JLM ESTK community celebration with flag"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
