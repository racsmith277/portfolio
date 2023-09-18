import SectionHeader from "@/components/SectionHeader";

function About() {
  return (
    <div className="md:min-h-screen md:flex md:flex-col">
      <SectionHeader color="rose" title="About Me" />
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="flex md:max-w-lg flex-col gap-3 p-4 pb-16 md:pb-4">
          <p className="text-sm">{`I graduated from Harvard in 2016 with a degree in CS & Philosophy. After college, I spent 5 years at the Research Board, a Gartner-owned think tank, researching cybersecurity, AI/ML, and HCI. In 2018 I relocated from NYC to Dallas to open the RB’s second US office, and grew the team to 12 people.`}</p>
          <p className="text-sm">{`In 2019, I started learning React by hacking on some side projects. I went full time on my first startup, Voicebar, in 2021. I’ve been the co-founder and CTO of two venture-backed companies that have raised over $2M in funding. `}</p>
          <p className="text-sm">{`I am married to my high school sweetheart & we are blessed with a beautiful baby girl. I’m chronically incapable of doing nothing, so my “free time” is filled with baking, knitting, running, starting new projects, and making things of all kinds. `}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
