import { BsGlobe2, BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";

export const RESUME_DATA = {
  name: "Sirius",
  initials: "Sirius",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  about: "",
  summary: "",
  avatarUrl: "",
  personalWebsiteUrl: "https://imsirius.xyz/",
  contact: {
    email: "bartosz.jarocki@hey.com",
    social: [
      {
        name: "Website",
        url: "https://imsirius.xyz/",
        icon: BsGlobe2,
      },
      {
        name: "GitHub",
        url: "https://github.com/1msirius",
        icon: BsGithub,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: BsLinkedin,
      },
      {
        name: "X",
        url: "https://x.com/1msirius_",
        icon: BsTwitterX,
      },
    ],
  },
  education: [
    {
      school: "Internet and Books",
      degree:
        "I'm an avid self-learner and consider myself an autodidact; almost everything I know has been self-taught through books and the Internet.",
      start: 2006,
      end: "Present",
    },
  ],
  work: [],
  skills: [],
  projects: [],
} as const;
