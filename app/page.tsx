import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Objective } from "@/components/objective"
import { Schedule } from "@/components/schedule"
import { Proposal } from "@/components/proposal"
import { Legacy } from "@/components/legacy"
import { Organization } from "@/components/organization"
import { Registration } from "@/components/registration"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Objective />
      <Schedule />
      <Proposal />
      <Legacy />
      <Organization />
      <Registration />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
