import Link from "next/link";
import CardProject from "./CardProjetc";
import clsx from "clsx";

const MAX_PROJECTS_TO_SHOW = 3;

function ListProjects(props: any) {
  if (props.projects.length > 0) {
    return (
      <ul className={clsx("grid grid-cols-1 gap-5", "md:grid-cols-3")}>
        {props.projects
          .slice(0, MAX_PROJECTS_TO_SHOW)
          .map((project: ProjectProps) => (
            <CardProject key={project.id} {...project} />
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
    <div className="flex w-full flex-col gap-5">
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold">Projects</h3>
        <Link
          aria-label="Go to my Github profile"
          href="https://github.com/iLucasPires?tab=repositories"
          className={clsx(
            "text-neutral-400 underline",
            "hover:text-neutral-200"
          )}
        >
          See all
        </Link>
      </div>
      <ListProjects projects={projects} />
    </div>
  );
}
