import Link from "next/link";

interface CardProjectProps {
  name: string;
  description: string;
  language: string;
  topics: string[];
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
    <li className="flex flex-col border-neutral-700 border-2 rounded-md p-5 gap-2 w-full hover:border-neutral-500">
      <Link href={html_url} className="flex flex-col justify-between h-full">
        <h3 className="text-xl font-bold overflow-ellipsis ">{name}</h3>
        <p className="line-clamp-3 my-3 ">
          {description || "No description 😢"}
        </p>
        <ul className="flex flex-row gap-2">
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
