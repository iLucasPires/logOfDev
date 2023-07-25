import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const urlImage = "/just-a-second-please-eric-cartman.gif";

  return (
    <main className="inset-0 absolute bg-[#111010] flex flex-col items-center justify-center  px-4">
      <Image
        className="object-cover rounded-md"
        src={urlImage}
        alt="Eric Cartman"
        width={500}
        height={500}
      />
      <p className="text-neutral-400 text-center mt-4">
        I'm sorry, I am still working on this page. Please come back later.
      </p>
      <Link
        href="/"
        aria-label="Navigate to tab Home page"
        aria-labelledby="link-home"
        className="underline mt-4 text-neutral-400 hover:text-neutral-200"
      >
        Navigate to tab Home page
      </Link>
    </main>
  );
}
