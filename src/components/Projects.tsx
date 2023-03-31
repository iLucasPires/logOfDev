import Link from "next/link";
import CardProject from "./CardProjetc";

const MAX_PROJECTS_TO_SHOW = 3;

function ListProjects(props: any) {
  if (props.projects.length > 0) {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {props.projects
          .slice(0, MAX_PROJECTS_TO_SHOW)
          .map((project: ProjectProps) => (
            <CardProject
              key={project.id}
              name={project.name}
              description={project.description}
              language={project.language}
              topics={project.topics}
              html_url={project.html_url}
              stargazers_count={project.stargazers_count}
            />
          ))}
      </ul>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-neutral-400">No projects 😢</p>
    </div>
  );
}

export default async function Projects() {
  const response = await fetch(
    "https://api.github.com/users/ilucaspires/repos?sort=created&direction=desc",
    {
      next: { revalidate: 3600 },
      cache: "force-cache",
    }
  );
  const projects = await response.json();

  return (
    <div className="flex flex-col w-full gap-5">
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold">Projects</h3>
        <Link
          aria-label="Go to my Github profile"
          href="https://github.com/iLucasPires?tab=repositories"
          className="text-neutral-400 hover:text-neutral-200 underline"
        >
          See all
        </Link>
      </div>
      <ListProjects projects={projects} />
    </div>
  );
}
