import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface ProjectCTAProps {
  projectUrl: string;
}

export function ProjectCTA({ projectUrl }: ProjectCTAProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto">
        <Card className="p-12 text-center bg-white shadow-2xl">
          <div className="inline-flex items-center justify-center size-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6">
            <Sparkles className="size-8 text-blue-600" />
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Готовы увидеть проект?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Откройте полнофункциональное веб-приложение, которое было создано студентом с нуля
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg"
            onClick={() => window.open(projectUrl, '_blank')}
          >
            <ExternalLink className="size-6 mr-2" />
            Открыть проект
          </Button>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">
                Проект полностью сделан студентом без шаблонов
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
