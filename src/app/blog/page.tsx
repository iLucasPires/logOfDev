import PostList from "@/src/components/PostsList";
import { getPostsData } from "@/util/getPosts";

export default function BlogPage() {
  try {
    const { topics, allPostsData } = getPostsData();


    return (
      <main className="flex flex-col h-full w-full gap-10">
        <h1 className="text-4xl font-bold">Blog</h1>
        <PostList posts={allPostsData}  topics={topics} />
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
