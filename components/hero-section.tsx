"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import SimpleCarousel from "./simple-carousel"

export default function HeroSection() {
  const phrases = [
    "realizar um Transplante Capilar Natural",
    "voltar a ter Confiança",
    "aumentar a sua Auto Estima",
    "melhorar o seu Visual",
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

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl text-left text-white">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">Dr. Alan</p>
              <p className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">Expert</p>
              <p className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">renovamdo</p>
              <p className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">mundialmente</p>
              <p className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">no Transplante</p>
              <p className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Capilar Natural</p>
            </motion.div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-medium mb-2">Este é o lugar certo para</h2>
              <motion.div
                key={currentPhraseIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="h-12"
              >
                <span className="text-2xl md:text-3xl font-medium text-primary">{phrases[currentPhraseIndex]}</span>
              </motion.div>
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

