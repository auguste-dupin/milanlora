import Link from "next/link";

export const metadata = {
  title: "Noema — CRM/ERP — Milán Lora",
  description: "Case study for a bespoke CRM/ERP system for a small-batch manufacturing business."
};

export default function CaseStudy() {
  return (
    <div className="container py-12 md:py-24">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <Link href="/work" className="text-sm text-accent hover:text-accent mb-2 block">← Back to Work</Link>
        <h1 className="h1">Noema — CRM/ERP</h1>
        <p className="lede mt-2">A bespoke system to manage customers, inventory, and orders for a small-batch manufacturing business, built to avoid off-the-shelf bloat.</p>
      </header>

      <main className="grid md:grid-cols-3 gap-12">
        
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="h2 mb-3">Problem</h2>
            <p className="text-zinc-300 leading-relaxed">
              Small manufacturing businesses often face a choice between generic, overly complex ERP software and a messy collection of spreadsheets. They need a streamlined tool that maps directly to their unique workflow, from inventory to fulfillment, without paying for unused features.
            </p>
          </section>
          <section>
            <h2 className="h2 mb-3">Approach</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The solution was a custom web application built with a domain-driven philosophy, ensuring the software schema perfectly mirrored the business's real-world operations. The stack was chosen for rapid development and reliability:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li><strong>Framework:</strong> Next.js (App Router) for a fast, interactive frontend and robust backend.</li>
              <li><strong>Database:</strong> PostgreSQL for its reliability and rich data types, hosted on Supabase for ease of use.</li>
              <li><strong>Admin & Auth:</strong> A comprehensive, role-based access control (RBAC) system to give different permissions to sales, production, and admin staff.</li>
              <li><strong>Features:</strong> Core modules included customer management, order tracking, inventory control with component-level tracking, and a dashboard for key metrics and CSV exports.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="h2 mb-3">Outcome</h2>
            <p className="text-zinc-300 leading-relaxed">
              The system significantly reduced operational overhead and minimized errors caused by manual data entry. The tailored interface allowed staff to process orders and manage inventory much faster, providing a clear view of the business's health through the analytics dashboard.
            </p>
          </section>
        </div>

        <aside className="md:col-span-1">
          <div className="sticky top-24 card p-6 space-y-4">
            <h3 className="font-semibold text-white">TL;DR</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><strong>Role:</strong> Full-Stack Developer</li>
              <li><strong>Tools:</strong> Next.js, PostgreSQL, Supabase, TailwindCSS</li>
              <li><strong>Year:</strong> 2023</li>
              <li className="pt-2 border-t border-zinc-800/50">Custom schema for business logic</li>
              <li>Role-Based Access Control (RBAC)</li>
              <li>Inventory and order management</li>
              <li>Analytics dashboard with exports</li>
            </ul>
          </div>
        </aside>

      </main>
    </div>
  );
}