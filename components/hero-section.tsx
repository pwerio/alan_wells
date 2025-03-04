"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import SimpleCarousel from "./simple-carousel"

export default function HeroSection() {
  const phrases = [
    "Fazer um Transplante Capilar Natural",
    "Voltar a ter confiança no seu cabelo",
    "Aumentar a sua auto estima",
    "Melhorar o seu visual",
  ]

  const heroImages = ["Hero_01", "Hero_02", "Hero_03"]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        setIsVisible(true)
      }, 500)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-screen">
      <SimpleCarousel images={heroImages} />

      {/* Removido o div com o filtro escuro */}

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl text-left text-white">
            {" "}
            {/* Alterado para text-left */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <p>Dr. Alan</p>
              <p>Expert</p>
              <p>renovamdo</p>
              <p>mundialmente</p>
              <p>no Transplante</p>
              <p>Capilar Natural</p>
            </h1>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-medium mb-2">
                {" "}
                {/* Aumentado o tamanho da fonte */}
                Este é o lugar certo para
              </h2>
              <span
                className={`text-2xl md:text-3xl font-medium text-primary transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
              >
                {phrases[currentPhraseIndex]}
              </span>
            </div>
            <Button size="lg" className="mt-6">
              Agende sua consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

