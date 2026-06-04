import { Card, CardContent } from "./ui/card";
import {
    AlertTriangle,
    Settings,
    GraduationCap,
    LayoutDashboard,
    Gamepad2,
    CheckCircle,
    ArrowRight,
    ArrowDown,
    type LucideIcon
} from "lucide-react";

interface RoadmapStep {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
}

const steps: RoadmapStep[] = [
    {
        icon: Settings,
        title: "Подключение системы",
        description: "Настраиваем платформу, импортируем данные студентов, создаём группы и расписание. Всё берём на себя.",
        color: "bg-blue-600"
    },
    {
        icon: GraduationCap,
        title: "Обучение сотрудников",
        description: "Проводим тренинги для администрации и преподавателей. Каждый научится работать с первого дня.",
        color: "bg-indigo-600"
    },
    {
        icon: LayoutDashboard,
        title: "Запуск и контроль",
        description: "Администрация получает полную панель управления: аналитика, отчёты, управление доступом.",
        color: "bg-purple-600"
    },
    {
        icon: Gamepad2,
        title: "Геймификация и мотивация",
        description: "Студенты получают рейтинги, достижения и прогресс. Обучение становится увлекательным.",
        color: "bg-pink-600"
    }
];

export function HowWeWorkSection() {
    return (
        <section id="how-we-work" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.08] mb-4">
                        Как мы работаем
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed">
                        От хаоса к полной цифровизации за одну неделю.
                        Вам не нужно ничего настраивать — мы делаем всё за вас.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* START: Current State */}
                    <div className="text-center mb-6">
                        <Card className="inline-block border-red-200 dark:border-red-900/40">
                            <CardContent className="px-6 py-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center flex-shrink-0">
                                    <AlertTriangle className="h-5 w-5 text-red-500" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-sm">Сейчас</div>
                                    <div className="text-xs text-muted-foreground">
                                        Excel-таблицы, бумажные журналы, хаос в чатах
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center mb-6">
                        <ArrowDown className="h-6 w-6 text-muted-foreground/40" />
                    </div>

                    {/* STEPS */}
                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <div key={index}>
                                {/* Step Card */}
                                <div className="flex items-start gap-4">
                                    {/* Timeline line + dot */}
                                    <div className="flex flex-col items-center flex-shrink-0">
                                        <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center`}>
                                            <step.icon className="h-6 w-6 text-white" />
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="w-px h-full min-h-[40px] bg-border my-2"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <Card className="flex-1 mb-4">
                                        <CardContent className="p-5">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-medium text-muted-foreground">Шаг {index + 1}</span>
                                            </div>
                                            <h3 className="font-semibold text-base mb-1.5">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Arrow between steps */}
                                {index < steps.length - 1 && (
                                    <div className="flex items-center ml-[22px] -mt-2 mb-2">
                                        <ArrowDown className="h-4 w-4 text-muted-foreground/30" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Arrow down to result */}
                    <div className="flex justify-center my-6">
                        <ArrowDown className="h-6 w-6 text-muted-foreground/40" />
                    </div>

                    {/* END: Result State */}
                    <div className="text-center">
                        <Card className="inline-block border-green-200 dark:border-green-900/40">
                            <CardContent className="px-6 py-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-sm">Результат</div>
                                    <div className="text-xs text-muted-foreground">
                                        Полностью цифровое заведение с мотивированными студентами
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="#demo"
                            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 font-semibold text-sm px-6 py-3 hover:bg-blue-100 transition-colors"
                        >
                            Посмотреть демо <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
