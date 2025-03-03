export default function SurgerySection() {
  return (
    <section id="cirurgia" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="w-full h-full"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Como funciona a Cirurgia de Transplante Capilar?</h2>
            <p className="text-muted-foreground">
              A cirurgia é realizada no hospital com o acompanhamento de um médico anestesista durante todo o tempo. É
              indolor, o paciente dorme e somos um time amplo garantindo a máxima qualidade e segurança durante todo o
              procedimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

