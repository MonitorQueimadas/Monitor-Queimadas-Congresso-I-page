"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full background illustration - Chapada landscape */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Sky gradient */}
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.96 0.02 85)" />
              <stop offset="60%" stopColor="oklch(0.98 0.01 85)" />
              <stop offset="100%" stopColor="oklch(0.92 0.03 75)" />
            </linearGradient>
            <linearGradient id="sunGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="oklch(0.9 0.12 75)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="oklch(0.9 0.12 75)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chapadaGreen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.45 0.12 145)" />
              <stop offset="100%" stopColor="oklch(0.35 0.1 145)" />
            </linearGradient>
          </defs>
          
          {/* Background */}
          <rect width="1440" height="900" fill="url(#skyGradient)" />
          
          {/* Sun/heat with glow */}
          <circle cx="1200" cy="150" r="180" fill="oklch(0.95 0.08 75)" opacity="0.3" />
          <circle cx="1200" cy="150" r="100" fill="oklch(0.92 0.1 65)" opacity="0.4" />
          <circle cx="1200" cy="150" r="50" fill="oklch(0.88 0.12 55)" opacity="0.6" />
          
          {/* Topographic contour lines - representing the terrain */}
          <g stroke="oklch(0.45 0.12 145)" strokeWidth="1" fill="none" opacity="0.08">
            <path d="M0 300 Q200 280 400 290 Q600 300 800 285 Q1000 270 1200 280 Q1400 290 1440 285" />
            <path d="M0 350 Q200 330 400 340 Q600 350 800 335 Q1000 320 1200 330 Q1400 340 1440 335" />
            <path d="M0 400 Q200 380 400 390 Q600 400 800 385 Q1000 370 1200 380 Q1400 390 1440 385" />
            <path d="M0 450 Q200 430 400 440 Q600 450 800 435 Q1000 420 1200 430 Q1400 440 1440 435" />
          </g>
          
          {/* Distant chapada silhouette - layer 3 (farthest) */}
          <path
            d="M0 550 
               L80 520 Q120 510 160 515 L240 505 Q300 495 350 500
               L450 480 Q500 470 550 475 L650 460 Q700 450 750 455
               L850 445 Q900 438 950 442 L1050 435 Q1100 430 1150 434
               L1250 428 Q1300 425 1350 428 L1440 422
               L1440 900 L0 900 Z"
            fill="oklch(0.6 0.08 145)"
            opacity="0.25"
          />
          
          {/* Middle chapada silhouette - layer 2 */}
          <path
            d="M0 600 
               L100 570 Q150 560 200 565 L300 550 Q380 535 450 542
               L550 525 Q620 515 700 520 L800 508 Q870 500 950 505
               L1050 495 Q1120 488 1200 492 L1300 485 Q1370 480 1440 484
               L1440 900 L0 900 Z"
            fill="oklch(0.5 0.1 145)"
            opacity="0.35"
          />
          
          {/* Near chapada silhouette - layer 1 (closest) */}
          <path
            d="M0 680 
               L120 640 Q180 625 250 632 L380 610 Q460 595 550 605
               L680 585 Q760 570 850 578 L980 560 Q1060 548 1150 555
               L1280 540 Q1360 532 1440 538
               L1440 900 L0 900 Z"
            fill="url(#chapadaGreen)"
            opacity="0.6"
          />
          
          {/* Vegetation texture on the chapada */}
          <g fill="oklch(0.35 0.12 145)" opacity="0.4">
            {/* Carnauba palm silhouettes */}
            <path d="M150 680 L155 650 L145 655 L155 640 L145 645 L155 630 L165 645 L155 640 L165 655 L155 650 L160 680 Z" />
            <path d="M350 660 L355 625 L345 632 L355 615 L345 622 L355 605 L365 622 L355 615 L365 632 L355 625 L360 660 Z" />
            <path d="M580 640 L585 610 L575 616 L585 600 L575 606 L585 590 L595 606 L585 600 L595 616 L585 610 L590 640 Z" />
            <path d="M820 620 L825 585 L815 592 L825 575 L815 582 L825 565 L835 582 L825 575 L835 592 L825 585 L830 620 Z" />
            <path d="M1050 600 L1055 568 L1045 574 L1055 558 L1045 564 L1055 548 L1065 564 L1055 558 L1065 574 L1055 568 L1060 600 Z" />
            <path d="M1250 585 L1255 555 L1245 560 L1255 545 L1245 550 L1255 535 L1265 550 L1255 545 L1265 560 L1255 555 L1260 585 Z" />
          </g>
          
          {/* Water source indication (Chapada has important springs) */}
          <path
            d="M200 750 Q250 745 300 750 Q350 755 400 750"
            stroke="oklch(0.6 0.1 220)"
            strokeWidth="3"
            fill="none"
            opacity="0.15"
          />
          <path
            d="M220 760 Q260 755 300 760 Q340 765 380 760"
            stroke="oklch(0.6 0.1 220)"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
          
          {/* Tech/monitoring elements - subtle data visualization */}
          <g opacity="0.12">
            {/* Data points/sensors scattered */}
            <circle cx="300" cy="520" r="4" fill="oklch(0.55 0.12 220)" />
            <circle cx="500" cy="480" r="4" fill="oklch(0.55 0.12 220)" />
            <circle cx="700" cy="460" r="4" fill="oklch(0.55 0.12 220)" />
            <circle cx="900" cy="445" r="4" fill="oklch(0.55 0.12 220)" />
            <circle cx="1100" cy="435" r="4" fill="oklch(0.55 0.12 220)" />
            
            {/* Connection lines between sensors */}
            <path d="M300 520 L500 480 L700 460 L900 445 L1100 435" stroke="oklch(0.55 0.12 220)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
          </g>
          
          {/* Ground/foreground gradient */}
          <rect x="0" y="750" width="1440" height="150" fill="oklch(0.92 0.03 75)" opacity="0.8" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium shadow-lg">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              1ª edição
            </div>
          </div>

          {/* Title block */}
          <div className="text-center space-y-6 mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              <span className="block">Conecta Chapada</span>
              <span className="block text-primary">do Araripe</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary font-semibold">
              Movimento, tecnologias e proteção do meio ambiente
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Um encontro para integrar preservação ambiental, inovação tecnológica, 
              movimentos sociais, educação e políticas públicas em defesa da Chapada do Araripe.
            </p>
          </div>

          {/* Event info cards */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <div className="flex items-center gap-3 px-6 py-4 bg-card/95 backdrop-blur-sm rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">11 de junho</p>
                <p className="text-sm text-muted-foreground">Quinta-feira, 08h–18h</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-4 bg-card/95 backdrop-blur-sm rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">Auditório Kariris</p>
                <p className="text-sm text-muted-foreground">IFCE Juazeiro do Norte</p>
              </div>
            </div>
          </div>

          {/* CTA Button - Prominent */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-7 text-lg font-semibold rounded-xl shadow-lg shadow-secondary/25 transition-all hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              <Link href={'https://www.even3.com.br/1-congresso-conecta-chapada-do-araripe-737737/'} target="_blank">
                Fazer inscrição gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-7 text-lg font-semibold rounded-xl"
            >
              <Link href="#programacao">Ver programação</Link>
            </Button>
          </div>

          {/* Theme tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {["Meio ambiente", "Tecnologia", "Participação social", "Educação", "Políticas públicas"].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-muted/80 backdrop-blur-sm text-muted-foreground rounded-full text-sm font-medium border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
