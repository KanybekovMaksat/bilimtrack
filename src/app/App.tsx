// import { ProjectHero } from "@/app/components/ProjectHero";
// import { MediaCarousel } from "@/app/components/MediaCarousel";
// import { AboutProject } from "@/app/components/AboutProject";
// import { AuthorCard } from "@/app/components/AuthorCard";
// import { ScreenshotsGallery } from "@/app/components/ScreenshotsGallery";
// import { ProjectCTA } from "@/app/components/ProjectCTA";
// import { ProjectStructure } from "@/app/components/ProjectStructure";
// import { SkillsLearned } from "@/app/components/SkillsLearned";
// import { mockProjectData } from "@/data/mockProjectData";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <ProjectHero
//         projectName={mockProjectData.projectName}
//         slogan={mockProjectData.slogan}
//         studentName={mockProjectData.student.name}
//         studentAge={mockProjectData.student.age}
//         course={mockProjectData.course}
//         duration={mockProjectData.duration}
//         projectUrl={mockProjectData.projectUrl}
//       />

//       {/* Media Carousel */}
//       <MediaCarousel items={mockProjectData.mediaItems} />

//       {/* About Project */}
//       <AboutProject
//         description={mockProjectData.about.description}
//         problem={mockProjectData.about.problem}
//         target={mockProjectData.about.target}
//         features={mockProjectData.about.features}
//       />

//       {/* Author Card */}
//       <AuthorCard
//         name={mockProjectData.author.name}
//         age={mockProjectData.author.age}
//         photo={mockProjectData.author.photo}
//         course={mockProjectData.author.course}
//         duration={mockProjectData.author.duration}
//         before={mockProjectData.author.before}
//         after={mockProjectData.author.after}
//       />

//       {/* Screenshots Gallery */}
//       <ScreenshotsGallery screenshots={mockProjectData.screenshots} />

//       {/* CTA Section */}
//       <ProjectCTA projectUrl={mockProjectData.projectUrl} />

//       {/* Project Structure */}
//       <ProjectStructure
//         structure={mockProjectData.structure}
//         technologies={mockProjectData.technologies}
//         approach={mockProjectData.approach}
//       />

//       {/* Skills Learned */}
//       <SkillsLearned skills={mockProjectData.skills} />
//     </div>
//   );
// }

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}