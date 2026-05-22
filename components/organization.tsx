import { Card, CardContent } from "@/components/ui/card"
import { User, Building2 } from "lucide-react"
import Image from "next/image"

const organizers = [
  {
    name: "Prof. Dr. Fabrício Freitas",
    role: "Universidade Federal do Cariri UFCA",
    foto: "./professores/fabricio.jpeg",
  },
  {
    name: "Profa. Dra Janisi Sales Aragão",
    role: "Engenheira de Pesca/ profa do IFCE campus Juazeiro do Norte",
    foto: "./professores/janisi.jpeg",
  },
  {
    name: "Victor Arraes ",
    role: " Pesquisador do Observatório da Chapada do Araripe",
    foto: "./professores/victor.jpeg",
  },
  {
    name: "Prof. Dr. Basílio Silva Neto",
    role: "prof do IFCE campus Juazeiro do Norte",
    foto: "./professores/basilio.jpeg",
  },
  {
    name: "Ana Millene dos Santos Silva",
    role: "Mestranda em meio ambiente",
    foto: "./professores/milene.jpeg",
  },
    {
    name: "Prof. Dr. Francisco Ferreira ",
    role: "Universidade Federal do Cariri UFCA",
    foto: "./professores/francisco.jpeg",
  },
    {
    name: "Felipe Pereira",
    role: "Designer Digital UFCA",
    foto: "./professores/felipe.jpeg",
  },
]

const partners = [
  {
    name: "IFCE campus Juazeiro do Norte",
    logo: "./logos/IFCElogocircular.png",
  },
  {
    name: "ICMBIO",
    logo: "./logos/ICMBIO.png",
  },
  {
    name: "Interset-CE",
    logo: "./logos/IntersetCE.png",
  },
  {
    name: "Proex",
    logo: "./logos/Proex.png",
  },
  {
    name: "Movimentos sociais e ambientais",
    logo: "./logos/Movimentossociais.png",
  },
  {
    name: "UFCA",
    logo: "./logos/UFCAProex.png",
  }
]

export function Organization() {
  return (
    <section id="organizacao" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Quem faz acontecer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Organização
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça as pessoas e instituições responsáveis pela realização do evento.
          </p>
        </div>

        {/* Organizers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {organizers.map((person, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-card text-center"
            >
              <CardContent className="p-6 space-y-4">
                {/* Avatar placeholder */}
                <div className="w-56 h-56 mx-auto rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Image
                    src={person.foto}
                    alt={person.name}
                    className={`w-full h-full rounded-full ${person.name === "Prof. Dr. Basílio Silva Neto" ? "object-cover object-[center_20%] scale-95" : "object-cover"}`}
                    width={96}
                    height={96}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{person.name}</h3>
                  <p className="text-sm text-primary font-medium">{person.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Instituições parceiras
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <Image src={partner.logo} alt={partner.name} className="w-10 h-10 rounded-lg"  width={20} height={20}/>
                <span className="text-sm font-medium text-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
