import { getPostData, getPostsData } from "@/lib/getPosts";

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
    <main className="flex flex-col h-full w-full gap-10">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm">{date}</p>
      </div>

      <article
        className="prose !prose-invert"
        dangerouslySetInnerHTML={{ __html: contentHtml || "" }}
      />
    </main>
  );
}
