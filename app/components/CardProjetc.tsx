import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import clsx from "clsx";
import Tags from "./Tags";

export default function ({
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
        <div className="flex flex-wrap items-center justify-between">
          <h3 className="text-xl font-bold overflow-hidden overflow-ellipsis">
            {name || "Não sei porque está sem nome"}
          </h3>
          <div
            className={clsx(
              "flex items-center gap-1",
              stargazers_count ? "text-yellow-400" : "text-neutral-400"
            )}
          >
            <AiFillStar aria-label="Stars" />
            <span>{stargazers_count || 0}</span>
          </div>
        </div>
        <p className="my-3 line-clamp-2 text-neutral-400">
          {description || "Sem descrição 😢, mas você pode ver o codigo!"}
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-1">
            <p className="text-neutral-400 ">Linguagem:</p>
            <Tags tags={[language || "not found"]} />
          </li>

          <li className="flex gap-1 items-center">
            <p className="text-neutral-400 ">Topicos:</p>
            <Tags tags={topics?.slice(0, 3) || []} />
          </li>
        </ul>
      </Link>
    </li>
  );
}
