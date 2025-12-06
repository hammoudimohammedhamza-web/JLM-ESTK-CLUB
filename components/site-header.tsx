"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info, ChevronDown, Building2, Package } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    {
      href: "/about",
      label: "About Us",
      icon: Building2,
      description: "Learn about JLM ESTK Club",
    },
    {
      href: "/events",
      label: "Events",
      icon: Package,
      description: "Upcoming events and workshops",
    },
    {
      href: "/projects",
      label: "Projects",
      icon: Package,
      description: "Ongoing community projects",
    },
  ]

  const links = [
    { href: "#features", label: "Features", icon: Tag },
    { href: "#community", label: "Community", icon: HelpCircle },
    { href: "#members", label: "Members", icon: FileText },
    { href: "#contact", label: "Contact", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icons/jlm-estk-logo.png" alt="JLM ESTK logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-semibold tracking-wide text-white">JLM ESTK</span>
          </Link>

          {/* Desktop Nav with Services Dropdown */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent text-white/90 hover:text-lime-300 data-[state=open]:text-lime-300
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent"
                  >
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-2 p-3 bg-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-lg">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="group relative flex items-start gap-3 rounded-xl p-3 transition-all
                                         hover:bg-white/5 hover:ring-1 hover:ring-lime-300/60
                                         hover:shadow-[0_0_0_1px_rgba(132,204,22,0.25),0_0_20px_rgba(132,204,22,0.15)]
                                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/70"
                            >
                              <service.icon className="h-5 w-5 text-lime-300 mt-0.5 shrink-0 group-hover:text-lime-200" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-lime-300">
                                  {service.label}
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5">{service.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-lime-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="#contact">Join Us</Link>
            </Button>
          </div>

          {/* Mobile Nav - Removed */}
        </div>
      </div>
    </header>
  )
}
