import { getPostData, getPostsData } from "@/util/getPosts";
import Link from "next/link";

export function generateStaticParams() {
  try {
    const posts = getPostsData();
    return posts.map((post) => ({
      slug: post.id,
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

function WithoutPosts() {
  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="text-xl font-bold">No posts yet</h2>
      <p className=" text-neutral-400">
        I'm sorry, I don't have any posts yet. Please come back later.
      </p>
    </div>
  );
}

function WithPosts({
  title,
  date,
  contentHtml,
}: {
  title: string;
  date: string;
  contentHtml: string | undefined;
}) {
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

export default async function Post({ params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
    const { title, date, contentHtml } = await getPostData(slug);
    return WithPosts({ title, date, contentHtml });
  } catch (e) {
    console.error(e);
    return WithoutPosts();
  }
}
