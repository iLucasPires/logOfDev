import Link from "next/link";

interface CardProjectProps {
  name: string;
  description: string;
  language: string;
  topics: Array<string>;
  html_url: string;
}

export default function CardProject({
  name,
  description,
  language,
  topics,
  html_url,
}: CardProjectProps) {
  return (
    <li className="border-neutral-700 border-2 rounded-md hover:border-neutral-500">
      <Link
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-between h-full p-5"
        aria-label={"Go to " + name + " repository on Github"}
      >
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="line-clamp-3 my-3">
          {description || "No description 😢"}
        </p>
        <ul className="flex flex-row gap-2 flex-wrap">
          <li className="text-neutral-400 bg-neutral-700 px-2 rounded-md">
            {language}
          </li>
          {topics.map((topic) => (
            <li
              key={topic}
              className="text-neutral-400 bg-neutral-700 px-2 rounded-md"
            >
              {topic}
            </li>
          ))}
        </ul>
      </Link>
    </li>
  );
}
