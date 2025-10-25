export type TeamMember = {
  name: string
  role: string
  email: string
  focus: string
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
    role: "Scrum Master · Computer Science · 2nd Year",
    email: "dnahata7@gatech.edu",
    focus: "Ceremony facilitation, risk tracking, and ensuring the team removes blockers quickly.",
  },
]
