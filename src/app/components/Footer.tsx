import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">📚</span>
              </div>
              <span className="font-semibold text-xl">Bilimtrack</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Цифровая экосистема для современного обучения. Управляйте студентами, 
              преподавателями, расписанием и всем учебным процессом в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Ваш email" 
                className="max-w-xs"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">Подписаться</Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Обновления</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Дорожная карта</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Ресурсы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Руководства</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">База знаний</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Поддержка</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2026 Bilimtrack. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}