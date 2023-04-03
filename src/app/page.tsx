import { Fragment } from "react";

import FollowMe from "../components/FollowMe";
import About from "../components/About";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <Fragment>
      <main className="flex flex-col h-full w-full gap-10">
        <About />
        {/** @ts-expect-error */}
        <Projects />
        <FollowMe />
      </main>
    </Fragment>
  );
}
