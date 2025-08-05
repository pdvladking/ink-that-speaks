export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] text-[var(--foreground)] shadow-md border-b border-[var(--accent)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[var(--accent)] animate-glow glow">
          Ink That Speaks
        </h1>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#gallery" className="nav-link">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
