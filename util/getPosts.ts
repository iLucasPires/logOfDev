import path from "path";
import { readdirSync, readFileSync } from "fs";

import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";

const DECODE = "utf8";
const MD_REGEX = /\.md$/;
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
    readFileSync(path.join(POST_DIR, postData), DECODE)
  );
  if (!matterResult) {
    throw new Error("No matter result");
  }
  return {
    file: postData.replace(MD_REGEX, ""),
    title: matterResult.data.title,
    topic: matterResult.data.topic,
    date: formatDate(matterResult.data.date),
  };
}

export function getPostsData() {
  try {
    let topics: Array<string> = [];
    const allPostsData = readdirSync(POST_DIR).map((file) =>
      handlePostData(file)
    );

    allPostsData.forEach((post) => {
      if (!topics.includes(post.topic)) {
        topics.push(post.topic);
      }
    });

    allPostsData.sort((firstPost, secondPost) =>
      firstPost.date < secondPost.date ? 1 : -1
    );

    return { allPostsData, topics };
  } catch (error) {
    throw new Error("No posts data");
  }
}

export async function getPostData(file: string) {
  try {
    const matterResult = matter(readFileSync(`${POST_DIR}/${file}.md`, DECODE));
    const contentHtml = await remark().use(html).process(matterResult.content);
    const blogPostWithHtml: iPost = {
      file,
      topic: matterResult.data.topic,
      title: matterResult.data.title,
      date: formatDate(matterResult.data.date),
      contentHtml: contentHtml.toString(),
    };
    return blogPostWithHtml;
  } catch (error) {
    throw new Error("No post data");
  }
}
