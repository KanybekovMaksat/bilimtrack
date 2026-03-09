import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function PrivacyPage() {
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
                    Политика конфиденциальности
                </h1>

                <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
                    <p className="text-foreground text-base">
                        Дата последнего обновления: 9 марта 2026 г.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">1. Общие положения</h2>
                        <p>
                            Настоящая Политика конфиденциальности определяет порядок обработки и защиты
                            персональных данных пользователей платформы Bilimtrack (далее — «Платформа»),
                            принадлежащей компании Bilimtrack (далее — «Компания»).
                        </p>
                        <p>
                            Используя Платформу, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
                            Если вы не согласны с данными условиями, пожалуйста, не используйте Платформу.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">2. Какие данные мы собираем</h2>
                        <p>Мы собираем следующие категории данных:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>ФИО студентов, преподавателей и администраторов</li>
                            <li>Контактные данные (телефон, email)</li>
                            <li>Данные об обучении (оценки, посещаемость, группы)</li>
                            <li>Данные авторизации (логин) </li>
                            <li>Технические данные (IP-адрес, тип браузера, устройство)</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">3. Цели обработки данных</h2>
                        <p>Персональные данные обрабатываются для:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Обеспечения работы Платформы и предоставления услуг</li>
                            <li>Управления учебным процессом (расписание, оценки, посещаемость)</li>
                            <li>Коммуникации с пользователями (уведомления, поддержка)</li>
                            <li>Улучшения качества сервиса и аналитики</li>
                            <li>Выполнения требований законодательства</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">4. Защита данных</h2>
                        <p>
                            Мы применяем современные технические и организационные меры для защиты
                            персональных данных от несанкционированного доступа, изменения, раскрытия
                            или уничтожения. Все данные хранятся на защищённых серверах с резервным копированием.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">5. Передача данных третьим лицам</h2>
                        <p>
                            Мы не продаём, не передаём и не раскрываем персональные данные третьим лицам,
                            за исключением случаев, предусмотренных законодательством Кыргызской Республики.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">6. Права пользователей</h2>
                        <p>Вы имеете право:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Получить информацию о своих персональных данных</li>
                            <li>Требовать исправления неточных данных</li>
                            <li>Требовать удаления своих данных</li>
                            <li>Отозвать согласие на обработку данных</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-foreground">7. Контакты</h2>
                        <p>
                            По вопросам, связанным с обработкой персональных данных,
                            вы можете связаться с нами:
                        </p>
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
