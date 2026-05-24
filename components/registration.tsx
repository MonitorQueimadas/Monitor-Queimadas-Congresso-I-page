import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight, Leaf, Cpu, Users } from "lucide-react"

// PLACEHOLDER - Substitua pelo link real de inscrição
const REGISTRATION_LINK = "https://www.even3.com.br/1-congresso-conecta-chapada-do-araripe-737737/"

export function Registration() {
  return (
    <section id="inscricao" className="py-24 relative overflow-hidden">
      {/* Background visual - Abstract nature + tech */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-sand/30" />
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="absolute bottom-0 left-0 w-full h-64 opacity-10"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 Q200 50 400 80 Q600 110 800 70 Q1000 30 1200 60 Q1400 90 1440 70 L1440 200 L0 200 Z"
            fill="oklch(0.45 0.12 145)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main registration card */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
            
            <div className="relative bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
              {/* Top accent bar */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
              
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="text-center mb-10">
                  <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-3">
                    Garanta sua vaga
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Inscrição gratuita
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Junte-se a especialistas, movimentos sociais, educadores e instituições 
                    para debater o futuro da Chapada do Araripe.
                  </p>
                </div>

                {/* Event quick info */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border">
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Data</p>
                      <p className="font-bold text-foreground">11 de junho</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border">
                    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Horário</p>
                      <p className="font-bold text-foreground">08h às 18h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border">
                    <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Local</p>
                      <p className="font-bold text-foreground text-sm">Auditório Kariris</p>
                    </div>
                  </div>
                </div>

                {/* What you will find */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <Leaf className="w-4 h-4" />
                    Painéis temáticos
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium">
                    <Cpu className="w-4 h-4" />
                    Tecnologia e IA
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    <Users className="w-4 h-4" />
                    Mesa com Café
                  </div>
                </div>

                {/* CTA Button - Huge and prominent */}
                <div className="text-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-xl shadow-secondary/30 transition-all hover:shadow-2xl hover:shadow-secondary/40 hover:-translate-y-1"
                  >
                    <Link href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
                      Fazer inscrição agora
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Você será redirecionado para a página oficial de inscrição
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
