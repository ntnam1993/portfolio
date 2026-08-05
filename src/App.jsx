import { useEffect, useState } from 'react';
import portrait from './assets/personal/tony.png';
import bodyup from './assets/projects/bodyup.webp';

const navItems = [
  ['about', 'About'],
  ['expertise', 'Expertise'],
  ['work', 'Selected work'],
  ['experience', 'Experience'],
];

const projects = [
  {
    name: 'BodyUp',
    type: 'Mobile health product',
    description:
      'Backend engineering contribution within a four-person delivery team for a consumer health application published on the App Store.',
    tags: ['Backend engineering', 'Team delivery', 'Mobile product'],
    url: 'https://apps.apple.com/vn/app/bodyup/id6677051146',
    image: bodyup,
    featured: true,
  },
  {
    name: 'GoToBlink',
    type: 'Logistics platform',
    description:
      'A booking platform for shipment collection and delivery, including distance-based delivery scheduling.',
    tags: ['Go', 'PostgreSQL', 'Microservices'],
    url: 'https://gotoblink.com/',
    code: 'GB',
  },
  {
    name: 'Octopush',
    type: 'Campaign platform',
    description:
      'A communication platform for creating and sending SMS and email campaigns at scale.',
    tags: ['PHP', 'Symfony', 'Vue.js'],
    url: 'https://octopush.com/en/',
    code: 'OP',
  },
  {
    name: 'Apiary Buzz',
    type: 'Survey & rewards',
    description:
      'A survey platform where participants earn points and exchange them for marketplace rewards.',
    tags: ['PHP', 'Laravel', 'Web platform'],
    url: 'https://apiarybuzz.com/home/',
    code: 'AB',
  },
  {
    name: 'The Cups Coffee',
    type: 'Commerce website',
    description:
      'A customer-facing website presenting the brand, locations, menu and product information.',
    tags: ['Laravel', 'HTML', 'CSS'],
    url: 'https://thecupscoffee.vn/',
    code: 'TC',
  },
];

const experience = [
  { period: 'Nov 2021 — Present', role: 'Full-stack Developer', company: 'Saigon Technology' },
  { period: 'Mar 2021 — Oct 2021', role: 'Backend Developer', company: 'NFQ' },
  { period: 'Mar 2017 — Feb 2021', role: 'Backend Developer', company: 'Neolab' },
];

const expertise = [
  {
    number: '01',
    title: 'Backend systems',
    text: 'Designing maintainable services and data flows with PHP, Go, relational databases and document stores.',
  },
  {
    number: '02',
    title: 'Full-stack delivery',
    text: 'Taking web products from business requirements through implementation with Vue.js and modern frontend tooling.',
  },
  {
    number: '03',
    title: 'Technical ownership',
    text: 'Supporting architecture decisions, project delivery and clear collaboration across engineering teams.',
  },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function DiagonalArrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tony Nguyen — Home">
          <span className="brand-mark">TN</span>
          <span className="brand-copy">Tony Nguyen<br /><small>Software engineer</small></span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>

        <nav id="primary-navigation" className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="mailto:ntnam1993@gmail.com">Let’s talk <Arrow /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Backend & full-stack engineer</p>
            <h1>Building the systems<br />behind <em>great products.</em></h1>
            <p className="hero-intro">
              I’m Tony Nguyen, a software engineer with experience delivering web platforms across logistics, communications, surveys, commerce and consumer products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="text-link" href="https://github.com/ntnam1993" target="_blank" rel="noreferrer">GitHub <DiagonalArrow /></a>
            </div>
          </div>

          <div className="portrait-wrap reveal reveal-delay">
            <div className="portrait-frame">
              <img src={portrait} alt="Tony Nguyen" />
              <span className="portrait-label">TONY / 2026</span>
            </div>
            <div className="availability">
              <span className="status-dot" />
              Focused on dependable product delivery
            </div>
          </div>

          <div className="hero-stats">
            <div><strong>9+</strong><span>Years in software delivery</span></div>
            <div><strong>03</strong><span>Core engineering roles</span></div>
            <div><strong>05</strong><span>Selected product engagements</span></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-kicker">About / 01</div>
          <div className="about-layout">
            <h2>I turn complex requirements into dependable software.</h2>
            <div className="about-copy">
              <p>
                Since 2017, I’ve worked across backend and full-stack roles, with deep experience in PHP and additional production experience in Go. My work spans ecommerce, human resources systems, content platforms and customer-facing products.
              </p>
              <p>
                I’m comfortable moving between service architecture, database design and frontend delivery—staying focused on software that is clear to maintain and useful to the people it serves.
              </p>
              <a className="text-link" href="https://github.com/ntnam1993" target="_blank" rel="noreferrer">Explore my GitHub <DiagonalArrow /></a>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="section-heading">
            <div className="section-kicker light">Expertise / 02</div>
            <h2>Engineering with range<br />and <em>focus.</em></h2>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card" key={item.number}>
                <span className="expertise-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="stack-row" aria-label="Technical toolkit">
            {['PHP', 'Go', 'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Laravel', 'Symfony', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker'].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading split-heading">
            <div>
              <div className="section-kicker">Selected work / 03</div>
              <h2>Products shaped<br />through delivery.</h2>
            </div>
            <p>A focused selection of platforms and products I’ve contributed to across backend and full-stack roles.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.name}>
                <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                  <div className={`project-visual visual-${index}`}>
                    {project.image ? (
                      <img src={project.image} alt="BodyUp mobile application interface" />
                    ) : (
                      <span className="project-code">{project.code}</span>
                    )}
                    <span className="project-index">0{index + 1}</span>
                    <span className="project-arrow"><DiagonalArrow /></span>
                  </div>
                  <div className="project-info">
                    <p>{project.type}</p>
                    <h3>{project.name}</h3>
                    <span className="project-description">{project.description}</span>
                    <div className="tag-list">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading split-heading">
            <div>
              <div className="section-kicker">Experience / 04</div>
              <h2>Built through<br />real delivery.</h2>
            </div>
            <p>Progressing from backend engineering into full-stack product delivery and technical ownership.</p>
          </div>

          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-row" key={job.company}>
                <span className="timeline-number">0{experience.length - index}</span>
                <p>{job.period}</p>
                <h3>{job.role}</h3>
                <strong>{job.company}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orbit" aria-hidden="true">LET’S BUILD SOMETHING USEFUL • </div>
          <div className="contact-content">
            <p className="eyebrow light"><span /> Start a conversation</p>
            <h2>Have a product<br />worth building?</h2>
            <a className="button button-light" href="mailto:ntnam1993@gmail.com">Email Tony <Arrow /></a>
          </div>
          <div className="contact-links">
            <a href="mailto:ntnam1993@gmail.com">ntnam1993@gmail.com</a>
            <a href="https://github.com/ntnam1993" target="_blank" rel="noreferrer">GitHub <DiagonalArrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Tony Nguyen</span>
        <span>Backend & full-stack engineer</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
