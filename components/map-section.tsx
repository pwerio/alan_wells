export default function MapSection() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Localização</h2>
            <p className="text-muted-foreground mb-6">
              Estamos localizados em uma região privilegiada de São Paulo, com fácil acesso e estacionamento.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Endereço:</h3>
                <p>Av. Angélica, 2.530 - Bela Vista</p>
                <p>São Paulo - SP, 01228-200</p>
              </div>
              <div>
                <h3 className="font-semibold">Horário de Funcionamento:</h3>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
              <div>
                <h3 className="font-semibold">Contato:</h3>
                <p>Telefone: (11) 98711-2969</p>
                <p>Email: contato@wellsclinic.com.br</p>
              </div>
            </div>
          </div>
          <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951624297!2d-46.65390548502264!3d-23.563273284682785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1647289523698!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

