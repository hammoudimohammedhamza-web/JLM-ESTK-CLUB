import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://jlmestk.com/#pricing",
    name: "Pricing Plans",
    description: "3D Animation pricing plans - Startup, Pro, and Premium packages for all business needs",
    url: "https://jlmestk.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "3D Animation Services",
      description: "Professional 3D animation services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "299",
          priceCurrency: "USD",
          description: "Up to 15s 3D Animation with 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "699",
          priceCurrency: "USD",
          description: "Up to 25s 3D Animation with 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "2049",
          priceCurrency: "USD",
          description: "40-60s 3D Animation with unlimited revisions",
        },
      ],
    },
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://jlmestk.com/",
    name: "JLM ESTK Club | Student Leadership & Project Community",
    description: "A student community focused on leadership, creativity, and personal growth. Learn, collaborate, build projects, and make a positive impact.",
    url: "https://jlmestk.com/",
    mainEntity: {
      "@type": "Organization",
      name: "JLM ESTK Club",
      url: "https://jlmestk.com",
    },
  }

  return (
    <div className="min-h-screen bg-[#0A0E17]">
      <SiteHeader />
      <main className="text-white">
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
      </main>
      <AppverseFooter />

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </div>
  )
}