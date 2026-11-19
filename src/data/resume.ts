// Public resume — source: "Agentic SWE Resume - Darius Moore" (Nov 2026).
// Keep phone number, personal email, clearance details, program names and sponsors OFF the public site.
// CoStar business figures (1,200+ reps, $2B+ monthly contract volume) confirmed OK to show publicly (Nov 2026).

export const YEARS = 12; // professional experience since Aug 2014

export const resume = {
  summary: `Senior software engineer with ${YEARS} years building enterprise and federal software, now specializing in AI and agentic workflows. I lead development of the sales platform 1,200+ CoStar reps use daily to generate $2B+ in contract volume every month, and I run Claude Code across the full development lifecycle.`,
  experience: [
    {
      role: 'Senior Software Engineer',
      org: 'CoStar Group',
      location: 'Arlington, VA',
      dates: 'Mar 2022 – Present',
      earlier: 'Software Engineer, Apr 2019 – Mar 2022',
      points: [
        'Lead development of a financial enterprise platform (Angular 20 / .NET SPA) used daily by 1,200+ sales reps to generate $2B+ in contract volume every month.',
        'Redesigned the core proposal workflow for the sales teams, cutting sales-cycle time for client transactions by 50%.',
        'Orchestrate agentic AI (Claude Code) across the full development lifecycle: custom skills that turn team standards into repeatable workflows, parallel subagents for research and scoped implementation, and agent-driven testing of application flows, improving my workflow efficiency by more than 40%.',
        'Scaled agentic development practices from my own workflow to the full team of 3 engineers: custom skills, review guardrails and shared agent config.',
        'Integrate AI agents into sprint planning and refinement: drafting user stories and acceptance criteria for QA, decomposing epics into subtasks, and surfacing requirement gaps before buildout begins.',
        'Led the migration from on-prem IIS to containers on Amazon EKS, and now own CI/CD across Azure DevOps and Jenkins.',
        'Modernized the legacy Angular codebase through sequential major-version upgrades to Angular 20, adopting the new control-flow syntax and OnPush change detection.',
      ],
    },
    {
      role: 'Frontend Engineer',
      org: '540.co',
      location: 'Arlington, VA',
      dates: 'Sep 2017 – Apr 2019',
      points: [
        'Led the UI overhaul of a U.S. Army web application (AngularJS, Rails, Bootstrap) that automated a fully manual workflow, improving personnel productivity by 75%+.',
        'Built the company’s first internal analytics dashboard from scratch in JavaScript (ES6).',
        'Contributed across the stack, from frontend architecture to Rails API endpoints.',
      ],
    },
    {
      role: 'UI Designer / Frontend Web Developer',
      org: 'CGI Inc.',
      location: 'Washington, DC',
      dates: 'Oct 2015 – Sep 2017',
      points: [
        'Led major UI/UX redesigns of public-facing web applications for a Department of Justice agency.',
        'Rebuilt the agency’s primary public website as a fully responsive, modern site: its first major upgrade since launching in 1994.',
      ],
    },
    {
      role: 'Web Developer',
      org: 'Singlecomm, LLC',
      location: 'Richmond, VA',
      dates: 'Aug 2014 – Sep 2015',
      points: [
        'Maintained and refactored a legacy contact-center platform (AngularJS, PHP, jQuery) used by call-center agents for inbound and outbound sales, reducing legacy code by 32%.',
      ],
    },
  ],
  ventures: [
    { role: 'Founder', org: 'Olide Digital', detail: 'Digital marketing agency for local service businesses in the DC metro area.' },
    { role: 'Co-founder', org: 'ArcDNA, Inc.', detail: 'Mobile app helping students organize academic and extracurricular activities (while at ODU).' },
  ],
  education: { school: 'Old Dominion University', degree: 'B.S., Information Systems' },
  skills: [
    { group: 'AI & agentic', items: ['Claude Code', 'Claude Cowork', 'Custom skills', 'Subagents', 'Copilot'] },
    { group: 'Languages & frameworks', items: ['Angular 20', 'TypeScript', 'JavaScript (ES6)', 'RxJS', 'NgRx', 'Redux', '.NET 10', 'C#', 'SQL', 'REST APIs', 'HTML', 'CSS', 'Sass'] },
    { group: 'Cloud & DevOps', items: ['Amazon EKS', 'Azure DevOps / TFS', 'Jenkins', 'Git', 'Jira', 'Confluence'] },
    { group: 'Observability', items: ['OpenTelemetry', 'Jaeger', 'Datadog', 'LogRocket'] },
    { group: 'Frontend practice', items: ['Responsive design', 'Performance optimization', 'Storybook', 'Angular CLI', 'Chrome DevTools'] },
  ],
};

export const experienceStrip = ['CoStar Group', 'U.S. Army', 'Dept. of Justice', '540.co', 'CGI', 'Olide Digital'];

export const caseStudies = [
  {
    tag: 'AI agents · Claude Code',
    title: 'Agentic development, from my workflow to the whole team',
    body: 'Custom skills that encode team standards, parallel subagents for research and scoped builds, and agent-driven testing of app flows. Then rolled out as the team standard.',
    results: [
      { value: '40%+', label: 'faster personal dev workflow' },
      { value: '3 of 3', label: 'engineers on the shared setup' },
    ],
  },
  {
    tag: 'Enterprise frontend · Angular 20 / .NET',
    title: 'Cutting sales-cycle time in half on an enterprise sales platform',
    body: 'Redesigned the core proposal workflow, upgraded the codebase version by version to Angular 20, and moved the app from on-prem to Amazon EKS.',
    results: [{ value: '50%', label: 'shorter sales cycle for client transactions' }],
  },
  {
    tag: 'Federal · U.S. Army',
    title: 'Automating a manual U.S. Army workflow',
    body: 'Led the UI overhaul of an Army web application (AngularJS, Rails) that replaced a fully manual process, working across the stack.',
    results: [{ value: '75%+', label: 'personnel productivity gain' }],
  },
];

export const glance = [
  { label: 'Roles', value: 'Senior / Staff IC', detail: 'Frontend, product or full-stack' },
  { label: 'Location', value: 'Bethesda, MD', detail: 'DC Metro hybrid or remote US' },
  { label: 'Core stack', value: 'Angular · TypeScript · RxJS', detail: '.NET, Amazon EKS' },
  { label: 'AI', value: 'Claude Code agent workflows', detail: 'Skills, subagents, agent testing' },
];

// Anthropic Academy course certificates (completion certificates, not proctored exams).
// Add each verify URL (verify.skilljar.com/c/...) from the Academy student profile.
export const certifications = [
  { name: 'Claude Code in Action', issuer: 'Anthropic Academy', date: 'Nov 2026', verifyUrl: '' },
  { name: 'Introduction to Subagents', issuer: 'Anthropic Academy', date: 'Jul 2026', verifyUrl: '' },
  { name: 'Claude Code 101', issuer: 'Anthropic Academy', date: 'Apr 2026', verifyUrl: '' },
  { name: 'Claude 101', issuer: 'Anthropic Academy', date: 'Apr 2026', verifyUrl: '' },
];
