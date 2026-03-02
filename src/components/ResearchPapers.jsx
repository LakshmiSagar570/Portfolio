const papers = [
  {
    title: "Characterizing Small-Scale and Minimal-Disturbance Deforestation Trends in the Northeastern Brazilian Amazon (2015–2025) Using Landsat NDVI Time Series",
    venue: "Under Review ",
    summary:
      "Applied research on  deforestation monitoring, with a focus on small-scale and minimal-disturbance events in the Brazilian Amazon.",},
  {
    title: "Mapping the Evolution: A Scientometric Review of GIS Applications in Flood Hazard Mapping (1985–2025)",
    venue: "Under Review",
    summary:
      "A comprehensive scientometric review of GIS applications in flood hazard mapping from 1985 to 2025.",},
  {
    title: "A scientometric review of Intrusion detection in Internet of Things",
    venue: "Under Review",
    summary:
      "A scientometric review of intrusion detection systems in the Internet of Things (IoT), analyzing current methodologies, challenges, and future directions.",}
];

export default function ResearchPapers() {
  return (
    <section id="research" className="section-shell py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12" data-reveal>
          <p className="eyebrow reveal">Publications</p>
          <h2 className="section-title reveal delay-1 mt-3">Research Papers</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {papers.map((paper, idx) => (
            <article
              key={paper.title}
              data-reveal
              className={`reveal project-card ${idx % 2 ? "delay-1" : ""}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
                {paper.venue}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-100">{paper.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{paper.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
