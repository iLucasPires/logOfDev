import Link from "next/link";
import CardProject from "./CardProjetc";

export default async function Projects() {
  const data = await fetch(
    "https://api.github.com/users/ilucaspires/repos?sort=updated"
  );
  const projects = await data.json();

  return (
    <div className="flex flex-col  w-full gap-5">
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold">Projects</h3>
        <Link
          href="https://github.com/iLucasPires?tab=repositories"
          className="text-neutral-400 hover:text-neutral-200 underline"
        >
          See all
        </Link>
      </div>
      {(projects.length > 0 && (
        <ul className="grid grid-cols-3 w-full justify-items-center gap-5">
          {projects
            .slice(0, 3)
            .filter((project: any) => !project.fork)
            .map((project: any) => (
              <CardProject
                key={project.id}
                name={project.name}
                description={project.description}
                language={project.language}
                topics={project.topics}
                html_url={project.html_url}
              />
            ))}
        </ul>
      )) || <p className="text-neutral-400">No projects found</p>}
    </div>
  );
}
