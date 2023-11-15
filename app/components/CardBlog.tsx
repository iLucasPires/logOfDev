import Link from "next/link";
import Tags from "./Tags";
import clsx from "clsx";

export default function CardBlog({ title, date, file, tags, status }: iPost) {
  return (
    <div className="border-neutral-700 border-2 rounded-md hover:border-neutral-500 relative">
      {status === "draft" && (
        <div className="absolute inset-0 bg-neutral-800 bg-opacity-50 flex justify-center items-center rounded-md">
          <p className="text-2xl text-neutral-400">Escrevendo...</p>
        </div>
      )}
      <Link
        href={"/blog/" + file}
        className={clsx("flex flex-col justify-between h-full p-5", {
          "": status === "published",
          "blur-sm pointer-events-none select-none": status === "draft",
        })}
      >
        <h3 className="text-xl font-semibold overflow-hidden overflow-ellipsis">
          {title || "Não sei porque está sem nome"}
        </h3>
        <p className="text-neutral-400 mb-5">{date}</p>
        <Tags tags={tags || []} />
      </Link>
    </div>
  );
}
