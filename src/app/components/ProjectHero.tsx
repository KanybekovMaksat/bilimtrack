import { ExternalLink, GraduationCap } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface ProjectHeroProps {
  projectName: string;
  slogan: string;
  studentName: string;
  studentAge: number;
  course: string;
  duration: string;
  projectUrl: string;
}

export function ProjectHero({
  projectName,
  slogan,
  studentName,
  studentAge,
  course,
  duration,
  projectUrl
}: ProjectHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            {projectName}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            {slogan}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-gray-700">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-blue-500 rounded-full"></div>
              <span>{studentName}, {studentAge} лет</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="size-5 text-blue-600" />
              <span>{course}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-purple-500 rounded-full"></div>
              <span>Обучение: {duration}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => window.open(projectUrl, '_blank')}
            >
              <ExternalLink className="size-5 mr-2" />
              Открыть проект
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50"
            >
              Записаться на курс
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
