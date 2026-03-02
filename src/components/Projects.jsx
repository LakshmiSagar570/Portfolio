

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
  {
  name: "Conix - Arousal Estimation System",
  description: [
    "A real-time, on-device system that estimates and visualizes physiological arousal (tension level) from facial and ocular micro-signals using a webcam, designed for biofeedback and research purposes without making intent or lie-detection claims.",
    "Tech Stack: Python, MediaPipe, OpenCV, NumPy, SciPy, Streamlit, Plotly, SQLite"
  ],
  },
  {
    "name": "AccrediPilot - (UNDER DEVELOPMENT)",
    "description": [
      "An AI-powered Academic Compliance and Accreditation Automation Platform designed to streamline course-level documentation and NBA/NAAC readiness in higher education institutions. The system transforms structured academic inputs (student records, internal assessments, attendance, feedback, planning data) and unstructured institutional documents (workshops, FDPs, research papers, extension activities) into inspection-ready outputs aligned with accreditation criteria.",
      "AccrediPilot implements a modular multi-agent architecture where specialized agents perform academic performance analytics, CO–PO attainment computation, feedback intelligence, semantic accreditation document classification, compliance risk scoring, and automated narrative generation. It replaces repetitive manual documentation processes ",
      "Tech Stack: Python, FastAPI, PostgreSQL, React, Tailwind CSS, Pandas, NumPy, Sentence-Transformers, OpenAI API, PyMuPDF, python-docx, Recharts, Docker"
    ]
  }
];


export default function Projects() {
  return (    
    <section id="projects" className="section-shell py-24 md:py-28">
      
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12" data-reveal>
          <p className="eyebrow reveal">Selected Work</p>
          <h1 className="section-title reveal delay-1 mt-3">Projects</h1>
          <p className="reveal delay-2 mt-4 max-w-2xl text-slate-400">
            A selection of projects that demonstrate my expertise in building reliable intelligence systems across various domains, including applied AI, machine learning, and distributed backend engineering.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.name}
              data-reveal
              className={`reveal project-card ${i % 2 ? "delay-1" : ""}`}
            >
              <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
              <div className="mt-4 space-y-3 text-[0.97rem] leading-relaxed text-slate-300">
                {project.description.map((line, idx) => (
                  <p
                    key={idx}
                    className={
                      line.startsWith("Tech Stack")
                        ? "mt-4 border-t border-slate-800 pt-4 text-sm font-medium text-slate-400"
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
    </section>
  );
}
