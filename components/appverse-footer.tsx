"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Mail } from 'lucide-react'
import Image from "next/image"
import { TicketIcon as TikTok } from 'lucide-react'

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "JLM ESTK CLUB is a student community focused on leadership, creativity, and personal growth.",
  copyright: "© 2025 — JLM ESTK Club",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("jlm-estk-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="#contact">
              Get In Touch
            </a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">JOIN THE MOVEMENT</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                JLM ESTK CLUB is a student community focused on leadership, creativity, and personal growth
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                We bring together motivated students to learn, collaborate, build projects, and make a positive impact inside and outside the university.
              </p>
            </div>

            {/* Right section - Placeholder */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-4xl font-extrabold text-lime-300 mb-2">Join Us</p>
                    <p className="text-sm text-white/80">Be part of a vibrant community of innovators and leaders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/icons/jlm-estk-logo.png" alt="JLM ESTK logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-semibold text-white">JLM ESTK</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            <div>
              <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Social Media</h5>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <TikTok className="h-4 w-4 text-neutral-400" />
                  <a
                    href="https://www.tiktok.com/@jlm.estk?_r=1&_t=ZS-91ppl60uN7w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-300"
                    aria-label="Follow on TikTok"
                  >
                    TikTok
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-neutral-400" />
                  <a
                    href="https://www.instagram.com/jlm_estk?igsh=MWNwYzlidnB6bXlzeA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-300"
                    aria-label="Follow on Instagram"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="#privacy" className="hover:text-lime-300">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-lime-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
