import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function CookiesPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <Button variant="ghost" className="mb-8" asChild>
                    <a href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        На главную
                    </a>
                </Button>

                <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
                    Политика использования Cookie
                </h1>

                <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
                    <p className="text-foreground text-base">
                        Дата последнего обновления: 9 марта 2026 г.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">1. Что такое Cookie</h2>
                        <p>
                            Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве
                            при посещении веб-сайтов. Они помогают обеспечить корректную работу сайта,
                            запоминать ваши предпочтения и улучшать пользовательский опыт.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">2. Какие Cookie мы используем</h2>

                        <h3 className="text-base font-medium text-foreground">Необходимые Cookie</h3>
                        <p>
                            Эти файлы необходимы для работы Платформы. Без них невозможна авторизация,
                            навигация по страницам и использование основных функций. Они не могут быть отключены.
                        </p>

                        <h3 className="text-base font-medium text-foreground">Функциональные Cookie</h3>
                        <p>
                            Запоминают ваши настройки (язык интерфейса, предпочтения отображения)
                            для более удобного использования Платформы.
                        </p>

                        <h3 className="text-base font-medium text-foreground">Аналитические Cookie</h3>
                        <p>
                            Помогают нам понять, как пользователи взаимодействуют с Платформой,
                            какие страницы посещают чаще, и выявлять проблемы в работе сервиса.
                            Данные собираются в обезличенном виде.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">3. Управление Cookie</h2>
                        <p>
                            Вы можете управлять Cookie через настройки вашего браузера.
                            Большинство браузеров позволяют блокировать или удалять Cookie.
                            Обратите внимание, что отключение Cookie может повлиять на работу Платформы.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">4. Срок хранения</h2>
                        <p>
                            Сессионные Cookie удаляются после закрытия браузера.
                            Постоянные Cookie хранятся на вашем устройстве до истечения срока действия
                            или до их удаления вами вручную.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">5. Контакты</h2>
                        <p>По вопросам использования Cookie обращайтесь:</p>
                        <ul className="list-none space-y-1">
                            <li>Телефон: +996 552 077 970</li>
                            <li>Email: info@bilimtrack.com</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
