import { Badge } from "@/components/ui/badge"
import { Mic, Users, Coffee, MessageCircle, Award } from "lucide-react"
import Image from "next/image"

type ScheduleItem = {
  time: string
  title: string
  description?: string
  speaker?: string
  speakerPhotos?: string[]
  type: "credenciamento" | "acolhida" | "painel" | "intervalo" | "mesa" | "encerramento" | "interacao"
  status?: "confirmado" | "a-confirmar"
}

const morningSchedule: ScheduleItem[] = [
  {
    time: "08h00–10h00",
    title: "Credenciamento",
    type: "credenciamento",
  },
  {
  time: "10h30–11h00",
  title: "Acolhida",
  description:
    "Momento de recepção e integração do público, conduzido pelo grupo KARIRI SAX. O concerto convida os participantes a mergulhar na riqueza da música brasileira por meio de arranjos e composições especialmente escritos para quarteto de saxofones, transitando por diferentes expressões da música popular e evidenciando a profundidade técnica, estética e cultural da produção musical brasileira.",
  speaker: "KARIRI SAX ",
    type: "acolhida",
},
  {
    time: "11h00–11h40",
    title: "Guardiãs das águas: meninas pelo saneamento",
    description:
      "Apresentação sobre ações de educação ambiental e saneamento, com foco no protagonismo feminino e impactos no território.",
    speaker: "Ana Millene dos Santos Silva • Profa. Dra. Janisi Sales Aragão",
    speakerPhotos: ["/professores/milene.jpeg", "/professores/janisi.jpeg"],
    type: "painel",
    status: "confirmado",
  },
  {
    time: "11h40–12h00",
    title: "Perguntas e interação",
    type: "interacao",
  },
]

const afternoonSchedule: ScheduleItem[] = [
  {
    time: "14h00–14h30",
    title: "ICMBIO",
    description: "Apresentação institucional com contribuições para conservação e gestão territorial na Chapada do Araripe.",
    speaker: "Carlos Augusto de Alencar Pinheiro • Prof. Dr. Fabrício Freitas",
    speakerPhotos: ["/professores/icmbio.jpeg", "/professores/fabricio.jpeg"],
    type: "painel",
    status: "confirmado",
  },
  {
    time: "14h30–14h45",
    title: "Perguntas e interação",
    type: "interacao",
  },
  {
    time: "14h45–15h15",
    title: "Movimento Salve a Chapada",
    description:
      "Discussão sobre monitoramento territorial e climático da Chapada do Araripe, geotecnologias aplicadas e mobilização social no território.",
    speaker: "Basílio Silva Neto • Victor Arraes",
    speakerPhotos: ["/professores/basilio.jpeg", "/professores/victor.jpeg"],
    type: "painel",
    status: "confirmado",
  },
  {
    time: "15h15–15h30",
    title: "Perguntas e interação",
    type: "interacao",
  },
  {
    time: "16h00–16h30",
    title: "Monitoramento da Chapada do Araripe com IA",
    description:
      "Apresentação sobre uso de inteligência artificial e dados para monitoramento ambiental da Chapada do Araripe.",
    speaker: "Prof. Dr. Fabrício Freitas • Prof. Francisco Ferreira",
    speakerPhotos: ["/professores/fabricio.jpeg", "/professores/francisco.jpeg"],
    type: "painel",
    status: "confirmado",
  },
  {
    time: "16h30–16h45",
    title: "Perguntas e interação",
    type: "interacao",
  },
  {
    time: "16h45–17h45",
    title: "III Mesa com Café e Tecnologia",
    speaker: "Prof. Dr. Fabrício Freitas • Basílio Silva Neto • Victor Arraes • Carlos Augusto de Alencar Pinheiro • Profa. Dra. Janisi Sales Aragão",
    speakerPhotos: ["/professores/fabricio.jpeg","/professores/basilio.jpeg", "/professores/victor.jpeg", "/professores/icmbio.jpeg", "/professores/janisi.jpeg"],
    description: "Mesa de diálogo com convidados e público sobre tecnologia, território e meio ambiente.",
    type: "painel",
  },
  {
    time: "17h45–18h00",
    title: "Encerramento",
    type: "encerramento",
  },
]

