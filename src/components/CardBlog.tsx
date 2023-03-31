import Link from "next/link";

export default function CardBlog(props: Post) {
  return (
    <li className="border-neutral-700 border-2 rounded-md hover:border-neutral-500">
      <Link
        href={`/blog/${props.id}`}
        className="flex flex-col justify-between h-full p-5"
      >
        <h3 className="text-xl font-bold overflow-hprops.idden overflow-ellipsis">
          {props.title}
        </h3>
        <p className="text-neutral-400">{props.date}</p>
      </Link>
    </li>
  );
}
