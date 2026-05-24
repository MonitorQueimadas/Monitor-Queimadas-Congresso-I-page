import { Leaf, Cpu, Users, GraduationCap, Landmark } from "lucide-react"

export function Objective() {
  const themes = [
    { icon: Leaf, label: "Meio ambiente", color: "bg-white/20 text-white" },
    { icon: Cpu, label: "Tecnologia", color: "bg-white/20 text-white" },
    { icon: Users, label: "Participação social", color: "bg-white/20 text-white" },
    { icon: GraduationCap, label: "Educação", color: "bg-white/20 text-white" },
    { icon: Landmark, label: "Políticas públicas", color: "bg-white/20 text-white" },
  ]

  return (
    <section id="objetivo" className="py-24 relative overflow-hidden">
      {/* Gradient background - Deep greens of the Chapada */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-green-dark to-[oklch(0.3_0.08_145)]" />
      
      {/* Topographic lines background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Contour lines - representing the terrain of Chapada */}
          <g stroke="white" strokeWidth="0.5" fill="none" opacity="0.08">
            {[...Array(15)].map((_, i) => (
              <path
                key={i}
                d={`M${-100 + i * 20} ${600 - i * 30} Q${200 + i * 30} ${500 - i * 25} ${500 + i * 20} ${550 - i * 28} Q${800 + i * 25} ${480 - i * 22} ${1100 + i * 15} ${520 - i * 26} Q${1300 + i * 10} ${490 - i * 24} ${1540 + i * 20} ${530 - i * 27}`}
              />
            ))}
          </g>
          
          {/* Vegetation silhouettes at bottom */}
          <g fill="white" opacity="0.05">
            <path d="M100 600 L105 560 L95 565 L105 545 L95 550 L105 530 L115 550 L105 545 L115 565 L105 560 L110 600 Z" />
            <path d="M250 600 L255 555 L245 562 L255 540 L245 547 L255 525 L265 547 L255 540 L265 562 L255 555 L260 600 Z" />
            <path d="M400 600 L405 565 L395 570 L405 550 L395 555 L405 535 L415 555 L405 550 L415 570 L405 565 L410 600 Z" />
            <path d="M700 600 L705 558 L695 564 L705 543 L695 549 L705 528 L715 549 L705 543 L715 564 L705 558 L710 600 Z" />
            <path d="M1000 600 L1005 562 L995 567 L1005 548 L995 553 L1005 533 L1015 553 L1005 548 L1015 567 L1005 562 L1010 600 Z" />
            <path d="M1200 600 L1205 555 L1195 561 L1205 541 L1195 547 L1205 527 L1215 547 L1205 541 L1215 561 L1205 555 L1210 600 Z" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <span className="inline-block text-sm font-medium text-white/70 uppercase tracking-wider">
              Nossa missão
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Objetivo
            </h2>
          </div>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Promover a integração entre <strong className="text-white">preservação ambiental</strong> e 
            <strong className="text-white"> inovação tecnológica</strong>, tendo como foco a Chapada do Araripe, 
            estimulando o debate, a conscientização e o desenvolvimento de soluções que utilizem a 
            tecnologia como instrumento para a proteção dos recursos naturais, o fortalecimento dos 
            movimentos sociais, culturais e institucionais da região, o monitoramento ambiental e a 
            consolidação de práticas sustentáveis.
          </p>

          {/* Theme icons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {themes.map((theme) => (
              <div
                key={theme.label}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm border border-white/20 hover:bg-white/15 transition-colors"
              >
                <theme.icon className="w-4 h-4" />
                {theme.label}
              </div>
            ))}
          </div>

          {/* Quote or emphasis */}
          <div className="pt-8 max-w-2xl mx-auto">
            <blockquote className="text-white/80 italic border-l-4 border-secondary pl-6 text-left">
              {'"'}A Chapada do Araripe é um patrimônio natural e cultural que pertence a todos. 
              Protegê-la é um compromisso coletivo com as presentes e futuras gerações.{'"'}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
