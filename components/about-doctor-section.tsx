import Image from "next/image"

export default function AboutDoctorSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sobre o Dr. Wells</h2>
            <div className="text-sm text-muted-foreground mb-4">CRM 90733 | RQE 68311</div>
            <h3 className="text-xl font-semibold mb-2">Dr. Alan Wells</h3>
            <h4 className="text-lg font-medium text-muted-foreground mb-4">
              Cirurgião Plástico especialista em Transplante Capilar Natural
            </h4>

            <div className="space-y-4">
              <p>
                Formado como Cirurgião Plástico na Universidade de São Paulo (USP), um dos mais prestigiados Serviços de
                Cirurgia Reparadora e Estética da América do Sul e reconhecida Mundialmente pela excelência, Dr. Alan
                Wells faz parte da diretoria da maior Associação de Cirurgia Capilar do Brasil, a ABCRC (Associação
                Brasileira de Cirurgia e Restauração Capilar), no biênio 2023, 2024.
              </p>
              <p>
                Coordenador Cientifico do Congresso Brasileiro de Cirurgia Capilar edição 2024, onde centenas de
                Cirurgiões da Europa, Estados Unidos, Ásia, América do Sul estarão presente no evento, um dos mais
                importantes do mundo.
              </p>
              <p>
                Além de Cirurgião Plástico Especialista pela Sociedade Brasileira de Cirurgia Plástica, agora em 2024 se
                tornou Membro Titular da SBCP, após apresentar um trabalho Científico para uma rigorosa banca
                examinadora.
              </p>
              <p>
                Há 20 anos frequenta Congressos Mundiais de Cirurgia Capilar na Europa, Estados Unidos e América do Sul,
                sendo constantemente convidado para Palestrar sobre sua técnica de Transplante Natural.
              </p>
              <p>
                Foi Professor no Curso de Formação, Basics Course no Panamá, pela ISHRS, International Society of Hair
                Restoration Surgery em 2022, em 2023 palestrou em Punta Cana, Republica Dominicana, no Congresso Ibero
                Americano de Cirurgia Capilar.
              </p>
              <p>
                Dr. Alan Wells atualmente é Coordenador do Curso de Formação dos Cirurgiões da Associação Brasileira de
                Cirurgia Capilar e uma referência em transplante com a máxima naturalidade.
              </p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden">
            <Image src="/alan wells_02" alt="Dr. Alan Wells" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

