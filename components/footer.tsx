import Link from "next/link"
import { Leaf } from "lucide-react"
import Image from "next/image"

const quickLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#objetivo", label: "Objetivo" },
  { href: "#programacao", label: "Programação" },
  { href: "#proposta", label: "Proposta" },
  { href: "#organizacao", label: "Organização" },
  { href: "#local", label: "Local" },
  { href: "#inscricao", label: "Inscrição" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="./logos/LogodoCongresso.png" alt="Logo do Evento" className="w-[70%] h-[100%]" width={40} height={40}/>
              
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Movimento, tecnologias e proteção meio ambiente.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Juazeiro do Norte — CE
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Links rápidos</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Event info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Informações</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>11 de junho</p>
              <p>08h às 18h</p>
              <p>Auditório Kariris</p>
              <p>IFCE campus Juazeiro do Norte</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Conecta Chapada do Araripe. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
            <span>Desenvolvido com</span>
            <span className="text-secondary">♥</span>
            <span>para a Chapada do Araripe</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
