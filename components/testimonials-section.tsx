"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  comment: string
  rating: number
  source: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "João Silva",
      comment:
        "Excelente atendimento e resultado. O Dr. Alan é muito atencioso e o resultado do meu transplante ficou extremamente natural.",
      rating: 5,
      source: "Instagram",
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      comment:
        "Fiz meu transplante há 1 ano e estou muito satisfeito. A equipe toda é muito profissional e o pós-operatório foi tranquilo como prometido.",
      rating: 5,
      source: "Facebook",
    },
    {
      id: 3,
      name: "Marcelo Santos",
      comment:
        "Recomendo o Dr. Alan para quem busca naturalidade. Meus amigos nem perceberam que fiz transplante, apenas notaram que estou com aparência melhor.",
      rating: 5,
      source: "Google",
    },
    {
      id: 4,
      name: "Roberto Almeida",
      comment:
        "Procedimento indolor e resultado incrível. Valeu cada centavo investido. Minha autoestima melhorou muito.",
      rating: 5,
      source: "Instagram",
    },
    {
      id: 5,
      name: "Paulo Mendes",
      comment:
        "Clínica impecável e atendimento de primeira. O Dr. Alan é referência no assunto e isso fica claro no resultado.",
      rating: 5,
      source: "Facebook",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Depoimentos dos Pacientes</h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Veja o que nossos pacientes dizem sobre sua experiência na Wells Clinic.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-4 text-sm">{testimonial.comment}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">via {testimonial.source}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  )
}

