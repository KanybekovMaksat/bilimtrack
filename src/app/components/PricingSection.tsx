import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, ArrowRight, Users, Building2, Rocket, Star, Wrench } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    icon: Users,
    price: "Бесплатно",
    period: "",
    description: "Идеально для небольших курсов и репетиторских центров до 50 человек",
    features: [
      "До 50 студентов",
      "Управление группами",
      "Расписание занятий",
      "Электронный журнал",
      "Новости и объявления",
      "Базовая аналитика",
      "Мы подключим систему за вас",
      "Обучение сотрудников",
    ],
    cta: "Начать бесплатно",
    popular: false,
  },
  {
    name: "Стандарт",
    icon: Building2,
    price: "50 000",
    period: "сом / год",
    description: "Для школ и учебных центров до 500 студентов. Полный функционал платформы",
    features: [
      "До 500 студентов",
      "Все функции Базового тарифа",
      "Учебные материалы и ДЗ",
      "Геймификация и рейтинги",
      "Форумы и чаты",
      "Расширенная аналитика и отчёты",
      "Подключение и настройка",
      "Обучение всех сотрудников",
      "Приоритетная поддержка",
    ],
    cta: "Попробовать 60 дней бесплатно",
    popular: true,
  },
  {
    name: "Масштаб 1000+",
    icon: Rocket,
    price: "400",
    period: "сом / год за студента",
    description: "Для крупных организаций — бесплатно для заведения, оплата переходит к студентам",
    features: [
      "От 1000 студентов",
      "Бесплатно для организации",
      "Каждый студент платит 400 сом/год",
      "Все функции платформы",
      "Полная настройка под ваши нужды",
      "Обучение всех сотрудников",
      "Выделенный менеджер",
      "Интеграция с другими системами",
      "SLA и гарантии",
    ],
    cta: "Связаться с нами",
    popular: false,
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Прозрачные и доступные тарифы
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Начните бесплатно с базовым функционалом. Масштабируйтесь по мере роста —
            мы сами подключим систему и обучим ваших сотрудников.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative flex flex-col ${plan.popular ? 'border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02]' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                  <Star className="h-3 w-3 mr-1 fill-current" /> Рекомендуем
                </Badge>
              )}
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-3">
                  <plan.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
                  )}
                </div>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note about setup */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-muted/50 px-6 py-4 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
              <Wrench className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-left">
              <div className="font-medium text-sm">Всё включено в каждый тариф</div>
              <div className="text-xs text-muted-foreground">
                Мы сами подключим систему, настроим под ваше заведение и обучим ваших сотрудников
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}