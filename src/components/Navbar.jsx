export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl text-accent">
          LakshmiSagar
        </span>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
}
