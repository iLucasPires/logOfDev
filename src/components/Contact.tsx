import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const socials = [
  {
    name: "Github",
    link: "https://github.com/iLucasPires",
    icon: <IoLogoGithub />,
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/iLucasPires",
    icon: <IoLogoLinkedin />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/iLucasPires",
    icon: <IoLogoTwitter />,
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-2xl font-bold">Contact</h3>
      <p className="text-neutral-400">
        If you want to contact me, you can find me on the following social
        networks:
      </p>
      <ul className="flex gap-5">
        {socials.map((social) => (
          <li key={social.name}>
            <Link
              href={social.link}
              className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200"
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
