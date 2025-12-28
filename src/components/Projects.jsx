const projects = [
  {
    name: "Mood Journal",
    description: [
      "A web application for tracking daily moods and emotions, utilizing machine learning to provide personalized insights and recommendations for mental well-being.",
      "Tech Stack: Angular, C#, .NET, PostgreSQL, Chart.js",
    ],
  },
  {
    name: "CoolSense - AI & Remote Sensing",
    description: [
      "An AI-powered platform that leverages remote sensing data to monitor environmental changes, analyze land use patterns, and support sustainable development initiatives.",
      "Tech Stack: React, Node.js, Python, TensorFlow, Google Earth Engine",
    ],
  },
  {
    name: "EthosForge",
    description: [
      "A complete backend program to detect fraud in SWIFT Transactions using machine learning algorithms, enhancing security and trust in financial communications.",
      "Tech Stack: Python, Scikit-learn, Pandas",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.5s ease-out ${i * 0.15}s forwards`,
                opacity: 0,
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {project.name}
              </h3>

              <div className="space-y-3 text-gray-600">
                {project.description.map((line, idx) => (
                  <p
                    key={idx}
                    className={
                      line.startsWith("Tech Stack")
                        ? "text-sm text-gray-500 italic"
                        : ""
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
