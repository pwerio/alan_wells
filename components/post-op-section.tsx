export default function PostOpSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/61JMDcqCxr8"
                className="w-full h-full"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Como é o pós-operatório do Transplante Capilar?</h2>
            <p className="text-muted-foreground">
              O paciente vai para casa no mesmo dia e pode realizar as atividades normalmente. O pós-operatório do
              transplante capilar é tranquilo, seguro e você receberá todas as orientações necessárias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

