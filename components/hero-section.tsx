"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const phrases = [
    "Fazer um Transplante Capilar Natural",
    "Voltar a ter confiança no seu cabelo",
    "Aumentar a sua auto estima",
    "Melhorar o seu visual",
  ]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        setIsVisible(true)
      }, 500)
    }, 2500) // Alterado para 2.5 segundos conforme solicitado

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative py-20 md:py-32 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start text-left space-y-8 max-w-2xl">
          {" "}
          {/* Alterado para alinhar à esquerda */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Você entrou no site do renomado mundialmente Dr. Alan Wells
          </h1>
          <div className="h-16 flex flex-col items-start justify-center">
            {" "}
            {/* Alterado para alinhar à esquerda */}
            <h2 className="text-xl md:text-2xl font-medium">
              Você veio ao lugar certo caso você queira {/* Texto fixo */}
            </h2>
            <span
              className={`text-xl md:text-2xl font-medium text-primary transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {phrases[currentPhraseIndex]} {/* Apenas a frase que muda */}
            </span>
          </div>
          <Button size="lg" className="mt-6">
            Agende sua consulta
          </Button>
        </div>
      </div>
    </section>
  )
}

