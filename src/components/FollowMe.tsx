import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const socials = [
  {
    name: "Github",
    url: "https://github.com/iLucasPires",
    LogoSocial: IoLogoGithub,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/iLucasPires",
    LogoSocial: IoLogoLinkedin,
  },
];

function LinkContatc(props: iSocialMediaProps) {
  const { name, url, LogoSocial } = props;
  const ariaLabel = "Go to my " + name + " profile";

  return (
    <li className="mt-2">
      <Link
        href={url}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200"
      >
        <LogoSocial />
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default function FollowMe() {
  return (
    <div className="mb-14">
      <div>
        <h3 className="text-2xl font-bold">Follow me</h3>
        <div className="inline-block mt-2">
          <p className="text-neutral-400 inline">
          If you want to know more about me,{" "}
            <Link
              className="text-neutral-400 underline hover:text-neutral-200 inline font-bold"
              href="contact"
            >
              contact
            </Link>
          </p>
        </div>
      </div>
      <ul className="mt-5">
        {socials.map((social: iSocialMediaProps) => (
          <LinkContatc key={social.name} {...social} />
        ))}
      </ul>
    </div>
  );
}
