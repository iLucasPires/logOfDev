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
  return date.toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getPath(post: string): string {
  return path.join(POST_DIR, post);
}

function handlePostData(postData: string): Post {
  const matterResult = matter(readFileSync(getPath(postData), DECODE));
  return {
    id: postData.replace(MD_REGEX, ""),
    title: matterResult.data.title,
    date: formatDate(matterResult.data.date),
  };
}

export function getPostsData() {
  const allPostsData = readdirSync(POST_DIR).map((file) =>
    handlePostData(file)
  );

  return allPostsData.sort((firstPost, secondPost) =>
    firstPost.date < secondPost.date ? 1 : -1
  );
}

export async function getPostData(id: string) {
  const matterResult = matter(readFileSync(`${POST_DIR}/${id}.md`, DECODE));
  const contentHtml = await remark().use(html).process(matterResult.content);
  const blogPostWithHtml: Post = {
    id,
    title: matterResult.data.title,
    date: formatDate(matterResult.data.date),
    contentHtml: contentHtml.toString(),
  };

  return blogPostWithHtml;
}
