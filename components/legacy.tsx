import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Handshake, Landmark } from "lucide-react"

export function Legacy() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-green-dark to-primary" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-white/30 rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <span className="inline-block text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
              Resultado esperado
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
              Um marco de articulação pela Chapada
            </h2>
          </div>

          <div className="space-y-6 text-primary-foreground/90 leading-relaxed text-left md:text-center">
            <p className="text-lg">
              Como resultado prático, propõe-se a criação de uma 
              <strong className="text-white"> comissão interinstitucional e multidisciplinar</strong>, 
              reunindo representantes da sociedade civil, do poder público, da academia e de 
              organizações sociais.
            </p>
            <p>
              Essa comissão terá como objetivo unificar e coordenar diferentes iniciativas em prol 
              da defesa contínua da Chapada do Araripe, especialmente em um momento estratégico em 
              que a região se apresenta como <strong className="text-white">candidata a patrimônio 
              mundial pela UNESCO</strong>.
            </p>
            <p>
              Dessa forma, o evento se consolida não apenas como um espaço de diálogo, mas como um 
              marco inicial de articulação conjunta e mobilização permanente, orientado por inovação, 
              participação social e compromisso com o futuro do território.
            </p>
          </div>

          {/* Highlight card */}
          <Card className="mt-12 bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex justify-center gap-6 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xl font-semibold text-white text-center">
                {"\"Diálogo, inovação e mobilização permanente pela Chapada do Araripe.\""}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
