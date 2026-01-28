import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  BarChart3, 
  Bell,
  FolderOpen,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Управление студентами",
    description: "Добавляйте студентов, управляйте их профилями, отслеживайте прогресс и успеваемость в одном месте.",
    badge: "Базовый"
  },
  {
    icon: GraduationCap,
    title: "Преподаватели",
    description: "Управляйте преподавательским составом, распределяйте нагрузку и отслеживайте расписание занятий.",
    badge: "Базовый"
  },
  {
    icon: Calendar,
    title: "Расписание",
    description: "Создавайте и управляйте расписанием занятий, автоматически отправляйте уведомления об изменениях.",
    badge: "Базовый"
  },
  {
    icon: FolderOpen,
    title: "Группы и классы",
    description: "Организуйте студентов по группам, управляйте составом и распределяйте учебную нагрузку.",
    badge: "Базовый"
  },
  {
    icon: BookOpen,
    title: "Учебные материалы",
    description: "Загружайте и организуйте учебные материалы, видео, презентации и документы для студентов.",
    badge: "Про"
  },
  {
    icon: BarChart3,
    title: "Аналитика и отчёты",
    description: "Получайте детальную статистику по успеваемости, посещаемости и активности студентов.",
    badge: "Про"
  },
  {
    icon: Bell,
    title: "Новости и уведомления",
    description: "Публикуйте новости, объявления и автоматически рассылайте уведомления всем участникам.",
    badge: "Базовый"
  },
  {
    icon: Shield,
    title: "Безопасность данных",
    description: "Защита персональных данных, разграничение прав доступа и резервное копирование информации.",
    badge: "Премиум"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Всё необходимое для управления обучением
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Bilimtrack объединяет все инструменты для эффективного управления учебным процессом 
            в одной удобной платформе.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className="h-8 w-8 text-black/70" />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}