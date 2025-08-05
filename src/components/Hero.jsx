import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[70vh] md:h-[80vh] lg:h-screen bg-[url('/hero.webp')] bg-cover bg-center flex items-center justify-center relative border-b border-[var(--accent)]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--background)]/60" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-[var(--foreground)] text-center px-6"
      >
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight glow animate-glow accent">
          Ink That Speaks
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6 leading-relaxed">
          Where every line tells a story—etched with intention, built to last.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#gallery"
          className="inline-block bg-[var(--foreground)] text-[var(--background)] px-6 py-2 rounded-full font-semibold hover:bg-[var(--accent)] transition"
        >
          View Gallery
        </motion.a>
      </motion.div>

      {/* Scroll Cue (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-[var(--accent)] text-2xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
