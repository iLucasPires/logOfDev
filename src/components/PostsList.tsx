"use client";

import { useState } from "react";
import CardBlog from "@/src/components/CardBlog";

function TopicsList({
  selectedTopic,
  setSelectedTopic,
  topics,
}: {
  selectedTopic: string[];
  setSelectedTopic: Function;
  topics: string[];
}) {
  function handleTopicClick(topic: string) {
    if (selectedTopic.includes(topic)) {
      setSelectedTopic(selectedTopic.filter((t) => t !== topic));
    } else {
      setSelectedTopic([...selectedTopic, topic]);
    }
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <li
          key={topic}
          className={`${
            selectedTopic.includes(topic) ? "bg-neutral-800" : ""
          } py-1 px-2 rounded-md cursor-pointer border-2 text-neutral-400 border-neutral-700 hover:border-neutral-400 `}
          onClick={() => handleTopicClick(topic)}
        >
          {topic}
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
            selectedTopic.includes(post.topic) && (
              <li key={post.file} className="mb-5">
                <CardBlog
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
