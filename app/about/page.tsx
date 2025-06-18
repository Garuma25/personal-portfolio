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
          <li><strong>B.A.S. in System Administration</strong> (in progress) – Ensign College</li>
          <li><strong>A.S. in Business Analytics</strong> – Ensign College</li>
        </ul>
      </div>

      <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
        Outside of coding, I love building custom PCs, exploring tech trends, and learning how to apply financial thinking to technology projects.
      </p>

      <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">💼 Work Experience</h2>
        <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">

          <li>
            <strong>FHTL, CS Department, BYU – Lab Research Assistant & Team Lead</strong><br />
            <span className="text-sm text-zinc-500">Provo, UT | 07/2023 – Present</span><br />
            Led a small team to design and deploy a cloud-based genealogy research app. Used <span className="font-medium">TypeScript</span> and <span className="font-medium">Angular</span> for front-end improvements, and implemented <span className="font-medium">Terraform</span> to provision and manage AWS infrastructure (Lambda, API Gateway, DynamoDB).
          </li>

          <li>
            <strong>BELLU LLC – Web Developer Intern</strong><br />
            <span className="text-sm text-zinc-500">Provo, UT | 08/2023 – 12/2023</span><br />
            Built internal tools using <span className="font-medium">React</span> and <span className="font-medium">Node.js</span>, reducing manual data entry time by 40%. Helped lead a Shopify redesign that modernized the company’s public website.
          </li>

          <li>
            <strong>JRCLaw School, BYU – Front-End Developer</strong><br />
            <span className="text-sm text-zinc-500">Provo, UT | 04/2023 – 07/2023</span><br />
            Boosted site performance by 25% through <span className="font-medium">React</span>, <span className="font-medium">Node.js</span>, and <span className="font-medium">AWS</span> integration. Conducted code reviews and debugging, reducing bug reports by 30%.
          </li>

        </ul>
      </div>
      <div className="text-center mt-8">
        <a
          href="/CSresumeGSZ.pdf"
          download
          className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>

    </motion.section>
  );
}
