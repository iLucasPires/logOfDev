interface iPost {
  file: string;
  title: string;
  date: string;
  topic: string;
  status: string;
  tags: Array<string>;
  contentHtml?: string;
}

interface iPosts {
  topic: string;
  posts: Array<iPost>;
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
