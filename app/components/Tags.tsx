export default function ({ tags }: { tags: string[] }) {
  if (tags.length === 0)
    return (
      <p className="bg-neutral-800 rounded-md px-2 text-neutral-400">
        not found
      </p>
    );

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-neutral-800 rounded-md px-2 text-neutral-400"
        >
          {tag || "not found"}
        </li>
      ))}
    </ul>
  );
}
