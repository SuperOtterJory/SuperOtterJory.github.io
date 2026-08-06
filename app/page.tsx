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
    featured: true,
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

const researchAreas = [
  {
    number: "01",
    title: "Learning-augmented optimization",
    copy: "Combining predictive models with mathematical optimization to improve decisions under complex, changing conditions.",
  },
  {
    number: "02",
    title: "Prescriptive mobility analytics",
    copy: "Turning heterogeneous transportation data into reliable state estimates and actionable operating strategies.",
  },
  {
    number: "03",
    title: "Scalable optimization systems",
    copy: "Designing algorithms that retain structure, determinism, and performance at real-world problem scales.",
  },
];

const honors = [
  {
    year: "2025",
    title: "Southeast University Presidential Scholarship",
    detail: "Highest graduate honor · 10 recipients university-wide",
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

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jinyu Zhang, home">
          JZ<span className="wordmark-dot">.</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href="mailto:jinyuzhangseu@gmail.com">
          Email <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Incoming PhD Student <span className="eyebrow-mark">·</span> EPFL
          </p>
          <h1>
            Jinyu
            <br />
            Zhang<span className="title-mark">.</span>
          </h1>
          <p className="hero-statement">
            I develop learning-augmented optimization methods for intelligent,
            efficient, and resilient transportation systems.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#research">
              Explore my research <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="mailto:jinyuzhangseu@gmail.com">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-index" aria-hidden="true">
            JZ / 2026
          </div>
          <img
            src="/jinyu-zhang.webp"
            alt="Portrait of Jinyu Zhang"
            width="1120"
            height="1400"
          />
          <div className="portrait-caption">
            <span>Lausanne, Switzerland</span>
            <span>46.52° N / 6.63° E</span>
          </div>
        </div>
      </section>

      <div className="signal-band" aria-hidden="true">
        <span>Learning</span>
        <i />
        <span>Optimization</span>
        <i />
        <span>Mobility</span>
        <i />
        <span>Decision intelligence</span>
      </div>

      <section className="about section-shell" aria-labelledby="about-title">
        <div className="section-label">About / 00</div>
        <div className="about-content">
          <h2 id="about-title">
            From sensing what is happening to deciding what should happen next.
          </h2>
          <div className="about-copy">
            <p>
              I am an incoming PhD student at EPFL. My research sits at the
              intersection of machine learning, operations research, and
              transportation systems.
            </p>
            <p>
              Before joining EPFL, I studied Traffic and Transportation
              Engineering at Southeast University and Traffic Engineering at
              Beijing Jiaotong University. I am especially interested in
              methods that are mathematically principled, computationally
              scalable, and useful in real operational settings.
            </p>
          </div>
        </div>
      </section>

      <section className="research section-shell" id="research" aria-labelledby="research-title">
        <div className="section-heading">
          <div>
            <div className="section-label light">Research / 01</div>
            <h2 id="research-title">Research interests</h2>
          </div>
          <p>
            Building a tighter bridge between prediction and action in complex
            mobility systems.
          </p>
        </div>
        <div className="research-grid">
          {researchAreas.map((area) => (
            <article className="research-card" key={area.number}>
              <span className="card-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="publications section-shell"
        id="publications"
        aria-labelledby="publications-title"
      >
        <div className="section-heading ink">
          <div>
            <div className="section-label">Publications / 02</div>
            <h2 id="publications-title">Selected work</h2>
          </div>
          <p>
            Peer-reviewed research spanning traffic state estimation, data
            fusion, and public transport optimization.
          </p>
        </div>
        <div className="publication-list">
          {publications.map((publication) => (
            <a
              className="publication-item"
              href={publication.href}
              target="_blank"
              rel="noreferrer"
              key={publication.title}
            >
              <span className="publication-year">{publication.year}</span>
              <span className="publication-main">
                <span className="publication-title">
                  {publication.title}
                  {publication.featured ? (
                    <em className="first-author">First author</em>
                  ) : null}
                </span>
                <span className="publication-meta">
                  {publication.authors} · {publication.venue}
                </span>
              </span>
              <span className="publication-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
        <p className="conference-note">
          Research presented at the Transportation Research Board Annual
          Meeting, World Transport Convention, and International Symposium on
          Multimodal Transportation.
        </p>
      </section>

      <section
        className="experience section-shell"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-label">Experience / 03</div>
        <div className="experience-layout">
          <div>
            <h2 id="experience-title">Education & projects</h2>
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-date">2026 —</span>
                <div>
                  <h3>École Polytechnique Fédérale de Lausanne</h3>
                  <p>Incoming PhD Student · Lausanne, Switzerland</p>
                </div>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">2023 — 2026</span>
                <div>
                  <h3>Southeast University</h3>
                  <p>M.Eng. in Traffic and Transportation Engineering</p>
                </div>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">2019 — 2023</span>
                <div>
                  <h3>Beijing Jiaotong University</h3>
                  <p>B.Eng. in Traffic Engineering</p>
                </div>
              </article>
            </div>
          </div>
          <div className="project-column">
            <article className="project-block">
              <span className="project-type">Optimization systems</span>
              <h3>Incremental production scheduling for supply chains</h3>
              <p>
                Improved relax-and-fix and learning-assisted strategies for
                large-scale scheduling, delivering up to 30% end-to-end
                acceleration.
              </p>
            </article>
            <article className="project-block">
              <span className="project-type">Parallel computing</span>
              <h3>Deterministic parallel branch-and-bound</h3>
              <p>
                Designed and implemented a multi-threaded method in the HiGHS
                open-source solver, reaching 1.9× speedup with eight threads.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="honors section-shell" aria-labelledby="honors-title">
        <div className="section-heading ink">
          <div>
            <div className="section-label">Recognition / 04</div>
            <h2 id="honors-title">Selected honors</h2>
          </div>
        </div>
        <div className="honors-grid">
          {honors.map((honor) => (
            <article className="honor" key={honor.title}>
              <span>{honor.year}</span>
              <h3>{honor.title}</h3>
              <p>{honor.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-kicker">Let&apos;s connect</div>
        <h2>
          Interested in learning,
          <br />
          optimization, or mobility?
        </h2>
        <a className="footer-email" href="mailto:jinyuzhangseu@gmail.com">
          jinyuzhangseu@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <span>Jinyu Zhang · Academic homepage</span>
          <a href="#top">Back to top ↑</a>
          <span>Lausanne · 2026</span>
        </div>
      </footer>
    </main>
  );
}
