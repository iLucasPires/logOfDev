export default interface ProjectProps {
  id ?: number;
  name?: string;
  description?: string;
  language?: string;
  topics?: Array<string>;
  html_url?: string;
  stargazers_count?: number;
}
