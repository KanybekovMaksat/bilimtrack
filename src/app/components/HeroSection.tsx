import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const cards = scene.querySelectorAll('.floating-card');

    const animateCards = () => {
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const time = Date.now() * 0.001;
        const offset = index * 0.5;

        const x = Math.sin(time + offset) * 30;
        const y = Math.cos(time + offset * 1.2) * 20;
        const rotateX = Math.sin(time + offset) * 10;
        const rotateY = Math.cos(time + offset * 0.8) * 15;

        element.style.transform = `
          translate3d(${x}px, ${y}px, 0) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });

      requestAnimationFrame(animateCards);
    };

    animateCards();
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6">
          🎓 Образовательная экосистема
        </Badge>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          Управляйте{' '}
          <span className="bg-gradient-to-b from-black  to-black/40 bg-clip-text text-transparent">
            учебным процессом
          </span>{' '}
          в одном месте
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          Bilimtrack — это цифровая экосистема для учебных заведений. Управляйте
          студентами, расписанием, группами и всем учебным процессом онлайн.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-br from-black to-black/50 "
          >
            Начать бесплатно
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Play className="mr-2 h-4 w-4" />
            Смотреть демо
          </Button>
        </div>

        {/* 3D Graphics Scene with Educational Elements */}
        <div className="relative mx-auto max-w-5xl h-96 lg:h-[500px]">
          <div
            ref={sceneRef}
            className="relative w-full h-full perspective-1000"
            style={{ perspective: '1000px' }}
          >
            {/* Central Hub - School Building */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32  rounded-3xl shadow-2xl flex items-center justify-center z-10">
              <img src="/logo.svg" className='w-full h-full' alt="" />
            </div>

            {/* Students Card */}
            <div className="floating-card absolute top-16 left-20 w-44 h-28 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <span>👨‍🎓</span>
                Студенты
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full"></div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
              </div>
            </div>

            {/* Schedule/Timetable Card */}
            <div className="floating-card absolute top-32 right-16 w-40 h-32 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <span>📅</span>
                Расписание
              </div>
              <div className="space-y-1">
                <div className="flex gap-1">
                  <div className="w-8 h-6 bg-blue-100 dark:bg-blue-900/30 rounded text-[8px] flex items-center justify-center">
                    ПН
                  </div>
                  <div className="w-8 h-6 bg-blue-100 dark:bg-blue-900/30 rounded text-[8px] flex items-center justify-center">
                    ВТ
                  </div>
                  <div className="w-8 h-6 bg-blue-100 dark:bg-blue-900/30 rounded text-[8px] flex items-center justify-center">
                    СР
                  </div>
                </div>
                <div className="h-2 bg-blue-500 rounded w-full"></div>
                <div className="h-2 bg-indigo-500 rounded w-3/4"></div>
                <div className="h-2 bg-purple-500 rounded w-2/3"></div>
              </div>
            </div>

            {/* Groups/Classes Card */}
            <div className="floating-card absolute bottom-20 left-12 w-40 h-28 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <span>👥</span>
                Группы
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">
                    A1
                  </div>
                  <div className="text-[10px]">15 студентов</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-xs">
                    B2
                  </div>
                  <div className="text-[10px]">12 студентов</div>
                </div>
              </div>
            </div>

            {/* Learning Materials Card */}
            <div className="floating-card absolute bottom-24 right-20 w-42 h-32 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <span>📚</span>
                Материалы
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="text-lg">📄</div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-lg">🎥</div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-lg">📊</div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
              </div>
            </div>

            {/* Teachers Card */}
            <div className="floating-card absolute top-20 right-32 w-38 h-24 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <span>👨‍🏫</span>
                Преподаватели
              </div>
              <div className="flex gap-1">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
              </div>
            </div>

            {/* News/Announcements Card */}
            <div className="floating-card absolute bottom-32 left-32 w-40 h-24 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <span>📢</span>
                Новости
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-muted rounded w-full"></div>
                <div className="h-2 bg-muted rounded w-3/4"></div>
                <div className="h-2 bg-muted rounded w-5/6"></div>
              </div>
            </div>

            {/* Grades/Assessment Card */}
            <div className="floating-card absolute top-40 left-40 w-36 h-28 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <span>📊</span>
                Оценки
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-[10px]">Математика</div>
                  <div className="text-xs font-bold text-green-600">5</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[10px]">Физика</div>
                  <div className="text-xs font-bold text-blue-600">4</div>
                </div>
              </div>
            </div>

            {/* Attendance Card */}
            <div className="floating-card absolute top-12 right-48 w-36 h-24 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <span>✅</span>
                Посещаемость
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <div className="w-3 h-3 bg-red-500 rounded"></div>
              </div>
              <div className="text-[10px] mt-2 text-muted-foreground">
                85% за неделю
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="currentColor"
                    stopOpacity="0.1"
                  />
                  <stop
                    offset="50%"
                    stopColor="currentColor"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="100%"
                    stopColor="currentColor"
                    stopOpacity="0.1"
                  />
                </linearGradient>
              </defs>
              <line
                x1="50%"
                y1="50%"
                x2="20%"
                y2="20%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <line
                x1="50%"
                y1="50%"
                x2="80%"
                y2="30%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <line
                x1="50%"
                y1="50%"
                x2="25%"
                y2="75%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
              <line
                x1="50%"
                y1="50%"
                x2="75%"
                y2="80%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: '1.5s' }}
              />
            </svg>

            {/* Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
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
