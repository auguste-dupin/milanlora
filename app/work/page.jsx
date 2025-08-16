import Link from "next/link";

const projects = [
  {
    slug: "tactic",
    title: "Tactic — Automatic Chessboard",
    summary: "A quiet, elegant board that moves pieces automatically using a silent CoreXY gantry and electromagnet.",
    year: "2024",
    tags: ["CoreXY", "RFID", "Mechatronics", "Firmware"]
  },
  {
    slug: "ev-mlb",
    title: "Positive EV MLB Model",
    summary: "A model to find and exploit pricing inefficiencies in Major League Baseball moneyline markets.",
    year: "2023",
    tags: ["Machine Learning", "XGBoost", "Python", "Data Pipeline"]
  },
  {
    slug: "noema",
    title: "Noema — CRM/ERP",
    summary: "A bespoke system to manage customers, inventory, and orders for a small-batch manufacturer.",
    year: "2023",
    tags: ["Next.js", "PostgreSQL", "Full-Stack", "Admin"]
  },
];

export default function WorkPage() {
  return (
    <div className="container py-12 md:py-24">
      <header className="mb-12">
        <h1 className="h1">Work</h1>
        <p className="lede mt-2">A selection of projects blending design and engineering.</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link href={`/work/${project.slug}`} key={project.slug} className="card p-6 flex flex-col justify-between transition-all hover:border-accent/50">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                <span className="text-sm text-zinc-400 flex-shrink-0 ml-4">{project.year}</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {project.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}