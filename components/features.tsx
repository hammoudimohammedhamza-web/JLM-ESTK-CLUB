"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "What makes JLM ESTK Club special.",
  subtitle: "A community for leaders and innovators",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("jlm-estk-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="flex flex-col items-center justify-center mb-12 gap-4">
        <div className="flex items-center gap-3">
          <Image 
            src="/icons/jlm-estk-logo.png" 
            alt="JLM ESTK logo" 
            width={64} 
            height={64} 
            className="h-16 w-16"
          />
          <span className="text-2xl font-bold text-white">JLM ESTK</span>
        </div>
        <p className="text-center text-gray-300 max-w-2xl">
          JLM ESTK CLUB is a student community focused on leadership, creativity, and personal growth.
        </p>
      </div>

      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Community Focus Card */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">OUR MISSION</p>
            <CardTitle className="mt-1 text-xl text-white">JLM ESTK CLUB is a student community focused on leadership, creativity, and personal growth</CardTitle>
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>

        {/* Community Highlights Card */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">WHY JOIN US</p>
            <CardTitle className="mt-1 text-xl text-white">
              We bring together motivated students to learn, collaborate, build projects, and make a positive impact.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 space-y-3">
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 fill-lime-300 text-lime-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Leadership Development</p>
                  <p className="text-sm text-neutral-400">Develop practical leadership skills</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 fill-lime-300 text-lime-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Real Projects</p>
                  <p className="text-sm text-neutral-400">Work on impactful initiatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 fill-lime-300 text-lime-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Community Impact</p>
                  <p className="text-sm text-neutral-400">Make a difference in the world</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
