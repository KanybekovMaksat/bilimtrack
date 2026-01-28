import { ProjectHero } from '@/app/components/ProjectHero';
import { MediaCarousel } from '@/app/components/MediaCarousel';
import { AboutProject } from '@/app/components/AboutProject';
import { AuthorCard } from '@/app/components/AuthorCard';
import { ScreenshotsGallery } from '@/app/components/ScreenshotsGallery';
import { ProjectCTA } from '@/app/components/ProjectCTA';
import { ProjectStructure } from '@/app/components/ProjectStructure';
import { SkillsSection } from '@/app/components/SkillsSection';

interface ProjectDetailsProps {
  project: any;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ProjectHero
        title={project.title}
        slogan={project.slogan}
        studentName={project.student.name}
        studentAge={project.student.age}
        courseName={project.course.name}
        courseDuration={project.course.duration}
        projectUrl={project.projectUrl}
      />

      {/* Media Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <MediaCarousel
            media={project.media}
            challenges={project.challenges}
            learned={project.learned}
          />
        </div>
      </section>

      {/* About Project */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <AboutProject description={project.description} />
        </div>
      </section>

      {/* Author Card */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AuthorCard student={project.student} course={project.course} />
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScreenshotsGallery screenshots={project.screenshots} />
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 max-w-4xl">
          <ProjectCTA projectUrl={project.projectUrl} />
        </div>
      </section>

      {/* Project Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <ProjectStructure structure={project.projectStructure} />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <SkillsSection skills={project.skills} />
        </div>
      </section>
    </div>
  );
}
