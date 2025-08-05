import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-6 tracking-tight"
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
          Every tattoo here is more than ink—it's a moment, a mindset, a mark of
          growth. This studio was born from raw instinct and relentless
          curiosity. Whether it's your first piece or your next chapter, we
          craft designs that speak for you—bold, clean, and built to last.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          className="mt-4 text-sm text-gray-600"
        >
          Based in [Your City], working with passion and precision. New to the
          game, but already rewriting it.
        </motion.p>
      </div>
    </section>
  );
}
