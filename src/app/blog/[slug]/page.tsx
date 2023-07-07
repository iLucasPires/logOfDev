import { getPostData, getPostsData } from "@/util/getPosts";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { title, date, contentHtml } = await getPostData(slug);
  return (
    <main className="flex flex-col h-full w-full">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm">{date}</p>
      </div>
      <article
        className="prose !prose-invert"
        dangerouslySetInnerHTML={{ __html: contentHtml || "" }}
      />
      <Link href="/blog" className="underline text-neutral-300 text-left">
        Back to blog
      </Link>
    </main>
  );
}
