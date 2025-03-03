"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)

    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas dicas e novidades em breve.",
    })

    setEmail("")
  }

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Receba Nossas Dicas</h2>
          <p className="text-muted-foreground mb-8">
            Inscreva-se em nossa newsletter para receber dicas sobre cuidados capilares, novidades e promoções
            exclusivas.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Inscrever-se</Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Ao se inscrever, você concorda com nossa política de privacidade. Não compartilhamos seus dados.
          </p>
        </div>
      </div>
    </section>
  )
}

