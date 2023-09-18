import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";
import Link from "next/link";

function Welcome() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-neutral-100 px-4">
      <div className="flex max-w-md flex-col gap-6 items-center">
        <h1 className="text-center font-heading text-3xl">{`Hi, I'm Rachael.`}</h1>
        <p className="font-body text-neutral-400 text-center">{`I’m a founder & full stack design engineer who loves building products from zero to one.`}</p>
        <div className='w-48'>
        <div className='flex justify-around'>
          <Link href="https://twitter.com/witty_genstein" target="_blank">
            <TwitterIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/rachael-smith-101/" target="_blank">
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
