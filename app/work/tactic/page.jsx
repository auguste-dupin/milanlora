import Link from "next/link";

export const metadata = {
  title: "Tactic — Automatic Chessboard — Milán Lora",
  description: "Case study for an automatic chessboard using CoreXY mechanics and RFID for piece detection."
};

export default function CaseStudy() {
  return (
    <div className="container py-12 md:py-24">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <Link href="/work" className="text-sm text-accent hover:text-accent mb-2 block">← Back to Work</Link>
        <h1 className="h1">Tactic — Automatic Chessboard</h1>
        <p className="lede mt-2">A quiet, elegant board that moves pieces automatically, detects game state, and integrates with chess engines.</p>
      </header>

      <main className="grid md:grid-cols-3 gap-12">
        
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="h2 mb-3">Problem</h2>
            <p className="text-zinc-300 leading-relaxed">
              Most automatic chessboards are noisy, slow, or rely on bulky, visible robotics. The goal was to create a board that felt seamless and magical, with hidden mechanics that could sense and move pieces smoothly across the board as if by itself.
            </p>
          </section>
          <section>
            <h2 className="h2 mb-3">Approach</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The system was designed as a thin, self-contained unit. A 2-axis CoreXY gantry with an electromagnet moves silently beneath the board&apos;s surface to position pieces. Key components included:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li><strong>Mechanics:</strong> CoreXY system with Trinamic silent stepper drivers for quiet, precise motion.</li>
              <li><strong>Sensing:</strong> An array of reed switches and hall effect sensors for homing and calibration, with an RFID reader to identify each unique piece.</li>
              <li><strong>Control:</strong> A central microcontroller running custom firmware to handle motion commands, sensing, and communication with a host application.</li>
              <li><strong>Interface:</strong> A simple web UI provides a digital twin of the physical board and connects to a standard chess engine (Stockfish) for move validation and AI play.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="h2 mb-3">Outcome</h2>
            <p className="text-zinc-300 leading-relaxed">
              The prototype successfully demonstrated all core features: silent and smooth piece movement, accurate game state tracking via RFID, and reliable engine integration. It serves as a robust platform for further development, including enclosure design and a public API for online play.
            </p>
          </section>
        </div>

        <aside className="md:col-span-1">
          <div className="sticky top-24 card p-6 space-y-4">
            <h3 className="font-semibold text-white">TL;DR</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><strong>Role:</strong> Designer, Engineer</li>
              <li><strong>Tools:</strong> Fusion 360, Marlin/C++, Python (Flask), RFID</li>
              <li><strong>Year:</strong> 2024</li>
              <li className="pt-2 border-t border-zinc-800/50">CoreXY gantry with electromagnet</li>
              <li>Silent Trinamic stepper drivers</li>
              <li>RFID for piece identification</li>
              <li>Web-based engine integration</li>
            </ul>
          </div>
        </aside>

      </main>
    </div>
  );
}