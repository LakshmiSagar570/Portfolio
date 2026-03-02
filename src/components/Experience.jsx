const experienceItems = [
  {
    role: "Software Intern",
    org: "Xenovex Technologies, Chennai",
    period: "1.5 Months",
    points: [
      "Worked on real-world software development tasks in a professional team environment.",
      "Contributed to implementation, debugging, and delivery of assigned technical modules.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12" data-reveal>
          <p className="eyebrow reveal">Career Journey</p>
          <h2 className="section-title reveal delay-1 mt-3">Experience</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {experienceItems.map((item, idx) => (
            <article
              key={item.role}
              data-reveal
              className={`reveal project-card ${idx % 2 ? "delay-1" : ""}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
                {item.period}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-100">{item.role}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.org}</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
