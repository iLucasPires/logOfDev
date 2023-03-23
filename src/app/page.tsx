import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";




export default function Home() {
  return (
    <>
      <main className="flex  flex-col h-full w-full gap-10">
        <About />
        {/** @ts-expect-error */}
        <Projects />
        <Contact />
      </main>
    </>
  );
}
