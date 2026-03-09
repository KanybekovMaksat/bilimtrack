import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  ArrowRight,
  Phone,
  Rocket,
  Users,
  Calendar,
  Trophy,
  Medal,
  Award,
  ClipboardCheck,
  GraduationCap,
  Settings,
  BarChart3,
  CheckSquare,
  type LucideIcon
} from 'lucide-react';
import { useEffect, useRef } from 'react';

interface FloatingCard {
  icon: LucideIcon;
  label: string;
  // Desktop position (percentage-based)
  desktop: { top?: string; bottom?: string; left?: string; right?: string };
  content: React.ReactNode;
}

const floatingCards: FloatingCard[] = [
  {
    icon: Users,
    label: "Студенты",
    desktop: { top: "8%", left: "3%" },
    content: (
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
          <div className="h-1.5 bg-muted rounded flex-1"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-indigo-500 rounded-full"></div>
          <div className="h-1.5 bg-muted rounded flex-1"></div>
        </div>
      </div>
    )
  },
  {
    icon: Calendar,
    label: "Расписание",
    desktop: { top: "5%", right: "5%" },
    content: (
      <div className="space-y-1">
        <div className="flex gap-1">
          <div className="w-6 h-4 bg-blue-100 dark:bg-blue-900/30 rounded text-[7px] flex items-center justify-center">ПН</div>
          <div className="w-6 h-4 bg-blue-100 dark:bg-blue-900/30 rounded text-[7px] flex items-center justify-center">ВТ</div>
          <div className="w-6 h-4 bg-blue-100 dark:bg-blue-900/30 rounded text-[7px] flex items-center justify-center">СР</div>
        </div>
        <div className="h-1.5 bg-blue-500 rounded w-full"></div>
        <div className="h-1.5 bg-indigo-500 rounded w-3/4"></div>
      </div>
    )
  },
  {
    icon: Trophy,
    label: "Рейтинг",
    desktop: { bottom: "12%", left: "2%" },
    content: (
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          <Medal className="h-3.5 w-3.5 text-yellow-500" />
          <div className="h-1.5 bg-yellow-400 rounded flex-1"></div>
          <span className="text-[9px] font-semibold">950</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Award className="h-3.5 w-3.5 text-gray-400" />
          <div className="h-1.5 bg-gray-300 rounded flex-1 w-4/5"></div>
          <span className="text-[9px] font-semibold">820</span>
        </div>
      </div>
    )
  },
  {
    icon: ClipboardCheck,
    label: "Домашние задания",
    desktop: { bottom: "8%", right: "3%" },
    content: (
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 border-2 border-green-500 rounded flex items-center justify-center text-[7px] text-green-500">✓</div>
          <div className="h-1.5 bg-muted rounded flex-1"></div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 border-2 border-green-500 rounded flex items-center justify-center text-[7px] text-green-500">✓</div>
          <div className="h-1.5 bg-muted rounded flex-1"></div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 border-2 border-orange-400 rounded"></div>
          <div className="h-1.5 bg-muted rounded flex-1"></div>
        </div>
      </div>
    )
  },
  {
    icon: GraduationCap,
    label: "Преподаватели",
    desktop: { top: "25%", right: "15%" },
    content: (
      <div className="flex gap-1">
        <div className="w-7 h-7 bg-blue-500 rounded-full"></div>
        <div className="w-7 h-7 bg-indigo-500 rounded-full"></div>
        <div className="w-7 h-7 bg-purple-500 rounded-full"></div>
      </div>
    )
  },
  {
    icon: BarChart3,
    label: "Оценки",
    desktop: { top: "30%", left: "8%" },
    content: (
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[9px]">Математика</span>
          <span className="text-[10px] font-semibold text-green-600">5</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[9px]">Физика</span>
          <span className="text-[10px] font-semibold text-blue-600">4</span>
        </div>
      </div>
    )
  },
  {
    icon: Settings,
    label: "Админ-панель",
    desktop: { bottom: "28%", left: "12%" },
    content: (
      <div className="space-y-1">
        <div className="h-1.5 bg-blue-500 rounded w-full"></div>
        <div className="h-1.5 bg-indigo-500 rounded w-3/4"></div>
        <div className="h-1.5 bg-purple-500 rounded w-5/6"></div>
      </div>
    )
  },
  {
    icon: CheckSquare,
    label: "Посещаемость",
    desktop: { bottom: "30%", right: "10%" },
    content: (
      <div>
        <div className="flex gap-1 mb-1.5">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <div className="w-3 h-3 bg-red-500 rounded"></div>
        </div>
        <div className="text-[9px] text-muted-foreground">85% за неделю</div>
      </div>
    )
  }
];

export function HeroSection() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const cards = scene.querySelectorAll('.floating-card');

    let animationId: number;
    const animateCards = () => {
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const time = Date.now() * 0.001;
        const offset = index * 0.7;

        const x = Math.sin(time + offset) * 15;
        const y = Math.cos(time + offset * 1.3) * 10;
        const rotate = Math.sin(time * 0.5 + offset) * 3;

        element.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      });

      animationId = requestAnimationFrame(animateCards);
    };

    animateCards();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6">
          <Rocket className="h-3.5 w-3.5 mr-1.5" />
          Платформа для учебных заведений
        </Badge>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
          Ваше заведение —{' '}
          <span className="text-blue-600">
            полностью цифровое
          </span>{' '}
          за одну неделю
        </h1>
        <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground mb-8">
          Мы подключим Bilimtrack, обучим ваш персонал и оцифруем все процессы —
          от журнала оценок до рейтинга студентов. Вам не нужно ничего настраивать самим.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-black hover:bg-black/80"
            asChild
          >
            <a href="tel:+996552077970">
              <Phone className="mr-2 h-4 w-4" />
              Позвонить нам
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <a href="#pricing">
              Посмотреть тарифы
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold">3500+</div>
            <div className="text-sm text-muted-foreground">активных студентов</div>
          </div>
          <div className="h-8 w-px bg-border hidden sm:block"></div>
          <div className="text-center">
            <div className="text-2xl font-bold">3+</div>
            <div className="text-sm text-muted-foreground">учебных заведений</div>
          </div>
          <div className="h-8 w-px bg-border hidden sm:block"></div>
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-muted-foreground">доступ к данным</div>
          </div>
        </div>


        {/* === Floating Cards Scene (desktop only) === */}
        <div className="hidden lg:block relative mx-auto max-w-5xl h-[500px]">
          <div
            ref={sceneRef}
            className="relative w-full h-full"
          >
            {/* Central Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-3xl shadow-2xl flex items-center justify-center z-10">
              <img src="/logo.svg" className="w-full h-full" alt="Bilimtrack" />
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <div
                key={index}
                className="floating-card absolute w-40 bg-card border rounded-xl shadow-lg p-3 transform-gpu transition-shadow duration-300 hover:shadow-xl z-10"
                style={{
                  ...card.desktop,
                }}
              >
                <div className="text-[10px] text-muted-foreground mb-2 flex items-center gap-1">
                  <card.icon className="h-3 w-3" />
                  {card.label}
                </div>
                {card.content}
              </div>
            ))}

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
              <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="85%" y2="12%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="10%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="88%" y2="78%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="20%" y2="35%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="22%" y2="65%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="82%" y2="65%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* Background Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500/15 rounded-full animate-pulse"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
