const skills = [
  "C",
  "Java",
  "TypeScript",
  "React",
  "Node.js",
  "Machine Learning",
  "Computer Vision",
  "Angular",
  ".NET",
  "Tailwind CSS",
  "Data Structures",
  "Algorithms",
  "Python",
  "JavaScript",
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12" data-reveal>
          <p className="eyebrow reveal">Expertise</p>
          <h2 className="section-title reveal delay-1 mt-3">Skills</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {skills.map((skill, i) => (
            <div
              key={skill}
              data-reveal
              className={`reveal skill-chip ${i % 3 === 1 ? "delay-1" : ""} ${i % 3 === 2 ? "delay-2" : ""}`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
