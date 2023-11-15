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

export default function () {
  return (
    <div className="mb-14">
      <h3 className="text-2xl font-bold">Minhas redes sociais</h3>
      <ul className="mt-5">
        {socials.map((social: iSocialMediaProps) => (
          <LinkContatc key={social.name} {...social} />
        ))}
      </ul>
    </div>
  );
}
