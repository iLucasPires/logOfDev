"use client";

import ReactTypingEffect from "react-typing-effect";

export default function About() {
  return (
    <div>
      <div className="mb-2">
        <h1 className="text-4xl font-bold">Lucas Pires</h1>
        <p className="text-neutral-400 italic">web developer</p>
      </div>
      <div>
        <ReactTypingEffect
          text={[
            "Desenvolvedor Front-end",
            "Desenvolvedor Back-end",
            "Desenvolvedor Fullstack",
          ]}
          speed={100}
          eraseSpeed={100}
          typingDelay={1000}
          eraseDelay={1000}
          className="text-2xl font-bold"
        />
      </div>
      <p className="text-neutral-400">
        Sou um desenvolvedor web apaixonado por tecnologia e programação.
        Atualmente cadete da 42 São Paulo, onde estou aprendendo a programar em
        C, e também estou estudando JavaScript, TypeScript, React, Next.js, Mas
        também tenho conhecimento em HTML, CSS, PHP, MySQL, Python, Django,
        Node.js, Express.js, MongoDB, GraphQL, Docker, Linux, Git, GitHub,
        Heroku, Vercel, Netlify, AWS, GCP, Firebase, entre outros.
      </p>
    </div>
  );
}
