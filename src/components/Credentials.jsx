const credentials = [
  {
    type: "Recognition",
    name: "ICPC Regional Qualifier",
    issuer: "International Collegiate Programming Contest",
    detail: "Regional level",
  },
  {
    type: "Certification",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    detail: "Issued Feb 2025",
  },
  {
    type: "Course certificate",
    name: "LFC102: Inclusive Open Source Community Orientation",
    issuer: "The Linux Foundation",
    detail: "Issued May 2026",
  },
  {
    type: "Certification",
    name: "IT Specialist – Data Analytics",
    issuer: "Certiport, a Pearson VUE business",
    detail: "Valid through May 2031",
  },
];

export default function Credentials() {
  return (
    <div className="site-container credentials-layout">
      <div className="section-label"><span>06</span><p>Profile</p></div>

      <div>
        <div className="credentials-heading">
          <h2 className="section-heading">Certifications &amp; recognition.</h2>
          <p>A concise record of verified learning and competitive recognition.</p>
        </div>

        <div className="credential-list">
          {credentials.map((credential, index) => (
            <article className="credential-row" key={credential.name}>
              <span className="credential-number">{String(index + 1).padStart(2, "0")}</span>
              <p className="credential-type">{credential.type}</p>
              <div>
                <h3>{credential.name}</h3>
                <p>{credential.issuer}</p>
              </div>
              <p className="credential-date">{credential.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
