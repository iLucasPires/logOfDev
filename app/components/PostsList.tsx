"use client";

import { useState } from "react";
import CardBlog from "@/app/components/CardBlog";
import clsx from "clsx";

function TopicsList({
  topics,
  selectedTopic,
  setSelectedTopic,
}: {
  topics: string[];
  selectedTopic: string[];
  setSelectedTopic: Function;
}) {
  function handleTopicClick(topic: string) {
    if (selectedTopic.includes(topic) && selectedTopic.length > 1) {
      setSelectedTopic([topic]);
    } else if (topics.includes(topic) && selectedTopic.length === 1) {
      setSelectedTopic(topics);
    }
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <li
          key={topic}
          onClick={() => handleTopicClick(topic)}
          className={clsx(
            "py-1 px-2 rounded-md cursor-pointer text-neutral-400 border-2 border-neutral-800",
            selectedTopic.includes(topic)
              ? "bg-neutral-800"
              : "hover:border-neutral-600"
          )}
        >
          {topic || "geral"}
        </li>
      ))}
    </ul>
  );
}

export default function PostsList({
  posts,
  topics,
}: {
  posts: iPost[];
  topics: string[];
}) {
  const [selectedTopic, setSelectedTopic] = useState(topics);

  return (
    <>
      {posts.length !== 1 && (
        <TopicsList
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          topics={topics}
        />
      )}

      <ul>
        {posts.map(
          (post) =>
            selectedTopic.includes(post.topic) &&(
              <li key={post.file} className="mb-5">
                <CardBlog
                  status={post.status}
                  tags={post.tags}
                  file={post.file}
                  title={post.title}
                  date={post.date}
                  topic={post.topic}
                />
              </li>
            )
        )}
        {selectedTopic.length === 0 && (
          <li className="text-left text-neutral-400">
            No posts found for this topic
          </li>
        )}
      </ul>
    </>
  );
}
