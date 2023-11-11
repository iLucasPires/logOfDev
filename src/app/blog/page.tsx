import { getPostsData } from "@/util/getPosts";
import CardBlog from "@/src/components/CardBlog";

function WithPosts({ posts }: { posts: iPosts[] }) {
  return (
    <ul>
      {posts.map((postsData) => {
        return (
          <li className="my-5" key={postsData.topic}>
            <h2 className="text-2xl font-bold my-5">{postsData.topic}</h2>
            <ul className="flex flex-col gap-5">
              {postsData.posts.map((post) => (
                <li key={post.file}>
                  <CardBlog
                    file={post.file}
                    title={post.title}
                    date={post.date}
                    topic={postsData.topic}
                  />
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default function BlogPage() {
  try {
    const posts = getPostsData();

    return (
      <main className="flex flex-col h-full w-full gap-10">
        <h1 className="text-4xl font-bold">Blog</h1>
        <WithPosts posts={posts} />
      </main>
    );
  } catch (e) {
    console.error(e);
    return (
      <div className="flex flex-col h-full w-full">
        <h2 className="text-xl font-bold">No posts found</h2>
        <p className=" text-neutral-400 mt-5">
          I'm sorry, I don't have any posts yet. Please come back later.
        </p>
      </div>
    );
  }
}
