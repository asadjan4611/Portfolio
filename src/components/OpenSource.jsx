const contributions = [
  {
    name: "HAMi",
    context: "Heterogeneous GPU sharing on Kubernetes",
    status: "Main focus · 15+ merged PRs",
    link: "https://github.com/Project-HAMi/HAMi/pulls?q=is%3Apr+author%3Aasadjan4611",
    summary:
      "Working with maintainers on production infrastructure where scheduling correctness, resource isolation, and defensive test coverage matter.",
    outcomes: [
      "Fixed defects across GPU scheduling and resource-sharing workflows.",
      "Shipped feature improvements shaped by maintainer and community feedback.",
      "Added security test cases that harden critical code paths.",
    ],
  },
  {
    name: "Inroad",
    context: "Open-source recruiting and outreach product",
    status: "Full-product contributions",
    link: "https://github.com/Abdul-Moiz31/Inroad/pulls?q=is%3Apr+author%3Aasadjan4611+is%3Aclosed",
    summary:
      "Contributed across a TypeScript/Next.js and Python/FastAPI product, from high-context interface work to safer error handling and typed client behavior.",
    outcomes: [
      "Redesigned editable profiles and outreach-focused contact details for responsive, professional use.",
      "Converted malformed résumé uploads into typed backend errors with useful frontend feedback.",
      "Addressed accessibility, data-safety, CI, and CodeRabbit review feedback through structured PR iteration.",
    ],
  },
  {
    name: "Apache DolphinScheduler",
    context: "Distributed workflow orchestration platform",
    status: "Apache contributor",
    link: "https://github.com/apache/dolphinscheduler/pulls?q=is%3Apr+author%3Aasadjan4611+is%3Aclosed",
    summary:
      "Improved reliability and operator clarity across alert execution and workflow-management paths in a large distributed system.",
    outcomes: [
      "Added configurable Script Alert execution timeouts and tests to prevent hung scripts exhausting worker threads.",
      "Made destructive workflow confirmation explicit and fixed a failed-request loading-state regression.",
      "Removed unreachable code from the WeChat alert sender.",
    ],
  },
];

export default function OpenSource() {
  return (
    <div className="site-container oss-layout">
      <div className="section-label"><span>03</span><p>Open source</p></div>

      <div>
        <div className="oss-heading">
          <h2 className="section-heading">Engineering in public, where the details are reviewed.</h2>
          <p>
            I contribute beyond my own codebases—working through maintainers’ feedback,
            established standards, and the operational constraints of software people already rely on.
          </p>
        </div>

        <div className="oss-list">
          {contributions.map((project, index) => (
            <article className="oss-card" key={project.name}>
              <div className="oss-card-top">
                <span className="oss-number">0{index + 1}</span>
                <p className="oss-status">{project.status}</p>
              </div>
              <h3>{project.name}</h3>
              <p className="oss-context">{project.context}</p>
              <p className="oss-summary">{project.summary}</p>
              <ul>
                {project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Review contributions <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
