import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-page">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Things I&apos;ve built.</h2>
        <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          A selection of projects spanning machine learning, enterprise software,
          game development, and the web.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
