import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

function Topics(props: iProjectProps) {
  const { topics, language } = props;
  const slicedTopics = topics?.slice(0, 3) || [];
  const hasTopics = slicedTopics.length > 0;

  return (
    <ul className="flex flex-col gap-2">
      <div className="flex gap-1">
        <p className="text-neutral-400 ">Language:</p>
        <li className="bg-neutral-800 rounded-md px-2 text-neutral-400 ">
          {language}
        </li>
      </div>

      <div className="flex gap-1 items-center">
        <p className="text-neutral-400 ">Topics:</p>

        <ul className="flex flex-wrap gap-1">
          {hasTopics ? (
            slicedTopics.map((topic) => (
              <li
                key={topic}
                className="bg-neutral-800 rounded-md px-2 text-neutral-400 "
              >
                {topic}
              </li>
            ))
          ) : (
            <li className="bg-neutral-800 rounded-md px-2 text-neutral-400 ">
              not found
            </li>
          )}
        </ul>
      </div>
    </ul>
  );
}

function TitleCardProject(props: iProjectProps) {
  const { name, stargazers_count } = props;
  const colorText = stargazers_count ? "text-yellow-400" : "text-neutral-400";
  const stars = stargazers_count || 0;

  return (
    <div className="flex flex-wrap items-center justify-between">
      <h4 className="text-xl font-bold overflow-hidden overflow-ellipsis">
        {name}
      </h4>
      <div className={`flex items-center gap-1 ${colorText}`}>
        <AiFillStar aria-label="Stars" />
        <span>{stars}</span>
      </div>
    </div>
  );
}

function DescriptionCardProject(props: iProjectProps) {
  const { description } = props;
  const defaultDescription = "No description 😢, but you can check the code!";
  const truncatedDescription = description || defaultDescription;

  return (
    <p className="my-3 line-clamp-2 text-neutral-400">{truncatedDescription}</p>
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
        <DescriptionCardProject description={description} />
        <Topics topics={topics} language={language} />
      </Link>
    </li>
  );
}
