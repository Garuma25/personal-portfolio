'use client';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import Image from 'next/image';
import profileImg from '../public/profile-placeholder.jpg';

export default function HomePage() {
  return (
    <motion.section
      {...({
        className: "flex flex-col items-center justify-center text-center h-[90vh] px-4 space-y-6",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
      } as HTMLMotionProps<'section'>)}
    >
      <Image
        src={profileImg}
        alt="Gary Suarez headshot"
        width={120}
        height={120}
        className="rounded-full border-4 border-blue-500"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
      Hi! I'm Gary Suarez — Bachelors in Computer Science
      </h1>
      <p className="text-lg max-w-xl text-gray-600 dark:text-gray-300">
        Pursuing Finance. Passionate about building scalable cloud-native apps.
      </p>
      <a
        href="/projects"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Show my work →
      </a>
    </motion.section>
  );
}