const typeConfig = {
  credenciamento: { icon: Users, bgColor: "bg-muted", textColor: "text-muted-foreground", label: "Credenciamento" },
  acolhida: { icon: Award, bgColor: "bg-accent", textColor: "text-accent-foreground", label: "Acolhida" },
  painel: { icon: Mic, bgColor: "bg-primary", textColor: "text-primary-foreground", label: "Painel" },
  intervalo: { icon: Coffee, bgColor: "bg-sand", textColor: "text-foreground", label: "Intervalo" },
  mesa: { icon: Coffee, bgColor: "bg-secondary", textColor: "text-secondary-foreground", label: "Mesa" },
  encerramento: { icon: Award, bgColor: "bg-primary", textColor: "text-primary-foreground", label: "Encerramento" },
  interacao: { icon: MessageCircle, bgColor: "bg-tech-blue", textColor: "text-white", label: "Interação" },
}

function TimelineItem({ item, isLast }: { item: ScheduleItem; isLast: boolean }) {
  const config = typeConfig[item.type]
  const Icon = config.icon
  const isPainel = item.type === "painel"

  return (
    <div className="flex gap-4 md:gap-6">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className={`w-11 h-11 rounded-full ${config.bgColor} ${config.textColor} flex items-center justify-center shrink-0 shadow-sm`}>
          <Icon className="w-5 h-5" />
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border my-2" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
        <div className={`p-4 md:p-5 rounded-xl ${isPainel ? "bg-card border border-border shadow-sm" : ""}`}>
          {/* Time badge */}
          <span className="inline-block text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-md mb-2">
            {item.time}
          </span>
          
          {/* Title row */}
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h4 className={`font-semibold ${isPainel ? "text-lg" : ""} text-foreground`}>
              {item.title}
            </h4>
            {item.status === "a-confirmar" && (
              <Badge variant="outline" className="text-xs border-secondary/50 text-secondary bg-secondary/10">
                A confirmar
              </Badge>
            )}
          </div>
          
          {/* Description */}
          {item.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {item.description}
            </p>
          )}
          
{/* Speaker */}
          {item.speaker && (
            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Participantes
              </span>
              {item.speakerPhotos && item.speakerPhotos.length > 0 && (
                <div className="flex -space-x-2">
                  {item.speakerPhotos.map((photo, index) => (
                    <div key={`${photo}-${index}`} className="flex flex-col items-center gap-1">
                      <div className="w-20 h-20 md:w-35 md:h-35 rounded-full border-2 border-background overflow-hidden bg-muted">
                        <Image
                          src={photo}
                          alt={`Foto do(a) participante ${index + 1}`}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-sm font-medium text-primary mt-2">{item.speaker}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ScheduleSection({ 
  title, 
  items, 
  colorClass 
}: { 
  title: string
  items: ScheduleItem[]
  colorClass: string 
}) {
  return (
    <div>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`px-5 py-2 ${colorClass} text-white rounded-full text-sm font-bold shadow-sm`}>
          {title}
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>
      
      {/* Timeline */}
      <div className="ml-1">
        {items.map((item, index) => (
          <TimelineItem 
            key={index} 
            item={item} 
            isLast={index === items.length - 1} 
          />
        ))}
      </div>
    </div>
  )
}

export function Schedule() {
  return (
    <section id="programacao" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 right-0 w-96 h-96 opacity-5" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Agenda do dia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Programação
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            11 de junho de 2026 — Auditório Kariris, IFCE Juazeiro do Norte
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-12">
          <ScheduleSection 
            title="Manhã" 
            items={morningSchedule} 
            colorClass="bg-primary"
          />
          
          <ScheduleSection 
            title="Tarde" 
            items={afternoonSchedule} 
            colorClass="bg-secondary"
          />
        </div>
      </div>
    </section>
  )
}
