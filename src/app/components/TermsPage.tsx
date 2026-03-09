import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function TermsPage() {
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
                    Условия использования
                </h1>

                <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
                    <p className="text-foreground text-base">
                        Дата последнего обновления: 9 марта 2026 г.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">1. Общие положения</h2>
                        <p>
                            Настоящие Условия использования (далее — «Условия») регулируют доступ к платформе
                            Bilimtrack и её использование. Платформа предоставляет цифровые инструменты для
                            управления учебным процессом в образовательных учреждениях.
                        </p>
                        <p>
                            Регистрируясь и используя Платформу, вы подтверждаете своё согласие
                            с настоящими Условиями.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">2. Описание сервиса</h2>
                        <p>Bilimtrack предоставляет следующие услуги:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Управление студентами, преподавателями и группами</li>
                            <li>Электронный журнал оценок и посещаемости</li>
                            <li>Формирование расписания занятий</li>
                            <li>Система геймификации и рейтингов</li>
                            <li>Публикация новостей и уведомлений</li>
                            <li>Встроенные форумы и чаты</li>
                            <li>Аналитика и отчётность</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">3. Тарифы и оплата</h2>
                        <p>
                            Платформа предоставляет бесплатный базовый функционал для учебных заведений
                            до 50 человек. Расширенные тарифы оплачиваются в соответствии с действующей
                            тарифной сеткой, опубликованной на сайте.
                        </p>
                        <p>
                            Для организаций с 1000+ студентов предусмотрена модель индивидуальной оплаты
                            студентами. Все условия оплаты согласуются индивидуально.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">4. Обязанности пользователей</h2>
                        <p>Пользователи обязуются:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Предоставлять достоверную информацию при регистрации</li>
                            <li>Не передавать учётные данные третьим лицам</li>
                            <li>Использовать Платформу только в законных целях</li>
                            <li>Не нарушать работу Платформы и не пытаться получить несанкционированный доступ</li>
                            <li>Соблюдать авторские права и интеллектуальную собственность</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">5. Интеллектуальная собственность</h2>
                        <p>
                            Все права на Платформу, включая программный код, дизайн, логотип и контент,
                            принадлежат компании Bilimtrack. Копирование, распространение или модификация
                            материалов Платформы без письменного согласия запрещены.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">6. Ограничение ответственности</h2>
                        <p>
                            Компания прилагает все усилия для обеспечения бесперебойной работы Платформы,
                            однако не гарантирует отсутствие технических сбоев. Компания не несёт ответственности
                            за убытки, возникшие вследствие использования или невозможности использования Платформы.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">7. Изменение условий</h2>
                        <p>
                            Компания оставляет за собой право изменять настоящие Условия.
                            Актуальная версия всегда доступна на данной странице.
                            Продолжение использования Платформы после изменений означает согласие с новыми Условиями.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">8. Контакты</h2>
                        <p>По всем вопросам обращайтесь:</p>
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
