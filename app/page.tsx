const publications = [
  {
    year: "2025",
    title:
      "Prescriptive analytics for freeway traffic state estimation by multi-source data fusion",
    authors: "D. Huang, J. Zhang, Z. Liu, and R. Liu",
    venue: "Transportation Research Part E, 198, 104105",
    href: "https://doi.org/10.1016/j.tre.2025.104105",
  },
  {
    year: "2024",
    title:
      "A data-driven optimization-based approach for freeway traffic state estimation based on heterogeneous sensor data fusion",
    authors: "J. Zhang, D. Huang, Z. Liu, et al.",
    venue: "Transportation Research Part E, 189, 103656",
    href: "https://doi.org/10.1016/j.tre.2024.103656",
  },
  {
    year: "2024",
    title:
      "A novel ranking method based on semi-SPO for battery swapping allocation optimization in a hybrid electric transit system",
    authors: "D. Huang, J. Zhang, Z. Liu, et al.",
    venue: "Transportation Research Part E, 188, 103611",
    href: "https://doi.org/10.1016/j.tre.2024.103611",
  },
  {
    year: "2023",
    title:
      "A robust coordinated charging scheduling approach for hybrid electric bus charging systems",
    authors: "D. Huang, J. Zhang, and Z. Liu",
    venue: "Transportation Research Part D, 125, 103955",
    href: "https://doi.org/10.1016/j.trd.2023.103955",
  },
];

const profileLinks = [
  {
    label: "Email",
    href: "mailto:jinyuzhangseu@gmail.com",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=MtbsNLgAAAAJ&hl=en",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Jinyu-Zhang-35",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0009-7231-3368",
  },
];

const researchInterests = [
  "Learning-augmented optimization",
  "Data-driven and prescriptive analytics",
  "Intelligent transportation systems",
  "Scalable optimization algorithms",
];

const education = [
  {
    period: "2026 —",
    degree: "Ph.D. Student",
    field: "Operations Research and Machine Learning",
    institution: "EPFL · Lausanne, Switzerland",
  },
  {
    period: "2023 — 2026",
    degree: "M.Eng.",
    field: "Traffic and Transportation Engineering",
    institution: "Southeast University",
  },
  {
    period: "2019 — 2023",
    degree: "B.Eng.",
    field: "Traffic Engineering",
    institution: "Beijing Jiaotong University",
  },
];

const honors = [
  {
    year: "2025",
    title: "Southeast University Presidential Scholarship",
    detail: "Highest graduate honor; 10 recipients university-wide",
  },
  {
    year: "2025",
    title: "National Scholarship of China",
    detail: "Awarded to the top 1% of students nationwide",
  },
  {
    year: "2025",
    title: "Xiaomi Grand Scholarship",
    detail: "8 recipients university-wide",
  },
  {
    year: "2025",
    title: "FTTE Future Stars Award",
    detail: "100 awardees selected from leading universities",
  },
];

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="nav-inner">
          <a className="wordmark" href="#about" aria-label="Jinyu Zhang, home">
            <span aria-hidden="true" />
            Jinyu Zhang
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#education">Education</a>
            <a href="#honors">Honors</a>
          </nav>
        </div>
      </header>

      <main className="academic-layout">
        <aside className="profile-card" aria-label="Profile">
          <img
            className="profile-photo"
            src="/jinyu-zhang.webp"
            alt="Portrait of Jinyu Zhang"
            width="360"
            height="360"
          />
          <div className="profile-copy">
            <p className="profile-kicker">Incoming PhD Student</p>
            <h1>Jinyu Zhang</h1>
            <p className="profile-role">
              Operations Research and Machine Learning
              <br />
              EPFL
            </p>
            <p className="profile-location">Lausanne, Switzerland</p>
          </div>
          <div className="profile-links" aria-label="Academic profiles">
            {profileLinks.map((link) => (
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                key={link.label}
              >
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </aside>

        <article className="academic-content">
          <section id="about" className="content-section intro-section">
            <SectionHeading number="01" title="About" />
            <p className="intro">
              I am an incoming PhD student at EPFL. My research lies at the
              intersection of machine learning, mathematical optimization, and
              intelligent transportation systems.
            </p>
            <p>
              I am interested in connecting prediction with optimization so
              that data can lead to better, faster, and more reliable
              operational decisions. Before joining EPFL, I studied at
              Southeast University and Beijing Jiaotong University.
            </p>
          </section>

          <section id="research" className="content-section">
            <SectionHeading number="02" title="Research" />
            <p>
              My work develops learning-assisted methods for decision-making in
              complex and changing environments, with an emphasis on mobility
              and large-scale operational systems.
            </p>
            <ul className="interest-list">
              {researchInterests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </section>

          <section id="publications" className="content-section">
            <SectionHeading number="03" title="Selected publications" />
            <div className="publication-list">
              {publications.map((publication) => (
                <a
                  className="publication-item"
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  key={publication.title}
                >
                  <time>{publication.year}</time>
                  <span className="publication-copy">
                    <strong>{publication.title}</strong>
                    <small>
                      {publication.authors} · {publication.venue}
                    </small>
                  </span>
                  <span className="publication-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
            <a
              className="text-link"
              href={profileLinks[1].href}
              target="_blank"
              rel="noreferrer"
            >
              View complete publication record on Google Scholar
            </a>
          </section>

          <section id="education" className="content-section">
            <SectionHeading number="04" title="Education" />
            <div className="education-list">
              {education.map((item) => (
                <article key={`${item.period}-${item.institution}`}>
                  <time>{item.period}</time>
                  <div>
                    <h3>
                      {item.degree} <span>in {item.field}</span>
                    </h3>
                    <p>{item.institution}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="honors" className="content-section">
            <SectionHeading number="05" title="Honors" />
            <div className="honors-list">
              {honors.map((honor) => (
                <article key={honor.title}>
                  <time>{honor.year}</time>
                  <div>
                    <h3>{honor.title}</h3>
                    <p>{honor.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="contact-section" aria-labelledby="contact-title">
            <p className="profile-kicker">Contact</p>
            <h2 id="contact-title">Let’s talk research.</h2>
            <p>
              I am always happy to discuss optimization, mobility, and possible
              research collaborations.
            </p>
            <a href="mailto:jinyuzhangseu@gmail.com">
              jinyuzhangseu@gmail.com
            </a>
          </section>
        </article>
      </main>

      <footer>
        <div>
          <span>Jinyu Zhang · 2026</span>
          <span>Lausanne, Switzerland</span>
        </div>
      </footer>
    </>
  );
}
