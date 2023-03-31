import { Fragment } from "react";

import Contact from "../components/Contact";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <Fragment>
      <main className="flex flex-col h-full w-full gap-10">
        <About />
        {/** @ts-expect-error */}
        <Projects />
        <Contact />
      </main>
    </Fragment>
  );
}
