export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="h1 mb-4">Contact</h1>
        <p className="lede mb-8">
          The best way to reach me is by email. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
        </p>
        <a href="mailto:ml@milanlora.com" className="btn btn-primary text-lg">
          ml@milanlora.com
        </a>
        <div className="mt-12 text-sm text-zinc-400">
          <p>You can also find me on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent">GitHub</a> and <a href="https://linkedin.com/in/milanlora" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent">LinkedIn</a>.</p>
        </div>
      </div>
    </div>
  );
}