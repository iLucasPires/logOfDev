const URLAPI ="https://api.github.com/users/ilucaspires/repos?sort=created&direction=desc";
export async function getProjects() {
  const response = await fetch(URLAPI, { next: { revalidate: 3600 } });
  const projects = await response.json();

  return projects;
}

export default getProjects().then((projects) => {
  return projects;
});
