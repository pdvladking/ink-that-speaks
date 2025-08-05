import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--accent)]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-6 tracking-tight accent glow"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-lg leading-relaxed"
        >
          This studio isn’t just about ink—it’s about identity. Every piece we
          create is a timestamp: a moment of clarity, rebellion, or rebirth. We
          don’t follow trends. We build legacy. Whether it’s your first tattoo
          or your fiftieth, we design with intention, precision, and respect for
          your story.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          className="mt-4 text-sm opacity-70"
        >
          Based in Kathmandu, working with passion and precision. New to the
          game, but already rewriting it.
        </motion.p>
      </div>
    </section>
  );
}
