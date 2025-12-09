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
  systemDescription?: string | string[]
  processDescription?: string
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
  image?: string
  imageAlt?: string
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
    status: "Sprint 3 complete as of 11/21",
    highlights: [
      "Delivered an end-to-end applicant pipeline so recruiters can progress candidates from Applied → Offer reliably.",
      "Implemented one-click applications with tailored notes and automatic status tracking for job seekers.",
      "Established role-based authentication groundwork and sprint review demos with mentor TA feedback.",
    ],
    techStack: ["Django", "SQLite", "Google Maps API"],
    repoLink: "https://github.com/KennyKeni/CS-2340-Team-6-Project",
    liveSite: "https://cs2340team6.pythonanywhere.com/",
    videoEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/b8mQTkXq-3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="aspect-video"></iframe>',
    image: "/jobapp.png",
    imageAlt: "Screenshot of the Job App platform showing recruiter pipeline columns and applicant cards.",
    userStories: [
      "Job seekers can create detailed profiles with skills, experience, and links.",
      "Job seekers can submit tailored, one-click applications and track their status across stages.",
      "Recruiters can post roles, manage pipelines, and message candidates without leaving the platform.",
      "Recruiters can pin offices on a map to surface location context within listings.",
      "Recruiters can visualize applicant clusters to understand geographic distribution.",
      "Administrators can export CSV snapshots for sprint reporting.",
    ],
    currentSprint: {
      number: "Sprint 3",
      focus: "Map insights & data exports",
      dateRange: "Oct 27 – Nov 21, 2025",
      completedStories: [
        "User Story 12: Organized applicants in a Kanban board pipeline so recruiters can easily manage hiring stages.",
        "User Story 16: Implemented candidate recommendations for job postings so recruiters find qualified applicants faster.",
        "User Story 17: Enabled recruiters to pin job posting office locations on a map so candidates know exactly where the job is based.",
        "User Story 18: Visualized clusters of applicants by location on a map so recruiters understand where most candidates are coming from.",
        "User Story 21: Built CSV export functionality for administrators so stakeholders can analyze usage for reporting purposes.",
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
      "Complete final project documentation and sprint retrospective.",
      "Prepare final demo presentation showcasing all three sprints.",
      "Archive project repository and deployment for course submission.",
    ],
    systemDescription: [
      "The Job App is created using Django as a monolith full-stack framework that leans on Django's Model-View-Controller pattern. Our views (controllers) expose API endpoints and server-rendered pages, while AJAX powers client-side interactions where needed. The applicant experience features a profile page with toggleable settings spanning User Story 1 (profile details with headline, skills, education, experience, and links), User Story 5 (privacy controls), and User Story 9 (preferred commute radius). The job search page implements User Story 2 for filtered job discovery and User Story 3 for one-click applications. A recommendations page satisfies User Story 6 by ranking jobs through skill matches.",
      "The maps page fulfills User Stories 7, 8, and 9 with geospatial search, Euclidean distance filters, and saved preferences. Recruiters work within a dedicated dashboard addressing User Story 10 for posting and editing roles, plus a candidate search page that covers User Story 11 (skill/location/project filters), User Story 13 (in-platform messaging), User Story 14 (email outreach), and User Story 15 (saved searches with notifications). A shared notification system underpins User Stories 13 and 15 by surfacing new messages and saved-search matches.",
      "We also extend Django's admin site to satisfy administrative user stories. Administrators manage users and roles for User Story 19 by banning accounts, deleting users, and toggling roles between applicant and recruiter as needed, while the same panel allows them to remove job postings directly from the system.",
      "![Job Search Sequence Diagram](/jobapp/JobSearchSD.png)\n\nThis sequence diagram shows how a job seeker searches for jobs using multiple filters (title, skills, location, salary range, remote/on-site preference, and visa sponsorship). When the user submits the search form, the search_jobs Django view reads the query parameters and applies each filter in turn to the JobPosting queryset, narrowing the results in the database. For authenticated applicants, the system then retrieves the jobs they've already applied to and renders the filtered results with \"applied\" status indicators.",
      "![Candidate Search Sequence Diagram](/jobapp/JobAppSD3.png)\n\nThis sequence diagram illustrates the recruiter's candidate search workflow. A recruiter navigates to the candidate search page through their browser, where they can apply and refine multiple filters including username, free-text queries, required skills, project links, and location preferences. The CandidateSearchView verifies recruiter permissions, constructs a Django queryset joining account and privacy data, and incrementally filters visible candidates based on the provided criteria. After deduplicating results, the view prepares the template context and returns an HTML response displaying the filtered candidate list to the recruiter's browser.",
      "![Class Diagram](/jobapp/ClassDiagram.png)\n\nThe platform's class structure centers on a dual-user architecture where both Applicants and Recruiters inherit from a base Account model. Applicants construct comprehensive profiles encompassing work experience, education, and skill sets, with granular privacy controls governing information visibility. Job applications progress through a structured workflow spanning applied, review, interview, offer, and closed stages. The system implements bidirectional matching intelligence: get_job_recommendations() surfaces relevant opportunities for candidates by analyzing their skill profiles, while get_candidate_recommendations() employs weighted skill scoring to connect recruiters with qualified applicants. Communication mechanisms include a notification system and direct messaging capabilities, complemented by saved search functionality for recruiters and privacy settings that give candidates control over their profile visibility.",
    ],
    processDescription:
      "We followed Scrum with async standups as needed to keep everyone in the loop and quickly address any roadblocks that came up. The Product Owner kept tabs on deadlines, submitted deliverables, and reached out to our TA whenever we needed clarification on what a user story actually required. During sprint planning, the Scrum Master broke down each user story into detailed tickets so everyone knew exactly what we were building. This way, it was clear who owned which story and what the expectations were for each user story.\n\n\n\nWe used GitHub for version control to coordinate work on a shared main branch with clear history and reviews, keeping everything organized while each person worked on their own branch. When someone finished a feature, they'd open a pull request so the rest of us could review it before merging. This kept us from accidentally breaking each other's code and ensured changes were merged safely without disrupting others. We managed our backlog on Trello using columns for backlog, in progress, in review, and completed, which made it easy to see where every story stood and who was working on what. Teams served as the primary mode of communication for meetings, demos, document sharing, and sprint deadline tracking. Overall, this sprint went pretty smoothly. We met our internal deadlines without major issues, and the team stayed on the same page throughout.",
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
    techStack: ["Django", "SQLite", "Google Maps API", "PydanticAI", "OpenAI API"],
    repoLink: "#",
    liveSite: "",
    videoEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/lZMsp-xAqs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="aspect-video"></iframe>',
    status: "Sprint 1",
    systemDescription: [
      "![LLM Tour Creation Sequence Diagram](/tourapp/TourAppSD.png)\n\nThe LLM Tour Creation feature enables users to request custom campus tours through a conversational chat interface. When a user submits a tour request, the Pydantic AI agent queries the OpenRouter LLM with context about all available campus locations. The LLM then suggests a themed tour with specific stops tailored to the user's interests. Once the user confirms they want the tour saved, the LLM invokes a create_tour tool that persists the Tour and TourStop records to the database. The system returns the new tour ID to the frontend, allowing the user to immediately view or navigate their custom tour.",
      "![Domain Model Diagram](/tourapp/dmd.png)\n\nThe domain model centers on Users who maintain UserProfiles with privacy settings and affiliation details. Users can create and own Tours composed of ordered TourStops, each referencing a Location with geographic coordinates, descriptions, and historical information. The platform supports social features through Friendships (with request/accept status) and SharedTours for collaborative planning. Users can bookmark both individual Locations and complete Tours, while Ratings allow users to review Locations with comments that staff users can moderate and respond to.",
    ],
    overview: {
      problem:
        "Visitors rely on generic campus tours that overlook specialized labs, student-led initiatives, and the context prospects need to picture life at Georgia Tech.",
      solution:
        "We are building an AI tour companion that curates personalized itineraries, contextual storytelling, and live navigation support across campus.",
      impact:
        "We expect to improve visitor engagement, guide families to relevant programs faster, and give admissions richer analytics on tour interests.",
    },
    processDescription:
      "We followed Scrum with async standups as needed to keep everyone in the loop and quickly address any roadblocks that came up. Our Product Owner kept tabs on deadlines, submitted deliverables, and reached out to our TA whenever we needed clarification on what a user story actually required. During sprint planning, the Scrum Master broke down each user story into detailed tickets so everyone knew exactly what we were building. This way, it was clear who owned which story and what the expectations were for each user story.\n\n\n\nWe used GitHub for version control to coordinate work on a shared main branch with clear history and reviews, keeping everything organized while each person worked on their own branch. When someone finished a feature, they'd open a pull request so the rest of us could review it before merging. This kept us from accidentally breaking each other's code and ensured changes were merged safely without disrupting others. We managed our backlog on Trello using columns for backlog, in progress, in review, and completed, which made it easy to see where every story stood and who was working on what. Teams served as the primary mode of communication for meetings, demos, document sharing, and sprint deadline tracking. Overall, this sprint went pretty smoothly. We met our internal deadlines without major issues, and the team stayed on the same page throughout.",
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
