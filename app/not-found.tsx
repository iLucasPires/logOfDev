"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://meme-api.com/gimme")
      .then((res) => res.json())
      .then((data) => {
        setImage(data.preview[2]);
      });
  }, []);

  return (
    <main className="inset-0 absolute bg-[#111010] flex flex-col items-center justify-center  px-4">
      <img className="object-cover rounded-md" src={image || ""} alt="" />
      <p className="text-neutral-400 text-center mt-4">
        Opa! Parece que você se perdeu, volte para a home page.
      </p>
      <Link
        href="/"
        aria-label="Go to home page"
        className="underline mt-4 text-neutral-400 hover:text-neutral-200"
      >
        Voltar para home
      </Link>
    </main>
  );
}
