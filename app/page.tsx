import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import VideoTextSection from "@/components/video-text-section"
import BeforeAfterSection from "@/components/before-after-section"
import SurgerySection from "@/components/surgery-section"
import PostOpSection from "@/components/post-op-section"
import AboutDoctorSection from "@/components/about-doctor-section"
import TestimonialsSection from "@/components/testimonials-section"
import MapSection from "@/components/map-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Wells Clinic | Dr. Alan Wells - Transplante Capilar Natural",
  description:
    "Clínica especializada em transplante capilar natural com o renomado Dr. Alan Wells. Técnicas avançadas e resultados naturais.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <VideoTextSection
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Tecnologia Mundialmente Reconhecida"
          text="Trabalhamos com uma tecnologia mundialmente reconhecida como a melhor para dar maior naturalidade. Realizamos o Transplante Capilar utilizando somente unidades foliculares, uma a uma e fazendo micro orifícios com orientação coronal para que a direção dos cabelos seja exatamente como o cabelo natural. Nossas lâminas variam de 0,6 até no máximo 1 mm, para que possamos atingir alta densidade na colocação. Uma equipe de 8 pessoas nos permite realizar mega e giga sessões."
          doctorName="Dr. Alan Wells"
          videoOnLeft={true}
        />
        <BeforeAfterSection />
        <SurgerySection />
        <PostOpSection />
        <AboutDoctorSection />
        <TestimonialsSection />
        <MapSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

