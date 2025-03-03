import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Wells Clinic</h3>
            <p className="text-muted-foreground mb-4">
              Clínica especializada em transplante capilar natural com o renomado Dr. Alan Wells.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link href="https://wa.me/5511950507175" className="text-muted-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <address className="not-italic text-muted-foreground">
              <p>Av. Paulista, 1000 - Bela Vista</p>
              <p>São Paulo - SP, 01310-100</p>
              <p className="mt-2">Telefone: (11) 95050-7175</p>
              <p>Email: contato@wellsclinic.com.br</p>
            </address>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Horário de Funcionamento</h3>
            <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
            <p className="text-muted-foreground">Sábado: 8h às 12h</p>
            <p className="text-muted-foreground">Domingo: Fechado</p>

            <div className="mt-6">
              <h3 className="font-bold text-lg mb-4">Credenciamentos</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-background p-2 rounded-md w-20 h-10 flex items-center justify-center">
                  <span className="text-xs font-medium">SBCP</span>
                </div>
                <div className="bg-background p-2 rounded-md w-20 h-10 flex items-center justify-center">
                  <span className="text-xs font-medium">ABCRC</span>
                </div>
                <div className="bg-background p-2 rounded-md w-20 h-10 flex items-center justify-center">
                  <span className="text-xs font-medium">ISHRS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wells Clinic. Todos os direitos reservados.</p>
          <p className="mt-1">
            <Link href="/privacidade" className="hover:underline">
              Política de Privacidade
            </Link>{" "}
            |
            <Link href="/termos" className="hover:underline ml-2">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

