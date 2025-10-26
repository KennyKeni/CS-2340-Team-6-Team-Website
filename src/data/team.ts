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
    focus: "System architecture, integrations across Django and the frontend, and keeping releases production-ready.",
  },
  {
    name: "Sayan Dahiya",
    role: "Full-Stack Developer · Computer Science · 2nd Year",
    email: "sdahiya31@gatech.edu",
    focus: "API design, data modeling, and end-to-end feature delivery for recruiter workflows.",
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
