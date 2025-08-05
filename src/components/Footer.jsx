export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-6 px-6 border-t border-[var(--accent)]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Ink That Speaks. All rights
          reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/lmr_zeppster/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--accent)]"
          >
            Instagram
          </a>
          <a
            href="mailto:yourstudio@email.com"
            className="transition hover:text-[var(--accent)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
