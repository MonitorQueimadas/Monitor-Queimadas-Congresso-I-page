import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Instagram } from "lucide-react"

// PLACEHOLDERS - Substitua pelos dados reais
const WHATSAPP_LINK = "#WHATSAPP"
const EMAIL = "contato@exemplo.com"
const INSTAGRAM_LINK = "#INSTAGRAM"

export function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">
              Fale conosco
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Contato
            </h2>
            <p className="text-muted-foreground">
              Para dúvidas sobre o evento, entre em contato com a organização.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href={`mailto:${EMAIL}`}>
                <Mail className="w-5 h-5 mr-2" />
                E-mail
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
