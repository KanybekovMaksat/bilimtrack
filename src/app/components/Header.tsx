import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1200px] mx-auto flex h-16 items-center justify-between px-5 md:px-10 lg:px-16">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <img src="/logo.svg" alt="" />
            </div>
            <span className="font-semibold text-xl">Bilimtrack</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <a href="#product" className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-150">
              Возможности
            </a>
            <a href="#pricing" className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-150">
              Тарифы
            </a>
            <a href="#trusted" className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-150">
              Партнёры
            </a>
            <a href="#testimonials" className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-150">
              Отзывы
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <Button asChild className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">
            <a href="#demo">Посмотреть демо</a>
          </Button>
          <Button asChild size="sm" className="md:hidden bg-blue-600 hover:bg-blue-700">
            <a href="#demo">Демо</a>
          </Button>
        </div>
      </div>
    </header>
  );
}