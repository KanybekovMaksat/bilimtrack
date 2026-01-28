import { Target, Users, Wrench, Lightbulb, CheckCircle2 } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface AboutProjectProps {
  description: string;
  problem: string;
  target: string;
  features: string[];
}

export function AboutProject({ description, problem, target, features }: AboutProjectProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">О проекте</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 border-2 border-orange-200 bg-orange-50/50">
            <div className="flex items-start gap-4">
              <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="size-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Какую задачу решает
                </h3>
                <p className="text-gray-700">{problem}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
            <div className="flex items-start gap-4">
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="size-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Для кого этот проект
                </h3>
                <p className="text-gray-700">{target}</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 border-2 border-purple-200 bg-purple-50/50">
          <div className="flex items-start gap-4">
            <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Wrench className="size-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Основной функционал
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
