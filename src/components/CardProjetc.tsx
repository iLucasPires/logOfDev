import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

function Topics({
  topics,
  language,
}: {
  topics: string[] | undefined;
  language: string | undefined;
}) {
  const slicedTopics = topics?.slice(0, 3) || [];

  return (
    <ul className="flex flex-col gap-2">
      <li className="flex gap-1">
        <p className="text-neutral-400 ">Linguagem:</p>
        <p className="bg-neutral-800 rounded-md px-2 text-neutral-400 ">
          {language || "not found"}
        </p>
      </li>

      <li className="flex gap-1 items-center">
        <p className="text-neutral-400 ">Topicos:</p>
        {slicedTopics.length > 0 && (
          <ul className="flex flex-wrap gap-1">
            {slicedTopics.map((topic) => (
              <li
                key={topic}
                className="bg-neutral-800 rounded-md px-2 text-neutral-400"
              >
                {topic || "not found"}
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}

function TitleCardProject({ name, stargazers_count }: iProjectProps) {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <h3 className="text-xl font-bold overflow-hidden overflow-ellipsis">
        {name || "Não sei porque está sem nome"}
      </h3>
      <div
        className={`flex items-center gap-1 ${
          stargazers_count ? "text-yellow-400" : "text-neutral-400"
        }`}
      >
        <AiFillStar aria-label="Stars" />
        <span>{stargazers_count || 0}</span>
      </div>
    </div>
  );
}

export default function CardProject({
  name,
  html_url,
  stargazers_count,
  description,
  topics,
  language,
}: iProjectProps) {
  return (
    <li className="rounded-md border-2 border-neutral-700 hover:border-neutral-500">
      <Link
        href={html_url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col justify-between p-5"
        aria-label={`Go to ${name} repository on Github`}
      >
        <TitleCardProject name={name} stargazers_count={stargazers_count} />
        <p className="my-3 line-clamp-2 text-neutral-400">
          {description || "Sem descrição 😢, mas você pode ver o codigo!"}
        </p>
        <Topics topics={topics} language={language} />
      </Link>
    </li>
  );
}
