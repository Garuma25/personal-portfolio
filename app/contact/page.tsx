'use client';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.section
    {...({
        className: "flex flex-col items-center justify-center text-center h-[70vh] px-4 space-y-6",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      } as HTMLMotionProps<'section'>)}
      >
      <h1 className="text-4xl font-bold">Let's Connect</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
        Have a question, collaboration idea, or just want to say hi? I'd love to hear from you.
      </p>
      <a
        href="mailto:garys5@byu.edu?subject=Portfolio Contact&body=Hi Gary, I checked out your portfolio..."
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Send me an email
      </a>
    </motion.section>
  );
}