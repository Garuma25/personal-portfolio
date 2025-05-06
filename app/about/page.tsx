'use client';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.section
      {...({
        className: "max-w-3xl mx-auto py-16 px-6",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      } as HTMLMotionProps<'section'>)}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
        I'm <span className="font-semibold">Gary Suarez</span>, a developer passionate about building cloud-native applications and intuitive web interfaces. I enjoy using tools like <span className="font-medium">AWS</span>, <span className="font-medium">Next.js</span>, and <span className="font-medium">TypeScript</span> to turn complex ideas into working products.
      </p>

      <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
        <ul className="space-y-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
          <li><strong>B.S. in Computer Science</strong> – Brigham Young University</li>
          <li><strong>B.S. in Finance</strong> (in progress) – Brigham Young University</li>
          <li><strong>A.S. in Business Analytics</strong> – Ensign College</li>
        </ul>
      </div>

      <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Outside of coding, I love building custom PCs, exploring tech trends, and learning how to apply financial thinking to technology projects.
      </p>
    </motion.section>
  );
}
