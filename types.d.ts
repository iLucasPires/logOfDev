interface iPost {
  id: string;
  title: string;
  date: string;
  contentHtml?: string;
}

interface iItemMenuProps {
  item: {
    title: string;
    href: string;
    LogoNav: IconType;
  };
  isPathName: boolean;
}

interface iProjectProps {
  id?: number;
  name?: string;
  description?: string;
  language?: string;
  topics?: Array<string>;
  html_url?: string;
  stargazers_count?: number;
}

interface iSocialMediaProps {
  name: string;
  LogoSocial: IconType;
  url: string;
}
