import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/tattoo1.webp",
    "/tattoo2.webp",
    "/tattoo3.webp",
    "/tattoo4.webp",
    "/tattoo5.webp",
    "/tattoo6.webp",
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-6 bg-[var(--section-alt)] text-[var(--foreground)] border-t border-b border-[var(--accent)]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-10 tracking-tight accent glow"
      >
        Gallery
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="overflow-hidden rounded-lg shadow-lg border border-[var(--accent)]"
          >
            <img
              src={src}
              alt={`Tattoo ${index + 1}`}
              className="w-full h-auto transform hover:scale-105 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
