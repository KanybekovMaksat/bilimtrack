import { Card, CardContent } from "./ui/card";
import {
  Users,
  Calendar,
  BookOpen,
  GraduationCap,
  BarChart3,
  Bell,
  Trophy,
  MessageSquare,
  ClipboardCheck,
  FolderOpen,
  Shield,
  Smartphone,
  Building2,
  BookOpenCheck,
  type LucideIcon
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGroup {
  label: string;
  icon: LucideIcon;
  description: string;
  features: Feature[];
}

const featureGroups: FeatureGroup[] = [
  {
    label: "Для администрации",
    icon: Building2,
    description: "Полный контроль над учебным процессом",
    features: [
      { icon: Users, title: "Управление студентами", description: "Профили, история обучения и контакты — всё в одном месте." },
      { icon: GraduationCap, title: "Преподаватели", description: "Нагрузка, расписание и эффективность каждого преподавателя." },
      { icon: FolderOpen, title: "Группы и классы", description: "Организация по курсам, уровням и направлениям." },
      { icon: BarChart3, title: "Аналитика и отчёты", description: "Статистика успеваемости, посещаемости и активности." },
    ]
  },
  {
    label: "Для преподавателей",
    icon: BookOpenCheck,
    description: "Удобные инструменты для ежедневной работы",
    features: [
      { icon: Calendar, title: "Умное расписание", description: "Визуальный редактор с автоматическими уведомлениями." },
      { icon: ClipboardCheck, title: "Электронный журнал", description: "Оценки, посещаемость и комментарии в цифровом формате." },
      { icon: BookOpen, title: "Темы и домашние задания", description: "Темы уроков, материалы и ДЗ в одном месте." },
      { icon: Bell, title: "Новости и уведомления", description: "Объявления для всего заведения или отдельных групп." },
    ]
  },
  {
    label: "Для студентов",
    icon: GraduationCap,
    description: "Мотивация и удобство обучения",
    features: [
      { icon: Trophy, title: "Геймификация и рейтинги", description: "Баллы, достижения и соревновательные рейтинги." },
      { icon: MessageSquare, title: "Форумы и чаты", description: "Вопросы преподавателям и обсуждения внутри системы." },
      { icon: Smartphone, title: "Любое устройство", description: "Телефон, планшет или ПК — доступ 24/7." },
      { icon: Shield, title: "Безопасность данных", description: "Доступ по ролям, защита и резервное копирование." },
    ]
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Возможности платформы
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Одна система вместо десятка инструментов
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {featureGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center">
                  <group.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{group.label}</h3>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </div>
              </div>

              {/* Group Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.features.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors duration-300">
                        <feature.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1.5">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}