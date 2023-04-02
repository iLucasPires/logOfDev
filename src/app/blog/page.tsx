import { getPostsData } from "@/lib/getPosts";
import CardBlog from "@/src/components/CardBlog";

export default function BlogPage() {
  const posts = getPostsData();

  return (
    <main className="flex flex-col h-full w-full gap-10">
      <h1 className="text-4xl font-bold">Blog</h1>
      <ul className="flex flex-col w-full h-full gap-5">
        {posts.map((post) => (
          <CardBlog
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
          />
        ))}
      </ul>
    </main>
  );
}
