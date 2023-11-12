import FollowMe from "./components/FollowMe";
import About from "./components/About";
import Projects from "./components/Projects";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-10">
      <About />
      <Projects />
      <FollowMe />
    </main>
  );
}
