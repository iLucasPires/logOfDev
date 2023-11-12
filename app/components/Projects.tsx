import Link from "next/link";
import CardProject from "./CardProjetc";

function ListProjects({ projects }: { projects: iProjectProps[] }) {
  if (projects.length) {
    return (
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.slice(0, 3).map((p: iProjectProps) => (
          <CardProject
            key={p.id}
            name={p.name}
            html_url={p.html_url}
            stargazers_count={p.stargazers_count}
            description={p.description}
            topics={p.topics}
            language={p.language}
          />
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-neutral-400">Sem projetos 😢</p>
    </div>
  );
}

export default async function Projects() {
  const urlApi =
    "https://api.github.com/users/ilucaspires/repos?sort=created&direction=desc";
  const urlRepo = "https://github.com/iLucasPires?tab=repositories";

  const response = await fetch(urlApi, {
    next: { revalidate: 3600 },
  });
  const projects = await response.json();

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Projetos</h2>
        <Link
          className="text-neutral-400 underline hover:text-neutral-200"
          aria-label="Go to my Github profile"
          href={urlRepo}
        >
          Ver mais
        </Link>
      </div>
      <ListProjects projects={projects} />
    </div>
  );
}
