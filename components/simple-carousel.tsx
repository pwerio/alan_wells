"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface SimpleCarouselProps {
  images: string[]
}

export default function SimpleCarousel({ images }: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Muda a imagem a cada 5 segundos

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={`/${image}.png`} alt={`Slide ${index + 1}`} fill style={{ objectFit: "cover" }} priority />
        </div>
      ))}
    </div>
  )
}

