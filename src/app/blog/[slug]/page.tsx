import { getPostData, getPostsData } from "@/util/getPosts";

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

export default async function Post({ params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
    const { title, date, contentHtml } = await getPostData(slug);
    return (
      <main className="flex flex-col h-full w-full">
        <div className="mb-5">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-neutral-400 italic">{date}</p>
        </div>
        <article
          className="prose !prose-invert"
          dangerouslySetInnerHTML={{ __html: contentHtml || "" }}
        />
      </main>
    );
  } catch (e) {
    return (
      <div className="flex flex-col h-full w-full">
        <h2 className="text-xl font-bold">No posts yet</h2>
        <p className=" text-neutral-400">
          I'm sorry, I don't have any posts yet. Please come back later.
        </p>
      </div>
    );
  }
}
