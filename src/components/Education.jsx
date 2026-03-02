const education = [
  {
    title: "B.Tech in Computer Science (AI & ML)",
    place: "Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh, India",
    detail: "Focused on machine learning, systems programming, and software engineering.",
    Percentile: "8.6 CGPA (Top 10%)"
  },
  {
    title: "Intermediate (10+2) - MPC",
    place: "Sri Sainathe Junior College, Madanapalle, Andhra Pradesh, India",
    detail: "Specialized in Mathematics, Physics, and Chemistry.",
    Percentile: "94.3%"
  },
  {
    title: "Secondary School Certificate",
    place: "Sri Chaitanya High School, Vijayawada, Andhra Pradesh, India",
    detail: "Completed with a strong foundation in core subjects and extracurriculars.",
    Percentile: "98.5%"
  },
  
];

export default function Education() {
  return (
    <section id="education" className="section-shell py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12" data-reveal>
          <p className="eyebrow reveal">Academic Profile</p>
          <h2 className="section-title reveal delay-1 mt-3">Education</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, idx) => (
            <article
              key={item.title}
              data-reveal
              className={`reveal section-card ${idx % 2 ? "delay-1" : ""}`}
            >
              <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.place}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
