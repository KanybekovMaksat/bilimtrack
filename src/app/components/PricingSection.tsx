import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    price: "Бесплатно",
    description: "Для небольших курсов и образовательных центров",
    features: [
      "До 50 студентов",
      "До 5 преподавателей",
      "Базовое расписание",
      "Управление группами",
      "Новости и объявления",
      "Поддержка через email"
    ],
    cta: "Начать бесплатно",
    popular: false
  },
  {
    name: "Про",
    price: "30,000c",
    description: "Для школ и средних учебных заведений",
    features: [
      "До 500 студентов",
      "До 50 преподавателей",
      "Расширенное расписание",
      "Учебные материалы",
      "Аналитика и отчёты",
      "Оценки и успеваемость",
      "Приоритетная поддержка",
    ],
    cta: "Попробовать 60 дней",
    popular: true
  },
  {
    name: "Премиум",
    price: "Индивидуально",
    description: "Для университетов и крупных организаций",
    features: [
      "Неограниченно студентов",
      "Неограниченно преподавателей",
      "Все функции платформы",
      "Индивидуальная настройка",
      "Интеграции с другими системами",
      "Выделенный сервер",
      "Персональный менеджер",
      "Обучение персонала"
    ],
    cta: "Связаться с нами",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Прозрачные и доступные тарифы
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Выберите план, который подходит для вашего учебного заведения. Начните бесплатно и масштабируйтесь по мере роста.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-slate-500 shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-bl from-black to-slate-500">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Бесплатно" && plan.price !== "Индивидуально" && (
                    <span className="text-muted-foreground">/месяц</span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}