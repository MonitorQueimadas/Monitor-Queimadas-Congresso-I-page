import { Leaf, Cpu, Users, Droplets, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Leaf,
    title: "Preservação ambiental",
    description: "Proteção dos recursos naturais, fontes hídricas e biodiversidade única da Chapada.",
    color: "bg-primary",
  },
  {
    icon: Cpu,
    title: "Tecnologia e inovação",
    description: "Monitoramento ambiental, ciência de dados e inteligência artificial a serviço do território.",
    color: "bg-tech-blue",
  },
  {
    icon: Users,
    title: "Movimentos sociais",
    description: "Valorização da participação comunitária, cultural e institucional na defesa da região.",
    color: "bg-secondary",
  },
  {
    icon: Droplets,
    title: "Recursos hídricos",
    description: "Foco nas nascentes, aquíferos e a importância vital da água para o semiárido.",
    color: "bg-accent",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]" viewBox="0 0 400 400">
          {/* Topographic circles */}
          {[...Array(10)].map((_, i) => (
            <circle
              key={i}
              cx="300"
              cy="100"
              r={40 + i * 35}
              stroke="oklch(0.45 0.12 145)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                Conheça o evento
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Sobre o Congresso
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                O <strong className="text-foreground">1º Congresso Conecta Chapada do Araripe</strong> é 
                um espaço de diálogo e construção coletiva que reúne especialistas, projetos sociais, 
                educadores e comunidades para debater a interface entre meio ambiente, tecnologia e 
                participação social.
              </p>
              <p>
                A Chapada do Araripe, localizada na fronteira entre Ceará, Pernambuco e Piauí, é um 
                território de enorme relevância ecológica — abrigando a Floresta Nacional do Araripe, 
                nascentes que abastecem milhões de pessoas e uma biodiversidade única, incluindo 
                espécies endêmicas como o soldadinho-do-araripe.
              </p>
              <p>
                O evento propõe reflexões sobre o papel dos movimentos sociais, o uso de tecnologias 
                para monitoramento ambiental e os caminhos para enfrentar os desafios contemporâneos 
                de preservação deste patrimônio natural e cultural.
              </p>
            </div>

            {/* Quick stat */}
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Realização</p>
                <p className="text-sm text-muted-foreground">IFCE campus Juazeiro do Norte</p>
              </div>
            </div>
          </div>

          {/* Right content - Pillar cards + Illustration */}
          <div className="relative">
            {/* Background chapada illustration */}
            <div className="absolute -inset-8 opacity-10 pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <path
                  d="M50 350 L100 300 Q150 280 200 290 L250 270 Q300 250 350 260 L400 240"
                  stroke="oklch(0.45 0.12 145)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0 380 L80 330 Q140 310 200 320 L280 300 Q340 280 400 290"
                  stroke="oklch(0.45 0.12 145)"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 gap-4 relative">
              {pillars.map((pillar) => (
                <Card 
                  key={pillar.title} 
                  className="group bg-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
