import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";
import Link from "next/link";

function Welcome() {
  
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-neutral-100 px-4">
      <div className="absolute top-0 p-6 w-full md:p-8">
        <div className="flex w-full justify-between md:justify-end gap-8">
          <Link href="/#about">
            <h2 className="font-outline font-heading text-emerald-300 hover:text-black">
              ABOUT
            </h2>
          </Link>
          <Link href="/#projects">
            <h2 className="font-outline font-heading text-orange-300 hover:text-black">
              WORK
            </h2>
          </Link>
          <a href="mailto:contact@rachael.lol">
            <h2 className="font-outline font-heading text-rose-300 hover:text-black">
              CONTACT
            </h2>
          </a>
        </div>
      </div>
      <div className="flex max-w-md flex-col items-center gap-6">
        <h1 className="text-center font-heading text-3xl">{`Hi, I'm `}<span className='gradient inline-block text-transparent bg-clip-text font-outline'>Rachael</span>{`.`}</h1>
        <p className="text-center text-neutral-400">{`I’m a founder & full stack design engineer who loves building products from zero to one.`}</p>
        <div className="w-48">
          <div className="flex justify-around">
            <Link href="https://twitter.com/witty_genstein" target="_blank">
              <TwitterIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rachael-smith-101/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link href="https://github.com/racsmith277" target="_blank">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
