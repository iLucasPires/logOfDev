import dataProjects from "@/lib/getProjects";
import CardProjetc from "../components/CardProjetc";
export default async function () {
  const projects: iProjectProps[] = await dataProjects;

  try {
    return (
      <main className="flex flex-col h-full w-full gap-10">
        <h1 className="text-4xl font-bold">Projects</h1>
        <ul className="flex flex-col gap-5">
          {projects.map((p: iProjectProps) => (
            <CardProjetc
            key={p.id}
              name={p.name}
              html_url={p.html_url}
              topics={p.topics}
              language={p.language}
            />
          ))}
        </ul>
      </main>
    );
  } catch (e) {
    console.error(e);
    return (
      <div className="flex flex-col h-full w-full">
        <h2 className="text-xl font-bold">No projects found</h2>
        <p className=" text-neutral-400 mt-5">
          I'm sorry, I don't have any projects yet. Please come back later.
        </p>
      </div>
    );
  }
}
