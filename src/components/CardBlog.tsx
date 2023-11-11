import Link from "next/link";

export default function CardBlog({ title, date, file }: iPost) {
  const url = "/blog/" + file;

  return (
    <div className="border-neutral-700 border-2 rounded-md hover:border-neutral-500">
      <Link href={url} className="flex flex-col justify-between h-full p-5">
        <h3 className="text-xl font-semibold overflow-hidden overflow-ellipsis">{title}</h3>
        <p className="text-neutral-400">{date}</p>
      </Link>
    </div>
  );
}
