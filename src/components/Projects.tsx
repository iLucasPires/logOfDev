import Link from "next/link";
import CardProject from "./CardProjetc";

function ListProjects(props: { projects: iProjectProps[] }) {
  const { projects } = props;

  if (projects.length) {
    const fistThreeProjects = projects.slice(0, 3);
    return (
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {fistThreeProjects.map((project: iProjectProps) => (
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
  const urlApi = "https://api.github.com/users/ilucaspires/repos";
  const urlApiQuery = "?sort=created&direction=desc";
  const urlRepo = "https://github.com/iLucasPires?tab=repositories";

  const response = await fetch(urlApi + urlApiQuery, {
    next: { revalidate: 3600 },
  });
  const projects = await response.json();

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Link
          className="text-neutral-400 underline hover:text-neutral-200"
          aria-label="Go to my Github profile"
          href={urlRepo}
        >
          See all
        </Link>
      </div>
      <ListProjects projects={projects} />
    </div>
  );
}
