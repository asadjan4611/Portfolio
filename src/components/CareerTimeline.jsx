const roles = [
  {
    period: "Sep 2025 — present",
    role: "Community Member",
    company: "HAMi · Open-source GPU infrastructure",
    copy: "Contributing to heterogeneous GPU sharing on Kubernetes through scheduling fixes, product improvements, security-focused tests, and maintainer-led review.",
  },
  {
    period: "Oct 2025 — Feb 2026",
    role: "AI Reasoning Engineer",
    company: "Turing · Remote",
    copy: "Improving the reliability of AI systems through structured evaluation, rigorous rubrics, and clear reasoning on difficult tasks.",
  },
  {
    period: "Jan 2025 — Present",
    role: "Technical Trainer",
    company: "Dev Weekends",
    copy: "Guided practical engineering work across web and mobile products, translating complex concepts into clear implementation paths and delivery habits.",
  },
  {
    period: "Sep 2024 — Feb 2025",
    role: "Flutter Developer",
    company: "PITB Incubation Center · Lahore",
    copy: "Delivered two mobile applications end to end, covering requirements, interface implementation, API integration, offline data, testing, release, and support.",
  },
];

export default function CareerTimeline() {
  return (
    <div className="site-container experience-layout">
      <div className="section-label"><span>02</span><p>Experience</p></div>

      <div>
        <h2 className="section-heading">A builder’s path, shaped by complex problems.</h2>
        <div className="experience-list">
          {roles.map((item) => (
            <article className="experience-item" key={item.role}>
              <p className="period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>
              <p className="experience-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
