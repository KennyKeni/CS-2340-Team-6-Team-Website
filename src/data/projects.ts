export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  summary: string
  highlights: string[]
  techStack: string[]
  repoLink: string
  liveSite?: string
  videoEmbed?: string
  status?: string
  userStories?: string[]
  currentSprint?: {
    number: string
    focus: string
    dateRange?: string
    completedStories: string[]
  }
  upcomingSprint?: {
    number: string
    focus: string
    priorities: string[]
    kickoff?: string
  }
  overview: {
    problem: string
    solution: string
    impact: string
  }
  milestones: Array<{
    title: string
    description: string
  }>
  nextSteps: string[]
}

export const projects: Project[] = [
  {
    slug: "course-project-job-app",
    title: "Course Project · Job App",
    tagline: "Connecting early-career talent with recruiters that need them most.",
    description:
      "Our CS 2340 course project is a full-stack Django job-matching web app that empowers job seekers to showcase their stories while giving recruiters the tools to discover, evaluate, and stay in sync with rising talent. It is built with Django, SQLite, and the Google Maps API, and we run the team under an agile workflow.",
    summary:
      "Across Sprints 1 and 2 we implemented authenticated profiles, one-click applications with tailored notes, and a recruiter Kanban pipeline that keeps every candidate moving through the stages while staying grounded in a Django + SQLite backend powered by the Google Maps API. Sprint 3 will extend that foundation with map intelligence for job postings and applicant clusters, recruiter recommendations, and exportable analytics so our stakeholders can make data-driven decisions.",
    status: "Sprint 2 complete · Sprint 3 planning in progress",
    highlights: [
      "Delivered an end-to-end applicant pipeline so recruiters can progress candidates from Applied → Offer reliably.",
      "Implemented one-click applications with tailored notes and automatic status tracking for job seekers.",
      "Established role-based authentication groundwork and sprint review demos with mentor TA feedback.",
    ],
    techStack: ["Django", "SQLite", "Google Maps API"],
    repoLink: "https://github.com/KennyKeni/CS-2340-Team-6-Project",
    liveSite: "https://cs2340team6.pythonanywhere.com/",
    videoEmbed: "",
    userStories: [
      "Job seekers can create detailed profiles with skills, experience, and links.",
      "Job seekers can submit tailored, one-click applications and track their status across stages.",
      "Recruiters can post roles, manage pipelines, and message candidates without leaving the platform.",
      "Recruiters can pin offices on a map to surface location context within listings.",
      "Recruiters can visualize applicant clusters to understand geographic distribution.",
      "Administrators can export CSV snapshots for sprint reporting.",
    ],
    currentSprint: {
      number: "Sprint 2",
      focus: "Application tracking & recruiter pipeline management",
      dateRange: "Oct 12 – Oct 26, 2025",
      completedStories: [
        "Applicants progress through Applied → Review → Interview → Offer → Closed states.",
        "Recruiters can drag-and-drop applicants between pipeline columns for each posting.",
        "Job seekers can add tailored notes to each application submission.",
        "Team website updated with sprint review recap and demo video placeholder.",
      ],
    },
    upcomingSprint: {
      number: "Sprint 3",
      focus: "Map insights & data exports",
      kickoff: "Oct 27, 2025",
      priorities: [
        "Enhance the recruiter Kanban board with filters and aggregate metrics.",
        "Surface candidate recommendations for job postings using saved criteria.",
        "Pin job posting office locations and applicant clusters on an interactive map.",
        "Enable administrators to export CSV reports for stakeholder analysis.",
      ],
    },
    overview: {
      problem:
        "Early-career candidates struggle to get noticed while recruiters lack a cohesive view of emerging talent, leading to missed matches and duplicated effort.",
      solution:
        "Our platform centralizes the hiring flow: job seekers craft rich profiles, recruiters manage pipelines, and both sides glean insight with contextual maps and smart recommendations.",
      impact:
        "By delivering a fully functional application flow by Sprint 2, we set the stage for Sprint 3 insights that help both sides act faster and smarter.",
    },
    milestones: [
      {
        title: "Sprint 1 · Foundations",
        description:
          "Defined the Django data model, set up authentication, and delivered the first MVP covering job seeker profiles and recruiter posting basics.",
      },
      {
        title: "Sprint 2 · Applicant Pipeline",
        description:
          "Integrated Google Maps to display job posting locations, built Kanban pipeline management for recruiters, and wrapped up application submissions with tailored notes.",
      },
      {
        title: "Sprint 3 · Map Intelligence & Analytics",
        description:
          "Focused on remaining recruiter analytics: candidate recommendations, office pinning, applicant clusters, and administrator CSV exports for the Sprint 3 finish.",
      },
    ],
    nextSteps: [
      "Align Sprint 3 backlog with mentor TA expectations during planning review.",
      "Prototype the map visualization using campus data to validate UX flows.",
      "Prepare test plan and instrumentation for notifying users about new matches.",
    ],
  },
  {
    slug: "gt-tour-guide",
    title: "GT Tour Guide",
    tagline: "An AI powered tour web app for Georgia Tech.",
    description:
      "A conversational campus companion that curates personalized visit itineraries and surfaces hidden gems across Georgia Tech.",
    summary:
      "GT Tour Guide blends AI-driven recommendations with campus data to create tailored walking routes, contextual briefings, and real-time logistics for visitors and prospective students.",
    highlights: [
      "Outlined AI prompt strategy for recommending stops based on visitor personas.",
      "Prototyped an itinerary builder that adapts to tour duration and accessibility needs.",
      "Planning integrations with campus events feed and facilities availability.",
    ],
    techStack: ["Django", "SQLite", "Google Maps API"],
    repoLink: "#",
    liveSite: "",
    status: "Ideation · Backlog grooming",
    overview: {
      problem:
        "Visitors rely on generic campus tours that overlook specialized labs, student-led initiatives, and the context prospects need to picture life at Georgia Tech.",
      solution:
        "We are building an AI tour companion that curates personalized itineraries, contextual storytelling, and live navigation support across campus.",
      impact:
        "We expect to improve visitor engagement, guide families to relevant programs faster, and give admissions richer analytics on tour interests.",
    },
    milestones: [
      {
        title: "Week 2 · Discovery",
        description:
          "Interviewed 8 teaching assistants to understand pain points with current study group formation methods.",
      },
      {
        title: "Week 5 · Prototype",
        description:
          "Built interactive wireframes to validate flow and captured early usability feedback.",
      },
      {
        title: "Week 8 · Beta Planning",
        description:
          "Outlined metrics, onboarding flows, and pilot logistics with course faculty.",
      },
    ],
    nextSteps: [
      "Integrate real-time campus events, dining hours, and transit data feeds.",
      "Design adaptive prompts that adjust recommendations based on visitor feedback in-session.",
      "Launch a limited pilot with admissions ambassadors and capture engagement metrics.",
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
