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

function getPath(post: string): string {
  return path.join(POST_DIR, post);
}

function handlePostData(postData: string): iPost {
  const matterResult = matter(readFileSync(getPath(postData), DECODE));
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
    const allPostsData = readdirSync(POST_DIR).map((file) =>
      handlePostData(file)
    );

    let postsData: iPosts[] = [];

    allPostsData.forEach((post) => {
      const topic = post.topic;
      const index = postsData.findIndex((post) => post.topic === topic);

      if (index === -1) {
        postsData.push({
          topic,
          posts: [post],
        });
      } else {
        postsData[index].posts.push(post);
      }
    });

    return postsData;

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
