"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"

interface BeforeAfterCase {
  id: number
  title: string
  beforeImage: string
  afterImage: string
}

export default function BeforeAfterSection() {
  const [sliderValue, setSliderValue] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  const cases: BeforeAfterCase[] = [
    {
      id: 1,
      title: "Caso 1 - Transplante Frontal",
      beforeImage: "/Caso1_antes.png",
      afterImage: "/Caso1_depois.png",
    },
    {
      id: 2,
      title: "Caso 2 - Transplante Coronal",
      beforeImage: "/Caso2_antes.png",
      afterImage: "/Caso2_depois.png",
    },
    {
      id: 3,
      title: "Caso 3 - Transplante Total",
      beforeImage: "/Caso3_antes.png",
      afterImage: "/Caso3_depois.png",
    },
  ]

  const [currentCase, setCurrentCase] = useState(cases[0])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = (x / rect.width) * 100
      setSliderValue(Math.min(Math.max(percentage, 0), 100))
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current && e.touches[0]) {
      const rect = sliderRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const percentage = (x / rect.width) * 100
      setSliderValue(Math.min(Math.max(percentage, 0), 100))
    }
  }

  return (
    <section id="cases" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Portfólio de Casos</h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Veja os resultados impressionantes dos nossos pacientes. Deslize sobre a imagem para comparar o antes e
            depois.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setCurrentCase(c)}
              className={`px-4 py-2 rounded-md ${
                currentCase.id === c.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div
          className="relative max-w-3xl mx-auto aspect-[4/3] overflow-hidden rounded-lg cursor-ew-resize"
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          <div className="absolute inset-0">
            <Image
              src={currentCase.afterImage || "/placeholder.svg"}
              alt="Depois"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderValue}%` }}>
            <Image
              src={currentCase.beforeImage || "/placeholder.svg"}
              alt="Antes"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderValue}%`, marginLeft: "-2px" }}
          ></div>

          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">Antes</div>
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">Depois</div>
        </div>
      </div>
    </section>
  )
}

