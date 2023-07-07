interface iPost {
  id: string;
  title: string;
  date: string;
  contentHtml?: string;
}

interface ItemMenuProps {
  item: {
    title: string;
    href: string;
    LogoNav: IconType;
  };
  isPathName: boolean;
}

interface ProjectProps {
  id?: number;
  name?: string;
  description?: string;
  language?: string;
  topics?: Array<string>;
  html_url?: string;
  stargazers_count?: number;
}

interface SocialMediaProps {
  name: string;
  LogoSocial: IconType;
  url: string;
}
