'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { HTMLMotionProps } from 'framer-motion';

const projects = [
  {
    title: 'Note App',
    description: 'A full-stack note-taking app using Next.js, DynamoDB, and API Gateway.',
    image: '/project1.jpg',
    link: 'https://github.com/yourusername/note-app',
  },
  {
    title: 'Terraform AWS Setup',
    description: 'Infrastructure-as-code to deploy Lambda + API Gateway + DynamoDB.',
    image: '/terraformaws.png',
    link: 'https://github.com/yourusername/terraform-aws',
  },
  {
    title: 'UsedPartPicker',
    description: 'Marketplace for comparing used PC part listings with price metrics.',
    image: '/pcPartalizer.png',
    link: 'https://github.com/yourusername/used-part-picker',
  },
  {
    title: 'Internship Tracker',
    description: 'Web app to track internship applications with job search automation.',
    image: '/project4.jpg',
    link: 'https://github.com/yourusername/internship-tracker',
  },
  {
    title: 'Pizza DevOps Project',
    description: 'A scalable pizza ordering system deployed using CI/CD, Docker, and AWS.',
    image: '/pizzaproject.png',
    link: null,
  },
  {
    title: 'Family History Tree Tool',
    description: 'A tool to find connections between ancestors and historical figures.',
    image: '/banner-check.jpg',
    link: null,
  }
];

export default function ProjectsPage() {
  return (
    <motion.section
    {...({
      className:"max-w-6xl mx-auto py-16 px-6",
      initial:{ opacity: 0, y: 30 },
      animate:{ opacity: 1, y: 0 },
      transition:{ duration: 0.6 },
    } as HTMLMotionProps<'section'>)}
      >
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
          {...({
            key: {index},
            className:"bg-zinc-100 dark:bg-zinc-800 rounded-xl p-5 shadow hover:shadow-lg transition",
            whileHover:{ scale: 1.03 },
          } as HTMLMotionProps<'section'>)} 
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={400}
              className="rounded mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">{project.description}</p>
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="inline-block text-blue-500 hover:underline text-sm font-medium"
              >
                View on GitHub →
              </Link>
            ) : (
              <span className="text-sm text-zinc-500 italic">Private or demo-only</span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
