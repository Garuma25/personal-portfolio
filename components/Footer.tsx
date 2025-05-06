export default function Footer() {
  return (
    <footer className="mt-16 py-6 text-center text-sm text-zinc-500 border-t border-zinc-800">
      © {new Date().getFullYear()} Gary Suarez — Built with ❤️ using Next.js & TailwindCSS
    </footer>
  );
}