import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
      {/* Top mini menu - agora com fundo preto e texto branco */}
      <div className="bg-black text-white">
        <div className="container flex h-10 items-center justify-between text-sm">
          <div className="hidden md:flex items-center space-x-4">
            <span className="hover:text-gray-300 transition-colors">Horário: Seg-Sex 8h às 18h | Sáb 8h às 12h</span>
            <span className="hover:text-gray-300 transition-colors">Av. Angélica, 2.530 - São Paulo, SP</span>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <Link href="https://facebook.com/dralanwellsoficial/" className="text-white hover:text-gray-300 transition-colors">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com/dralanwells/" className="text-white hover:text-gray-300 transition-colors">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.youtube.com/@ImplanteCapilar" className="text-white hover:text-gray-300 transition-colors">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">Youtube</span>
            </Link>
            <Link
              href="https://wa.me/5511950507175"
              className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(11) 95050-7175</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu principal - agora com fundo #04384E e texto/logo #FD753D */}
      <div className="bg-[#04384E] text-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-[#FD753D]">Wells Clinic</div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium text-[#FD753D] hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#sobre" className="text-sm font-medium text-[#FD753D] hover:text-white transition-colors">
              Sobre
            </Link>
            <Link href="#tecnicas" className="text-sm font-medium text-[#FD753D] hover:text-white transition-colors">
              Técnicas
            </Link>
            <Link href="#cases" className="text-sm font-medium text-[#FD753D] hover:text-white transition-colors">
              Cases
            </Link>
            <Link href="#cirurgia" className="text-sm font-medium text-[#FD753D] hover:text-white transition-colors">
              Cirurgia
            </Link>
            <Link href="#contato" className="text-sm font-medium text-[#FD753D] hover:text-white transition-colors">
              Contato
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden text-[#FD753D] border-[#FD753D] hover:bg-[#FD753D] hover:text-white"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  )
}

