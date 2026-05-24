import { Card, CardContent } from "@/components/ui/card"
import { Radar, GraduationCap, Scale, BookOpen, Megaphone } from "lucide-react"

const proposalCards = [
  {
    icon: Radar,
    title: "Tecnologia e monitoramento ambiental",
    color: "bg-tech-blue",
  },
  {
    icon: GraduationCap,
    title: "Educação ambiental e formação crítica",
    color: "bg-primary",
  },
  {
    icon: Scale,
    title: "Políticas públicas e continuidade",
    color: "bg-secondary",
  },
  {
    icon: BookOpen,
    title: "Saberes tradicionais e academia",
    color: "bg-accent",
  },
  {
    icon: Megaphone,
    title: "Participação social e mobilização permanente",
    color: "bg-terracotta",
  },
]

export function Proposal() {
  return (
    <section id="proposta" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                Visão estratégica
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Proposta do evento
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A proposta central do evento vai além do debate e da participação ativa da sociedade, 
                comunidades locais, instituições e movimentos sociais. Pretende-se construir um 
                <strong className="text-foreground"> espaço estratégico de articulação</strong> entre 
                tecnologia, educação, políticas públicas e movimentos sociais, capaz de gerar impactos 
                concretos e sustentáveis na proteção da Chapada do Araripe.
              </p>
              <p>
                Ao integrar saberes acadêmicos, conhecimentos tradicionais e soluções tecnológicas, 
                como monitoramento ambiental, ciência de dados e plataformas digitais colaborativas, 
                o evento busca fortalecer ações de preservação, educação ambiental e desenvolvimento 
                sustentável na região.
              </p>
              <p>
                A <strong className="text-foreground">educação</strong> assume um papel estruturante, 
                promovendo formação crítica e engajamento social, enquanto as 
                <strong className="text-foreground"> políticas públicas</strong> são discutidas como 
                instrumentos essenciais para garantir a efetividade e a continuidade dessas ações.
              </p>
            </div>
          </div>

          {/* Right content - Cards */}
          <div className="space-y-4">
            {proposalCards.map((card, index) => (
              <Card 
                key={card.title}
                className="group hover:shadow-md transition-all duration-300 border-border hover:border-primary/20 bg-card"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-5 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{card.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
