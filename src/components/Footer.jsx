export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-6">
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
            className="hover:text-gray-300"
          >
            Instagram
          </a>
          <a href="mailto:yourstudio@email.com" className="hover:text-gray-300">
            Email
          </a>
          {/* Optional: Add LinkedIn or Behance if relevant */}
        </div>
      </div>
    </footer>
  );
}
