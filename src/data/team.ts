export type TeamMember = {
  name: string
  role: string
  email: string
  focus: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Kenny Lin",
    role: "Tech Lead · Computer Science Undergraduate",
    email: "klin344@gatech.edu",
    focus: "System architecture, full-stack integration, and maintaining build quality sprint over sprint.",
  },
  {
    name: "Sayan Dahiya",
    role: "Backend Engineer · Computer Science Undergraduate",
    email: "sdahiya31@gatech.edu",
    focus: "API design, data modeling, and performance tuning for recruiter workflows.",
  },
  {
    name: "Jahir Chowdhury",
    role: "Product Owner · Computer Science Undergraduate",
    email: "jchowdhury31@gatech.edu",
    focus: "Backlog prioritization, stakeholder alignment, and defining acceptance criteria each sprint.",
  },
  {
    name: "Shashwat Dwivedi",
    role: "Full-Stack Developer · Computer Engineering Undergraduate",
    email: "sdwivedi43@gatech.edu",
    focus: "Feature development across Django views, template logic, and shared component patterns.",
  },
  {
    name: "Deven Nahata",
    role: "Scrum Master · Computer Science Undergraduate",
    email: "dnahata7@gatech.edu",
    focus: "Ceremony facilitation, risk tracking, and ensuring the team removes blockers quickly.",
  },
]
