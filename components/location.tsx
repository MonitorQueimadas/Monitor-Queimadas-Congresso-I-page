import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Building2, Clock, Calendar } from "lucide-react"

// PLACEHOLDER - Substitua pelo link real do Google Maps
const GOOGLE_MAPS_LINK = "#LINK_GOOGLE_MAPS"

export function Location() {
  return (
    <section id="local" className="py-24 relative overflow-hidden">
      {/* Topographic background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Contour lines pattern */}
          <g stroke="oklch(0.45 0.12 145)" strokeWidth="1" fill="none">
            {[...Array(20)].map((_, i) => (
              <path
                key={i}
                d={`M0 ${100 + i * 35} Q${200 + (i % 3) * 50} ${80 + i * 35} ${400 + (i % 2) * 30} ${110 + i * 35} Q${600 + (i % 4) * 40} ${90 + i * 35} ${800 + (i % 3) * 25} ${105 + i * 35} Q${1000 + (i % 2) * 35} ${85 + i * 35} ${1200 + (i % 4) * 30} ${100 + i * 35} Q${1350 + (i % 3) * 20} ${95 + i * 35} 1440 ${105 + i * 35}`}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Onde acontece
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Local do evento
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main location card - Full width, prominent */}
          <div className="bg-gradient-to-br from-primary to-green-dark rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-5">
              {/* Left side - Info */}
              <div className="lg:col-span-3 p-8 md:p-12 text-primary-foreground">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">
                      Auditório Kariris
                    </h3>
                    <p className="text-lg text-primary-foreground/80">
                      IFCE campus Juazeiro do Norte
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-primary-foreground/70" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-primary-foreground/80 text-sm">
                        Av. Plácido Aderaldo Castelo, 1646 — Planalto
                      </p>
                      <p className="text-primary-foreground/80 text-sm">
                        Juazeiro do Norte — CE, 63040-540
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary-foreground/70" />
                      <span>11 de junho de 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary-foreground/70" />
                      <span>08h às 18h</span>
                    </div>
                  </div>
                </div>

                <Button 
                  asChild 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <Link href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-5 h-5 mr-2" />
                    Abrir no Google Maps
                  </Link>
                </Button>
              </div>

              {/* Right side - Illustration */}
              <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-0">
                <svg
                  viewBox="0 0 400 400"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {/* Background */}
                  <rect width="400" height="400" fill="oklch(0.35 0.1 145)" />
                  
                  {/* Topographic contours */}
                  <g stroke="white" strokeWidth="0.8" fill="none" opacity="0.15">
                    {[...Array(12)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx="200"
                        cy="200"
                        rx={180 - i * 14}
                        ry={160 - i * 12}
                        transform={`rotate(${i * 3} 200 200)`}
                      />
                    ))}
                  </g>
                  
                  {/* Chapada silhouette */}
                  <path
                    d="M0 300 L50 270 Q100 250 150 260 L200 240 Q250 225 300 235 L350 220 Q380 215 400 218 L400 400 L0 400 Z"
                    fill="oklch(0.3 0.08 145)"
                    opacity="0.6"
                  />
                  
                  {/* Location marker */}
                  <g transform="translate(200, 180)">
                    {/* Pulse rings */}
                    <circle cx="0" cy="0" r="50" fill="white" opacity="0.1">
                      <animate attributeName="r" values="30;60;30" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="35" fill="white" opacity="0.15" />
                    
                    {/* Pin */}
                    <path
                      d="M0 -30 C-18 -30 -30 -18 -30 0 C-30 22 0 50 0 50 C0 50 30 22 30 0 C30 -18 18 -30 0 -30 Z"
                      fill="oklch(0.65 0.14 55)"
                    />
                    <circle cx="0" cy="-5" r="10" fill="white" />
                  </g>
                  
                  {/* Label */}
                  <text x="200" y="260" textAnchor="middle" fontSize="14" fontWeight="600" fill="white" opacity="0.9">
                    IFCE
                  </text>
                  <text x="200" y="278" textAnchor="middle" fontSize="11" fill="white" opacity="0.7">
                    Juazeiro do Norte
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Feature badges below */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "Estacionamento disponível",
              "Acessibilidade",
              "Ar condicionado"
            ].map((feature) => (
              <span 
                key={feature}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
