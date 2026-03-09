import { Card, CardContent } from "./ui/card";
import {
    FileSpreadsheet,
    Monitor,
    UserX,
    UserCheck,
    Frown,
    Trophy,
    MessagesSquare,
    MessageCircle,
    ArrowRight,
    type LucideIcon
} from "lucide-react";

interface Problem {
    problemIcon: LucideIcon;
    problem: string;
    problemDesc: string;
    solutionIcon: LucideIcon;
    solution: string;
    solutionDesc: string;
}

const problems: Problem[] = [
    {
        problemIcon: FileSpreadsheet,
        problem: "Excel-таблицы и бумажные журналы",
        problemDesc: "Данные теряются, дублируются, невозможно отследить историю изменений",
        solutionIcon: Monitor,
        solution: "Единая цифровая система",
        solutionDesc: "Все данные в облаке, с историей и резервными копиями. Доступ 24/7 с любого устройства",
    },
    {
        problemIcon: UserX,
        problem: "Нет контроля посещаемости",
        problemDesc: "Преподаватели тратят время на перекличку, администрация не видит реальной картины",
        solutionIcon: UserCheck,
        solution: "Автоматический учёт посещаемости",
        solutionDesc: "Преподаватель отмечает за секунды, администрация видит статистику в реальном времени",
    },
    {
        problemIcon: Frown,
        problem: "Студенты не мотивированы",
        problemDesc: "Отсутствие обратной связи и соревновательного духа снижает вовлечённость",
        solutionIcon: Trophy,
        solution: "Геймификация и рейтинги",
        solutionDesc: "Баллы, достижения, рейтинг — студенты видят свой прогресс и стремятся к лучшим результатам",
    },
    {
        problemIcon: MessagesSquare,
        problem: "Хаос в коммуникации",
        problemDesc: "Информация разбросана по WhatsApp, Telegram, устным договорённостям",
        solutionIcon: MessageCircle,
        solution: "Встроенные форумы и чаты",
        solutionDesc: "Вся коммуникация внутри системы: новости, обсуждения, уведомления — ничего не потеряется",
    }
];

export function ProblemsSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                        Какие проблемы мы решаем
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                        Знакомые ситуации? Bilimtrack создан, чтобы избавить вас от этих
                        повседневных проблем раз и навсегда.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {problems.map((item, index) => (
                        <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    {/* Problem */}
                                    <div className="flex-1">
                                        <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center mb-3">
                                            <item.problemIcon className="h-5 w-5 text-red-500" />
                                        </div>
                                        <h3 className="font-semibold text-sm mb-1.5">{item.problem}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {item.problemDesc}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex-shrink-0 mt-3">
                                        <ArrowRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-blue-500 transition-colors duration-300" />
                                    </div>

                                    {/* Solution */}
                                    <div className="flex-1">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-3">
                                            <item.solutionIcon className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <h3 className="font-semibold text-sm mb-1.5">{item.solution}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {item.solutionDesc}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
