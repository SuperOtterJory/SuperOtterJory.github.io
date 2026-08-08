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
    label: "CV",
    href: "/Jinyu-Zhang-CV.pdf",
  },
  {
    label: "GitHub",
    href: "https://github.com/SuperOtterJory",
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

const advisors = [
  {
    role: "Ph.D. advisor",
    name: "Prof. Nikolas Geroliminis",
    affiliation: "Urban Transport Systems Laboratory (LUTS), EPFL",
    href: "https://people.epfl.ch/nikolas.geroliminis?lang=en",
    secondaryLabel: "LUTS",
    secondaryHref: "https://www.epfl.ch/labs/luts/",
  },
  {
    role: "M.Eng. supervisor",
    name: "Prof. Di Huang",
    affiliation: "School of Transportation, Southeast University",
    href: "https://tc.seu.edu.cn/2024/0218/c25722a480863/page.htm",
  },
  {
    role: "M.Eng. supervisor",
    name: "Prof. Zhiyuan Liu",
    affiliation: "School of Transportation, Southeast University",
    href: "https://tc.seu.edu.cn/jt_en/2020/0420/c27992a324842/page.psp",
  },
];

const researchInterests = [
  "Learning-augmented optimization",
  "Data-driven and prescriptive analytics",
  "Intelligent transportation systems",
  "Scalable optimization algorithms",
];

const talks = [
  {
    year: "2025",
    venue: "Transportation Research Board Annual Meeting, Washington, D.C.",
    format: "Poster",
    title:
      "Prescriptive analytics for freeway traffic state estimation based on data fusion",
    href: "https://annualmeeting.mytrb.org/OnlineProgramArchive/Details/22757",
  },
  {
    year: "2024",
    venue: "Transportation Research Board Annual Meeting, Washington, D.C.",
    format: "Poster",
    title:
      "A fine-grained full-coverage highway traffic flow condition perception method based on heterogeneous sensor data fusion",
    href: "https://annualmeeting.mytrb.org/OnlineProgramArchive/Details/21093",
  },
  {
    year: "2024",
    venue: "World Transport Convention, Qingdao",
    format: "Oral",
    title:
      "A data-driven optimization-based approach for freeway traffic state estimation based on heterogeneous sensor data fusion",
  },
  {
    year: "2024",
    venue: "6th International Symposium on Multimodal Transportation, Nanjing",
    format: "Oral",
    title:
      "Prescriptive analytics for freeway traffic state estimation based on data fusion",
    href: "https://tc.seu.edu.cn/_t2411/Program/list.htm",
  },
];

const education = [
  {
    period: "2026 -",
    degree: "Ph.D. Student",
    field: "Operations Research and Machine Learning",
    institution: "EPFL, Lausanne, Switzerland",
  },
  {
    period: "2023 - 2026",
    degree: "M.Eng.",
    field: "Traffic and Transportation Engineering",
    institution: "Southeast University",
  },
  {
    period: "2019 - 2023",
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
  {
    year: "2024",
    title: "National Scholarship of China",
    detail: "Awarded to the top 1% of students nationwide",
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
            <a href="#advising">Advising</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#talks">Talks</a>
            <a href="#education">Education</a>
            <a href="#honors">Honors</a>
          </nav>
        </div>
      </header>

      <main className="academic-layout">
        <aside className="profile-card" aria-label="Profile">
          <img
            className="profile-photo"
            src="/jinyu-zhang-informal-retouched-v1.png"
            alt="Informal portrait of Jinyu Zhang in the mountains"
            width="1024"
            height="1536"
          />
          <div className="profile-copy">
            <p className="profile-kicker">Incoming PhD Student</p>
            <h1>Jinyu Zhang</h1>
            <p className="profile-role">
              Operations Research and Machine Learning
              <br />
              LUTS, EPFL
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
                <span aria-hidden="true">Open</span>
              </a>
            ))}
          </div>
        </aside>

        <article className="academic-content">
          <section id="about" className="content-section intro-section">
            <SectionHeading number="01" title="About" />
            <p className="intro">
              I am an incoming PhD student at the Urban Transport Systems
              Laboratory (LUTS), EPFL, advised by Prof. Nikolas Geroliminis.
              My research lies at the intersection of machine learning,
              mathematical optimization, and intelligent transportation
              systems.
            </p>
            <p>
              I am interested in connecting prediction with optimization so
              that data can lead to better, faster, and more reliable
              operational decisions. Before joining EPFL, I studied at
              Southeast University and Beijing Jiaotong University.
            </p>
          </section>

          <section id="advising" className="content-section">
            <SectionHeading number="02" title="Academic advising" />
            <div className="advisor-list">
              {advisors.map((advisor) => (
                <article className="advisor-item" key={advisor.name}>
                  <p className="advisor-role">{advisor.role}</p>
                  <div className="advisor-copy">
                    <h3>
                      <a href={advisor.href} target="_blank" rel="noreferrer">
                        {advisor.name}
                      </a>
                    </h3>
                    <p>{advisor.affiliation}</p>
                  </div>
                  <div className="advisor-links">
                    <a href={advisor.href} target="_blank" rel="noreferrer">
                      Profile
                    </a>
                    {advisor.secondaryHref ? (
                      <a
                        href={advisor.secondaryHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {advisor.secondaryLabel}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="research" className="content-section">
            <SectionHeading number="03" title="Research" />
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
            <SectionHeading number="04" title="Selected publications" />
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
                      {publication.authors} - {publication.venue}
                    </small>
                  </span>
                  <span className="publication-arrow" aria-hidden="true">
                    DOI
                  </span>
                </a>
              ))}
            </div>
            <a
              className="text-link"
              href="https://scholar.google.com/citations?user=MtbsNLgAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              View complete publication record on Google Scholar
            </a>
          </section>

          <section id="talks" className="content-section">
            <SectionHeading number="05" title="Conference talks" />
            <div className="talk-list">
              {talks.map((talk) => (
                <article className="talk-item" key={`${talk.year}-${talk.title}`}>
                  <time>{talk.year}</time>
                  <div className="talk-copy">
                    <h3>{talk.title}</h3>
                    <p>
                      {talk.venue} <span>{talk.format}</span>
                    </p>
                  </div>
                  {talk.href ? (
                    <a href={talk.href} target="_blank" rel="noreferrer">
                      View
                    </a>
                  ) : (
                    <span aria-hidden="true" />
                  )}
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="content-section">
            <SectionHeading number="06" title="Education" />
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
            <SectionHeading number="07" title="Honors" />
            <div className="honors-list">
              {honors.map((honor) => (
                <article key={`${honor.year}-${honor.title}`}>
                  <time>{honor.year}</time>
                  <div>
                    <h3>{honor.title}</h3>
                    <p>{honor.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="contact-section"
            aria-labelledby="contact-title"
          >
            <p className="profile-kicker">Contact</p>
            <h2 id="contact-title">Let's talk research.</h2>
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
          <span>Jinyu Zhang - 2026</span>
          <span>Lausanne, Switzerland</span>
        </div>
      </footer>
    </>
  );
}
