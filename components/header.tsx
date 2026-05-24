"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#objetivo", label: "Objetivo" },
  { href: "#programacao", label: "Programação" },
  { href: "#proposta", label: "Proposta" },
  { href: "#organizacao", label: "Organização" },
  { href: "#local", label: "Local" },
  { href: "#inscricao", label: "Inscrição" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-22 md:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 group  w-[250px]">
           <Image src="./logos/logoconectavertical.png" alt="Logo do Evento" className="w-[100%] h-[100%]" width={52} height={52}/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href={'https://www.even3.com.br/1-congresso-conecta-chapada-do-araripe-737737/'} target="_blank">
                Inscreva-se
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href={'https://www.even3.com.br/1-congresso-conecta-chapada-do-araripe-737737/'} target="_blank">
                  Inscreva-se
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
