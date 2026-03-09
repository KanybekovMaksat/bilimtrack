import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <img src="/logo.svg" alt="" />
            </div>
            <span className="font-semibold text-xl">Bilimtrack</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Возможности
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Тарифы
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Отзывы
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">
            <a href="tel:+996552077970">
              <Phone className="mr-2 h-4 w-4" />
              Связаться
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" asChild>
            <a href="tel:+996552077970">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}