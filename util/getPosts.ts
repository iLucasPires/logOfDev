import path from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";

const POST_DIR = path.join(process.cwd(), "posts");

function formatDate(dateString: string): string {
  const date = new Date(Date.parse(dateString));
  return date.toLocaleDateString("pt-br", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function handlePostData(postData: string): iPost {
  const matterResult = matter(
    readFileSync(path.join(POST_DIR, postData, "index.md"), "utf8")
  );
  if (!matterResult) {
    throw new Error("No matter result");
  }
  return {
    file: postData.replace(/index|\.md$/g, ""),
    title: matterResult.data.title,
    topic: matterResult.data.topic,
    date: formatDate(matterResult.data.date),
    tags: matterResult.data.tags,
    status: matterResult.data.status,
  };
}

export function getPostsData() {
  try {
    let topics: Array<string> = [];
    const allPostsData = readdirSync(POST_DIR).map((file) => {
      return handlePostData(file);
    });

    allPostsData.forEach((post) => {
      if (!topics.includes(post.topic)) {
        topics.push(post.topic);
      }
    });

    allPostsData.sort((firstPost, secondPost) =>
      firstPost.date < secondPost.date ? -1 : 1
    );

    return { allPostsData, topics };
  } catch (error) {
    throw new Error("No posts data");
  }
}

export async function getPostData(file: string) {
  try {
    const matterResult = matter(
      readFileSync(`${POST_DIR}/${file}/index.md`, "utf8")
    );
    const contentHtml = await remark().use(html).process(matterResult.content);
    const blogPostWithHtml: iPost = {
      file: file,
      tags: matterResult.data.tags,
      topic: matterResult.data.topic,
      title: matterResult.data.title,
      status: matterResult.data.status,
      date: formatDate(matterResult.data.date),
      contentHtml: contentHtml.toString(),
    };
    return blogPostWithHtml;
  } catch (error) {
    throw new Error("No post data");
  }
}
