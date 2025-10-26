export type TeamMember = {
  name: string
  role: string
  email: string
  focus: string
  bio?: string
  contributions?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Kenny Lin",
    role: "Full-Stack Developer · Computer Science · 4th Year",
    email: "klin344@gatech.edu",
    focus: "System architecture, repo tooling, and shared backend integrations.",
    bio: "I'm Kenny, a fourth-year Computer Science major from New York. I like working on software projects at scale and have dabbled in multiple fields from full stack to machine learning. I have experience in Next.js, NestJS, FastAPI, and Go, and I'm currently building several projects with those stacks.",
    contributions:
      "On the team I work as the full stack developer and have worked on setting up the project's repository as well as various features such as the database models, to allow applicants and various backend APIs. I also worked on the administrator features and have touched upon multiple other user stories for bug fixes and small tweaks as well as helping merge a large majority of the pull requests.",
  },
  {
    name: "Sayan Dahiya",
    role: "Full-Stack Developer · Computer Science · 2nd Year",
    email: "sdahiya31@gatech.edu",
    focus: "Privacy controls, recruiter job postings, and application status flows.",
    bio: "I’m Sayan Dahiya, a second-year Computer Science major from India. I focus on building software that balances performance, design, and functionality, and I enjoy turning complex requirements into clear solutions. My background includes UI design and database-driven applications for desktop and mobile, and I’m currently expanding into web development. I’m especially interested in combining low-latency systems with aesthetically pleasing UI.",
    contributions:
      "On the team, I work as a full-stack developer and I have worked on the privacy settings feature on a job seeker's profile that they can toggle to change what they want to show to recruiters. I've also worked on allowing recruiters to make job postings on the site that they use to make job seekers aware of new offers and openings as well as help job seekers track the status of their application from start to finish throughout the stages so they are aware of how close they are to getting a job or what they should be expecting next in their application process.",
  },
  {
    name: "Jahir Chowdhury",
    role: "Product Owner · Computer Science · 3rd Year",
    email: "jchowdhury31@gatech.edu",
    focus: "Backlog prioritization, stakeholder alignment, and defining acceptance criteria each sprint.",
  },
  {
    name: "Shashwat Dwivedi",
    role: "Full-Stack Developer · Computer Engineering · 3rd Year",
    email: "sdwivedi43@gatech.edu",
    focus: "Feature development across Django views, template logic, and shared component patterns.",
  },
  {
    name: "Deven Nahata",
    role: "Scrum Master · Computer Engineering · 2nd Year",
    email: "dnahata7@gatech.edu",
    focus: "Scrum ceremonies and blocker removal, plus recruiter emailing and skill-based job matches.",
    bio: "My name is Deven Nahata, I am a 2nd year computer engineering major from Pittsburgh, PA. I previously have experience working in cybersecurity, working to connect US vendors with companies in the Middle East. I also have research experience, working at a lab for wearable devices at CMU, and at a lab at the University of Toronto for autonomous vehicles.",
    contributions:
      "In this sprint, I implemented the email feature for recruiters, where they can email the applicants directly from the site. I also implemented the skills feature, where jobs can be recommended to you based on the skills in your profile. I also worked on the retrospective. In Sprint 1, I worked on the job search feature.",
  },
]
