import SectionHeader from "@/components/SectionHeader";

function About() {
  return (
    <div className="md:flex md:min-h-screen md:flex-col">
      <SectionHeader color="rose" title="About Me" />
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="flex flex-col gap-3 p-4 pb-16 md:max-w-lg md:pb-4">
          <p className="text-sm">
            {`I graduated from `}
            <span>Harvard</span>
            {` in 2016 with a degree in CS & Philosophy. After college, I spent 5 years at the `}
            <a
              className=" font-semibold text-emerald-300"
              href="https://www.gartner.com/en/gartner-research-board"
              target="_blank"
            >
              {`Research Board`}
            </a>
            {`, a Gartner-owned think tank, researching cybersecurity, AI/ML, and HCI. In 2018 I relocated from NYC to Dallas to open the RB’s second US office, and grew the team to 11 people.`}
          </p>
          <p className="text-sm">
            {`In 2019, I started learning React by hacking on some side projects. I went full time on my first startup, `}
            <span className="font-semibold text-orange-300">Voicebar</span>
            {`, in 2021.  I’ve been building products for consumers and creators ever since. Most recently, I was the Co-Founder & CTO of `}
            <a
              href="https://fypm.vip"
              target="_blank"
              className="text-rose-300 font-semibold"
            >
              F*** You Pay Me
            </a>
            {`, a Glassdoor for creators app that was named one of `}
            <a
              className="underline"
              href="https://www.fastcompany.com/90724381/most-innovative-companies-current-events-2022"
              target="_blank"
            >{`Fast Company’s 10 Most Innovative Companies (2022).`}</a>
          </p>
          <p className="text-sm">{`I am married to my high school sweetheart & we are blessed with a beautiful baby girl. I’m chronically incapable of relaxing, so my “free time” is filled with baking, knitting, running, starting new projects, and making things of all kinds. `}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
