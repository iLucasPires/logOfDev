import Link from "next/link";
import { IconType } from "react-icons";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const socials = [
  {
    name: "Github",
    link: "https://github.com/iLucasPires",
    icon: IoLogoGithub,
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/iLucasPires",
    icon: IoLogoLinkedin,
  },
  {
    name: "Twitter",
    link: "ht tps://twitter.com/iLucasPires",
    icon: IoLogoTwitter,
  },
];

function LinkContatc(props: {
  social: { name: string; link: string; icon: IconType };
}) {
  return (
    <li key={props.social.name} className="mt-2">
      <Link
        href={props.social.link}
        target="_blank"
        aria-label={"Go to my " + props.social.name + " profile"}
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200"
      >
        <props.social.icon />
        <span>{props.social.name}</span>
      </Link>
    </li>
  );
}

export default function FollowMe() {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold">Follow me</h3>
        <div className="inline-flex gap-1  items-center">
          <p className="text-neutral-400">
            you can find me on social media, or send me an email
          </p>
          <Link
            className="text-neutral-400 underline hover:text-neutral-200"
            href="contact"
          >
            here
          </Link>
        </div>
      </div>
      <ul className="mt-5">
        {socials.map((social) => (
          <LinkContatc social={social} />
        ))}
      </ul>
    </div>
  );
}
