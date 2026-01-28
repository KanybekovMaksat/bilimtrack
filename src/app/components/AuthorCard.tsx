import { GraduationCap, TrendingUp, Award, X, Check } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface AuthorCardProps {
  name: string;
  age: number;
  photo: string;
  course: string;
  duration: string;
  before: string[];
  after: string[];
}

export function AuthorCard({
  name,
  age,
  photo,
  course,
  duration,
  before,
  after
}: AuthorCardProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Автор проекта
          </h2>
          <p className="text-xl text-gray-600">
            История успеха нашего студента
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Student Info Card */}
          <Card className="p-8 text-center bg-white shadow-xl">
            <div className="relative inline-block mb-6">
              <ImageWithFallback
                src={photo}
                alt={name}
                className="size-32 rounded-full object-cover mx-auto border-4 border-blue-200"
              />
              <div className="absolute -bottom-2 -right-2 size-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white">
                <Award className="size-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-lg text-gray-600 mb-6">{age} лет</p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <GraduationCap className="size-5 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-500">Курс</div>
                  <div className="font-semibold text-gray-900">{course}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <TrendingUp className="size-5 text-purple-600 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-500">Длительность</div>
                  <div className="font-semibold text-gray-900">{duration}</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Before */}
          <Card className="p-8 bg-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 bg-red-100 rounded-lg flex items-center justify-center">
                <X className="size-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">ДО курса</h3>
            </div>
            
            <ul className="space-y-4">
              {before.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="size-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="size-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* After */}
          <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Check className="size-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">ПОСЛЕ курса</h3>
            </div>
            
            <ul className="space-y-4">
              {after.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="size-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="size-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
