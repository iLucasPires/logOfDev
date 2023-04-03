import clsx from "clsx";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

function Topics(props: ProjectProps) {
  return (
    <ul className="flex flex-row flex-wrap gap-2">
      <li className="rounded-md bg-neutral-700 px-2 text-neutral-400">
        {props.language || "Other"}
      </li>
      {props.topics?.slice(0, 3).map((topic) => (
        <li
          key={topic}
          className="rounded-md bg-neutral-700 px-2 text-neutral-400"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
}

function TitleCardProject(props: ProjectProps) {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <h4
        className={clsx(
          "text-xl font-bold",
          "overflow-hidden overflow-ellipsis "
        )}
      >
        {props.name}
      </h4>
      <div
        className={clsx(
          "flex items-center gap-1 text-neutral-400",
          props.stargazers_count && "text-yellow-400"
        )}
      >
        <AiFillStar aria-label="Stars" />
        <span>{props.stargazers_count || 0}</span>
      </div>
    </div>
  );
}

function DescriptionCardProject(props: ProjectProps) {
  return (
    <p className="my-3 line-clamp-2">
      {props.description || "No description 😢, but you can check the code!"}
    </p>
  );
}

export default function CardProject(props: ProjectProps) {
  return (
    <li
      className={clsx(
        "rounded-md border-2 border-neutral-700",
        "hover:border-neutral-500"
      )}
    >
      <Link
        href={props.html_url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col justify-between p-5"
        aria-label={"Go to " + props.name + " repository on Github"}
      >
        <TitleCardProject
          name={props.name}
          stargazers_count={props.stargazers_count}
        />
        <DescriptionCardProject description={props.description} />
        <Topics topics={props.topics} language={props.language} />
      </Link>
    </li>
  );
}
