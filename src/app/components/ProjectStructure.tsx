import { useState } from "react";
import { ChevronRight, ChevronDown, Folder, FolderOpen, File, Code2, Settings, FileJson, FileText } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

interface FileNode {
  name: string;
  type: "file" | "folder";
  language?: string;
  children?: FileNode[];
}

interface ProjectStructureProps {
  structure: FileNode;
  technologies: Array<{ name: string; description: string }>;
  approach: string[];
}

function FileIcon({ fileName, language }: { fileName: string; language?: string }) {
  if (language === "tsx" || language === "ts") {
    return <Code2 className="size-4 text-blue-500" />;
  }
  if (language === "json") {
    return <FileJson className="size-4 text-yellow-600" />;
  }
  if (language === "css") {
    return <File className="size-4 text-pink-500" />;
  }
  if (language === "md") {
    return <FileText className="size-4 text-gray-500" />;
  }
  if (language === "svg") {
    return <File className="size-4 text-purple-500" />;
  }
  if (fileName.includes("config")) {
    return <Settings className="size-4 text-orange-500" />;
  }
  return <File className="size-4 text-gray-400" />;
}

function TreeNode({ node, level = 0 }: { node: FileNode; level?: number }) {
  const [isOpen, setIsOpen] = useState(level < 2);

  if (node.type === "file") {
    return (
      <div
        className="flex items-center gap-2 py-1.5 px-2 hover:bg-blue-50 rounded cursor-pointer transition-colors"
        style={{ paddingLeft: `${level * 20 + 8}px` }}
      >
        <FileIcon fileName={node.name} language={node.language} />
        <span className="text-sm text-gray-700 font-mono">{node.name}</span>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex items-center gap-2 py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
        style={{ paddingLeft: `${level * 20 + 8}px` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown className="size-4 text-gray-500" />
        ) : (
          <ChevronRight className="size-4 text-gray-500" />
        )}
        {isOpen ? (
          <FolderOpen className="size-4 text-blue-500" />
        ) : (
          <Folder className="size-4 text-blue-400" />
        )}
        <span className="text-sm font-semibold text-gray-800 font-mono">
          {node.name}
        </span>
      </div>
      {isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectStructure({ structure, technologies, approach }: ProjectStructureProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Структура проекта
          </h2>
          <p className="text-xl text-gray-600">
            Профессиональная архитектура как в реальных продуктах
          </p>
        </div>

        <Card className="p-6 bg-white shadow-xl">
          <Tabs defaultValue="structure" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="structure">Структура проекта</TabsTrigger>
              <TabsTrigger value="technologies">Технологии</TabsTrigger>
              <TabsTrigger value="approach">Подход к разработке</TabsTrigger>
            </TabsList>

            <TabsContent value="structure" className="mt-6">
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <div className="text-green-400 font-mono text-sm mb-4">
                  📁 Интерактивное дерево файлов
                </div>
                <div className="bg-gray-800 rounded p-4">
                  <TreeNode node={structure} />
                </div>
                <div className="mt-4 text-gray-400 text-sm font-mono">
                  💡 Нажмите на папки чтобы раскрыть их содержимое
                </div>
              </div>
            </TabsContent>

            <TabsContent value="technologies" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <Card key={index} className="p-4 border-2 border-blue-100 bg-blue-50/30">
                    <div className="flex items-start gap-3">
                      <div className="size-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code2 className="size-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {tech.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="approach" className="mt-6">
              <div className="space-y-4">
                {approach.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg"
                  >
                    <div className="size-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
