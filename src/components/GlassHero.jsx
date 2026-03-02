export default function GlassHero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-14 px-6 pb-16 pt-28 md:grid-cols-[1.1fr_0.9fr]">
        <div data-reveal className="reveal">
          <p className="eyebrow">AI | ML | SYSTEMS ENGINEERING</p>
          <h1 className="hero-title mt-4">
            Building reliable intelligence for products that need to perform.
          </h1>
          <p className="hero-subtitle mt-6 max-w-xl">
            I design and ship full-stack and machine learning systems with a
            focus on clarity, scale, and measurable impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div data-reveal className="reveal delay-2">
          <div className="hero-card">
            <p className="hero-card-label">Current Focus</p>
            <ul className="hero-list">
              <li>Applied AI Systems</li>
              <li>Model Deployment and MLOps</li>
              <li>Distributed Backend Engineering</li>
            </ul>
            <div className="hero-metrics">
              <div>
                <p className="metric-value">5+</p>
                <p className="metric-label">Production Projects</p>
              </div>
              <div>
                <p className="metric-value">3</p>
                <p className="metric-label">Core Domains</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
