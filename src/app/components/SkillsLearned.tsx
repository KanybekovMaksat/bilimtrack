import { CheckCircle2, Code, Palette, Zap, Briefcase } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";

interface Skill {
  name: string;
  completed: boolean;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

interface SkillsLearnedProps {
  skills: SkillCategory[];
}

const categoryIcons: Record<string, any> = {
  "HTML & Семантика": Code,
  "CSS & Адаптивность": Palette,
  "JavaScript & React": Zap,
  "Работа над проектами": Briefcase,
};

const categoryColors: Record<string, string> = {
  "HTML & Семантика": "from-orange-500 to-red-500",
  "CSS & Адаптивность": "from-blue-500 to-cyan-500",
  "JavaScript & React": "from-yellow-500 to-orange-500",
  "Работа над проектами": "from-purple-500 to-pink-500",
};

export function SkillsLearned({ skills }: SkillsLearnedProps) {
  const totalSkills = skills.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedSkills = skills.reduce(
    (acc, cat) => acc + cat.items.filter(item => item.completed).length,
    0
  );
  const completionPercentage = (completedSkills / totalSkills) * 100;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Полученные навыки
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Чему научился студент за время курса
          </p>

          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">
                Общий прогресс
              </span>
              <span className="text-2xl font-bold text-green-600">
                {completedSkills}/{totalSkills}
              </span>
            </div>
            <Progress value={completionPercentage} className="h-3" />
            <p className="text-sm text-gray-600 mt-2">
              {completionPercentage.toFixed(0)}% навыков освоено
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, catIndex) => {
            const Icon = categoryIcons[category.category] || Code;
            const gradientClass = categoryColors[category.category] || "from-gray-500 to-gray-700";
            const completedCount = category.items.filter(item => item.completed).length;

            return (
              <Card key={catIndex} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`size-12 bg-gradient-to-br ${gradientClass} rounded-lg flex items-center justify-center`}>
                    <Icon className="size-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {completedCount} из {category.items.length} навыков
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        skill.completed
                          ? "bg-green-50 border border-green-200"
                          : "bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 size-6 rounded-full flex items-center justify-center ${
                          skill.completed
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      >
                        {skill.completed && (
                          <CheckCircle2 className="size-4 text-white" />
                        )}
                      </div>
                      <span
                        className={`${
                          skill.completed
                            ? "text-gray-900 font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🎓 Результат обучения
            </h3>
            <p className="text-lg opacity-90">
              Студент не просто изучил технологии — он создал реальный проект, который может показать работодателю или использовать в портфолио
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
