import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const socials = [
  {
    name: "Github",
    link: "https://github.com/iLucasPires",
    icon: <IoLogoGithub aria-label="Github" />,
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/iLucasPires",
    icon: <IoLogoLinkedin aria-label="Linkedin" />,
  },
  {
    name: "Twitter",
    link: "ht tps://twitter.com/iLucasPires",
    icon: <IoLogoTwitter aria-label="Twitter" />,
  },
];

export default function Contact() {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold">Contact</h3>
        <p className="text-neutral-400">
          If you want to contact me, you can find me on the following social
          networks:
        </p>
      </div>
      <ul className="mt-5">
        {socials.map((social) => (
          <li key={social.name} className="mt-2">
            <Link
              href={social.link}
              target="_blank"
              aria-label={"Go to my " + social.name + " profile"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200"
            >
              {social.icon}
              {social.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
//
