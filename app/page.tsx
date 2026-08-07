"use client";

import { useState } from "react";

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

const sections = ["Research", "Publications", "Education", "Honors"];

const socialLinks = [
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

function ResearchPanel() {
  const interests = [
    {
      title: "Learning-augmented optimization",
      copy: "Integrating prediction and optimization to improve decisions in complex and changing environments.",
    },
    {
      title: "Prescriptive mobility analytics",
      copy: "Transforming heterogeneous transportation data into reliable estimates and operational decisions.",
    },
    {
      title: "Scalable optimization systems",
      copy: "Designing structured and computationally efficient algorithms for real-world problem scales.",
    },
  ];

  return (
    <div className="research-list">
      {interests.map((interest, index) => (
        <article className="research-row" key={interest.title}>
          <span className="row-index">0{index + 1}</span>
          <h3>{interest.title}</h3>
          <p>{interest.copy}</p>
        </article>
      ))}
    </div>
  );
}

function PublicationsPanel() {
  return (
    <div className="publication-list">
      {publications.map((publication) => (
        <a
          className="publication-row"
          href={publication.href}
          target="_blank"
          rel="noreferrer"
          key={publication.title}
        >
          <span className="publication-year">{publication.year}</span>
          <span className="publication-copy">
            <strong>{publication.title}</strong>
            <small>
              {publication.authors} · {publication.venue}
            </small>
          </span>
          <span className="external-mark" aria-hidden="true">
            ↗
          </span>
        </a>
      ))}
      <a
        className="all-publications"
        href={socialLinks[0].href}
        target="_blank"
        rel="noreferrer"
      >
        View complete profile on Google Scholar
      </a>
    </div>
  );
}

function EducationPanel() {
  return (
    <div className="education-grid">
      <div className="education-list">
        <article>
          <time>2026 —</time>
          <div>
            <h3>EPFL</h3>
            <p>Incoming PhD Student · Lausanne, Switzerland</p>
          </div>
        </article>
        <article>
          <time>2023 — 2026</time>
          <div>
            <h3>Southeast University</h3>
            <p>M.Eng. in Traffic and Transportation Engineering</p>
          </div>
        </article>
        <article>
          <time>2019 — 2023</time>
          <div>
            <h3>Beijing Jiaotong University</h3>
            <p>B.Eng. in Traffic Engineering</p>
          </div>
        </article>
      </div>
      <div className="project-list">
        <p className="minor-label">Selected projects</p>
        <article>
          <h3>Incremental production scheduling for supply chains</h3>
          <p>
            Learning-assisted strategies for large-scale scheduling, achieving
            up to 30% end-to-end acceleration.
          </p>
        </article>
        <article>
          <h3>Deterministic parallel branch-and-bound</h3>
          <p>
            A multi-threaded method implemented in HiGHS, reaching 1.9×
            speedup with eight threads.
          </p>
        </article>
      </div>
    </div>
  );
}

function HonorsPanel() {
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

  return (
    <div className="honors-list">
      {honors.map((honor) => (
        <article key={honor.title}>
          <time>{honor.year}</time>
          <h3>{honor.title}</h3>
          <p>{honor.detail}</p>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const selectSection = (nextIndex: number) => {
    const normalized = (nextIndex + sections.length) % sections.length;
    setDirection(normalized >= activeSection ? "next" : "previous");
    setActiveSection(normalized);
  };

  const stepSection = (step: number) => {
    setDirection(step > 0 ? "next" : "previous");
    setActiveSection(
      (current) => (current + step + sections.length) % sections.length,
    );
  };

  const renderPanel = () => {
    switch (activeSection) {
      case 1:
        return <PublicationsPanel />;
      case 2:
        return <EducationPanel />;
      case 3:
        return <HonorsPanel />;
      default:
        return <ResearchPanel />;
    }
  };

  return (
    <main id="top">
      <header className="site-header">
        <a className="site-name" href="#top" aria-label="Jinyu Zhang, home">
          Jinyu Zhang
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Academic work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="page-shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker">Incoming PhD Student at EPFL</p>
            <h1 id="hero-title">Jinyu Zhang</h1>
            <p className="lead">
              I work at the intersection of machine learning, mathematical
              optimization, and intelligent transportation systems.
            </p>
            <div className="social-links" aria-label="Academic profiles">
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <figure className="portrait">
            <img
              src="/jinyu-zhang.webp"
              alt="Portrait of Jinyu Zhang"
              width="1000"
              height="1250"
            />
            <figcaption>
              <span>Jinyu Zhang</span>
              <span>Lausanne, Switzerland</span>
            </figcaption>
          </figure>
        </section>

        <section className="profile" id="about" aria-labelledby="profile-title">
          <p className="section-number">01 / Profile</p>
          <div>
            <h2 id="profile-title">About</h2>
            <p>
              I am an incoming PhD student at EPFL. My research focuses on
              connecting prediction with optimization so that data can lead to
              better operational decisions. Before joining EPFL, I studied at
              Southeast University and Beijing Jiaotong University.
            </p>
          </div>
        </section>

        <section
          className="work-browser"
          id="work"
          aria-labelledby="work-title"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              stepSection(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              stepSection(1);
            }
          }}
        >
          <div className="work-heading">
            <div>
              <p className="section-number">02 / Academic work</p>
              <h2 id="work-title">Selected work</h2>
            </div>
            <p>Use the tabs, arrow keys, or swipe to move between sections.</p>
          </div>

          <div className="work-controls">
            <div className="tabs" role="tablist" aria-label="Academic sections">
              {sections.map((section, index) => (
                <button
                  id={`tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeSection === index}
                  aria-controls={`panel-${index}`}
                  tabIndex={activeSection === index ? 0 : -1}
                  onClick={() => selectSection(index)}
                  key={section}
                >
                  <span>0{index + 1}</span>
                  {section}
                </button>
              ))}
            </div>
            <div className="arrow-controls">
              <button
                type="button"
                onClick={() => stepSection(-1)}
                aria-label="Previous section"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => stepSection(1)}
                aria-label="Next section"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="panel-viewport"
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const movement = event.changedTouches[0].clientX - touchStart;
              if (Math.abs(movement) > 45) stepSection(movement < 0 ? 1 : -1);
              setTouchStart(null);
            }}
          >
            <div
              id={`panel-${activeSection}`}
              key={activeSection}
              role="tabpanel"
              aria-labelledby={`tab-${activeSection}`}
              className={`work-panel enter-${direction}`}
            >
              {renderPanel()}
            </div>
          </div>
          <div className="panel-status" aria-live="polite">
            <span>
              0{activeSection + 1} / 0{sections.length}
            </span>
            <span>{sections[activeSection]}</span>
          </div>
        </section>
      </div>

      <footer id="contact">
        <div className="footer-inner">
          <p className="section-number">03 / Contact</p>
          <div className="footer-main">
            <div>
              <h2>Get in touch</h2>
              <a className="email" href="mailto:jinyuzhangseu@gmail.com">
                jinyuzhangseu@gmail.com
              </a>
            </div>
            <div className="footer-links">
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-meta">
            <span>Jinyu Zhang · 2026</span>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
