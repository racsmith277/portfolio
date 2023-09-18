import Welcome from "@/app/_content/Welcome";
import About from "@/app/_content/About";
import Work from "@/app/_content/Work";

export default function Home() {
  return (
    <main className="">
      <Welcome />
      <div id="about">
        <About />
      </div>
      <div id="projects">
      <Work />
      </div>
    </main>
  );
}
