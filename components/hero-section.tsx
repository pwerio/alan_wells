"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

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
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-screen">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {[1, 2, 3].map((_, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <Image
                src={`/Hero_01?height=1080&width=1920&text=Imagem+Hero+${index + 1}`}
                alt={`Hero Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-20" />
        <CarouselNext className="absolute right-4 z-20" />
      </Carousel>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />{" "}
      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Você entrou no site do renomado mundialmente Dr. Alan Wells
            </h1>
            <div className="h-16 flex flex-col items-center justify-center mb-8">
              <h2 className="text-xl md:text-2xl font-medium">Você veio ao lugar certo caso você queira</h2>
              <span
                className={`text-xl md:text-2xl font-medium text-primary transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
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

