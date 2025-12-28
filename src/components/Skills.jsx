const skills = [
  "C","JAVA","TypeScript",
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
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill}
              className="skill-card bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
              style={{ animation: `fadeInUp 0.5s ${i * 0.1}s ease-out forwards`, opacity: 0 }}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
