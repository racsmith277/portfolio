import { ProjectCardProps } from "@/components/ProjectCard";
import petcassoIcon from '@/public/images/petcasso-icon.png';
import fypmIcon from '@/public/images/fypm-icon.png';
import cometIcon from '@/public/images/comet-icon.png';
import voicebarIcon from '@/public/images/vb-icon.png';


export const projectsConfig: ProjectCardProps[] = [
  {
    icon: petcassoIcon,
    title: "Petcasso",
    subtitle: "AI Pet Art (Web)",
    year: "2023",
    role: "Creator",
    description:
      "Petcasso is a web app for creating custom pet artworks. We use 10-20 pictures of each animal to create a custom AI model. Users can generate images using preselected themes or custom prompts. Designed to be intuitive for users with zero AI knowledge.",
    stack: "Stable Diffusion, NextJS, Vercel, Supabase",
  },
  {
    icon: fypmIcon,
    title: "F*** You Pay Me",
    subtitle: "Glassdoor for Influencers (Web)",
    year: "2020 - 2023",
    role: "Advisor-turned-cofounder & CTO",
    description:
      "In 2020 I hacked together the initial MVP in a single weekend. In 2022 I joined full time as co-founder & CTO. During my tenure I singlehandedly designed & built the V2 web app, helped scale the company from 3K to 20K active users, and launched the first revenue-generating product.",
    stack: "Typescript, React Native, Firebase",
  },
  {
    icon: cometIcon,
    title: "Comet",
    subtitle: "Multimedia Social Network (iOS)",
    year: "2021 - 2022",
    role: "Cofounder & CTO",
    description:
      "The Voicebar team pivoted to create Comet, a social network for teens centered on genuine connections and authentic expression. I hired and led a remote development team of 5. We created 3 distinct iOS apps used by up to 10,000 users including an audio roulette app and a scrapbooking drag-and-drop photo editor app.",
    stack: "Typescript, React Native, Firebase",
  },
  {
    icon: voicebarIcon,
    title: "Voicebar",
    subtitle: "Audio Dating App (iOS)",
    year: "2021 - 2022",
    role: "Cofounder & CTO",
    description: `Voicebar was a venture-backed audio dating app that matched over 1,000 users on ~3,000 blind dates. 

I built our scrappy SMS-based MVP, raised a modest pre-seed round, and developed a full-featured iOS app.`,
    stack: "React Native, Firebase, Twilio",
  },
];

