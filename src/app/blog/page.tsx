import { getPostsData } from "@/util/getPosts";
import CardBlog from "@/src/components/CardBlog";

function WithoutPosts() {
  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="text-xl font-bold">No posts found</h2>
      <p className=" text-neutral-400">
        I'm sorry, I don't have any posts yet. Please come back later.
      </p>
    </div>
  );
}

function WithPosts(posts: iPost[]) {
  return (
    <ul className="flex flex-col w-full h-full gap-5">
      {posts.map((post: iPost) => (
        <CardBlog key={post.id} {...post} />
      ))}
    </ul>
  );
}

export default function BlogPage() {
  try {
    const posts = getPostsData();
    return (
      <main className="flex flex-col h-full w-full gap-10">
        <h1 className="text-4xl font-bold">Blog</h1>
        {posts.length === 0 ? <WithoutPosts /> : <WithPosts {...posts} />}
      </main>
    );
  } catch (e) {
    console.error(e);
    return WithoutPosts();
  }
}
