export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-[0.2em] text-slate-100">
          LAKSHMI SAGAR
        </a>
        <div className="flex flex-wrap justify-end gap-6 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#research" className="nav-link">Research</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}
