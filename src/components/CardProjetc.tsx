import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

function Topics(props: iProjectProps) {
  const { topics, language } = props;
  const slicedTopics = topics?.slice(0, 3) || [];
  const hasTopics = slicedTopics.length > 0;

  return (
    <ul className="flex flex-col gap-2">
      <li className="flex gap-1">
        <p className="text-neutral-400 ">Linguagem:</p>
        <p className="bg-neutral-800 rounded-md px-2 text-neutral-400 ">
          {language}
        </p>
      </li>

      <li className="flex gap-1 items-center">
        <p className="text-neutral-400 ">Topicos:</p>
        <ul className="flex flex-wrap gap-1">
          {hasTopics ? (
            slicedTopics.map((topic) => (
              <li
                key={topic}
                className="bg-neutral-800 rounded-md px-2 text-neutral-400"
              >
                {topic}
              </li>
            ))
          ) : (
            <li className="bg-neutral-800 rounded-md px-2 text-neutral-400">
              not found
            </li>
          )}
        </ul>
      </li>
    </ul>
  );
}

function TitleCardProject(props: iProjectProps) {
  const { name, stargazers_count } = props;
  const colorText = stargazers_count ? "text-yellow-400" : "text-neutral-400";

  return (
    <div className="flex flex-wrap items-center justify-between">
      <h3 className="text-xl font-bold overflow-hidden overflow-ellipsis">
        {name}
      </h3>
      <div className={`flex items-center gap-1 ${colorText}`}>
        <AiFillStar aria-label="Stars" />
        <span>{stargazers_count || 0}</span>
      </div>
    </div>
  );
}

export default function CardProject(props: iProjectProps) {
  const { name, html_url, stargazers_count, description, topics, language } =
    props;
  const ariaLabel = `Go to ${name} repository on Github`;

  return (
    <li className="rounded-md border-2 border-neutral-700 hover:border-neutral-500">
      <Link
        href={html_url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col justify-between p-5"
        aria-label={ariaLabel}
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
