import clsx from "clsx";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

function Topics(props: ProjectProps) {
  return (
    <ul className="flex flex-row gap-2 flex-wrap">
      <li className="text-neutral-400 bg-neutral-700 px-2 rounded-md">
        {props.language || "Other"}
      </li>
      {props.topics?.slice(0, 3).map((topic) => (
        <li
          key={topic}
          className="text-neutral-400 bg-neutral-700 px-2 rounded-md"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
}

function TitleCardProject(props: ProjectProps) {
  return (
    <div className="flex items-center justify-between flex-wrap">
      <h4 className="text-xl font-bold overflow-hidden overflow-ellipsis">
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
    <p className="line-clamp-2 my-3">
      {props.description || "No description 😢, but you can check the code!"}
    </p>
  );
}

export default function CardProject(props: ProjectProps) {
  return (
    <li className="border-neutral-700 border-2 rounded-md hover:border-neutral-500">
      <Link
        href={props.html_url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-between h-full p-5"
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
